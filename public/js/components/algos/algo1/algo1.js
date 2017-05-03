
let algo1 = {
    templateUrl: 'js/components/algos/algo1/algo1.tp.html',
    controller: ['$stateParams', '$state', function($stateParams, $state) {
        'use  strict'

	this.friends = ["Ryan", "Kieran", "Mark"]
	let selected = [];

	//set function to select friends
	function getFriends(friends){
		//function for each item of the array
		friends.forEach( function(friend) {
			//If item has 4 letters add it to array 'selected'
			if(friend.length == 4){return selected.push(friend)}
		})
	}
	//Run function with example
	getFriends(this.friends);
	//Put value of selected friends to the result
	this.result = selected

    }]
}

export default algo1
