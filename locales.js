// Localizations for UI text.
// Keys correspond to applicable `lang` values, delimited by an underscore.
// Days and months must be listed in the order they should display.

const locales = {
  'en_en-US_en-UK': {
    days: [
      `Su`,
      `Mo`,
      `Tu`,
      `We`,
      `Th`,
      `Fr`,
      `Sa`
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
    ]
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
    ]
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
    ]
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
    ]
  },
  /* German (Germany) */
  'de_de-DE': {
    days: [
      `Sonntag`,
      `Montag`,
      `Dienstag`,
      `Mittwoch`,
      `Donnerstag`,
      `Freitag`,
      `Samstag`
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
    ]
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
  /* Portuguese */
  'pt_pt-BR': {
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
    today: "Hoje"
  },
  /* French */
  'fr_fr-FR_fr-BE': {
    days: [
      `Di`,
      `Lu`,
      `Ma`,
      `Me`,
      `Je`,
      `Ve`,
      `Sa`
    ],
    months: [
      `Janvier`,
      `Février`,
      `Mars`,
      `Avril`,
      `Mai`,
      `Juin`,
      `Juillet`,
      `Août`,
      `Septembre`,
      `Octobre`,
      `Novembre`,
      `Décembre`
    ],
    today: `Aujourd'hui`,
    format: `D/M/Y`
  },
  /* Spanish */
  'es_es-VE': {
    days: [
      `Do`,
      `Lu`,
      `Ma`,
      `Mi`,
      `Ju`,
      `Vi`,
      `Sa`
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
  /* Danish */
  'da_da-dk': {
    days: [
      `Søndag`,
      `Mandag`,
      `Tirsdag`,
      `Onsdag`,
      `Torsdag`,
      `Fredag`,
      `Lørdag`
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
    format: `dd/MM-YYYY`
  },
  /* Russian */
  'ru_ru-RU_ru-UA_ru-KZ_ru-MD': {
    days: [
      `Вс`,
      `Пн`,
      `Вт`,
      `Ср`,
      `Чт`,
      `Пт`,
      `Сб`
    ],
    months: [
      `Январь`,
      `Февраль`,
      `Март`,
      `Апрель`,
      `Май`,
      `Июнь`,
      `Июль`,
      `Август`,
      `Сентябрь`,
      `Октябрь`,
      `Ноябрь`,
      `Декабрь`
    ],
    today: `Сегодня`,
    format: `D.M.Y`
  },
  /* Ukrainian */
  'uk_uk-UA': {
    days: [
      `Нд`,
      `Пн`,
      `Вт`,
      `Ср`,
      `Чт`,
      `Пт`,
      `Сб`
    ],
    months: [
      `Січень`,
      `Лютий`,
      `Березень`,
      `Квітень`,
      `Травень`,
      `Червень`,
      `Липень`,
      `Серпень`,
      `Вересень`,
      `Жовтень`,
      `Листопад`,
      `Грудень`
    ],
    today: `Cьогодні`,
    format: `D.M.Y`
  },
  /* Swedish (Sweden) */
    'sv_sv-SE': {
        days: [
            `Söndag`,
            `Måndag`,
            `Tisdag`,
            `Onsdag`,
            `Torsdag`,
            `Fredag`,
            `Lördag`
        ],
        months: [
            `Januari`,
            `Februari`,
            `Mars`,
            `April`,
            `Maj`,
            `Juni`,
            `Juli`,
            `Augusti`,
            `September`,
            `Oktober`,
            `November`,
            `December`
        ],
        today: `Idag`,
        format: `YYYY-MM-dd`
    },
  'test_test-TEST': {
    days: [
      `Foo`,
      `Mon`,
      `Tue`,
      `Wed`,
      `Thu`,
      `Fri`,
      `Sat`
    ],
    months: [
      `Foo`,
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
    ]
  },
  'ja': {
    days: [
      `日`,
      `月`,
      `火`,
      `水`,
      `木`,
      `金`,
      `土`
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
    format: `YYYY-MM-dd`
  },
  /* Italian */
  'it': {
    days: [
      `Dom`,
      `Lun`,
      `Mar`,
      `Mer`,
      `Gio`,
      `Ven`,
      `Sab`
    ],
    months: [
      `Gennaio`,
      `Febbraio`,
      `Marzo`,
      `Aprile`,
      `Maggio`,
      `Giugno`,
      `Luglio`,
      `Agosto`,
      `Settembre`,
      `Ottobre`,
      `Novembre`,
      `Dicembre`
    ],
    today: `Oggi`,
    format: `dd/MM/YYYY`
  },  
};

export default locales;
