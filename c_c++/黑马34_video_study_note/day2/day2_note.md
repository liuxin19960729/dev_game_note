```c

int a =10
含义：在内存里面声明 4个 byte大小的空间 里面放着    。。。。。0000_1010
的二进制数据 a表示的是内存空间的别名






```

vs 下添加代码管理片段

```xml

工具-->代码管理

<?xml version="1.0" encoding="utf-8"?>
<CodeSnippets xmlns="http://schemas.microsoft.com/VisualStudio/2005/CodeSnippet">
	<CodeSnippet Format="1.0.0">
		<Header>
			<Title>#1</Title>
			<Shortcut>#1</Shortcut> //快捷键
			<Description>c语言代码管理</Description>//描述
			<Author>liuxin</Author>
			<SnippetTypes>
				<SnippetType>Expansion</SnippetType>
				<SnippetType>SurroundsWith</SnippetType>
			</SnippetTypes>
		</Header>
		<Snippet>
			<Declarations>
				<Literal>
					<ID>expression</ID>
					<ToolTip>要计算的预处理器表达式</ToolTip>
					<Default>0</Default>
				</Literal>
			</Declarations>
            // Language="c" 语言
			<Code Language="c"><![CDATA[
            //代码片段
      #define _CRT_SECURE_NO_WARNINGS
			#include <stdio.h>
			#include <stdlib.h>
			#include <string.h>
			int main(){
				system("pause");
				return 0;
			}
			]]>

			</Code>
		</Snippet>
	</CodeSnippet>
</CodeSnippets>

```

预编译在继承环境下设置
```
点击项目 (day1)-->项目-->属性-->配置属性-->预处理器
```
![vs_预处理_setting](./img/vs_预处理_setting.png)
```c

注意 在vs下使用有的函数会报不安全可以使用
#define _CRT_SECURE_NO_WARNINGS
或者是按照上面的方法在vs继承环境里面的已处理器里面进行设置



1.别名

结构体中使用
struct A
{
   int a;
   char str[100];
};

typedef struct A  S_t;

void test(){
    S_t a={100,"刘鑫"};
}


```