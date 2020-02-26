document.getElementById("teamSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("teamInput").value;
  let url;
  if (value === "" || value.length != 3 || !isNaN(value)) {
    alert("Please provide a proper abbreviation!");
    return;
  }
  else {
    url = "https://api.sportsdata.io/v3/nba/stats/json/Players/" + value.toUpperCase() + "?key=e09508312add4182b89664da9ebf88b4";
  }

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      //console.log(json);
      let results = "";

      results += '<input class="form-control" id="myInput" type="text" placeholder="Search..">' +
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
      results += '</tbody>' + '</table>';
      document.getElementById("teamResults").innerHTML = results;
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
    });
});

document.getElementById("seasonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("seasonInput").value;
  const option = document.getElementById("yearOption").value;
  let url;
  if (value === "" || option ==="")
    return;
  else if (value === '' || isNaN(value) || value.length != 4 || value > 2020 || value < 2019) {
    alert("Please enter valid year! Note: Due to the free API, only 2019 and 2020 are acceptable values ");
    return;
  }
  else if (option === "TeamSeasonStats") {
    url = "https://api.sportsdata.io/v3/nba/scores/json/" + option + "/" + value + "?key=e09508312add4182b89664da9ebf88b4";
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<input class="form-control" id="myInput" type="text" placeholder="Search..">' +
              '<br>' +
                '<table class="table table-bordered table-striped bg-white">' +
                  '<thead>' +
                    '<tr>' +
                      '<th>Team</th>' +
                      '<th>Games</th>' +
                      '<th>Wins</th>' +
                      '<th>Losses</th>' +
                      '<th>FG%</th>' +
                      '<th>2P%</th>' +
                      '<th>3P%</th>' +
                      '<th>FT%</th>' +
                      '<th>Off R</th>' +
                      '<th>Def R</th>' +
                      '<th>Tot R</th>' +
                      '<th>Assists</th>' +
                      '<th>Steals</th>' +
                      '<th>TO\'s</th>' +
                    '</tr>' +
                  '</thead>' +
                  '<tbody id="myTable">';

      for (let i = 0; i < json.length; ++i) {
        results += '<tr>';
        results += '<td>' + json[i].Name + '</td>';
        results += '<td>' + json[i].Games + '</td>';
        results += '<td>' + json[i].Wins + '</td>';
        results += '<td>' + json[i].Losses + '</td>';
        results += '<td>$' + json[i].FieldGoalsPercentage + '</td>';
        results += '<td>' + json[i].TwoPointersPercentage + '</td>';
        results += '<td>' + json[i].ThreePointersPercentage + '</td>';
        results += '<td>' + json[i].FreeThrowsPercentage + '</td>';
        results += '<td>' + json[i].OffensiveRebounds + '</td>';
        results += '<td>' + json[i].DefensiveRebounds + '</td>';
        results += '<td>' + json[i].Rebounds + '</td>';
        results += '<td>' + json[i].Assists + '</td>';
        results += '<td>' + json[i].Steals + '</td>';
        results += '<td>' + json[i].Turnovers + '</td>';
        results += '</tr>';
      }
      results += '</tbody>' + '</table>';
      document.getElementById("seasonResults").innerHTML = results;
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
    });
  }
  else if (option === "Standings") {
    url = "https://api.sportsdata.io/v3/nba/scores/json/" + option + "/" + value + "?key=e09508312add4182b89664da9ebf88b4";
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<input class="form-control" id="myInput" type="text" placeholder="Search..">' +
              '<br>' +
                '<table class="table table-bordered table-striped bg-white">' +
                  '<thead>' +
                    '<tr>' +
                      '<th>Conference</th>' +
                      '<th>Team</th>' +
                      '<th>Wins</th>' +
                      '<th>Losses</th>' +
                      '<th>Streak</th>' +
                      '<th>Games Back</th>' +
                    '</tr>' +
                  '</thead>' +
                  '<tbody id="myTable">';

      for (let i = 0; i < json.length; ++i) {
        results += '<tr>';
        results += '<td>' + json[i].Conference + '</td>';
        results += '<td>' + json[i].Name + '</td>';
        results += '<td>' + json[i].Wins + '</td>';
        results += '<td>' + json[i].Losses + '</td>';
        results += '<td>' + json[i].StreakDescription + '</td>';
        results += '<td>' + json[i].GamesBack + '</td>';
        results += '</tr>';
      }
      results += '</tbody>' + '</table>';
      document.getElementById("seasonResults").innerHTML = results;
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
    });
  }
  else if (option === "AllStars") {
    url = "https://api.sportsdata.io/v3/nba/stats/json/" + option + "/" + value + "?key=e09508312add4182b89664da9ebf88b4";
    fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<input class="form-control" id="myInput" type="text" placeholder="Search..">' +
              '<br>' +
                '<table class="table table-bordered table-striped bg-white">' +
                  '<thead>' +
                    '<tr>' +
                      '<th>Team: ' + json[0].Team + '</th>' +
                      '<th>Team: ' + json[json.length-1].Team + '</th>' +
                    '</tr>' +
                  '</thead>' +
                  '<tbody id="myTable">';

      for (let i = 0; i < json.length / 2; ++i) {
        results += '<tr>';
        if (i == 12) {
          results += '<td>N/A</td>';
        }
        else {
          results += '<td>' + json[i].Name + '</td>';
        }
        results += '<td>' + json[i + 12].Name + '</td>';
        results += '</tr>';
      }
      results += '</tbody>' + '</table>';
      document.getElementById("seasonResults").innerHTML = results;
      $(document).ready(function(){
        $("#myInput").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#myTable tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      });
    });
  }
});

