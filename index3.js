//if用法;
// let score = 90;

// if (score>100) {
//     console.log("很棒喔");
// }else{
//     console.log("再努力看看吧");
// }

// let score=Number(prompt("請輸入數字:"));
// let score2=Number(prompt("請輸入數字:"));
// let total = (score+score2);

// if(total >= 300){
//     console.log("有超過300,或是剛好300");
// }
// else if(total >= 200){
//     console.log("有超過200,或是剛好200");
// }
// else{
//     console.log("沒有超過100");
// }

//switch用法
let score =9999;

switch (score) {
    case 300:
        console.log("總分是300");
        break;
    case 200:
        console.log("總分是200");
        break;
    case 100:
        console.log("總分是100");
        break;

    default:
        console.log("沒有分數");
        break;
}
