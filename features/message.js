const keywords = {
  subscribeEn: ["!subscribe --en", "!subscribe"],
  subscribeTh: ["!subscribe --th"],
  guideEn: ["!guide", "!guide --en"],
  guideTh: ["!guide --th"],
  payment: ["!payment"],
  ban: ["ใครโดนแบน", "โดนแบนเหรอ", "โดนแบนบ้าง"]
}

const matchAny = (msg, keywords) => keywords.find(k => k === msg.content)

const handle = (msg, discord) => {
  if (matchAny(msg, keywords.subscribeEn)) {
    msg.channel.send("", { 
      files: [{ 
        attachment: "assets/subscribe_en.jpg",
        name: "subscribe_en.jpg" 
      }]
    });
  } else if (matchAny(msg, keywords.subscribeTh)) {
    msg.channel.send("", { 
      files: [{ 
        attachment: "assets/subscribe_th.jpg",
        name: "subscribe_th.jpg" 
      }]
    });
  } else if (matchAny(msg, keywords.guideTh)) {
    msg.channel.send(`https://docs.google.com/document/d/1SlelM4TMurmxE_LzoObMnPwtgLaoWe9dcBHVHlBoRgA/`);
  } else if(matchAny(msg, keywords.guideEn)) {
    msg.channel.send(`https://xkromui.com/features.html`);
  } else if(matchAny(msg, keywords.payment)) {
    msg.channel.send(`https://xkromui.com/subscribe/`)
  } else if(matchAny(msg, keywords.ban)) {
    msg.channel.send(`กูเนี่ยแหละโดนแบน จะถามให้ช้ำใจกันทำไมม ~`, { 
      files: [{ 
        attachment: "assets/ban.jpg",
        name: "ban.jpg" 
      }]
    })
  }
}

module.exports.handle = handle
