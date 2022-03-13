
const car = ["A", "B", "C", "D", "E", "F"];

setInterval(drive , 500)

function drive() {
    var i = 0;
    var top = car[i];

    while (i < car.length) {

        if (i == 5) {
            car[i] = top;

        } else {
            car[i] = car[i + 1];
        }
        i++;
    }


    var count = 0;

    $('#one').textContent(car[count++]);
    $('#two').textContent(car[count++]);
    $('#three').textContent(car[count++]);
    $('#four').textContent(car[count++]);
    $('#five').textContent(car[count++]);
    $('#six').textContent(car[count]);
}