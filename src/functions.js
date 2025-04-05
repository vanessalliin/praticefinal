function hello(name) {
    return `hello ${name}`;
  }
  
  function sqftToAcres(sqft) {
    return sqft / 43560;
  }
  
  function mowTime(width, length, rate) {
    return (width * length) / rate;
  }
  
  function airQualityCategory(aqi) {
    if (aqi >= 0 && aqi <= 50) return "Good";
    else if (aqi <= 100) return "Moderate";
    else if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    else if (aqi <= 200) return "Unhealthy";
    else if (aqi <= 300) return "Very Unhealthy";
    else return "Hazardous";
  }
  
  function yeeHa(n) {
    const divisibleBy3 = n % 3 === 0;
    const divisibleBy7 = n % 7 === 0;
    if (divisibleBy3 && divisibleBy7) return "Yee Ha";
    else if (divisibleBy3) return "Yee";
    else if (divisibleBy7) return "Ha";
    else return "Nada";
  }
  
  function slope(x1, y1, x2, y2) {
    const run = x2 - x1;
    if (run === 0) return "undefined";
    return (y2 - y1) / run;
  }
  
  export { hello, sqftToAcres, mowTime, airQualityCategory, yeeHa, slope };
  