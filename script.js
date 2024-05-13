$(document).ready(function() {
    // alert("made it here!");
    $("#searchInput").on("keyup", function(e) {
        var cityname = e.target.value;
        const APIKey = "cd98bca058df58fad69c8f2c83ad883e";
        // console.log(e.target.value);

        // alert("made it here!");

        // Make a request to the server
        $.ajax({
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=imperial`,
            
        }).done(function(weatherdata) {
            console.log(weatherdata.weather[0].description);

            $("#profile").html(`
            <div class="container> 
        
                <div class="row">
                    <div class="card" style="width: 18rem;">
                        <img class="card-img-top" src="https://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" alt="Card image cap">
                       <div class="card-body">
                           <h5 class="card-title">Weather: ${weatherdata.weather[0].description}</h5>
                            <p class="card-text">The temperature at ${cityname} is ${weatherdata.main.temp} &#8457; and it feels like it is ${weatherdata.main.feels_like} &#8457;</p>
                            <a href="https://en.wikipedia.org/wiki/${cityname}" class="btn btn-primary">Learn more about this place!</a>
                       </div>
                    </div>
                </div>

                </div>`);

    });
        })
    })
