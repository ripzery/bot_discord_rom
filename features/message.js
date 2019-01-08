const keywords = {
  subscribeEn: ["!subscribe --en", "!subscribe"],
  subscribeTh: ["!subscribe --th"],
  subscribeThSlang: ["สมัครไง", "สมัครยังไง", "สมัครไงครับ", "จ่ายตัง", "redeem code ยังไง", "redeem ยังไง"],
  guideEn: ["!guide", "!guide --en"],
  guideTh: ["!guide --th"],
  guideThSlang: ["โปรใช้ไง", "ใช้ไม่เป็น", "สอนด้วยครับ", "ใช้ยังไง"],
  payment: ["!payment"],
  mvp: ["!mvp", "วิธีใช้ /mvp"],
  noob: ["ลงหัวบอส", "วิงลงบอส", "ล็อคหัวบอส", "วิงหาบอส", "โปรล็อคบอส", "ล้อคบอส"],
  read: ["!read"],
  helpEn: ["!help", "!help --en"],
  helpTh: ["!help --th"],
  ban: ["ใครโดนแบน", "โดนแบนเหรอ", "โดนแบนบ้าง", "ใครโดนแล้วบ้าง"],
  dm: ["!dm"],
  map: ["!map"]
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
  } else if (matchAny(msg, keywords.subscribeThSlang)) {
    msg.channel.send("วิธีสมัครตามรูปด้านล่างเลยครับ ราคา 5.53 USD โดยรองรับผ่าน Paypal \nแต่ถ้าอยากสะดวกจ่ายผ่าน TrueMoney Wallet ได้หรือบ้านรวยอยากจ่ายเยอะๆ ก็มีคนขายจ้า ชื่อ \"ขาย Code Add-on\" อะไรสักอย่างเนี่ยแหละ", {
      files: [{
        attachment: "assets/subscribe_th.jpg",
        name: "subscribe_th.jpg"
      }]
    });
  } else if (matchExactAny(msg, keywords.guideTh) || matchAny(msg, keywords.guideThSlang)) {
    msg.channel.send(`https://docs.google.com/document/d/1SlelM4TMurmxE_LzoObMnPwtgLaoWe9dcBHVHlBoRgA/ \nดูเพิ่มได้ที่ ${ch(msg, 'faqs-guides')} กับ ${ch(msg, 'download')} นะครับ`);
  } else if (matchExactAny(msg, keywords.guideEn)) {
    msg.channel.send(`https://xkromui.com/features.html \nMore information at ${ch(msg, 'faqs-guides')} and ${ch(msg, 'download')}`);
  } else if (matchExactAny(msg, keywords.payment)) {
    msg.channel.send(`Hey, look at https://xkromui.com/subscribe/`)
  } else if (matchAny(msg, keywords.ban)) {
    msg.channel.send(`กูเนี่ยแหละโดนแบน จะถามให้ช้ำใจกันทำไมม ~`, {
      files: [{
        attachment: "assets/ban.jpg",
        name: "ban.jpg"
      }]
    })
  } else if (matchExactAny(msg, keywords.map)) {
    msg.channel.send(`
  รายชื่อแมพทั้งหมดตามนี้เลยจ้า
\`\`\`
วิธีใช้พิมพ์ /go ตามด้วย id เช่น /go 1 ไปพรอนเทร่า, /go 9 ไป Ghost Ship

ID: 1     Map: Prontera
ID: 2     Map: Prt South Field
ID: 3     Map: Prt Sewer 1F
ID: 4     Map: Prt Sewer 2F
ID: 5     Map: Prt West Field
ID: 6     Map: Prt Maze
ID: 7     Map: Izlude
ID: 8     Map: Sunken Ship
ID: 9     Map: Ghost Ship
ID: 10     Map: Byalan Island
ID: 11     Map: Undersea Cave
ID: 12     Map: Undersea Temple
ID: 13     Map: Geffen
ID: 14     Map: Mt. Mjolnir
ID: 15     Map: Ant Cave
ID: 16     Map: Morroc
ID: 17     Map: Pyramid 1F
ID: 18     Map: Payon
ID: 19     Map: Payon South Field
ID: 20     Map: Payon Cave 1F
ID: 21     Map: Pyramid 2F
ID: 22     Map: Payon Cave 2F
ID: 23     Map: Orc Village
ID: 24     Map: Geffen Tower
ID: 25     Map: Orc Dungeon
ID: 26     Map: Dragon Plateau
ID: 27     Map: Glast Heim
ID: 28     Map: GH Culvert
ID: 29     Map: GH Chivalry
ID: 30     Map: GH Lobby
ID: 31     Map: Misty Island
ID: 32     Map: Payon Forest
ID: 33     Map: Goblin Forest
ID: 34     Map: Kordt Forest
ID: 35     Map: Sograt Desert
ID: 37     Map: GH Churchyard
ID: 38     Map: Ant Hell
ID: 42     Map: Prt North Field
ID: 43     Map: Al De Baran
ID: 44     Map: Clock Tower 1F
ID: 45     Map: Clock Tower 2F
ID: 46     Map: Clock Tower Basement
ID: 48     Map: Lutie
ID: 49     Map: Toy Factory 1F
ID: 50     Map: Toy Factory 2F
ID: 53     Map: Pyramid 3F
ID: 60     Map: Glast Heim Hall
ID: 62     Map: Amatsu
ID: 63     Map: Yuno
ID: 64     Map: Border Checkpoint
ID: 65     Map: Einbroch Field
ID: 66     Map: Magma Dungeon 1F
ID: 67     Map: Magma Dungeon 2F
ID: 68     Map: Magma Dungeon 3F
ID: 70     Map: Niflheim
ID: 71     Map: Mist Forest
ID: 75     Map: Umbala
ID: 73     Map: Hamelin
ID: 72     Map: Skellington
ID: 74     Map: Hvergelmir
\`\`\`
    `)
  } else if (matchAny(msg, keywords.noob)) {
    msg.channel.send(`พูดอีกที พูดอีกที พูดอีกทีได้หรือเปล่า \nฉันไม่ได้ฟัง ที่อยากจะฟังมาตั้งนาน~`, {
      files: [{
        attachment: "assets/noob.jpg",
        name: "noob.jpg"
      }]
    })
  } else if (matchExactAny(msg, keywords.mvp)) {
    msg.channel.send(`อ่านวิธีใช้คำสั่ง /mvp ตรงนี้นะหนู`, {
      files: [{
        attachment: "assets/mvp.jpg",
        name: "mvp.jpg"
      }]
    })
  } else if (matchExactAny(msg, keywords.read)) {
    msg.channel.send(`อ่าน channels นี้ก่อนนะ`, {
      files: [{
        attachment: "assets/read.jpg",
        name: "read.jpg"
      }]
    })
  } else if (matchAny(msg, keywords.dm)) {
    const user = msg.mentions.users.first()
    if (user) {
      if (msg.author.username.indexOf("ไอทั้งวัน") === -1) {
        msg.channel.send(`You think you can send? 🤔`)
        return
      }
      const msgs = msg.content.split(" ").slice(2).join(" ")
      user.send(msgs)
    } else {
      msg.channel.send(`You didn't specify who to send.`)
    }
  } else if (matchExactAny(msg, keywords.helpTh)) {
    msg.channel.send(`
      คำสั่งที่ใช้ได้:
\`\`\`
!subscribe : วิธีสมัคร add-on ภาษาอังกฤษ
!subscribe --th : วิธีสมัคร add-on ภาษาไทย
!guide : ลิ้งค์คู่มือภาษาอังกฤษ
!guide --en : ลิ้งค์คู่มือภาษาไทย
!payment : ลิ้งค์หน้าก่อนชำระเงิน
!mvp, วิธีใช้ /mvp : วิธีใช้คำสั่ง /mvp
!noob, ลงหัวบอส : อะไรไม่สามารถทำได้
!read : อ่าน channel #faqs-guides กับ #download
\`\`\`
    `)
  } else if (matchExactAny(msg, keywords.helpEn)) {
    msg.channel.send(`
      Available commands:
\`\`\`
!subscribe : Show subscription guide.
!guide : Link to feature page.
!payment : Link to subscription page.
\`\`\`
    `)
  }
}

module.exports.handle = handle
