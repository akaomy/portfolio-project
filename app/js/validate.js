;$(document).ready(function() {
		
	validation = (function (){

		var init = function(){
				_setUpListners();
			},
			validateForm = function (form) { 
				var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"], input[type="checkbox"]'),
					valid = true;

				$.each(elements, function(index, val) {
					var element = $(val),
						val = element.val(),
						pos = element.attr('qtip-position');

					if(val.length === 0){
						element.addClass('has-error');
						_createQtip(element, pos);
						valid = false;
					}

				}); 
				return valid;
			},
			_setUpListners = function () { 
				$('form').on('keydown', '.has-error', _removeError);
				$('form').on('reset', function() {
					clearForm($('form'));
				});
			},
			_removeError = function() { 
				$(this).removeClass('has-error');
			},
			clearForm = function(form) { 
				form.find('.input, .textarea').trigger('hideTooltip'); 
				form.find('.has-error').removeClass('has-error'); 
				form.find('.error-mes, success-mes').text('').hide(); 
			},

			//creates tooltip
			_createQtip = function (element, position) { 
				if (position === 'right') {
					position = {
						my: 'left center',
						at: 'right center'
					}
				}
				else {
					position = {
						my: 'right center',
						at: 'left center',
						adjust: {
						method: 'shift none'
						}
					}
				}

				element.qtip({
					content: {
						text: function() {
						return $(this).attr('qtip-content');
						}
					},
					show: {
						event: 'show'
					},
					hide: {
						event: 'keydown hideTooltip'
					},
					position: position,
					style: {
						classes: 'qtip-mystyle qtip-rounded',
						tip: {
						height: 14,
						width: 20
						}
					}
				}).trigger('show');
			};

		return {
			init: init,
			validateForm: validateForm,
			clearForm: clearForm
		};

	})();

	validation.init();
	$('form').submit(function(event) {
		if (!validation.validateForm($('form'))) {
			event.preventDefault();
		}
	});
});