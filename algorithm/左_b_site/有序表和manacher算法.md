## manacher算法
```java
解决问题:最长回文子串


经典解法
   ab 1221 1221 ba
   当我们 从a开始寻找当前的最长回文依次遍历开始寻找

   这种找法只能找到实对称线上的回文(因为我们吧每个字符看作是中轴) 这种找法是会漏掉虚中轴的回文字符串

   改进
   #a#b#1#2#2#1#1#2#2#1#b#a#
   我们添加上这样的#
   从第一个# 开始找回文  当我们再到了一个数  要想获取真是的数 count>>1这样就得到真实的回文数



加的这个特殊字符一定是字符串中没有出现的字符吗？
  可以加任意的字符
  因为我们在比对的时候永远都是原字符串里面都字符相比较，
  加都特殊字符相比较所以可以加入任意字符对结果是没有影响的


```

## 给字符串加上 #
```java
    public char[] manacherstr(String str) {
        char[] chars = str.toCharArray();
        char[] newchars = new char[chars.length * 2 + 1];//加了#之后的数组
        int index=0;
        for (int i = 0; i <newchars.length; i++) {
            newchars[i]=(i&1)==0?'#':chars[index++];
        }
        return  newchars;
    }
```

## manacher 的处理逻辑
```java
    public int maxHWLenManacher(String str){
        if (str.length()==0||str.length()==1) return str.length();
        char[] chars = manacherstr(str);
        int [] hwcounts =new int[chars.length];//存的值是  包括自己的半回文长度
        int C=-1;
        int R=-1;//R是最c 的右边界+1
        int max=Integer.MIN_VALUE;
        for (int i = 0; i < chars.length; i++) {
            /*
                先计算出未阔就已经确定的数量
                   1  代表的是 R<=i 说明在最大半径的外面 所以先把他自机作为一个回文串给他设置好

                   Math.min(wcounts[2*C-i],R-i)
                       R-i 就是 i 到right边界的长度
                       wcounts[2*C-i] i'的回文长度
                          三个层面的意思
                          1. i'回文长度<边界长度  当前回文长度就是这个值
                          2. i'回文长度>边界长度  当前回文长度就是这个值
                          3. i'回文长度==边界长度 先预先设置成这个长度后面还有判断

             */
            hwcounts[i]=i<R?Math.min(hwcounts[2*C-i],R-i):1;
            /*
            * hwcounts[i] 当前的意思是已经确定了几个是回文
            *
            *
            *
            * 下面这段代码横灵性
            *    有效减少了  if else 的判断逻辑
            * */
            while (i-hwcounts[i]>-1&&i+hwcounts[i]<hwcounts.length){//判断访问字符串的边界
                  if (chars[i-hwcounts[i]]==chars[i+hwcounts[i]]){
                      hwcounts[i]++;
                  }else {
                      break;
                  }
            }

            //判断R是否更新
            if (R<i+hwcounts[i]){
                C=i;
                R=i+hwcounts[i];
            }
            //更新max值
            max=Math.max(hwcounts[i],max);
        }
        return  max-1;// #1#2#3#2#1#   max 就是最大半径 = 6  真实的值是回文串长度5
    }
```