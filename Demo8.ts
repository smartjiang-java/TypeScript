/**
 * ts-node 
 * 第八节: 初识接口interface
 */

const sceenResume = (name: string, age: number, bust: number) => {
    if (age < 24 && bust >= 90) { 
        console.log(name + "进入面试"); 
    }else{
        console.log(name + "被淘汰了");
    }
};
sceenResume("大脚", 25, 89);

const getResume =(name: string, age: number, bust: number)=>{
    console.log(name+"年龄是"+age+",胸围是"+bust);
};
getResume("dajiao",15,79);


//代码的复用
interface Girl{
    name:string,
    age:number,
    bust:number
}

const girl ={
    nmae :"大脚",
    age :18,
    bust:90
}
const sceenResume2 = (girl:Girl) => {
    if (girl.age < 24 && girl.bust >= 90) { 
        console.log(girl.name + "进入面试"); 
    }else{
        console.log(girl.name + "被淘汰了");
    }
};

