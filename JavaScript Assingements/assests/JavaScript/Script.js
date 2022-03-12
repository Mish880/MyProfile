
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

    $('#one').text(car[count++]);
    $('#two').text(car[count++]);
    $('#three').text(car[count++]);
    $('#four').text(car[count++]);
    $('#five').text(car[count++]);
    $('#six').text(car[count++]);
}