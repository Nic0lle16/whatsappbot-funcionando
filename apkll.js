const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});


client.on('ready', () => {
    console.log('Se a establecido la conexion');
});

client.on('message', message => {
    console.log(message.body);
	if(message.body === 'Hola bot') {
		client.sendMessage(message.from, 'Bienvenida persona del otro lado de esta pantalla, que puedo hacer por ti?, nuestro bot te ayudara en lo que necesites.');
	}
});

client.initialize();