import { Selector } from 'testcafe';
import { getByTestId, configureOnce } from "@testing-library/testcafe";


fixture `Getting Started`
    .page `http://localhost:3000/`;

    const myApp = Selector('.bg-near-white w-70 pa5');
    const itemRowSelector = Selector('#item-listing').find(".item");
    const countDisplaySelector = Selector('#header');
    const itemSelector = Selector('.item-Nougat-row');

    test('My first test', async t => {
        
        await myApp.with({ visibilityCheck: true })();

        await t
                .expect(itemRowSelector.count).eql(5);

        await t
                .expect(Selector('.item').nth(2).find(".item-name").innerText).eql("Marshmallow");

        await t
                .wait(2000)
                .click("#item-Nougat-checkbox")

        await t
                .wait(2000)
                .expect(countDisplaySelector.withText('1 selected').exists).ok();

        await t
                .wait(2000)
                .click("#delete-button")

        await t
                .wait(2000)
                .expect(itemRowSelector.count).eql(4);

        await t
                .wait(2000)
                .expect(itemSelector.exists).notOk();

        await t
                .wait(2000)
                .expect(countDisplaySelector.withText('0 selected').exists).ok();
    });