# Behavior Tree (行为树)
1. 行为树的优势
```
1.管理复杂性
2.异构性
2.可伸缩性
3.使软件具有下面的特征
    模块化
    组件可重用性
    组合性
    很好的关注分离点

```
2. 基础知识
```
1.什么是行为树？
    行为树是一颗分层节点树，控制决策流和任务的执行
2.树的叶子是干什么的？
    叶子是实际的命令(命令:协调组件与系统其它部分加护的地方)            
```
![图一](./imgs/bt1.png)
```
3.如上图所示
    1.DetectObject和GraspObject这两个非叶子节点就是控制流
        控制流是如何发生的?
            他在数的根部执行并通过分支传播，直到达到一个或者多个叶子。

        例：
            当一个TreeNode执行tick()时会返回一个NodeStatus
                可以是 
                    success
                    faild
                    runing



```
```
4.节点的类型
    1.ControlNodes:控制1到n个子节点。ticke()一旦接受到了status就会把status传给这些子节点

    2.DecoratorNodes:与ControlNode相似但是值允许有一个子节点

    3.ActionNodes:ActionNodes是叶子节点没有任何子节点，用户应该在里面实现自己需求

    4.ConditionNodes:条件节点等同于叶子节点，条件节点是原子和同步的,不返回状态(不改变系统的状态)

下图是节点的类型   
```

![节点的类型](./imgs/typehierarchy.png)




####  第一个ControlNode:序列

![第一个ControlNode:序列](./imgs/btcn1.png)
```
了解控制节点SequenceNode是如何进行工作的？
    如上图所示他们会OpenFridge->GrabBeer->CloseFridge顺序进行执行。

    简而言之
        当一个节点tick()返回success的时候会执行下一个节点
        当一个节点tick()返回fail的时候就退出不在执行任何一个节点
        当所有的节点都返回success那么整个序列也返回success
```




#### Decorators(修饰节点)
![Decorators ](./imgs/btdc1.png)

```
DecoratorNode节点的作用
    1.转换从子节点接收的结果
    2.阻止子节点的执行
    3.根据修饰节点的类型重复执行子节点tick()


   修饰节点可以自己进行扩展
    上图可知

        inverter是一个自定义的修饰节点
        这个节点是取反状态自定义修饰节点（相当于  门关着的吗？）



        Retry 自定义修饰节点
            如图所示可以最多尝试3次看是否进行打开

```


#### Second ControlNode: Fallback

![fallbackbasic](./imgs/fallbackbasic.png)
```
控制节点回退(拥有子节点回退策略 ：若子节点有错误下一步应该做什么)
    1.他会按照顺序对子节点进行标记
    
```