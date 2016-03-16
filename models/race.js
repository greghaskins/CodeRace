var fs = require("fs");
var Race = function() {};

Race.prototype.getRaceData = function() {

  var fileName = __dirname + '/race.json';

  fs.readFile( fileName, 'utf8', function (err, data) {
    data = JSON.parse( data );
    global.raceData = data;
  });

}

Race.prototype.getStatus = function () {
  if (!global.raceData) {
    this.getRaceData();
  }

  return global.raceData;
}

Race.prototype.writeRaceData = function() {
  fs.writeFile( __dirname + "/" + "race.json", JSON.stringify(global.raceData));
}

module.exports = Race;
