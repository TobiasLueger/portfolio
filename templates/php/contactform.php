<?php
	if (isset($_POST['submit'])) {
		$name = $_POST['name'];
		$subject = $_POST['subject'];
		$mailFrom = $_POST['mail'];
		$message = $_POST['message'];

		$mailTo = "tobias-lueger@web.de";

		$headers   = array();
		$headers[] = "MIME-Version: 1.0";
		$headers[] = "Content-type: text/plain; charset=utf-8";
		$headers[] = "From: ".$mailFrom;
		$txt = "Eine Nachricht vom Kontaktformular der Portfolio Seite von ".$name.",\n\n".$message;

		mail($mailTo, $subject, $txt, implode("\r\n",$headers));
		header("Location: index.html");
	}
?>
