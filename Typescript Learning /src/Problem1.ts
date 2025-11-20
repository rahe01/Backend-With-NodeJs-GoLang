const formatValue = (
  param: string | number | boolean
): string | number | boolean => {


  if (typeof param === "string") {
    return param.toUpperCase();
  }


  if (typeof param === "number") {
    return param * 10;
  }

  if (typeof param === "boolean") {
    return !param;
  }

  return param;
};

// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));