var CalgaryLocation = {
  Name:"Calgary",
  Latitude: "51.0486",
  Longitude: "- 114.0708",
  Population: 1096833,
  Area: 825.29,
  Density: "Population/Area"
};
var EdmontonLocation = {
  Name:"Edmonton",
  Latitude: "53.5444",
  Longitude: "- 113.4909",
  Population: 960015,
  Area: 684.37,
  Density: "Population/Area"
};
var circleCalgary = document.getElementById('hoverCircle');
var circleEdmonton = document.getElementById('hoverCircle2');

var mapBox = document.getElementById('mapBox');

$(circleCalgary).mouseover(function(){
    $(mapBox).css('color:#444444');
    $(mapBox).html(`<div class='innerBoxInfo'>Name: Calgary,<br><br>Latitude: 51.0486,<br><br>Population: 1,096,833,<br><br>Longitude: - 114.0708,<br><br>Area: 825.29 SqKM,<br><br>Density: ${CalgaryLocation.Population / CalgaryLocation.Area}</div>`);
})
$(circleCalgary).mouseout(function(){
    $(mapBox).html(`<div></div>`);
})
$(circleEdmonton).mouseover(function(){
    $(mapBox).css('color:#444444');
    $(mapBox).html(`<div class='innerBoxInfo'>Name: Edmonton,<br><br>Latitude: 53.5444,<br><br>Population: 960,015,<br><br>Longitude: - 113.4909,<br><br>Area: 684.37 SqKM,<br><br>Density: ${EdmontonLocation.Population / EdmontonLocation.Area}</div>`);
})
$(circleEdmonton).mouseout(function(){
    $(mapBox).html(`<div></div>`);
})
