const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports.run = async (client, message, args, level) => {
     if (!message.channel.nsfw) {
		message.react('💢');
		return message.channel.send({embed: {
                color: 16734039,
                title: "You can use this command in an NSFW Channel!"
            }})
	}
    superagent.get('https://nekos.life/api/v2/img/femdom')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("Femdom")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`Tags: femdom`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                title: "Something went wrong... :cry:"
            }}));
	
}

module.exports.help = {
    name: "femdom",
    description: "Display a random femdom image/gif",
    usage: "femdom",
    type: "NSFW" 
}