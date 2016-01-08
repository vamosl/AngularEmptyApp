(function() {
    'use strict';

    angular.module('app.playground')
		.controller('playgroundCtrl', playgroundController);
	
	//playgroundController.$inject = []
	function playgroundController() {
		this.name = "playgroundCtrl";
	};

})();
