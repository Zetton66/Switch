let warna = "kuning";
let instruksi;

switch (warna) {
    case "merah":
        instruksi = "Berhenti total";
        break;
    case "kuning":
        instruksi = "Hati-hati, bersiap berhenti";
        break;
    case "hijau":
        instruksi = "Jalan, perhatikan kondisi lalu lintas";
        break;
    default:
        instruksi = "Lampu rusak, harap berhati-hati penuh!";
}

console.log(`Lampu ${warna}: ${instruksi}`);
