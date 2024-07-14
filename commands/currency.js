const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require("discord.js");
const axios = require("axios");

require("dotenv").config();

const btcButton = new ButtonBuilder()
  .setStyle(1)
  .setLabel("BTC")
  .setCustomId("bitcoin");
const ethButton = new ButtonBuilder()
  .setStyle(1)
  .setLabel("ETH")
  .setCustomId("ethereum");
const usdButton = new ButtonBuilder()
  .setStyle(1)
  .setLabel("USD-Blue")
  .setCustomId("usdBlue");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("currency")
    .setDescription("Muestra el precio actual de diferentes monedas"),
  async execute(interaction) {
    const actionRow = new ActionRowBuilder().addComponents(
      btcButton,
      ethButton,
      usdButton
    );

    const reply = await interaction.reply({
      content: "Selecciona una opción:",
      components: [actionRow],
    });

    const collector = interaction.channel.createMessageComponentCollector({
      filter: (interaction) =>
        interaction.user.id === interaction.user.id &&
        interaction.message.id === reply.id,
      time: 60 * 1000, // 1 minuto
    });

    collector.on("collect", async (interaction) => {
      await interaction.deferReply();
      if (interaction.customId === "bitcoin") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data.bitcoin.usd;
        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Bitcoin (BTC)")
        .setDescription(
          `El precio actual de Bitcoin (BTC) es: $${price.toFixed(2)} USD.`
        )
        .setImage(
          "https://www.bankmagazine.com.ar/wp-content/uploads/2024/02/Bitcoin-4.jpg"
        )
        .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de Bitcoin:", error);
        await interaction.editReply({
        content: "Hubo un error al obtener el precio de Bitcoin.",
        ephemeral: true,
        });
      }
      } else if (interaction.customId === "ethereum") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data.ethereum.usd;
        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Ethereum (ETH)")
        .setDescription(
          `El precio actual de Ethereum (ETH) es: $${price.toFixed(2)} USD.`
        )
        .setImage(
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxDRY3WTxtDJOkN2bRZ73FQVTbFhj-S7GGIacTn8RrXT9VRXV8V3nW_-otDktQwS3aGDA&usqp=CAU"
        )
        .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de Ethereum:", error);
        await interaction.editReply({
        content: "Hubo un error al obtener el precio de Ethereum.",
        ephemeral: true,
        });
      }
      } else if (interaction.customId === "usdBlue") {
      const url = "https://dolarapi.com/v1/dolares/blue";
      try {
        const response = await axios.get(url);
        const buy = response.data.compra;
        const sell = response.data.venta;
        const embed = new EmbedBuilder()
        .setColor("Blurple")
        .setTitle("Dolar Blue (USD)")
        .setDescription(
          `El precio actual del Dolar Blue (USD) para la compra es: $${buy.toFixed(2)} USD. y para la venta es: $${sell.toFixed(2)} USD.`
        )
        .setImage(
          "https://www.lavoz.com.ar/resizer/z0TJfzaS9uB0eUtPpSg1RIakboI=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/BBSQRTTJHNFKNBR7YUUXIN6ISM.jpg"
        )
        .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de USD-Blue:", error);
        await interaction.editReply({
        content: "Hubo un error al obtener el precio de USD-Blue.",
        ephemeral: true,
        });
      }
      }
    });

    collector.on("end", () => {
      reply.edit({ components: [] }).catch(console.error);
    });
  },
};
