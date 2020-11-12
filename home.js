import page from './pageModel';
import { data } from './data';

fixture('Pruebas página Home')
    .page('http://automationpractice.com/');

test('Logo se carga correctamente', async t => {
    await t
        .expect(page.logo.exists).ok()
        .click(page.logo)
        .expect(page.logo.exists).ok()
});

test('Menú superior se carga correctamente', async t => {
    await t
        .expect(page.top_menu.exists).ok()
        .click(page.top_menu)

    await t
        .expect(page.women_topOption.exists).ok()
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .expect(page.dresses_topOption.exists).ok()
        .click(page.dresses_topOption)
        .expect(page.dresses_page.exists).ok()

    await t
        .expect(page.tShirts_topOption.exists).ok()
        .click(page.tShirts_topOption)
        .expect(page.tShirts_page.exists).ok()
});

test('Opción Sign in se carga correctamente', async t => {
    await t
        .expect(page.signIn_link.exists).ok()
        .click(page.signIn_link)
        .expect(page.signIn_page.innerText).contains('AUTHENTICATION')
});

test('Opción Cart se carga correctamente', async t => {
    await t
        .expect(page.cart_option.exists).ok()
        .click(page.cart_option)
        .expect(page.cart_page.innerText).contains('SHOPPING-CART SUMMARY')
});

test('Features Popular y Best Seller se cargan correctamente', async t => {
    await t
        .expect(page.popular_homeFeature.exists).ok()
        .click(page.popular_homeFeature)

    await t
        .expect(page.bestSeller_homeFeature.exists).ok()
        .click(page.bestSeller_homeFeature)
});

test('Opción My Account en el footer se carga correctamente', async t => {
    await t
        .expect(page.footer.exists).ok()

    await t
        .expect(page.myAccount_footerOption.exists).ok()
        .click(page.myAccount_footerOption)
        .expect(page.signIn_page.innerText).contains('AUTHENTICATION')
});