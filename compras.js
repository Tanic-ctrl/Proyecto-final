import page from './pageModel';
import { data } from './data';

fixture('Compras e2e')
    .page('http://automationpractice.com/');

test('Categoría general - Comprar una blusa con bank wire', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.blouse_option)
        .expect(page.blouse_page.exists).ok()
        .takeScreenshot()
    await t
        .click(page.addToCart_button)
        .expect(page.itemCartSuccess_text.exists).ok()
        .takeScreenshot()
    await t
        .click(page.proceedCheckout_button)
        .expect(page.cartSummary_page.exists).ok()
        .takeScreenshot()

    await t
        .click(page.summaryProceedCheckout_button)
        .expect(page.signIn_page.exists).ok()

    await t
        .typeText(page.emailRegistered_input, data.emailCart)
        .expect(page.emailRegistered_input.value).contains(data.emailCart)

    await t
        .typeText(page.pwdRegistered_input, data.passwordCart)
        .expect(page.pwdRegistered_input.value).contains(data.passwordCart)

    await t
        .click(page.signIn_btn)
        .expect(page.summaryAddress_page.innerText).contains('ADDRESSES')

    await t
        .click(page.summaryProceedCheckout2_button)
        .expect(page.summaryShipping_page.innerText).contains('SHIPPING')

    await t
        .click(page.summaryTerms_checkbox)
        .expect(page.summaryTerms_checkbox.checked).ok()

    await t
        .click(page.summaryProceedCheckout3_button)
        .expect(page.paymentSummary_page.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')

    await t
        .click(page.paymentBank_option)
        .expect(page.orderSummary_page.innerText).contains('ORDER SUMMARY')
        .takeScreenshot()
    await t
        .click(page.confirmOrder_button)
        .expect(page.orderConfirmation_page.innerText).contains('ORDER CONFIRMATION')
        .takeScreenshot()
});

test('Categoría general - Comprar una blusa con bank by check', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.blouse_option)
        .expect(page.blouse_page.exists).ok()
        .takeScreenshot()
    await t
        .click(page.addToCart_button)
        .expect(page.itemCartSuccess_text.exists).ok()
        .takeScreenshot()
    await t
        .click(page.proceedCheckout_button)
        .expect(page.cartSummary_page.exists).ok()

    await t
        .click(page.summaryProceedCheckout_button)
        .expect(page.signIn_page.exists).ok()

    await t
        .typeText(page.emailRegistered_input, data.emailCart)
        .expect(page.emailRegistered_input.value).contains(data.emailCart)

    await t
        .typeText(page.pwdRegistered_input, data.passwordCart)
        .expect(page.pwdRegistered_input.value).contains(data.passwordCart)

    await t
        .click(page.signIn_btn)
        .expect(page.summaryAddress_page.innerText).contains('ADDRESSES')

    await t
        .click(page.summaryProceedCheckout2_button)
        .expect(page.summaryShipping_page.innerText).contains('SHIPPING')

    await t
        .click(page.summaryTerms_checkbox)
        .expect(page.summaryTerms_checkbox.checked).ok()

    await t
        .click(page.summaryProceedCheckout3_button)
        .expect(page.paymentSummary_page.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')

    await t
        .click(page.paymentCheck_option)
        .expect(page.orderSummary_page.innerText).contains('ORDER SUMMARY')
        .takeScreenshot()
    await t
        .click(page.confirmOrder_button)
        .expect(page.orderConfirmation_page.innerText).contains('ORDER CONFIRMATION')
        .takeScreenshot()
    await t
        .expect(page.OrderConfirmation_alertSuccess.exists).ok()
        .expect(page.OrderConfirmation_alertSuccess.innerText).contains('Your order on My Store is complete.')
        .takeScreenshot()
});

test('Categoría tops - Comprar 2 T-Shirt con bank by check (usuario registrado)', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.emailRegistered_input, data.emailCart)
        .expect(page.emailRegistered_input.value).contains(data.emailCart)

    await t
        .typeText(page.pwdRegistered_input, data.passwordCart)
        .expect(page.pwdRegistered_input.value).contains(data.passwordCart)

    await t
        .click(page.signIn_btn)
        .expect(page.myAccount_page.exists, { speed: 0.1 }).ok()
        .expect(page.customerName.innerText).eql('Tania QA')

    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.tops_option)
        .expect(page.tops_page.exists).ok()

    await t
        .click(page.fadedShort_option)
        .expect(page.fadedShort_page.exists).ok()
        .takeScreenshot()
    await t
        .click(page.addQuantity_button, { speed: 0.1 })
        .expect(page.quatity_input.value).eql('2')
        .takeScreenshot()
    await t
        .click(page.addToCart_button)
        .expect(page.itemCartSuccess_text.exists).ok()
        .takeScreenshot()
    await t
        .click(page.proceedCheckout_button)
        .expect(page.cartSummary_page.exists).ok()

    await t
        .click(page.summaryProceedCheckout_button)
        .expect(page.summaryAddress_page.innerText).contains('ADDRESSES')

    await t
        .click(page.summaryProceedCheckout2_button)
        .expect(page.summaryShipping_page.innerText).contains('SHIPPING')

    await t
        .click(page.summaryTerms_checkbox)
        .expect(page.summaryTerms_checkbox.checked).ok()

    await t
        .click(page.summaryProceedCheckout3_button)
        .expect(page.paymentSummary_page.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')

    await t
        .click(page.paymentCheck_option)
        .expect(page.orderSummary_page.innerText).contains('ORDER SUMMARY')
        .takeScreenshot()
    await t
        .click(page.confirmOrder_button)
        .expect(page.orderConfirmation_page.innerText).contains('ORDER CONFIRMATION')
        .takeScreenshot()
    await t
        .expect(page.OrderConfirmation_alertSuccess.exists).ok()
        .expect(page.OrderConfirmation_alertSuccess.innerText).contains('Your order on My Store is complete.')
        .takeScreenshot()
});

