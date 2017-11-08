import $ from 'jquery';
import './../lib/parsley';

$('.formValidateChange').parsley({
  trigger: 'change',
  successClass: "field-success",
  errorClass: "field-error",
  classHandler: function (el) {
		return el.$element.closest('.fieldParent'); //working
  }
});

$('.formValidateInput').parsley({
  trigger: 'input',
  successClass: "field-success",
  errorClass: "field-error",
  classHandler: function (el) {
		return el.$element.closest('.fieldParent'); //working
  }
});