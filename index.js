const request = require('request');
const TelegramBot = require('node-telegram-bot-api');
const chat_id = '';
const img = '';
const token = '';
const bot = new TelegramBot(token);
var date = new Date();
var date_options = { nu: '', timeZone: 'America/Sao_Paulo', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
var current_timestamp = date.toLocaleDateString('pt-BR', date_options);

request(img, { encoding: null }, (err, res, buffer) => {
    bot.sendPhoto(chat_id, buffer, { disable_notification: true, caption: current_timestamp }, { filename: 'data', contentType: 'image/png' });
});