test('Categoría tops - Comprar T-Shirt Mediana con bank by check (usuario registrado)', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.emailRegistered_input, data.emailCart)
        .expect(page.emailRegistered_input.value).contains(data.emailCart)

    await t
        .typeText(page.pwdRegistered_input, data.passwordCart)
        .expect(page.pwdRegistered_input.value).contains(data.passwordCart)

    await t
        .click(page.signIn_btn)
        .expect(page.myAccount_page.exists, { speed: 0.1 }).ok()
        .expect(page.customerName.innerText).eql('Tania QA')

    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.tops_option)
        .expect(page.tops_page.exists).ok()

    await t
        .click(page.fadedShort_option)
        .expect(page.fadedShort_page.exists).ok()
        .takeScreenshot()
    await t
        .click(page.size_list)
        .click(page.size_option)
        .expect(page.size_option.innerText).eql('M')
        .takeScreenshot()
    await t
        .click(page.addToCart_button)
        .expect(page.itemCartSuccess_text.exists).ok()
        .takeScreenshot()
    await t
        .click(page.proceedCheckout_button)
        .expect(page.cartSummary_page.exists).ok()

    await t
        .click(page.summaryProceedCheckout_button)
        .expect(page.summaryAddress_page.innerText).contains('ADDRESSES')

    await t
        .click(page.summaryProceedCheckout2_button)
        .expect(page.summaryShipping_page.innerText).contains('SHIPPING')

    await t
        .click(page.summaryTerms_checkbox)
        .expect(page.summaryTerms_checkbox.checked).ok()

    await t
        .click(page.summaryProceedCheckout3_button)
        .expect(page.paymentSummary_page.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')

    await t
        .click(page.paymentCheck_option)
        .expect(page.orderSummary_page.innerText).contains('ORDER SUMMARY')
        .takeScreenshot()
    await t
        .click(page.confirmOrder_button)
        .expect(page.orderConfirmation_page.innerText).contains('ORDER CONFIRMATION')
        .takeScreenshot()
    await t
        .expect(page.OrderConfirmation_alertSuccess.exists).ok()
        .expect(page.OrderConfirmation_alertSuccess.innerText).contains('Your order on My Store is complete.')
        .takeScreenshot()
});

test('Categoría tops - Comprar 15 T-Shirt azul con bank wire (usuario registrado)', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.emailRegistered_input, data.emailCart)
        .expect(page.emailRegistered_input.value).contains(data.emailCart)

    await t
        .typeText(page.pwdRegistered_input, data.passwordCart)
        .expect(page.pwdRegistered_input.value).contains(data.passwordCart)

    await t
        .click(page.signIn_btn)
        .expect(page.myAccount_page.exists, { speed: 0.1 }).ok()
        .expect(page.customerName.innerText).eql('Tania QA')

    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.tops_option)
        .expect(page.tops_page.exists).ok()

    await t
        .click(page.fadedShort_option)
        .expect(page.fadedShort_page.exists).ok()
        .takeScreenshot()
    await t
        .typeText(page.quatity_input, data.dataQuantity)
        .expect(page.quatity_input.value).eql('15')
        .takeScreenshot()
    await t
        .click(page.size_list)
        .click(page.sizeLarge_option)
        .expect(page.sizeLarge_option.innerText).eql('L')
        .takeScreenshot()
    await t
        .click(page.color_option)
        .expect(page.color_option.visible).ok()
        .takeScreenshot()
    await t
        .click(page.addToCart_button)
        .expect(page.itemCartSuccess_text.exists).ok()
        .takeScreenshot()
    await t
        .click(page.proceedCheckout_button)
        .expect(page.cartSummary_page.exists).ok()

    await t
        .click(page.summaryProceedCheckout_button)
        .expect(page.summaryAddress_page.innerText).contains('ADDRESSES')

    await t
        .click(page.summaryProceedCheckout2_button)
        .expect(page.summaryShipping_page.innerText).contains('SHIPPING')

    await t
        .click(page.summaryTerms_checkbox)
        .expect(page.summaryTerms_checkbox.checked).ok()

    await t
        .click(page.summaryProceedCheckout3_button)
        .expect(page.paymentSummary_page.innerText).contains('PLEASE CHOOSE YOUR PAYMENT METHOD')

    await t
        .click(page.paymentBank_option)
        .expect(page.orderSummary_page.innerText).contains('ORDER SUMMARY')
        .takeScreenshot()
    await t
        .click(page.confirmOrder_button)
        .expect(page.orderConfirmation_page.innerText).contains('ORDER CONFIRMATION')
        .takeScreenshot()
});