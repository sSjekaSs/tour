let price;
let a = prompt("Введите страну:");
let hot = confirm("Тур горячий?");
switch (a) {
  case "Турция":
    price = 600;
    price = hot ? price * 0.8 : price;
    break;
  case "Испания":
    price = 1000;
    price = hot ? price * 0.8 : price;
    break;
  case "Италия":
    price = 850;
    price = hot ? price * 0.8 : price;
    break;
  case "Германия":
    price = 860;
    price = hot ? price * 0.8 : price;
    break;
  case "Нидерланды":
    price = 1299;
    price = hot ? price * 0.8 : price;
    break;
  case "Франция":
    price = 1500;
    price = hot ? price * 0.8 : price;
    break;
  case "Португалия":
    price = 1400;
    price = hot ? price * 0.8 : price;
    break;
  default:
    price = "У нас такого тура нет :(";
}
alert(price);
