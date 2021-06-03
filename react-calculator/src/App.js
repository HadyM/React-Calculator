import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import devhady from "./Assets/devhady.png";
import comma from "./Components/Comma";
import "./App.css";
import buttons from "./Components/ButtonList";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const mathOperations = () => {
    const operator = !null;
    switch (operator) {
      case "+":
        setMemory(memory + parseFloat(value));
        break;
      case "-":
        setMemory(memory - parseFloat(value));
        break;
      case "×":
        setMemory(memory * parseFloat(value));
        break;
      case "÷":
        setMemory(memory / parseFloat(value));
        break;
      case "^":
        setMemory(Math.pow(memory, parseFloat(value)));
        break;
      default:
        setMemory(parseFloat(value));
    }
  };

  const handleButtonPress = (name) => () => {
    const number = parseFloat(value);

    const validOps = {
      AC: () => {
        setValue("0");
        setMemory(null);
        setOperator(null);
      },
      sin: (number) => {
        setValue(Math.sin(number).toString());
      },
      cos: (number) => {
        setValue(Math.cos(number).toString());
      },
      tan: (number) => {
        setValue(Math.tan(number).toString());
      },
      "√": (number) => {
        setValue(Math.sqrt(number).toString());
      },
      "^": () => {
        mathOperations();
        setValue("0");
        setOperator("^");
      },
      "±": (number) => {
        setValue((number * -1).toString());
      },
      "%": (number) => {
        setValue((number / 100).toString());
        setMemory(null);
        setOperator(null);
      },
      "+": () => {
        mathOperations();
        setValue("0");
        setOperator("+");
      },
      "-": () => {
        mathOperations();
        setValue("0");
        setOperator("-");
      },
      "×": () => {
        mathOperations();
        setValue("0");
        setOperator("×");
      },
      "÷": () => {
        mathOperations();
        setValue("0");
        setOperator("÷");
      },
    };

    if (validOps.hasOwnProperty(name)) {
      return validOps[name](number);
    }

    if (name === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (name === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "-") {
        setValue((memory - parseFloat(value)).toString());
      } else if (operator === "×") {
        setValue((memory * parseFloat(value)).toString());
      } else if (operator === "÷") {
        setValue((memory / parseFloat(value)).toString());
      } else if (operator === "^") {
        setValue(Math.pow(memory, parseFloat(value)).toString());
      }
      setMemory(null);
      setOperator(null);
      return;

      // If you want the calculator to round the result
      // Comment out line 119-135 and comment in line 140-156

      // if (operations === "=") {
      //   if (!operator) return;

      //   if (operator === "+") {
      //     setValue(Math.round(memory + parseFloat(value)).toString());
      //   } else if (operator === "-") {
      //     setValue(Math.round(memory - parseFloat(value)).toString());
      //   } else if (operator === "×") {
      //     setValue(Math.round(memory * parseFloat(value)).toString());
      //   } else if (operator === "÷") {
      //     setValue(Math.round(memory / parseFloat(value)).toString());
      //   } else if (operator === "^") {
      //     setValue(Math.pow(memory, parseFloat(value)).toString());
      //   }
      //   setMemory(null);
      //   setOperator(null);
      //   return;
    }

    if (value[value.length - 1] === ".") {
      setValue(value + name);
    } else {
      setValue(parseFloat(number + name).toString());
    }
  };

  return (
    <div className="App">
      <div className="Top">
        <div className="Time">
          {(time.getHours() % 12 || 12).toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}:
          {time.getSeconds().toString().padStart(2, "0")}
        </div>
        <div className="Menu">
          <img src={devhady} alt="logo" height="20px" />
        </div>
      </div>
      <div className="Display">{comma(value)}</div>
      <div className="Buttons">
        {buttons.map((button) => (
          <Buttons
            onButtonClick={handleButtonPress}
            name={button.name}
            type={button.type}
          >
            {button.name}
          </Buttons>
        ))}
      </div>
      <div className="Bottom"></div>
    </div>
  );
};

export default App;
