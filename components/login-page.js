define(['public/js/knockout-3.3.0'], function(ko){
	return function SignUpViewModel() {

	    var self = this;

	    self.userName = ko.observable();
	    self.userPassword = ko.observable();

	    self.signup = function() {
	        console.log( "signing up "+self.userName() );
	        // alert( "signing up "+self.userName() );
	    }

	};

})