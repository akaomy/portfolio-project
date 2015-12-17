var myModule = ( function() {

	// module initialization
	var init = function() {
		_setUpListeners();
	};
	
	// event listener
	var _setUpListeners = function() {
		$(".add-project-bg").on('click', _showModal); //open modal window
	};

	// modal window
	var _showModal = function(event) {
		// console.log('show modal window');
		event.preventDefault(); //disable default actions

		var divPopup = $('.project-popup-window'),
			form = divPopup.find('.popup-form');

		divPopup.bPopup({
			speed: 650,
			transition: 'slideDown',
		});
	};

	// return object (pubic methods)
	return { 
		init: init
	};
		
}) ();

myModule.init();       


// upload project
$('.file-upload').change(function(e){
	var value = $(this).val();
  	$('.input-field').attr("placeholder", value);
});















