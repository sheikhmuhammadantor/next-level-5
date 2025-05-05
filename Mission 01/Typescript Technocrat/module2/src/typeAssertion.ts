{
  //
  let anything: unknown = "hello !";
  // anything = (77 as string);
  let num1 = anything as number;
  console.log(num1);

  // Function
  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseFloat(value) * 1000;
      return `The Value Is : ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;
  console.log(result1);
  console.log(result2);

  // Error
  type CustomError = {
    message: string;
  };

  throw new Error("Hi Error !") as CustomError;
}
