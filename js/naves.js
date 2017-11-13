$(document).ready(function(){ 
    
    var root = 'https://swapi.co/api/vehicles/';

    cargarnaves(root);


    function cargarnaves(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var tarjetas = '';

                for(var i=0; i<data.results.length; i++){
                    tarjetas += '<div class="col-lg-4 col-md-6 mb-4">';
                    tarjetas += '<div class="card">';
                    tarjetas += '<div class="card-body">';
                    tarjetas += ' <h3 class="card-title">Nombre:'+data.results[i].name+'</h3>';
                    tarjetas += '  <p class="card-title"> Modelo: '+data.results[i].model+'</p>';
                    tarjetas += '  <p class="card-title"> Longitud: '+data.results[i].length+'</p>';
                    tarjetas += '  <p class="card-title"> Tripulación: '+data.results[i].crew+'</p>';
                    tarjetas += '  <p class="card-title"> Pasajeros: '+data.results[i].passengers+'</p>';
                    tarjetas += '  <p class="card-title"> Clase de Vehículo: '+data.results[i].vehicle_class+'</p>';
                    tarjetas += ' </div>';
                    tarjetas += ' </div>';
                    tarjetas += '</div>';
                }
            
            $('#naves').html(tarjetas);
            
            $("#prev").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                cargarnaves(data.previous);
            });
            $("#next").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                cargarnaves(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
        });
    }


});
