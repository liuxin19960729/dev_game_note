## Lock接口
```
锁
    1.防止多个线程访问共享资源
    2.允许多个线程并发访问共享资源，例：读写锁

Lock 接口 java se 5之后出现
    他比synchronized 更加灵活 可以显示的获取锁或释放锁 
    可中断获取锁，超时获取锁



```


### AbstractQueuedSynchronizer
```
上面的类简称 同步器

作用：构建锁和同步其他锁的基础框架


主要使用方式继承


同步器提供三个方法

getState()

setState(int)


compareAndSetState(int expect,int update)



同步器子类被推荐定义为内部静态类

```



### 队列同步器的接口与示例

```

```



### 队列同步器的实现和分析
```java


           for (;;) { //队列里面都在执行自旋转的cas 抢锁
                final Node p = node.predecessor(); 
                //p == head fifo的保证
                // tryAcquire(arg) 判断head 是否释放锁
                if (p == head && tryAcquire(arg)) {// 
                    setHead(node);
                    p.next = null; // help GC
                    failed = false;
                    return interrupted;
                }
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    interrupted = true;
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }




```



### 共享式获取
```java
共享式获取与独占式获取最主要的区别在于:同一时刻能否有多个线程同时获取到同步状态




同步器的acquireShared(int arg) 方法的调用可以获取同步状态



    public final void acquireShared(int arg) {
        if (tryAcquireShared(arg) < 0)//尝试获取同步状态 >0 获取到
            doAcquireShared(arg);
    }



    /**
     * Acquires in shared uninterruptible mode.
     * @param arg the acquire argument
     */
    private void doAcquireShared(int arg) {
        final Node node = addWaiter(Node.SHARED);
        boolean failed = true;
        try {
            boolean interrupted = false;
            for (;;) { //自旋转获取
                final Node p = node.predecessor();
                if (p == head) {
                    int r = tryAcquireShared(arg);
                    if (r >= 0) {
                        setHeadAndPropagate(node, r);
                        p.next = null; // help GC
                        if (interrupted)
                            selfInterrupt();
                        failed = false;
                        return;
                    }
                }
                if (shouldParkAfterFailedAcquire(p, node) &&
                    parkAndCheckInterrupt())
                    interrupted = true;
            }
        } finally {
            if (failed)
                cancelAcquire(node);
        }
    }

```