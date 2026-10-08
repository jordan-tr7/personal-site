

// TODO: Create walker with dynamic probabilities, e.g. 50% chance to move in dir of mouse? 

export class Walker {
    
    constructor(p, width, height) {
        this.p = p;
        this.x = width / 2;
        this.y = height / 2;
        this.p.strokeWeight(2);
        this.tx = 0;
        this.ty = 10000;
        this.width = width;
        this.height = height;
    }

    perlinStep(){
        this.x = this.p.map(this.p.noise(this.tx), 0, 1, 0, this.width);
        this.y = this.p.map(this.p.noise(this.ty), 0, 1, 0, this.height);
        this.tx += 0.01;
        this.ty += 0.01;
    }

    perlinStepSize(maxDist){

        let xStep = this.p.map(this.p.noise(this.tx), 0, 1, -maxDist, maxDist);
        let yStep = this.p.map(this.p.noise(this.ty), 0, 1, -maxDist, maxDist);
        this.x += xStep;
        this.y += yStep;
        this.tx += 0.01;
        this.ty += 0.01;
    }

    getRandomIntInclusive(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    acceptReject(){
        while (true){
            let r1 = Math.random();
            let probability = r1;
            let r2 = Math.random();
            if (r2 < probability){
                return r1;
            }
        }
    }

    quadraticStep(step){

        let stepx = this.getRandomIntInclusive(-step, step);
        let stepy = this.getRandomIntInclusive(-step, step);

        let thresholdX = Math.abs(this.getRandomIntInclusive(-1 * step * step, step * step));
        let thresholdY = Math.abs(this.getRandomIntInclusive(-1 * step * step, step * step));

        while (Math.abs(stepx) ** 2 > thresholdX) {
            stepx = this.getRandomIntInclusive(-step, step);
        }

        while (Math.abs(stepy) ** 2 > thresholdY){
            stepy = this.getRandomIntInclusive(-step, step);
        }

        this.x += stepx;
        this.y += stepy;
    }


    step() {
        let choice = Math.floor(Math.random() * 4);

        if (choice === 0){
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
    }

    stepTwo(){
        let xstep = this.getRandomIntInclusive(-1, 2);
        let ystep = this.getRandomIntInclusive(-1, 2);

        this.x += xstep;
        this.y += ystep;
    }

mouseStep(){
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
    }

    gausStep(){
        let xstep = this.p.randomGaussian(0, 5);
        let ystep = this.p.randomGaussian(0, 5);
        this.x += xstep;
        this.y += ystep;
    }

    downRightStep(){
        let r = Math.random();

        if (r < 0.4) {
            this.x++;
        } else if (r < 0.6) {
            this.x--;
        } else if (r < 0.8) {
            this.y++;
        } else {
            this.y--;
        }
    }

    show(){
        this.p.stroke(0);
        this.p.point(this.x, this.y);
    }

}
