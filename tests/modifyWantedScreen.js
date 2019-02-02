var wantedQueries = {}

var goToModifyScreen = (browser) => {
    browser
        .click('.bm-burger-button')
        .waitForElementVisible('.bm-item', 5000)
        .click('p[name="modifyOption"]')
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
    //Test Case https://dmutah.atlassian.net/browse/Q9C-51
    'Modify Wanted Valid Form Submission with Optional Fields': browser => {
        wantedQueries
        goToModifyScreen(browser)
        wantedQueries
            .setValue('@wid', 1234567891)
            .setValue('@name', 'Darth Vader')
            .setValue('@dl', 'Star 1977')
            .setValue('@dlState', 'UT')
            .setValue('@dlExpDate', '12/24/2019')
            .click('#saveBtn')
            .expect.element('span[name="queryBody"]').text.to.equal('1234567891....Darth Vader....000....Star 1977.UT.2019-12-24...').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-52
    'Modify Wanted Speific Screen Requirements': browser => {
        wantedQueries
        goToModifyScreen(browser)
        wantedQueries
            .setValue('@wid', 1234567891)
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.equal('Errors Received:').before(500)
    },

    //Test Case https://dmutah.atlassian.net/browse/Q9C-52
    'Modify Wanted Speific Screen Requirements2': browser => {
        wantedQueries
        goToModifyScreen(browser)
        wantedQueries
            .setValue('@name', 'Darth Maul')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.equal('Errors Received:').before(500)
    },
    //Test Caste https://dmutah.atlassian.net/browse/Q9C-55
    /*'Modify Wanted Field Character Length and Attribute': browser => {
        wantedQueries
        goToModifyScreen(browser)
        wantedQueries
# Open Wanted Queries application.
# Navigate to Modify Wanted screen.
# Enter data from test data sheet for each field using the data in Under Length column.
# Click Submit button.
#* Appropriate error messages will appear with information on how to correct the error.
#  Click the Clear button. 
#  Repeat steps 3-5 for Over Length and Wrong Character columns.

    },*/
}


