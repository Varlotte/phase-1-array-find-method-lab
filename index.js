const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(array) {
  //return array.find((object) => object.result === "W");
  const result = array.find((object) => object.result === "W");
  return result ? result.year : undefined;
}
[record].find(superbowlWin);
