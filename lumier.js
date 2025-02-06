var Lumiere = document.getElementById('div2');
Lumiere.addEventListener('click',ajax)

var prise = document.getElementById('div3');
prise.addEventListener('click',ajax)

function ajax(){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var reponse=this.responseText;
            var objejson = JSON.parse(reponse);
            var Lumiere_html = "<h1>Controle des lumière connectées</h1>";
            var prise_html = "<h1>Controle des prises connectées</h1>";

            for (num in objejson){

                let uniqueid = objejson[num].uniqueid;
                let etat = objejson[num].state.on;
                let type = objejson[num].type;

                if(type == "Extended color light"){
                    Lumiere_html = Lumiere_html + '<div id="div_Lu"><img src="lightbulb.png" id="lumiere_'+num+'" alt="lumiere"><button onclick="on('+num+')" id="on_'+num+'">ON</button><button onclick="off('+num+')" id="off_'+num+'">OFF</button></div>';
                }
                else{
                    prise_html = prise_html + '<div id="div_Lu"><img src="plugin.png" id="lumiere_'+num+'" alt="lumiere"><button onclick="on('+num+')" id="on_'+num+'">ON</button><button onclick="off('+num+')" id="off_'+num+'">OFF</button></div>';
                }

            }

            var lum = document.getElementById("Lumière");
            lum.innerHTML = Lumiere_html;

            var pri = document.getElementById("Prises");
            pri.innerHTML = prise_html;

        }
    };
    xhttp.open("GET","http://172.20.21.230/api/F8F494C5EE/lights")
    xhttp.send();
}

function on(numero){
    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT",'http://172.20.21.230/api/F8F494C5EE/lights/'+numero+'/state');
    xhttp.send('{"on":true}');
}

function off(numero){
    const xhttp = new XMLHttpRequest();
    xhttp.open("PUT",'http://172.20.21.230/api/F8F494C5EE/lights/'+numero+'/state');
    xhttp.send('{"on":false}');
}