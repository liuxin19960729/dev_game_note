
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