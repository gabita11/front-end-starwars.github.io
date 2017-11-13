$(document).ready(function(){ 
    
    var root = 'https://swapi.co/api/planets/';

    cargarPlanetas(root);


    function cargarPlanetas(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var tarjetas = '';
                for(var i=0; i<data.results.length; i++){
                    tarjetas += '<div class="card-block">';
                    tarjetas += '<div class="card">';

                    tarjetas += ' <div class="card-body">';
                    tarjetas += ' <h4 class="card-title">Nombre:'+data.results[i].name+'</h4>';
                    tarjetas += ' <p class="card-title">Diametro:'+data.results[i].diameter+'</p>';
                    tarjetas += ' <p class="card-title">Clima:'+data.results[i].climate+'</p>';
                    tarjetas += ' <p class="card-title">Terrenos:'+data.results[i].terrain+'</p>';
                    tarjetas += ' <p class="card-title">Superfie de Agua:'+data.results[i].surface_water+'</p>';
                    tarjetas += ' <p class="card-title">Población:'+data.results[i].population+'</p>';
                    tarjetas += ' </div>';
                    tarjetas += ' </div>';
                }
                $('#planetas').html(tarjetas);
                
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    cargarPlanetas(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    cargarPlanetas(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            }
        });
    }
        });



  
