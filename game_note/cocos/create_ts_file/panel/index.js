Editor.Panel.extend({

    template: `
    <ui-input @change="onDirPath"  placeholder="onDirPath(默认 scripts)"></ui-input>   
    <br/>
    <ui-input  @change="onFileName" placeholder="File Name"></ui-input>
    <br/>
    <ui-input @change="onPackageName"  placeholder="Package Name"></ui-input>   
    <br/>
  
    <ui-button @confirm="onConfirm">创建</ui-button>
    `,

    // $: {
    //   packagename:'#',
    //   loading:'#loading'  
    // },

    ready() {
        new window.Vue({
            el: this.shadowRoot,
            data: {
                filename: "",
                packagename: "",
                dirpath:"scripts"
            },


            methods: {
                onPackageName(event){
                    this.packagename = event.target.value;
                },
                onDirPath(event){
                    this.dirpath = event.target.value==""?"scripts":event.target.value;
                },
                onFileName(event) {
                    this.filename = event.target.value;
                },
                onConfirm(event) {
                    Editor.log(this.filename)
                    if (this.filename == "") {
                        Editor.error("File Name no value")
                        return;
                    }
                    event.stopPropagation();
                    console.log('On Confirm!')
                    this.showLoadering = true;
                    Editor.Ipc.sendToMain('create_ts_file:cr-file',this.dirpath,this.filename, this.packagename, (error, answer) => {
                        if (error) { //check the error code to confirm a timeout
                            Editor.error(error);
                            return;
                        }
                        Editor.log(answer);
        
                    }, -1)
                },
            },
        });



    },
});