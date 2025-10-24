let tombol = "SPACE";

switch (tombol) {
  case "W":
    console.log("Pemain bergerak maju");
    break;
  case "S":
    console.log("Pemain bergerak mundur");
    break;
  case "A":
    console.log("Pemain bergerak ke kiri");
    break;
  case "D":
    console.log("Pemain bergerak ke kanan");
    break;
  case "SPACE":
    console.log("Pemain melompat");
    break;
  case "ESC":
    console.log("Permainan dijeda (Pause)");
    break;
  default:
    console.log("Tombol tidak valid");
}
