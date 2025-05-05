{
  //
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type NormalWatch = {
    brand: string;
    model: string;
    display: string;
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  const poorDeveloper: Developer<NormalWatch> = {
    name: "Muhammad",
    computer: {
      brand: "Asus",
      model: "Z-5UT",
      releaseYear: 2022,
    },
    smartWatch: {
      brand: "NormalBrand",
      model: "SS77U",
      display: "OLED",
    },
  };

  const richDeveloper: Developer<
    AppleWatch,
    { model: string; engineCapacity: string }
  > = {
    name: "Rich Dev",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "Something",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "100cc",
    },
  };

  //
}
