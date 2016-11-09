# nodep-date-input-polyfill

Just include this simple script and IE, Firefox, and macOS Safari will support `<input type="date">`, without any dependencies, not even jQuery!

Support dynamically created inputs, so can be used in single page applications.

Forked from [html5-simple-date-input-polyfill](https://www.npmjs.com/package/html5-simple-date-input-polyfill). Continuing as a separate project.

## Demo

[Try it in IE, Firefox, and macOS Safari.](https://brianblakely.github.io/nodep-date-input-polyfill/)

## Install

### NPM

`npm install --save nodep-date-input-polyfill`

Add to your project:

* **Webpack/Browserify:** `require('nodep-date-input-polyfill');`

    or alongside **Babel:** `import 'nodep-date-input-polyfill';`

* **Script Tag:** Copy `nodep-date-input-polyfill.dist.js` from `node_modules` and
include it anywhere in your HTML.

* This package also supports **AMD**.

### Bower

`bower install nodep-date-input-polyfill`

## Features
* **Easily Stylable:** [These are the default styles](https://github.com/brianblakely/nodep-date-input-polyfill/blob/master/nodep-date-input-polyfill.scss),
which you may override with your own.

* **Polyfills `valueAsDate` and `valueAsNumber`:**
[Learn more about these properties.](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#property-valueasdate)
They behave as getters and setters.

* **Keyboard Shortcuts:** `Esc` will hide the datepicker. `Up/Down` will
increment/decrement the date by one day.

* **Localization:** Specify the datepicker's locale by setting the
`lang` attribute of the `<input>` or any of its parent nodes.

    `<input type="date" lang="en" />`

    `<body lang="en">`

    The default locale is `en`.

    The rendered date format will automatically adhere to the given locale.

    Currently supported locales include English, Chinese (Simplified / Simplified Informal / Traditional), Japanese, Spanish, Portuguese, Hindi, German, Dutch, Danish, and Turkish.

## Usage Notes

`getAttribute` and `setAttribute` will only reflect the input's text content.

In order to work with the input's underlying value, you must get/set its
`value`, `valueAsDate`, or `valueAsNumber` properties.

Per the native implementation, polyfilled date inputs will only accept
values in the format `yyyy-MM-dd`.

## Contributing

### Local Development
Run `npm start` or, for Cloud9 IDE users: `npm run start-c9`

### Build
Run `npm run build`

### Localization
Please submit PRs with new localizations! Open `locales.js` to add more.  File an issue on GitHub if anything is unclear.
