$(document).ready(function(){ 
    
    var root = 'https://swapi.co/api/starships/';

    cargarcruceros(root);


    function cargarcruceros(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var tarjetas = '';

                for(var i=0; i<data.results.length; i++){
                    tarjetas += '<div class="col-lg-12 col-md-12 mb-4" border-dark>';
                    tarjetas += '<div class="card">';
                    tarjetas += '<img class="card-img-top" src="imagenes/'+data.results[i].name.replace(" ","")+'.jpg" alt="'+data.results[i].name.replace(" ","")+'.jpg">';
                    tarjetas += '<div class="card-body">';
                    tarjetas += ' <h3 class="card-title">Nombre: '+data.results[i].name+'</h3>';
                    tarjetas += '  <p class="card-title"> Modelo: '+data.results[i].model+'</p>';
                    tarjetas += '  <p class="card-title"> Manufacturado: '+data.results[i].manufacturer+'</p>';
                    tarjetas += '  <p class="card-title"> Tripulación: '+data.results[i].crew+'</p>';
                    tarjetas += '  <p class="card-title"> Pasajeros: '+data.results[i].passengers+'</p>';
                    tarjetas += ' </div>';
                    tarjetas += ' </div>';
                    tarjetas += '</div>';
                }
            
            $('#cruceros').html(tarjetas);
            
            $("#prev").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                cargarcruceros(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarcruceros(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
        });
    }


});