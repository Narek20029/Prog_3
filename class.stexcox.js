class stexcox {
    constructor(index) {
        this.index = index;
    }
    stexcel() {
        if(makeX >= 0 && makeX < matrix[0].length  && makeY >= 0 && makeY < matrix.length){
           
        
        
        if (umStexcel == 1) {
            grassArr.push(new Grass(makeX * 1, makeY * 1, 1,Math.round(Math.random() * 1) ));
        }
        else if (umStexcel == 2) {
            xotakerArr.push(new Xotaker(makeX * 1, makeY * 1, 2,Math.round(Math.random() * 1)));
        }
        else if (umStexcel == 3) {
            gishatichArr.push(new Gishatich(makeX * 1, makeY * 1, 3,Math.round(Math.random() * 1)));
        }
        else if (umStexcel == 4) {
            dinoArr.push(new dinozavr(makeX * 1, makeY * 1, 4,Math.round(Math.random() * 1)));
        }
    }
}




}