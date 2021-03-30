
# ProtoBuf

什么是protobuf
```
ProtoBuf 是结构数据序列化方法

优势：
    1.语言无关、平台无关。
    2.高效。(比传统的xml数据包小) 简单
    3.扩展性好，高效



序列化：
      结构数据或对象转换成能够被存储和传输（例如网络传输）的格式

```


### ProtoBuf - 编码

编码结构

![](./imgs/pro_struct_1.webp)
```
    TLV 即 tag-length-value 
        tag:唯一标识
        length:数据域的长度
        value:数据本身

上图可知
    
    filed=tag+length(可选)+value
    根据不同的类型会变成 filed=tag+value 的形式    

    tag 采用的是Varint编码
    tag=filed_namber+wire_type

tag:(整个tag采用varint 编码)
    filed_number 定义字段的编号
    wire_type:protobuf编码类型;

 wire_type :大小3 个 bit 总共可以表示8种编码(但是protobuf现在只定义了6中编码)

 
```
wire_type 6中编码
![](./imgs/pro_wirt_encode_type.webp)

```
上图
    第一列代表对应的是wire_type编码的编号
    第二列为面向最终编码的编码类型
    第三列是面向开发者的 message 字段的类型。


  注意：
    strt group 和 end group 两种类型已经被遗弃  


message=filed+filed+.... 

 filed格式
    filed = tag+value // varint,64_bit 32_bit 类型
    or
    filed=tag+length+value // type==2 编码类型






我们接受到一条二进制数据 ---->先读一个varints编码块(tag)-->对他进行解码-->读取最后3个bit得到 wire_type类型(我们就知道了我们后面的value采用的是那种编码)-->获取tag前面的数据(也就是filed_number有次可知识哪一个字段)-->在一句wire_type正确读取后面的value --->...继续读取下一个字段

```

### 补码
```
符号位  
    #000 0000

    #第一位表示的符号位

     原码：就是一个数的二进制表示
        15 原码 0000 1111
        -15 原码 1000 1111

     反码: 正数 和原来的一样 负数 除了符号位其他的全反 
        例:
            15 的反码 0000 1111
            -15的反码 1111 0000 =-16   =-128+2^4+2^5+2^6

      补码:正数的补码就是原码,负数的补码在反码的基础上+1
         -15 =1111 0000 +1=1111+0001=-15



```


### Varints编码

补码：解决计算机中表示负数的问题
    正数 补码表示本身
    负数 补码符号位不变，其余取相反数



```
    规则:
        1.每个字节开头设置了msb(most significant  bit ) -->标记了是否读下一个字节

        2.存储数对应的二进制补码
        3.补码的低位排在前面(为移位做的一个小优化)



        int32 val=1;
        源码 0000 ... 0000 0001

        补码 0000 ... 0000 0001

        Varints 编码：0#000 0001（0x01）  // 1 的 Varints 编码，其中第一个字节的 msb = 0



例1：
编码过程
    数字1补码 0000 ... 0000 0001
    只需要取出第一个7位组因为前面全为 0 ,所以第一个7位组的msb为0 
    0 | 000 0001  






解码过程
    编码结果为  0#000 0001（0x01）
    每一个byte第一个bit为msb
        msb=1 还需要在读下一个字节
        msb=0 无需在读下一个字节

     所以 0#000 0001 为 000 0001 无需在读下一个字节 等于1





例2：
    int32 val = 666; 
    原码：000 ... 101 0011010
    补码：000 ... 1010 011010

    Varints  编码  1#0011010 0#0000101



解码  1#0011010 msb=1  要读下一个字节   0#0000101 msb=0 不读下一个字节
     0000101_0011010 B = 666



    msb 实际上起到了lentgh的作用 每一个 byte (8 bit) 都要牺牲一位用来表示msb(这样做的好处是不需要给无论数据多大都给4 byte的困境) 通过varints 我们可以对小数字用更少的字节表示从而提高利用和效率




  int32 实际最多表示 2^28-1 的数字
  当我们给的数字大于他的最大数的时候  Varints 编码将导致分配5字节。




Varints 编码却存在着明显缺陷 

    负数的情况
    int32 val = -1 (8个byte)
    原码 1000....0001 
    反码 1111....1110
    补码：1111.....1111  

   varins编码 
        1#111 1111 ...... 0#000 0001
        0x ff ff ff ff ff ff ff 01


注意由于负数的最高位为1 所以无论如何补码都应该占满整个空间(8个 byte) +8个 msb标识所以为10个byte大小




为什么int32 是4个字节 而负数用了10个字节？
  protobuf基于兼容性的考虑  int32 和 int64 之间都能使用不允许程序的运行


```


### 如何解决varints编码负数使用10个字节的问题

![ZigZag1](./imgs/pro_zg_1.webp)

```
由于Varints 对负数的编码的效率低为了解决问题Protobuf 为我们提供sint32和sint64两种类型(当使用这两种编码 protobuf 将使用 ZigZag 编码j解决varints对负数编码效率低的问题)


原理
ZigZag 编码：有符号整数映射到无符号整数，然后再使用 Varints 编码

例:
int32 val=-2
映射到无符号数3
对3进行varints编码 

接受放接受到 在进行  varints解码 在映射回-2

映射是移位实现的，并非存储映射表
```


### Varint类型

```
wire_type:在上面中 tag 后三位表示, 实际 protobuf存在6中类型
(start group 和 end group 被废弃实际只有4种)
```










