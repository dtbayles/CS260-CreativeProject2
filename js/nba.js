document.getElementById("teamSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("teamInput").value;
  const key = 'e09508312add4182b89664da9ebf88b4';
  let url;
  if (value === "")
    return;
  else {
    url = "https://api.sportsdata.io/v3/nba/stats/json/Players/" + value + "?key=e09508312add4182b89664da9ebf88b4";
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
      let tableHead = ["FirstName", "LastName", "Jersey", "Position", "Salary", "Weight", "Height"];

      let FirstNames = [];
      json.filter(function (e){
        FirstNames.push(e.FirstName);
      });
      console.log(FirstNames);

      for (let i = 0; i < json.length; ++i) {
        results += '<tr>';
        results += '<td>' + json[i].FirstName + '</td>';
        results += '<td>' + json[i].LastName + '</td>';
        results += '<td>' + json[i].Jersey + '</td>';
        results += '<td>' + json[i].Position + '</td>';
        results += '<td>$' + json[i].Salary + '</td>';
        results += '<td>' + json[i].Weight + '</td>';
        results += '<td>' + json[i].Height + '</td>';
        results += '</tr>';
      }

//json[0].FirstName == Anthony

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


/*
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
  //console.log(json);
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
      let tableHead = ["FirstName", "LastName", "Jersey", "Position", "Salary", "Weight", "Height"];

      let FirstNames = [];
      json.filter(function (e){
        FirstNames.push(e.FirstName);
      });
      let LastNames = [];
      json.filter(function (e){
        LastNames.push(e.LastName);
      });
      //console.log(FirstNames);

      for (let i = 0; i < json.length; ++i) {
        results += '<tr>';
        //for (let k = 0; k < 2; ++k) {
          //let temp = tableHead[i];
          //console.log(json[k].temp);
          //console.log(json[k].FirstName);
          //results += '<td>' + FirstNames[k] + '</td>';
          //results += '<td>' + LastNames[k] + '</td>';
          results += '<td>' + json[i].FirstName + '</td>';
          results += '<td>' + json[i].LastName + '</td>';
          results += '<td>' + json[i].Jersey + '</td>';
          results += '<td>' + json[i].Position + '</td>';
          results += '<td>$' + json[i].Salary + '</td>';
          results += '<td>' + json[i].Weight + '</td>';
          results += '<td>' + json[i].Height + '</td>';
        //}
        results += '</tr>';
      }


//json[0].FirstName == Anthony

      //results += "</p>" + '</div>' + '</div>';
      results += '</tbody>' + '</table>';
      document.getElementById("teamResults").innerHTML = results;
}

document.addEventListener("DOMContentLoaded", () => {testJson();});

*/