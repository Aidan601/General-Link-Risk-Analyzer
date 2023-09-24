'use strict';

// require('safe-browse-url-lookup')
const lookup = require('./lib')({ apiKey: 'AIzaSyBi5CsGvLUKIRuBufchW05k_Pr1Hl0OTMQ' });

lookup.checkSingle('http://testsafebrowsing.appspot.com/apiv4/ANY_PLATFORM/MALWARE/URL/')
    .then(isMalicious => {
        console.log(isMalicious ? 'Hands off! This URL is evil!' : 'Everything\'s safe.');
    })
    .catch(err => {
        console.log('Something went wrong.');
        console.log(err);
    });