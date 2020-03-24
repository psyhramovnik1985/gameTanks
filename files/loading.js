var adaptationIndex = screen.width/1900;
//var adaptationIndex = document.body.clientWidth/1900;

var game = document.getElementById('game');

function loading () {
    var divLoading = document.createElement("div");
    divLoading.id = 'divLoading';
    divLoading.style.margin = 50*adaptationIndex + 'px';
    divLoading.style.width = 1100*adaptationIndex + 'px'; 
    divLoading.style.height = 800*adaptationIndex + 'px'; 
    divLoading.style.backgroundColor = 'black'; 
    divLoading.style.position = 'absolute'; 
    divLoading.style.zIndex = '33';
    divLoading.style.border = 'solid 3px darkOrange';
    game.appendChild(divLoading);  

    var spinner1Loading = document.createElement("span");
    spinner1Loading.id = 'spinner1Loading';
    spinner1Loading.style.width = 119*adaptationIndex + 'px'; 
    spinner1Loading.style.height = 119*adaptationIndex + 'px';
    spinner1Loading.style.position = 'absolute'; 
    spinner1Loading.style.margin = 1*adaptationIndex + 'px 0 0 ' + 1*adaptationIndex + 'px';
    spinner1Loading.style.top = 340*adaptationIndex + 'px';
    spinner1Loading.style.left = 450*adaptationIndex + 'px';
    spinner1Loading.style.background = 'url(images/239.gif) no-repeat 50% 50%'; 
    spinner1Loading.style.backgroundSize = 110*adaptationIndex + 'px';
    divLoading.appendChild(spinner1Loading); 

    var spinner2Loading = document.createElement("span");
    spinner2Loading.id = 'spinner2Loading';
    spinner2Loading.style.width = 119*adaptationIndex + 'px'; 
    spinner2Loading.style.height = 119*adaptationIndex + 'px';
    spinner2Loading.style.position = 'absolute'; 
    spinner2Loading.style.margin = 1*adaptationIndex + 'px 0 0 ' + 1*adaptationIndex + 'px';
    spinner2Loading.style.top = 380*adaptationIndex + 'px';
    spinner2Loading.style.left = 555*adaptationIndex + 'px';
    spinner2Loading.style.background = 'url(images/239.gif) no-repeat 50% 50%'; 
    spinner2Loading.style.backgroundSize = 110*adaptationIndex + 'px'; 
    divLoading.appendChild(spinner2Loading); 

    var spinner3Loading = document.createElement("span");
    spinner3Loading.id = 'spinner3Loading';
    spinner3Loading.style.width = 270*adaptationIndex + 'px'; 
    spinner3Loading.style.height = 119*adaptationIndex + 'px';
    spinner3Loading.style.position = 'absolute'; 
    spinner3Loading.style.margin = 1*adaptationIndex + 'px 0 0 ' + 1*adaptationIndex + 'px';
    spinner3Loading.style.top = 500*adaptationIndex + 'px';
    spinner3Loading.style.left = 430*adaptationIndex + 'px';
    spinner3Loading.style.background = 'url(images/276.gif) no-repeat'; 
    spinner3Loading.style.backgroundSize = 270*adaptationIndex + 'px'; 
    divLoading.appendChild(spinner3Loading); 

    setTimeout(()=> {
        //menuGame.style.display = 'block';
        divLoading.style.display = 'none';
        windowAboutGame.style.display = 'none';
    }, 1000);
};
loading ();