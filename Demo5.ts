/**
 * ts-node 
 * 第五节:函数参数和返回类型的注解
 */

function getTotal (one:number,two:number):number {   //函数返回类型
    return one+two;
}
const three=getTotal(1,2);


function sayhello():void{     //没有返回值
    console.log("Hello world");
}

function errFunction():never{  //方法永远执行不完,返回为never
    throw new Error();
    console.log("hello world");
}

//坑,给对象声明类型
function add ({one,two}:{one:number,two:number}):number {   //函数返回类型
    return one+two;
}
const atotal=add({one:1,two:2});
