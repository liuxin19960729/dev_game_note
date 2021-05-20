```
1.xxx.c 源文件
2.预编译 gcc -E xxx.c -o xxx.i
    1.头文件展开 --不检查语法错误(可以展开任何文件)
    2.宏定义替换
        #define PI 3.14 (宏定义方法定义常量)  code 里面使用的宏名(PI)替换成 宏值v(3.14)
    3.替换注释  (注释替换成 空行)
    4.条件编译 
3.编译阶段 gcc -S xxx.i -o xxx.s    // .s  汇编文件
    1.逐行检查语法错误 --整个编译过程是最耗时的
    2.
4.汇编 gcc -c  xxx.s -o xxx.o 
    翻译 汇编指令翻译成机器指令
5. 连接(Linker) gcc xxx.o -o xxx.exe       xxx.exe xxx.out 可执行文件
    数据段合并
    数据地址回填
    库引入



```

print格式化输出

```
%d 匹配整形

```




vs快捷键
```
1.格式化代码
    选中格式化的代码--【ctrl k】+【ctrl+f】

2.注释
    注释 ctrl+/

    取消注释 ctrl k  +ctr+u



3.调试
    f5 debug
    ctrl+ f5 正常运行

    f10 逐过程 (进函数)
    f11 逐语句 不进函数  

    shift+f11 跳出    
```