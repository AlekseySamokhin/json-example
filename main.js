// ссылки на элементы html
var header = document.querySelector('header');
var section = document.querySelector('section');

// сохранение url адреса JSON
var requestURL = 'var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';';

// новый экземляр объекта запроса из конструктора
var request = new XMLHttpRequest();

// get запрос
request.open('GET', requestURL);

// тип возращаемого объекта json
request.responseType = 'json';
request.send();

// ожидание ответа на возрат с сервера
request.onload = function () {
	var superHeroes = request.response;
	populateHeader(superHeroes);
	showHeroes(superHeroes);
}

//cоздание функций
function populateHeader(jsonObj) {
	var myH1 = document.createElement('h1');
	myH1.textContent = jsonObj['squadName'];
	header.appendChild(myH1);

	var myPara = document.createElement('p');
	myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
	header.appendChild(myPara);
}

//cоздание карт героев
function showHeroes(jsonObj) {
	var heroes = jsonObj['members'];
	for (var i = 0; i < heroes.length; i++) {
		var myArticle = document.createElement('article');
		var myH2 = document.createElement('h2');
		var myPara1 = document.createElement('p');
		var myPara2 = document.createElement('p');
		var myPara3 = document.createElement('p');
		var myList = document.createElement('ul');
		myH2.textContent = heroes[i].name;
		myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
		myPara2.textContent = 'Age: ' + heroes[i].age;
		myPara3.textContent = 'Superpowers:';
		var superPowers = heroes[i].powers;
		for (var j = 0; j < superPowers.length; j++) {
			var listItem = document.createElement('li');
			listItem.textContent = superPowers[j];
			myList.appendChild(listItem);
		}
		myArticle.appendChild(myH2);
		myArticle.appendChild(myPara1);
		myArticle.appendChild(myPara2);
		myArticle.appendChild(myPara3);
		myArticle.appendChild(myList);
		section.appendChild(myArticle);
	}
}
