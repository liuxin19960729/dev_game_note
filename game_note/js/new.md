# New

```js



function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const car1 = new Car('Eagle', 'Talon TSi', 1993);

console.log(car1.make)



new关键字如下操作

1,创建一个js对象，即{}
2,设置该对象的construct到另一个对象
3,将步骤一创建的对象作为this的上下文
4,创建函数并返回对象this


```