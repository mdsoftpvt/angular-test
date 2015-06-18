'use strict';

/**
 * @ngdoc function
 * @name ly
 * @description
 * # Contains rest calls for Team API
 */
 
angular.module('angularTestApp')
.service('UserService', function ($resource,$http) {
   //
   this.self = this;
   this.addUser = function(user)
   {
   	this.registerUserList.push(user);
   }
   //
   this.userExsit = function (user)
   {
   		var status = false
   		angular.forEach(this.registerUserList, function(item){
  			if(user.username == item.username && user.password == item.password)
	  		{			
	  			self.currentUser = item;
	  			status =  true;
	  		}  			
  		})
  		return status;
   };
   this.registerUserList = [];
   this.currentUser = {};
   this.getUser = function()
   {
   	return this.currentUser;
   }

});
