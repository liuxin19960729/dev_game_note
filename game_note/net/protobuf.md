
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




### Varints编码
```
    规则:
        
```









