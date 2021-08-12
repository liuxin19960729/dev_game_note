```js





let promise=new Promise((res,rej)=>{

}); 

promise.then(onFulfilled,onReject?)

1.当promise rej()时onReject执行。
    若我们在then 存入的时onReject不是函数内部会被替换成Thrower函数,我们在
    catch()函数里面也可传入onReject。
    






then():Promise

当fulfilled 时执行then 里面的onFulfilled() 并且返回一个已经是接收状态的Promise对象

当rej 时 执行 then里面的onReject() 若onReject不是函数则调用内部的Throw()函数 并且 then()返回一个拒绝的Promise










then(v={
    return v;
})

return v ==相当于 promise.res(v) 因为是成功状态


返回 new Promise((res,rej)=>{}) 相当于给后面暴露这个创建的新的工具链


var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});


p2.then(function(value) {//num1
  console.log(value); // 1
  return value + 1;
}).then(function(value) {//num2
  console.log(value + ' - A synchronous value works');
});

p2.then(function(value) {//num3
  console.log(value+3); // 1
});

result:
> 1
> 4
> "2 - A synchronous value works"

可以看到 num1 和 num3 他么的函数是放在同一层次




Promise.reject()
.then(()=>100,()=>200)
.then((v)=>{
    console.log(v)//print 200;
});

then(onFulilled,onRject)

onRject 里面 return v  和 onFulilled 一样相当于promise.resolve(v);



我们在Pormise.resolve() 或 throws Error 都会使then() onRject执行 或者 catch() 执行


```

### Promise.all
```js
Promise.all() 支持 array  map set 类型

例:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

1.所有promise 都是执行的 resolve 结束 那么 就是回调结束.
2.当里面任意一个promise,执行reject 或 输入不合法就会立即抛出错误 抛出出错或者调用的reject()的promise的返回值或错误


```