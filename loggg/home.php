<?php 
session_start();

if (isset($_SESSION['id']) && isset($_SESSION['user_name'])) {

 ?>
<!DOCTYPE html>
<html>
<head>
	<title>HOME</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     <h1>Hello, <?php echo $_SESSION['user_name']; ?></h1>
     <a href="logout.php">Logout</a>
     <a href="logout.php">ogsshah</a>
     <a href="logout.php">Logout</a>
     <button class="button1">Button 1</button>
  <button class="button1">Button 2</button>
  <button class="button1">Button 3</button>
</body>
</html>

<?php 
}else{
     header("Location: index.php");
     exit();
}
 ?>