# Public IP Discord Bot

Made this quickly to see if it will work. (It does) It's a Discord bot which replies with the public IP of the hosting machine. Useful when you don't have a static public IP address and want to use your home computer as some kind of a server (FTP in my case).

Use the `/getip` command to get the IP of the machine hosting the bot!

## Install/Use

1. Clone repo `git clone https://github.com/DantchoLV9/public-ip-discord-bot.git`
2. Install dependencies `npm i`
3. Make a copy of the `.env.example` file renaming it to `.env`
4. Put your `CLIENT_ID`, `GUILD_ID` & `DISCORD_TOKEN` in the newly created `.env` file.
   - `CLIENT_ID` - Can be found on the "General Information" page of your Discord Application.
   - `GUILD_ID` - Can be found by enabling "Developer Mode" in Discord, right clicking on the server your bot is in and copying that ID.
   - `DISCORD_TOKEN` - Can be found on the "Bot" page in your Discrod Application.
5. Register the command `node deploy-commands.js`
6. Start the bot `node index.js`
7. Test the bot in Discord `/getip`

## Making the bot start with Windows

I kinda rushing this, so there is definitely a better way to do it, but it works for me.

1. Create a `start.bat` file in the root directory of the project/this repo that you cloned.
2. Press `Windows` + `R`, type in the following `shell:startup` and press enter.
3. Create a shortcut of the `start.bat` file and place it in the newly opened folder. (This should make the `.bat` file run when the Windows user logs in)
4. Place the code below into the original `start.bat` file.

This will make the console minimize after starting so it's not in the way.
```
if not DEFINED IS_MINIMIZED set IS_MINIMIZED=1 && start "" /min "%~dpnx0" %* && exit
node index.js
exit
```
