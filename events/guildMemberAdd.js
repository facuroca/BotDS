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
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.29350-15/432017239_417430184293470_4653143630982292594_n.jpg?stp=dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuaGRyLmYyOTM1MCJ9&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=KFADXRQwa48Q7kNvgGaK1jP&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzMyNDU2ODcxNTgwMjI5MTA3MQ%3D%3D.2-ccb7-5&oh=00_AYBSEpOAh6SWtzgBTp8zRnpX2AUgx3zFrrg6U2HCwKtymA&oe=669CD981&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.29350-15/273393778_2866613920302876_1416428497286877552_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDI0eDc2OC5zZHIuZjI5MzUwIn0&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=CHZqOgcGyNAQ7kNvgE7Fhfs&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=Mjc2NzM4Mjc5NjY3MjQwMzM1NA%3D%3D.2-ccb7-5&oh=00_AYCXohYTw1gCleRSIR8DMbZd8pgEAUdqy-0jncbmVeF_6w&oe=669CD584&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t39.30808-6/404446439_18393353593042892_3310562699185449375_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=iypjyG3BzioQ7kNvgFGskgv&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzI0MTY5NzA1NDI5NTU1OTQ5MA%3D%3D.2-ccb7-5&oh=00_AYACwIxxXhG3krBHtyp4ocTh2kYwN_CuOfMMnV98D5n72w&oe=669CEF03&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.29350-15/365466714_977054713727235_1347123752535365727_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDExNTIuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=Sg-D1B0GuK8Q7kNvgHD_u9Z&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzE2NDM2NTA0OTE0MTQ4OTk2Mg%3D%3D.2-ccb7-5&oh=00_AYAv_CTaSU4pQWDfbAH6VcKwVk7l3huq0TNzmtRGm9JplQ&oe=669CD0AB&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.2885-15/80462951_168401647588408_244085003812379103_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyODg1In0&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OvFLurhCwfIQ7kNvgFA8bti&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MjIyNTA2NjExMzAyMzUxMjA2Mw%3D%3D.2-ccb7-5&oh=00_AYC_JHcoBkfqXHn1Ly9kFUOChRwYZaVG4rHr6gmJdjKEpg&oe=669CEF59&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.29350-15/307926422_3227307804160694_3737440945102106259_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyOTM1MCJ9&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=TxA_zQlVaOEQ7kNvgGalkwp&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MjkzMjYwNTE3NjA3MDIxOTc3NA%3D%3D.2-ccb7-5&oh=00_AYDjR7O7b-sGeR5XdvG0G4OSpvKZEp1l-mfWrIcdxIAGhA&oe=669CCFD3&_nc_sid=8f1549",
      "https://instagram.ffdo5-1.fna.fbcdn.net/v/t51.29350-15/380448746_1452008335598410_2314766257829852217_n.webp?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi43MjB4OTAwLnNkci5mMjkzNTAifQ&_nc_ht=instagram.ffdo5-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=LGF4gjjpWEoQ7kNvgE_cKmw&edm=AEhyXUkBAAAA&ccb=7-5&ig_cache_key=MzE5NzAzNjg1Mjg0NjE1MDA3Nw%3D%3D.2-ccb7-5&oh=00_AYAXHrOcai4PBlv9DZH_NUVHnIaxKXk6ugHdDpeJie9bVA&oe=669CF6DE&_nc_sid=8f1549",
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const selectedImage = images[randomIndex];

    const embed = new EmbedBuilder()
      .setTitle("¡Bienvenido!")
      .setDescription(`Bienvenido al servidor PAPAAA, ${member.user}`)
      .setImage(selectedImage)
      .setColor("Red");
    channel.send(embed);
  },
};
