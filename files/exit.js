var exitGame = document.createElement("div");
exitGame.id = 'exitGame';
game.appendChild(exitGame);  

var exitGame = document.getElementById('exitGame');  
exitGame.style.border = 'solid 3px darkOrange';
exitGame.style.margin = 50*adaptationIndex + 'px';
exitGame.style.width = 1100*adaptationIndex + 'px'; 
exitGame.style.height = 800*adaptationIndex + 'px'; 
exitGame.style.display  = 'none';
exitGame.style.position = 'absolute'; 

var backgroundExitGame = document.createElement("img");
backgroundExitGame.id = 'backgroundExitGame';
backgroundExitGame.setAttribute('src','images/exitImg.jpg');
backgroundExitGame.style.width = 1100*adaptationIndex + 'px'; 
backgroundExitGame.style.height = 800*adaptationIndex + 'px'; 
backgroundExitGame.style.position = 'absolute'; 
exitGame.appendChild(backgroundExitGame);

var backgroundExitGame = document.getElementById('backgroundExitGame');  

var headerExitGame = document.createElement("p");
headerExitGame.id = 'headerExitGame';
headerExitGame.style.position = 'absolute';
headerExitGame.style.color = 'white';
headerExitGame.style.textAlign = 'center'
headerExitGame.style.textShadow = '1px 1px 2px black, 0 0 1em red';
headerExitGame.style.font = 'italic  bold ' + 45*adaptationIndex + 'px cursive';
headerExitGame.style.zIndex = '1';
headerExitGame.innerHTML = 'Надоело играт ь? Ну и правильно! Лучше почит айт е от личную серию книг Анджея Сапковского!';
exitGame.appendChild(headerExitGame);

var books = document.createElement("p");
books.id = 'books';
books.style.position = 'absolute';
books.style.top = 300*adaptationIndex + 'px';
books.style.left = 30*adaptationIndex + 'px';
books.style.color = 'white';
books.style.textAlign = 'center'
books.style.textShadow = '1px 1px 2px black, 0 0 1em red';
books.style.font = 'italic  bold ' + 35*adaptationIndex + 'px cursive';
books.style.zIndex = '1';
books.innerHTML = 'Loading ...';
exitGame.appendChild(books);

setTimeout(booksLoading, 3000)	

function booksLoading() {
	books.innerHTML = 'Books:';	

	var andrzejSapkowskiBooks = [
	      dataBooks[3].title + ' (1986-1993)',
	      dataBooks[75].title + ' (1992)', 
	      dataBooks[0].title + ' (1994)', 
	      dataBooks[66].title + ' (1995)', 
	      dataBooks[27].title + ' (1996)', 
	      dataBooks[62].title + ' (1997)',
	      dataBooks[15].title + ' (1998)', 
	      dataBooks[25].title + ' (2013)'
	    ];

	var lastWish = [
	    "The Witcher (1986)", 
	    "A Grain of Truth (1989)", 
	    "The Lesser Evil (1990)",
	    "A Question of Price (1990)",  
	    "The Edge of the World (1990)",
	    "The Last Wish (1993)",
	    "The Voice of Reason (1993)"
	];

	var createOl = document.createElement("ol");
	createOl.id = 'list';
	createOl.style.position = 'absolute';
	createOl.style.zIndex = '1';
	createOl.style.left = 30*adaptationIndex + 'px';
	createOl.style.top = 400*adaptationIndex + 'px';
	exitGame.appendChild(createOl);

	var createOl = document.getElementById("list");

	for (var i = 0; i < andrzejSapkowskiBooks.length; i++) {
	    var createLi = document.createElement("li");
	    createLi.classList.add('firstLi');
	    createLi.style.textShadow = '1px 1px 2px black, 0 0 1em red';
		createLi.style.font = 'italic  bold ' + 25*adaptationIndex + 'px cursive';
	    createLi.innerHTML = andrzejSapkowskiBooks[i];    
	    createLi.style.color = 'white';
	    createOl.appendChild(createLi);
	};

	//первая книга разделение

	var firstBook = document.createElement("p");
	firstBook.id = 'books';
	firstBook.style.position = 'absolute';
	firstBook.style.top = 300*adaptationIndex + 'px';
	firstBook.style.left = 730*adaptationIndex + 'px';
	firstBook.style.color = 'white';
	firstBook.style.textAlign = 'center'
	firstBook.style.textShadow = '1px 1px 2px black, 0 0 1em red';
	firstBook.style.font = 'italic  bold ' + 25*adaptationIndex + 'px cursive';
	firstBook.style.zIndex = '1';
	firstBook.innerHTML = 'First book "The Last Wish" contains :';
	exitGame.appendChild(firstBook);

	var createLi = document.getElementsByClassName("firstLi");

	var createOlFirst = document.createElement("ol");
	createOlFirst.id = 'list2';
	createOlFirst.style.position = 'absolute';
	createOlFirst.style.zIndex = '1';
	createOlFirst.style.top = 400*adaptationIndex + 'px';
	createOlFirst.style.left = 730*adaptationIndex + 'px';
	exitGame.appendChild(createOlFirst);

	var createOlFirst = document.getElementById("list2");

	for (var i = 0; i < lastWish.length; i++) {
	    var createLiFirstLi = document.createElement("li");
	    createLiFirstLi.innerHTML = lastWish[i]; 
	    createLiFirstLi.style.textShadow = '1px 1px 2px black, 0 0 1em red';
		createLiFirstLi.style.font = 'italic  bold ' + 25*adaptationIndex + 'px cursive';   
	    createLiFirstLi.style.color = 'white';
	    createOlFirst.appendChild(createLiFirstLi);
	};
};

var allButton = document.getElementsByTagName('button');

for (var i = 0; i < allButton.length; i++) {
	allButton[i].style.cursor = 'url(images/redAim.gif) 10 10, crosshair';
};