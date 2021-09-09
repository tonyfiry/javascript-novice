// class Myname{
//     constructor(num1,num2){
//         this.number1 = num1;
//         this.number2 = num2;
//     }
//     hello(){
//         console.log('hello');
//     }
// }
// let num3 = new Myname(12,26);
// num3.hello();
// console.log(num3.number1,num3.number2)

class Myname{
    constructor(name1){
        this.name = name1;
    }
    hello(){
        console.log('hello');
    }
}
class card extends Myname{
    constructor(name2){
        super(name2);
    }
    hello2(){
        super.hello();
        console.log('hello2');
    }
}
let mame = new card();
mame.hello2();