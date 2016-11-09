// Localizations for UI text.
// Keys correspond to applicable `lang` values, delimited by an underscore.
// Days and months must be listed in the order they should display.

const locales = {
  'en_en-US': {
    days: [
      `Sun`,
      `Mon`,
      `Tue`,
      `Wed`,
      `Thu`,
      `Fri`,
      `Sat`
    ],
    months: [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`
    ],
    today: `Today`,
    format: `M/D/Y`
  },
  'en-GB': {
    days: [
      `Sun`,
      `Mon`,
      `Tue`,
      `Wed`,
      `Thu`,
      `Fri`,
      `Sat`
    ],
    months: [
      `January`,
      `February`,
      `March`,
      `April`,
      `May`,
      `June`,
      `July`,
      `August`,
      `September`,
      `October`,
      `November`,
      `December`
    ],
    today: `Today`,
    format: `D/M/Y`
  },
  /* Simplified Chinese */
  'zh_zh-CN': {
    days: [
      `星期天`,
      `星期一`,
      `星期二`,
      `星期三`,
      `星期四`,
      `星期五`,
      `星期六`
    ],
    months: [
      `一月`,
      `二月`,
      `三月`,
      `四月`,
      `五月`,
      `六月`,
      `七月`,
      `八月`,
      `九月`,
      `十月`,
      `十一月`,
      `十二月`
    ],
    today: `今天`,
    format: `Y/M/D`
  },
  /* Simplified Chinese, informal*/
  'zh-Hans_zh-Hans-CN': {
    days: [
      `周日`,
      `周一`,
      `周二`,
      `周三`,
      `周四`,
      `周五`,
      `周六`
    ],
    months: [
      `一月`,
      `二月`,
      `三月`,
      `四月`,
      `五月`,
      `六月`,
      `七月`,
      `八月`,
      `九月`,
      `十月`,
      `十一月`,
      `十二月`
    ],
    today: `今天`,
    format: `Y/M/D`
  },
  /* Traditional Chinese */
  'zh-Hant_zh-Hant-TW': {
    days: [
      `週日`,
      `週一`,
      `週二`,
      `週三`,
      `週四`,
      `週五`,
      `週六`
    ],
    months: [
      `一月`,
      `二月`,
      `三月`,
      `四月`,
      `五月`,
      `六月`,
      `七月`,
      `八月`,
      `九月`,
      `十月`,
      `十一月`,
      `十二月`
    ],
    today: `今天`,
    format: `Y/M/D`
  },
  /* German (Germany) */
  'de_de-DE': {
    days: [
      `So`,
      `Mo`,
      `Di`,
      `Mi`,
      `Do`,
      `Fr`,
      `Sa`
    ],
    months: [
      `Januar`,
      `Februar`,
      `März`,
      `April`,
      `Mai`,
      `Juni`,
      `Juli`,
      `August`,
      `September`,
      `Oktober`,
      `November`,
      `Dezember`
    ],
    today: `Heute`,
    format: `D.M.Y`
  },
  /* Danish */
  'da_da-DA': {
    days: [
      `Søn`,
      `Man`,
      `Tirs`,
      `Ons`,
      `Tors`,
      `Fre`,
      `Lør`
    ],
    months: [
      `Januar`,
      `Februar`,
      `Marts`,
      `April`,
      `Maj`,
      `Juni`,
      `Juli`,
      `August`,
      `September`,
      `Oktober`,
      `November`,
      `December`
    ],
    today: `I dag`,
    format: `D/M/Y`
  },
  /* Spanish */
  'es': {
    days: [
      `Dom`,
      `Lun`,
      `Mar`,
      `Mié`,
      `Jue`,
      `Vie`,
      `Sáb`
    ],
    months: [
      `Enero`,
      `Febrero`,
      `Marzo`,
      `Abril`,
      `Mayo`,
      `Junio`,
      `Julio`,
      `Agosto`,
      `Septiembre`,
      `Octubre`,
      `Noviembre`,
      `Diciembre`
    ],
    today: `Hoy`,
    format: `D/M/Y`
  },
  /* Hindi */
  'hi': {
    days: [
      `रवि`,
      `सोम`,
      `मंगल`,
      `बुध`,
      `गुरु`,
      `शुक्र`,
      `शनि`
    ],
    months: [
      `जनवरी`,
      `फरवरी`,
      `मार्च`,
      `अप्रेल`,
      `मै`,
      `जून`,
      `जूलाई`,
      `अगस्त`,
      `सितम्बर`,
      `आक्टोबर`,
      `नवम्बर`,
      `दिसम्बर`
    ],
    today: `आज`,
    format: `D/M/Y`
  },
  /* Portuguese */
  'pt': {
    days: [
      `Dom`,
      `Seg`,
      `Ter`,
      `Qua`,
      `Qui`,
      `Sex`,
      `Sáb`
    ],
    months: [
      `Janeiro`,
      `Fevereiro`,
      `Março`,
      `Abril`,
      `Maio`,
      `Junho`,
      `Julho`,
      `Agosto`,
      `Setembro`,
      `Outubro`,
      `Novembro`,
      `Dezembro`
    ],
    today: `Hoje`,
    format: `D/M/Y`
  },
  /* Japanese */
  'ja': {
    days: [
      `日曜日`,
      `月曜日`,
      `火曜日`,
      `水曜日`,
      `木曜日`,
      `金曜日`,
      `土曜日`
    ],
    months: [
      `一月`,
      `二月`,
      `三月`,
      `四月`,
      `五月`,
      `六月`,
      `七月`,
      `八月`,
      `九月`,
      `十月`,
      `十一月`,
      `十二月`
    ],
    today: `今日`,
    format: `Y/M/D`
  },
  /* Dutch */
  'nl_nl-NL_nl-BE': {
    days: [
      `Zondag`,
      `Maandag`,
      `Dinsdag`,
      `Woensdag`,
      `Donderdag`,
      `Vrijdag`,
      `Zaterdag`
    ],
    months: [
      `Januari`,
      `Februari`,
      `Maart`,
      `April`,
      `Mei`,
      `Juni`,
      `Juli`,
      `Augustus`,
      `September`,
      `Oktober`,
      `November`,
      `December`
    ],
    today: `Vandaag`,
    format: `D/M/Y`
  },
  /* Turkish */
  'tr_tr-TR': {
    days: [
      `Pzr`,
      `Pzt`,
      `Sal`,
      `Çrş`,
      `Prş`,
      `Cum`,
      `Cmt`
    ],
    months: [
      `Ocak`,
      `Şubat`,
      `Mart`,
      `Nisan`,
      `Mayıs`,
      `Haziran`,
      `Temmuz`,
      `Ağustos`,
      `Eylül`,
      `Ekim`,
      `Kasım`,
      `Aralık`
    ],
    today: `Bugün`,
    format: `D/M/Y`
  }
};

export default locales;
