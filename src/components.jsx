import { hello, sqftToAcres, mowTime, airQualityCategory, yeeHa, slope } from './functions.js';

function Question1() {
  return (
    <section>
      <h2>Question 1: Greeting Function</h2>
      <p>hello("Rich") = {hello("Rich")}</p>
      <p>hello("Bill") = {hello("Bill")}</p>
      <p>hello("Chris") = {hello("Chris")}</p>
    </section>
  );
}

function Question2() {
  return (
    <section>
      <h2>Question 2: Square Feet to Acres</h2>
      <p>43560 sq ft = {sqftToAcres(43560)} acres</p>
      <p>87120 sq ft = {sqftToAcres(87120)} acres</p>
      <p>21780 sq ft = {sqftToAcres(21780)} acres</p>
    </section>
  );
}

function Question3() {
  return (
    <section>
      <h2>Question 3: Lawn Mowing Time</h2>
      <p>Lawn (10m x 20m at 5 m²/min) = {mowTime(10, 20, 5)} minutes</p>
      <p>Lawn (15m x 30m at 10 m²/min) = {mowTime(15, 30, 10)} minutes</p>
      <p>Lawn (25m x 40m at 8 m²/min) = {mowTime(25, 40, 8)} minutes</p>
    </section>
  );
}

function Question4() {
  return (
    <section>
      <h2>Question 4: Air Quality Index</h2>
      <p>AQI 30: {airQualityCategory(30)}</p>
      <p>AQI 75: {airQualityCategory(75)}</p>
      <p>AQI 125: {airQualityCategory(125)}</p>
      <p>AQI 175: {airQualityCategory(175)}</p>
      <p>AQI 250: {airQualityCategory(250)}</p>
      <p>AQI 350: {airQualityCategory(350)}</p>
    </section>
  );
}

function Question5() {
  return (
    <section>
      <h2>Question 5: yee_ha Function</h2>
      <p>Number 9: {yeeHa(9)}</p>
      <p>Number 14: {yeeHa(14)}</p>
      <p>Number 21: {yeeHa(21)}</p>
      <p>Number 8: {yeeHa(8)}</p>
    </section>
  );
}

function Question6() {
  return (
    <section>
      <h2>Question 6: Slope Calculation</h2>
      <p>Line from (0,0) to (10,10): {slope(0, 0, 10, 10)}</p>
      <p>Line from (1,2) to (4,8): {slope(1, 2, 4, 8)}</p>
      <p>Line from (-5,-5) to (5,0): {slope(-5, -5, 5, 0)}</p>
    </section>
  );
}

export { Question1, Question2, Question3, Question4, Question5, Question6 };
