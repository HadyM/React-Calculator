import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";

import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  const mathOperations = () => {
    if (operator !== null) {
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "−") {
        setMemory(memory - parseFloat(value));
      } else if (operator === "×") {
        setMemory(memory * parseFloat(value));
      } else if (operator === "÷") {
        setMemory(memory / parseFloat(value));
      } else if (operator === "^") {
        setMemory(Math.pow(memory, parseFloat(value)));
      }
    } else {
      setMemory(parseFloat(value));
    }
  };

  const handleButtonPress = (operations) => () => {
    const number = parseFloat(value);

    if (operations === "AC") {
      setValue("0");
      setMemory(null);
      setOperator(null);
      return;
    }

    if (operations === "sin") {
      setValue(Math.sin(number).toString());
      return;
    }

    if (operations === "cos") {
      setValue(Math.cos(number).toString());
      return;
    }

    if (operations === "tan") {
      setValue(Math.tan(number).toString());
      return;
    }

    if (operations === "√") {
      setValue(Math.sqrt(number).toString());
      return;
    }

    if (operations === "^") {
      mathOperations();
      setValue("0");
      setOperator("^");
      return;
    }

    if (operations === "±") {
      setValue((number * -1).toString());
      return;
    }

    if (operations === "%") {
      setValue((number / 100).toString());
      setMemory(null);
      setOperator(null);
      return;
    }

    if (operations === ".") {
      if (value.includes(".")) return;

      setValue(value + ".");
      return;
    }

    if (operations === "+") {
      mathOperations();
      setValue("0");
      setOperator("+");
      return;
    }

    if (operations === "-") {
      mathOperations();
      setValue("0");
      setOperator("-");
      return;
    }

    if (operations === "×") {
      mathOperations();
      setValue("0");
      setOperator("×");
      return;
    }

    if (operations === "÷") {
      mathOperations();
      setValue("0");
      setOperator("÷");
      return;
    }

    if (operations === "=") {
      if (!operator) return;

      if (operator === "+") {
        setValue((memory + parseFloat(value)).toString());
      } else if (operator === "−") {
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
    }

    if (value[value.length - 1] === ".") {
      setValue(value + operations);
    } else {
      setValue(parseFloat(number + operations).toString());
    }
  };

  return (
    <div className="App">
      <div className="Top">16:10</div>
      <div className="Display">{value}</div>
      <div className="Buttons">
        <Buttons
          onButtonClick={handleButtonPress}
          operations="AC"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="sin"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="cos"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="tan"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="±"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="%"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="^"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="√"
          type="function"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="7"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="8"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="9"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="÷"
          type="operator"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="4"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="5"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="6"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="×"
          type="operator"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="1"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="2"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="3"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="-"
          type="operator"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="."
          type="operator"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="0"
          type="number"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="="
          type="operator"
        />
        <Buttons
          onButtonClick={handleButtonPress}
          operations="+"
          type="operator"
        />
      </div>
      <div className="Bottom">-</div>
    </div>
  );
};

export default App;
