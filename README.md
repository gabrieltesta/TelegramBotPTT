# TelegramBotPTT

**TelegramBotPTT** foi criado pensando-se na necessidade de um histórico das imagens geradas no [IX.BR](http://ix.br/trafego/pix/sp), seja para documentação, estudo ou análise dos dados.

O Bot funciona coletando o buffer da imagem no site - uma vez que a API de bots do Telegram não refaz o download de imagens com a mesma URL - e a envia, utilizando os módulos NPM:

 - [Request](https://www.npmjs.com/package/request);
 - [Node Telegram Bot API](https://github.com/yagop/node-telegram-bot-api).
 
 O Bot é executado via AWS Lambda (N. Virginia) com timeout de 7 segundos (Min.: 1400ms; Méd.: 1600ms; Máx.: 6300ms) a cada 5 segundos via Cloudwatch Event (rate(5 minutes)) com custo anual estimado de US$ 0,13.

## Canais

 - [PTT_SP](https://t.me/ptt_sp) (@ptt_sp)
