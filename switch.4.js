let bulan = 2;

switch (bulan) {
  
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Bulan ini memiliki 31 hari.");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Bulan ini memiliki 30 hari.");
    break;

  case 2:
    console.log("Bulan ini memiliki 28 atau 29 hari (tergantung tahun kabisat).");
    break;

  default:
    console.log("Nomor bulan tidak valid! Masukkan angka 1–12.");
}
