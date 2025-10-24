let bahasa = "EN";
// Tulis kode switch statement di sini

switch (bahasa) {
  case "id":
  case "ID":
    console.log("Bahasa Indonesia");
    break;

  case "en":
  case "EN":
    console.log("English");
    break;

  case "jp":
  case "JP":
    console.log("Japanese");
    break;

  case "kr":
  case "KR":
    console.log("Korean");
    break;

  default:
    console.log("Language not supported");
}
