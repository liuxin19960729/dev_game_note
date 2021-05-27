字符串的处理函数
```
1、 string.h 头文件

    char *strcpy(char *dest, const char * src);
        将src 的内容拷贝给dest

        拷贝的时候 dest 的空间大于等于src (注意 不要溢出)
        该函数有溢出的风险

        注意
        拷贝的时候会把目标字符串全部清空(\0 字符)
        在进行拷贝







     char *strncpy(char *dest, const char * src,size_t n);
            n：限制拷贝字符的个数

        和上面的一样字符串拷贝的作用

        注意:使用的时候一定要给\0预留位置 否则字符串和被拷贝的字符串有可能不同



    str拼接

        char *strcat(char *dest, const char * src);

        将src的内容拼接到dest后面

        dest在拼接的时候会先去掉字符串的\0字符--在进行拼接

        char *strncat(char *dest, const char * src,size_t n);

                将src 的n个字符 拼接到dest后面



        注意 保证dest 的空间能够足够存储，否则会有溢出的危险


    字符串比较

     int strcmp(const char *s1, const char * s2);

            比较s1 和 s2两个字符串

            == 0  s1==s2(字符串里面每一个字符相等)
            ！=0
              比较 s1 s2对应的ascii (s1,s2对应位的ascii的比较)
                   s1>s2 ==1

                   s1<s2 ==-1           

      
     int strncmp(const char *s1, const char * s2,u_size n);

            比较s1 和 s2的前n个字符 

            == 0  s1==s2(字符串里面每一个字符相等)
            ！=0
              比较 s1 s2对应的ascii (s1,s2对应位的ascii的比较)
                   s1>s2 ==1

                   s1<s2 ==-1    
           


   这个字符串的比较是返回的值都是重他们不同的位计算的，不是比较字符串ascii码的和


   sprintf(char *buf,const char *format,....)
        format 的字符串的数据 格式化之后放到 buf里面去
        .... 格式化里面对应的数据


        注意：
            保证buf的空间足够，有溢出的风险

            
             

   scanf();

    <!-- strstr()
        字符串中找子串的位置 -->


```