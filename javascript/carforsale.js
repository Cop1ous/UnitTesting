function carForSale(){
var  airbags = 8;
var colour = "Black Metallic";
var cost = 93735;
var model = "Tundra Hybrid CrewMax Platinum";

console.log(airbags, colour, cost, model);
return { airbags, colour, cost, model };
}


module.exports = carForSale;