/**
 * ts-node 
 * 第十八节: ts中使用泛型:类上,常用T代替
 */

class SelectGirl<T>{
    private girls!: T[];
    constructor(girlss: T[]) {
        this.girls = girlss;
    }
    getGirl(index: number): T {
        return this.girls[index];
    }
}

const selectGirl1 = new SelectGirl<string>(["刘莹", "大脚"]);
selectGirl1.getGirl(1);

//泛型的继承
interface Gilr {
    name: string;
}
class SelectGirl2<T extends Gilr>{
    private girls!: T[];
    constructor(girlss: T[]) {
        this.girls = girlss;
    }
    getGirl(index: number): string {
        return this.girls[index].name;
    }
}

const selectGirl2 = new SelectGirl2([
    { name: "刘莹"},
    { name: "大脚"}
]);
selectGirl1.getGirl(1);


//泛型的约束
class SelectGirl3<T extends number,string>{
    private girls!: T[];
    constructor(girlss: T[]) {
        this.girls = girlss;
    }
    getGirl(index: number):T {
        return this.girls[index];
    }
}

const selectGirl3 = new SelectGirl2([
    { name: "刘莹"},
    { name: "大脚"}
]);
selectGirl1.getGirl(1);