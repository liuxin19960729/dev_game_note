'use strict';
var fs = require('fs');
module.exports = {
  load() {
    //做一些关于扩展包本身的初始化操作


  },

  unload() {
    // 当 package 被正确卸载的时候执行
  },
  // ipc 消息的注册
  messages: {
    'openPanel': function () { //实际是 ${你的扩展包名}:${消息名}
      Editor.Panel.open('create_ts_file')
    },
    'cr-file': function (event, f_dirpath,f_name, p_name) {
      try{
        let r_url= Editor.url('packages://create_ts_file/teample.txt', 'utf8');//读地址
        let w_url=Editor.url('db://assets/'+f_dirpath, 'utf8')+"\\"+f_name+".ts";
        Editor.log(f_name)
        Editor.log(w_url);
        if(fs.existsSync(w_url)){
            throw new Error("该路径已经存在该文件"+w_url);
        }
        let data= fs.readFileSync(r_url)
        let str=data.toString("utf8")
        str=str.replace("${FileName}",f_name);
        p_name=(!p_name||p_name=="")?"":p_name;
        str=str.replace("${pkgName}",p_name);
        fs.writeFileSync(w_url,str);
        event.reply(null,"success");
        Editor.assetdb.refresh('db://assets/'+f_dirpath, function (err, results) {
            Editor.log("刷新资源")
        });
      }catch(e){
        Editor.log("catch");
        event.reply(e,null);
      }
    },
  },

};