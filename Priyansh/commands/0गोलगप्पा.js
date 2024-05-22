module.exports.config = {
  name: "golgappa",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BLACK",
  description: "Random 6-pack photos",
  commandCategory: "Random-IMG",
  usages: "6mui",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.imgur.com/wkgZclp.jpg",
     ];
     var callback = () => api.sendMessage({body:`❤️💝𝐌𝐚𝐝𝐞 𝐁𝐲:-☞𝗝𝗨𝗟𝗠𝗜 𝗝𝗔𝗔𝗧☜\nये लो बाबू गोलगप्पा खाओ😘 -.-`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   }