{
  //
  const createPromise = <T extends string>(): Promise<T> => {
    return new Promise<T>((resolve, reject) => {
      const data = "somting" as T;
      if (data) {
        resolve(data);
      } else {
        reject("Failed To load Data !");
      }
    });
  };

  //   Calling Create Promise Function;
  const showData = async (): Promise<string> => {
    const data = (await createPromise<string>()) as string;
    return data;
  };

  showData();
  //
}
