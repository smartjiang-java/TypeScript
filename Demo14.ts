/**
 * ts-node 
 * 第十四节: 抽象類和只讀屬性
 */

class xaiojiejie {
    //只讀屬性,加readonly
    readonly _age: number;
    constructor(age: number) {
        this._age = age;
    }
}
const xiaomei =new xaiojiejie(20);
console.log(xiaomei._age);

//抽象類

abstract class People{
    abstract say();
}

class Girl extends People{
    say() {
        return "實現抽象類";
    }
}
console.log(new Girl().say());







