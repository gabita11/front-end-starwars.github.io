$(document).ready(function(){ 
    
    var root = 'https://swapi.co/api/people/';

    cargarPersonajes(root);


    function cargarPersonajes(url){

        $.ajax({
            url: url,
            method: 'GET',
            success: function(data){
                console.log(data);
                var tarjetas = '';
                tarjetas += '<div class="card-group">';
                for(var i=0; i<data.results.length; i++){
                    tarjetas += '<div class="card">';
                    tarjetas += '<img class="card-img-top" src="imagenes/'+data.results[i].name.replace(" ","")+'.jpg" alt="'+data.results[i].name.replace(" ","")+'.jpg">';
                    tarjetas += '<div class="card-body">';
                    tarjetas += '  <h4 class="card-title">'+data.results[i].name+'</h4>';
                    tarjetas += '  <p class="card-title"> Especie: '+especies(data.results[i].species)+'</p>';
                    tarjetas += '  <p class="card-title"> Planeta: '+planetas(data.results[i].homeworld)+'</p>';
                    tarjetas += '  <p class="card-title"> Idioma: '+idioma(data.results[i].species)+'</p>';
                    tarjetas += '  <ul class="card-title"> Películas:';
                        for(var j=0; j<data.results[i].films.length; j++){
                            
                            tarjetas += pelicula(data.results[i].films[j]);
                            
                            
                        }
                    tarjetas +='</ul>';
                    tarjetas += '</div>';
                    tarjetas += '</div>';
                    if(i==4){
                        tarjetas += '</div>';
                        tarjetas += '<div class="card-group">';
                    }
                }
            
                tarjetas += '</div>';
                $('#personajes').html(tarjetas);
                
                $("#prev").on('click', function(e){
                    e.preventDefault();
                    if(data.previous!=null)
                    cargarPersonajes(data.previous);
                });
                $("#next").on('click', function(e){
                    e.preventDefault();
                    if(data.next!=null)
                    cargarPersonajes(data.next);
                });
            },
            error: function (e) {
                console.log(e);
            },
        });
    }
    function especies(url){
        var buscarEspecies = '';
        $.ajax({
            url: url[0],
            method: 'GET',
            async: false,
            success: function(data){
                //console.log(data);
                buscarEspecies = data.name;
            }
        });
        
        return buscarEspecies;
    }
    function planetas(url){
        var buscarplanetas = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                //console.log(data);
                buscarplanetas = data.name;
            }
        });
        
        return buscarplanetas;
    }
    function idioma(url){
        var buscaridioma = '';
        $.ajax({
            url: url[0],
            method: 'GET',
            async: false,
            success: function(data){
                //console.log(data);
                buscaridioma = data.language;
                //console.log(buscaridioma);
            }
        });
        
        return buscaridioma;
    }
    function pelicula(url){
        var buscarpelicula = '';
        $.ajax({
            url: url,
            method: 'GET',
            async: false,
            success: function(data){
                console.log(data);
               buscarpelicula = '<li> Episodio:' +data.episode_id+ '- Title:' +data.title+ '</li>'
            },
        });
                
        return buscarpelicula;
    }
   
});

