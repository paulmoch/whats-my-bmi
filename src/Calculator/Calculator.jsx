import { useState } from "react";
import "./Calculator.scss";

function Calculator() {
  // state
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmiText, setBmiText] = useState("");
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    //prevent submitting
    event.preventDefault();

    if (
      age === "" ||
      weight === "" ||
      height === "" ||
      /[^\d]/.test(age) ||
      /[^\d]/.test(weight) ||
      /[^\d]/.test(height)
    ) {
      alert("Please enter a valid age, weight and height.");
      window.location.reload();
    } else {
      if (age < 19) {
        alert("You must be 19 years or older to use this calculator.");
        return;
      }
      let heightM = height / 100;
      setBmiText("Your BMI is ");
      let bmi = weight / (heightM * heightM);
      setBmi(bmi.toFixed(1));

      // Logic for message

      if (bmi < 16) {
        setMessage("You are critically underweight.");
      } else if (bmi >= 16 && bmi < 18.5) {
        setMessage("You are underweight.");
      } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("You are healthy weight.");
      } else if (bmi >= 25 && bmi < 30) {
        setMessage("You are slightly overweight.");
      } else {
        setMessage("You are overweight.");
      }

      document.getElementById("result").scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Calculator">
      <form onSubmit={calcBmi}>
        <div className="scroll-wrapper">
          <div className="scroll-container">
            <section className="page age" id="age">
              <p className="small-text">Type in your</p>
              <label className="large-text">age</label>
              <input
                value={age}
                onChange={(event) => setAge(event.target.value)}
                placeholder="in years"
              />
              <button
                className="btn"
                type="button"
                onClick={() =>
                  document
                    .getElementById("weight")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Next
              </button>
            </section>
            <section className="page weight" id="weight">
              <p className="small-text">Type in your</p>
              <label className="large-text">weight</label>
              <input
                value={weight}
                onChange={(event) => setWeight(event.target.value)}
                placeholder="in kg"
              />
              <button
                className="btn"
                type="button"
                onClick={() =>
                  document
                    .getElementById("height")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Next
              </button>
            </section>
            <section className="page height" id="height">
              <p className="small-text">Type in your</p>
              <label className="large-text">height</label>
              <input
                value={height}
                onChange={(event) => setHeight(event.target.value)}
                placeholder="in cm"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </section>
            <section className="page result" id="result">
              <div className="bmi-wrapper">
                <p className="small-text">{bmiText}</p>
                <p className="large-text bmi">{bmi}</p>
                <p className="small-text">{message}</p>
              </div>
            </section>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Calculator;
