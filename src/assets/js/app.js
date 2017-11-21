
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

window.jQuery = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

import flatpickr from 'flatpickr';
import { Spanish } from "flatpickr/dist/l10n/es.js";

flatpickr(".flatpickr", {
	"locale": Spanish // locale for this instance only
});

// Components
import './components/detect-ie';
import './components/detect-ios';
import './components/select';
import './components/open-content';
import './components/input-text';
import './components/modal';
import './components/validate-form';
import './components/tabs-banner';

import './lib/foundation-explicit-pieces';
import './lib/select';
import './lib/parsley';
import './lib/test-accord';



$(document).foundation();