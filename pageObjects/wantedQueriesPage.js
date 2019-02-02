module.exports = {
    url: 'http://localhost:3000',
    elements: {
       header:  'input[name="hdrInput"]',
       mke: 'input[name="mkeInput"]',
       oai: 'input[name="oriInput"]',
       name: 'input[name="namInput"]',
       sex: 'select[name="sexInput"]',
       race: 'select[name="racInput"]',
       height: 'input[name="hgtInput"]',
       weight: 'input[name="wgtInput"]',
       hair: 'input[name="haiInput"]',
       offense: 'input[name="offInput"]',
       dow: 'input[name="dowInput"]',
       //optional fields
       dl: 'input[name="olnInput"]',
       dlState: 'input[name="olsInput"]',
       dlExpDate: 'input[name="oldInput"]',
       lp: 'input[name="licInput"]',
       lpState: 'input[name="lisInput"]',
       lpExpDate: 'input[name="lidInput"]',
       //modify screen field
       wid: 'input[name="widInput"]',
       //cancel screen fields
       reasonCan: 'input[name="resInput"]',
       dateCan: 'input[name="datInput"]',

    },
}