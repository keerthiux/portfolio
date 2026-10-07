// Captures a comprehensive set of NexoraCRM reference screenshots for the case study,
// covering dashboard, appointments (mixed statuses), calendar, patients, payments,
// settings, doctors and services — using the rich demo dataset already seeded.
// Credentials come from env only.
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';

const EMAIL = process.env.NEXORA_EMAIL;
const PASSWORD = process.env.NEXORA_PASSWORD;
if (!EMAIL || !PASSWORD) {
  console.error('Set NEXORA_EMAIL and NEXORA_PASSWORD env vars before running this script.');
  process.exit(1);
}

const OUT_DIR = path.resolve('case-study-assets/nexora/screens');
await mkdir(OUT_DIR, { recursive: true });

const HIDE_CSS = `
  [class*="toast"], [class*="Toast"], [class*="banner"], [class*="Banner"],
  [class*="cookie"], [class*="Cookie"], [id*="intercom"], [class*="chat-widget"] {
    display: none !important;
  }
`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });

const shoot = async (name, fullPage = false) => {
  await page.waitForLoadState('networkidle');
  await page.addStyleTag({ content: HIDE_CSS });
  await page.waitForTimeout(400);
  const file = path.join(OUT_DIR, `${name}.png`);
  await page.screenshot({ path: file, fullPage });
  console.log('Saved', file);
};

await page.goto('https://nexoracrm.co/admin/login', { waitUntil: 'networkidle' });
await page.fill('input[name="email"]', EMAIL);
await page.fill('input[name="password"]', PASSWORD);
await Promise.all([page.waitForNavigation({ waitUntil: 'networkidle' }), page.click('button:has-text("Sign In")')]);

await shoot('01-dashboard');

await page.locator('aside a, nav a').filter({ hasText: 'Appointments' }).first().click();
await shoot('02-appointments');

await page.locator('a,button').filter({ hasText: 'Calendar View' }).first().click();
await page.waitForTimeout(600);
await shoot('03-calendar');

await page.locator('aside a, nav a').filter({ hasText: 'Patients' }).first().click();
await shoot('04-patients');

await page.locator('aside a, nav a').filter({ hasText: 'Payments' }).first().click();
await shoot('05-payments');

await page.locator('aside a, nav a').filter({ hasText: 'Doctors' }).first().click();
await shoot('06-doctors');

await page.locator('aside a, nav a').filter({ hasText: 'Services' }).first().click();
await shoot('07-services');

await page.locator('aside a, nav a').filter({ hasText: 'Settings' }).first().click();
await shoot('08-settings');

console.log('Done. Review screenshots in', OUT_DIR, 'before using them.');
await browser.close();
