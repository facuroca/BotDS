const { SlashCommandBuilder } = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const axios = require("axios");
require("dotenv").config();

module.exports = {
    data: new SlashCommandBuilder()
    .setName("fiat")
    .setDescription("Muestra el precio actual de diferentes divisas")
    .addStringOption((option) =>
      option
        .setName("divisa")
        .setDescription("Selecciona una divisa")
        .setRequired(true)
        .setChoices({name: "Dolar", value: "usd"},
                 {name: "Euro", value: "eur"})
    ),
  async execute(interaction) {
    const moneda = interaction.options.getString("divisa");
    await interaction.deferReply({ ephemeral: true });
    if (moneda === "usd") {
        const url = "https://dolarapi.com/v1/dolares";
        try {
          const response = await axios.get(url);
          const buyOfficial = response.data.find((item) => item.casa === "oficial")?.compra || 0;
          const sellOfficial = response.data.find((item) => item.casa === "oficial")?.venta || 0;
          const buyBlue = response.data.find((item) => item.casa === "blue")?.compra || 0;
          const sellBlue = response.data.find((item) => item.casa === "blue")?.venta || 0;
          const buyMEP = response.data.find((item) => item.casa === "bolsa")?.compra || 0;
          const sellMEP = response.data.find((item) => item.casa === "bolsa")?.venta || 0;
          const buyCCL = response.data.find((item) => item.casa === "contadoconliqui")?.compra || 0;
          const sellCCL = response.data.find((item) => item.casa === "contadoconliqui")?.venta || 0;
          const buyCrypto = response.data.find((item) => item.casa === "cripto")?.compra || 0;
          const sellCrypto = response.data.find((item) => item.casa === "cripto")?.venta || 0;
          const sellCreditCard = response.data.find((item) => item.casa === "tarjeta")?.venta || 0;
          const latestUpdate = response.data.find((item) => item.casa === "blue")?.fechaActualizacion || 0;
          const date = new Date(latestUpdate);
          const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
          const formattedDate = date.toLocaleString("es-AR", options);
        const embed = new EmbedBuilder()
            .setColor("Blurple")
            .setTitle("Cotizaciones del Dolar")
            .setImage(
                "https://www.lavoz.com.ar/resizer/z0TJfzaS9uB0eUtPpSg1RIakboI=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/BBSQRTTJHNFKNBR7YUUXIN6ISM.jpg"
            )
            .setTimestamp()
            .addFields(
                { name: "Dolar Oficial (USD)", value: `Compra: $${buyOfficial.toFixed(2)} USD\nVenta: $${sellOfficial.toFixed(2)} USD`, inline: true },
                { name: "Dolar Blue (USD)", value: `Compra: $${buyBlue.toFixed(2)} USD\nVenta: $${sellBlue.toFixed(2)} USD`, inline: true },
                { name: "Dolar MEP (USD)", value: `Compra: $${buyMEP.toFixed(2)} USD\nVenta: $${sellMEP.toFixed(2)} USD`, inline: true },
                { name: "Dolar CCL (USD)", value: `Compra: $${buyCCL.toFixed(2)} USD\nVenta: $${sellCCL.toFixed(2)} USD`, inline: true },
                { name: "Dolar Cripto (USD)", value: `Compra: $${buyCrypto.toFixed(2)} USD\nVenta: $${sellCrypto.toFixed(2)} USD`, inline: true },
                { name: "Dolar Tarjeta (USD)", value: `Venta: $${sellCreditCard.toFixed(2)} USD`, inline: true }
            )
            .setFooter({ text: `Actualizado al: ${formattedDate}` });

        await interaction.editReply({ embeds: [embed] });
        } catch (error) {
          console.error("Error al obtener el precio del Dolar:", error);
          await interaction.editReply({
            content: "Hubo un error al obtener el precio del Dolar.",
            ephemeral: true,
          });
        }
      } else if (moneda === "eur") {
        await interaction.editReply({
            content: "Hubo un error al obtener el precio del Euro.",
            ephemeral: true,
          });
      }
}
};
