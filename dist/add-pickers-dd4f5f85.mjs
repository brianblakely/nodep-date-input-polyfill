// @license MIT - https://github.com/brianblakely/esm-date-input-polyfill
import{a as e,d as t,F as a}from"./polyfill-if-required-d890f842.mjs";!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===a&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}('date-input-polyfill {\n  background: #fff;\n  color: #000;\n  text-shadow: none;\n  border: 0;\n  padding: 0;\n  height: auto;\n  width: auto;\n  line-height: normal;\n  border-radius: 0;\n  font-family: sans-serif;\n  font-size: 14px;\n  position: absolute !important;\n  text-align: center;\n  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n  cursor: default;\n  z-index: 1; }\n  date-input-polyfill[data-open="false"] {\n    display: none; }\n  date-input-polyfill[data-open="true"] {\n    display: block; }\n  date-input-polyfill select, date-input-polyfill table, date-input-polyfill th, date-input-polyfill td {\n    background: #fff;\n    color: #000;\n    text-shadow: none;\n    border: 0;\n    padding: 0;\n    height: auto;\n    width: auto;\n    line-height: normal;\n    border-radius: 0;\n    font-family: sans-serif;\n    font-size: 14px;\n    box-shadow: none; }\n  date-input-polyfill select, date-input-polyfill button {\n    border: 0;\n    border-bottom: 1px solid #E0E0E0;\n    height: 24px;\n    vertical-align: top; }\n  date-input-polyfill select {\n    width: 50%; }\n    date-input-polyfill select:first-of-type {\n      border-right: 1px solid #E0E0E0;\n      width: 30%; }\n  date-input-polyfill button {\n    padding: 0;\n    width: 20%;\n    background: #E0E0E0; }\n  date-input-polyfill table {\n    border-collapse: collapse; }\n  date-input-polyfill th, date-input-polyfill td {\n    width: 32px;\n    padding: 4px;\n    text-align: center; }\n  date-input-polyfill td {\n    cursor: pointer; }\n    date-input-polyfill td:hover {\n      background: #E0E0FF; }\n  date-input-polyfill .esm-polyfill-invalid-day {\n    background: #eee;\n    color: #422;\n    cursor: not-allowed; }\n  date-input-polyfill .esm-polyfill-day-selected {\n    font-weight: bold;\n    background: #d8eaf6; }\n  date-input-polyfill .esm-polyfill-current-day {\n    border: 1px #777 solid; }\n\ninput[data-has-picker]::-ms-clear {\n  display: none; }\n');class n{constructor({yrsBack:e=80,yrsFwd:t=20}={yrsBack:80,yrsFwd:20}){if(n.instance)return n.instance;const a={passive:!0};this.date=new Date,this.input=null,this.isOpen=!1,this._onBeforeOpen=[],this.container=document.createElement("date-input-polyfill"),this.year=document.createElement("select"),n.createRangeSelect(this.year,this.date.getFullYear()-e,this.date.getFullYear()+t),this.year.className="yearSelect",this.year.addEventListener("change",()=>{this.date.setYear(this.year.value),this.refreshDaysMatrix()},a),this.container.appendChild(this.year),this.month=document.createElement("select"),this.month.className="monthSelect",this.month.addEventListener("change",()=>{this.date.setMonth(this.month.value),this.refreshDaysMatrix()},a),this.container.appendChild(this.month),this.today=document.createElement("button"),this.today.textContent="Today",this.today.addEventListener("click",()=>{this.date=new Date,this.setInput()},a),this.container.appendChild(this.today);const s=document.createElement("table");this.daysHead=document.createElement("thead"),this.days=document.createElement("tbody"),this.days.addEventListener("click",e=>{const t=e.target;if(!t.classList.contains("esm-polyfill-day")||t.classList.contains("esm-polyfill-invalid-day"))return!1;const a=this.days.querySelector(".esm-polyfill-day-selected");a&&a.classList.remove("esm-polyfill-day-selected"),t.classList.add("esm-polyfill-day-selected"),this.date.setDate(parseInt(t.textContent,10)),this.setInput()},a),s.appendChild(this.daysHead),s.appendChild(this.days),this.container.appendChild(s),this.hide(),document.body.appendChild(this.container),document.addEventListener("click",e=>{let t=e.target,a=t===this.container;for(;!a&&(t=t.parentNode);)a=t===this.container;const n=e.target.getAttribute("type");"date"===n||"date-polyfill"===n||a||this.hide()},a)}hide(){this.container.setAttribute("data-open",this.isOpen=!1)}show(){this._onBeforeOpen.forEach(e=>e()),this.container.setAttribute("data-open",this.isOpen=!0)}onBeforeOpen(e){this._onBeforeOpen.push(e)}goto(e){const t=e.getBoundingClientRect();this.container.style.top=`${t.top+t.height+(document.documentElement.scrollTop||document.body.scrollTop)}px`,this.container.style.left=`${t.left+(document.documentElement.scrollLeft||document.body.scrollLeft)}px`,this.show()}attachTo(e){if(e===this.input&&this.isOpen)return!1;this.input=e,this.sync(),this.goto(this.input.element)}sync(){this.input.element.valueAsDate?this.date=n.utcDateToLocal(this.input.element.valueAsDate):this.date=new Date,this.year.value=this.date.getFullYear(),this.month.value=this.date.getMonth(),this.refreshDaysMatrix()}setInput(){this.input.element.value=`${this.date.getFullYear()}-${String(this.date.getMonth()+1).padStart(2,"0")}-${String(this.date.getDate()).padStart(2,"0")}`,this.input.element.focus(),setTimeout(()=>{this.hide()},100),this.pingInput()}refreshLocale(){if(this.locale===this.input.locale)return!1;this.locale=this.input.locale;const e=["<tr>"];for(let t=0,a=this.input.localeText.days.length;t<a;++t)e.push(`<th scope="col">${this.input.localeText.days[t]}</th>`);this.daysHead.innerHTML=e.join(""),n.createRangeSelect(this.month,0,11,this.input.localeText.months,this.date.getMonth()),this.today.textContent=this.input.localeText.today}refreshDaysMatrix(){this.refreshLocale();const e=this.date.getFullYear(),t=this.date.getMonth();let a=new Date(e,t,1);const s=a.getDay(),i=new Date(this.date.getFullYear(),t+1,0).getDate(),o=n.utcDateToLocal(this.input.element.valueAsDate)||!1,r=o&&e===o.getFullYear()&&t===o.getMonth(),l=this.input.element.min,u=l?n.utcDateToLocal(new Date(l)).getTime():-30610224e6,m=this.input.element.max,d=m?n.utcDateToLocal(new Date(m)).getTime():3250368e7,h=new Date;h.setHours(0,0,0,0);const y=h.getTime(),b=[];for(let e=0;e<i+s;++e){if(e%7==0&&b.push(`\n          ${0!==e?"</tr>":""}\n          <tr>\n        `),e+1<=s){b.push("<td></td>");continue}const t=e+1-s,n=["esm-polyfill-day"];r&&o.getDate()===t&&n.push("esm-polyfill-day-selected");let i=a.setDate(t);(i<u||i>d)&&n.push("esm-polyfill-invalid-day"),i===y&&n.push("esm-polyfill-current-day"),b.push(`<td class="${n.join(" ")}">\n          ${t}\n        </td>`)}this.days.innerHTML=b.join("")}pingInput(){let e,t;try{e=new Event("input"),t=new Event("change")}catch(a){e=document.createEvent("KeyboardEvent"),e.initEvent("input",!0,!1),t=document.createEvent("KeyboardEvent"),t.initEvent("change",!0,!1)}this.input.element.dispatchEvent(e),this.input.element.dispatchEvent(t)}static createRangeSelect(e,t,a,n,s){e.innerHTML="";for(let i=t;i<=a;++i){const a=document.createElement("option");e.appendChild(a);const o=n?n[i-t]:i;a.text=o,a.value=i,i===s&&(a.selected="selected")}return e}static utcDateToLocal(e){return e&&new Date(e.getTime()+6e4*e.getTimezoneOffset())}}function s(e){const t=e.replace(/-[a-z0-9]+$/,"");return t&&t!==e?t:null}function i(e){let t,a=e.indexOf("Y"),n=e.indexOf("M");a<n?(a=1,n=2,t=3):(a=3,t=e.indexOf("D"),t<n?(t=1,n=2):(n=1,t=2)),e=e.replace(/\./g,"\\.").replace("Y","([12]\\d{3})").replace("M","([01]?\\d)").replace("D","([0-3]?\\d)");const s=new RegExp(e);return{pattern:e.replace(/[)()]/g,""),parse(e){const i=s.exec(e);if(!i)return null;const o=parseInt(i[a],10),r=parseInt(i[n],10)-1,l=parseInt(i[t],10),u=new Date(o,r,l);return u.getFullYear()!==o||u.getMonth()!==r||u.getDate()!==l?null:u}}}function o(e){const t={ar:{today:"اليوم",days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],months:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"]},bg:{today:"днес",days:["нед","пон","вт","ср","четв","пет","съб"],months:["януари","февруари","март","април","май","юни","юли","август","септември","октомври","ноември","декември"]},ca:{today:"avui",days:["dg.","dl.","dt.","dc.","dj.","dv.","ds."],months:["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"]},cs:{today:"dnes",days:["ne","po","út","st","čt","pá","so"],months:["leden","únor","březen","duben","květen","červen","červenec","srpen","září","říjen","listopad","prosinec"]},da:{today:"i dag",days:["sø","ma","ti","on","to","fr","lø"],months:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},de:{today:"heute",days:["So","Mo","Di","Mi","Do","Fr","Sa"],months:["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"]},el:{today:"σήμερα",days:["Κυρ","Δευ","Τρι","Τετ","Πεμ","Παρ","Σαβ"],months:["Ιανουάριος","Φεβρουάριος","Μάρτιος","Απρίλιος","Μάιος","Ιούνιος","Ιούλιος","Αύγουστος","Σεπτέμβριος","Οκτώβριος","Νοέμβριος","Δεκέμβριος"]},en:{today:"today",days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]},es:{today:"hoy",days:["dom","lun","mar","mié","jue","vie","sáb"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},fi:{today:"tänään",days:["su","ma","ti","ke","to","pe","la"],months:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kesäkuu","heinäkuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},fr:{today:"aujourd'hui",days:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},he:{today:"היום",days:["יום א","יום ב","יום ג","יום ד","יום ה","יום ו","שבת"],months:["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"]},hu:{today:"Ma",days:["V","H","K","Sze","Cs","P","Szo"],months:["január","február","március","április","május","június","július","augusztus","szeptember","október","november","december"]},is:{today:"Í dag",days:["sun.","mán.","þri.","mið.","fim.","fös.","lau."],months:["janúar","febrúar","mars","apríl","maí","júní","júlí","ágúst","september","október","nóvember","desember"]},it:{today:"oggi",days:["dom","lun","mar","mer","gio","ven","sab"],months:["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]},ja:{today:"今日",days:["日","月","火","水","木","金","土"],months:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]},ko:{today:"오늘",days:["일","월","화","수","목","금","토"],months:["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"]},nl:{today:"vandaag",days:["zo","ma","di","wo","do","vr","za"],months:["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"]},no:{today:"i dag",days:["sø","ma","ti","on","to","fr","lø"],months:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},pl:{today:"dzisiaj",days:["N","Pn","Wt","Śr","Cz","Pt","So"],months:["styczeń","luty","marzec","kwiecień","maj","czerwiec","lipiec","sierpień","wrzesień","październik","listopad","grudzień"]},pt:{today:"hoje",days:["dom","seg","ter","qua","qui","sex","sáb"],months:["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},rm:{today:"oz",days:["du","gli","ma","me","gie","ve","so"],months:["schaner","favrer","mars","avrigl","matg","zercladur","fanadur","avust","settember","october","november","december"]},ro:{today:"astăzi",days:["D","L","Ma","Mi","J","V","S"],months:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},ru:{today:"Cегодня",days:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},hr:{today:"danas",days:["ned","pon","uto","sri","čet","pet","sub"],months:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},sk:{today:"dnes",days:["ne","po","ut","st","št","pi","so"],months:["január","február","marec","apríl","máj","jún","júl","august","september","október","november","december"]},sq:{today:"sot",days:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],months:["janar","shkurt","mars","prill","maj","qershor","korrik","gusht","shtator","tetor","nëntor","dhjetor"]},sv:{today:"i dag",days:["sö","må","ti","on","to","fr","lö"],months:["januari","februari","mars","april","maj","juni","juli","augusti","september","oktober","november","december"]},th:{today:"ในวันนี้",days:["อา.","จ.","อ.","พ.","พฤ.","ศ.","ส."],months:["มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"]},tr:{today:"bugün",days:["Paz","Pzt","Sal","Çar","Per","Cum","Cmt"],months:["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"]},ur:{today:"آج",days:["اتوار","پير","منگل","بدھ","جمعرات","جمعه","هفته"],months:["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"]},id:{today:"hari ini",days:["Minggu","Sen","Sel","Rabu","Kamis","Jumat","Sabtu"],months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","Nopember","Desember"]},uk:{today:"сьогодні",days:["Нд","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Січень","Лютий","Березень","Квітень","Травень","Червень","Липень","Серпень","Вересень","Жовтень","Листопад","Грудень"]},be:{today:"сёння",days:["нд","пн","аў","ср","чц","пт","сб"],months:["Студзень","Люты","Сакавік","Красавік","Май","Чэрвень","Ліпень","Жнівень","Верасень","Кастрычнік","Лістапад","Снежань"]},sl:{today:"danes",days:["ned","pon","tor","sre","čet","pet","sob"],months:["januar","februar","marec","april","maj","junij","julij","avgust","september","oktober","november","december"]},et:{today:"täna",days:["P","E","T","K","N","R","L"],months:["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august","september","oktoober","november","detsember"]},lv:{today:"šodien",days:["sv","pr","ot","tr","ce","pk","se"],months:["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris"]},lt:{today:"šiandien",days:["Sk","Pr","An","Tr","Kt","Pn","Št"],months:["sausis","vasaris","kovas","balandis","gegužė","birželis","liepa","rugpjūtis","rugsėjis","spalis","lapkritis","gruodis"]},tg:{today:"имрӯз",days:["Яш","Дш","Сш","Чш","Пш","Ҷм","Шн"],months:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"]},fa:{today:"امروز",days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],months:["جانفييه","فيفرييه","مارس","أفريل","مي","جوان","جوييه","أوت","سبتمبر","اكتوبر","نوفمبر","ديسمبر"]},vi:{today:"hôm nay",days:["CN","Hai","Ba","Tư","Năm","Sáu","Bảy"],months:["Tháng Giêng","Tháng Hai","Tháng Ba","Tháng Tư","Tháng Năm","Tháng Sáu","Tháng Bảy","Tháng Tám","Tháng Chín","Tháng Mười","Tháng Mười Một","Tháng Mười Hai"]},hy:{today:"այսօր",days:["Կիր","Երկ","Երք","Չրք","Հնգ","ՈՒր","Շբթ"],months:["Հունվար","Փետրվար","Մարտ","Ապրիլ","Մայիս","Հունիս","Հուլիս","Օգոստոս","Սեպտեմբեր","Հոկտեմբեր","Նոյեմբեր","Դեկտեմբեր"]},az:{today:"bugün",days:["B","Be","Ça","Ç","Ca","C","Ş"],months:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avgust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},eu:{today:"gaur",days:["ig.","al.","as.","az.","og.","or.","lr."],months:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},hsb:{today:"dźensa",days:["nje","pón","wut","srj","štw","pja","sob"],months:["januar","februar","měrc","apryl","meja","junij","julij","awgust","september","oktober","nowember","december"]},mk:{today:"денес",days:["нед","пон","втр","срд","чет","пет","саб"],months:["јануари","февруари","март","април","мај","јуни","јули","август","септември","октомври","ноември","декември"]},tn:{today:"Gompieno",days:["Ltp.","Mos.","Lbd.","Lbr.","Lbn.","Lbt.","Lmt."],months:["Ferikgong","Tlhakole","Mopitloe","Moranang","Motsheganong","Seetebosigo","Phukwi","Phatwe","Lwetse","Diphalane","Ngwanatsele","Sedimothole"]},xh:{today:"namhlanje",days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Mqungu","Mdumba","Kwindla","Tshazimpuzi","Canzibe","Silimela","Khala","Thupha","Msintsi","Dwarha","Nkanga","Mnga"]},zu:{today:"namhlanje",days:["Son.","Mso.","Bi.","Tha.","Ne.","Hla.","Mgq."],months:["uMasingana","uNhlolanja","uNdasa","uMbaso","uNhlaba","uNhlangulana","uNtulikazi","uNcwaba","uMandulo","uMfumfu","uLwezi","uZibandlela"]},af:{today:"vandag",days:["Son","Maan","Dins","Woen","Dond","Vry","Sat"],months:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},ka:{today:"დღეს",days:["კვირა","ორშაბათი","სამშაბათი","ოთხშაბათი","ხუთშაბათი","პარასკევი","შაბათი"],months:["იანვარი","თებერვალი","მარტი","აპრილი","მაისი","ივნისი","ივლისი","აგვისტო","სექტემბერი","ოქტომბერი","ნოემბერი","დეკემბერი"]},fo:{today:"í dag",days:["sun","mán","týs","mik","hós","frí","leyg"],months:["januar","februar","mars","apríl","mai","juni","juli","august","september","oktober","november","desember"]},hi:{today:"आज",days:["रवि.","सोम.","मंगल.","बुध.","गुरु.","शुक्र.","शनि."],months:["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर"]},mt:{today:"illum",days:["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],months:["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awissu","Settembru","Ottubru","Novembru","Diċembru"]},se:{today:"odne",days:["sotn","vuos","maŋ","gask","duor","bear","láv"],months:["ođđajagemánnu","guovvamánnu","njukčamánnu","cuoŋománnu","miessemánnu","geassemánnu","suoidnemánnu","borgemánnu","čakčamánnu","golggotmánnu","skábmamánnu","juovlamánnu"]},ga:{today:"inniu",days:["Domh","Luan","Máir","Céad","Déar","Aoi","Sath"],months:["Eanáir","Feabhra","Márta","Aibreán","Bealtaine","Meitheamh","Iúil","Lúnasa","Meán Fómhair","Deireadh Fómhair","Samhain","Nollaig"]},ms:{today:"hari ini",days:["Ahad","Isnin","Sel","Rabu","Khamis","Jumaat","Sabtu"],months:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"]},kk:{today:"бүгін",days:["Жк","Дс","Сс","Ср","Бс","Жм","Сн"],months:["қаңтар","ақпан","наурыз","сәуір","мамыр","маусым","шілде","тамыз","қыркүйек","қазан","қараша","желтоқсан"]},ky:{today:"бүгүн",days:["Жш","Дш","Шш","Шр","Бш","Жм","Иш"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},sw:{today:"leo",days:["Jumap.","Jumat.","Juman.","Jumat.","Alh.","Iju.","Jumam."],months:["Januari","Februari","Machi","Aprili","Mei","Juni","Julai","Agosti","Septemba","Oktoba","Novemba","Decemba"]},tk:{today:"bugün",days:["Db","Sb","Çb","Pb","An","Şb","Ýb"],months:["Ýanwar","Fewral","Mart","Aprel","Maý","lýun","lýul","Awgust","Sentýabr","Oktýabr","Noýabr","Dekabr"]},uz:{today:"Bugun",days:["yak.","dsh.","sesh.","chr.","psh.","jm.","sh."],months:["yanvar","fevral","mart","aprel","may","iyun","iyul","avgust","sentyabr","oktyabr","noyabr","dekabr"]},tt:{today:"бүген",days:["Якш","Дүш","Сиш","Чәрш","Пәнҗ","Җом","Шим"],months:["Гыйнвар","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"]},bn:{today:"আজ",days:["রবি.","সোম.","মঙ্গল.","বুধ.","বৃহস্পতি.","শুক্র.","শনি."],months:["জানুয়ারী","ফেব্রুয়ারী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},pa:{today:"ਅੱਜ",days:["ਐਤ.","ਸੋਮ.","ਮੰਗਲ.","ਬੁੱਧ.","ਵੀਰ.","ਸ਼ੁਕਰ.","ਸ਼ਨਿੱਚਰ."],months:["ਜਨਵਰੀ","ਫ਼ਰਵਰੀ","ਮਾਰਚ","ਅਪ੍ਰੈਲ","ਮਈ","ਜੂਨ","ਜੁਲਾਈ","ਅਗਸਤ","ਸਤੰਬਰ","ਅਕਤੂਬਰ","ਨਵੰਬਰ","ਦਸੰਬਰ"]},gu:{today:"આજે",days:["રવિ","સોમ","મંગળ","બુધ","ગુરુ","શુક્ર","શનિ"],months:["જાન્યુઆરી","ફેબ્રુઆરી","માર્ચ","એપ્રિલ","મે","જૂન","જુલાઈ","ઑગસ્ટ","સપ્ટેમ્બર","ઑક્ટ્બર","નવેમ્બર","ડિસેમ્બર"]},or:{today:"ଆଜି",days:["ରବି.","ସୋମ.","ମଙ୍ଗଳ.","ବୁଧ.","ଗୁରୁ.","ଶୁକ୍ର.","ଶନି."],months:["ଜାନୁୟାରୀ","ଫ୍ରେବୃୟାରୀ","ମାର୍ଚ୍ଚ","ଏପ୍ରିଲ୍‌","ମେ","ଜୁନ୍‌","ଜୁଲାଇ","ଅଗଷ୍ଟ","ସେପ୍ଟେମ୍ବର","ଅକ୍ଟୋବର","ନଭେମ୍ବର","(ଡିସେମ୍ବର"]},ta:{today:"இன்று",days:["ஞாயிறு","திங்கள்","செவ்வாய்","புதன்","வியாழன்","வெள்ளி","சனி"],months:["ஜனவரி","பிப்ரவரி","மார்ச்","ஏப்ரல்","மே","ஜூன்","ஜூலை","ஆகஸ்ட்","செப்டம்பர்","அக்டோபர்","நவம்பர்","டிசம்பர்"]},te:{today:"నేడు",days:["ఆది.","సోమ.","మంగళ.","బుధ.","గురు.","శుక్ర.","శని."],months:["జనవరి","ఫిబ్రవరి","మార్చి","ఏప్రిల్","మే","జూన్","జూలై","ఆగస్టు","సెప్టెంబర్","అక్టోబర్","నవంబర్","డిసెంబర్"]},kn:{today:"ಇಂದು",days:["ಭಾನು.","ಸೋಮ.","ಮಂಗಳ.","ಬುಧ.","ಗುರು.","ಶುಕ್ರ.","ಶನಿ."],months:["ಜನವರಿ","ಫೆಬ್ರವರಿ","ಮಾರ್ಚ್","ಎಪ್ರಿಲ್","ಮೇ","ಜೂನ್","ಜುಲೈ","ಆಗಸ್ಟ್","ಸೆಪ್ಟಂಬರ್","ಅಕ್ಟೋಬರ್","ನವೆಂಬರ್","ಡಿಸೆಂಬರ್"]},ml:{today:"ഇന്ന്",days:["ഞായർ.","തിങ്കൾ.","ചൊവ്വ.","ബുധൻ.","വ്യാഴം.","വെള്ളി.","ശനി."],months:["ജനുവരി","ഫെബ്റുവരി","മാറ്ച്ച്","ഏപ്റില്","മെയ്","ജൂണ്","ജൂലൈ","ഓഗസ്ററ്","സെപ്ററംബറ്","ഒക്ടോബറ്","നവംബറ്","ഡിസംബറ്"]},as:{today:"আজি",days:["সোম.","মঙ্গল.","বুধ.","বৃহ.","শুক্র.","শনি.","ৰবি."],months:["জানুৱাৰী","ফেব্রুৱাৰী","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগষ্ট","চেপ্টেম্বর","অক্টোবর","নবেম্বর","ডিচেম্বর"]},mr:{today:"आज",days:["रवि.","सोम.","मंगळ.","बुध.","गुरु.","शुक्र.","शनि."],months:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोव्हेंबर","डिसेंबर"]},sa:{today:"अद्य",days:["रविवासरः","सोमवासरः","मङ्गलवासरः","बुधवासरः","गुरुवासरः","शुक्रवासरः","शनिवासरः"],months:["जनवरी","फरवरी","मार्च","अप्रैल","मई","जून","जुलाई","अगस्त","सितम्बर","अक्तूबर","नवम्बर","दिसम्बर"]},mn:{today:"өнөөдөр",days:["Ня","Да","Мя","Лх","Пү","Ба","Бя"],months:["1 дүгээр сар","2 дугаар сар","3 дугаар сар","4 дүгээр сар","5 дугаар сар","6 дугаар сар","7 дугаар сар","8 дугаар сар","9 дүгээр сар","10 дугаар сар","11 дүгээр сар","12 дугаар сар"]},bo:{today:"ད་རིང",days:["ཉི་མ།","ཟླ་བ།","མིག་དམར།","ལྷག་པ།","ཕུར་བུ།","པ་སངས།","སྤེན་པ།"],months:["སྤྱི་ཟླ་དང་པོ།","སྤྱི་ཟླ་གཉིས་པ།","སྤྱི་ཟླ་གསུམ་པ།","སྤྱི་ཟླ་བཞི་པ།","སྤྱི་ཟླ་ལྔ་པ།","སྤྱི་ཟླ་དྲུག་པ།","སྤྱི་ཟླ་བདུན་པ།","སྤྱི་ཟླ་བརྒྱད་པ།","སྤྱི་ཟླ་དགུ་པ།","སྤྱི་ཟླ་བཅུ་པོ།","སྤྱི་ཟླ་བཅུ་གཅིག་པ།","སྤྱི་ཟླ་བཅུ་གཉིས་པ།"]},cy:{today:"heddiw",days:["Sul","Llun","Maw","Mer","Iau","Gwe","Sad"],months:["Ionawr","Chwefror","Mawrth","Ebrill","Mai","Mehefin","Gorffennaf","Awst","Medi","Hydref","Tachwedd","Rhagfyr"]},km:{today:"ថ្ងៃនេះ",days:["អាទិ.","ច.","អ.","ពុ","ព្រហ.","សុ.","ស."],months:["មករា","កុម្ភៈ","មិនា","មេសា","ឧសភា","មិថុនា","កក្កដា","សីហា","កញ្ញា","តុលា","វិច្ឆិកា","ធ្នូ"]},lo:{today:"ໃນມື້ນີ້",days:["ອາທິດ","ຈັນ","ອັງຄານ","ພຸດ","ພະຫັດ","ສຸກ","ເສົາ"],months:["ມັງກອນ","ກຸມພາ","ມີນາ","ເມສາ","ພຶດສະພາ","ມິຖຸນາ","ກໍລະກົດ","ສິງຫາ","ກັນຍາ","ຕຸລາ","ພະຈິກ","ທັນວາ"]},gl:{today:"hoxe",days:["dom","luns","mar","mér","xov","ven","sáb"],months:["xaneiro","febreiro","marzo","abril","maio","xuño","xullo","agosto","setembro","outubro","novembro","decembro"]},kok:{today:"आजि",days:["आय.","सोम.","मंगळ.","बुध.","बिरे.","सुक्र.","शेन."],months:["जानेवारी","फेब्रुवारी","मार्च","एप्रिल","मे","जून","जुलै","ऑगस्ट","सप्टेंबर","ऑक्टोबर","नोवेम्बर","डिसेंबर"]},syr:{today:"ܝܘܡܐ",days:["܏ܐ ܏ܒܫ","܏ܒ ܏ܒܫ","܏ܓ ܏ܒܫ","܏ܕ ܏ܒܫ","܏ܗ ܏ܒܫ","܏ܥܪܘܒ","܏ܫܒ"],months:["ܟܢܘܢ ܐܚܪܝ","ܫܒܛ","ܐܕܪ","ܢܝܣܢ","ܐܝܪ","ܚܙܝܪܢ","ܬܡܘܙ","ܐܒ","ܐܝܠܘܠ","ܬܫܪܝ ܩܕܝܡ","ܬܫܪܝ ܐܚܪܝ","ܟܢܘܢ ܩܕܝܡ"]},si:{today:"අද",days:["ඉරිදා","සඳුදා","කුජදා","බුදදා","ගුරුදා","කිවිදා","ශනිදා"],months:["ජනවාරි","පෙබරවාරි","මාර්තු","අ‌ප්‍රේල්","මැයි","ජූනි","ජූලි","අ‌ගෝස්තු","සැප්තැම්බර්","ඔක්තෝබර්","නොවැම්බර්","දෙසැම්බර්"]},iu:{today:"ullumi",days:["Nat","Nag","Aip","Pi","Sit","Tal","Siv"],months:["Jaannuari","Viivvuari","Maatsi","Iipuri","Mai","Juuni","Julai","Aaggiisi","Sitipiri","Utupiri","Nuvipiri","Tisipiri"]},am:{today:"ዛሬ",days:["እሑድ","ሰኞ","ማክሰ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],months:["ጃንዩወሪ","ፌብሩወሪ","ማርች","ኤፕረል","ሜይ","ጁን","ጁላይ","ኦገስት","ሴፕቴምበር","ኦክተውበር","ኖቬምበር","ዲሴምበር"]},tzm:{today:"assa",days:["Ace","Ari","Ara","Aha","Amh","Sem","Sed"],months:["Yenayer","Furar","Maghres","Yebrir","Mayu","Yunyu","Yulyu","Ghuct","Cutenber","Ktuber","Wambir","Dujanbir"]},ne:{today:"आज",days:["आइत","सोम","मङ्गल","बुध","बिही","शुक्र","शनि"],months:["जनवरी","फेब्रुअरी","मार्च","अप्रिल","मे","जून","जुलाई","अगस्त","सेप्टेम्बर","अक्टोबर","नोभेम्बर","डिसेम्बर"]},fy:{today:"hjoed",days:["Sn","Mo","Ti","Wo","To","Fr","Sn"],months:["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber"]},ps:{today:"نن ورځ",days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],months:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"]},fil:{today:"ngayon",days:["Lin","Lun","Mar","Mier","Hueb","Bier","Saba"],months:["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Septyembre","Oktubre","Nobyembre","Disyembre"]},dv:{today:"މިއަދު",days:["އާދީއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],months:["މުޙައްރަމް","ޞަފަރު","ރަބީޢުލްއައްވަލް","ރަބީޢުލްއާޚިރު","ޖުމާދަލްއޫލާ","ޖުމާދަލްއާޚިރާ","ރަޖަބް","ޝަޢްބާން","ރަމަޟާން","ޝައްވާލް","ޛުލްޤަޢިދާ","ޛުލްޙިއްޖާ"]},ha:{today:"yau",days:["Lah","Lit","Tal","Lar","Alh","Jum","Asa"],months:["Januwaru","Febreru","Maris","Afrilu","Mayu","Yuni","Yuli","Agusta","Satumba","Oktocba","Nuwamba","Disamba"]},yo:{today:"loni",days:["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],months:["Osu kinni","Osu keji","Osu keta","Osu kerin","Osu karun","Osu kefa","Osu keje","Osu kejo","Osu kesan","Osu kewa","Osu kokanla","Osu keresi"]},quz:{today:"kunan",days:["int","kil","ati","quy","Ch'","Ill","k'u"],months:["Qulla puquy","Hatun puquy","Pauqar waray","ayriwa","Aymuray","Inti raymi","Anta Sitwa","Qhapaq Sitwa","Uma raymi","Kantaray","Ayamarq'a","Kapaq Raymi"]},nso:{today:"Lehono",days:["Lam","Moš","Lbb","Lbr","Lbn","Lbh","Mok"],months:["Pherekgong","Hlakola","Mopitlo","Moranang","Mosegamanye","Ngoatobošego","Phuphu","Phato","Lewedi","Diphalana","Dibatsela","Manthole"]},ba:{today:"бөгөн",days:["Йш","Дш","Шш","Шр","Кс","Йм","Шб"],months:["ғинуар","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"]},lb:{today:"haut",days:["Son","Méi","Dën","Mët","Don","Fre","Sam"],months:["Januar","Februar","Mäerz","Abrëll","Mee","Juni","Juli","August","September","Oktober","November","Dezember"]},kl:{today:"ullumi",days:["sap","ata","mar","ping","sis","tal","arf"],months:["januari","februari","martsi","apriili","maaji","juni","juli","aggusti","septembari","oktobari","novembari","decembari"]},ig:{today:"taa",days:["Aik","Aje","Ise","Ojo","Ojo","Eti","Aba"],months:["Onwa mbu","Onwa ibua","Onwa ato","Onwa ano","Onwa ise","Onwa isi","Onwa asa","Onwa asato","Onwa itolu","Onwa iri","Onwa iri n'ofu","Onwa iri n'ibua"]},ii:{today:"ꀃꑍ",days:["ꑭꆏ","ꆏ꒔","ꆏꑍ","ꆏꌕ","ꆏꇖ","ꆏꉬ","ꆏꃘ"],months:["ꋍꆪ","ꑍꆪ","ꌕꆪ","ꇖꆪ","ꉬꆪ","ꃘꆪ","ꏃꆪ","ꉆꆪ","ꈬꆪ","ꊰꆪ","ꊯꊪꆪ","ꊰꑋꆪ"]},arn:{today:"fachantü",days:["dom","lun","mar","mié","jue","vie","sáb"],months:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},moh:{today:"okàra",days:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["Tsothohrkó:Wa","Enniska","Enniskó:Wa","Onerahtókha","Onerahtohkó:Wa","Ohiari:Ha","Ohiarihkó:Wa","Seskéha","Seskehkó:Wa","Kenténha","Kentenhkó:Wa","Tsothóhrha"]},br:{today:"hiziv",days:["Sul","Lun","Meu.","Mer.","Yaou","Gwe.","Sad."],months:["Genver","C'hwevrer","Meurzh","Ebrel","Mae","Mezheven","Gouere","Eost","Gwengolo","Here","Du","Kerzu"]},ug:{today:"bügün",days:["يە","دۈ","سە","چا","پە","جۈ","شە"],months:["1-ئاي","2-ئاي","3-ئاي","4-ئاي","5-ئاي","6-ئاي","7-ئاي","8-ئاي","9-ئاي","10-ئاي","11-ئاي","12-ئاي"]},mi:{today:"i tenei ra",days:["Ta","Hi","Tū","Apa","Pa","Me","Ho"],months:["Kohi-tātea","Hui-tanguru","Poutū-te-rangi","Paenga-whāwhā","Haratua","Pipiri","Hōngongoi","Here-turi-kōkā","Mahuru","Whiringa-ā-nuku","Whiringa-ā-rangi","Hakihea"]},oc:{today:"uèi",days:["dim.","lun.","mar.","mèc.","jòu.","ven.","sab."],months:["genier","febrier","març","abril","mai","junh","julh","agost","setembre","octobre","novembre","desembre"]},co:{today:"oghje",days:["dum.","lun.","mar.","mer.","ghj.","ven.","sab."],months:["ghjennaghju","ferraghju","marzu","aprile","maghju","ghjunghju","lugliu","aostu","settembre","ottobre","nuvembre","dicembre"]},gsw:{today:"heit",days:["Su.","Mo.","Di.","Mi.","Du.","Fr.","Sà."],months:["Jänner","Feverje","März","Àpril","Mai","Jüni","Jüli","Augscht","September","Oktower","Nowember","Dezember"]},sah:{today:"bügün",days:["Бс","Бн","Оп","Ср","Чп","Бт","Сб"],months:["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы"]},qut:{today:"[kamik]",days:["juq","kaq","oxq","kajq","joq","waqq","wuqq"],months:["nab'e ik'","ukab' ik'","rox ik'","ukaj ik'","uro' ik'","uwaq ik'","uwuq ik'","uwajxaq ik'","ub'elej ik'","ulaj ik'","ujulaj ik'","ukab'laj ik'"]},rw:{today:"uyu munsi",days:["mbe.","kab.","gat.","kan.","gat.","gat.","cyu."],months:["Mutarama","Gashyantare","Werurwe","Mata","Gicurasi","Kamena","Nyakanga","Kanama","Nzeli","Ukwakira","Ugushyingo","Ukuboza"]},wo:{today:"tey",days:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],months:["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"]},prs:{today:"امروز",days:["الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],months:["محرم","صفر","ربيع الأول","ربيع الثاني","جمادى الأولى","جمادى الثانية","رجب","شعبان","رمضان","شوال","ذو القعدة","ذو الحجة"]},gd:{today:"an-diugh",days:["Dòm","Lua","Mài","Cia","Ard","Hao","Sat"],months:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]},smn:{today:"onne",days:["pa","vu","ma","ko","tu","vá","lá"],months:["uđđâivemáánu","kuovâmáánu","njuhčâmáánu","cuáŋuimáánu","vyesimáánu","kesimáánu","syeinimáánu","porgemáánu","čohčâmáánu","roovvâdmáánu","skammâmáánu","juovlâmáánu"]},sms:{today:"pei ́vv",days:["pâ","vu","mâ","se","ne","pi","su"],months:["ođđee´jjmään","tä´lvvmään","pâ´zzlâšttammään","njuhččmään","vue´ssmään","ǩie´ssmään","suei´nnmään","på´rǧǧmään","čõhččmään","kålggmään","skamm´mään","rosttovmään"]},zh:{days:["星期天","星期一","星期二","星期三","星期四","星期五","星期六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今天"},"zh-hans":{days:["周日","周一","周二","周三","周四","周五","周六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今天"},"zh-hant":{days:["週日","週一","週二","週三","週四","週五","週六"],months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],today:"今天"},nn:{today:"i dag",days:["sø","må","ty","on","to","fr","la"],months:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},bs:{today:"danas",days:["ned","pon","uto","sri","čet","pet","sub"],months:["januar","februar","mart","april","maj","juni","juli","avgust","septembar","oktobar","novembar","decembar"]},sma:{today:"daenbiejjien",days:["aej","måa","dæj","gask","duar","bearj","laav"],months:["tsïengele","goevte","njoktje","voerhtje","suehpede","ruffie","snjaltje","mïetske","skïerede","golke","rahka","goeve"]},nb:{today:"i dag",days:["sø","ma","ti","on","to","fr","lø"],months:["januar","februar","mars","april","mai","juni","juli","august","september","oktober","november","desember"]},sr:{today:"данас",days:["ned","pon","uto","sre","čet","pet","sub"],months:["januar","februar","mart","april","maj","jun","jul","avgust","septembar","oktobar","novembar","decembar"]},dsb:{today:"źinsa",days:["nje","pon","wał","srj","stw","pět","sob"],months:["januar","februar","měrc","apryl","maj","junij","julij","awgust","september","oktober","nowember","december"]},smj:{today:"uddni",days:["ájl","mán","dis","gas","duor","bier","láv"],months:["ådåjakmánno","guovvamánno","sjnjuktjamánno","vuoratjismánno","moarmesmánno","biehtsemánno","sjnjilltjamánno","bårggemánno","ragátmánno","gålgådismánno","basádismánno","javllamánno"]}},a=function(e){const t=[["D. M. Y","_dsb_dsb-de_hsb_hsb-de_sk_sk-sk_"],["D.M.Y","_az_az-cyrl_az-cyrl-az_az-latn_az-latn-az_ba_ba-ru_be_be-by_bs_bs-cyrl_bs-cyrl-ba_bs-latn_bs-latn-ba_cs_cs-cz_de_de-at_de-ch_de-de_de-li_de-lu_et_et-ee_fi_fi-fi_fr-ch_hy_hy-am_is_is-is_it-ch_ka_ka-ge_kk_kk-kz_ky_ky-kg_mk_mk-mk_nb_nb-no_nn_nn-no_no_ro_ro-ro_ru_ru-ru_se_se-fi_se-no_sl_sl-si_sma-no_smj-no_smn_smn-fi_sms_sms-fi_sr_sr-cyrl_sr-cyrl-ba_sr-cyrl-cs_sr-cyrl-me_sr-cyrl-rs_sr-latn_sr-latn-ba_sr-latn-cs_sr-latn-me_sr-latn-rs_sv-fi_tg_tg-cyrl_tg-cyrl-tj_tk_tk-tm_tr_tr-tr_tt_tt-ru_uk_uk-ua_uz-cyrl_uz-cyrl-uz_"],["D.M.Y 'г.'","_bg_bg-bg_"],["D.M.Y.","_hr_hr-ba_hr-hr_"],["D/M Y","_uz_uz-latn_uz-latn-uz_"],["D/M/Y","_am_am-et_ar_ar-ae_ar-bh_ar-eg_ar-iq_ar-jo_ar-kw_ar-lb_ar-ly_ar-om_ar-qa_ar-sa_ar-sy_ar-ye_br_br-fr_ca_ca-es_co_co-fr_cy_cy-gb_dv_dv-mv_el_el-gr_en-au_en-bz_en-ca_en-gb_en-ie_en-jm_en-my_en-nz_en-sg_en-tt_es_es-ar_es-bo_es-co_es-cr_es-do_es-ec_es-es_es-gt_es-hn_es-mx_es-ni_es-pe_es-pr_es-py_es-sv_es-uy_es-ve_fr_fr-be_fr-fr_fr-lu_fr-mc_ga_ga-ie_gd_gd-gb_gl_gl-es_gsw_gsw-fr_ha_ha-latn_ha-latn-ng_he_he-il_id_id-id_ig_ig-ng_it_it-it_iu_iu-cans_iu-cans-ca_iu-latn_iu-latn-ca_lb_lb-lu_lo_lo-la_mi_mi-nz_ms_ms-bn_ms-my_mt_mt-mt_nl-be_oc_oc-fr_prs_prs-af_ps_ps-af_pt_pt-br_qut_qut-gt_quz_quz-bo_quz-ec_quz-pe_rm_rm-ch_syr_syr-sy_th_th-th_ur_ur-pk_vi_vi-vn_wo_wo-sn_yo_yo-ng_zh-cht_zh-hant_zh-hk_zh-mo_zh-sg_"],["D-M-Y","_ar-dz_ar-ma_arn_arn-cl_ar-tn_as_as-in_bn_bn-bd_bn-in_da_da-dk_en-in_es-cl_fo_fo-fo_fy_fy-nl_gu_gu-in_hi_hi-in_kl_kl-gl_kn_kn-in_kok_kok-in_ml_ml-in_mr_mr-in_nl_nl-nl_or_or-in_pa_pa-in_pt-pt_sa_sa-in_ta_ta-in_te_te-in_tzm_tzm-latn_tzm-latn-dz_"],["M.D.Y","_sah_sah-ru_"],["M/D/Y","_en_en-029_en-ph_en-us_en-zw_es-pa_es-us_fa_fa-ir_fil_fil-ph_moh_moh-ca_ne_ne-np_rw_rw-rw_sw_sw-ke_"],["Y.M.D","_lt_lt-lt_mn_mn-cyrl_mn-mn_"],["Y.M.D.","_hu_hu-hu_lv_lv-lv_"],["Y/M/D","_af_af-za_bo_bo-cn_en-za_eu_eu-es_ii_ii-cn_ja_ja-jp_mn-mong_mn-mong-cn_nso_nso-za_tn_tn-za_xh_xh-za_zh_zh-chs_zh-cn_zh-hans_zh-tw_zu_zu-za_"],["Y-M-D","_fr-ca_km_km-kh_ko_ko-kr_pl_pl-pl_se-se_si_si-lk_sma_sma-se_smj_smj-se_sq_sq-al_sv_sv-se_ug_ug-cn_"]];for(let a=0;a<e.length;++a){const n="_"+e[a]+"_",o=t.find(e=>e[1].includes(n));if(o)return{locale:e[a],format:o[0],parser:i(o[0])};const r=s(e[a]);r&&e.push(r)}return{locale:"en",format:"Y-M-D",parseLocale:i("Y-M-D")}}(e);let n,o=a.locale;for(;!(n=t[o]);)o=s(o);return n||(n=t.en),Object.assign(a,n)}n.instance=null;class r{constructor(e){this._dict={},this._keySelector=e}add(e){const t=this._keySelector(e);Object.prototype.hasOwnProperty.call(this._dict,t)?this._dict[t].push(e):this._dict[t]=[e]}get(e){return this._dict[e]||[]}}const l=/^\d{4}-\d{2}-\d{2}$/;class u{constructor(a){this.element=a,this.element.setAttribute(e,""),this.element.setAttribute("autocomplete","off"),t&&(this.element.type="date-polyfill"),this.setLocaleText(function(e,t){do{if(t in e)return e[t];e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}(this.element,"lang")),this.element.placeholder||(this.element.placeholder=this.localeText.format.replace("M","mm").replace("D","dd").replace("Y","yyyy")),this.element.pattern=this.localeText.parser.pattern;let s=Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.element),"value");null===s&&(s={get:()=>this.element.getAttribute("value")||"",set:e=>this.element.setAttribute("value",e)},console.log("esm-date-input-polyfill: unable to obtain native input[type=date] .value propertyDescriptor")),Object.defineProperties(this.element,{textValue:{get:s.get,set:s.set},value:{get:()=>this.element._datePolyfillVal?new Date(this.element._datePolyfillVal).toISOString().slice(0,10):"",set:e=>this.element.valueAsDate=e&&l.test(e)?new Date(e):null},valueAsDate:{get:()=>this.element._datePolyfillVal?new Date(this.element._datePolyfillVal):null,set:e=>{e&&e.getTime&&!Number.isNaN(this.element._datePolyfillVal=e.getTime())?this.element.textValue=this.toLocaleDateString(e):(this.element.textValue="",this.element._datePolyfillVal=void 0),this.validate()}},valueAsNumber:{get:()=>void 0===this.element._datePolyfillVal?NaN:this.element._datePolyfillVal,set:e=>this.element.valueAsDate=new Date(e)},min:{get:()=>this.element.getAttribute("min"),set:e=>l.test(e)?this.element.setAttribute("min",e):this.element.removeAttribute("min")},max:{get:()=>this.element.getAttribute("max"),set:e=>l.test(e)?this.element.setAttribute("max",e):this.element.removeAttribute("max")}}),this.element.setCustomValidity||(console.log("HTMLElement.setCustomValidity not supported"),this.element.setCustomValidity=()=>{}),this.element.value=this.element.getAttribute("value");const i=()=>n.instance.attachTo(this),o={passive:!0};this.element.addEventListener("focus",i,o),this.element.addEventListener("mousedown",i,o),this.element.addEventListener("mouseup",i,o),this.element.addEventListener("keydown",e=>{let t=this.element.valueAsDate,a=!0,s=!1;switch(e.keyCode){case 9:case 13:case 27:n.instance.hide(),a=!1;break;case 38:null===t&&(t=new Date),t.setDate(t.getDate()+1),this.element.valueAsDate=t;break;case 40:null===t&&(t=new Date),t.setDate(t.getDate()-1),this.element.valueAsDate=t;break;default:s=!0}if(a)if(s){const e=this;setTimeout(()=>{const t=e.localeText.parser.parse(e.element.textValue);t&&t.setTime(t.getTime()-6e4*t.getTimezoneOffset()),+t!=+e.element.valueAsDate&&(e.element.valueAsDate=t,n.instance.pingInput(),n.instance.sync())},1)}else n.instance.pingInput(),n.instance.sync()},o)}validate(){if(this.element._datePolyfillVal){let e=new Date(this.element.min||NaN),t=new Date(this.element.max||NaN);if(this.element._datePolyfillVal<e.getTime())return this.element.setCustomValidity("≥ "+this.toLocaleDateString(e)),!1;if(this.element._datePolyfillVal>t.getTime())return this.element.setCustomValidity("≤ "+this.toLocaleDateString(t)),!1}return this.element.setCustomValidity(""),!0}setLocaleText(e){let t=(window.navigator.languages?window.navigator.languages:[window.navigator.userLanguage||window.navigator.language]).map(e=>e.toLowerCase());if(e){e=e.match(/^[a-z]+/)[0].toLowerCase();const a=new r(t=>t.startsWith(e));t.forEach(e=>a.add(e)),t=a.get(!0).concat(a.get(!1))}const a=o(t);this.locale=a.locale,this.localeText=a}toLocaleDateString(e){const t=e.toISOString().slice(0,10).split("-");return this.localeText.format.replace("Y",t[0]).replace("M",t[1]).replace("D",t[2])}}function m({watchForInsert:e=!1,allowForcePicker:t=!1,yrsBack:s=80,yrsFwd:i=20}={}){n.instance=new n({yrsBack:s,yrsFwd:i});const o=new a({allowForcePicker:t});if(o.getAllInputsForPolyfilling().forEach(e=>new u(e)),e){const e=new MutationObserver(e=>e.forEach(e=>{"childList"===e.type&&e.addedNodes.forEach(e=>{if(e.nodeType===Node.ELEMENT_NODE){const t=Array.from(e.querySelectorAll("input[type=date]"));t.push(e),t.forEach(e=>{o.requiresPolyfilling(e)&&new u(e)})}})})),t=()=>e.observe(document.body,{childList:!0,attributes:!1,subtree:!0});n.instance.onBeforeOpen(()=>{e.disconnect(),setTimeout(t,100)}),t()}}export{m as addPickers};
//# sourceMappingURL=add-pickers-dd4f5f85.mjs.map
