<?php

$pageNames = ["home", "teachers","story","paths","register","faqs" ];
$linkText = ["Home", "Teachers", "Story", "Paths", "Register", "FAQ's" ];
?>

<div class='navBarDiv group' id='navBarDiv'>
<ul class='navBar'>
<?php 
foreach($pageNames as $key => $page) {
	echo "<li data-selection=" . $page. "><a>".$linkText[$key]."</a></li>";
}
?>
</ul>
</div>









