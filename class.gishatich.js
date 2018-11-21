class Gishatich extends base {
    constructor(x, y, index, ser) {
        super(x, y, index, ser);
        this.energy = Math.round(Math.random() * 15);
        this.speed = 24;
        this.multiply = 13;

    }
    yntrelVandak(ch, ls) {
        this.stanalNorKordinatner();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == ls) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    sharjvel() {
        var vand = random(this.yntrelVandak(0, 1));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
        }
    }

    utel() {
        this.energy--;
        var vand = random(this.yntrelVandak(2));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 3;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        for (var l in this.directions) {
            var x = this.directions[l][0];
            var y = this.directions[l][1];
            for (var i in  gishatichArr) {
                if ( gishatichArr[i].y == y && gishatichArr[i].x == x &&  gishatichArr[i].ser == 1) {
                    if (this.ser == 0) {

                        var vand = random(this.yntrelVandak(0,1));
                        if (vand && this.energy >= this.speed) {
                            this.energy = 1;
                            var newgishatich = new Gishatich(vand[0], vand[1], 3, Math.round(Math.random() * 1));
                            gishatichArr.push(newgishatich);
                            
                        }
                    }
                }

            }
        }
    }

    mahanal() {
        if (this.energy <= -(this.speed / 2)) {
            matrix[this.y][this.x] = 0;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}