```lua I'm a test
[[ Official API for Yaris || Website: https://yaris.rocks/beta || Yaris Discord: https://discord.gg/qVBtSYXX72 ]]
[[ Note: I do not work for nor own yaris, I just support it so I made this module for it ]]
[[ My discord: Linen#3485 || More updates are to come soon, stay tuned.]]
```
```javascript I'm A tab
const yaris = require("yaris")
yaris.setAPIKEY("API KEY HERE") // Replace with your yaris API key.
//=================================\\
async function run(){ // this is so we can run this async instead of non-async [ so we can get the results ]
    let user_added = await yaris.add_user({
        tag: "Example#0001 || 123456" /* you can put the users discord tag or discord id */ , 
        data: "Clients HWID", /* The users HWID [ for there roblox exploit ] */
        expires: "" /* leave blank so it never expires */, 
        role: "User" /* Can be anything you put */
    })
    console.log(user_added) // json
    let whitelist_info = await yaris.getInfo()
    console.log(whitelist_info) // The projects Information, including the owner, etc
};run();
```
All functions are async, so you have to use await to get the result.
