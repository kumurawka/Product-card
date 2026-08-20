function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура ${temperature} градусов по Цельсию.`);
}
showWeather("Алматы", 29);

function checkSpeed(speed) {
  if (speed > 299792458) {
    console.log("Сверхсветовая скорость");
  } else if (speed < 299792458) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}
checkSpeed(400000000);
checkSpeed(100000000);

let productName = "Увлажняющий мусс";
let productPrice = 2750;

function buyProduct(currentBudget) {
  if (currentBudget >= productPrice) {
    console.log(`Спасибо за покупку! Вы приобрели: ${productName} за ${productPrice} рублей.`);
  } else {
    let missingAmount = productPrice - currentBudget;
    console.log(`У вас недостаточно средств для покупки ${productName}. Не хватает: ${missingAmount} рублей, пополните баланс.`);
  }
}

buyProduct(3000);
buyProduct(2000);

let customerName = "Сауле";
let bonusBalance = 3000;
let productCost = 2750;

function tryBonusPayment(name, bonuses, price) {
  if (bonuses >= price) {
    console.log(`Спасибо, ${name}! Вы использовали бонусы для оплаты.`);
  } else {
    let moneyToPay = price - bonuses;
    console.log(`Покупатель ${name} у вас недостаточно бонусов для оплаты ${moneyToPay} рублей.`);
  }
}

tryBonusPayment(customerName, bonusBalance, productCost);
tryBonusPayment("Сауле", 500, productCost);

