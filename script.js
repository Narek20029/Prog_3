function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = random(100);
            if (r < 20) r = 0;
            else if (r < 60) r = 1;
            else if (r < 70) r = 2;
            else if (r < 75) r = 3;
            else if (r < 76) r = 4;
            else if (r < 80) r = 5;
            else if (r < 87) r = 6;
            matrix[y][x] = r;
        }
    }
    return matrix;
}

var matrix;
var w = 30;
var h = 30;
var side = 24;
var grassArr = [], xotakerArr = [], gishatichArr = [], dinoArr = [], patArr = [], jurArr = [];

function setup() {
    matrix = genMatrix(w, h);
    createCanvas(side * w + 1, side * h + 1);
    background("#acacac");
    frameRate(5);
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x * 1, y * 1, 1));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x * 1, y * 1, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x * 1, y * 1, 3))
            }
            else if (matrix[y][x] == 4) {
                dinoArr.push(new dinozavr(x * 1, y * 1, 4))
            }
            else if (matrix[y][x] == 6) {
                jurArr.push(new jur(x * 1, y * 1, 6))
            }
            else if (matrix[y][x] == 5) {
                patArr.push(new pat())
            }
        }
    }
}

function draw() {
    background("#acacac");
    for (var y in matrix) {
        for (var x in matrix[y]) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill('#ffa500');
            }
            else if (matrix[y][x] == 5) {
                fill('#543805');
            } else if (matrix[y][x] == 6) {
                fill("blue");
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in xotakerArr) {
        xotakerArr[i].bazmanal();
        xotakerArr[i].utel();
    }

    for (var i in jurArr) {
        jurArr[i].mul();
    }

    for (var i in gishatichArr) {
        gishatichArr[i].bazmanal();
        gishatichArr[i].utel();
        gishatichArr[i].mahanal();
    }

    for (var i in dinoArr) {
        dinoArr[i].bazmanal();
        dinoArr[i].utel();
        dinoArr[i].mahanal();
    }


}