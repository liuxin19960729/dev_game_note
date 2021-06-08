文件行的操作
```

fgets(str,size,stream)
   获取一行数据 \n 
   
   自动在获取的一行数据并且在后面+'\0' 表示这行数据 是一个字符串

  一行数据长度> size-1    那么获取size-1大小的数据  并在最后+\0

  一行数据(\n结束代表一行数据)<=size-1 全部获取 +\0  
   
  注意：
    size 空间够的情况下是会读\n字符的

    return 
        fail null
int fputs(str,stream)
    写出一个字符串 
    
   return  succ 0
        fail -1 




printf() -> spritf() -> fprintf();
    都是固参+变参

    fprintf(FILE *stream,const char * format,...)
        将s格式化后的字符串写到文件中




scanf()-> sscanf()->fscanf();
    sscanf()  从缓冲区里面进行匹配格式化


    fscanf(FILE *stream ,"%d",&m)
      重文件读出 format 匹配的中 并把它赋值到 *m变量中


注意
    fscanf()
        1.边界溢出问题
            存储读取的数据空间在使用之前清空操作
            (当操作fscanf 超出边界 &a 地址对应的内容还是原来的内容)
        2. 还是是文件指针存在的问题
          当他匹配成功之后文件指针会移到匹配成功的字符串的后面





fgets()循环读文件
    以行标准来读（\n结尾）

```


c语言文件操作

```
文本  123 ascii ‘1’‘2’‘3’  每一个 byte 显示成 ascii

二进制 存储的的是二进制序列 1个 byte为 一个单位
   




文件指针
      FILE (typedef stuct_IO_FILE FILE )

 fopen() 动态分配FILE结构体的内存 相当于malloc
   一定要判读返回值


 flose() 关闭文件  和 释放 FILE 结构体内存 相当于 free
        退出之后会一定关闭

         os 打开文件数优先 os管理着文件管理数 所以文件操作完毕一定要关闭防止内存无用的占用，linux 才能对这块内存的重新利用

         在flose 之前一定要保证文件指针不是空指针和野指针


   
当我们申请内存之后然后释放必须把它赋值为NULL否则为野指针








2.
    int fprintf(FILE *fp ,const char * str,..)
        在文件里面写入数据

    执行正确返回的是写入的字节数


    -1 就是写入失败






char * fgets(char * int size,FILE *fp);

从文件中读取一行
size 读取大小
fp 文件指针


这一行的长度 <size 全部读取 +\0
这一行的长度>=size 读取这一行的size-1长度的内容+\0


return  NULL 文件读取结束
      ！=NULL 读取的字符串


 注意 他不是 当size <=一行的内容的时候
 他下一次读取文件会接着第一个读的最后一个字符开始读取






```

动态内存管理
```
    void * malloc(unsinge int size)

        申请size大小heap堆内存
     返回 null 没有申请成功

   void free(void * p) 释放heap内存

注意
    申请了的内存，用完这个内存之后一定要去释放我们释放的内存
    避免野指针



定义 指针变量 一定初始化为NULL

     指针释放要把指针变量 赋值为NULL(避免内存的非法操作)   

    当我们定义指针没有初始化 os会给我们分配一个随机值(这个内存区域就是乱指的 也是一块野指针)



```


内存操作函数

```
string.h

设置内存值
memset(void * dst,int val,u_size size)
    size ：设置范围 (单位 byte)
    val: 注意这个val设置的值是每个dst 开始每个地址对应的空间都设置为val 返回  dst+(size-1)

    dst ：目标地址



memset 重置内存值=栈堆都能操作 前提要有空间的地址



memset 运用场景可以做内存区域值做初始化的操作








memcpy(void *dst,const void *src size_t n)
    n 单位字节
    将src 的内容拷贝到 dst 拷贝 n个字节的大小


  注意 memcpy dst 和 src 避免操作同一块区域
      可能对同一=块区域即读又写(可能出现错误)         



 strcpy()比较 拷贝到\0之前的内容（以\0结尾）
   注意 src 参数 必须是字符串
   若是字符数组 可能会拷贝到乱码或报错
   存在不安全的行为


 memcpy 是拷贝指定大小的内容

  1.函数参数不同 
  2.strcpy 只能拷贝 string  
    memcpy 内存空间的内容

  3.strcpy  \0 结尾
    memcpy  指定大小个数结尾 





memmove()
    和memcpy 功能一样 安全的，但是效率比memcpy低





```

memcpy重叠地方出错原因



```

```
