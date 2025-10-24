let angka1 = 17;
let angka2 = 4;
let operator = "%";

switch (operator) {
  case "+":
    console.log("Hasil: " + (angka1 + angka2));
    break;
  case "-":
    console.log("Hasil: " + (angka1 - angka2));
    break;
  case "*":
    console.log("Hasil: " + (angka1 * angka2));
    break;
  case "/":
    console.log("Hasil: " + (angka1 / angka2));
    break;
  case "%":
    console.log("Hasil: " + (angka1 % angka2));
    break;
  default:
    console.log("Operator tidak valid! Gunakan +, -, *, /, atau %.");
}
