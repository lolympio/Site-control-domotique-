var navO = document.getElementById("nav2");
navO.addEventListener('click',afficher_nav);
navO.addEventListener('click',ajax);

function afficher_nav(){
    document.getElementById('nav').style.display='block';
    document.getElementById('nav2').style.display='none';
}

var navF = document.getElementById("Fermer");
navF.addEventListener('click', fermer_nav);

function fermer_nav(){
    document.getElementById('nav').style.display='none';
    document.getElementById('nav2').style.display='block';   
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color1(){
    document.getElementById('div1').style.color='#556ab9';
    document.getElementById('div1').style.backgroundColor='#d5d7e9';
}


function div_reset1(){
    document.getElementById('div1').style.color='#d5d7e9';
    document.getElementById('div1').style.backgroundColor='#556ab9';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color2(){
    document.getElementById('div2').style.color='#556ab9';
    document.getElementById('div2').style.backgroundColor='#d5d7e9';
}


function div_reset2(){
    document.getElementById('div2').style.color='#d5d7e9';
    document.getElementById('div2').style.backgroundColor='#556ab9';
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color3(){
    document.getElementById('div3').style.color='#556ab9';
    document.getElementById('div3').style.backgroundColor='#d5d7e9';
}


function div_reset3(){
    document.getElementById('div3').style.color='#d5d7e9';
    document.getElementById('div3').style.backgroundColor='#556ab9';
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color4(){
    document.getElementById('div4').style.color='#556ab9';
    document.getElementById('div4').style.backgroundColor='#d5d7e9';
}


function div_reset4(){
    document.getElementById('div4').style.color='#d5d7e9';
    document.getElementById('div4').style.backgroundColor='#556ab9';
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color5(){
    document.getElementById('div5').style.color='#556ab9';
    document.getElementById('div5').style.backgroundColor='#d5d7e9';
}


function div_reset5(){
    document.getElementById('div5').style.color='#d5d7e9';
    document.getElementById('div5').style.backgroundColor='#556ab9';
}


///////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color6(){
    document.getElementById('Fermer').style.color='#556ab9';
    document.getElementById('Fermer').style.backgroundColor='#d5d7e9';
}


function div_reset6(){
    document.getElementById('Fermer').style.color='#d5d7e9';
    document.getElementById('Fermer').style.backgroundColor='#556ab9';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color7(){
    document.getElementById('div7').style.color='#556ab9';
    document.getElementById('div7').style.backgroundColor='#d5d7e9';
}


function div_reset7(){
    document.getElementById('div7').style.color='#d5d7e9';
    document.getElementById('div7').style.backgroundColor='#556ab9';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function div_color8(){
    document.getElementById('div8').style.color='#556ab9';
    document.getElementById('div8').style.backgroundColor='#d5d7e9';
}


function div_reset8(){
    document.getElementById('div8').style.color='#d5d7e9';
    document.getElementById('div8').style.backgroundColor='#556ab9';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
function div_color9(){
    document.getElementById('div9').style.color='#556ab9';
    document.getElementById('div9').style.backgroundColor='#d5d7e9';
}


function div_reset9(){
    document.getElementById('div9').style.color='#d5d7e9';
    document.getElementById('div9').style.backgroundColor='#556ab9';
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

function ajax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var reponse=this.responseText;
            var objejson = JSON.parse(reponse);

            var temp = objejson.main.temp;
            var icone = objejson.weather[0].icon;
            var long = objejson.coord.lon;
            var lat = objejson.coord.lat;
            var ville = objejson.name;
            var pays = objejson.sys.country;
            var icone_final = "https://openweathermap.org/img/wn/" + icone + "@2x.png";

            var div_7 = document.getElementById("pays");
            div_7.innerHTML = "le pay est : " + pays;

            var div_8 = document.getElementById("ville");
            div_8.innerHTML = "la ville est : " + ville;

            var div_9 = document.getElementById("temp");
            div_9.innerHTML = "la température est de : " + temp + "°C ";

            document.getElementById("image_meteo").src = icone_final;
        }
    };
    xhttp.open("GET","https://api.openweathermap.org/data/2.5/weather?lat=48.841386&lon=2.504038&appid=??&lang=fr&units=metric")
    xhttp.send();
}

