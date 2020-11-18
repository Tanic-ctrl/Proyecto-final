import page from './pageModel';
import { data } from './data';

fixture('Pruebas de módulo Mi cuenta')
    .page('http://automationpractice.com/');

test('Crear una cuenta', async t => {
    await t
        .click(page.signIn_link)
    console.log("Correo:", data.email)
    console.log("firstName:", data.firstName)
    console.log("lastName:", data.lastName)

    await t
        .expect(page.signIn_page.innerText).contains('AUTHENTICATION')
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        .takeScreenshot()

    await t
        .expect(page.email_form.value).contains(data.email)
        .expect(page.email_form.hasAttribute('readonly')).notOk()

    await t
        .typeText(page.firstName_input, data.firstName)
        .typeText(page.lastName_input, data.lastName)

    await t
        .expect(page.firstName_Address.value).contains(data.firstName)
        .expect(page.lastName_Address.value).contains(data.lastName)
        .takeScreenshot()

    await t
        .typeText(page.pwd_input, data.password)

    await t
        .typeText(page.address_input, data.pbox)
        .expect(page.address_input.value).contains(data.pbox)

    await t
        .typeText(page.city_select, data.city)
        .expect(page.city_select.value).contains(data.city)

    await t
        .click(page.state_list)
        .click(page.state_option)
        .expect(page.state_option.innerText).eql(data.state)

    await t
        .typeText(page.postcode, data.postCode)
        .expect(page.postcode.value).eql(data.postCode)

    await t
        .click(page.country_list)
        .click(page.country_option)
        .expect(page.country_option.innerText).eql(data.country)

    await t
        .typeText(page.mobileNumber_input, data.mobile)
        .expect(page.mobileNumber_input.value).eql(data.mobile)

    await t
        .click(page.submit_button)
        .expect(page.myAccount_page.exists).ok()
        .takeScreenshot()
});

test('Iniciar sesión con usuario registrado', async t => {
    await t
        .click(page.signIn_link)

    console.log("Correo:", data.email)
    console.log("Password:", data.password)

    await t
        .typeText(page.emailRegistered_input, data.email)
        .expect(page.emailRegistered_input.value).contains(data.email)

    await t
        .typeText(page.pwdRegistered_input, data.password)
        .expect(page.pwdRegistered_input.value).contains(data.password)
        .takeScreenshot()

    await t
        .click(page.signIn_btn)
        .expect(page.myAccount_page.exists).ok()
        .expect(page.customerName.innerText).eql('Tania Radilla')
        .takeScreenshot()
});

test('Cerrar sesión', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.emailRegistered_input, data.email)
        .expect(page.emailRegistered_input.value).contains(data.email)

    await t
        .typeText(page.pwdRegistered_input, data.password)
        .expect(page.pwdRegistered_input.value).contains(data.password)

    await t
        .click(page.signIn_btn)
        .expect(page.myAccount_page.exists).ok()
        .expect(page.customerName.innerText).eql('Tania Radilla')
        .takeScreenshot()

    await t
        .click(page.signOut_link)
        .expect(page.signOut_page.innerText).contains('AUTHENTICATION')
        .takeScreenshot()
});

test('Crear cuenta con un correo existente', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.email_input, data.email)
        .click(page.createAccount_btn)
        .takeScreenshot()

    await t
        .expect(page.createrError_msg.exists).ok()
        .takeScreenshot()

    console.log("Correo:", data.email)
});

test('Recuperar contraseña con un correo válido', async t => {
    await t
        .click(page.signIn_link)

    await t
        .typeText(page.emailRegistered_input, data.email)
        .expect(page.emailRegistered_input.value).contains(data.email)
        .takeScreenshot()

    await t
        .typeText(page.pwdRegistered_input, data.passwordWrong)
        .expect(page.pwdRegistered_input.value).contains(data.passwordWrong)
        .takeScreenshot()
    await t
        .click(page.forgotPwd_link)
        .expect(page.forgotPassword_page.exists).ok()
        .takeScreenshot()

    await t
        .typeText(page.emailRecovery_input, data.email)
        .expect(page.emailRecovery_input.value).contains(data.email)
        .takeScreenshot()

    await t
        .click(page.retrievePassword_btn)
        .expect(page.passwordRecoverySuccess_alert.exists).ok()
        .takeScreenshot()
});