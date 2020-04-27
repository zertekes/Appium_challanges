class Allocations {

    get headerText() {return $('//android.widget.TextView[@text="Confirm allocation"]')};

    get btnCautiousTab() {return $('//android.widget.Button[@text="Cautious"]')};

    // I can use the [@content-desc="Cautious"] if the text is not uniqe.

    get btnBalancedTab() {return $('//android.widget.Button[@text="Balanced"]')};

    get btnAdventurousTab() {return $('//android.widget.Button[@text="Adventurous"]')}

    allocationArray = $$('//android.widget.ListView[@resource-id="android:id/list"]')[];

    // I assume that the % values are in the same class.
    // I also assume that these are differenciated by their sequence based on which we can use an array and their sequence.
    // We can compare them based on whether these values give the expected result.

    getAllocationValue(index) {
        return this.allocationArray[index]
    }


    // I created function changes between tabs by clicking on the 3 top buttons. 
    // It needs to be investigated how we can confirm if we are on the right tab. Probably we can use "isSelected" function.
    // I would need to have more information on the structure of the application to be able to investigate further.

    clickCautiousTab() {
        this.headerText.waitForDisplayed()
        this.btnCautiousTab.click()
    }
    
    clickBalancedTab() {
        this.headerText.waitForDisplayed()
        this.btnBalancedTab.click()
    }

    clickAdventurousTab() {
        this.headerText.waitForDisplayed()
        this.btnAdventurousTab.click()
    }


}
module.exports = new Allocations();