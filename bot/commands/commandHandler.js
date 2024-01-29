const { Client, Intents, MessageEmbed, MessageAttachment } = require('discord.js');
const intents = Intents.FLAGS;
const client = new Client({ presence: { activities: [{ name: "back in my day...", type: "PLAYING"}], status: "idle"}, intents: 
[intents.GUILD_MESSAGES, intents.GUILDS]});

exports.commandHandler = function handleCommands(command) {
	if (command.content.includes('computer') || command.content.includes('pc')) {
		const computer = ['those damnfangled computermabobs, back in my day...', 'you kids are always on your computer thingys', 'get off your computer and go outside']
		const computerResponse = computer[Math.floor(Math.random() * computer.length)];
		
		return computerResponse
	} else if (command.content.includes('phone') || command.content.includes('mobile')) {
		const phone = ['those damnfangled mobiles, back in my day...', 'you kids are always on your phone thingys', 'stop watching your phone and go outside']
		const phoneResponse = phone[Math.floor(Math.random() * phone.length)];
		
		return phoneResponse
	} else if (command.content.includes('shut up') || command.content.includes('stfu')) {
		const shut = ['dont talk back to me, such disrespect from this generation', 'i am absolutely appalled, this behaviour is unacceptable', 'back in my day, this disrespect would not be tolerated']
		const shutResponse = shut[Math.floor(Math.random() * shut.length)];
		
		return shutResponse
	} else if (command.content.includes('geezer')) {
		const geezer = ['are you talking to me, young man?', 'this is of upmost disrespect', 'i am contacting your parents immediately']
		const geezerResponse = geezer[Math.floor(Math.random() * geezer.length)];

		return geezerResponse
	} else if (command.content.includes('minecraft') || command.content.includes('video game') || command.content.includes('play')) {
		const play = ['stop playing games and go outside for once', 'you kids are always playing video games', 'back in my day, we went outside']
		const playResponse = play[Math.floor(Math.random() * play.length)];
		
		return playResponse
	} else if (command.content.includes('amogus')) {
		let amogusNumber = Math.floor(Math.random() * 15)
		if (amogusNumber == 1) {
			return 'i might be a grandpa but i got that amogus drip'
		} else {
			return 'what is an amogus?'
		}
	} else if (command.content.includes('ok boomer')) {
		return 'absolutely appalled. your parents will be hearing about this'
	} else if (command.content.includes('hack') || command.content.includes('code')) {
		const help = ['you kids are so good at these digital thingies', 'could you help fix my printer?', 'you kids are so good at these damfangled computers']
		const helpResponse = help[Math.floor(Math.random() * help.length)];
		
		return helpResponse
	} else if (command.content.includes('gtg') || command.content.includes('fr') || command.content.includes('omg') || command.content.includes('lmao') || command.content.includes('smh')) {
		const abbreviation = ['gnpa cn us abrvtns too', 'gndpa cn use abbrviations nd be hip w/ the kids', `you kid's abbreviations are so difficult to understand...`]
		const abbreviationResponse = abbreviation[Math.floor(Math.random() * abbreviation.length)];
		
		return abbreviationResponse
	} else if (command.content.startsWith('hi grandpa')) {
		return ({
			content: 'hi',
			files: [{
			attachment: './bot/grandpa.jpg',
			name: 'grandpa.jpg' }]
		})
	} else if (command.content.includes('fuck') || command.content.includes('shit') || command.content.includes('bitch')) {
		const swear = ['watch your language boy!', 'you hooligans are always swearing', 'your parents will be hearing about this']
		const swearResponse = swear[Math.floor(Math.random() * swear.length)];
		
		return swearResponse
	} else if (command.content.includes('school') || command.content.includes('homework')) {
		const school = ['take 3 buses and 18 ferries', 'climb over 13 different mountains', 'swim up and down the nile river twice', 'circumnavigate the world twice']
		const schoolStart = ['back in my day i used to ', 'when i was younger i used to ', 'a long time ago we used to ']
		const schoolInsult = ['you hooligans', 'you kids', 'you children']
		const schoolAdjective = ['inconsiderate', 'thoughtless', 'insensitive', 'self-centered', 'uncaring', 'ignorant']
		
		const schoolResponse = schoolInsult[Math.floor(Math.random() * schoolInsult.length)] + ' are so ' + // you ${schoolInsult} are so
		schoolAdjective[Math.floor(Math.random() * schoolAdjective.length)] + ', ' + // ${schoolAdjective}, 
		schoolStart[Math.floor(Math.random() * schoolStart.length)] + school[Math.floor(Math.random() * school.length)] + ' to school'; // ${schoolStart} ${school}
		
		return schoolResponse
	} else if (command.content.includes('grandpa')) {
		return 'hello sonny'
	} else if (command.content.startsWith('g!age')) {
		const age = ['the wind', '... what was I saying again?', 'the breeze', 'the dinosaurs']
		const ageStart = ["that's quite an easy question, i am as old as ", 'grandpa is as old as ', "i think i'm older than ", 'grandpa is as least as old as ']

		const ageResponse = ageStart[Math.floor(Math.random() * age.length)] + age[Math.floor(Math.random() * age.length)] 
		return ageResponse
	} else if (command.content.includes('<@800191043915218954>')) {
		return `hello ${command.author} 👋`
	} else if (command.content.startsWith('g!about')) {
		const aboutMessage = new MessageEmbed()
			.setColor('7af5f1')
			.setTitle('Grandfather Bot')
			.setURL('https://discord.com/api/oauth2/authorize?client_id=800191043915218954&permissions=274945137728&scope=bot')
			.setAuthor(command.author.tag, command.author.displayAvatarURL())
			.setDescription('About Grandfather Bot')
			.addFields( { name: '**Creator**', value: 'extoplasm#0058 (in my defense, i was bored)', inline: true },
						{ name: '**About**', value: 'Grandfather bot is a funny bot that acts like a stereotypical Grandfather', inline: true },
						{ name: '**Invite**', value: 'Click the blue link at the top that says "Grandfather Bot" to invite this bot!', inline: true }, )
			.setTimestamp()
			.setFooter('Grandfather Bot')

		return { embeds: [aboutMessage] }
	} else if (command.content.startsWith('g!help')) {
		const helpMessage = new MessageEmbed()
			.setColor('7af5f1')
			.setTitle('help message')
			.setURL('https://www.youtube.com/watch?dQw4w9WgXcQ')
			.setAuthor(command.author.tag, command.author.displayAvatarURL())
			.setDescription('how do i use this')
			.addFields( { name: '**g!help**', value: 'displays this help message', inline: true }, 
						{ name: '**g!about**', value: 'about me', inline: true },
						{ name: '**g!age**', value: 'what is my age?', inline: true },						
						{ name: '**"hi grandpa"**', value: 'displays grandpa avatar', inline: true },
						{ name: '**how to stop**', value: 'how do i stop doing this message', inline: true}, )
			.setTimestamp()
			.setFooter('prefix: g!');

		return { embeds: [helpMessage] }
	} else {
	}
}