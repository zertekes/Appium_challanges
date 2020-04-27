const allocationPage = require("../allocationTabPages/allocation.page")

describe('Allocation test for...', () => {

    it('Is allocation header displayed?', ()=> {
        allocationPage.headerText.isDisplayed()
    })

    it('Cautious tab displaying Allocations of 85%,10%,5%', () => {
        allocationPage.clickCautiousTab()
        assert.equal("85", allocationPage.getAllocationValue(0))
        assert.equal("10", allocationPage.getAllocationValue(1))
        assert.equal("5", allocationPage.getAllocationValue(2))

    });

    it('Balanced tab displaying Allocations of 30%,45%,25%', () => {
        allocationPage.clickBalancedTab()
        assert.equal("30", allocationPage.getAllocationValue(0))
        assert.equal("45", allocationPage.getAllocationValue(1))
        assert.equal("25", allocationPage.getAllocationValue(2))
    });

    it('Adventurous tab displaying Allocations of 5%,60%,35%', () => {
        allocationPage.clickAdventurousTab()
        assert.equal("5", allocationPage.getAllocationValue(0))
        assert.equal("60", allocationPage.getAllocationValue(1))
        assert.equal("35", allocationPage.getAllocationValue(2))

    });
})