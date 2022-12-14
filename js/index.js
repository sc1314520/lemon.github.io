window.onload=function(){
    var op;
    var ti;
    new Vue({
        el:'#box',
        data:{
            opacity:0,
            user:'',
            mail:'',
            content:'請寫下想對兩年後的自己說的話！',
            open:false,
            time:'',
        },
        methods:{
            openWindow(){
                this.open=true;
            },
            close(){
                this.open=false;
            },
            submit(){
                this.open=false;
                alert("提交成功，將於 2024.12.04 寄件於登記信箱中。")
                console.log("send");

                // 資料創建
                let formdata = new FormData();
                formdata.append('user', this.user);
                formdata.append('password', this.mail);
                formdata.append('content', this.content);

                var config = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
                };
                fetch("https://script.google.com/macros/s/AKfycbzzvcV7pFVc9tAHk5-XFRntANmPqIz4ZTMHHfiF9RXiTmKqapDA3J29FlI4DmO_-D3Z/exec", config)
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                })
                .catch(error => console.log('error', error));
            }
        },
        created(){
            op = setInterval(()=>{
                this.opacity+=0.01;
                if(this.opacity>=1){
                    this.opacity=0;
                }
            },16)
            ti= setInterval(()=>{
                var current =new Date().getTime();
                var end =new Date(2024,12,4,0).getTime();
                var delta =parseInt((end-current)/1000);
                this.time=delta;
            },1000)

        }
    })
}