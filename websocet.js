const host = '172.20.21.230';
const port = 443;

const ws = new WebSocket('ws://' + host + ':' + port);

ws.onmessage = function(msg) {

    var objejson = (JSON.parse(msg.data));

    let id = objejson.id;
    let etat = objejson.state.on;

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var reponse=this.responseText;
            var reponce_final = JSON.parse(reponse);

            let type = reponce_final.type;

            if(type == "Extended color light" && etat == true){

                var img = document.getElementById("lumiere_"+id);
                img.src = "lightbulb-on.png"

            }

            if(type == "On/Off plug-in unit" && etat == true){

                var img = document.getElementById("lumiere_"+id);
                img.src = "plugin-on.png"

            }

            if(type == "Extended color light" && etat == false){

                var img = document.getElementById("lumiere_"+id);
                img.src = "lightbulb-off.png"

            }

            if(type == "On/Off plug-in unit" && etat == false){

                var img = document.getElementById("lumiere_"+id);
                img.src = "plugin-off.png"

            }

        }
    };
    xhttp.open("GET","http://172.20.21.230/api/F8F494C5EE/lights/"+id);
    xhttp.send();

}