<?php
$_POST = json_decode(file_get_contents("pgp://input"), true);
echo var_dump($_POST);