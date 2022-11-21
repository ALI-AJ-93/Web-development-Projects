var category;
document.getElementById ('calculate').addEventListener ('click', bmi);

function bmi () {
    var weight = document.querySelector ('input.weight').value;
    var height = document.querySelector ('input.height').value;
    var result = weight / (height/100 * height/100);
    var colorCode = document.getElementsByClassName ('green');

    if (result > 18 && result < 25) {
        category = 'Normal';
    }
    else if (result >= 25 && result < 30) {
        category = 'Overweight';
        colorCode.className = 'yellow';
    }
    else if (result >= 30 && result < 35) {
        category = 'Obese';
        colorCode.className = 'red';
    }
    else {
        category = 'Morbidly obese';
        colorCode.className = 'red';
    }


    document.getElementById ('result').textContent = result.toFixed (2);
    document.getElementById ('category').textContent = category;
    console.log (colorCode.className);
}








