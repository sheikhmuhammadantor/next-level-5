{
  // Generic Constraint With Keyof Operator;
  type Vehicle1 = {
    bike: string;
    car: string;
    ship: string;
  };

  const vehicle2 = {
    bike: "string",
    car: "string",
    ship: "string",
  };

  type Owner1 = keyof Vehicle1;
  type Owner2 = keyof typeof vehicle2;
  type Owner3 = keyof "object";

  const Veh1: Owner1 = "bike";
  const Veh2: Owner2 = "car";
  const Veh3: Owner3 = "length";

  //   With Function;
  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. persian",
    age: 26,
    address: "ctg",
  };

  getPropertyValue(user, "address");
}
