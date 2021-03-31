# Netty

```
介绍:
    异步事件驱动的网络应用框架
```

### 例1
```java
Server.java

package com.liuxin.test1;

import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;

public class Server {
    private  int port;

    public Server(int port) {
        this.port = port;
    }

    public  void  run() throws  Exception{
        /*
        * NioEventLoopGroup 处理I/0操作的多线程循环
        *boosGroup 接收一个传入连接
        * workerGroup 把boosGroup接收到的连接注册到worker,处理接收连接的流量
        *
        *
        * EventLoopGroup 使用多少线程以及如何把它们映射到通道取决于对他的实现
        *     多少线程也可以通过构造函数进行设置
        * */
        EventLoopGroup boosGroup=new NioEventLoopGroup();
        EventLoopGroup workerGroup=new NioEventLoopGroup();
        try {
            /*
            *ServerBootstrap是设置服务器的助手类
            * */
            ServerBootstrap b=new ServerBootstrap();
            // NioServerSocketChannel 实例化一个新通道 接收传入的连接
            b.group(boosGroup,workerGroup).channel(NioServerSocketChannel.class)
                    //ChannelInitializer 用于帮助用户配置新的Channel 用于程序的逻辑业务的处理
            .childHandler(new ChannelInitializer<SocketChannel>() {
                protected void initChannel(SocketChannel ch) throws Exception {
                    ch.pipeline().addLast(new DiscardServerHandler());
                }
            })
                    //下面设置的是套接字选项
            .option(ChannelOption.SO_BACKLOG,128)
            .childOption(ChannelOption.SO_KEEPALIVE,true);

            ChannelFuture f = b.bind(port).sync();
            f.channel().closeFuture().sync();
        }finally {
            workerGroup.shutdownGracefully();
            boosGroup.shutdownGracefully();
        }
    }

    public static void main(String[] args) throws Exception {
        (new Server(8888)).run();
    }
}



DiscardServerHandler.java


package com.liuxin.test1;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;
import io.netty.util.ReferenceCountUtil;

/*
 * 接收数据的处理适配器
 * */
public class DiscardServerHandler extends ChannelInboundHandlerAdapter {
//    @Override
//    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
//        ctx.write(msg);
//        ctx.flush();
//    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
        cause.printStackTrace();//异常 打印栈追踪
        ctx.close();//关闭通道
    }

    /*
    *建立连接就执行
    *
    * */
    @Override
    public void channelActive(final ChannelHandlerContext ctx) throws Exception {
        final  ByteBuf time=ctx.alloc().buffer(4);//分配快缓冲区数据 4个 byte 32位
        /*
        * ByteBuf
        *   读写数据的指针是分离的
        * */
        time.writeInt((int)(System.currentTimeMillis()/1000L+2208988800L));

        /*
        *
        * ChannelFuture:表示的是一个尚未发生的Io操作（Netty 里面的所有的操作都是异步的）
        *
        * */
        final ChannelFuture channelFuture = ctx.writeAndFlush(time);
        //天机一个监听方法
        channelFuture.addListener(new ChannelFutureListener() {
            public void operationComplete(ChannelFuture future) throws Exception {
                /*
                *assert java中的断言
                * assert (bool表达式)
                *   true 程序继续执行
                *   false  AssertionError异常
                *
                * */
                assert  channelFuture == future;
                ctx.close();
            }
        });
    }
}



Client.java

package com.liuxin.test1;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;

public class Client {
    public static void main(String[] args) throws InterruptedException {
        String host="127.0.0.1";
        int port = 8888;
        EventLoopGroup w_g=new NioEventLoopGroup();
        try {
            Bootstrap bs=new Bootstrap();
            bs.group(w_g)
            .channel(NioSocketChannel.class)
            .handler(new ChannelInitializer<SocketChannel>() {
                protected void initChannel(SocketChannel ch) throws Exception {
                    ch.pipeline().addLast(new TimeClientHandler());
                }
            })
            .option(ChannelOption.SO_KEEPALIVE, true);

            ChannelFuture sync = bs.connect(host, port).sync();
            sync.channel().closeFuture().sync();
        }finally {
            w_g.shutdownGracefully();
        }
    }


}


TimeClientHandler.java
package com.liuxin.test1;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.ChannelInboundHandlerAdapter;

import java.util.Date;

public class TimeClientHandler extends ChannelInboundHandlerAdapter {
    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        ByteBuf bf=(ByteBuf) msg;
        try {
            long currentTimeMillis = (bf.readUnsignedInt() - 2208988800L) * 1000L;
            System.out.println(new Date(currentTimeMillis));
            ctx.close();
        }finally {
            bf.release();//缓冲区回收
        }
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) throws Exception {
         cause.printStackTrace();
         ctx.close();
    }
}


```



## 处理基于流的传输
```
tcp ip 接收到消息存储在套接字的缓冲区中
    注意 缓冲区 里面的数据操作系统将缓冲区视为一串字节
  
```

#### 假设一个操作系统接收到了3个包

![3个数据包](./imgs/1.png)

#### 应用程序读取他们的方式可能是
![应用程序可能读取的方式](./imgs/2.png)


### 整理接收到的数据
![整理接收到的数据](./imgs/1.png)
```
所以无论是客户端还是服务器端接收到他们都应该把数据整理成一个有意义的帧
```


## 第一个解决方案
```java
上面的例子我们知道我们需要传输4byte大小的数据，但是会造成一个问题--会随着流量变大而有可能造成这个数据的碎片化


解决方案1
    创建一个内部累积缓冲区，并等待直到所有4个字节都接收到内部缓冲区



    private  ByteBuf buf;
    @Override
    public void handlerAdded(ChannelHandlerContext ctx) throws Exception {
            buf=ctx.alloc().buffer(4);
    }

    @Override
    public void handlerRemoved(ChannelHandlerContext ctx) throws Exception {
            buf.release();
            buf=null;
    }


   @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) {
        ByteBuf m = (ByteBuf) msg;
        buf.writeBytes(m); // (2)
        m.release();
        
        if (buf.readableBytes() >= 4) { // (3)
            long currentTimeMillis = (buf.readUnsignedInt() - 2208988800L) * 1000L;
            System.out.println(new Date(currentTimeMillis));
            ctx.close();
        }
    }

handlerAdded和handlerRemoved两个生命周期的方法









```




## 第二个解决方案

```java

 ch.pipeline().addLast(new TimeClientHandler());
 可以添加成多hadler 这样可以编一个复杂的hadler拆成多个，这样解决把复杂的程序拆成多步执行简化问题



TimeDecoder.java
 package com.liuxin.test1;

import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ByteToMessageDecoder;

import java.util.List;

public class TimeDecoder extends ByteToMessageDecoder {
    protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
            if (in.readableBytes()<4){
                return;
            }
            out.add(in.readBytes(4));
    }
}



ByteToMessageDecoder 类 netty给我们提供的
    ByteToMessageDecoder实现了ChannelInboundHandlerAdapter
 他的作用 处理数据碎片问题

 decode()  在接收新数据时使用内部维护的数据区




out.add(in.readebytes(4))  表示解码器成功的解码了一条消息
  

只要不执行out.add();
    decode 这个方法会一直执行



```

