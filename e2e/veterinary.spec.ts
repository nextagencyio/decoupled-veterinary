import { test, expect } from '@playwright/test'

test.describe('Veterinary Starter - Non-Demo Mode', () => {

  test('homepage loads with veterinary content', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toContainText('Compassionate Care')
    // Stats section should render
    await expect(page.locator('body')).toContainText('Pets Treated')
    // CTA section
    await expect(page.locator('body')).toContainText('Book Your Pet')
  })

  test('services listing page shows all services', async ({ page }) => {
    await page.goto('/services')
    await expect(page.locator('h1')).toContainText('Services')
    await expect(page.locator('body')).toContainText('Wellness Exams')
    await expect(page.locator('body')).toContainText('Surgical Services')
    await expect(page.locator('body')).toContainText('Pet Dental Care')
  })

  test('service detail page renders content', async ({ page }) => {
    await page.goto('/services/wellness-exams')
    await expect(page.locator('h1')).toContainText('Wellness Exams')
    await expect(page.locator('body')).toContainText('Comprehensive physical examination')
  })

  test('team listing page shows all providers', async ({ page }) => {
    await page.goto('/team')
    await expect(page.locator('h1')).toContainText('Providers')
    await expect(page.locator('body')).toContainText('Dr. Sofia Martinez')
    await expect(page.locator('body')).toContainText('Dr. Emeka Okafor')
    await expect(page.locator('body')).toContainText('Dr. Yuki Tanaka')
  })

  test('provider detail page renders content', async ({ page }) => {
    await page.goto('/team/dr-sofia-martinez')
    await expect(page.locator('h1')).toContainText('Dr. Sofia Martinez')
    await expect(page.locator('body')).toContainText('founded Pawsitive Care')
  })

  test('resources listing page shows all resources', async ({ page }) => {
    await page.goto('/resources')
    await expect(page.locator('h1')).toContainText('Pet Resources')
    await expect(page.locator('body')).toContainText('Puppy Owner')
    await expect(page.locator('body')).toContainText('Indoor Cat')
    await expect(page.locator('body')).toContainText('Summer Safety')
  })

  test('resource detail page renders content', async ({ page }) => {
    await page.goto('/resources/new-puppy-owners-guide')
    await expect(page.locator('h1')).toContainText('Puppy Owner')
    await expect(page.locator('body')).toContainText('Congratulations')
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    const nav = page.locator('header')
    await expect(nav).toBeVisible()
  })

  test('about page loads', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })
})
