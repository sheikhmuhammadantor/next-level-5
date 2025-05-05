{
  // Conditional Type
  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
    plane: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? T : false;

  type HasType1 = CheckVehicle<"plane">;
  type HasType2 = CheckVehicle<"Dog">;
  //
}
