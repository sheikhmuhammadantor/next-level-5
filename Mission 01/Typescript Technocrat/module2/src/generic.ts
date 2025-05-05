{
  // Generic Type;

  //   const rollNumbers: number[] = [3, 5, 6, 2];
  //   const rollNumbers: Array<number> = [3, 5, 6, 2];

  //   type GenericArray<T> = T[];
  type GenericArray<T> = Array<T>;

  const rollNumbers: GenericArray<number> = [3, 5, 6, 2];
  const mentorsArr: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Munammad",
      age: 21,
    },
    {
      name: "Sheikh",
      age: 21,
    },
  ];
  //
}
