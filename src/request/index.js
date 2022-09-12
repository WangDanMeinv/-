// request.js  用于封装管理AIP的提交
// 引入模块 
import axios from "axios"


const instance = axios.create({
    // 因为接口服务器是有可以有更改的，所以我们在AXIOS对象上创建一个数据用于记录接口服务器。
    baseURL: "http://localhost:8088", // baseURL:当请求地址不是完整时，对象会自动使用该值进行补全
    // baseURL:"http://192.168.113.249:8081/cms",
    timeout: 5000,   // 设置请求超时的时间。
})


// 所有请求之前需要执行的方法(拦截器)
instance.interceptors.request.use(config => {
    // console.log("每一次发起请求前，都会先执行这里的代码");
    // console.log(config); //config本次请求的配置信息
    if(config.url =='/sendSMS'){
        config.headers["Content-Type"] = "application/x-www-form-urlencoded"
    }
    //由于Token是后端验证用户的唯一凭证,所以我们可以让只要有Token时所有的请求都带上Token
    const token = sessionStorage.getItem("x-auth-token");
    if(token){
        // 如果token有值,则在请求的头信息中带上token
        config.headers['x-auth-token']=token
    }
    return config;
}, err => {
    return Promise.reject(err)
})
// 所有获取到响应的时个之前也可以需要执行的方法
instance.interceptors.response.use(res=>{
    // console.log("每一次接收到响应，都会先执行这里的代码，再去执行成功的那个回调函数then");
    //由于我们接口统一正常执行都会code的值为0,所有我们对所有code值不为0进行处理
    let data = res.data
    //所有code不为0,说明接口有问题,直接输出错误信息就可以
    if(data.code != 0 && data.code != 400 && data.code != 407){
        alert(data.message)
        return false
    }
    return data
},err=>{
    // 对响应错误做点什么
    return Promise.reject(err)
})

export default instance