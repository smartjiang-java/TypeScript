/**
 * ts-node 
 * 第十七节: 枚举类型详解
 */

//使用枚举
enum Status{
    MESSAGE,   //默认从零开始,也可以设置为1
    SPA,
    DABAOJIAN
}
function getService2(status: any) {
    if (status === Status.MESSAGE) {
        return "message";
    } else if (status === Status.SPA) {
        return "SPA";
    } else if (status === Status.DABAOJIAN) {
        return "dabaojian"
    }
}
console.log(getService2(0));
console.log(getService2(Status.SPA));
//也可以打印对应的下标值
console.log("Status.MESSAGE的下标是"+Status.MESSAGE);
