## java对象头
```
在java虚拟机中 
    32位 1 word 4 byte

    非数组 用两个字(world)宽度存储对象头 8 byte

    数组 用3个字(world) 存储对象头 12 byte

 对象头包含
 1.mark world  32/64 bit  存储hashcode 或锁的相关的信息
 2.class metadata Address  对象类型数据的指针
 3. array length 数组的长度(当前对象是数组)





```