## 概念
```
skynet 由一个或者多个进程(进程 skynet节点)构成


skynet启动
    1.logger服务的启动(c 服务)
        logger =nil 标准输出
        logger= xxx/xxx 文件名

    2.开启的第二个服务  默认 "snlua bootstrap"
        bootstrap = "snlua bootstrap"
        skynet 会启动 snlua 这个服务，并将 bootstrap 作为参数传给它
        snlua lua的沙盒服务
        config配置文件
        luaservice = root.."service/?.lua;"..root.."test/?.lua;"..root.."examples/?.lua;"..root.."test/?/init.lua"

        因为 snlua bootstrap  ,bootstrap 会根据配置文件 luaservice 参数配置的指定地点去匹配文件  snlua bootstrap 会匹配到 service/bootstrap.lua 脚本




1.当 harbor ==0 代表的单节点模式
    开启  local ok, slave = pcall(skynet.newservice, "cdummy")  cdummy 服务
    为了兼容(还是有可能注册全局名字)  --开启cddump 主要是为了拦截对外广播的名字更替


2.多节点模式
     pcall(skynet.newservice,"cmaster") then
     开启 cmaster 服务


```


Config文件
```
config 配置 格式 k-v 格式

必要的配置
    1.thread 启动多少个工作线程。通常不要将它配置超过你实际拥有的 CPU 核心数
    2. bootstrap = "snlua bootstrap"  启动 snlua 服务和启动 service/bootstrap.lua 这段代码的服务
    3.cpath c编写的模块服务 cpath = "./cservice/?.so;./xxx/xxx"
        注意可以配置多个地址 ";" 进行地址的分割



进一步是用配置文件中的配置
    logger (skynet的 skynet_error 函数输出的位置) 
        logger = xxx/xx 地址
        logger= nil 标准输出

    logservice 默认  logger
    你可以定制你自己的日志服务

```