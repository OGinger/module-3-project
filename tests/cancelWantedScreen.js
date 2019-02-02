var wantedQueries = {}

var goToCancelScreen = (browser) => {
    browser
        .click('.bm-burger-button')
        .waitForElementVisible('.bm-item', 5000)
        .click('p[name="cancelOption"]')
        .waitForElementVisible('.titleBar', 5000)
}

module.exports = {
    beforeEach: browser => {
        wantedQueries = browser.page.wantedQueriesPage()
        wantedQueries.navigate()

    },
    after: browser => {
        browser.end()
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-53
    'Cancel Wanted Valid Form Submission': browser => {
        wantedQueries
        goToCancelScreen(browser)
        wantedQueries
            .setValue('@wid', 1234567891)
            .setValue('@reasonCan', 'Warrant for Jane Doe to be canceled due to appearance before the court and her case being dismissed')
            .setValue('@dateCan', '02/01/2019')
            .click('#saveBtn')
            .expect.element('span[name="queryBody"]').text.to.equal('1234567891.Warrant for Jane Doe to be canceled due to appearance before the court and her case being dismissed.2019-02-01').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-54
    'Cancel Wanted Invalid Form Submission': browser => {
        wantedQueries
        goToCancelScreen(browser)
        wantedQueries
            .setValue('@wid', 1234567891)
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.equal('Errors Received:').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-54
    'Cancel Wanted Invalid Form Submission2': browser => {
        wantedQueries
        goToCancelScreen(browser)
        wantedQueries
            .setValue('@reasonCan', 'Warrant for Jane Doe to be canceled due to appearance before the court and her case being dismissed')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.equal('Errors Received:').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-54
    'Cancel Wanted Invalid Form Submission3': browser => {
        wantedQueries
        goToCancelScreen(browser)
        wantedQueries
            .setValue('@dateCan', '02/01/2019')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.equal('Errors Received:').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-56
    /*'Cancel Wanted Field Character Length and Attribute: browser => {
            wantedQueries
            goToCancelScreen(browser)
            wantedQueries
    Open Wanted Queries application.
    Navigate to Cancel Wanted screen.
    Enter data from test data sheet for each field using the data in Under Length column.
    Click Submit button.
    Appropriate error messages will appear with information on how to correct the error.
    Click the Clear button.
    Repeat steps 3-5 for Over Length and Wrong Character columns.
    },*/

}
