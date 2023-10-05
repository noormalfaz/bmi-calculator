const hitung = () => {
    let berat = document.getElementById("weight").value;
    let tinggi = document.getElementById("height").value;
    let result = document.getElementById("result");
    let result2 = document.getElementById("result2");

    let textResult = document.getElementById("text-result");
    textResult.style.fontWeight = "700";

    let keterangan = document.getElementById("keterangan");
    keterangan.style.fontWeight = "700";

    let rumus = berat / (tinggi / 100) ** 2;
    let kesimpulan = rumus.toFixed(1);

    if (berat && tinggi != "") {
        if (rumus <= 18.5) {
            result.innerHTML = "Your BMI is ";
            textResult.innerText = kesimpulan;
            result2.innerText = "which means You are ";
            keterangan.innerText = "Underweight";
        } else if (rumus <= 24.9) {
            result.innerHTML = "Your BMI is ";
            textResult.innerText = kesimpulan;
            result2.innerText = "which means You are ";
            keterangan.innerText = "Normal weight";
        } else if (rumus <= 29.9) {
            result.innerHTML = "Your BMI is ";
            textResult.innerText = kesimpulan;
            result2.innerText = "which means You are ";
            keterangan.innerText = "Overweight";
        } else {
            result.innerHTML = "Your BMI is ";
            textResult.innerText = kesimpulan;
            result2.innerText = "which means You are ";
            keterangan.innerText = "Obesity";
        }
    } else {
        result.innerHTML = "Input your weight and your height!"
    }
}