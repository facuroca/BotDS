const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("currency")
    .setDescription("Muestra el precio actual de diferentes monedas")
    .addStringOption((option) =>
      option
        .setName("moneda")
        .setDescription("Selecciona una moneda")
        .setRequired(true)
        .setChoices({name: "Bitcoin", value: "bitcoin"}, {name: "Ethereum", value: "ethereum"}, {name: "USD-Blue", value: "usdBlue"})
    ),
  async execute(interaction) {
    const moneda = interaction.options.getString("moneda");
    await interaction.deferReply({ ephemeral: true });

    if (moneda === "bitcoin") {
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
    } else if (moneda === "ethereum") {
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
    } else if (moneda === "usdBlue") {
      const url = "https://dolarapi.com/v1/dolares/blue";
      try {
        const response = await axios.get(url);
        const buy = response.data.compra;
        const sell = response.data.venta;
        const embed = new EmbedBuilder()
          .setColor("Blurple")
          .setTitle("Dolar Blue (USD)")
          .setDescription(
            `El precio actual del Dolar Blue (USD) para la compra es: $${buy.toFixed(
              2
            )} USD. y para la venta es: $${sell.toFixed(2)} USD.`
          )
          .setImage(
            "https://www.lavoz.com.ar/resizer/z0TJfzaS9uB0eUtPpSg1RIakboI=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/BBSQRTTJHNFKNBR7YUUXIN6ISM.jpg"
          )
          .setTimestamp();
        await interaction.editReply({embeds: [embed]});
      } catch (error) {
        console.error("Error al obtener el precio de USD-Blue:", error);
        await interaction.editReply({
          content: "Hubo un error al obtener el precio de USD-Blue.",
          ephemeral: true,
        });
      }
    }
  },
};
