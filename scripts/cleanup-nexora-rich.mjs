// Removes all demo data seeded for the richer case-study screenshots: patients,
// services, doctors (via native confirm dialogs) and cancels any appointments
// still in a cancellable state. Credentials come from env only.
import { chromium } from 'playwright';

const EMAIL = process.env.NEXORA_EMAIL;
const PASSWORD = process.env.NEXORA_PASSWORD;
if (!EMAIL || !PASSWORD) {
  console.error('Set NEXORA_EMAIL and NEXORA_PASSWORD env vars before running this script.');
  process.exit(1);
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
page.on('dialog', async (d) => {
  console.log('DIALOG:', d.message());
  await d.accept();
});

await page.goto('https://nexoracrm.co/admin/login', { waitUntil: 'networkidle' });
await page.fill('input[name="email"]', EMAIL);
await page.fill('input[name="password"]', PASSWORD);
await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle' }), page.click('button:has-text("Sign In")')]);

const goNav = async (text) => {
  await page.locator('aside a, nav a').filter({ hasText: text }).first().click();
  await page.waitForLoadState('networkidle');
};

// --- Cancel any still-Booked appointments ---
await goNav('Appointments');
let guard = 0;
while (guard < 20) {
  guard++;
  const takeActionBtn = page.locator('span:has-text("Take Action")').first();
  if (!(await takeActionBtn.count())) break;
  await takeActionBtn.click({ force: true });
  await page.waitForLoadState('networkidle');
  const sel = page.locator('label:has-text("Select Status")').locator('xpath=following::select[1]');
  await sel.selectOption('cancel');
  await page.waitForTimeout(400);
  const reasonField = page.locator('input[placeholder="Reason"]:visible').first();
  await reasonField.fill('Demo data cleanup');
  await page.locator('button:text-is("Cancel"):visible').last().click();
  await page.waitForTimeout(1000);
  await goNav('Appointments');
}
console.log('Appointments cancelled where possible.');

// --- Patients (bulk delete) ---
await goNav('Patients');
let selectAll = page.locator('label[for="mass_action_select_all_records"]').first();
if (await selectAll.count()) {
  await selectAll.click();
  await page.waitForTimeout(400);
  const deleteBtn = page.locator('button:has-text("Delete")').last();
  if (await deleteBtn.count()) {
    await deleteBtn.click();
    await page.waitForTimeout(400);
    await page.locator('button:text-is("Agree")').click().catch(() => {});
    await page.waitForTimeout(1200);
  }
}
console.log('Patients deleted.');

// --- Services (bulk delete) ---
await goNav('Services');
selectAll = page.locator('label[for="mass_action_select_all_records"]').first();
if (await selectAll.count()) {
  await selectAll.click();
  await page.waitForTimeout(400);
  const deleteBtn = page.locator('button:has-text("Delete")').last();
  if (await deleteBtn.count()) {
    await deleteBtn.click();
    await page.waitForTimeout(400);
    await page.locator('button:text-is("Agree")').click().catch(() => {});
    await page.waitForTimeout(1200);
  }
}
console.log('Services deleted.');

// --- Doctors (per-row delete with native confirm dialogs) ---
await goNav('Doctors');
guard = 0;
while (guard < 10) {
  guard++;
  const del = page.locator('.js-doctor-delete').first();
  if (!(await del.count())) break;
  await del.click();
  await page.waitForTimeout(1000);
}
console.log('Doctors deleted.');

await page.screenshot({ path: '/tmp/cleanup-rich-final.png' });
await browser.close();
console.log('Cleanup complete.');
