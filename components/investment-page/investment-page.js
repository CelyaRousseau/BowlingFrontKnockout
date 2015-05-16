define(['knockout', 'text!./investment-page.html'], function (ko, templateMarkup) {

    function InvestmentPage(route) {
        var self = this;
    }

    // This runs when the component is torn down. Put here any logic necessary to clean up,
    // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
    InvestmentPage.prototype.dispose = function() { };
  
    return { viewModel: InvestmentPage, template: templateMarkup };

});
