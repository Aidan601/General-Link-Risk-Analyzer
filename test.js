const axios = require("axios")

axios.post("https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyBi5CsGvLUKIRuBufchW05k_Pr1Hl0OTMQ", {
    client: 
    {
        clientId: 'yourcompanyname',
        clientVersion: '1.5.2'
    },
    threatInfo: 
    {
        threatTypes: ['MALWARE','SOCIAL_ENGINEERING'],
        platformTypes: ['WINDOWS'],
        threatEntryTypes: ['URL'],
        threatEntries:
        [{url: 'https://www.google.com/'}]
    }

})
    .then((response) => {
        console.log(response)
    })