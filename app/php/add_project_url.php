<?php

	$data = array();

	$data['message'] = 'OK';
	$data['text'] = '';

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>