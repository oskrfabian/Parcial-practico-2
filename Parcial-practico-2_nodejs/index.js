const TelegramBot = require('node-telegram-bot-api');


const token = '318089826:AAEJJRD0orOxRU4l2fS8hSSflOHTN17qDCQ';
var SerialPort = require('serialport');
// el puerto de Arduino
var port = new SerialPort('/dev/COM9', {
  baudRate: 57600
  autoOpen: true
});



const bot = new TelegramBot(token, {polling: true});
bot.on('message',(msg) =>{
const chatId =msg.chat.id;
console.log("El id es " + chatId)
var respuesta =msg.text;
if(respuesta == "encender"){
  console.log("encender alarma");
    bot.sendMessage(chatId, 'Received your message');
    miSerial.write("mensaje de alerta");
}else if(respuesta == "apagar"){

  console.log("apagar alarma");
  bot.sendMessage(chatId,'Apagando alarma');
  miSerial.write("mensaje de apagar alarma");
}


});


bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Received your message');
});
