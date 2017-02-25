
var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {

  $scope.entries = [
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
    }
  ]
});



