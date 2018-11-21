class Xotaker extends base {
    constructor(x, y, index) {
        super(x, y, index);
        this.energy = Math.round(Math.random() * 6);
        this.multiply = Math.round(Math.random() * 4);




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
        if(Dmer == false){
            this.energy--;
        }
        var vand = random(this.yntrelVandak(0, 6));
      
        if (vand && this.multiply >= this.speed / 4) {
            if (matrix[vand[1]][vand[0]] == 6) {
                this.drown();
                return;
            }

            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            this.multiply = 0;

            if (this.energy <= -(this.speed / 2)) this.mahanal();
        }
    }
    

    utel() {
        this.multiply++;
        var vand = random(this.yntrelVandak(1));
        if (vand && this.multiply >= this.speed / 4) {
            this.energy += this.speed;
            matrix[this.y][this.x] = 0;
            this.x = vand[0]; this.y = vand[1];
            matrix[this.y][this.x] = 2;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
        else this.sharjvel();
    }

    bazmanal() {
        var txa = random(this.yntrelVandak(2));
        if(this.ser == 1 && txa.ser == 2){
        var vand = random(this.yntrelVandak());
        if (vand && this.energy >= this.speed) {
            this.energy = 1;
            var newxotaker = new Xotaker(vand[0], vand[1], 2,Math.round(Math.random()*2));
            xotakerArr.push(newxotaker);
        }
    }
    }

    drown() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }
    }

    mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }
    }
}