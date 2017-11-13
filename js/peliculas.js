$(document).ready(function(){ 
    
    var root = 'https://swapi.co/api/films/';

    cargarPeliculas(root);


    function cargarPeliculas(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var tarjetas = '';
                for(var i=0; i<data.results.length; i++){
                tarjetas += '<div class="card-group">';
                tarjetas += '<div class="col-lg-12 col-md-12 mb-4" style="color: #ffc107>';
                tarjetas += ' <div class="card-body">';
                tarjetas += ' <h4 class="card-title">Nombre: '+data.results[i].title+'</h4>';
                tarjetas += ' <p class="card-title">Episodio: '+data.results[i].episode_id+'</p>';
                tarjetas += ' <p class="card-title">Sinopsis: '+data.results[i].opening_crawl+'</p>';
                tarjetas += ' <p class="card-title">Fecha: '+data.results[i].release_date+'</p>';
                tarjetas += ' <p class="card-title">Director: '+data.results[i].director+'</p>';
                tarjetas += ' <p class="card-title">Productor:' +data.results[i].producer+'</p>';
                tarjetas += '  <ul class="card-title"> Personajes:';
                for(var g=0; g<data.results[i].characters.length; g++){
                    
                    tarjetas += personajes(data.results[i].characters[g]);
                    
                    
                }
            tarjetas +='</ul>';
                tarjetas += ' </div>';
                tarjetas += ' </div>';
            }
            $('#peliculas').html(tarjetas);
            
        
        },
        error: function (e) {
            console.log(e);
        }
    });
}
function personajes(url){
    var buscarpersonajes = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            //console.log(data);
           buscarpersonajes = '<li>' +data.name+  '</li>'
        },
    });
            
    return buscarpersonajes;
}
    });