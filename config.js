import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = "*𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻*"
global.confirmCode = ""

global.owner = [['201113642538', '𝙢,𝙚,𝙜,𝙤, ❦︎', true],
];

global.suittag = ['201113642538'];
global.prems = ['201113642538'];

global.packname = '☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎';
global.author = '𝑵𝑨𝑹𝑼𝑻𝑶';
global.wm = '✯𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝐌𝐃✯';
global.vs = 'V2 • 1.0.5':
global.titulowm = '☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎';
global.titulowm2 = `☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎`
global.igfg = '☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎';
global.wait = '*[ ⏳ ]  انتظر يا جصبحي امش تابعني ي ولضمي*...\n\n*tiktok.com/@naruto.f0100@*';

global.imagen1 = fs.readFileSync('./https://files.fm/u/44vvyb6pk7');
global.imagen2 = fs.readFileSync('.https://files.fm/u/44vvyb6pk7');
global.imagen3 = fs.readFileSync('.https://files.fm/u/44vvyb6pk7');
global.imagen4 = fs.readFileSync('.https://files.fm/u/44vvyb6pk7');
global.imagen5 = fs.readFileSync('.https://files.fm/u/44vvyb6pk7');
global.imagen6 = fs.readFileSync('https://files.fm/u/44vvyb6pk7');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'ar';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('ar-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\n☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎`;
global.gt = '☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎';
global.mysticbot = '☾︎ 𝑵𝑨𝑹𝑼𝑻𝑶 𝑩𝑶𝑻-𝙈𝘿 ☽︎';
global.md = 'tiktok.com/@naruto.f0100';
global.mysticbot = 'tiktok.com/@naruto.f0100';
global.waitt = '*[ ⏳ ] انتظر ي جصبحي امش تابعني ي ولضمي*...\n\n*tiktok.com/@naruto.f0100*';
global.waittt = '*[ ⏳ ] انتظر ي جصبحي امش تابعني ي ولضمي*...\n\n*tiktok.com/@naruto.f0100*';
global.waitttt = '*[ ⏳ ] انتظر ي جصبحي امش تابعني ي ولضمي*...\n\n*tiktok.com/@naruto.f0100*';
global.nomorown = '201113642538';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] التاريخ:*  ${moment.tz('Egypt/cairo_city').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الوقت:* ${moment.tz('Egypt/cairo_city').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./https://files.fm/u/44vvyb6pk7')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
