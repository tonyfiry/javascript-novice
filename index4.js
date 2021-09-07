//for用法
// let a1 =1;
// for(let i=0;i<=10;i++){
//     console.log('第'+i+'圈:'+i);
// }

// let posts= [
//     {
//         name:'小明',
//         age:12,
//         link:'game',
//     },
//     {
//         name:'小黃',
//         age:16,
//         link:'game2',
//     },
//     {
//         name:'小綠',
//         age:20,
//         link:'game3',
//     },
// ]

// for(let i=0; i<3;i++){
//     console.log(posts[i]);      
// }

//while迴圈
let posts= [
    {
        name:'小明',
        age:12,
        link:'game'
    },
    {
        name:'小黃',
        age:16,
        link:'game2'
    },
    {
        name:'小綠',
        age:20,
        link:'game3'
    },
]
let i =0;
while(i<posts.length){
    i++;
}
console.log(posts[2].age);
