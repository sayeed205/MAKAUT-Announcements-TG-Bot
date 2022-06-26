import { Telegraf } from "telegraf";
import notices from "./scrapper.js";
import "dotenv/config";

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const startMsg = `Hey there ${ctx.from.first_name}\n
Use me to get announcements from <a href='http://makautexam.net/'>MAKAUT</a>
You can use /help command to see how to use me`;

  ctx.telegram.sendMessage(ctx.chat.id, startMsg, { parse_mode: "HTML" });
});

bot.help((ctx) => {
  const helpMsg = `Here is the instructions to use me -\n
/start - Check if bot is working.
/help - To get this help message.
/get_notice - To get the latest announcement`;
  ctx.reply(helpMsg);
});

/***************************************get_notice*************************************/

const noticeButton = [
  [{ text: "Latest announcement", callback_data: "latest" }],
  [
    { text: "Second last", callback_data: "two" },
    { text: "Third last", callback_data: "three" },
  ],
  [
    { text: "Fourth last", callback_data: "four" },
    { text: "Fifth last", callback_data: "five" },
  ],
];

bot.command("get_notice", (ctx) => {
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Choose how many announcement you want to get",
    {
      reply_markup: {
        inline_keyboard: noticeButton,
      },
    }
  );
});

/***************************************latest_announcement**************************************/

bot.action("latest", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendDocument(ctx.chat.id, notices[0].file_path, {
    caption: notices[0].notice_title,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Go Back", callback_data: "back" },
          { text: "Close Menu", callback_data: "close" },
        ],
      ],
    },
  });
  console.log("Latest announcement button clicked");
});

/***************************************second_last_announcement**************************************/

bot.action("two", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendDocument(ctx.chat.id, notices[1].file_path, {
    caption: notices[1].notice_title,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Go Back", callback_data: "back" },
          { text: "Close Menu", callback_data: "close" },
        ],
      ],
    },
  });
  console.log("Second last butoon button clicked");
});

/***************************************third_last_announcement**************************************/

bot.action("three", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendDocument(ctx.chat.id, notices[2].file_path, {
    caption: notices[2].notice_title,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Go Back", callback_data: "back" },
          { text: "Close Menu", callback_data: "close" },
        ],
      ],
    },
  });
  console.log("Third last butoon button clicked");
});

/***************************************fourth_last_announcement**************************************/

bot.action("four", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendDocument(ctx.chat.id, notices[3].file_path, {
    caption: notices[3].notice_title,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Go Back", callback_data: "back" },
          { text: "Close Menu", callback_data: "close" },
        ],
      ],
    },
  });
  console.log("Fourth last butoon button clicked");
});

/***************************************fifth_last_announcement**************************************/

bot.action("five", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendDocument(ctx.chat.id, notices[4].file_path, {
    caption: notices[4].notice_title,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Go Back", callback_data: "back" },
          { text: "Close Menu", callback_data: "close" },
        ],
      ],
    },
  });
  console.log("Fifth last butoon button clicked");
});

/********************************************back_inline_button***********************************/

bot.action("back", (ctx) => {
  ctx.deleteMessage();
  bot.telegram.sendMessage(
    ctx.chat.id,
    "Choose how many announcement you want to get",
    {
      reply_markup: {
        inline_keyboard: noticeButton,
      },
    }
  );
  console.log("Back button clicked");
});

/*****************************************************close_inline_button**************************/

bot.action("close", (ctx) => {
  ctx.deleteMessage();
});

bot.launch();
