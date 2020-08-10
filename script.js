//for fetching options of select tag

var xhrReq = new XMLHttpRequest();
const selectTag = document.getElementById('list');

xhrReq.onload = function () {
	var resJSON = JSON.parse(xhrReq.response);

	var allBreeds = resJSON.message;

	for(const breed in allBreeds){

		let newOption = new Option(breed,breed);

		selectTag.add(newOption,undefined);
		//console.log(breed);
	}

	//console.log(allBreeds);
}
xhrReq.open("get","https://dog.ceo/api/breeds/list/all",true);
xhrReq.send();


// handling fetch button click

const button= document.getElementById('button');


function fetch(event){

	event.preventDefault();


	const form = document.querySelector('form');
	const data = Object.fromEntries(new FormData(form).entries());
	const image =document.getElementById('image');
	
	var breed =data.breed;

	var reqUrl=`https://dog.ceo/api/breed/${breed}/images/random`;

	$.ajax({
		url: reqUrl,
		method: 'get',
		success: function(data){
					var apiResponse= data.message;
					image.setAttribute('src',apiResponse);
					button.disabled = true;
					selectTag.onchange= function(){
						button.disabled=false;
					}


					
					console.log(apiResponse);
				}
		});
	//console.log(reqUrl);


}

button.addEventListener("click",fetch);
const nextBtn=document.getElementById('nextBtn');

function next(event){

	event.preventDefault();


	const form = document.querySelector('form');
	const data = Object.fromEntries(new FormData(form).entries());
	const image =document.getElementById('image');
	const nextBtn=document.getElementById('nextBtn');
	var breed =data.breed;

	var reqUrl=`https://dog.ceo/api/breed/${breed}/images/random`;

	$.ajax({
		url: reqUrl,
		method: 'get',
		success: function(data){
					var apiResponse= data.message;
					image.setAttribute('src',apiResponse);
					

					
					console.log(apiResponse);
				}
		});
	//console.log(reqUrl);


}

nextBtn.addEventListener('click',next);



