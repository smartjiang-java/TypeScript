/**
 * 编译代码:ts-node
 * 第二节:定义静态代码  static Typing 
 */

const count :number =1;   //定义成number,count. 可以使用number的所有方法

//自定义类型
interface XioJieJie {
    uname : string,
    age :number
}


const xiaohong : XioJieJie ={
    uname :"小红",
    age :18

}

console.log(xiaohong);