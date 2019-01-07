const handle = (msg, discord) => {
  console.log(msg.mentions)
  if (msg.content.indexOf("/subscribe --en") === 0 || msg.content === "/subscribe") {
    msg.channel.send("", { 
      files: [{ 
        attachment: "assets/guide_en.jpg",
        name: "guide.jpg" 
      }]
    });
  } else if (msg.content.indexOf("/subscribe --th") === 0) {
    msg.channel.send("", { 
      files: [{ 
        attachment: "assets/guide_th.jpg",
        name: "ไกด์.jpg" 
      }]
    });
  } else if (msg.content.indexOf("/guide --th") === 0) {
    msg.channel.send(`https://docs.google.com/document/d/1SlelM4TMurmxE_LzoObMnPwtgLaoWe9dcBHVHlBoRgA/`);
  } else if(msg.content.indexOf("/guide --en") === 0 || msg.content === "/guide") {
    msg.channel.send(`https://xkromui.com/features.html`);
  }
}

module.exports.handle = handle
