```javascript I'm A tab
const yaris = require("yaris-api")
    yaris.setAPIKEY("API KEY HERE") // If you don't include this, it wont work
    // then you can start using it
    let user_added = yaris.add_user({
        tag: "Example#0001 || 123456" /* you can put the users discord tag or discord id */ , 
        data: "Clients HWID", /* The users HWID [ for there roblox exploit ] */
        expires: "" /* leave blank so it never expires */, 
        role: "User" /* Can be anything you put */
    })
    console.log(user_added) // json
    let whitelist_info = yaris.getInfo()
    console.log(whitelist_info) // The projects Information, including the owner, etc
```
```javascript I'm tab B
console.log('Code Tab B');
```
