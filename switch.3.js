let grade = "B"; 
let deskripsiNilai;

switch (grade) {
    case "A":
        deskripsiNilai = "Sangat Baik";
        break;
    case "B":
        deskripsiNilai = "Baik";
        break;
    case "C":
        deskripsiNilai = "Cukup";
        break;
    case "D":
        deskripsiNilai = "Kurang";
        break;
    case "E":
        deskripsiNilai = "Sangat Kurang";
        break;
    default:
        deskripsiNilai = "Grade tidak valid";
}

console.log(`Grade ${grade}: ${deskripsiNilai}`);
