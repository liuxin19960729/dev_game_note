```
了解hash函数
1.输入域无穷(能够接收任意长度的字符串)
2.输出域有限(整数值 hash)
    例： md5 0-2^64-1
             
         sha1 0-2^128-1
       java 0-2^32-1
    
    一般16进制进行输出
   md5  len =16
   sha1  len =32



3.输入参数相同 一定反回相同的输出

4.不同的输入可能导致相同的输出 (输入域>输出域必然导致可能造成相同的输出)
    hash 碰撞
5.输出域离散型(均匀性)，是差不多的  -----hash 函数最重要的性质



当数出的hash值 %m  那么输出的值的范围在 [0,m-1] 范围 他也能保证在这个范围是均匀分布的



```

## 题一
```
1.一个文本里面有40亿个数(无符号)
 要求统计那个数字出现的次数最多 并且内存要求不大于1G


传统的思路解决问题
  1.传统的HashMap<integer,integer> 方法  k v  假设都要4个 byte
   2.假设4亿个数字都不同的情况下

    hashmap 最终可能消耗 8*40=320亿==32G 这样就不行了



2.利用hash 函数的性质(离散和散列性)

读取每一条数据
    每一条数据调用 hash 函数
    拿到hash 函数%100 并且把他们的值 分别放到[0,99]号文件上
    根据性质得到[0,99]文件上的数字的数量求实是差不多的
  
  我们对每个文件使用hashMap 进行统计 32/100=0.32G(<1G)
  
  当我们统计完了之后 在把他们每个最大的文件出现的次数进行比较 求出出现最大的值


```

## hash表的实现

```java

HashMap


    public HashMap() {
        this.loadFactor = DEFAULT_LOAD_FACTOR; //加载因素 0.75f
    }


    public V put(K key, V value) {
        return putVal(hash(key), key, value, false, true);
    }
   

   hash ()


   (key == null) ? 0 : (h = key.hashCode()) ^ (h >>> 16);
 

    key.hashCode() key的hash值
    (h >>> 16)  key的hash值无符号向左移动16位

    key.hashCode()^(key.hashCode()>>>16) 
    高16位不会受到影响
    

    hash map的这个做法就是 降低hash的冲突率



tab[i = (n - 1) & hash]

(n - 1) & hash  分析
  初始化的时候 n =16 n-1=25 

  1111& hash 就是相当于求余 xxxx .....(4 bit) 有16种 可能性 0-15


这样的一种算法 也正是验证了上面的   key.hashCode()^(key.hashCode()>>>16)  他这个的做法就是想让他们分的更加散开  高16和低16组合 形成新的数

hashmap [] 数组结构  每个元素是个单链表









添加元素

           if (p.hash == hash &&
                ((k = p.key) == key || (key != null && key.equals(k))))
            e = p;
           
           key hash 和 key 值(地址 || 内容)相等就替换




               for (int binCount = 0; ; ++binCount) {
                    if ((e = p.next) == null) {
                        p.next = newNode(hash, key, value, null);
                        if (binCount >= TREEIFY_THRESHOLD - 1) // -1 for 1st  链表超过7 就把他转化为双向链表
                            treeifyBin(tab, hash);
                        break;
                    }
                    if (e.hash == hash &&
                        ((k = e.key) == key || (key != null && key.equals(k))))
                        break;
                    p = e;  //遍历单向链表  若已经存在则直接退出

                }

            if (e != null) { // existing mapping for key  存在 拿着 e 然后进行替换
                V oldValue = e.value;
                if (!onlyIfAbsent || oldValue == null)//检测值是否和以前不同
                    e.value = value;
                afterNodeAccess(e);
                return oldValue;
            }


        ++modCount;
        if (++size > threshold)
            resize();


        个数大于 threshold进行扩容

        


扩容的代价 O(N*logN)



虚拟机语言离线扩容技术

1. 当我们感觉需要扩容我们可以让用户继续使用老的hash表
我们在另一个地方扩容  扩容完成后在把这个新的扩容后的hash表切回给用户


```


```java
设计一种结构
 insert(key)  加入的key不重复
 delete(key)  移除 key
 getRandom()  随机获取一个key

 要求 上面的所有方法时间复杂度都是O(1)


public class CusumerMap {
    private HashMap<String,Integer> _mapSI=new HashMap<String, Integer>();
    private HashMap<Integer,String> _mapIS=new HashMap<Integer, String>();
    int size=0;
    public void insert(String key){
        if (_mapSI.containsKey(key)) return;//已经存在
        _mapSI.put(key,size);
        _mapIS.put(size,key);
        size++;
    }


    public String getRandom(){
        if (size==0)return null;
        int random= (int) (Math.random()*size);
        return _mapIS.get(random);
    }

    public void delete(String key){
        if (!_mapSI.containsKey(key)) return;
        int index=_mapSI.get(key);//获取当前的索引
        _mapSI.remove(key,null);
        size--;
        _mapSI.put(_mapIS.get(size),index);
        _mapIS.put(index,_mapIS.get(size));
        _mapIS.remove(size);
    }
}

```

## 布隆过滤器
```java
场景
   100亿个url  
   每个url 最多64 byte
  
  需要一种数据结构快速进行查找判断url是否在100亿个url内



布隆过滤器
   1.使用空间要少
   2.允许一定几率的失误率(不可避免)
       只允许 白-->黑类型的失误(概率很低)


做出一个bits数组

 int bits[] =new int[10];//10*32bit =320 的数组
 int index=178;
 //获取第178位的的状态
 int v=((bits[index/32]>>(index%32))&1);
 //把第178位改为0
  bits[index/32]=(bits[index/32]&(~(1<<(index%32))));
  //把第178位变为1
  bits[index/32]=(bits[index/32]|1<<(index%32));





布隆过滤去流程
  k个hash 函数 
  m 长度 bit 数组长度

  for(url:urls){
      for (hash : hashs){
          int v =hash.hash(url)%m;
          再去改变每个hash函数计算出来的位的状态改为1
          若已经为1 不变
      }   
  }




当我们拿着一个url查询的的时候 
  调用每个hash函数 %m 

  若查询数组所有对应的位都为1 则 存在

  反正不存在




m 长度  k的hash函数种类
决定查找的失误率
m越大失误越小



k这个参数并不是越多越好
  约到 数组描黑率越高  
  就可能失误率增加



https://zhuanlan.zhihu.com/p/43263751


n 样本量
p 失误率



m=-((n*ln p)/((lnz)*(ln2))) bit长度 26G

k ln2*(m/n)=0.7*(m/n)



p真(失误率)=(1-e^-(n*k真/m真))^k真


```

## 一致性hash
```
数据的划分
hash 选择 key 一定高选择 高中 低都有数量的key来进行划分
这样能保证每台机器都能有差不多的负载


可能造成的问题
  数据库服务器扩展机器 数据迁移的的量是全量的


解决方法(减低数据迁移量的成本)
    hash一致性的解决方法

问题 机器数量少 不能保证环负载均分

  解决 虚拟节点技术
  
  
```