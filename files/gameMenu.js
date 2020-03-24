        var menuGame = document.createElement("div");
        menuGame.id = 'menuGame';
        menuGame.style.display  = 'block';         
        menuGame.style.border = 'solid 3px darkOrange';
        menuGame.style.position = 'absolute'; 
        menuGame.style.margin = 50*adaptationIndex + 'px';
        menuGame.style.width = 1100*adaptationIndex + 'px'; 
        menuGame.style.height = 800*adaptationIndex + 'px';
        menuGame.style.userSelect = 'none';
        game.appendChild(menuGame);  

        var menuGame = document.getElementById('menuGame'); 

        //рисуем фон меню
        var divBackground = document.createElement("img");
        divBackground.classList.add('divBackground');
        divBackground.setAttribute('src','images/menuBackground.png');
        divBackground.style.width = 1100*adaptationIndex + 'px'; 
        divBackground.style.height = 800*adaptationIndex + 'px';  
        menuGame.appendChild(divBackground);
      
        var widthNameGame = window.innerWidth;

        var divBackground = menuGame.getElementsByClassName('divBackground')[0];  
        divBackground.style.position = 'absolute';
        divBackground.style.zIndex = '-1';

        //название игры
        let nameGame = document.createElement("div");
        nameGame.classList.add('nameGame');
        nameGame.style.position = 'absolute';
        nameGame.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        nameGame.style.whiteSpace = 'nowrap'
        nameGame.innerHTML = ' War Heroes';
        nameGame.style.width = '100%';
        nameGame.style.font = 'italic  bold ' + 120*adaptationIndex + 'px Trade Winds,cursive';
        menuGame.appendChild(nameGame);

        //кнопки основного меню
        var buttonStart = document.createElement("button");
        buttonStart.classList.add('buttonMenu');
        buttonStart.innerHTML = 'START';
        buttonStart.style.outline = 'none';     
        menuGame.appendChild(buttonStart);

        var buttonOption = document.createElement("button");
        buttonOption.classList.add('buttonMenu');
        buttonOption.innerHTML = 'OPTION';
        buttonOption.style.outline = 'none';
        menuGame.appendChild(buttonOption);

        var buttonLeaderBoard = document.createElement("button");
        buttonLeaderBoard.classList.add('buttonMenu');
        buttonLeaderBoard.innerHTML = 'Leader board';
        buttonLeaderBoard.style.outline = 'none';
        menuGame.appendChild(buttonLeaderBoard);

        var buttonAboutGame = document.createElement("button");
        buttonAboutGame.classList.add('buttonMenu');
        buttonAboutGame.innerHTML = 'ABOUT A GAME';
        buttonAboutGame.style.outline = 'none';
        menuGame.appendChild(buttonAboutGame);

        var buttonTanks = document.createElement("button");
        buttonTanks.classList.add('buttonMenu');
        buttonTanks.innerHTML = 'Info tanks';
        buttonTanks.style.outline = 'none';
        menuGame.appendChild(buttonTanks);

        var buttonExit = document.createElement("button");
        buttonExit.classList.add('buttonMenu');
        buttonExit.innerHTML = 'EXIT';
        buttonExit.style.outline = 'none';
        menuGame.appendChild(buttonExit);

        //стилезуем кнопки основного меню
        var buttonMas = menuGame.getElementsByClassName('buttonMenu');
        for (var i = 0; i < buttonMas.length; i++) {
            buttonMas[i].style.width = 280*adaptationIndex + 'px';
            buttonMas[i].style.font = 'italic bold ' + 25*adaptationIndex + 'px Trade Winds,cursive';
            buttonMas[i].style.textShadow = '1px 1px 2px black, 0 0 1em red';
            buttonMas[i].style.backgroundColor = 'rgba(255,255,255,0.2)';
            buttonMas[i].style.height = 60*adaptationIndex + 'px';
            buttonMas[i].style.borderRadius = 30*adaptationIndex + 'px';
            buttonMas[i].style.position = 'absolute';
            buttonMas[i].style.left = 800*adaptationIndex + 'px';                
            buttonMas[i].style.top = 180*adaptationIndex + 90*adaptationIndex*(i+1) + 'px';                   
        };

        //окно кнопки основного меню buttonLeaderBoard
        var windowLeaderBoard = document.createElement("div");
        windowLeaderBoard.classList.add('windowLeaderBoard');
        menuGame.appendChild(windowLeaderBoard);

        var windowLeaderBoard = menuGame.getElementsByClassName('windowLeaderBoard')[0];
        windowLeaderBoard.style.width = 400*adaptationIndex + 'px';
        windowLeaderBoard.style.display = 'none';
        windowLeaderBoard.style.height = 550*adaptationIndex + 'px';
        windowLeaderBoard.style.font = 'italic bold ' + 40*adaptationIndex + 'px Caveat,serif';
        windowLeaderBoard.style.position = 'absolute';
        windowLeaderBoard.style.left = 350*adaptationIndex + 'px';
        windowLeaderBoard.style.top = 150*adaptationIndex + 'px';
        windowLeaderBoard.style.zIndex = '12';
        windowLeaderBoard.style.padding = 7*adaptationIndex + 'px';
        windowLeaderBoard.style.borderRadius = 10*adaptationIndex + 'px';
        windowLeaderBoard.style.border = 'solid 2px DarkOrange';
        windowLeaderBoard.style.background = 'rgba(255,255,255,0.6)';

        //таблица лидеров
        var tableLeaderBoard = document.createElement("div");
        tableLeaderBoard.classList.add('tableLeaderBoard');       
        windowLeaderBoard.appendChild(tableLeaderBoard);

        var tableLeaderBoard = windowLeaderBoard.getElementsByClassName('tableLeaderBoard')[0];
        tableLeaderBoard.style.width = 400*adaptationIndex + 'px';
        tableLeaderBoard.style.height = 450*adaptationIndex + 'px';
        tableLeaderBoard.style.font = 'italic bold ' + 40*adaptationIndex + 'px Caveat,serif';
        tableLeaderBoard.style.zIndex = '12';
        tableLeaderBoard.style.padding = 7*adaptationIndex + 'px';

        //кнопка закрытия таблицы лидеров
        var buttonCloseLeaderBoard = document.createElement("button");
        buttonCloseLeaderBoard.classList.add('buttonCloseLeaderBoard');
        buttonCloseLeaderBoard.innerHTML = 'Close';
        buttonCloseLeaderBoard.style.outline = 'none';
        buttonCloseLeaderBoard.style.borderRadius = 10*adaptationIndex + 'px';
        buttonCloseLeaderBoard.style.width = 170*adaptationIndex + 'px';
        buttonCloseLeaderBoard.style.height = 40*adaptationIndex + 'px';
        buttonCloseLeaderBoard.style.textAlign = 'center';
        buttonCloseLeaderBoard.style.position = 'absolute';
        buttonCloseLeaderBoard.style.left = 135*adaptationIndex + 'px';
        buttonCloseLeaderBoard.style.top = 515*adaptationIndex + 'px';
        buttonCloseLeaderBoard.style.font = 'italic bold ' + 20*adaptationIndex + 'px Trade Winds,cursive';
        buttonCloseLeaderBoard.style.background = 'rgba(255,255,255,0.4)';
        buttonCloseLeaderBoard.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        windowLeaderBoard.appendChild(buttonCloseLeaderBoard);
        var buttonCloseLeaderBoard = menuGame.getElementsByClassName('buttonCloseLeaderBoard')[0];

        //окно кнопки основного меню ABOUT A GAME
        var windowAboutGame = document.createElement("div");
        windowAboutGame.classList.add('windowAboutGame');
        menuGame.appendChild(windowAboutGame);

        var windowAboutGame = menuGame.getElementsByClassName('windowAboutGame')[0];
        windowAboutGame.style.width = 800*adaptationIndex + 'px';
        windowAboutGame.style.display = 'block';
        windowAboutGame.style.height = 700*adaptationIndex + 'px';
        windowAboutGame.style.font = 'italic bold ' + 35*adaptationIndex + 'px Caveat, serif';
        windowAboutGame.style.position = 'absolute';
        windowAboutGame.style.left = 150*adaptationIndex + 'px';
        windowAboutGame.style.top = 30*adaptationIndex + 'px';
        windowAboutGame.style.zIndex = '12';
        windowAboutGame.style.padding = 7*adaptationIndex + 'px';
        windowAboutGame.style.borderRadius = 5*adaptationIndex + 'px';
        windowAboutGame.style.border = 'solid 2px DarkOrange';
        windowAboutGame.style.background = 'rgba(255,255,255,0.6)';

        var windowAboutGameText = document.createElement("p");
        windowAboutGameText.classList.add('windowAboutGameText');
        windowAboutGameText.innerHTML = 'Предыстория:'
        windowAboutGame.appendChild(windowAboutGameText);

        var windowAboutGameText2 = document.createElement("p");
        windowAboutGameText2.classList.add('windowAboutGameText');
        windowAboutGameText2.innerHTML = 'Отступая, танк наших героев, потерял на случайной мине траки. Силы противника начали окружать наших героев. Оставалось лишь отбиваться до последнего! Похоже Вам придёться сегодня умереть!'
        windowAboutGame.appendChild(windowAboutGameText2);

        var windowAboutGameText3 = document.createElement("p");
        windowAboutGameText3.classList.add('windowAboutGameText');
        windowAboutGameText3.innerHTML = 'Задача:'
        windowAboutGame.appendChild(windowAboutGameText3);

        var windowAboutGameText4 = document.createElement("p");
        windowAboutGameText4.classList.add('windowAboutGameText');
        windowAboutGameText4.innerHTML = 'Отстреливайте танки противника! Помните десятое попадание в Ваш танк смертельно! Каждые 20 секунд танки противника увеличивают скорость. У Вас преимущество- Вы гений маскировки, поэтому соперник видит Вас только с малого расстояния и соответственно стреляет только вблизи! Заберите с собой в могилу побольше противников!'
        windowAboutGame.appendChild(windowAboutGameText4);

        let buttonCloseAboutGame = document.createElement("button");
        buttonCloseAboutGame.classList.add('buttonCloseAboutGame');
        buttonCloseAboutGame.innerHTML = 'Close';
        buttonCloseAboutGame.style.outline = 'none';
        buttonCloseAboutGame.style.borderRadius = 10*adaptationIndex + 'px';
        buttonCloseAboutGame.style.width = 170*adaptationIndex + 'px';
        buttonCloseAboutGame.style.textAlign = 'center';
        buttonCloseAboutGame.style.position = 'absolute';
        buttonCloseAboutGame.style.left = '40%';
        buttonCloseAboutGame.style.top = 650*adaptationIndex + 'px';
        buttonCloseAboutGame.style.font = 'italic bold ' + 20*adaptationIndex + 'px Trade Winds,cursive';
        buttonCloseAboutGame.style.background = 'rgba(255,255,255,0.4)';
        buttonCloseAboutGame.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        windowAboutGame.appendChild(buttonCloseAboutGame);

        //окно OPTION
        var windowOption = document.createElement("div");
        windowOption.classList.add('windowOption');
        menuGame.appendChild(windowOption);

        var windowOption = menuGame.getElementsByClassName('windowOption')[0];
        windowOption.style.width = 400*adaptationIndex + 'px';
        windowOption.style.height = 600*adaptationIndex + 'px';
        windowOption.style.font = 'italic bold ' + 50*adaptationIndex + 'px Trade Winds,cursive';
        windowOption.style.display = 'none';
        windowOption.style.position = 'absolute';
        windowOption.style.textAlign = 'center';
        windowOption.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        windowOption.style.left = 350*adaptationIndex + 'px';
        windowOption.style.top = 150*adaptationIndex + 'px';
        windowOption.style.zIndex = '12';
        windowOption.style.padding = 7*adaptationIndex + 'px';
        windowOption.style.borderRadius = 5*adaptationIndex + 'px';
        windowOption.style.border = 'solid 2px DarkOrange';
        windowOption.style.background = 'rgba(255,255,255,0.6)';

        var titleOption = document.createElement("p");
        titleOption.classList.add('titleOption');
        titleOption.innerHTML = 'OPTION';    
        windowOption.appendChild(titleOption);

        var titleOption = windowOption.getElementsByClassName('titleOption')[0];
        titleOption.style.textAlign = "center";


        var textOption = document.createElement("p");
        textOption.classList.add('textOption');
        textOption.innerHTML = 'Music & sound';
        windowOption.appendChild(textOption);

        var text2Option = document.createElement("p");
        text2Option.classList.add('text2Option');
        text2Option.innerHTML = 'Off/On ';
        windowOption.appendChild(text2Option);

        //чекбокс реализованный через баттон
        var checkboxOption = document.createElement("button");
        checkboxOption.classList.add('checkboxOption');
        text2Option.appendChild(checkboxOption);          

        var checkboxOption = text2Option.getElementsByClassName('checkboxOption')[0];  
        checkboxOption.style.width = 50*adaptationIndex + 'px';
        checkboxOption.style.height = 50*adaptationIndex + 'px';
        checkboxOption.style.outline = 'none';
        checkboxOption.style.background = 'rgba(255,255,255,0)';
        checkboxOption.style.verticalAlign = 'middle';
        checkboxOption.style.border = 'none'

        var checkboxImg = document.createElement("img");
        checkboxImg.setAttribute('src','images/chekbox1.gif');
        checkboxImg.style.width = 45*adaptationIndex + 'px';
        checkboxImg.style.height = 45*adaptationIndex + 'px'; 
        checkboxImg.style.margin = '0'; 
        checkboxOption.appendChild(checkboxImg);

        let buttonCloseOption = document.createElement("button");
        buttonCloseOption.classList.add('buttonCloseOption');
        buttonCloseOption.innerHTML = 'Close';
        buttonCloseOption.style.outline = 'none';
        buttonCloseOption.style.position = 'absolute';
        buttonCloseOption.style.width = 400*adaptationIndex + 'px';
        buttonCloseOption.style.height = 40*adaptationIndex + 'px';
        buttonCloseOption.style.font = 'italic bold ' + 25*adaptationIndex + 'px Trade Winds,cursive';
        buttonCloseOption.style.top = 560 + 'px';
        buttonCloseOption.style.left = 10 + 'px';
        buttonCloseOption.style.borderRadius = 10*adaptationIndex + 'px';
        buttonCloseOption.style.background = 'rgba(255,255,255,0.4)';
        buttonCloseOption.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        buttonCloseOption.style.textAlign = 'center';
        windowOption.appendChild(buttonCloseOption);

        function start() {            
            menuGame.style.display = 'none';
            gameCanvasMainDiv.style.display = 'block';
            loading ();
            restartGame();
            step(); 
            gameOver.style.display = 'none';
            buttonPause.style.display = 'block';
            gameMenu.style.display = 'none';
            audioMain.pause();
            if (musicOff === 1) { 
                audioTankEnemyGo.play();
                audioTankEnemyGo.loop;
                audioTankEnemyGo.volume = '0.1';
            }; 
            timeStart = new Date;
        };

        function openOtion () {
            windowOption.style.display = 'block';
            buttonStart.disabled = true;
            buttonOption.disabled = true;  
            buttonLeaderBoard.disabled = true;  
            buttonAboutGame.disabled = true; 
            buttonTanks.disabled = true; 
            buttonExit.disabled = true;
        };

        function closeOption () {
            windowOption.style.display = 'none';
            buttonStart.disabled = false;
            buttonOption.disabled = false;  
            buttonLeaderBoard.disabled = false;  
            buttonAboutGame.disabled = false;
            buttonTanks.disabled = false;  
            buttonExit.disabled = false; 
        };

        function openLeaderBoard() {
            windowLeaderBoard.style.display = 'block';
            var table = '<table><tr><td>Leaders</td><td>Score</td></tr>';                            
                       
            for (lid in userDataFromStorage) {  
                table += '<tr><th>' + userDataFromStorage[lid].name + '</th><th>' + userDataFromStorage[lid].score + '</th></tr>'       
            };

            table += '</table>';

            tableLeaderBoard.innerHTML = table;

            var th = document.getElementsByTagName('th');
            var td = document.getElementsByTagName('td');

            for (var i = 0; i < td.length; i++) {
                td[i].style.width = 200*adaptationIndex + 'px';
                td[i].style.textAlign = 'center';
                td[i].style.textShadow = '1px 1px 2px black, 0 0 1em red';
            };

            for (var i = 0; i < th.length; i++) {
                th[i].style.width = 200*adaptationIndex + 'px';
            };

            buttonStart.disabled = true;
            buttonOption.disabled = true;  
            buttonLeaderBoard.disabled = true;  
            buttonAboutGame.disabled = true;
            buttonTanks.disabled = true;   
            buttonExit.disabled = true;  
        };

        function closeLeaderBoard() {
            windowLeaderBoard.style.display = 'none';

            buttonStart.disabled = false;
            buttonOption.disabled = false;  
            buttonLeaderBoard.disabled = false;  
            buttonAboutGame.disabled = false;  
            buttonTanks.disabled = false; 
            buttonExit.disabled = false;  
        };

        function openAboutGame() {
            windowAboutGame.style.display = 'block';
            buttonStart.disabled = true;
            buttonOption.disabled = true;  
            buttonLeaderBoard.disabled = true;  
            buttonAboutGame.disabled = true; 
            buttonTanks.disabled = true;  
            buttonExit.disabled = true;  
        };

        function closeAboutGame() {
            windowAboutGame.style.display = 'none';
            buttonStart.disabled = false;
            buttonOption.disabled = false;  
            buttonLeaderBoard.disabled = false;  
            buttonAboutGame.disabled = false;
            buttonTanks.disabled = false;   
            buttonExit.disabled = false; 
        };

        function infoT() {        
            abautTanks.style.display  = 'block';
            menuGame.style.display = 'none';
        }

        function exit() {
            menuGame.style.display = 'none';
            exitGame.style.display  = 'block';
        };
        
        function audioStart() {
            if (musicOff === 0) {           
                audioMain.play();
                audioMain.loop;
                audioMain.volume = '0.5'; 
                checkboxImg.setAttribute('src','images/chekbox.gif');                             
                musicOff += 1; 
            } else {
                checkboxImg.setAttribute('src','images/chekbox1.gif');
                audioMain.pause();
                audioTankEnemyGo.volume = '0';
                musicOff -= 1;
            };
        };

        buttonStart.addEventListener('click', start);

        buttonCloseOption.addEventListener('click', closeOption);
        buttonOption.addEventListener('click', openOtion);

        buttonLeaderBoard.addEventListener('click', openLeaderBoard);
        buttonCloseLeaderBoard.addEventListener('click', closeLeaderBoard);

        buttonAboutGame.addEventListener('click', openAboutGame);
        buttonCloseAboutGame.addEventListener('click', closeAboutGame);

        buttonTanks.addEventListener('click', infoT);
        
        buttonExit.addEventListener('click', exit);
        
        checkboxOption.addEventListener('click', audioStart);