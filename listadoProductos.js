import page from './pageModel';

fixture('Pruebas del listado de productos ')
    .page('http://automationpractice.com/');

test('Módulo women - Ingresar a la opción Tops (panel superior izquierdo)', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.tops_option)
        .expect(page.tops_page.exists).ok()
        .takeScreenshot()
        .expect(page.productCount_text.innerText).eql('Showing 1 - 2 of 2 items')
});

test('Módulo women - Ingresar a la subcategoría Dresses', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.dresses_subOption)
        .expect(page.dresses_page.exists).ok()
        .takeScreenshot()
});

test('Módulo women - Ingresar a la subcategoría de la subcategoría Summer Dresses', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.dresses_subOption)
        .expect(page.dresses_page.exists).ok()
        .takeScreenshot()

    await t
        .click(page.summerDresses_subOption)
        .expect(page.summerDresses_page.exists).ok()
        .takeScreenshot()
});

test('Módulo women - Ingresar a la opción Specials', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.specials_link)
        .expect(page.priceDrop_page.exists).ok()
        .takeScreenshot()
});

test('Módulo women - Seleccionar un producto', async t => {
    await t
        .click(page.women_topOption)
        .expect(page.women_page.exists).ok()

    await t
        .click(page.printedSummerD_option)
        .expect(page.printedSummerD_page.exists).ok()
        .takeScreenshot()
});