const homePage = function newHomePage() {

    this.signInIcon = $(".login");
    this.emailAddress = $("#email_create");
    this.submitCreate = $("#SubmitCreate");
    this.emailAddress = $('#email');
    this.password = $('#passwd');
    this.submitLogin = $('#SubmitLogin');
   this.signOut = $('.logout');
   this.failedAuth = element(by.xpath('//*[text()="Authentication failed."]'));
   this.failedAuthMsg = element(by.xpath('//*[text()="There is 1 error"]'));
    this.myAccountTitle = element(by.xpath('//*[contains(text(),"My account") and @class="page-heading" ]'));
        //search box and assertions
    this.mainPageTitle = $("#header_logo");
    this.searchBox = $("#search_query_top");
    this.searchIcon = $("#searchbox > .btn");
    this.itemFound = $$(".page-heading span").get(1);
    this.numOfShowItems = $(".top-pagination-content > .product-count");
    this.searchReturn = $(".page-heading span");
    this.searchInput = $('input[placeholder="Search"]');
}
module.exports = new homePage();