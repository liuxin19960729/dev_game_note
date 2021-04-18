## 基础知识
![](./img/cache.architecture.png)
```
cpu 多核技术,存在缓存技术老cpu一般存在l1,l2,新cpu一般存在 l1,l2,l3


l1 高速缓存 指令  和数据两种高速缓存  (段寄存器里面的高速缓存)

l2,l3 不分指令和数据的缓存

l1,l2 存在每个cpu核心例

l3 被每个cpu核共享的缓存





缓存的速度
L1 的存取速度：4 个CPU时钟周期
L2 的存取速度： 11 个CPU时钟周期
L3 的存取速度：39 个CPU时钟周期
RAM内存的存取速度：107 个CPU时钟周期

速度越来越慢  但是存储的空间越来越快




多级缓存虽然提高了访问的性能，和数据同步的优势
但是也造成了很多问题

一个是比较简单的缓存的命中率的问题。
另一个是比较复杂的缓存更新的一致性问题。(多线程程序造成错误的重要原因)




cache line :一块一块的数据块
cache line cpu加载数据的单位
对于主流的cpu加载数据的单位是64 byte  = 16 个 32 bit大小的int (4 byte)



cache 数据放在位置 是缓存放置策略的决定的 

我们访问内存里面数据的时候 缓存和内存有一种映射的方式 先到缓存里面查询 有 访问缓存，没有访问内存



ram 和 cahce 映射的方式

1.内存地址+数据 全部被放在缓存里面
    我们要寻找一个内存数据是否存在缓存里面就会去遍历。O(n)的复杂度

2. 降低搜索的方法  hash table 的数据结构  


3.N-Way 关联方式
    把连续的N个Cache Line 绑成一组

    1.现在到关联的组--然后在这个组找到相关的Cache Line




Intel 大多数处理器的L1 Cache都是32KB，8-Way 组相联，Cache Line 是64 Bytes

N-way 方式

  32kb 的 l1 缓存  
    32kb /64 byte =512 cache line
    每一组有8 way(路)  512/8 =64 一way 64 个cache line 也分成了64组
    
    每一路 64*64 =4096 bytes 的内存 








```

### N-Way方式 存储Li 的 cache 

![](./img/cache-associative-fill-both.png)



### cache line 数据存储

```
为了方便索引内存地址

tag:每条 Cache Line 前都会有一个独立分配的 24 bits来存的 tag，其就是内存地址的前24bits (内存地址的前24位)


index:内存地址后续的6个bits则是在这一Way的是Cache Line 索引，2^6 = 64 刚好可以索引64条Cache Line  路(way)-->cache line索引的(就是 内存地址的后6位)  0-63 个 bit


Offset：再往后的6bits用于表示在Cache Line 里的偏移量


```

![](./img/L1CacheExample.png)

```
上图就是一个表格

64行 *8 列的一张表


每行有8 个 item 


item =tag+line(64 byte)


64 * 8* 46 =32KB 存储32KB大小的数据



缓存的世界观，物理内存被划分成4kb的物理页 
每页有4kb(4096 byte)/64 byte==64 条高速缓存线

当我们要查看一个4kb的页面时该页面 0-63 byte 在第一个缓存行 
64-127 在第二个缓存行......



```

![](./img/selectingCacheLine.png)

```
  查看内存地址
  11-6 位 确定行号
  0x800010a0 =     ....._0001_0000_1010_0000
  0000_10 (11-6 位) =2  不许存在 2 行中 

  找到了对应的行 我们现在需要查找那个单元有这个数据 (若存在的话)

  每个单元前面都存在 一个tag
  tag:一行所在页面的的编号 6gb/4kb==2^24 个页面

  0x800010a0 对应的tag 是   524,289 


offset 就是 cache line 的偏移量(低6位 111111 [0-63] )
  就是表示的tag 后面的64 byte 的索引



这也意味着：

1.L1 Cache 可映射 36bits 的内存地址，一共 2^36 = 64GB的内存

2.当CPU要访问一个内存的时候，通过这个内存中间的6bits 定位是哪个set，通过前 24bits 定位相应的Cache Line。

3.就像一个hash Table的数据结构一样，先是O(1)的索引，然后进入冲突搜索。

4.因为中间的 6bits 决定了一个同一个set，所以，对于一段连续的内存来说，每隔4096的内存会被放在同一个组内，导致缓存冲突。
 

当有数据没有命中缓存的时候，CPU就会以最小为Cache Line的单元向内存更新数据。当然，CPU并不一定只是更新64Bytes，因为访问主存实在是太慢了，所以，一般都会多更新一些。好的CPU会有一些预测的技术，如果找到一种pattern的话，就会预先加载更多的内存，包括指令也可以预加载。这叫 Prefetching 技术

****


```
### CPU多个核的缓存是怎么同步 (缓存一致性的问题)  

