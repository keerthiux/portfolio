// Sets a mix of appointment statuses (Completed with payment, Rescheduled) on the
// seeded demo appointments so the dashboard, calendar, appointments and payments
// screens show varied data. Leaves the rest as Booked (upcoming).
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

const goAppointments = async () => {
  await page.locator('aside a, nav a').filter({ hasText: 'Appointments' }).first().click();
  await page.waitForLoadState('networkidle');
};

const openAppointment = async (patientName) => {
  const name = page.locator(`text=${patientName}`).first();
  const row = name.locator('xpath=ancestor::div[.//span[text()="Take Action"]][1]');
  await row.locator('span:has-text("Take Action")').click({ force: true });
  await page.waitForLoadState('networkidle');
};

const completeWithPayment = async ({ doctor, service, amount }) => {
  const sel = page.locator('label:has-text("Select Status")').locator('xpath=following::select[1]');
  await sel.selectOption('complete');
  await page.waitForTimeout(400);

  await page.locator('label:has-text("Doctor")').locator('xpath=following::select[1]').selectOption({ label: doctor });
  const serviceField = page.locator('label:has-text("Service")').locator('xpath=following::input[1]');
  await serviceField.fill(service);
  await page.waitForTimeout(300);
  const option = page.locator(`li:has-text("${service}"), [role="option"]:has-text("${service}")`).first();
  if (await option.count()) await option.click();

  const recordPayment = page.locator('text=Record a payment');
  if (!(await page.locator('input[type="checkbox"]:checked').count())) {
    await recordPayment.click();
  }
  await page.waitForTimeout(300);
  await page.locator('label:has-text("Amount")').locator('xpath=following::input[1]').fill(String(amount));
  await page.locator('label:has-text("Payment Mode")').locator('xpath=following::select[1]').selectOption({ index: 1 });
  await page.locator('label:has-text("Payment Status")').locator('xpath=following::select[1]').selectOption({ index: 1 });

  await page.locator('button:text-is("Complete Appointment"):visible').click();
  await page.waitForTimeout(1200);
};

const reschedule = async ({ date, time, reason }) => {
  const sel = page.locator('label:has-text("Select Status")').locator('xpath=following::select[1]');
  await sel.selectOption('reschedule');
  await page.waitForTimeout(400);
  const reasonField = page.locator('input[placeholder="Reason"]:visible').first();
  await reasonField.fill(reason);

  const [dd, mm, yyyy] = date.split('-');
  await page.evaluate(({ dd, mm, yyyy }) => {
    const input = document.querySelector('input[name="appointment_date"]');
    if (input) {
      input.value = `${yyyy}-${mm}-${dd}`;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, { dd, mm, yyyy });

  const timeField = page.locator('input[name="appointment_time"]:visible').last();
  await timeField.fill('');
  await timeField.type(time, { delay: 20 });
  await page.keyboard.press('Escape').catch(() => {});

  await page.locator('button:text-is("Reschedule"):visible').last().click();
  await page.waitForTimeout(1200);
};

const dayOffset = (n) => {
  const d = new Date(Date.now() + n * 86400000);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

const completions = [
  { name: 'Ananya Demo', doctor: 'Dr. Asha Demo', service: 'Dental Checkup', amount: 500 },
  { name: 'Rohan Sample', doctor: 'Dr. Vikram Sample', service: 'Braces Consultation', amount: 600 },
  { name: 'Ishita Demo', doctor: 'Dr. Asha Demo', service: 'Teeth Cleaning', amount: 800 },
];

for (const c of completions) {
  await goAppointments();
  await openAppointment(c.name);
  await completeWithPayment(c);
  console.log('Completed + paid:', c.name);
}

const reschedules = [
  { name: 'Dev Sample', date: dayOffset(6), time: '15:00', reason: 'Patient requested a later slot' },
  { name: 'Priya Demo', date: dayOffset(7), time: '11:00', reason: 'Doctor unavailable, moved to next week' },
];

for (const r of reschedules) {
  await goAppointments();
  await openAppointment(r.name);
  await reschedule(r);
  console.log('Rescheduled:', r.name);
}

console.log('Status mix applied.');
await browser.close();
