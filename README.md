# MAKAUT Announcements Bot

Missed announcements from [MAKAUT official website](http://makautexam.net)? And can't check the website daily? Same 😔. Hence this bot is here to help 😌. Just visit [@MAKAUT Announcement Bot](https://t.me/MAKAUT_Announcement_Bot) on [Telegram](https://telegram.org) to get subscribed for notifications in case of an update in your telegram chat itself!

- Please make sure the bot is unmuted and telegram app is allowed to send notification for the bot to function as required!
- If you want to create your own bot with customised messages, commands and new functions, make sure to fork and star the repository. You can use the following methods to deploy the bot!

## Deployment

#### Deploy on [Heroku](https://www.heroku.com/home)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/sayeed205/MAKAUT-Announcements-TG-Bot)

#### Deploy on [Koyeb](https://www.koyeb.com/)

[![Deploy to Koyeb](https://www.koyeb.com/static/images/deploy/button.svg)](https://app.koyeb.com/deploy?type=git&repository=https://github.com/sayeed205/MAKAUT-Announcements-TG-Bot&branch=master&name=MAKAUT-Announcements-Bot&run_command=node%20bot.js&env[BOT_TOKEN]=)

#### Make sure to read below what the configuration variables do.

## Run Locally

Clone the project

```bash
  git clone https://github.com/sayeed205/MAKAUT-Announcements-TG-Bot.git
```

Go to the project directory

```bash
  cd MAKAUT-Announcements-TG-Bot
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file.

#### Mandatory Variables

- `BOT_TOKEN` - Create a bot using [@BotFather](https://t.me/BotFather), and get the Telegram BOT_TOKEN.

## License

[AGPL-3.0 license](https://github.com/sayeed205/MAKAUT-Announcements-TG-Bot/blob/master/LICENSE)

## Usage/Examples

- `/start` - Check if bot is work or not.
- `/help` - Get help about how to use the bot
- `/get_notice` - Get announcements from [MAKAUT](http://makautexam.net)

## Demo

Try [@MAKAUT Announcement Bot](https://t.me/MAKAUT_Announcement_Bot)

Some Screenshots -

`TODO` - Have to add Screenshots

## TODO

- Bot isn't automated to cheeck if there is new announcement and send it to subscribed users.
- `/subscribe` Have to add database to save data for users who are subscribing or unsubscribing the bot.

## Lessons Learned

- Web Scrapping with [Node.js](https://nodejs.org/en/) - I learnt how to scrape data from a web site using [node-fetch](https://www.npmjs.com/package/node-fetch) module.
- Telegram Bots - I learnt how to make teleram bots using [telegrafjs](https://telegrafjs.org/#/) module

## Credits and Thanks to

- [telegrafjs](https://telegrafjs.org/#/) module for providing such amazing module.
- This project and it's README.md is highly inspired by [Prince-Mendiratta](https://github.com/Prince-Mendiratta)'s [DTU-Alert-Bot](https://github.com/Prince-Mendiratta/DTU-Alert-Bot) project
