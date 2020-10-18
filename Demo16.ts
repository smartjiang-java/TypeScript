/**
 * ts-node 
 * 第十六节: 聯合類型和類型保護
 */

interface Waiter {
    anjiao: boolean;
    say: () => {}
}

interface Teacher {
    anjiao: boolean;
    skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
    //存在類型保護,使用if-else進行斷言
    if (animal.anjiao) {
        (animal as Waiter).say();
    } else {
        (animal as Teacher).skill();
    }
}

function judgeWho2(animal: Waiter | Teacher) {
    //存在類型保護,使用if-else進行斷言
    if ('say' in animal) {
        animal.say();
    } else {
        animal.skill();
    }
}

function add(first: number | string, second: number | string) {
    if (typeof first === "string" && typeof second === "string") {
        //字符串拼接
        return `${first}${second}`;
    } else if (typeof first === "number" && typeof second === "number") {
        return first + second;
    }
}


class NumberObj {
    count!: number;
}
function addObj(first: object | NumberObj, second: object | NumberObj) {
    //instanceof只能类类型上
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}







