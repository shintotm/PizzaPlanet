app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
	{
		name: 'Bruschetta',
		description: 'Grilled bread garlic, tomatoes, olive oil.',
		price: 4.95
	}
  ];
  $scope.mains = [
  {
		name: 'Chicken Curry Meal',
		description: 'chicken, rise, gravy',
		price: 8.00
  },
  {
		name: 'Egg Curry Meal',
		description: 'egg, rise, gravy',
		price: 9.00
  },
  {
		name: 'Lamb Curry Meal',
		description: 'lamb, rise, gravy',
		price: 9.50
  }
  ];
  $scope.extras = [
  {
	  name: 'Pickle',
	  description: 'hot spicy',
	  price: 0.50
  },
 
  {
	  name: 'Roti',
	  description: 'bread',
	  price: 0.50
  }
  
  ];

}]);