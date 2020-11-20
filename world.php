<?php

header("Access-Control-Allow-Origin: *");

$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

$search_value = $_GET['country'];

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$stmt = $conn->query("SELECT * FROM countries WHERE name LIKE '%{$search_value}%'");

$results = $stmt->fetchAll(PDO::FETCH_ASSOC);

$output = '';

if(mysql_num_rows($stmt) > 0 ){
	$output = '
		<table class="CountryList">
			<tr>
			<th>Name</th>
			<th>Continent</th>
			<th>Independence</th>
			<th>Head of State</th>
		</tr>';

		while($row = mysql_fetch_assoc($stmt))
		{
			$output .= "
				<tr>
					<td>{$row['name']}</td>
					<td>{$row['continent']}</td>
					<td>{$row['independence_year']}</td>
					<td>{$row['head_of_state']}</td>
				</tr>"
		}
$output .= "</table>";

mysql_close($conn);

echo $output;
}

else
{

}
?>


