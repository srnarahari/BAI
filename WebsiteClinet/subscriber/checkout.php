
<?php include '../layout/header-home.php' ?>

<script src="https://checkout.stripe.com/checkout.js"></script>
<div class="container mobcontainer fullWidth tab">
        <div class="row">
                            <div id="tabs" class="tabs col-md-12">
                                    </div>
				<div class="clearfix"></div>
                                    <!--Primary Tabs and messages End-->
            <!--Pre Top Region Start -->
                        <!--Pre Top Region End -->
            <!--Pre Region Start -->
                        <!--Pre Region End -->
            <!--Page Title End-->
                    
            <div class="col-md-12">
                
                                
                  <div class="region region-content">
    <div id="block-system-main" class="block block-system">

    
  <div class="content">
    <div class="view view-products view-id-products view-display-id-page view-dom-id-65296a4eb88e931b6d7bdac26a2f349b">
        
  
  
      <div class="view-content">
      
    <div class="row">
      <div class="col-sm-12 digital">
        <section class="tableArea"> 
		
          <div class="clearfix"></div>
          <div class="header text-center">Digital Subscriptions</div>
          <div class="bodySec">
<div class="item-list">    <ul class="divd">          <li class="text-center">  
  <div class="views-field views-field-nothing">        <span class="field-content">                <h2>Yearly</h2>
<form class="commerce-add-to-cart commerce-cart-add-to-cart-form-3" action="" onsubmit="return false" id="commerce-cart-add-to-cart-form-3" accept-charset="UTF-8"><div><input type="hidden" name="product_id" value="3" />
<input type="hidden" name="form_build_id" value="form-lJzdu-oDMwuU0giibi_Dj62FuQzZQlOSk22tdondSac" />
<input type="hidden" name="form_token" value="REauVsRPRP3qNgJwW9_nZIyEgktxONRtwR1FJgvHtgo" />
<input type="hidden" name="form_id" value="commerce_cart_add_to_cart_form_3" />
<div id="edit-line-item-fields" class="form-wrapper"></div><input class="btn btn-primary form-submit" type="submit" onclick="checkoutPlan(2500)" id="edit-submit" name="op" value=" $25/Yearly" />
<input type="hidden" name="quantity" value="1" />
</div></form>
                <div class="linkingList"> 
                  <span>Get unlimited access to Blouinartinfo.com on any device</span>
                </div></span>  </div></li>
          <li class="text-center">  
  <div class="views-field views-field-nothing">        <span class="field-content">                <h2>Monthly</h2>
<form class="commerce-add-to-cart commerce-cart-add-to-cart-form-4" onsubmit="return false" action="" id="commerce-cart-add-to-cart-form-4" accept-charset="UTF-8"><div><input type="hidden" name="product_id" value="4" />
<input type="hidden" name="form_build_id" value="form-LcHK9s5yeWbRgfDUz3YGqc8JVIU2Q_EEYUsnqooOC5A" />
<input type="hidden" name="form_token" value="8S1au9KLd8fNxL7KAwAyPkZEL8h8KVELz_ZXNZlMs_4" />
<input type="hidden" name="form_id" value="commerce_cart_add_to_cart_form_4" />
<div id="edit-line-item-fields--2" class="form-wrapper"></div><input class="btn btn-primary form-submit" type="submit" id="edit-submit--2" onclick="checkoutPlan(500)" name="op" value=" $5/Monthly" /><input type="hidden" name="quantity" value="1" />
</div></form>
                <div class="linkingList"> 
                  <span>Get unlimited access to Blouinartinfo.com on any device</span>
                </div></span>  </div></li>
      </ul></div>          </div>
        </section>
      </div>
    </div>
    </div>
  
  
  
  
  
  
</div>  </div>
</div>
  </div>
            </div>

<script type="text/javascript">
	var handler = StripeCheckout.configure({
		key: 'pk_test_Lkn1XlwIctR5R8SCMVEpPw4s00mys4rdxw',
		image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
		locale: 'auto',
		token: function(token) {
		    // Send the token in an AJAX request
			console.log('token', token)
			var jwt_token = localStorage.getItem('bai_subscriber_token');
            var amount = localStorage.getItem('bai_subscriber_amount');
			$.ajax({
				type: 'POST',
				url: 'http://localhost:7005/api/v1/Stripe/charge',
				headers: {
				    'Authorization': `Bearer ${jwt_token}`,
				},
				data: {
				    stripeToken: token.id,
				    stripeEmail: localStorage.getItem('bai_subscriber_email'),
				    amount: amount
				},
				success: (response) => {
				    console.log('successful payment: ', response);
				},
				error: (response) => {
				    console.log('error payment: ', response);
				}
			})
		}
	});

	// Close Checkout on page navigation:
	window.addEventListener('popstate', function() {
	    handler.close();
	});

	function checkoutPlan(amount) {
		localStorage.setItem('bai_subscriber_amount', amount);
		handler.open({
		name: 'Stripe.com',
		description: '2 widgets',
		amount: amount
		});
		//e.preventDefault();
	}

</script>
        

<?php include '../layout/subscription.php' ?>            
<?php include '../layout/footer.php' ?>