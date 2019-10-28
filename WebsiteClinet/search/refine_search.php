<?php   $url = "http://localhost:7005/api/v1/website/article/gettotalcount";
        $refinedcontent = file_get_contents($url);
        $decodedrefine = json_decode($refinedcontent);
        $contentTypename = getCurrentPage();
?>
<div class="col-lg-3 no-padding">
    <h2>REFINE BY </h2>
    <ul class="list-inline">
        <?php   foreach ($decodedrefine as $name => $quantity): ?>
                <li>
                    <a href="<?php echo $path."search/".$name.".php"?>" class="<?php if($contentTypename == strtolower($name)){ echo 'active'; } ?>">
                        <?php echo $name ." (".$quantity.")"; ?>
                    </a>
                </li>
        <?php endforeach; ?>
    </ul>
</div>