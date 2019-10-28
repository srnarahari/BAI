
<?php include '../layout/header-home.php' ?>
<?php $contentTypename = getCurrentPage(); ?>
<?php $pageNum = $_GET['page']; ?>
<?php $SearchedData = getSearchResults($contentTypename,$pageNum);?>
<?php $itemsList = $SearchedData->itemsList; ?>
<?php //echo "<pre>"; print_r($itemsList); ?>
<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
        <!-- Left section --> 
        <?php include('refine_search.php')?>
        <!-- Left section -->  
        <div class="col-lg-9 right_part">
           <!--  <h3>Results for <i> “Andy Warhol”</i> </h3> -->
            <h4 class="heading_search"><?php echo $contentTypename."s (".$SearchedData->itemCount; ?>) </h4>
            <?php foreach ($itemsList as $keys => $search_items): ?>
	            <div class='col-lg-12 no-padding border_section'>
	                <h5>
	                	<a href="<?php echo getDetailPagelink($contentTypename).$search_items->_id; ?>"><?php echo $search_items->title; ?></a>
	                </h5>
	                <p>By <?php echo getAuthorArticle($search_items); ?> | <?php echo getFormattedDate($search_items->added_date);?> </p>
	            </div>
            <?php endforeach; ?>
            <!-- Paginaiton passing array in paginaiotn function  -->
              <?php $paginationArray = getPaginationArray($SearchedData); ?>
              <?php getPagination($paginationArray); ?>
            <!-- Paginaiton passing array in paginaiotn function  -->
        </div>
    </div>
  </div>
</div>


<?php include '../layout/subscription.php' ?>            
<?php include '../layout/footer.php' ?>