(function () {
"use strict";


angular.module('public')
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://laibit-restaurant-server.herokuapp.com");
//.constant('ApiBasePath', "http://localhost:8080/coursera/single-page-apps-angularjs/assignments/coursera-angularjs-module5_4");


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.searchDish = function (searchTerm) {
   return $http({
     method: "GET",
     url: (ApiBasePath + "/menu_items/"+searchTerm+".json")
   });

  }

}

})();
