angular.
   module('phoneList').
   component('phoneList',{
     templateUrl: 'phone-list/phone-list.template.html',
     controller: function phoneController() {
       this.phones=[
         {
          name: 'Nexus S',
	      description: 'Very fast'
         }, {
	      name: 'iPhone 6S',
          description: 'durable'
    	 }, {
          name: 'iPhone 5S',
          description: 'powerful'
	     } ];
     }
   } );
 