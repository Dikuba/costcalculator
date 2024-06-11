//residentialusers.js

// Modify functions to accept dynamic inputs
function calculateQuote(appliances) {
    const powerValues = appliances.map(
      (appliance) => appliance.powerRating * appliance.usage
    );
    const totalPower = powerValues.reduce((acc, curr) => acc + curr, 0);
    const peakPower = Math.ceil(pcrete(totalPower));
    const panelPrice = Math.ceil(pricepannau(peakPower));
    const batteryCapacity = Math.ceil(capacite(totalPower));
  
    return {
      totalPower,
      peakPower,
      panelPrice,
      batteryCapacity,
    };
  }
  
  module.exports = {
    calculateQuote,
  };
  
  function equipmentHating(a, b) {
    return a * b;
  }
  
  function Elements(tab) {
    if (!Array.isArray(tab)) {
      return "it should be a tab.";
    }
    const sum = tab.reduce((acc, curr) => acc + curr * 1.8, 0);
  
    return sum;
  }
  
  function pcrete(val) {
    return (val / 4) * 0.9;
  }
  
  function pricepannau(cap) {
    return (cap * 770000) / 260;
  }
  
  function capacite(energytotal) {
    return (energytotal / 24) * 0.7;
  }
  
  let appliance1 = equipmentHating(12.5, 5);
  let appliance2 = equipmentHating(8, 2);
  let appliance3 = equipmentHating(15, 1);
  console.log(appliance1);
  console.log(appliance2);
  console.log(appliance3);
  
  let tab = [appliance1, appliance2, appliance3];
  
  console.log("Value of  ???? is " + Elements(tab) + " watt/h ");
  
  let val = Elements(tab);
  console.log("la puissance crete est " + Math.ceil(pcrete(val)));
  
  let cap = pcrete(val);
  console.log("le prix du pannau va coute  " + Math.ceil(pricepannau(cap)));
  
  let energytotal = Elements(tab);
  
  console.log(
    "total of the battery energie is  " + Math.ceil(capacite(energytotal))
  );
  module.exports = {
    equipmentHating,
    Elements,
    pcrete,
    pricepannau,
    capacite,
    calculateQuote,
  };
  