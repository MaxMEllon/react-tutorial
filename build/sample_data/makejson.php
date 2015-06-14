<?php
$data = array(
  array(
    'author' => 'Pete Hunt',
    'text'   => 'This is one comment.',
  ),
  array(
    'author' => 'Jordan Walke',
    'text'   => 'This is *another* comment.',
  ),
);

if (! isset($_GET['callback'])) {
  $callback = 'callback';
} else {
  $callback = $_GET['callback'];
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $data[] = $_REQUEST;
}

header('Content-type: application/json');
echo $callback.'('.json_encode($data).')';
?>
