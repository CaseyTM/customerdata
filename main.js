// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
	const customersDiv = document.querySelector(".customers");

let img;








  'use strict';
var apiCall = fetch("https://randomuser.me/api/?results=12")
  .then(
  	function(response){

  		// console.log(response.json());
  		// console.log(response);
  		response.json().then(function(data){
  			let apiJSON = data.results;
		for(let i = 0; i < apiJSON.length; i++){
  			let img = new Image();
  			img.src = apiJSON[i].picture.thumbnail; 
			let imageURL = apiJSON[i].picture.thumbnail;

 		// console.log(data)
 		customersDiv.appendChild(img)
  	}  			



  		});


  	},
  	function(reject){

  	})

})();