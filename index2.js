//Array
const c1 = ['小黃','小明','小洪','小綠'];
console.log('舊生:',c1);

c1.push('小蘭');
console.log('新生:',c1);

c1.pop('小明');
console.log(c1);
console.log('總共:',c1.length,'人');

c1.shift();
console.log(c1[2]);

//Object

const pose1={
    name:'小黃',
    age: 21,
    sex:'male',
}
const pose2={
    name:'小明',
    age: 19,
    sex:'male',
}
const pose3 ={
    name:'小洪',
    age: 20,
    sex:'girl',
}
console.log(pose2.sex);
console.log(pose3.name);