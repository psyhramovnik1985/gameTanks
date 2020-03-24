	var abautTanks = document.createElement("div");
	abautTanks.id = 'abautTanks';
	game.appendChild(abautTanks); 

	var abautTanks = document.getElementById('abautTanks');  
	abautTanks.style.border = 'solid 3px darkOrange';
	abautTanks.style.margin = 50*adaptationIndex + 'px';
	abautTanks.style.width = 1100*adaptationIndex + 'px'; 
	abautTanks.style.height = 800*adaptationIndex + 'px'; 
	abautTanks.style.display  = 'none';
	abautTanks.style.position = 'absolute'; 

	var backgroundAbautTanks = document.createElement("img");
	backgroundAbautTanks.id = 'backgroundAbautTanks';
	backgroundAbautTanks.setAttribute('src','images/tanks/fonTanks.jpg');
	backgroundAbautTanks.style.width = 1100*adaptationIndex + 'px'; 
	backgroundAbautTanks.style.height = 800*adaptationIndex + 'px'; 
	backgroundAbautTanks.style.position = 'absolute';
	backgroundAbautTanks.style.zIndex = '-3'; 
	abautTanks.appendChild(backgroundAbautTanks);

	var headerAbautTanks = document.createElement("p");
	headerAbautTanks.id = 'headerAbautTanks';
	headerAbautTanks.style.position = 'absolute';
	headerAbautTanks.style.color = 'white';
	headerAbautTanks.style.textAlign = 'center';
	headerAbautTanks.style.marginLeft = '10%'
	headerAbautTanks.style.textShadow = '1px 15px 15px black';
	headerAbautTanks.style.font = 'italic  bold ' + 55*adaptationIndex + 'px monospace';
	headerAbautTanks.style.zIndex = '1';
	headerAbautTanks.innerHTML = 'Топ 5 самых популярных танков.';
	abautTanks.appendChild(headerAbautTanks);

	 //кнопки основного меню
    var buttonT1 = document.createElement("button");
    buttonT1.classList.add('buttonTanks');
    buttonT1.innerHTML = 'Russia';
    buttonT1.style.outline = 'none';
    buttonT1.style.zIndex = '11';     
    abautTanks.appendChild(buttonT1);

	var buttonT2 = document.createElement("button");
	buttonT2.classList.add('buttonTanks');
	buttonT2.innerHTML = 'Germany';
	buttonT2.style.outline = 'none';
	buttonT2.style.zIndex = '11';
	abautTanks.appendChild(buttonT2);

	var buttonT3 = document.createElement("button");
	buttonT3.classList.add('buttonTanks');
	buttonT3.innerHTML = 'America';
	buttonT3.style.outline = 'none';
	buttonT3.style.zIndex = '11';
	abautTanks.appendChild(buttonT3);

	var buttonT4 = document.createElement("button");
	buttonT4.classList.add('buttonTanks');
	buttonT4.innerHTML = 'China';
	buttonT4.style.outline = 'none';
	buttonT4.style.zIndex = '11';
	abautTanks.appendChild(buttonT4);

	var buttonT5 = document.createElement("button");
	buttonT5.classList.add('buttonTanks');
	buttonT5.innerHTML = 'France';
	buttonT5.style.outline = 'none';
	buttonT5.style.zIndex = '11';
	abautTanks.appendChild(buttonT5);

    var buttonMasTanks = abautTanks.getElementsByClassName('buttonTanks');

	for (var i = 0; i < buttonMasTanks.length; i++) {		
    	buttonMasTanks[i].style.width = 20 + '%';
    	buttonMasTanks[i].style.font = 'italic bold ' + 25*adaptationIndex + 'px Trade Winds,cursive';
    	buttonMasTanks[i].style.textShadow = '1px 1px 2px black, 0 0 1em red';
    	buttonMasTanks[i].style.backgroundColor = 'rgba(255,255,255,0.2)';
    	buttonMasTanks[i].style.height = 60*adaptationIndex + 'px';
    	buttonMasTanks[i].style.borderRadius = 30*adaptationIndex + 'px';
    	buttonMasTanks[i].style.marginTop = 140*adaptationIndex + 'px';
    };

    var infoTanks = document.createElement("div");
	infoTanks.id = 'infoTanks';
	abautTanks.appendChild(infoTanks); 

	var infoTanks = document.getElementById('infoTanks'); 
	infoTanks.style.margin = 2 + '%';
	infoTanks.style.width = 96 + '%'; 
	infoTanks.style.height = 500*adaptationIndex + 'px'; 
	infoTanks.style.position = 'absolute'; 

	var imgTanks = document.createElement("img");
	imgTanks.id = 'imgTanks';
	infoTanks.appendChild(imgTanks); 

	var imgTanks = document.getElementById('imgTanks');  
	imgTanks.style.border = 'solid 3px darkOrange';
	imgTanks.style.marginTop = '30px';
	imgTanks.style.width = 33 + '%'; 
	imgTanks.style.height = 350*adaptationIndex + 'px';
	imgTanks.style.position = 'absolute'; 

	var infoTanksCenterCol = document.createElement("div");
	infoTanksCenterCol.id = 'infoTanksCenterCol';
	infoTanks.appendChild(infoTanksCenterCol); 

	var infoTanksCenterCol = document.getElementById('infoTanksCenterCol');  
	infoTanksCenterCol.style.marginTop = 0 + 'px';
	infoTanksCenterCol.style.width = 62 + '%'; 
	infoTanksCenterCol.style.height = 470*adaptationIndex + 'px'; 
	infoTanksCenterCol.style.textAlign = 'left'
	infoTanksCenterCol.style.textShadow = '1px 1px 2px black, 0 0 12px red';
	infoTanksCenterCol.style.color = 'white';
	infoTanksCenterCol.style.font = 'italic bold ' + 18*adaptationIndex + 'px cursive';	
	infoTanksCenterCol.style.position = 'absolute';
	infoTanksCenterCol.style.left = 35 + '%'; 

	var nameTank = document.createElement("div");
	nameTank.id = 'nameTank';
	nameTank.style.position = 'absolute';
	nameTank.style.top = 400*adaptationIndex + 'px';  
	nameTank.style.font = 'italic bold ' + 30*adaptationIndex + 'px Trade Winds,cursive';
	nameTank.style.textShadow = '1px 1px 2px black, 0 0 12px red';
	infoTanks.appendChild(nameTank); 	

	var buttonCloseInfoTank = document.createElement("button");
    buttonCloseInfoTank.classList.add('buttonMenu');
    buttonCloseInfoTank.innerHTML = 'Close';
    buttonCloseInfoTank.style.outline = 'none';
    buttonCloseInfoTank.style.width = 150*adaptationIndex + 'px';
    buttonCloseInfoTank.style.font = 'italic bold ' + 22*adaptationIndex + 'px Trade Winds,cursive';
    buttonCloseInfoTank.style.textShadow = '1px 1px 2px black, 0 0 1em red';
    buttonCloseInfoTank.style.backgroundColor = 'rgba(255,255,255,0.4)';
    buttonCloseInfoTank.style.height = 40*adaptationIndex + 'px';
    buttonCloseInfoTank.style.borderRadius = 20*adaptationIndex + 'px';
    buttonCloseInfoTank.style.position = 'absolute';
    buttonCloseInfoTank.style.left = 485*adaptationIndex + 'px';                
    buttonCloseInfoTank.style.top = 755*adaptationIndex + 'px';   
    abautTanks.appendChild(buttonCloseInfoTank);

	function HashStorage () {
		this.addValue = function (key,value) {
			this[key] = value;
		};

		this.getValue = function () {		
			var sostav = (this[key]);

			if (key in this) {
				let table = '<table>';
				for (let i = 0; i < sostav.length; i+=1) {
					table += ('<tr><td>' + sostav[i] + '</td></tr>');
				};

				table += '</table>';			

				return table;
			};
		};
	};	

	var tankStorage = new HashStorage();

	function thStyle() {
		var tableRight = document.getElementsByTagName('td');
		for (var i = 0; i < tableRight.length; i++) {
			tableRight[i].style.width = 600*adaptationIndex + 'px';
			if (i%2 === 0) {
				tableRight[i].style.textAlign = 'left';
			} else {
				tableRight[i].style.textAlign = 'right';
			}
		};
	};
		
	tankStorage.addValue('Russian Т-90', [
		'Боевая масса, т:',
		'46.5', 
		'Длинна/Ширина/Высота, мм:',
		'6860/3780/2230',	
		'Калибр:',
		'125-мм', 
		'Тип пушки:',
		'гладкоствольная', 
		'Длина ствола, калибров:',
		'48', 
		'Пулемёты:',
		'2 × 7,62-мм ПКТМ',
		'Тип двигателя:',
		'В-92С2Ф', 
		'Скорость по шоссе, км/ч:',
		'65-70'
		]);

	tankStorage.addValue('Germany Leopard 2', [
		'Боевая масса, т:',
		'50-63', 
		'Длинна/Ширина/Высота, мм:',
		'7700/3700/2790',	
		'Калибр:',
		'120-мм', 
		'Тип пушки:',
		'гладкоствольная', 
		'Длина ствола, калибров:',
		'55', 
		'Пулемёты:',
		'2 × 7,62-мм MG3',
		'Тип двигателя:',
		'MB 873 Ka-501', 
		'Скорость по шоссе, км/ч:',
		'68-72'
		]);

	tankStorage.addValue('American M1 Abrams', [
		'Боевая масса, т:',
		'54,4- 63,1', 
		'Длинна/Ширина/Высота, мм:',
		'7925/3653/2400',	
		'Калибр:',
		'105-мм', 
		'Тип пушки:',
		'нарезная', 
		'Длина ствола, калибров:',
		'44,2-50,92', 
		'Пулемёты:',
		'1×12,7-мм M2HB, 2×7,62-мм M240',
		'Тип двигателя:',
		'AGT-1500', 
		'Скорость по шоссе, км/ч:',
		'66,8-72'
		]);

	tankStorage.addValue('China MBT-2000', [
		'Боевая масса, т:',
		'48,0', 
		'Длинна/Ширина/Высота, мм:',
		'6953/3372/2300',	
		'Калибр:',
		'125-мм', 
		'Тип пушки:',
		'гладкоствольная', 
		'Длина ствола, калибров:',
		'48', 
		'Пулемёты:',
		'1 × 12,7-мм QJC-88, 1 × 7,62-мм Тип 86',
		'Тип двигателя:',
		'6ТД-2', 
		'Скорость по шоссе, км/ч:',
		'70'
		]);

	tankStorage.addValue('France AMX-56 Leclerc', [
		'Боевая масса, т:',
		'54,6-57,4', 
		'Длинна/Ширина/Высота, мм:',
		'6880/3710/2953',	
		'Калибр:',
		'120-мм', 
		'Тип пушки:',
		'гладкоствольная', 
		'Длина ствола, калибров:',
		'52', 
		'Пулемёты:',
		'1 × 12,7-мм M2HB-QBC, 1 × 7,62-мм AAN F1',
		'Тип двигателя:',
		'V8X 1500', 
		'Скорость по шоссе, км/ч:',
		'71'
		]);

	function russian() {
		key = 'Russian Т-90';
		imgTanks.setAttribute('src','images/tanks/t-90.jpg');
		infoTanksCenterCol.innerHTML = tankStorage.getValue();
		nameTank.innerHTML = key;
		thStyle();
	};	

	function germany() {
		key = 'Germany Leopard 2';
		imgTanks.setAttribute('src','images/tanks/Leopard 2.jpg');
		infoTanksCenterCol.innerHTML = tankStorage.getValue();
		nameTank.innerHTML = key;
		thStyle();
	};	

	function american() {
		key = 'American M1 Abrams';
		imgTanks.setAttribute('src','images/tanks/M1 Abrams.jpg');
		infoTanksCenterCol.innerHTML = tankStorage.getValue();
		nameTank.innerHTML = key;
		thStyle();
	};	

	function china() {
		key = 'China MBT-2000';
		imgTanks.setAttribute('src','images/tanks/MBT-2000.jpg');
		infoTanksCenterCol.innerHTML = tankStorage.getValue();
		nameTank.innerHTML = key;
		thStyle();
	};	

	function france() {
		key = 'France AMX-56 Leclerc';
		imgTanks.setAttribute('src','images/tanks/AMX-56.jpg');
		infoTanksCenterCol.innerHTML = tankStorage.getValue();
		nameTank.innerHTML = key;
		thStyle();
	};	

	function closeInfoTank() {
		abautTanks.style.display  = 'none';
        menuGame.style.display = 'block';
	};

	russian();

	buttonT1.addEventListener('click', russian);
	buttonT2.addEventListener('click', germany);
	buttonT3.addEventListener('click', american);
	buttonT4.addEventListener('click', china);
	buttonT5.addEventListener('click', france);
	buttonCloseInfoTank.addEventListener('click', closeInfoTank);

	