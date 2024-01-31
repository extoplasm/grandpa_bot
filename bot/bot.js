const { Client, Intents, MessageEmbed, MessageAttachment } = require('discord.js');
const intents = Intents.FLAGS;
const client = new Client({ presence: { activities: [{ name: "back in my day...", type: "PLAYING"}], status: "idle"}, intents: 
[intents.GUILD_MESSAGES, intents.GUILDS]});
const commands = require('./commands/commandHandler')

client.once('ready', () => {
    console.log('ready!')
	client.user.setPresence({ activities: [{ name: 'starting up', type: "PLAYING"}] });
	function setStatus() {
		setTimeout(() => {
			client.user.setPresence({ activities: [{ name: 'back in my day...', type: "PLAYING"}] })
			setTimeout(() => {
				client.user.setPresence({ activities: [{ name: `what does "lol" mean`, type: "PLAYING"}] })
				setTimeout(() => {
					client.user.setPresence({ activities: [{ name: `you kid's eyes are always glued to your phones...`, type: "PLAYING"}] })
					setTimeout(() => {
						client.user.setPresence({ activities: [{ name: `kids these days...`, type: "PLAYING"}] })
						setTimeout(() => {
							setStatus()
						}, 1000);
					}, 5000);
				}, 5000);
			}, 5000);
		}, 5000);
	}
	setStatus()
});
	
client.on('messageCreate', async msg => {
	if (msg.author.bot) return;
	try {
		if (commands.commandHandler(msg) == undefined) {
			return;
		} else {
			msg.channel.send(commands.commandHandler(msg))
		}
	}
	catch(e) {
		console.error(e)
	}
})
console.log('logging in')
client.login(process.env.token)