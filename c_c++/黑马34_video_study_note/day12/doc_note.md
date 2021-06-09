
```
内存中的数据直接写入文件--》这样的文件就叫做二进制文件   
注意二进制文件是不存在[行]的概念的



size_t fwrite(const void * ptr，size_t size ,size_t nmemb,FILE *stream)

ptr 内存的地址
size 固定填1
nmemb  写入的字节数


返回值 写入文件的字节数

注意：
写入内存数据到文件，我们打开文件会看到很多乱码和正常的码，这是因为有的数据能被vi进行编码识别，有的数据不能被二进制的编码识别就会显示奇怪的字符，其实这些东西并不是乱码




fread()

size_t fread(void * ptr，size_t size ,size_t nmemb,FILE *fp);
ptr 读取的数据读到内存中的位置

size  固定填1

nmemb 打算读取文件的字节数
fp 文件指针


return  NULL(0) 文件读取结束或者读取错误
        >0 文件读取的字节数



struct  Pro
{
	int age;
	char  name[100];
};

总结
    若我们艺在结构体里面存储字符串
    1. 字符指针
        结构体存储 char * 指针类型地址数据  所以我们写入文件的就是指针的地值 

        若我们在结构体里面char name [100]
        那么数组里面的数据就会去不存储在结构体里面
        我们write()数据写入文件里面 ，然后关机重写读文件 就会把整个结构体里面的内容读到指定的内存里面，我们仍然可以读取数组里面的数据    

  





```

结构体的内存结构图

```c
# include <stdio.h>
struct STUDENT
{
    char a;
    int b;
}data;
int main(void)
{
    printf("%p, %p\n", &data.a, &data.b);  //%p是取地址输出控制符
    printf("%d\n", sizeof(data));
    return 0;
}

输出结果
00427E68, 00427E6C
8
按照我以前的认为机构体
  char 1 byte
  int 4  byte 
  这个结构体的占用内存大小   1+4=5

  然而输出8  ？？？？

  这是因为结构体存在字节对齐的概念
  怎样对齐？？
        按照结构体中占用最多字节数的内省为标准，在给成员分配内存时都要与这个长度为标准。             

      上面代码结构体储存内存
        
        a null null null b




      



第二种结构体

struct STUDENT
{
    char a;
    char b;
    int c;
}data;

内存结构
a b null null b






typedef struct MyStruct
{	
	char a;
	int c;
	char b;
} data;



打印的值
size of 12
a 00B3F9E4
c 00B3F9E8
b 00B3F9EC

a null null null  a(int)  b null null null



总结：
      1.结构体类型大小的对齐的基准是整个结构最大的类型占用的空间的大小  






```