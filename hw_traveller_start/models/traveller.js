const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
    return journey.startLocation
  })
  return result
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
    return journey.endLocation
  })
  return result
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter((journey) => {
    return journey.transport === transport
  })
  return result

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((journey) => {
    return journey.distance >= minDistance
  })
  return result
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.reduce((total, journey) => {
    return total + journey.distance
  },0)
  return result
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey) => {
    return journey.transport
  })
  unique = [...new Set(result)]
  return unique
};

// const indexOfDinosaur = this.dinosaurCollection.indexOf(dinosaur) // this goes through array of dinosaurs and finds the the object dinosour we are looking for thats passed as an attribute when creating the function
//     this.dinosaurCollection.splice(indexOfDinosaur, 1)// this removes the object from the list taking in two arguments the second requries how many index positions it wants us to remove                              



module.exports = Traveller;
