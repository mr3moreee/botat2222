client.on("message", msg => {
  var prefix = '!'//البركفس
  if(msg.content.startsWith(prefix + 'id')){
    let embed = new Discord.RichEmbed()
    .setThumbnail(msg.author.displayAvatarURL)
    .setColor("RANDOM")
    .addField("Year📆",msg.author.createdAt.getFullYear())
    .addField("Hour📆", msg.author.createdAt.getHours())
    .addField("Day📆", msg.author.createdAt.getDay())
    .addField("Month📆", msg.author.createdAt.getMonth())
    .addField("Minutes📆", msg.author.createdAt.getMinutes())
    .addField("Seconds📆", msg.author.createdAt.getSeconds())
    .addField("Full📆", msg.author.createdAt.toLocaleString())
    .setTimestamp()
    msg.channel.send(embed);
  }
});