```
缓存写操作的两种策略
一种是Write Back，写操作只要在cache上，然后再flush到内存上。
一种是Write Through，写操作同时写到cache和内存上。


一般来说，主流的CPU（如：Intel Core i7/i9）采用的是Write Back的策略，因为直接写内存实在是太慢了。



cpu硬件两种方法实现缓存一致性

Directory 协议
    设计一个集中控制器(主内存控制器的一部分)-->一个目录存储在主内存控制器-->目录包含缓存内容的全局状态

    单个cpu cache 发出写请求-->集中控制器会检查并发出命令 ，在 主存和cpu cache (包含自己 cpu cache) 实现数据的同步

Snoopy 协议 
  这种协议更像是一种数据通知的总线型的技术。CPU Cache通过这个协议可以识别其它Cache上的数据状态。如果有数据共享的话，可以通过广播机制将共享数据的状态通知给其它CPU Cache。这个协议要求每个CPU Cache 都可以“窥探”数据事件的通知并做出相应的反应。如下图所示，有一个Snoopy Bus的总线

```

### Snoopy 协议 
![Snoopy 协议 ](./img/The-cache-coherence-problem-Initially-processors-0-and-1-both-read-location-x-498x270.png)


```
directory 和 snoopy 协议的分析

Directory协议是一个中心式的，会有性能瓶颈，而且会增加整体设计的复杂度



Snoopy协议更像是微服务+消息通讯，所以，现在基本都是使用Snoopy的总线的设计


```


### MESI协议

![MESI协议](./img/MESI.png)


```
**MESI协议的状态**
Modified（已修改）, Exclusive（独占的）,Shared（共享的），Invalid（无效的）



MESI协议的缺点
MESI 这种协议在数据更新后，会标记其它共享的CPU缓存的数据拷贝为Invalid状态，然后当其它CPU再次read的时候，就会出现 cache miss 的问题，此时再从内存中更新数据。从内存中更新数据意味着20倍速度的降低。

```



### MOESI 协议

```
和MESI协议基本操作逻辑是一样的
当我们写了共享内存的cache的时候,被写入的缓存当做Owner，并且把Owner标记成新更新的数据源，其他核的cache 失效 ，当其他核需要用到这个内存地址的时候（不像mesi直接到内存里面去拉取最新数据）,而是到已经更新的核cache里面获取数据进行当前核心缓存的cache的更新 
```


### MESIF协议

```
和MOESI协议类似

他会把更新的数据转发给其他cpu cache 




amd 用的是 moesi   intel用的是 mesif协议

这两种协议都用在l3上面  l3 是共享的  ，其他的缓存的数据之间是不能跨核心进行访问的


```


###  示例一

```c
const int LEN = 64*1024*1024;
int *arr = new int[LEN];
for (int i = 0; i < LEN; i += 2) arr[i] *= i;
for (int i = 0; i < LEN; i += 8) arr[i] *= i;


观察两个循环第一个循环量要比第二系遵循次数多循环4被的量

但是经过测试

第一个循环需要127毫秒，第二个循环则需要121毫秒，相差无几


因为每次 加载cache Line 的最小单位是64 byte大小==16个 32位 int 大小的数据
所以 每次执行 的步长在 2，8 都差不多 ，而后面的乘法 在cpu指令里面本来就是一个指令不是很耗时间


```