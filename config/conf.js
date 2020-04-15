let SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {

       directConnect : true,
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      browserName: 'chrome',
      // chromeOptions: {
      //   args: ["--incognito"]
      // }
    },
    params:{
      env:'',
    },

    suites:{
    smoke: [//'../tests/searchBox.Ecommerce.js',
            '../tests/login.Ecommerce.js',
             ],
    //regression: ['']
  },
  onPrepare: function () {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true,
      showstack: false
    }));
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: '/Users/edilmasimov/Desktop/protractor Automation/demoprotractor/report',
      preserveDirectory: false,
      screenshotsSubfolder: 'images',
      jsonsSubfolder: 'jsons',
      docName: 'demoProtractor-Report.html'
    }).getJasmine2Reporter());

  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {}

  }
};