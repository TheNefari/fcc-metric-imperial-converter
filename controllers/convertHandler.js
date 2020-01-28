/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var result2;
    let reg =  /[^A-Z|^a-z|^\s]+/;
    let reg2 =  /[/]+[^/]*[/]+/;
    result  =  input.match(reg);
    result2  =  input.match(reg2);
    if(result2){return "invalid number"}
    //if(result==){return "x"}
    result  =  (result == null) ? 1 : eval(result[0]);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    let reg  =  /[A-Z|a-z]+/;
    result  =  input.match(reg)[0];
    result = result.toLowerCase();
    switch (result) {
      case "gal":
        result = "gal";
        break;
      case "l":
        result = "l";
        break;
      case "lbs":
        result = "lbs";
        break;
      case "kg":
        result = "kg";
        break;
      case "mi":
        result = "mi";
        break;
      case "km":
        result = "km";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    unit = unit.toLowerCase();
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilogram";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
        default:
        result = "invalid unit";
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    initUnit = initUnit.toLowerCase();
    switch (initUnit) {
      case "gal":
        result = initNum*galToL;
        break;
      case "l":
        result = initNum/galToL;
        break;
      case "lbs":
        result = initNum*lbsToKg;
        break;
      case "kg":
        result = initNum/lbsToKg;
        break;
      case "mi":
        result = initNum*miToKm;
        break;
      case "km":
        result = initNum/miToKm;
        break;
      default:
        result = "invalid unit";
}
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    if (initNum=="invalid number"&&returnUnit=="invalid unit"){return "invalid number and unit"}
    if (initNum=="invalid number"){return "invalid number"}
    if (returnUnit=="invalid unit"){return "invalid unit"}
    result = initNum+" "+this.spellOutUnit(initUnit)+" converts to "+returnNum.toPrecision(6)+" "+this.spellOutUnit(returnUnit);
    
    if (!result){return "please enter a number and unit"}
    return result;
  };
  
}

module.exports = ConvertHandler;
