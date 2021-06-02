string.h

```
char* strchar(const char * str,int c)
在字符串中找字符(字符串中首次出现)的位置  返回字符的地址


char* strrchar(const char * str,int c)
    自由向左开始找第一个的地址返回




char* strstr(const char * str1,const char * str2)

    在字符串str中找子串substr 子串第一次出现的位置






字符串分割  
char * strtok(char *str,const char *delim)  按照既定的分割符来进行拆分字符串

   总结：
   会找到字符串第一个匹配的字符串，并且把匹配的字符换成\0


   strtok() 返回的值是才分后的的字符串



#include <stdio.h>
#include <string.h>

int main ()
{
  char str[] ="- This, a sample string.";
  char * pch;
  printf ("Splitting string \"%s\" into tokens:\n",str);
  pch = strtok (str," ,.-");
  while (pch != NULL)
  {
    printf ("%s\n",pch);
    pch = strtok (NULL, " ,.-");//1+次拆分
  }
  return 0;
}





atoi/atof/atol

字符串转int
字符串转浮点数
字符串转long


注意：
    要求代转的字符串必须可转才行


```





内存管理
```
局部变量
    定义：定义在函数内部的变量

    作用域：重定义位置开始到包裹第一个 }(括号结束)



```

