
<?php include '../layout/header-home.php' ?>
<div class="wrapper subscribePage">
<div class="container">

<h3 id="server-results"></h3>
<div class="row">
	<div class="col-xs-12 col-md-6 col-md-offset-3">
			<form class="ui form segment" id="LoginCreate">
				<h2 style="padding-bottom: 15px;text-align: center;">Login  </h2>	
			<div class="field">
				<label>Email Address<span class="required">*</span></label> 
				<input type="text" name="email"/>
			</div>
				<div class="field">
				<label>Password <span class="required">*</span></label> 
				<input type="password" name="newPassword"/>
			</div>
		 <div class="inline field">
		  	 <div class="">
		      <input type="checkbox" >
		      <label>Remember me</label>
		    </div>
		  </div>
		 <div class="field buttn_section_social_media">
		  <button type="submit" class="ui primary submit button">Log in</button>
		  <a href="#">Forgot your password</a>
		  <a href="<?php echo $path ?>/subscriber/register.php">Subscribe</a>

		</div>
		  <div class="ui error message"></div>
		   <div id="successText">

  			</div>
	</form>
	
</div>
</div>
</div>

<?php include '../layout/subscription.php' ?>            
<?php include '../layout/footer.php' ?>