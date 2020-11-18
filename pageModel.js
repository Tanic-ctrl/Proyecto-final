import { Selector } from 'testcafe';

class Page {
    constructor() {
        //Página Home   
        this.logo = Selector('#header_logo > a > img')
        this.top_menu = Selector('#block_top_menu > ul')
        this.women_topOption = Selector('#block_top_menu > ul > li:nth-child(1) > a')
        this.women_page = Selector('#center_column > h1 > span.cat-name')
        this.dresses_topOption = Selector('#block_top_menu > ul > li:nth-child(2) > a')
        this.dresses_page = Selector('#center_column > h1 > span.cat-name')
        this.tShirts_topOption = Selector('#block_top_menu > ul > li:nth-child(3) > a')
        this.tShirts_page = Selector('#center_column > h1 > span.cat-name')
        this.signIn_page = Selector('#center_column > h1')
        this.cart_option = Selector('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a')
        this.cart_page = Selector('#cart_title')
        this.popular_homeFeature = Selector('#home-page-tabs > li.active > a')
        this.bestSeller_homeFeature = Selector('#home-page-tabs > li:nth-child(2) > a')
        this.footer = Selector('#page > div.footer-container')
        this.myAccount_footerOption = Selector('#footer > div > section:nth-child(7) > h4 > a')
            //Módulo mi Cuenta
        this.signIn_link = Selector('a').withText('Sign in');
        this.email_input = Selector('#email_create');
        this.createAccount_btn = Selector('#SubmitCreate');
        this.firstName_input = Selector('#customer_firstname');
        this.lastName_input = Selector('#customer_lastname');
        this.email_form = Selector('#email');
        this.pwd_input = Selector('#passwd');
        this.firstName_Address = Selector('#firstname');
        this.lastName_Address = Selector('#lastname');
        this.address_input = Selector('#address1');
        this.city_select = Selector('#city');
        this.state_list = Selector('#id_state');
        this.state_option = Selector('option').withText('New York');
        this.postcode = Selector('#postcode');
        this.country_list = Selector('#id_country')
        this.country_option = Selector('option').withText('United States');
        this.mobileNumber_input = Selector('#phone_mobile')
        this.submit_button = Selector('#submitAccount')
        this.myAccount_page = Selector('h1').withText('MY ACCOUNT')
            //Cierre de sesión
        this.signOut_link = Selector('#header > div.nav > div > div > nav > div:nth-child(2) > a');
        this.customerName = Selector('#header > div.nav > div > div > nav > div:nth-child(1) > a > span')
        this.signOut_page = Selector('#center_column > h1')
            //Inicio de sesión con usuario registrado
        this.emailRegistered_input = Selector('#email')
        this.pwdRegistered_input = Selector('#passwd')
        this.signIn_btn = Selector('#SubmitLogin')
            //Creación de cuenta con usuario registrado
        this.createrError_msg = Selector('#create_account_error > ol > li')
            //Recuperación de contraseña con correo válido
        this.forgotPwd_link = Selector('a').withText('Forgot your password?')
        this.forgotPassword_page = Selector('h1').withText('FORGOT YOUR PASSWORD?')
        this.emailRecovery_input = Selector('#email')
        this.retrievePassword_btn = Selector('button').withText('Retrieve Password')
        this.passwordRecoverySuccess_alert = Selector('#center_column > div > p')
        this.passwordError_alert = Selector('#center_column > div.alert.alert-danger > ol > li')
        this.passwordError_msg = Selector('h1').withText('Authentication failed.')
            //Listado de productos
        this.tops_option = Selector('#categories_block_left > div > ul > li:nth-child(1) > a')
        this.tops_page = Selector('h1').withText('TOPS')
        this.productCount_text = Selector('#center_column > div.content_sortPagiBar.clearfix > div.top-pagination-content.clearfix > div.product-count')
        this.dresses_subOption = Selector('#subcategories > ul > li:nth-child(2) > div.subcategory-image > a > img')
        this.summerDresses_subOption = Selector('#subcategories > ul > li:nth-child(3) > div.subcategory-image > a > img')
        this.summerDresses_page = Selector('#center_column > h1 > span.cat-name')
        this.specials_link = Selector('a').withText('SPECIALS')
        this.priceDrop_page = Selector('h1').withText('PRICE DROP')
        this.printedSummerD_option = Selector('#center_column > ul > li:nth-child(5) > div > div.right-block > h5 > a')
        this.printedSummerD_page = Selector('h1').withText('Printed Summer Dress')
            //Compras
        this.blouse_option = Selector('#center_column > ul > li:nth-child(2) > div > div.right-block > h5 > a')
        this.blouse_page = Selector('h1').withText('Blouse')
        this.addToCart_button = Selector('#add_to_cart')
        this.itemCartSuccess_text = Selector('h2').withText('Product successfully added to your shopping cart')
        this.proceedCheckout_button = Selector('a').withText('Proceed to checkout')
        this.cartSummary_page = Selector('h1').withText('SHOPPING-CART SUMMARY')
        this.summaryProceedCheckout_button = Selector('#center_column > p.cart_navigation.clearfix > a.button.btn.btn-default.standard-checkout.button-medium')
        this.summaryAddress_page = Selector('#center_column > h1')
        this.summaryProceedCheckout2_button = Selector('button').withText('Proceed to checkout')
        this.summaryShipping_page = Selector('#carrier_area > h1')
        this.summaryTerms_checkbox = Selector('#cgv')
        this.summaryProceedCheckout3_button = Selector('button').withText('Proceed to checkout')
        this.paymentSummary_page = Selector('#center_column > h1')
        this.paymentBank_option = Selector('#HOOK_PAYMENT > div:nth-child(1) > div > p > a')
        this.orderSummary_page = Selector('#center_column > h1')
        this.confirmOrder_button = Selector('button').withText('I confirm my order')
        this.orderConfirmation_page = Selector('#center_column > h1')
        this.paymentCheck_option = Selector('#HOOK_PAYMENT > div:nth-child(2) > div > p > a')
        this.OrderConfirmation_alertSuccess = Selector('#center_column > p.alert.alert-success')
        this.fadedShort_option = Selector('a').withText('Faded Short Sleeve T-shirts')
        this.fadedShort_page = Selector('h1').withText('Faded Short Sleeve T-shirts')
        this.addQuantity_button = Selector('#quantity_wanted_p')
        this.quatity_input = Selector('#quantity_wanted')
        this.size_list = Selector('#group_1')
        this.size_option = Selector('option').withText('M');
        this.sizeLarge_option = Selector('option').withText('L');
        this.color_option = Selector('#color_14')
    }
}
export default new Page();