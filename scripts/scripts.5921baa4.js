"use strict";var app=angular.module("clientUserApp",["ngResource","ngRoute","ui.sortable"]);app.config(["$routeProvider","$locationProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}),a.when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}),a.when("/vote/:id",{templateUrl:"views/vote.html",controller:"VoteCtrl"}),a.when("/thankyou",{templateUrl:"views/thankYou.html",controller:"VoteCtrl"}),a.when("/404",{templateUrl:"views/404.html"}),a.otherwise({redirectTo:"/"})}]),app.factory("$exceptionHandler",function(){return function(a,b){console.log("exception : "+a),a.message+=' (caused by "'+b+'")'}}),angular.module("clientUserApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("clientUserApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);var app=angular.module("clientUserApp");app.controller("VoteCtrl",["$scope","$routeParams","$location","VoteFactory","VoteDefFactory",function(a,b,c,d,e){function f(a){var b=a,c={placeholder:"app",connectWith:".apps-container",activate:function(){console.log("list "+b+": activate")},beforeStop:function(){console.log("list "+b+": beforeStop")},change:function(){console.log("list "+b+": change")},create:function(){console.log("list "+b+": create")},deactivate:function(){console.log("list "+b+": deactivate")},out:function(){console.log("list "+b+": out")},over:function(){console.log("list "+b+": over")},receive:function(){console.log("list "+b+": receive")},remove:function(){console.log("list "+b+": remove")},sort:function(){console.log("list "+b+": sort")},start:function(){console.log("list "+b+": start")},stop:function(){console.log("list "+b+": stop")},update:function(){console.log("list "+b+": update")}};return c}a.init=function(){b.id&&(a.vote=d.votes.filter(function(a){return""+a.id===b.id})[0],void 0===a.vote&&c.path("/404"),a.voteDef=e.voteDefs.filter(function(b){return console.log(b._id+", "+a.vote.voteDefRef),b._id===a.vote.voteDefRef})[0]),a.isSaving=!1},a.init();a.sortingLog=[],a.sortableOptionsList=[f("A"),f("B")],a.updateVote=function(){a.sortingLog=[];for(var b=[a.vote.liked,a.vote.notliked],d=0;d<b.length;d++){var e=b[d].map(function(a){return a.title}).join(", ");e="container "+(d+1)+": "+e,a.sortingLog.push(e)}c.path("/thankyou/"),a.voteDef={},a.vote={}}}]),app.factory("VoteFactory",function(){return{votes:[{id:"asdsfasddasfsf",createdAt:Date.now(),updatedAt:Date.now(),voteDefRef:1,voted:!1,email:"somemail@test.com",liked:[{title:"Facebook (a)"},{title:"Youtube (a)"},{title:"Gmail (a)"},{title:"Google+ (a)"},{title:"Twitter (a)"},{title:"Yahoo Mail (a)"},{title:"Pinterest (a)"}],notliked:[{title:"Facebook (b)"},{title:"Youtube (b)"},{title:"Gmail (b)"},{title:"Google+ (b)"},{title:"Twitter (b)"},{title:"Yahoo Mail (b)"},{title:"Pinterest (b)"}]}]}}),app.factory("VoteDefFactory",function(){return{voteDefs:[{_id:1,title:"This is a super duper voting!!",description:"Some description entered by Vote admin"}]}});