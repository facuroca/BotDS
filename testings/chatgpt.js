const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const puppeteer = require("puppeteer");

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
    console.log(text);

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto("https://chat-app-f2d296.zapier.app/");

    //typing prompt
    await page.waitForSelector(
      'textarea[data-testid="user-prompt"][placeholder="automate"]'
    );
    await page.focus(
      'textarea[data-testid="user-prompt"][placeholder="automate"]'
    );
    await page.keyboard.type(text);
    await page.keyboard.press("Enter");

    //wait for response
    await page.waitForSelector('div > [data-testid="bot-message"]', {
      timeout: 50000,
    });
    var value = await page.$$eval(
      'div > [data-testid="bot-message"]',
      async (elements) => {
        return elements.map((element) => element.textContent);
      }
    );
    console.log(value);
    await browser.close();

    const embed = new EmbedBuilder()
      //.setDescription(`\`\`\`${value.join('\n')}\`\`\``)
      .setDescription(`\`\`\`${value}\`\`\``)
      .setColor("Blurple")
      .setImage(
        "https://canalc.com.ar/wp-content/uploads/2023/04/What-is-ChatGPT-Beginners-Guide-to-Using-the-AI-Chatbot.webp"
      );

    await interaction.editReply({ embeds: [embed] });
  },
};
