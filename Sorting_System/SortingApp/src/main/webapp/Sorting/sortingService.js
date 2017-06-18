/*
 * ****************************************************************************
  * Copyright 2016, Govardhan. All rights reserved. An
 * unpublished work of Govardhan may only be used in accordance
 * with a license agreement with Govardhan. Any unauthorized
 * use, duplication or disclosure is prohibited.
 * ****************************************************************************
 * */
(function() {
	'use strict';
	angular.module('sortingApp').factory('SortingService', SortingService);
	SortingService.$inject = ['Restangular', '$http'];
	function SortingService(Restangular,$http,ngDailoge) {
		var sortingAppAPIService = {
				getListBySorting:getListBySorting,
				getSortedHistory:getSortedHistory,
		};
		return sortingAppAPIService;
		/*
         * This method is used to perform sorting operation on list of items.
        */
		 function getListBySorting(sortingObject){
			 return Restangular.all('SortingApp/sorting/').post(sortingObject).then(function(response){  
					return response;    			
			}, function(error) {    		   		
				return false;    		   	
			});
		};
		/*
         * This method is used to perform to fetch history of list of items.
        */
		 function getSortedHistory(){
				return Restangular.one('SortingApp/sortinghistory/').get().then(function(response){					
					return response;
				}, function(error) {			   		
			   		return false;
			   	});
			};
	}
	})();