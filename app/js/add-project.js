var myModule = ( function(){
	var init = function() {
		_setUpListeners();
		// this is what whould happens imedialty
	};

	var _setUpListeners = function() {
		$(".add-project-bg").on('click', showModal); //open modal window
		$('.popup-form').on('submit', addProject); // add project

		};

	var showModal = function(event) {
		console.log('modal window');
		event.preventDefault(); //disable deafult actions
		$('.project-popup-window').bPopup({
			speed: 650,
			transition: 'slideDown'
		});
	};	

	var addProject = function (event) {
		console.log('add project');
		event.preventDefault();

		//declaring variables
		var form = $(this);
			url = 'add_project_url.php'
			data = form.serialize();
		
			console.log(data);

		//request for server
		$.ajax({
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data,
		})
		.done(function(answer) {
			console.log("success");
			if(answer.message === 'OK'){
				form.find('.success-message').text(answer.text);
			}else {
				form.find('.error-message').text(answer.text);
			}
		})
		.fail(function() {
			console.log("error");
		})


	};

	return { 
		init: init
	};
		
}) ();

myModule.init();       