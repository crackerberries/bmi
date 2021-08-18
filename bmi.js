function calculateBMI() {
    var rheight = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    var cheight = rheight / 100

    var height = cheight * cheight;
    var bmi = weight / height;
    document.getElementById("bmi").innerHTML = "your bmi is " + Math.round(bmi);
}