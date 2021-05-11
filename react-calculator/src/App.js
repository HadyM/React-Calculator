import React, { useEffect, useState } from "react";
import Buttons from "./Components/Buttons";
import devhady from "./Assets/devhady.png";
import Comma from "./Components/Comma";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  // There are more appropriate ways to set up a clock.
  // See https://reactjs.org/docs/state-and-lifecycle.html
  // This example uses class components, but you can use the 
  // useEffect hook to set up an inteval similarly.
  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

  const mathOperations = () => {
    if (operator !== null) {
      // This is a good use case for a switch/case statement 
      if (operator === "+") {
        setMemory(memory + parseFloat(value));
      } else if (operator === "-") {
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

  // I'd recommend renaming this argument since it could be an operation or a number.
  const handleButtonPress = (operations) => () => {
    const number = parseFloat(value);
    // Suggestion: create an object mapping valid operations to a function (const validOps = {"AC": (number) => {...}, "sin": (number) => {...}, ...})
    // Then write a single if statement: (if (validOps.hasOwnProperty(operations) { validOps[operations](number) } )
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

      // Thanks for including this!
      
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
      setValue(value + operations);
    } else {
      setValue(parseFloat(number + operations).toString());
    }
  };

  return (
    <div className="App">
      <div className="Top">
        <div className="Time">
          {(time.getHours() % 12 || 12).toString().padStart(2, "0")}:
          {time.getMinutes().toString().padStart(2, "0")}
        </div>
        <div className="Menu">
          <img src={devhady} alt="logo" height="20px" />
        </div>
      </div>
      <div className="Display">{Comma(value)}</div>
      <div className="Buttons">
        {/* Try to avoid such repetetive code! Suggestion:
            If you have an array of button info (const buttons = [{name: "AC", type: "function"}, {name: "0", type: "number"}, ...])
            Then you can use buttons.map() to create all of these Button components and keep your code a bit more DRY.                       
        */}
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
      <div className="Bottom"></div>
    </div>
  );
};

export default App;
