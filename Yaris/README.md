This is an api wrapper for https://yaris.rocks/beta whihc is a whitelist manager for roblox [ paid ]
More updates are to come with this API!
Module Creator: Linen#3485
Yaris Discord Server: https://discord.gg/qVBtSYXX72
Note: I do not work with yaris. I made this module for free since I supported it
========================================
Usage:
    ```javascript
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
========================================
Thats all for now. But note, more is too come :)
