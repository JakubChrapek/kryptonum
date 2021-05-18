export const getMonth = number => {
  const normalizedNumber = Number(number)
  const numberToMonthMap = {
    1: "Sty",
    2: "Lut",
    3: "Mar",
    4: "Kwi",
    5: "Maj",
    6: "Cze",
    7: "Lip",
    8: "Sie",
    9: "Wrz",
    10: "Paź",
    11: "Lis",
    12: "Gru",
  }
  return numberToMonthMap[normalizedNumber]
}
