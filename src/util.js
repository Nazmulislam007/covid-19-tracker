export const util = (data) => {
  const shortingData = [...data];

  shortingData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });
  return shortingData;
};
