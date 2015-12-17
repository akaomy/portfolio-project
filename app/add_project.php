 <?php 

 	$name = $_POST['projectName'];
 	$data = array();

 	 if ($name === '') {
 	 	$data['status'] = 'error';
 	 	$data['text'] = 'Please fill out all fields';
 	 }else{
 	 	$data['status'] = 'OK';
 	 	$data['text'] = 'Good';
 	 }
 
 	header("Content-Type: application/json");
 	echo json_encode($data);
 	exit;

?> 