/**
 * ts-node 
 * 第九节: 初识接口interface2
 */

//代码的复用
interface Girl{
    name:string,
    age:number,
    bust:number,
    waitline?:number;     //此属性可有可无
    [proponame:string]:any;  //随便写,不受类型约束,可以无限添加此类型,可有可无
    say():string;   //定义一个方法,返回值是string
}

const girl ={
    name :"大脚",
    age :18,
    bust:90,
    sex:"女",
    describe:"多才多艺",
    say(){
        return "欢迎光临红浪漫洗浴中心";
    },
}
const sceenResume2 = (girl:Girl) => {
    if (girl.age < 24 && girl.bust >= 90) { 
        console.log(girl.name + "进入面试"); 
        console.log(girl.say());
    }else{
        console.log(girl.name + "被淘汰了");
    }
};
sceenResume2(girl);

//类实现接口
class Xiaojiejie implements Girl{
   // [proponame: string]: any;
    name: string;
    age: number;
    bust: number;
    //waitline?: number;
    say(): string {
        return "都是自愿的";
    }
}

//接口的继承
interface Teacher extends Girl{
    teach():string;
}
