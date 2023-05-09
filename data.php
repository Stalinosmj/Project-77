<?php
// Validate form data
if (isset($_POST['name']) && isset($_POST['year']) && isset($_POST['reg_no']) && isset($_POST['phone']) && isset($_POST['class']) && isset($_POST['email']) && isset($_POST['employed'])) {
	$name = $_POST['name'];
	$year = $_POST['year'];
	$reg_no = $_POST['reg_no'];
	$phone = $_POST['phone'];
	$class = $_POST['class'];
	$email = $_POST['email'];
	$employed = $_POST['employed'];

	// Connect to database
	$servername = "localhost";
	$username = "username";
	$password = "password";
	$dbname = "database_name";

	$conn = new mysqli($servername, $username, $password, $dbname);

	if ($conn->connect_error) {
	  die("Connection failed: " . $conn->connect_error);
	}

	// Insert data into database
	$sql = "INSERT INTO table_name (name, year, reg_no, phone, class, email ,employed) VALUES ('$name', '$year', '$reg_no', '$phone', '$class', '$email', $employed)";

	if ($conn->query($sql) === TRUE) {
	  echo "New record created successfully";
	} else {
	  echo "Error: " . $sql . "<br>" . $conn->error;
	}

	// Close database connection
	$conn->close();
} else {
	echo "All fields are required.";
}
 /*This script first checks to make sure all the form fields are set, 
 then creates variables for each field. It then connects to the
  MySQL database and inserts the data into the specified table using
   a SQL INSERT statement.Finally, it closes the database connection.*/
?>


     