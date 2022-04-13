We recommend you use discord id's for the tag section and not discord tags. because:
People can change there discord tags, and it will mean you won't know who they are.
So input the there discord id instead of there discod tag for the 'tag: '

MODULE LINK: https://www.npmjs.com/package/yaris
```lua I'm a test
[[ Official API for Yaris || Website: https://yaris.rocks/beta || Yaris Discord: https://discord.gg/qVBtSYXX72 ]]
[[ Note: I do not work for nor own yaris, I just support it so I made this module for it ]]
[[ My discord: Linen#3485 || More updates are to come soon, stay tuned.]]
```
```javascript I'm A tab
const yaris = require("yaris")
yaris.setAPIKEY("API KEY HERE") // Replace with your yaris API key.
//=================================\\ USAGE

async function run(){ // this is so we can run this async instead of non-async [ so we can get the results ]
    
    // WHITELIST USER \\
    let user_added = await yaris.add_user({
        tag: "Example#0001 || 123456" /* you can put the users discord tag or discord id */ , 
        data: "Clients HWID", /* The users HWID [ for there roblox exploit ] */
        expires: "" /* leave blank so it never expires */, 
        role: "User" /* Can be anything you put */
    })
    console.log(user_added) // Output: JSON/OBJECT

    // PROJECT INFORMATION \\ 
    let whitelist_info = await yaris.getInfo()
    console.log(whitelist_info) // The projects Information, including the owner, etc

    // BLACKLIST USER \\
    let blacklist_result = await yaris.bl_user({
        data: "Clients HWID", /* The buyer or client's HWID that you want to blacklist */
        reason: "Example" /* This field is optinal */
    })
    console.log(blacklist_result) // Output: JSON/OBJECT
    
    // UNWHITELIST USER \\
    let unwhitelist_result = await yaris.remove_user({
        data: "Clients HWID", /* The buyer or client's HWID that you want to unwhitelist */
    })
    console.log(unwhitelist_result) // Output: JSON/OBJECT

    // GET USERS DATA \\
    let user_data = await yaris.getUser({
        tag: "Example#0001 || 123456" /* The buyers tag you used to whitelist them with */
    })
    console.log(user_data) // Output: JSON/OBJECT
};run();
```

```javascript I'm a test LOL
yaris.add_user(<object> string: tag, string: data, string: expires, string: role) // Whitelist a user || Output: OBJECT/JSON
yaris.remove_user(<object> string: data) // Unwhitelist a user || Output: OBJECT/JSON
yaris.getUser(<object> string: tag) // Gets information of a user || Output: OBJECT/JSON
yaris.bl_user(<object> string: data) // Blacklist a client/buyer || Output: OBJECT/JSON
yaris.getInfo() // Gets the info on an project || Output: OBJECT/JSON
```
All functions are async, so you have to use await to get the result.
