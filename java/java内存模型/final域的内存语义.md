#### final 域的重排序规则
```
1.构造函数对final 变量的写入与随后final对象的的引用之间的顺序不能进行重排序

2.初次final对象的引用和初次读这个final域不能重排序



jmm不允许 final 的写在构造函数之外

编译器会把构造函数final写之后 return之前放一个storestore屏障 进制把final变量重排序到构造函数的外面

```



#### 读final重排序的规则
```
1.初次读对象与初次读对象的final域
    jmm 禁止重排 jmm会在读final域的前面插入一个loadload屏障


初次读对象
初次读对象里面的final 变量
他们之间存在着间接依赖 

间接依赖使编译器不会重排序，大多数编译器也是遵循这个关系的
但是少数的处理器是不遵守间接依赖关系的所以添加loadload屏障主要针对这些处理器的




```


#### final 域为引用类型

```
在构造函数内对一个final引用的对象的成员域
的写入，与随后在构造函数外把这个被构造对象的引用赋值给一个引用变量

    也就是锁在构造函数里面final 必须先 实力在赋值成员变量(不允许cpu和编译器进行重排序)





```

#### 为什么final引用不能从构造函数内溢出
```java
fianl 重排序保证
    在引用变量为任意线程可见前，该引用变量指向的对象的final域已经在构造函数中被正确初始化过了

    类初始化
    和类 fianl变量的使用不能重排序


    构造函数 final 引用初始化和 final对象的成员变量的写入读 不能重排序

还需要一个保证：
     在构造函数内部，不能让这个被构造对象的引用为其他线程所见，也就是对
象引用不能在构造函数中“逸出”





public class FinalReferenceEscapeExample {
final int i;
static FinalReferenceEscapeExample obj;
    public FinalReferenceEscapeExample () {
        i = 1; // 1写final域
        obj = this; // 2 this引用在此"逸出"
    }
    public static void writer() {
        new FinalReferenceEscapeExample ();
    }
    public static void reader() {
        if (obj != null) { // 3
        int temp = obj.i; // 4
        }
    }
}


   i = 1; // 1写final域
        obj = this; // 2 this引用在此"逸出"
    在构造函数中可能被重排序
        1.没有间接关系
        2.loadload 在final 前面的屏障插 只对 final 漆面的读 和 final读补充排序，但是后面可以重排序到 final 变量的前面



```


#### final在处理器中的实现

```

```