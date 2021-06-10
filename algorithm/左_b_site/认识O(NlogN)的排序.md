### 认识O(NlogN)的排序

```
递归行为和递归行为时间复杂度的估算


    求start end 两个数的中点 

       start+(end-start)>>1

      (star+end)/2 一般情况下是错误的但是有可能会造成错误，
      因为 start+end  在足够长的情况下有可能造成溢出 然后在/2 得出的结果就是错误的。  



```

```java
public class Recursion {
    public static void main(String[] args) {
        int [] array={1,2,3,4,5,33,3};
        int max = recursionMax(array, 0, array.length - 1);
        System.out.println("max:"+max);
    }
    public static int recursionMax(int[] array ,int leftIndex,int rightIndex){
        if (leftIndex==rightIndex)   return array[leftIndex];
        int midle=leftIndex+((rightIndex-leftIndex)>>1);
        System.out.println("left "+leftIndex+" right "+rightIndex +"midle "+midle);
        int leftV = recursionMax(array, leftIndex, midle);
        int rightV = recursionMax(array, (midle + 1), rightIndex);
        return Math.max(leftV,rightV);
    }
}



```
递归求最大值的图解
![递归求最大值的图解](./img/dg_max.png)


```
T(N)=a*T(N/b)+O(N^d);

T(N):母2问题数据量是N级别的
a:子问题调用的次数
T(N/b):子问题的数据是N/b级别的
O(N^d): 除了子问题外的的时间复杂度



上面的的递归
  N=rightIndex-leftIndex;

  然而子问题  
    int leftV = recursionMax(array, leftIndex, midle);
    int rightV = recursionMax(array, (midle + 1), 

    子问题数据量是N/2  并且调用了两次字子问题
  
子问题其余的都是常量时间复杂度 所以他的时间复杂度为O(1)

T(N)=2*T(N/2) +O(1)


时间复杂度的计算
①当d<logb a时，时间复杂度为O(n^(logb a))
②当d=logb a时，时间复杂度为O((n^d)*logn)
③当d>logb a时，时间复杂度为O(n^d)    


```


合并排序

```java
    public static void main(String[] args) {
        int a[]={1,2,1,4,5,33,3,2};
        process(a,0,a.length-1);
        System.out.println(Arrays.toString(a));
    }
    public  static  void process(int[] array,int L,int R){
        if (L==R) return;
        int mid=L+((R-L)>>1);
        process(array,L,mid);
        process(array,mid+1,R);
        merage(array,L,mid,R);
    }

    public  static void merage(int[] array,int L,int mid,int R){
        int tmp[]=new int[R-L+1];
        int tmpI=0;
        int p1=L;
        int p2=mid+1;
        while (p1<=mid&&p2<=R){
            tmp[tmpI++]=array[p1]<=array[p2]?array[p1++]:array[p2++];
        }
        while (p1<=mid){
            tmp[tmpI++]=array[p1++];
        }
        while (p2<=R){
            tmp[tmpI++]=array[p2++];
        }
        for (int i = 0; i < tmp.length; i++) {
            array[L+i]=tmp[i];
        }
    }
```