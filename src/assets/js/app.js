
import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// Components
import './components/select';
import './components/open-content';
import './components/input-text';
import './components/modal';
import './components/validate-form';

import './lib/foundation-explicit-pieces';
import './lib/select';
import './lib/parsley';



$(document).foundation();