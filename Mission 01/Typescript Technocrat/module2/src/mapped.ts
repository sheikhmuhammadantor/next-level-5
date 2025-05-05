{
  // Mapped Type;
  type AreaNumber = {
    height: number;
    width: number;
  };

  type Height = AreaNumber["height"];

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const aria1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 10,
  };

  const aria2: { height: string; width: number } = {
    height: "100",
    width: 10,
  };
}
