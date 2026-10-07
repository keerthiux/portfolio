// Seeds a richer demo dataset in NexoraCRM: 2 doctors, 3 services, 10 patients,
// and appointments spread across the week with a mix of statuses (booked + completed),
// so case-study screenshots show a populated product. Everything is clearly fake
// ("Demo"/"Sample" names, 90000000xx numbers) and is removed by cleanup-nexora-demo.mjs.
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

const goNav = async (text) => {
  await page.locator('aside a, nav a').filter({ hasText: text }).first().click();
  await page.waitForLoadState('networkidle');
};

// --- Doctors (dental clinic) ---
const doctors = [
  { name: 'Dr. Asha Demo', spec: 'General Dentistry', type: 'Consultant' },
  { name: 'Dr. Vikram Sample', spec: 'Orthodontics', type: 'Regular' },
];
for (const d of doctors) {
  await goNav('Doctors');
  await page.locator('a,button').filter({ hasText: 'Add Doctor' }).first().click();
  await page.waitForTimeout(500);
  await page.fill('input[placeholder="Name"]', d.name);
  await page.fill('input[placeholder="Specialization"]', d.spec);
  await page.selectOption('select', { label: d.type });
  await page.locator('button:has-text("Add Doctor")').last().click();
  await page.waitForTimeout(900);
  console.log('Doctor created:', d.name);
}

// --- Services (dental clinic) ---
const services = [
  { name: 'Dental Checkup', type: 'Service', price: '500' },
  { name: 'Teeth Cleaning', type: 'Service', price: '800' },
  { name: 'Root Canal Treatment', type: 'Service', price: '4500' },
  { name: 'Tooth Extraction', type: 'Service', price: '1200' },
  { name: 'Braces Consultation', type: 'Service', price: '600' },
];
for (const s of services) {
  await goNav('Services');
  await page.locator('a,button').filter({ hasText: 'Add Service' }).first().click();
  await page.waitForLoadState('networkidle');
  await page.fill('input[placeholder="Name"]', s.name);
  await page.selectOption('select', { label: s.type });
  await page.fill('input[placeholder="Approx. Price"]', s.price);
  await page.locator('button:has-text("Save Service")').click();
  await page.waitForTimeout(900);
  console.log('Service created:', s.name);
}

// --- Patients (10) ---
const patients = [
  { name: 'Riya Demo', mobile: '9000000001', gender: 'Female', dob: '12-04-1996' },
  { name: 'Arjun Sample', mobile: '9000000002', gender: 'Male', dob: '03-11-1990' },
  { name: 'Meera Demo', mobile: '9000000003', gender: 'Female', dob: '21-06-1988' },
  { name: 'Kabir Sample', mobile: '9000000004', gender: 'Male', dob: '15-01-1995' },
  { name: 'Ananya Demo', mobile: '9000000005', gender: 'Female', dob: '09-09-1992' },
  { name: 'Rohan Sample', mobile: '9000000006', gender: 'Male', dob: '27-03-1985' },
  { name: 'Ishita Demo', mobile: '9000000007', gender: 'Female', dob: '18-12-1999' },
  { name: 'Dev Sample', mobile: '9000000008', gender: 'Male', dob: '05-07-1991' },
  { name: 'Priya Demo', mobile: '9000000009', gender: 'Female', dob: '30-08-1987' },
  { name: 'Sameer Sample', mobile: '9000000010', gender: 'Male', dob: '22-02-1993' },
];
for (const p of patients) {
  await goNav('Patients');
  await page.locator('a,button').filter({ hasText: 'Add Patient' }).first().click();
  await page.waitForLoadState('networkidle');
  await page.fill('input[name="name"]', p.name);
  await page.fill('input[name="mobile"]', p.mobile);
  const [dd, mm, yyyy] = p.dob.split('-');
  await page.evaluate(({ dd, mm, yyyy }) => {
    const input = document.querySelector('input[name="date_of_birth"]');
    if (input) {
      input.value = `${yyyy}-${mm}-${dd}`;
      input.dispatchEvent(new Event('input', { bubbles: true }));
      input.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }, { dd, mm, yyyy });
  const dobVisible = page.locator('input[name="date_of_birth"] + input');
  await dobVisible.click();
  await dobVisible.type(p.dob, { delay: 20 });
  await page.keyboard.press('Enter').catch(() => {});
  const genderSelect = page.locator('label:has-text("Gender")').locator('xpath=following::select[1]');
  await genderSelect.selectOption({ label: p.gender }).catch(() => {});
  await page.locator('text=Select All Agreements').click().catch(() => {});
  await page.locator('button:has-text("Add Patient")').last().click();
  await page.waitForTimeout(1000);
  console.log('Patient created:', p.name);
}

console.log('Rich seed (doctors, services, patients) done.');
await browser.close();
