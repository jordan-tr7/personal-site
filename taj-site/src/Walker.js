

// TODO: Create walker with dynamic probabilities, e.g. 50% chance to move in dir of mouse? 

export class Walker {
    constructor(p, width, height) {
        this.p = p;
        this.x = width / 2;
        this.y = height / 2;
        this.p.strokeWeight(2);
    }

    getRandomIntInclusive(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    show(){
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

    step() {
        //let choice = Math.floor(Math.random() * 4);
        //let xstep = this.getRandomIntInclusive(-1, 2);
        //let ystep = this.getRandomIntInclusive(-1, 2);

        let r = Math.random();
        
        if (r < 0.25) {
            // mouse logic here
            if (this.x < this.p.mouseX){
                this.x++;
            } else {
                this.x--;
            }

            if (this.y < this.p.mouseY) {
                this.y++;
            } else {
                this.y--;
            }

        } else {
            // random walk logic
            let r2 = Math.random();
            if (r2 < 0.25) {
                this.x++;
            } else if (r2 < 0.5) {
                this.x--;
            } else if (r2 < 0.75) {
                this.y++;
            } else {
                this.y--;
            }
        }

        // if (r < 0.4) {
        //     this.x++;
        // } else if (r < 0.6) {
        //     this.x--;
        // } else if (r < 0.8) {
        //     this.y++;
        // } else {
        //     this.y--;
        // }

        //this.x += xstep;
        //this.y += ystep;

        // if (choice === 0){
        //     this.x++;
        // } else if (choice === 1) {
        //     this.x--;
        // } else if (choice === 2) {
        //     this.y++;
        // } else {
        //     this.y--;
        // }
    }
}
