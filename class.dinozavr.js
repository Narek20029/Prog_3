class dinozavr extends base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy =  7;
        this.speed = 14;
        this.multiply = 7;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];

    }
    yntrelVandak(ch, or) {
        this.newcordinat();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == ch || matrix[y][x] == or) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    newcordinat() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    sharjvel() {

        if(Dmer == false){
        this.energy--;
        var vand = random(this.yntrelVandak(0, 6));
        if (vand && this.multiply >= this.speed / 2) {
            this.energy--;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
        }
    }
    }
    utel() {
        if (Dmer == false) {
            this.energy--;
            }
        
        var vand = random(this.yntrelVandak(3, 2));

        if (vand && this.multiply >= this.speed / 2) {
            this.energy += this.speed / 2;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 4;
            if (this.yntrelVandak(3)) {
                for (var i in gishatichArr) {
                    if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                        gishatichArr.splice(i, 1);
                    }
                }
            }
            else if (this.yntrelVandak(2)) {
                for (var i in xotakerhArr) {
                    if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                        xotakerArr.splice(i, 1);
                    }
                }
            }

        }
        else this.sharjvel();
    }
    bazmanal() {
        var txa = random(this.yntrelVandak(4));
        if(this.ser == 1 && txa.ser == 2){
        var vand = random(this.yntrelVandak());
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newdinozavr = new dinozavr(vand[0], vand[1], 4,Math.round(Math.random()*2));
            dinoArr.push(newdinozavr);
        }
    }
    }

    mahanal() {
        if (this.energy <= this.speed / 2) {
            matrix[this.y][this.x] = 0;
            for (var i in dinoArr) {
                if (dinoArr[i].x == this.x && dinoArr[i].y == this.y) {
                    dinoArr.splice(i, 1);
                    break;
                }
            }
        }
    }
}