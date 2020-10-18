/**
 * ts-node 
 * 第十一节: 类的访问类型 private protected public
 */

class Person {
    name: string;
    public sayHello(){
        console.log(this.name+"sayHello");
    }
}

const person = new Person();
person.name = "jspang";

console.log(person.name);
console.log(person.sayHello());
