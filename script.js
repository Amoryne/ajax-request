
let newQuote = document.getElementById('quote');
let author = document.getElementById('author');
let photos = document.querySelector('.photos');

async function getData()
{
	let response= await fetch ('https://thatsthespir.it/api').catch(function(){
		alert("error")
	});
	let data = await response.json();
	return data;
}

getData().then(data => newQuote.innerHTML = (data.quote));
getData().then(data => author.innerHTML = (data.author));
getData().then(data => photos.src = data.photo);


// console.log(quote,cite,image);


// async function citations() {
//     let response = await fetch('https://thatsthespir.it/api')
//     let data = await response.json();
//     //console.log(reponse);

//     //Je récupère les éléments du fichier json
//     let cit = await data.quote;
//     let auteur = await data.author;
//     let image = await data.photo;

//     //je print les éléments récupérer dans le dom
//     document.getElementById("quote").innerHTML = cit;
//     document.getElementById("author").innerHTML = auteur;
//     document.querySelector(".photos").src = image;
// }

// citations()
//  