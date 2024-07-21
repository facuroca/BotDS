const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { chromium } = require("playwright");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("chatgpt")
    .setDescription("Preguntale algo a ChatGPT")
    .addStringOption((option) =>
      option.setName("texto").setDescription("Texto a enviar").setRequired(true)
    ),
  async execute(interaction) {
    await interaction.deferReply({ ephemeral: true });

    const { options } = interaction;
    const text = options.getString("texto");

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://chat-app-f2d296.zapier.app/");

    //typing prompt
    await page.getByPlaceholder("automate").fill(text);
    await page.keyboard.press("Enter");

    await page.waitForTimeout(10000);

    //wait for response
    const locator = await page.locator('div [data-testid="bot-message"]');
    const count = await locator.count();

    for (let i = 0; i < count; i++) {
      const responseText = await locator.nth(i).innerText();
      console.log(responseText);
    }

    const finalResponse = await locator.nth(count - 1).innerText();
    await browser.close();

    const embed = new EmbedBuilder()
      .setDescription(`\`\`\`${finalResponse}\`\`\``)
      .setColor("Blurple")
      .setImage(
        "https://canalc.com.ar/wp-content/uploads/2023/04/What-is-ChatGPT-Beginners-Guide-to-Using-the-AI-Chatbot.webp"
      );

    await interaction.editReply({ embeds: [embed] });
  },
};
