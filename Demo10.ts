/**
 * ts-node 
 * 第十节: 类的概念和使用
 */


class Lady {
    content = "Hi,帅哥";
    sayHello() {
        return this.content;
    }
}

//类的继承
class Xiojiejie extends Lady{
    sayLove(){
        return "I love you!";
    }

    //方法的重写
    // sayHello(){
    //     return "Hi,Tonny";
    // }

    sayHello(){
        return super.sayHello()+"Tonny";
    }
}

const goddess =new Lady();
console.log(goddess.sayHello());

console.log(new Xiojiejie().sayLove());
console.log(new Xiojiejie().sayHello());