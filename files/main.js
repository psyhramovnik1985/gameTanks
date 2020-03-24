var userDataFromStorage = JSON.parse(localStorage.getItem("userDataTank"));
var dataBooks;

if (userDataFromStorage === null) {
	var leaders=[
	  { name:'Andrey', score:50 },
	  { name:'Vasya', score:20 },
	  { name:'Denis', score:10 },
	  { name:'Dima', score:5 },
	  { name:'Misha', score:1 }
	];

	function compareScore(a,b) {
	  return b.score-a.score;
	}
	leaders.sort(compareScore);

	localStorage.setItem("userDataTank", JSON.stringify(leaders));
	userDataFromStorage = JSON.parse(localStorage.getItem("userDataTank"));
};

fetch('http://openlibrary.org/search.json?author=sapkowski')
    .then(response => response.json())       
    .then(data => {dataBooks = data.docs})
    .catch(error => console.error(error + 'что-то пошло не так('));

//звуки
var audioTankEnemyGo = new Audio();
var audioTankEnemyGoLink = 'sounds/tankGo.mp3'
audioTankEnemyGo.src = audioTankEnemyGoLink;

var musicOff = 0;
var audioMain = new Audio();
audioMain.src = 'sounds/boevaya-muzyka-v-boy.mp3';

var audioEnemyTankShot1 = new Audio();
audioEnemyTankShot1.src = 'sounds/boom.mp3';
audioEnemyTankShot1.currentTime = '2.0';

var audioEnemyTankShotLeft = new Audio();
audioEnemyTankShotLeft.src = 'sounds/boom.mp3';
audioEnemyTankShotLeft.currentTime = '2.0';

var audioEnemyTankShot2 = new Audio();
audioEnemyTankShot2.src = 'sounds/boom.mp3';
audioEnemyTankShot2.currentTime = '2.0';

var audioEnemyTankShot3 = new Audio();
audioEnemyTankShot3.src = 'sounds/boom.mp3';
audioEnemyTankShot3.currentTime = '2.0';

var audioEnemyTankShotRight = new Audio();
audioEnemyTankShotRight.src = 'sounds/boom.mp3';
audioEnemyTankShotRight.currentTime = '2.0';

var audioEnemyTankShot4 = new Audio();
audioEnemyTankShot4.src = 'sounds/boom.mp3';
audioEnemyTankShot4.currentTime = '2.0';

//  картинки
var imgScoreTable = new Image();
var linkScoreTable = 'images/scoreTable.png';

var imgBackground = new Image();
var linkBackground = 'images/fieldOfBattle.jpg';

var imgBazeTank = new Image();
var linkBazeTank = 'images/BazeTank.png';

var imgtowerTank = new Image();
var linktowerTank = 'images/tankSpriteMini.png';

var imgEnemyTank1 = new Image();
var linkEnemyTank1 = 'images/enemyTank1.png';

var imgEnemyTank2 = new Image();  
var linkEnemyTank2 = 'images/enemyTank2.png';

var imgEnemyTank3 = new Image();  
var linkEnemyTank3 = 'images/enemyTank3.png';

var imgEnemyTank4 = new Image();  
var linkEnemyTank4 = 'images/enemyTank4.png';

var imgEnemyTankRight = new Image();  
var linkEnemyTankRight = 'images/enemyTank1-2.png';

var imgEnemyTankLeft = new Image();  
var linkEnemyTankLeft = 'images/enemyTank3-4.png';

var imgEnemyTankTop = new Image();  
var linkEnemyTankTop = 'images/enemyTank4-1.png';

var imgBoomShot = new Image();  
var linkBoomShot = 'images/boom1.gif';

var imgScrap = new Image();  
var linkScrap = 'images/scrap.gif';

var imgYourTankBoom = new Image();  
var linkYourTankBoom = 'images/yourTanlBoom.gif';

var imgYourTankBoom1 = new Image();  
var linkYourTankBoom1 = 'images/yourTanlBoom1.gif';

//таймер старта игры
var timeStart;