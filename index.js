// 1. Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const UHR = 40;
const initialUSD = 10;
const maxUSD = 100;

function currencyExchange(rate, amount) {
  return rate * amount;
}

let currentUSD = initialUSD;

while (currentUSD <= maxUSD) {
  const result = currencyExchange(UHR, currentUSD);
  console.log(result);
  currentUSD += 10;
}
