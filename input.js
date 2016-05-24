import thePicker from './picker.js';
import locales from './locales.js';
import dateFormat from './dateformat.js';

export default class Input {
  constructor(input) {
    this.element = input;
    this.element.setAttribute(`data-has-picker`, ``);

    this.locale =
      this.element.getAttribute(`lang`)
      || document.body.getAttribute(`lang`)
      || `en`;

    this.format =
      this.element.getAttribute(`date-format`)
      || document.body.getAttribute(`date-format`)
      || `yyyy-mm-dd`;

    this.localeText = this.getLocaleText();

    Object.defineProperties(
      this.element,
      {
        'valueAsDate': {
          get: ()=> {
            if(!this.element.value) {
              return null;
            }

            return new Date(Date.parse(this.element.value));
          },
          set: val=> {
            this.element.value = dateFormat(val, this.format);
          }
        },
        'valueAsNumber': {
          get: ()=> {
            if(!this.element.value) {
              return NaN;
            }

            return this.element.valueAsDate.valueOf();
          },
          set: val=> {
            this.element.valueAsDate = new Date(val);
          }
        }
      }
    );

    // Open the picker when the input get focus,
    // also on various click events to capture it in all corner cases.
    const showPicker = ()=> {
      thePicker.attachTo(this.element, this.localeText);
    };
    this.element.addEventListener(`focus`, showPicker);
    this.element.addEventListener(`mousedown`, showPicker);
    this.element.addEventListener(`mouseup`, showPicker);

    // Update the picker if the date changed manually in the input.
    this.element.addEventListener(`keydown`, e=> {
      const date = new Date();

      switch(e.keyCode) {
        case 27:
          thePicker.hide();
          break;
        case 38:
          if(this.element.valueAsDate) {
            date.setDate(this.element.valueAsDate.getDate() + 1);
            this.element.valueAsDate = date;
            thePicker.pingInput();
          }
          break;
        case 40:
          if(this.element.valueAsDate) {
            date.setDate(this.element.valueAsDate.getDate() - 1);
            this.element.valueAsDate = date;
            thePicker.pingInput();
          }
          break;
        default:
          break;
      }

      thePicker.sync();
    });
  }

  getLocaleText() {
    const locale = this.locale.toLowerCase();

    for(const localeSet in locales) {
      const localeList = localeSet.split(`_`);
      localeList.map(el=>el.toLowerCase());

      if(
        !!~localeList.indexOf(locale)
        || !!~localeList.indexOf(locale.substr(0,2))
      ) {
        return locales[localeSet];
      }
    }
  }

  // Return false if the browser does not support input[type="date"].
  static supportsDateInput() {
    const input = document.createElement(`input`);
    input.setAttribute(`type`, `date`);

    const notADateValue = `not-a-date`;
    input.setAttribute(`value`, notADateValue);

    return !(input.value === notADateValue);
  }

  // Will add the Picker to all inputs in the page.
  static addPickerToDateInputs() {
    // Get and loop all the input[type="date"]s in the page that do not have `[data-has-picker]` yet.
    const dateInputs = document.querySelectorAll(`input[type="date"]:not([data-has-picker])`);
    const length = dateInputs.length;

    if(!length) {
      return false;
    }

    for(let i = 0; i < length; ++i) {
      new Input(dateInputs[i]);
    }
  }
}
