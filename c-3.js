
angular.module("myApp", ['ui.router'])
  .factory('entriesFactory', [function(){
    var o = {
      entries: [
    {
      "Day" : "Feb 25",
      "Drink" : true,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : true,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : false,
      "Lemon" : true,
      "Exercise" : true
    },{
      "Day" : "Feb 26",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : true,
      "Stress" : false,
      "Affirm" : true,
      "Think" : false,
      "Sleep" : false,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : true
    },{
      "Day" : "Feb 27",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : true,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : false,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : false
    },{
      "Day" : "Feb 28",
      "Drink" : false,
      "Brkfst" : true,
      "Lunch" : true,
      "Dinner" : false,
      "Stress" : true,
      "Affirm" : false,
      "Think" : false,
      "Sleep" : true,
      "Weigh" : true,
      "Snacks" : true,
      "Lemon" : true,
      "Exercise" : false
    },{
      "Day" : "March 1",
      "Drink" : true,
      "Brkfst" : true,
      "Lunch" : false,
      "Dinner" : false,
      "Stress" : false,
      "Affirm" : false,
      "Think" : true,
      "Sleep" : true,
      "Weigh" : false,
      "Snacks" : true,
      "Lemon" : false,
      "Exercise" : true
    },{
      "Day" : "March 2"}]
    };
    return o;
  }])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '/home.html',
          controller: 'myCtrl'
        });
      $stateProvider
        .state('table', {
          url: '/table',
          templateUrl: '/table.html',
          controller: 'tableCtrl'
        });
      $urlRouterProvider.otherwise('home');
  }])

  .controller("myCtrl", function($scope,entriesFactory) {
     $scope.entries = entriesFactory.entries;	
     $scope.setTile = function(tileName){
       var len = $scope.entries.length;
       var theEntry = $scope.entries[len-1];
       theEntry[tileName] = true;
     };
  })

  .controller("tableCtrl", function($scope,entriesFactory) {
     $scope.entries = entriesFactory.entries;	
  });

