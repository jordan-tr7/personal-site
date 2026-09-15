
// TODO: create a walker with tendency to move down and to the right
// TODO: Prob of 2 aces w/ & w/out reshuffle

// class Walker {
//     constructor(width, height) {
//         this.x = width / 2;
//         this.y = height / 2;
//     }

//     show(){
//         stroke(0);
//         point(this.x, this.y);
//     }

//     step() {
//         //let choice = floor(random(4));
//         // if (choice === 0){
//         //     this.x++;
//         // } else if (choice === 1) {
//         //     this.x--;
//         // } else if (choice === 2) {
//         //     this.y++;
//         // } else {
//         //     this.y--;
//         // }

//         //let xstep = floor(random(3)) - 1;
//         //let ystep = floor(random(3)) - 1; 
        
//         let xstep = random(-1, 1);
//         let ystep = random(-1, 1); 

//         this.x += xstep;
//         this.y += ystep;
//     }
// }


export class Walker {
    constructor(p, width, height) {
        this.p = p;
        this.x = width / 2;
        this.y = height / 2;
        this.p.strokeWeight(2);
    }

    show(){
        this.p.stroke(0);
        this.p.point(this.x, this.y);
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
}
