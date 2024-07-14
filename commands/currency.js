require('dotenv').config();
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const axios = require('axios');

const btcButton = new ButtonBuilder()
.setStyle(1)
.setLabel('BTC')
.setCustomId('bitcoin')
const ethButton = new ButtonBuilder()
.setStyle(1)
.setLabel('ETH')
.setCustomId('ethereum')
const usdButton = new ButtonBuilder()
.setStyle(1)
.setLabel('USD-Blue')
.setCustomId('usdBlue')

    module.exports = { 
    name: 'currency',
    description: 'Muestra el precio actual de diferentes monedas',
    run: async (message) => { 

        const actionRow = new ActionRowBuilder()
            .addComponents(btcButton, ethButton, usdButton);

        const reply = await message.reply({
            content: 'Selecciona una opción:',
            components: [actionRow]
        });

        const collector = message.channel.createMessageComponentCollector({
            filter: (interaction) => interaction.user.id === message.author.id && interaction.message.id === reply.id,
            time: 60 * 1000 // 1 minuto
        });

        collector.on('collect', async (interaction) => {
            // Here, you should handle the interaction based on the customId of the button pressed.
            // The previous version incorrectly used 'currency' as the customId in the condition.
            // This section needs to be adjusted based on what you want to do with each button press.
            // Example:
            if (interaction.customId === 'bitcoin') {
                const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd';
                try {
                    const response = await axios.get(url); // Fixed destructuring assignment
            
                    const price = response.data.bitcoin.usd; // Correctly access the price
            
                    // Imprimir la respuesta completa para diagnóstico
                    console.log(JSON.stringify(response.data, null, 2));
            
                    await interaction.reply({ content: `Has seleccionado Bitcoin (BTC). Su precio actual es: $${price.toFixed(2)} USD.` });
                } catch (error) {
                    console.error('Error al obtener el precio de Bitcoin:', error);
                    await interaction.reply({ content: 'Hubo un error al obtener el precio de Bitcoin.', ephemeral: true });
                }
            } else if (interaction.customId === 'ethereum') {
                await interaction.reply({ content: `Has seleccionado Ethereum (ETH). su precio actual es: ` }).catch(console.error);
            } else if (interaction.customId === 'usdBlue') {
                await interaction.reply({ content: `Has seleccionado Dólar Blue (USD). su precio actual es: ` }).catch(console.error);
            }
        });

        collector.on('end', () => {
            reply.edit({components: [] }).catch(console.error);
        });
    }
}