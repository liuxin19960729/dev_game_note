## ttf字体的使用

```ts
1.当我们在fgui 编辑器里面使用ttf字体的时候仅在编辑器里面有用
    他会在cc.label
    cc.RichLable 
    的fontfamily把你拖进去的字体名字设置但是资源发布的时候不会进行字体资源的发布

    要想使用对应的资源需要 先加载资源然后在把字体的资源注册

	b.load("default",(e:Error,font:cc.Font)=>{
				if(e) throw e;
				fgui.registerFont("default2",font);
	})

    注意 fgui.registerFont("default2",font);
    name 要和 fgui编辑器里面的名字进行对应
```