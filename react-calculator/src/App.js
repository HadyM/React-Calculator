import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(new Date());
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);

  useEffect(() => {
    setTime(new Date());
  }, [new Date().getMinutes()]);

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

    if (operations === "^2") {
      setValue((number * number).toString());
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
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "-") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("+");
      return;
    }

    if (operations === "-") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("-");
      return;
    }

    if (operations === "×") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
      setValue("0");
      setOperator("×");
      return;
    }

    if (operations === "÷") {
      if (operator !== null) {
        if (operator === "+") {
          setMemory(memory + parseFloat(value));
        } else if (operator === "−") {
          setMemory(memory - parseFloat(value));
        } else if (operator === "×") {
          setMemory(memory * parseFloat(value));
        } else if (operator === "÷") {
          setMemory(memory / parseFloat(value));
        }
      } else {
        setMemory(parseFloat(value));
      }
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
      <div className="Top">6:10</div>
      <div className="Display">0</div>
      <div className="Buttons">AC</div>
      <div className="Bottom">-</div>
    </div>
  );
};

export default App;