document.getElementById("playerSeasonSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("playerSeasonInput").value;
  let url;
  if (value === '' || isNaN(value) || value.length != 4 || value > 2020 || value < 2019) {
    alert("Please enter valid year! Note: Due to the free API, only 2019 and 2020 are acceptable values ");
    return;
  }
  else {
    url = "https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/" + value + "?key=e09508312add4182b89664da9ebf88b4";
  }

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<select class="browser-default custom-select col-sm-8" id="playerOption">' +
                    '<option selected>Choose Player</option>';

      for (let i = 0; i < json.length; ++i) {
        results += '<option value="' + json[i].Name + '">' + json[i].Name + '</option>';
      }
      results += '</select>' + '<button class="btn btn-outline-secondary col-sm-4" id="playerSubmit" type="button">Search</button>';
      document.getElementById("playerList").innerHTML = results;

      document.getElementById("playerSubmit").addEventListener("click", function(event) {
        let nameSelect = document.getElementById("playerOption").value;
        let playerData = "";

        playerData += '<table class="table table-bordered table-striped bg-white">' +
                        '<thead>' +
                          '<tr>' +
                            '<th>Season</th>' +
                            '<th>Position</th>' +
                            '<th>Team</th>' +
                            '<th>Games</th>' +
                            '<th>Started</th>' +
                            '<th>2P%</th>' +
                            '<th>3P%</th>' +
                            '<th>FT%</th>' +
                            '<th>Rebounds</th>' +
                            '<th>Steals</th>' +
                            '<th>Assists</th>' +
                          '</tr>' +
                        '</thead>' +
                        '<tbody id="myTable">';

        for (let i = 0; i < json.length; ++i) {
          if (json[i].Name == nameSelect) {
            playerData += '<tr>';
            playerData += '<td>' + json[i].Season + '</td>';
            playerData += '<td>' + json[i].Position + '</td>';
            playerData += '<td>' + json[i].Team + '</td>';
            playerData += '<td>' + json[i].Games + '</td>';
            playerData += '<td>' + json[i].Started + '</td>';
            playerData += '<td>' + json[i].TwoPointersPercentage + '</td>';
            playerData += '<td>' + json[i].ThreePointersPercentage + '</td>';
            playerData += '<td>' + json[i].FreeThrowsPercentage + '</td>';
            playerData += '<td>' + json[i].Rebounds + '</td>';
            playerData += '<td>' + json[i].Steals + '</td>';
            playerData += '<td>' + json[i].Assists + '</td>';
            playerData += '</tr>';
            break;
          }
        }
        playerData += '</tbody>' + '</table>';
        $(document).ready(function(){
          document.getElementById("playerResults").innerHTML = playerData;
          $(document).ready(function(){
            $("#myInput").on("keyup", function() {
              var value = $(this).val().toLowerCase();
              $("#myTable tr").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
              });
            });
          });
        });   
      });
    });
});


function resetPage() {
  document.getElementById("seasonResults").innerHTML = "";
  document.getElementById("teamResults").innerHTML = "";
  document.getElementById("playerList").innerHTML = '<select class="browser-default custom-select col-sm-8" id="playerOption" disabled><option selected>Choose Player</option></select>';
  document.getElementById("playerResults").innerHTML = "";
}