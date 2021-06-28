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


## 窗口类最大值和最小值的结构问题

```
需要一个双端队列
    queue []

     当R 移动的时候
        if(队列 after的最后的值比R的大){
            直接把值的索引加入到队列里面 after端加
        }else{
            会弹出比R小和等于的值
        }

   Left 移动
     当 before 段的index和left相等弹出 
    不相等 就不操作 队列

注意 双端队列  before 第一个值永远就是这个窗口里面的最大值

为什么会弹出比它小和等于他的 因为R到我这里了 而我是大于等于你们的而且index比你们大，比你们后过期所.



时间复杂度 O(N)  / 平均 每个元素未O(1)


阉割版的窗口最大值的题

[4 3 5] 4 3 3 5 7

问题  每次 left +1 ,right+1  但是 right-left=2 求出他们每个里面的最大值？？？？？？



```

## 单调栈
```java
/*
 *窗口
 * */
public class WinAlo {
    public static void main(String[] args) {
        int[] arr = {4, 3, 5, 4, 3, 3, 5, 7};
        WinMax max = new WinMax();
        int m1 = max.getArrayMaxNumber(arr, 0, 2);//[4,3,5]
        System.out.println(m1);
        int m2 = max.getArrayMaxNumber(arr, 1, 3);//,3,5,4
        System.out.println(m2);
        int m3 = max.getArrayMaxNumber(arr, 2, 4);//5,4,3
        System.out.println(m3);
        int m4 = max.getArrayMaxNumber(arr, 3, 5);//,4,3,3
        System.out.println(m4);
        int m5 = max.getArrayMaxNumber(arr, 4, 6);//3,3,5
        System.out.println(m5);
        int m6 = max.getArrayMaxNumber(arr, 5, 7);//3,5,7
        System.out.println(m6);
    }

    public static class WinMax {
        public Deque<Integer> deque;
        int left;
        int right;

        public WinMax() {
            left = -1;
            right = -1;
            deque = new LinkedList<Integer>();
        }

        public int getArrayMaxNumber(int[] array, int left, int right) {
            if (left > right) return Integer.MIN_VALUE;//
            while (this.right < right) {
                if (deque.isEmpty() || array[deque.peekLast().intValue()] > array[(this.right + 1)]) {//
                    deque.addLast(++this.right);
                } else {
                    deque.removeLast();//弹出<=他的
                }
            }
            while (this.left < left) {
                if ((this.left) == deque.peekFirst().intValue()) {
                    deque.removeFirst();//弹出第一个
                }
                this.left++;
            }
            return array[deque.getFirst().intValue()];
        }
    }
    }
}
```


## 单调栈
```
解决的问题
   4 2 6 7 2 3 0 1
  任意一个位置  left 比他大 (最近)  right 比他大 最近

经典方法O(N^2)的解

流程
  一个栈 Stack  
     求一个数 左右 最大的值(最近)  入栈是 大--->小
     求一个数 左右 最小的值(最近)  入栈是 小--->大


stack 空 --->入栈

stack 的最顶的值> 要入栈的值  入栈

stack 的最顶的值< 要入栈的值  弹出 栈顶的值  
   得到结论   弹出的值  right 边最近 要入栈的值  左边 就是在弹出栈的低下的一个值

就这样进行一次比较直到要入栈的值压入栈中


当我们没有值呀要入栈中时
我们也需要弹栈  
   弹出的栈有个特点  右面没有最大值  左边的最大值是在你前一个压入栈中的值

   当我们弹出到最后一个值时 这个值没有 左边最大于他的值 没有右面大于他最近的值
  

注意 上面的解法有一个前提 就是没有重复值

时间复杂度：
   因为每个值只出栈和入栈一次所以这个算法的时间复杂度是O(N);




数组中存在重复值
    和上面的思路是一样的,
    取别 有重复值我们使用 链表为每个Item 进行压栈 当遇到值相同的时候，就把值创建一个节点挂载链表的后面



```