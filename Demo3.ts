/**
 * ts-node
 * 第三节:基本静态类型和对象静态类型 
 */

 //基本静态类型:number , string , null , underfined , boolean , void , symbol
const count :number =918;

//对象静态类型
const xiaojijeie :{
    name :string,
    age :number
} = {
     name : '大脚',
     age :18
}

//数组类型也是对象类型
const xiojiejies :string [] =["dajiao ", "adasda"];

//类对象类型
class Person{}
const dajiao: Person =new Person();

//函数类型 定义一个函数,返回值是sting类型
const jianxiaojiejie :()=>string = ()=>{return "大脚"}
