const comma = (value) => {
  let output = "";
  let decimal = "";
  let negative = false;
  if (value.includes(".")) {
    output = value.substring(0, value.indexOf("."));
    decimal = value.substring(value.indexOf("."));
  } else {
    output = value;
  }
  if (parseFloat(value) < 0) {
    negative = true;
    output = output.substring(1);
  }

  return negative
    ? "-" + parseFloat(output).toLocaleString() + decimal
    : parseFloat(output).toLocaleString() + decimal;
};

export default comma;
