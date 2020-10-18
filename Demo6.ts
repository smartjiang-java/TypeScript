/**
 * ts-node 
 * 第六节:数组类型注解的方法
 */

const numberArr = [1, 2, 3];

const numberArr2: number[] = [];

const arr: (number | string)[] = [1, "arr", 2];


const xiaojiejeis: {name:string,age:number} [] = [
    { name: '刘莹', age: 18 },
    { name: 'liu', age: 23 },
];
//type alias 类型别名
type lady ={name:string,age:number} ;
const xiaojiejeis2:lady[] = [
    { name: '刘莹', age: 18 },
    { name: 'liu', age: 23 },
];
//类别名
class Madam{
    name:string;
    age :number;
}
const xiaojiejeis3:Madam[] = [
    { name: '刘莹', age: 18 },
    { name: 'liu', age: 23 },
];