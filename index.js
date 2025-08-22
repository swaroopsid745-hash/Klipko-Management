const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// replace with your bot token later in Render
const TOKEN = process.env.TOKEN; 

client.once('ready', () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!ping') {
        message.reply('🏓 Pong!');
    }
});

client.login(TOKEN);
