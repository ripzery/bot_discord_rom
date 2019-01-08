const keywords = {
  subscribeEn: ["!subscribe --en", "!subscribe"],
  subscribeTh: ["!subscribe --th"],
  guideEn: ["!guide", "!guide --en"],
  guideTh: ["!guide --th"],
  payment: ["!payment"],
  mvp: ["!mvp", "วิธีใช้ /mvp"],
  noob: ["!noob", "ลงหัวบอส"],
  read: ["!read"],
  ban: ["ใครโดนแบน", "โดนแบนเหรอ", "โดนแบนบ้าง"]
}

const ch = (msg, name) => msg.guild.channels.find(channel => channel.name === name).toString();

const matchExactAny = (msg, keywords) => keywords.find(k => k === msg.content)

const matchAny = (msg, keywords) => keywords.find(k => msg.content.indexOf(k) > -1)

const handle = (msg, discord) => {
  if (matchExactAny(msg, keywords.subscribeEn)) {
    msg.channel.send("Here it is", { 
      files: [{ 
        attachment: "assets/subscribe_en.jpg",
        name: "subscribe_en.jpg"
      }]
    });
  } else if (matchExactAny(msg, keywords.subscribeTh)) {
    msg.channel.send("อ่านก่อนนะหนู", { 
      files: [{ 
        attachment: "assets/subscribe_th.jpg",
        name: "subscribe_th.jpg" 
      }]
    });
  } else if (matchExactAny(msg, keywords.guideTh)) {
    msg.channel.send(`https://docs.google.com/document/d/1SlelM4TMurmxE_LzoObMnPwtgLaoWe9dcBHVHlBoRgA/ \nดูเพิ่มได้ที่ ${ch(msg, 'faqs-guides')} กับ ${ch(msg, 'download')} นะครับ`);
  } else if(matchExactAny(msg, keywords.guideEn)) {
    msg.channel.send(`https://xkromui.com/features.html \nMore information at ${ch(msg, 'faqs-guides')} and ${ch(msg, 'download')}`);
  } else if(matchExactAny(msg, keywords.payment)) {
    msg.channel.send(`Hey, look at https://xkromui.com/subscribe/`)
  } else if(matchAny(msg, keywords.ban)) {
    msg.channel.send(`กูเนี่ยแหละโดนแบน จะถามให้ช้ำใจกันทำไมม ~`, { 
      files: [{ 
        attachment: "assets/ban.jpg",
        name: "ban.jpg" 
      }]
    })
  } else if(matchExactAny(msg, keywords.noob)) {
    msg.channel.send(`พูดอีกที พูดอีกที พูดอีกทีได้หรือเปล่า \nฉันไม่ได้ฟัง ที่อยากจะฟังมาตั้งนาน~`, {
      files: [{ 
        attachment: "assets/noob.jpg",
        name: "noob.jpg" 
      }]
    })
  } else if(matchExactAny(msg, keywords.mvp)) {
    msg.channel.send(`อ่านวิธีใช้คำสั่ง /mvp ตรงนี้นะหนู`, {
      files: [{ 
        attachment: "assets/mvp.jpg",
        name: "mvp.jpg" 
      }]
    })
  } else if(matchExactAny(msg, keywords.read)) {
    msg.channel.send(`อ่าน channels นี้ก่อนนะ`, {
      files: [{ 
        attachment: "assets/read.jpg",
        name: "read.jpg" 
      }]
    })
  }
}

module.exports.handle = handle
