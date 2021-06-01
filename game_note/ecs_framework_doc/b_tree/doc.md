### 文档
```
Selector
    子任务之一返回成功，则返回成功,子任务返回失败，下一帧执行下一个子任务。


    当执行最后一个还是失败则返回 fail _currentChildIndex=0;

    注意：
        当子任务的状态为 success和 running    _currentChildIndex不变下一次执行还执行她

Sequence
    子任务一个fail 则返回fail,一个子任务返回success,则执行下一个任务，当最后一个返回success 则返回 success 执行到最后一个会重置 _currentChildIndex=0;直接点的索引


ConditionalDecorator 条件判断
     当传入的方法返回的结果 false  则直接 返回 fail状态

     当结果为 true 他返回的结果需要看字节点的状态


注意：
    关于 Decorator(判断相关的)不需要调用builder的endComposite 他自己默认是会调用的

    


UntilFail  
    值返回两种状态 (一直执行子任务直到返回fail)
    1.子任务不是faild 返回 running
    2,子任务 是 faild 返回 fail





UntilSuccess  (一直执行子任务直到返回success)
    值返回两种状态
    1.子任务不是success 返回 running
    2,子任务 是 success 返回 success


AlwaysFail (一直返回失败，除了子任务返回running)



AlwaysSucceed (一直返回失败，除了子任务返回success)





```


