```js
ubo 内存布局

非 sampler 的uniform 形式都应该使用  block形式

使用 unifrom block 应该注意

1.vec3 成员

2.数组成员 每个元素的size 不能小于 vec4

3.


UBO 是渲染管线内要做到高效数据复用的唯一基本单位
WebGL2 的 UBO 只支持 std140 布局







properties

properties 存储着这个 Pass 有哪些可定制的参数需要在 Inspector 上显示，
这些参数可以是 shader 中的某个 uniform 的完整映射，也可以是具体某个分量的映射 (使用 target 参数)：



对立面的 uniform 进行设置值

mat.setProperty('emissive', Color.GREY); // this works
mat.setProperty('albedo', Color.RED); // directly set uniform
mat.setProperty('roughness', 0.2); // set certain component
const h = mat.passes[0].getHandle('offset'); // or just take the handle,
mat.passes[0].setUniform(h, new Vec2(0.5, 0.5)); // and use Pass.setUniform interface instead



为方便声明各 property 子属性，可以直接在 properties 内声明 __metadata__ 项，所有 property 都会继承它声明的内容，如：

properties:
  __metadata__: { editor: { visible: false } }
  a: { value: [1, 1, 0, 0] }
  b: { editor: { type: color } }
  c: { editor: { visible: true } }
这样 uniform a 和 b 已声明的各项参数都不受影响，但全部不会显示在 inspector 上（visible 为 false），而 uniform c 还会正常显示。



```