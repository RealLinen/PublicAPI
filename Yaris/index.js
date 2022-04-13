const fetch = require("cross-fetch").default;
const Functions = { };
//~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~\\
Functions.setAPIKEY = function(api_key){
    Functions.API_KEY = api_key || "0000";
    return true
}
Functions.send_request = async function(url,data,method) {
    method = typeof(method)=="string" && method || "GET"
    url = typeof(url)=="string" && url.length>5 && (url.toLowerCase().includes("http")||url.toLowerCase().includes("https")) && url || "https://example.com"
    let result = await fetch(url,{headers: { "yaris-authentication": Functions.API_KEY },body:typeof(data)=="object"&&JSON.stringify(data)||"{}",method: method});let rdata;
    try{rdata = result.text()}catch(err){rdata = {error: err}}
    rdata = await rdata
    return typeof((JSON.parse(JSON.stringify(rdata))))=="string"&&JSON.parse((JSON.parse(JSON.stringify(rdata))))
}
Functions.getInfo = async function(){
    if(!Functions.API_KEY)return {error: { message: "yaris NODE.JS MODULE ERROR || Invalid API Key", code: "11" }};
    let result = await Functions.send_request("https://api.yaris.rocks/v1/info",null,"POST")
    return result;
}
Functions.add_user = async function(data){
    if(!Functions.API_KEY)return {error: { message: "yaris NODE.JS MODULE ERROR || Invalid API Key", code: "11" }};
    if(typeof(data)!=="object")return {error: { message: "yaris NODE.JS MODULE ERROR || Please include the user specifications in argument 1", code: "C11" }};
    data.tag = data.tag || "None"
    data.data = data.data || "abc"
    data.expires = data.expires || ""
    data.role = data.role || "User"
    let result = await Functions.send_request("https://api.yaris.rocks/v1/adduser",data,"POST")
    return result;
}
Functions.remove_user = async function(data){
    if(!Functions.API_KEY)return {error: { message: "yaris NODE.JS MODULE ERROR || Invalid API Key", code: "11" }};
    if(typeof(data)!=="object")return {error: { message: "yaris NODE.JS MODULE ERROR || Please include the user specifications in argument 1", code: "C11" }};
    data.data = data.data || null;
    data.tag = data.tag || null
    if(!(data.data||data.tag))return {error:{message: "yaris NODE.JS MODULE ERROR || Please include the users HWID or tag that you want to unwhitelist.", code:"M11"}}
    let result = await Functions.send_request("https://api.yaris.rocks/v1/removeuser",data,"POST")
    return result;
}
Functions.getUser = async function(data){
    if(!Functions.API_KEY)return {error: { message: "yaris NODE.JS MODULE ERROR || Invalid API Key", code: "11" }};
    if(typeof(data)!=="object")return {error: { message: "yaris NODE.JS MODULE ERROR || Please include the user specifications in argument 1", code: "C11" }};
    if(!data.tag)return {error:{message: "yaris NODE.JS MODULE ERROR || Please include the users tag that you want to get information about", code:"M11"}}
    let result = await Functions.send_request("https://api.yaris.rocks/v1/getuser/"+data.tag,null,"POST")
    return result;
}
Functions.bl_user = async function(data){
    if(!Functions.API_KEY)return {error: { message: "Invalid API Key", code: "11" }};
    if(typeof(data)!=="object")return {error: { message: "Please include the user specifications in argument 1", code: "C11" }};
    data.data = data.data || null;
    data.reason = data.reason || "None specified"
    if(!data.data)return {error:{message: "Please include the users HWID that you want to unwhitelist.", code:"M11"}}
    let result = await Functions.send_request("https://api.yaris.rocks/v1/blacklistuser",data,"POST")
    return result;
}
//~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~+~\\
module.exports = Functions;
exports = Functions;
