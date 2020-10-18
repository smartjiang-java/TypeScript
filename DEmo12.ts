/**
 * ts-node 
 * 第十二节: 类的構造函數
 */

class Person {
    constructor(public name: string) {
        console.log(this.name);
    }
}

console.log(new Person("Hello"));


class Apple extends Person {
    //子類的構造方法必須調用父類的構造方法
    constructor(public age: number) {
        super("sfasfa");
    }
}

console.log(new Apple(18));

