字符串 和字符数组
```
字符数组
    char str[10]={'h',...}

    注意：当我们初始化的时候没有初始化完后面会默认补0,这样有了结束符。他也叫做字符串


字符串
   
    char str[10]={'h',..'\0'};
    注意字符串必须有\0结束符



char str[]="sss";//也可以这样进行定义字符串(里面隐含的有\0)





printf("%s",str) 当我们打印str 会打到字符数组的0 | '\0' 结束(prinf("%s"))的特性





```


str 

```c
字符串的操作函数
    scanf()
        注意:1.用于存储字符串的空间足够大，防止溢出
        2.scanf 获取字符串 %s  ,遇到 空格 \n(回车) 进行终止

    int str [10]="abcdefghij";  错误操作 \0 的字符在数组申请的外面了，这样的操作可能会对其他数据可，其他的分配内存赋值可能会造成错误(字符串溢出)

    第二种用法
    scanf(正则表达式,指针)

    例： scanf("%[^\n]s", str); //除了回车什么字符都接收





char* gets(char *s) 
    //获取字符串，返回字符串的的首地址

    s:存储字符串的空间

    return 字符换的的首地址

    总结：可以获取带有空格的字符串

    scanf 和 gets区别
        gets 允许输入带有空格,换行结束
        scanf 默认输入空格 换行 结束
    共同点：
       都是不安全--有可能造成数据溢出



char* fgets(char *s,int size,FiILE *stream)

s 空间
size 描述空间的大小
stream 读取字符串的位置 stdin 标准输入


作用弥补 gets(), scanf 溢出的问题




总结
    会fgets 会预留 \0 的存储空间
    获取的字符是size-1个 


    fgets() 空间空间够的情况下是【会】读取 \n 的字符串(\n在 \0之前)







int puts(const char *s) 
将一个字符串写出到屏幕

return  >=0  success 
       
        <0 fail 
  总结  puts 函数输出完毕自动加上\n(换行)




fputs(const char *s,FILE *stream)
    将一个字符串写出到屏幕

    s 字符串
    stream 写出到哪里(stdout 标准输出文件)

    和puts 区别 结束默认不加 \n(换行符)




	//puts
	char *str = "刘鑫";
	puts(str);//这个函数屏幕的标准输出 会在字符串的后面默认的加上 \n

	fputs(str, stdout);//stdout 屏幕的标准输出 默认不加\n 
	system("pause")


fputs 和 puts printf 他们都是读到字符串\0结束符的结束




size_t strlen(const char * s) 获取字符串的有效长度(不包含\0)

printf("len %d\n",strlen(str)); //字符串包不含结束符的字符串长度

自我实现 
typedef  unsigned int u_int;
 u_int strLenLx(const char * str) {
	 u_int count = 0;
	while(1) {
		char  c = *(str + count);
		if (c == '\0') break;
		count++;
	}
	return count;
}


优化 
typedef  unsigned int u_int;
 u_int strLenLx(const char * str) {
	 u_int count = 0;
	while(*(str + count)!='\0') {
		count++;
	}
	return count;
}

```