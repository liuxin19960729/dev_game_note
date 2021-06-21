## 使用 cocos 的管线
```ts

使用例子

        let pip=new cc.AssetManager.Pipeline("test",[]);
        pip.insert((task:cc.AssetManager.Task, done:(e?:any)=>void)=>{
            console.log('first step 1===============');
            task.output=task.input+1;
            console.log(task.output);
            done();
        },0);
        pip.insert((task:cc.AssetManager.Task, done:(e?:any)=>void)=>{
            console.log('first step 2===============');
            task.output=task.input+1;
            console.log(task.output);
            done(1);//只有使用异步的时候使用 done 里面
        },1);
        var task = new cc.AssetManager.Task({input: 0, onComplete: (err, result) => console.log("pipneline  result")});
        pip.async(task);//异步

done(1);//只有使用异步的时候才使用 done 里面
注意当done里面穿传入参数的时候 这个管线的就不会继续往下执行



async()源码
    async (task) {
        var pipes = this.pipes;
        if (!(task instanceof Task) || pipes.length === 0) return;
        if (task.output != null) {
            task.input = task.output;
            task.output = null;
        }
        task._isFinish = false;
        this._flow(0, task);
    },

    _flow (index, task) {
        var self = this;
        var pipe = this.pipes[index];
        pipe(task, function (result) {
            if (result) {
                task._isFinish = true;
                task.onComplete && task.onComplete(result);
            }
            else {
                index++;
                if (index < self.pipes.length) {
                    // move output to input
                    task.input = task.output;
                    task.output = null;
                    self._flow(index, task);
                }
                else {
                    task._isFinish = true;
                    task.onComplete && task.onComplete(result, task.output);
                }
            }
        });
    }
};


done 最好传入 err 对象 当执行某一个pip 传入 err 管线就会直接结束执行 onComplete方法 前提(task 里面构造的时候有)

当管线征程结束也会调用  onComplete方法 前提(task 里面构造的时候有)

onComplete方法 第一个 为err(null)  第二个是应该输出的值


其实 done 就是 function (result) 


sync() 方法的源码(同步方法)


    sync (task) {
        var pipes = this.pipes;
        if (!(task instanceof Task) || pipes.length === 0) return;
        if (task.output != null) {
            task.input = task.output;
            task.output = null;
        }
        task._isFinish = false;
        for (var i = 0, l = pipes.length; i < l;) {
            var pipe = pipes[i];
            var result = pipe(task);
            if (result) {
                task._isFinish = true;
                return result;
            }
            i++;
            if (i !== l) {
                task.input = task.output;
                task.output = null;
            }
        }
        task._isFinish = true;
        return task.output;
    },


onComplete方法 done 都没有用

这个方法十同步的


```