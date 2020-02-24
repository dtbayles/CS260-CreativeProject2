document.getElementById("teamSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("teamInput").value;
  const key = 'e09508312add4182b89664da9ebf88b4';
  let url;
  if (value === "")
    return;
  else {
    url = "https://api.sportsdata.io/v3/nba/stats/json/Players/" + value + "?key=e09508312add4182b89664da9ebf88b4";
    //url = "http://api.openweathermap.org/data/2.5/weather?q=Provo,US&units=imperial" + "&APPID=0e289b6ac1639c1a43f3a481ca8b9ad1";
  }

  let req = new Request(url, {'Ocp-Apim-Subscription-Key': 'e09508312add4182b89664da9ebf88b4'});

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "";

      results += '<p>All of the current players:</p>' + 
                  '<input class="form-control" id="myInput" type="text" placeholder="Search..">' +
              '<br>' +
                '<table class="table table-bordered table-striped bg-white">' +
                  '<thead>' +
                    '<tr>' +
                      '<th>First</th>' +
                      '<th>Last</th>' +
                      '<th>#</th>' +
                      '<th>Position</th>' +
                      '<th>Salary</th>' +
                      '<th>Weight</th>' +
                      '<th>Height</th>' +
                    '</tr>' +
                  '</thead>' +
                  '<tbody id="myTable">';
console.log(json.length);
      let tableHead = ["FirstName", "LastName", "Jersey", "Position", "Salary", "Weight", "Height"];
      for (let i = 0; i < tableHead.length; ++i) {
        results += '<tr>';
        for (let k = 0; k < json.length; ++k) {
          let temp = tableHead[i];
          results += '<td>' + json[k].temp + '</td>';
        }
        results += '</tr>';
      }


//json[0].FirstName == Anthony

      /*for (let i=0; i < json.weather.length; i++) {
        results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2 class="text-left">Temp: ' + json.main.temp + " &deg;F</h2>"
      results += '<h2 class="text-left">Feels Like: ' + json.main.feels_like + " &deg;F</h2>"
      results += '<h2 class="text-left">Humidity: ' + json.main.humidity + '%</h2>';
      results += "<h2 class='text-left'>Forecast: "
      for (let i=0; i < json.weather.length; i++) {
        results += json.weather[i].description
        if (i !== json.weather.length - 1)
          results += ", "
      }
      results += "</p>" + '</div>' + '</div>'; */
      results += '</tbody>' + '</table>';
      document.getElementById("teamResults").innerHTML = results;
    });
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

function testJson () {
  const request = new XMLHttpRequest();
  request.open("get", "/LAL.json");
  request.onload = () => {
    try {
      const json = JSON.parse(request.responseText);
      populateRankings(json);
    } catch (e) {
      console.warn("could not load lal.json");
    }
  };
  request.send();
}

function populateRankings(json) {
  console.log(json);
}

document.addEventListener("DOMContentLoaded", () => {testJson();});