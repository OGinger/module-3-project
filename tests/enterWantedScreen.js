var enterWanted = {}

var goToEnterScreen = (browser) => {
    browser
        .click('.bm-burger-button')
        .waitForElementVisible('.bm-item', 5000)
        .click('p[name="enterOption"]')
        .waitForElementVisible('.titleBar', 5000)
}

module.exports = {
    beforeEach: browser => {
        enterWanted = browser.page.wantedQueriesPage()
        enterWanted.navigate()

    },
    after: browser => {
        browser.end()
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-46
    'Enter Wanted Valid Data Length Without Optional Fields': browser => {
        enterWanted
        goToEnterScreen(browser)
        enterWanted
            .setValue('@header', 'whizzbangs')
            .setValue('@mke', 'Mf$')
            .setValue('@oai', '123456ABC')
            .setValue('@name', 'Robin Hood 3rd!')
            .setValue('@sex', 'M')
            .setValue('@race', 'W')
            .setValue('@height', '602')
            .setValue('@weight', '015')
            .setValue('@hair', 'brown')
            .setValue('@offense', 'Sh@p L1fting')
            .setValue('@dow', '01/23/2019')
            .click('#saveBtn')
            .expect.element('span[name="queryBody"]').text.to.contain('whizzbangs.Mf$.123456ABC.Robin Hood 3rd!.M.W.602.015.brown.Sh@p L1fting.2019-01-23......').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-47
    'Enter Wanted Valid Data Length With Optional Fields': browser => {
        enterWanted
        goToEnterScreen(browser)
        enterWanted
            .setValue('@header', 'whizzbangs')
            .setValue('@mke', 'Mf$')
            .setValue('@oai', '123456ABC')
            .setValue('@name', 'Robin Hood 3rd!')
            .setValue('@sex', 'M')
            .setValue('@race', 'W')
            .setValue('@height', '602')
            .setValue('@weight', '015')
            .setValue('@hair', 'brown')
            .setValue('@offense', 'Sh@p L1fting')
            .setValue('@dow', '01/23/2019')
            .setValue('@dl', 'XYZ 123$')
            .setValue('@dlState', 'VA')
            .setValue('@dlExpDate', '11/20/2030')
            .setValue('@lp', 'xyZ1234')
            .setValue('@lpState', 'VA')
            .setValue('@lpExpDate', '11/23/2020')
            .click('#saveBtn')
            .expect.element('span[name="queryBody"]').text.to.contain('whizzbangs.Mf$.123456ABC.Robin Hood 3rd!.M.W.602.015.brown.Sh@p L1fting.2019-01-23.XYZ 123$.VA.11/20/2030.xyZ1234.VA.1/23/2020').before(500)
    },
    //Test Case https://dmutah.atlassian.net/browse/Q9C-48
    'Enter Wanted Invalid Data Length Without Optional Fields': browser => {
        enterWanted
        goToEnterScreen(browser)
        enterWanted
            .setValue('@header', 'whizz')
            .setValue('@mke', 'M')
            .setValue('@oai', '87654321')
            .setValue('@name', 'Jr')
            .setValue('@sex', 'g')
            .setValue('@race', 'p')
            .setValue('@height', '65')
            .setValue('@weight', '1212')
            .setValue('@hair', 'br')
            .setValue('@offense', 'Shop')
            .setValue('@dow', '01/23/19')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.contain('Errors Received').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-49
    'Enter Wanted Invalid Data Length With Optional Fields': browser => {
        enterWanted
        goToEnterScreen(browser)
        enterWanted
            .setValue('@header', 'whizz')
            .setValue('@mke', 'M')
            .setValue('@oai', '87654321')
            .setValue('@name', 'Jr')
            .setValue('@sex', 'g')
            .setValue('@race', 'p')
            .setValue('@height', '65')
            .setValue('@weight', '1212')
            .setValue('@hair', 'br')
            .setValue('@offense', 'Shop')
            .setValue('@dow', '01/23/19')
            .setValue('@dl', 'electroencephalograms')
            .setValue('@dlState', 'V')
            .setValue('@dlExpDate', '12/26/20')
            .setValue('@lp', 'wdvh')
            .setValue('@lpState', 'V')
            .setValue('@lpExpDate', '12/26/20')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.contain('Errors Received').before(500)
    },
    //https://dmutah.atlassian.net/browse/Q9C-50
    'Enter Wanted Invalid Character Data for all Fields': browser => {
        enterWanted
        goToEnterScreen(browser)
        enterWanted
            .setValue('@header', 'Rogue19@deathstar')
            .setValue('@mke', '1234')
            .setValue('@oai', '123$abcdf')
            .setValue('@name', 'Pr1ncess Le@')
            .setValue('@sex', '55')
            .setValue('@race', '8')
            .setValue('@height', 'han')
            .setValue('@weight', 'r2d')
            .setValue('@hair', 'b5own')
            .setValue('@offense', 'Dichlorodiphenyltrichloroethane')
            .setValue('@dow', 'mm/dd/yyyy')
            .setValue('@dl', 'electroencephalograms')
            .setValue('@dlState', '45')
            .setValue('@dlExpDate', 'mm/dd/yyyy')
            .setValue('@lp', 'wd1234%fghvh')
            .setValue('@lpState', '45')
            .setValue('@lpExpDate', 'mm/dd/yyyy')
            .click('#saveBtn')
            .expect.element('#validHeader').text.to.contain('Errors Received').before(500)
    },
}    

