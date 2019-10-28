<?php include '../layout/header-home.php' ?>
<?php $contentTypename = getCurrentPage(); ?>
<?php $pageNum = $_GET['page']; ?>
<?php $SearchedData = getSearchResults($contentTypename,$pageNum);?>
<?php $itemsList = $SearchedData->itemsList; ?>
<?php //echo "<pre>"; print_r($itemsList); ?>
<div class="container searchbar">
  <div class="row">
    <div class="col-lg-12">
        <?php include('refine_search.php')?>
        <div class="col-lg-9 right_part">
            <h3>Results for <i> “Andy Warhol”</i> </h3>
            <h4><?php echo $contentTypename." (".$SearchedData->itemCount; ?>) </h4>
            <?php foreach ($itemsList as $keys => $search_items): ?>
            <?php 
                  /** Entity Related array **/
                  $field_entity_profile_location = $search_items->field_entity_profile_location;
            ?>  
              <div class='col-lg-12 no-padding border_section'>
                  <h4>
                    <a href="<?php echo getDetailPagelink($contentTypename).$search_items->_id; ?>"><?php echo $search_items->title; ?></a>
                  </h4>
                  <p><?php echo $field_entity_profile_location[0]->entityType;?></p>
                  <p><?php echo $field_entity_profile_location[0]->locationName;?></p>
                  <p> <?php echo getFormattedDate($search_items->field_event_date); ?> 
                       to 
                      <?php echo getFormattedDate($search_items->field_event_date_to); ?>
                  </p>
                  <p><?php echo $field_entity_profile_location[0]->street;?></p>
                  <p><?php echo $field_entity_profile_location[0]->locationPhone;?> | <?php echo $field_entity_profile_location[0]->locationEmail;?></p>
                  
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