/**
 * ts-node 
 * 第十八节: ts中使用泛型:方法上,常用T代替
 */

//使用泛型:定义函数的时候可以不使用,但是使用的时候必须给订类型
function join<jspang>(first:jspang,second:jspang){
    return first+""+second;
}
join<string>("dsfsdf","dfsfs");


function join1<lal>(first:lal[]){
    return first;
}
function join2<lal>(first:Array<lal>){
    return first;
}
join1<string>(["123","456"]);


function join4<T,P>(first:T,secong:P){
    return first;
}
join4<string,number>("123",23);

