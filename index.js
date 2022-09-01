require("dotenv").config();
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require("discord.js");
const axios = require("axios").default;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once("ready", () => {
	console.log("Ready!");
});

// Listen for commands
client.on("interactionCreate", async (interaction) => {
	if (!interaction.isChatInputCommand()) return;

	const { commandName } = interaction;

	if (commandName === "getip") {
		axios.get("https://api.ipify.org").then(async function (response) {
			await interaction.reply(response.data);
		});
	}
});

// Login to Discord with your client's token
client.login(process.env.DISCORD_TOKEN);
