/**
 * ts-node 
 * 第十三节: get,set和static
 */

class xaiojiejie {
    private _age: number;

    get age() {
        return this._age-10;
    }

    constructor(_age:number){
        this._age=_age;
    }
}

console.log(new xaiojiejie(20).age);


//不能用靜態類,但是可以用靜態方法
class People{
    static sayHello(){
        return "Wocao ";
    }
}
console.log(People.sayHello());






