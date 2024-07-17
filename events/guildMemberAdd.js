const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      (ch) => ch.name === "general"
    );
    if (!channel) return;
    await channel.fetch();
    const images = [
        "https://i.imgur.com/hb1pJt4.png",
        "https://i.imgur.com/VlgcMO7.png",
        "https://i.imgur.com/VaKK7cN.png",
        "https://i.imgur.com/VJ05UHa.png",
        "https://i.imgur.com/MtPMpgP.png",
        "https://i.imgur.com/WByJ5js.png",
        "https://i.imgur.com/i5va6tT.jpeg",
        
      ];
    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const embed = new EmbedBuilder()
      .setTitle("¡Bienvenido!")
      .setDescription(`👋Bienvenido al servidor PAPAAA, ${member.user}👋 `)
      .setImage(selectedImage)
      .setColor("Red");
    channel.send(embed);
  },
};
