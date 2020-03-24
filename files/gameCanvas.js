        //див обёртка
        var gameCanvasMainDiv = document.createElement('div');
        gameCanvasMainDiv.id = 'gameCanvasMainDiv';
        gameCanvasMainDiv.style.position = 'absolute'; 
        game.appendChild(gameCanvasMainDiv);

        var gameCanvasMainDiv = document.getElementById('gameCanvasMainDiv');
        gameCanvasMainDiv.style.display = 'none';
        gameCanvasMainDiv.style.border = 'solid 3px darkOrange';
        gameCanvasMainDiv.style.margin = 50*adaptationIndex + 'px';
        gameCanvasMainDiv.style.width = 1100*adaptationIndex + 'px'; 
        gameCanvasMainDiv.style.height = 800*adaptationIndex + 'px';
        gameCanvasMainDiv.style.userSelect = 'none';

        //оснавная анимация
        var mainAnimation;  
        var animShot;
        var animScrap;

        //позиция мыши
        var mousePositionX;
        var mousePositionY; 

        //направление башни танка в позиции
        var leftPositionTowerTank = 0;
        var topPositionTowerTank = 0;
        var topPosition;
        var leftPosition;
        var positionX_Y;

        //переменная для задержки/перезарядки выстрела
        var rechargeShot = 0;

        var objTankGame = {
            // движение танка соперника
            enemyTank1Go: 0,
            enemyTank2Go: 0,
            enemyTank3Go: 0,
            enemyTank4Go: 0,
            enemyTankRightGo: 0,
            enemyTankLeftGo: 0,  
            stopTank1X: 0,
            stopTank1Y: 0,
            stopTank2X: 0,
            stopTank2Y: 0,
            stopTank3X: 0,
            stopTank3Y: 0,
            stopTank4X: 0,
            stopTank4Y: 0,
            stopTankLeftX: 0,
            stopTankLeftY: 0,
            stopTankRightX: 0,
            stopTankRightY: 0,
            accelerator: 0,
            // количество уничтоженных танков
            tanksDestroyed: 0,
            //наш танк расстреливают
            yourTankBoom: 0 
        };

        function restartGame() { 
            for (res in objTankGame) {  
                objTankGame[res] = 0;       
            };
        };

        //время, в которое подъехал тан противника к нашему танку
        var time1;
        var time2;
        var time3;
        var time4;
        var timeLeft;
        var timeRight;
        //текущая дата для определения продолжительности игры
        let timeGameAfter;

        //кнопка паузы
        var buttonPause = document.createElement('button');
        buttonPause.id = 'buttonPause';
        buttonPause.style.width = 100*adaptationIndex + 'px'
        buttonPause.style.height = 40*adaptationIndex + 'px'
        buttonPause.style.position = 'absolute';
        buttonPause.style.left = 500*adaptationIndex + 'px';
        buttonPause.style.top = 750*adaptationIndex + 'px';
        buttonPause.innerHTML = 'Pause';
        buttonPause.style.borderRadius = 5*adaptationIndex + 'px';
        buttonPause.style.font = 'italic bold ' + 20*adaptationIndex + 'px serif';
        buttonPause.style.outline = 'none';
        buttonPause.style.display = 'block';        
        buttonPause.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameCanvasMainDiv.appendChild(buttonPause);
        var buttonPause = document.getElementById('buttonPause');        

        //див меню
        var gameMenu = document.createElement('div');
        gameMenu.id = 'gameMenu';
        gameMenu.style.width = 200*adaptationIndex + 'px'
        gameMenu.style.height = 400*adaptationIndex + 'px'
        gameMenu.style.position = 'absolute';
        gameMenu.style.border = 'solid 1px darkOrange';
        gameMenu.style.borderRadius = 10*adaptationIndex + 'px';
        gameMenu.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameMenu.style.left = 450*adaptationIndex + 'px';
        gameMenu.style.top = 350*adaptationIndex + 'px';
        gameMenu.style.font = 'italic bold ' + 25*adaptationIndex + 'px serif';
        gameMenu.innerHTML = 'MENU/PAUSE';
        gameMenu.style.textAlign = 'center';
        gameMenu.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        gameMenu.style.zIndex = '12';
        gameMenu.style.display = 'none';
        gameCanvasMainDiv.appendChild(gameMenu);
        var gameMenu = document.getElementById('gameMenu');

        //кнопка меню продолжить
        var buttonContinue = document.createElement('button');
        buttonContinue.id = 'buttonContinue';
        buttonContinue.style.width = 120*adaptationIndex + 'px'
        buttonContinue.style.height = 40*adaptationIndex + 'px'
        buttonContinue.style.position = 'absolute';
        buttonContinue.style.left = 40*adaptationIndex + 'px';
        buttonContinue.style.top = 350*adaptationIndex + 'px';
        buttonContinue.innerHTML = 'Сontinue';
        buttonContinue.style.borderRadius = 5*adaptationIndex + 'px';
        buttonContinue.style.outline = 'none';
        buttonContinue.style.font = 'italic bold ' + 20*adaptationIndex + 'px serif';
        buttonContinue.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameMenu.appendChild(buttonContinue);
        var buttonContinue = document.getElementById('buttonContinue');

        //кнопка меню рестарт
        var buttonRestart = document.createElement('button');
        buttonRestart.id = 'buttonRestart';
        buttonRestart.style.width = 120*adaptationIndex + 'px';
        buttonRestart.style.height = 40*adaptationIndex + 'px';
        buttonRestart.style.position = 'absolute';
        buttonRestart.style.left = 40*adaptationIndex + 'px';
        buttonRestart.style.top = 300*adaptationIndex + 'px';
        buttonRestart.innerHTML = 'Restart';
        buttonRestart.style.borderRadius = 5*adaptationIndex + 'px';
        buttonRestart.style.outline = 'none';
        buttonRestart.style.font = 'italic bold ' + 20*adaptationIndex + 'px serif';
        buttonRestart.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameMenu.appendChild(buttonRestart);
        var buttonRestart = document.getElementById('buttonRestart');

        //кнопка меню возврат в главное меню
        var buttonBackMainMenu = document.createElement('button');
        buttonBackMainMenu.id = 'buttonBackMainMenu';
        buttonBackMainMenu.style.width = 120*adaptationIndex + 'px';
        buttonBackMainMenu.style.height = 40*adaptationIndex + 'px';
        buttonBackMainMenu.style.position = 'absolute';
        buttonBackMainMenu.style.left = 40*adaptationIndex + 'px';
        buttonBackMainMenu.style.top = 250*adaptationIndex + 'px';
        buttonBackMainMenu.innerHTML = 'Main menu';
        buttonBackMainMenu.style.borderRadius = 5*adaptationIndex + 'px';
        buttonBackMainMenu.style.outline = 'none';
        buttonBackMainMenu.style.font = 'italic bold ' + 20*adaptationIndex + 'px serif';
        buttonBackMainMenu.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameMenu.appendChild(buttonBackMainMenu);
        var buttonBackMainMenu = document.getElementById('buttonBackMainMenu');

        function pauseContinue() {
            requestAnimationFrame(step);
            gameMenu.style.display = 'none';
            buttonPause.style.display = 'block';
            if (musicOff === 1) { 
                audioTankEnemyGo.play();
            };
        };       

        function pauseMenu() {
            cancelAnimationFrame(mainAnimation);
            buttonPause.style.display = 'none';
            gameMenu.style.display = 'block';
            audioTankEnemyGo.pause();
        };        

        function restart() {
            restartGame();
            requestAnimationFrame(step);
            if (musicOff === 1) { 
                audioTankEnemyGo.play();
            };
            buttonPause.style.display = 'block';
            gameMenu.style.display = 'none';
        };        

        function backMainMenu() {
            restartGame();
            cancelAnimationFrame(mainAnimation);            
            menuGame.style.display = 'block';
            gameCanvasMainDiv.style.display = 'none';
            audioTankEnemyGo.pause(); 
            if (musicOff === 1) { 
                audioMain.play();
            };
        };

        buttonContinue.addEventListener('click', pauseContinue);
        buttonPause.addEventListener('click', pauseMenu);
        buttonRestart.addEventListener('click', restart);
        buttonBackMainMenu.addEventListener('click', backMainMenu);


        //див gaveOver
        var gameOver = document.createElement('div');
        gameOver.id = 'gameOver';
        gameOver.style.width = 400*adaptationIndex + 'px';
        gameOver.style.height = 400*adaptationIndex + 'px';
        gameOver.style.position = 'absolute';
        gameOver.style.border = 'solid 1px darkOrange';
        gameOver.style.borderRadius = 10*adaptationIndex + 'px';
        gameOver.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameOver.style.left = 350*adaptationIndex + 'px';
        gameOver.style.top = 200*adaptationIndex + 'px';
        gameOver.style.font = 'italic bold ' + 55*adaptationIndex + 'px serif';
        gameOver.innerHTML = 'Game over';
        gameOver.style.textAlign = 'center';
        gameOver.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        gameOver.style.zIndex = '12';
        gameOver.style.display = 'none';
        gameCanvasMainDiv.appendChild(gameOver);
        var gameOver = document.getElementById('gameOver');

        var inputNameText = document.createElement('p');
        inputNameText.id = 'inputNameText';
        inputNameText.style.width = 200*adaptationIndex + 'px';
        inputNameText.style.height = 25*adaptationIndex + 'px';
        inputNameText.style.font = 'italic bold ' + 25*adaptationIndex + 'px serif';
        inputNameText.style.borderRadius = 5*adaptationIndex + 'px';
        inputNameText.style.margin = 60*adaptationIndex + 'px 0 ' + 10*adaptationIndex + 'px ' + 100*adaptationIndex + 'px';
        inputNameText.style.textShadow = '1px 1px 2px black, 0 0 1em red';
        inputNameText.innerHTML = 'Enter your name:';        
        gameOver.appendChild(inputNameText);

        var inputName = document.createElement('input');
        inputName.id = 'inputName';
        inputName.style.width = 200*adaptationIndex + 'px';
        inputName.style.height = 25*adaptationIndex + 'px';
        inputName.style.borderRadius = 5*adaptationIndex + 'px';
        inputName.setAttribute('type','text')
        inputName.style.outline = 'none';
        inputName.style.fontSize = 25*adaptationIndex + 'px';
        inputName.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameOver.appendChild(inputName);
        var inputName = document.getElementById('inputName');

        inputName.onkeypress = function(event){
            if (event.charCode < 65 || (event.charCode > 90 && event.charCode < 97) || event.charCode > 122)
            return false;            
        };

        var scoreText = document.createElement('p');
        scoreText.id = 'scoreText';
        scoreText.style.width = 200*adaptationIndex + 'px';
        scoreText.style.height = 25*adaptationIndex + 'px';
        scoreText.style.font = 'italic bold ' + 25*adaptationIndex + 'px serif';
        scoreText.style.borderRadius = 5*adaptationIndex + 'px';
        scoreText.style.margin = 30*adaptationIndex + 'px 0 ' + 10*adaptationIndex + 'px ' + 95*adaptationIndex + 'px';
        scoreText.style.textShadow = '1px 1px 2px black, 0 0 1em red';   
        gameOver.appendChild(scoreText);

        //кнопка gaveOver возврат в главное меню
        var buttonGameOverBackMainMenu = document.createElement('button');
        buttonGameOverBackMainMenu.id = 'buttonGameOverBackMainMenu';
        buttonGameOverBackMainMenu.style.width = 120*adaptationIndex + 'px'
        buttonGameOverBackMainMenu.style.height = 40*adaptationIndex + 'px'
        buttonGameOverBackMainMenu.style.position = 'absolute';
        buttonGameOverBackMainMenu.style.left = 140*adaptationIndex + 'px';
        buttonGameOverBackMainMenu.style.top = 350*adaptationIndex + 'px';
        buttonGameOverBackMainMenu.innerHTML = 'Main menu';
        buttonGameOverBackMainMenu.style.borderRadius = 5*adaptationIndex + 'px';
        buttonGameOverBackMainMenu.style.outline = 'none';
        buttonGameOverBackMainMenu.style.font = 'italic bold ' + 20*adaptationIndex + 'px serif';
        buttonGameOverBackMainMenu.style.backgroundColor = 'rgba(255,255,255,0.2)';
        gameOver.appendChild(buttonGameOverBackMainMenu);
        var buttonGameOverBackMainMenu = document.getElementById('buttonGameOverBackMainMenu');

        function gameOverBackMainMenu() {
            if (objTankGame.tanksDestroyed > userDataFromStorage[userDataFromStorage.length-1].score) {
                userDataFromStorage.pop();
                userDataFromStorage.push({ name:inputName.value, score: objTankGame.tanksDestroyed })

                function compareScoreNew(a,b) {
                    return b.score-a.score;
                }

                userDataFromStorage.sort(compareScoreNew);
            };            
            restartGame();
            cancelAnimationFrame(mainAnimation); 

            menuGame.style.display = 'block';
            gameCanvasMainDiv.style.display = 'none'; 

            localStorage.setItem("userDataTank", JSON.stringify(userDataFromStorage)); 
            userDataFromStorage = JSON.parse(localStorage.getItem("userDataTank"));

            audioTankEnemyGo.pause();  
            if (musicOff === 1) { 
                audioMain.play();
            }        
        };

        buttonGameOverBackMainMenu.addEventListener('click', gameOverBackMainMenu);

        //канвас игра
        var canvasGame = document.createElement('canvas');
        canvasGame.id = 'canvasGame';
        canvasGame.width = 1100*adaptationIndex;
        canvasGame.height = 800*adaptationIndex;
        gameCanvasMainDiv.appendChild(canvasGame);
        

        var canvasGame = document.getElementById('canvasGame');
        var ctx = canvasGame.getContext('2d');

        canvasGame.style.margin = '0';

        //канвас буфер
        var bufferCanvas = document.createElement('canvas');
        var bufferCtx = bufferCanvas.getContext('2d');

        bufferCanvas.width = canvasGame.width;
        bufferCanvas.height = canvasGame.height;

        var canvasWidth = bufferCanvas.width;
        var canvasHeight = bufferCanvas.height;       

        canvasGame.onmousemove = function() {
            this.value = event.pageX + ':' + event.pageY;
            mousePositionX = (event.pageX - 50*adaptationIndex);
            mousePositionY = (event.pageY - 50*adaptationIndex);
        };                
        
        //скорость танков
        var speedTank1 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex;
        var speedTankRight = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex;
        var speedTank2 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex; 
        var speedTank3 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex;
        var speedTankLeft = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex;
        var speedTank4 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex; 
        
        function step() {
            mainAnimation = requestAnimationFrame(step); 

            timeGameAfter = new Date;

            if (parseInt((timeGameAfter-timeStart+90)/10)%2000 === 0) {
                objTankGame.accelerator += 0.15;
            };            

            bufferCtx.drawImage(imgBackground, 0, 0, 1100*adaptationIndex, 800*adaptationIndex);                
            imgBackground.src = linkBackground;
             
            bufferCtx.drawImage(imgBazeTank, 497*adaptationIndex, 365*adaptationIndex, 100*adaptationIndex, 80*adaptationIndex);                
            imgBazeTank.src = linkBazeTank;   

            directionTowerTank ();

            bufferCtx.drawImage(imgtowerTank, leftPositionTowerTank, topPositionTowerTank, 120, 95, 470*adaptationIndex, 335*adaptationIndex, 156*adaptationIndex, 123.5*adaptationIndex);
            imgtowerTank.src = linktowerTank;    

            function shotOrRecharge() {
                if (rechargeShot === 0) { 
                    let posX = mousePositionX;
                    let posY = mousePositionY;

                    let audioBoom = new Audio();
                    audioBoom.src = 'sounds/boom.mp3';
                    if (musicOff === 1) {
                        audioBoom.play();
                        audioBoom.currentTime = '2.0'; 
                    };

                    let fireShot = function() {
                        animShot = requestAnimationFrame(fireShot);

                        ctx.drawImage(imgBoomShot, posX - 40*adaptationIndex, posY - 40*adaptationIndex, 80*adaptationIndex, 80*adaptationIndex);    
                        imgBoomShot.src = linkBoomShot;
                        rechargeShot = 1;                                 
                    };  
                                        
                    fireShot();
                    setTimeout(() => {cancelAnimationFrame(animShot)}, 1000);

                    setTimeout(() => {                    
                        rechargeShot = 0;
                    }, 1000)

                } else { 
                    let audioRecharge = new Audio();
                    audioRecharge.src = 'sounds/recharge.mp3';
                    if (musicOff === 1) {
                        audioRecharge.play(); 
                    }; 
                };
            };

            function killEnemy() {
                
                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTank4X) 
                    && (mousePositionX < (objTankGame.stopTank4X + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTank4Y) 
                    && (mousePositionY < (objTankGame.stopTank4Y + 95*adaptationIndex))) {

                    objTankGame.enemyTank4Go = 0;
                    speedTank4 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;
                    let x = objTankGame.stopTank4X;
                    let y = objTankGame.stopTank4Y;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }
                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTank1X) 
                    && (mousePositionX < (objTankGame.stopTank1X + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTank1Y) 
                    && (mousePositionY < (objTankGame.stopTank1Y + 95*adaptationIndex))) {
                    
                    objTankGame.enemyTank1Go = 0;
                    speedTank1 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;

                    let x = objTankGame.stopTank1X;
                    let y = objTankGame.stopTank1Y;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }

                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTank2X) 
                    && (mousePositionX < (objTankGame.stopTank2X + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTank2Y) 
                    && (mousePositionY < (objTankGame.stopTank2Y + 95*adaptationIndex))) {
                    
                    objTankGame.enemyTank2Go = 0;
                    speedTank2 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;

                    let x = objTankGame.stopTank2X;
                    let y = objTankGame.stopTank2Y;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }

                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTank3X) 
                    && (mousePositionX < (objTankGame.stopTank3X + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTank3Y) 
                    && (mousePositionY < (objTankGame.stopTank3Y + 95*adaptationIndex))) {
                    
                    objTankGame.enemyTank3Go = 0;
                    speedTank3 = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;

                    let x = objTankGame.stopTank3X;
                    let y = objTankGame.stopTank3Y;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }

                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTankLeftX) 
                    && (mousePositionX < (objTankGame.stopTankLeftX + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTankLeftY) 
                    && (mousePositionY < (objTankGame.stopTankLeftY + 95*adaptationIndex))) {
                    
                    objTankGame.enemyTankLeftGo = 0;
                    speedTankLeft = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;

                    let x = objTankGame.stopTankLeftX;
                    let y = objTankGame.stopTankLeftY;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }

                if ((rechargeShot === 0) && (mousePositionX > objTankGame.stopTankRightX) 
                    && (mousePositionX < (objTankGame.stopTankRightX + 100*adaptationIndex)) 
                    && (mousePositionY > objTankGame.stopTankRightY) 
                    && (mousePositionY < (objTankGame.stopTankRightY + 95*adaptationIndex))) {

                    objTankGame.enemyTankRightGo = 0;
                    speedTankRight = (Math.ceil((Math.random()*10))/10 + 0.15)*adaptationIndex + objTankGame.accelerator;
                    objTankGame.tanksDestroyed += 1;

                    let x = objTankGame.stopTankRightX;
                    let y = objTankGame.stopTankRightY;

                    function scrap (){
                        animScrap = requestAnimationFrame(scrap)
                        ctx.drawImage(imgScrap, x, y, 100*adaptationIndex, 95*adaptationIndex);
                        imgScrap.src = linkScrap;
                    }    
                    setTimeout(() => {cancelAnimationFrame(animScrap)}, 500);
                    
                    scrap();
                }
            }; 

            if (((mousePositionX > objTankGame.stopTank1X) && (mousePositionX < (objTankGame.stopTank1X + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTank1Y) && (mousePositionY < (objTankGame.stopTank1Y + 95*adaptationIndex))) 
                || ((mousePositionX > objTankGame.stopTankRightX) && (mousePositionX < (objTankGame.stopTankRightX + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTankRightY) && (mousePositionY < (objTankGame.stopTankRightY + 95*adaptationIndex)))
                || ((mousePositionX > objTankGame.stopTank2X) && (mousePositionX < (objTankGame.stopTank2X + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTank2Y) && (mousePositionY < (objTankGame.stopTank2Y + 95*adaptationIndex)))
                || ((mousePositionX > objTankGame.stopTank3X) && (mousePositionX < (objTankGame.stopTank3X + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTank3Y) && (mousePositionY < (objTankGame.stopTank3Y + 95*adaptationIndex)))
                || ((mousePositionX > objTankGame.stopTankLeftX) && (mousePositionX < (objTankGame.stopTankLeftX + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTankLeftY) && (mousePositionY < (objTankGame.stopTankLeftY + 95*adaptationIndex)))
                || ((mousePositionX > objTankGame.stopTank4X) && (mousePositionX < (objTankGame.stopTank4X + 100*adaptationIndex)) && (mousePositionY > objTankGame.stopTank4Y) && (mousePositionY < (objTankGame.stopTank4Y + 95*adaptationIndex)))
                ) {
                game.style.cursor = 'url(images/redAim.gif) 10 10, crosshair';
            } else {
                game.style.cursor = 'url(images/greenAim.gif) 10 10, crosshair';
            };
 
            canvasGame.onclick = function() { 
                killEnemy();
                shotOrRecharge();  
            };        

            let enemyTank1 = function() {
                objTankGame.enemyTank1Go += (speedTank1 + objTankGame.accelerator);
                objTankGame.stopTank1X = 980*adaptationIndex - objTankGame.enemyTank1Go;
                objTankGame.stopTank1Y = -100*adaptationIndex + objTankGame.enemyTank1Go;

                if ((objTankGame.stopTank1X < 600*adaptationIndex)) {
                    objTankGame.stopTank1X = 600*adaptationIndex;
                    objTankGame.stopTank1Y = 280*adaptationIndex;
                    
                    let timeShot1 = new Date;
                    
                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };   

                    if ((timeShot1-time1) > 1000) {tankBoom ()};                    

                    if (parseInt((timeShot1-time1+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();
                        if (musicOff === 1) { 
                            audioEnemyTankShot1.play();
                            audioEnemyTankShot1.currentTime = '2.0';
                        } else {audioEnemyTankShot1.pause();}
                        
                    };

                } else {
                    time1 = new Date;
                };

                bufferCtx.drawImage(imgEnemyTank1, objTankGame.stopTank1X, objTankGame.stopTank1Y, 100*adaptationIndex, 95*adaptationIndex);               
                imgEnemyTank1.src = linkEnemyTank1;          
            };

            enemyTank1() 

            let enemyTankRight = function() {
                objTankGame.enemyTankRightGo += (speedTankRight + objTankGame.accelerator);
                objTankGame.stopTankRightX = 1100*adaptationIndex - objTankGame.enemyTankRightGo;
                objTankGame.stopTankRightY = 360*adaptationIndex;

                if ((objTankGame.stopTankRightX < 670*adaptationIndex)) {
                    objTankGame.stopTankRightX = 670*adaptationIndex;

                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };   

                    let timeShotRight = new Date;

                    if ((timeShotRight-timeRight) > 1000) {tankBoom ()};

                    if (parseInt((timeShotRight-timeRight+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();

                        if (musicOff === 1) { 
                            audioEnemyTankShotRight.play();
                            audioEnemyTankShotRight.currentTime = '2.0';
                        } else {audioEnemyTankShotRight.pause();}
                    }                   
                    
                } else {
                    timeRight = new Date
                };

                bufferCtx.drawImage(imgEnemyTankRight, objTankGame.stopTankRightX, objTankGame.stopTankRightY, 120*adaptationIndex, 95*adaptationIndex);
                imgEnemyTankRight.src = linkEnemyTankRight;           
            };

            enemyTankRight();

            let enemyTank2 = function() {            
                objTankGame.enemyTank2Go += (speedTank2 + objTankGame.accelerator);
                objTankGame.stopTank2X = 980*adaptationIndex - objTankGame.enemyTank2Go;
                objTankGame.stopTank2Y = 800*adaptationIndex - objTankGame.enemyTank2Go;

                if ((objTankGame.stopTank2X < 610*adaptationIndex)) {
                    objTankGame.stopTank2X = 610*adaptationIndex;
                    objTankGame.stopTank2Y = 430*adaptationIndex;

                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };   

                    let timeShot2 = new Date;

                    if ((timeShot2-time2) > 1000) {tankBoom ()};

                    if (parseInt((timeShot2-time2+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();
                        if (musicOff === 1) { 
                            audioEnemyTankShot2.play();
                            audioEnemyTankShot2.currentTime = '2.0';
                        } else {audioEnemyTankShot2.pause();}
                    };
                } else {
                    time2 = new Date
                };
                
                bufferCtx.drawImage(imgEnemyTank2, objTankGame.stopTank2X, objTankGame.stopTank2Y, 100*adaptationIndex, 95*adaptationIndex);               
                imgEnemyTank2.src = linkEnemyTank2;       
            };

            enemyTank2(); 

            let enemyTank3 = function() {
                objTankGame.enemyTank3Go += (speedTank3 + objTankGame.accelerator);
                objTankGame.stopTank3X = 20*adaptationIndex + objTankGame.enemyTank3Go;
                objTankGame.stopTank3Y = 820*adaptationIndex - objTankGame.enemyTank3Go;

                if ((objTankGame.stopTank3X > 400*adaptationIndex)) {
                    objTankGame.stopTank3X = 400*adaptationIndex;
                    objTankGame.stopTank3Y = 440*adaptationIndex;

                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };   
                    
                    let timeShot3 = new Date;

                    if ((timeShot3-time3) > 1000) {tankBoom ()};

                    if (parseInt((timeShot3-time3+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();
                        if (musicOff === 1) { 
                            audioEnemyTankShot3.play();
                            audioEnemyTankShot3.currentTime = '2.0';
                        } else {audioEnemyTankShot3.pause();}
                    };
                } else {
                    time3 = new Date
                };
                
                bufferCtx.drawImage(imgEnemyTank3, objTankGame.stopTank3X, objTankGame.stopTank3Y, 100*adaptationIndex, 90*adaptationIndex);               
                imgEnemyTank3.src = linkEnemyTank3;                 
            };

            enemyTank3();

            let enemyTankLeft = function() {
                objTankGame.enemyTankLeftGo += (speedTankLeft + objTankGame.accelerator);
                objTankGame.stopTankLeftX = -140*adaptationIndex + objTankGame.enemyTankLeftGo;
                objTankGame.stopTankLeftY = 360*adaptationIndex;

                if ((objTankGame.stopTankLeftX > 320*adaptationIndex)) {
                    objTankGame.stopTankLeftX = 320*adaptationIndex;

                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };                   

                    let timeShotLeft = new Date;

                    if ((timeShotLeft-timeLeft) > 1000) {tankBoom ()};

                    if (parseInt((timeShotLeft-timeLeft+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();
                        if (musicOff === 1) { 
                            audioEnemyTankShotLeft.play();
                            audioEnemyTankShotLeft.currentTime = '2.0';
                        } else {audioEnemyTankShotLeft.pause();}
                    };
                } else {
                    timeLeft = new Date
                };
                
                bufferCtx.drawImage(imgEnemyTankLeft, objTankGame.stopTankLeftX, objTankGame.stopTankLeftY, 130*adaptationIndex, 95*adaptationIndex);
                imgEnemyTankLeft.src = linkEnemyTankLeft;           
            };

            enemyTankLeft();     

            let enemyTank4 = function() {
                objTankGame.enemyTank4Go += (speedTank4 + objTankGame.accelerator);
                objTankGame.stopTank4X = 35*adaptationIndex + objTankGame.enemyTank4Go;
                objTankGame.stopTank4Y = -80*adaptationIndex + objTankGame.enemyTank4Go;

                if ((objTankGame.stopTank4X > 400*adaptationIndex)) {
                    objTankGame.stopTank4X = 400*adaptationIndex;
                    objTankGame.stopTank4Y = 285*adaptationIndex;

                    function tankBoom () {
                        bufferCtx.drawImage(imgYourTankBoom, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom.src = linkYourTankBoom;
                    };

                    function tankBoom1 () {
                        bufferCtx.drawImage(imgYourTankBoom1, 520*adaptationIndex, 320*adaptationIndex, 48*adaptationIndex, 65*adaptationIndex);
                        imgYourTankBoom1.src = linkYourTankBoom1;
                    };   
                    
                    let timeShot4 = new Date;

                    if ((timeShot4-time4) > 1000) {tankBoom ()};

                    if (parseInt((timeShot4-time4+90)/10)%100 === 0) {
                        objTankGame.yourTankBoom += 1;
                        tankBoom1 ();
                        if (musicOff === 1) { 
                            audioEnemyTankShot4.play();
                            audioEnemyTankShot4.currentTime = '2.0';
                        } else {audioEnemyTankShot4.pause();}
                    };
                } else {
                    time4 = new Date
                };
                
                bufferCtx.drawImage(imgEnemyTank4, objTankGame.stopTank4X, objTankGame.stopTank4Y, 100*adaptationIndex, 90*adaptationIndex);               
                imgEnemyTank4.src = linkEnemyTank4;
            };

            enemyTank4();

            bufferCtx.drawImage(imgScoreTable, 385*adaptationIndex, 0, 330*adaptationIndex, 100*adaptationIndex);               
            imgScoreTable.src = linkScoreTable;

            bufferCtx.fillStyle = 'red';
            bufferCtx.lineWidth = 1.7*adaptationIndex;
            bufferCtx.font = 'normal ' + 25*adaptationIndex + 'px Arial';
            bufferCtx.fillText('Tank armour: ' + (10 - objTankGame.yourTankBoom), 455*adaptationIndex, 30*adaptationIndex);
           
            bufferCtx.fillStyle = 'yellow';
            bufferCtx.lineWidth = 0.7*adaptationIndex;
            bufferCtx.font = 'normal ' + 25*adaptationIndex + 'px Arial';
            bufferCtx.fillText('Tanks destroyed: ' + objTankGame.tanksDestroyed, 440*adaptationIndex, 70*adaptationIndex);

            ctx.drawImage(bufferCanvas, 0, 0, canvasGame.width, canvasGame.height);

            //логика конец игры
            if (objTankGame.yourTankBoom >= 10) {
                scoreText.innerHTML = 'Your score: ' + objTankGame.tanksDestroyed;
                gameOver.style.display = 'block';
                cancelAnimationFrame(mainAnimation);
                buttonPause.style.display = 'none';

                audioTankEnemyGo.pause();
            };           
        };