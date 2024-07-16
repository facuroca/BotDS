const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("crypto")
    .setDescription("Muestra el precio actual de diferentes criptomonedas")
    .addStringOption((option) =>
      option
        .setName("crypto")
        .setDescription("Selecciona una crypto")
        .setRequired(true)
        .setChoices({name: "Bitcoin", value: "bitcoin"}, {name: "Ethereum", value: "ethereum"},
           {name: "Solana", value: "solana"}, {name: "BNB", value: "bnb"},
            {name: "Shiba Inu", value: "shib"}, {name: "Litecoin", value: "ltc"})
    ),
  async execute(interaction) {
    const moneda = interaction.options.getString("crypto");
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
    }else if (moneda === "solana") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data.solana.usd;
        const embed = new EmbedBuilder()
          .setColor("Blurple")
          .setTitle("Solana (SOL)")
          .setDescription(
            `El precio actual de Solana (SOL) es: $${price.toFixed(2)} USD.`
          )
          .setImage(
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XAmlKo6QXE7oLi-7YpD9dKAloEJ0cGwnBg&s"
          )
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de Solana:", error);
        await interaction.editReply({
          content: "Hubo un error al obtener el precio de Solana.",
          ephemeral: true,
        });
      }
    } else if (moneda === "bnb") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data.binancecoin.usd;
        const embed = new EmbedBuilder()
          .setColor("Blurple")
          .setTitle("Binance Coin (BNB)")
          .setDescription(
            `El precio actual de Binance Coin (BNB) es: $${price.toFixed(2)} USD.`
          )
          .setImage(
            "https://www.criptonoticias.com/wp-content/uploads/2024/04/binance-BNB-imagen-destacada-1024x570.jpeg"
          )
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de BNB:", error);
        await interaction.editReply({
          content: "Hubo un error al obtener el precio de BNB.",
          ephemeral: true,
        });
      }
    } else if (moneda === "shib") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=shiba-inu&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data["shiba-inu"].usd;
        const embed = new EmbedBuilder()
          .setColor("Blurple")
          .setTitle("Shiba Inu (SHIB)")
          .setDescription(
            `El precio actual de Shiba Inu (SHIB) es: $${price.toFixed(9)} USD.`
          )
          .setImage(
            "https://media.ambito.com/p/1637684cb4849c6f38882089f51e2164/adjuntos/239/imagenes/039/376/0039376068/1200x675/smart/shiba-inu-criptomonedajpg.jpg"
          )
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de Shiba Inu:", error);
        await interaction.editReply({
          content: "Hubo un error al obtener el precio de Shiba Inu.",
          ephemeral: true,
        });
      }
    } else if (moneda === "ltc") {
      const url =
        "https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd";
      try {
        const response = await axios.get(url);
        const price = response.data.litecoin.usd;
        const embed = new EmbedBuilder()
          .setColor("Blurple")
          .setTitle("Litecoin (LTC)")
          .setDescription(
            `El precio actual de Litecoin (LTC) es: $${price.toFixed(2)} USD.`
          )
          .setImage(
            "https://media.tokize.com/fr/app/uploads/2023/09/Litecoin-token-in-focus-scaled.jpg"
          )
          .setTimestamp();
        await interaction.editReply({ embeds: [embed] });
      } catch (error) {
        console.error("Error al obtener el precio de Litecoin:", error);
        await interaction.editReply({
          content: "Hubo un error al obtener el precio de Litecoin.",
          ephemeral: true,
        });
      }
    }
  },
};
