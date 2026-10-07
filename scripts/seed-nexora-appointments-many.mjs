// Books multiple demo appointments across the week for the seeded demo patients,
// spread across services/doctors so the calendar and appointments list look populated.
// Credentials come from env only — never hardcode or log them.
import { chromium } from 'playwright';

const EMAIL = process.env.NEXORA_EMAIL;
const PASSWORD = process.env.NEXORA_PASSWORD;
if (!EMAIL || !PASSWORD) {
  console.error('Set NEXORA_EMAIL and NEXORA_PASSWORD env vars before running this script.');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto('https://nexoracrm.co/admin/login', { waitUntil: 'networkidle' });
await page.fill('input[name="email"]', EMAIL);
await page.fill('input[name="password"]', PASSWORD);
await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle' }), page.click('button:has-text("Sign In")')]);

const dayOffset = (n) => {
  const d = new Date(Date.now() + n * 86400000);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

// mobile, service, offset (days from today, negative = past), time, reason
const bookings = [
  { mobile: '9000000001', service: 'Dental Checkup', offset: -2, time: '09:30', reason: 'Routine checkup' },
  { mobile: '9000000002', service: 'Teeth Cleaning', offset: -1, time: '11:00', reason: 'Scaling & polishing' },
  { mobile: '9000000003', service: 'Root Canal Treatment', offset: -1, time: '14:00', reason: 'Tooth pain follow-up' },
  { mobile: '9000000004', service: 'Tooth Extraction', offset: 0, time: '10:00', reason: 'Wisdom tooth removal' },
  { mobile: '9000000005', service: 'Dental Checkup', offset: 0, time: '15:30', reason: 'Routine checkup' },
  { mobile: '9000000006', service: 'Braces Consultation', offset: 1, time: '09:00', reason: 'Orthodontic consult' },
  { mobile: '9000000007', service: 'Teeth Cleaning', offset: 1, time: '12:30', reason: 'Scaling & polishing' },
  { mobile: '9000000008', service: 'Dental Checkup', offset: 2, time: '10:30', reason: 'Routine checkup' },
  { mobile: '9000000009', service: 'Root Canal Treatment', offset: 3, time: '11:30', reason: 'Tooth pain' },
  { mobile: '9000000010', service: 'Braces Consultation', offset: 4, time: '16:00', reason: 'Orthodontic consult' },
];

for (const b of bookings) {
  await page.goto('https://nexoracrm.co/admin/appointments/create', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.getByText('Existing Patient', { exact: true }).click();
  await page.waitForSelector('input[placeholder="Enter mobile number"]', { timeout: 10000 });
  await page.fill('input[placeholder="Enter mobile number"]', b.mobile);
  await page.locator('button:has-text("Find")').click();
  await page.waitForTimeout(900);

  await page.locator('label:has-text("Reason for Visit")').locator('xpath=following::input[1]').fill(b.reason);
  await page.locator('label:has-text("Service")').locator('xpath=following::select[1]').selectOption({ label: b.service }).catch(() => {});

  const dateStr = dayOffset(b.offset);
  await page.locator('input[name="appointment_date"] + input').type(dateStr, { delay: 20 });
  await page.keyboard.press('Escape').catch(() => {});
  await page.locator('input[placeholder="HH:MM"]').last().type(b.time, { delay: 20 });
  await page.keyboard.press('Escape').catch(() => {});

  await page.locator('button:has-text("Book Appointment")').last().click();
  await page.waitForTimeout(1200);
  console.log('Booked:', b.mobile, b.service, dateStr, b.time);
}

console.log('All appointments booked.');
await browser.close();
