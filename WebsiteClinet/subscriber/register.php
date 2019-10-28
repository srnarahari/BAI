
<?php include '../layout/header-home.php' ?>
<div class="wrapper subscribePage">
<div class="container">
<h3 id="server-results"></h3>
<div class="row">
	<div class="col-xs-12 col-md-10 col-md-offset-1">

		
		<div id="signupdiv">
		<form class="ui form segment" id="createAccount">
		<h2 style="padding-bottom: 15px;text-align: center;">SUBSCRIBER  </h2>	
		  <div class="two fields">
		  	<div class="field">
		      <label>First Name</label>
		      <input placeholder="First Name" name="firstname" type="text">
		    </div>
		   <div class="field">
		      <label>Last Name</label>
		      <input placeholder="Last Name" name="lastname" type="text">
		    </div>
		  </div>
		  <div class="two fields">
		  <div class="field">
		    <label>Username</label>
		    <input placeholder="Username" name="username" type="text">
		  </div>
		   <div class="field">
		    <label>Email</label>
		    <input placeholder="Email" name="email" type="text">
		  </div>
		</div>
		 <div class="two fields">
		  <div class="field">
		    <label>Password</label>
		    <input name="newPassword" type="password">
		  </div>
		    <div class="field">
		    <label>Confirm password</label>
		    <input name="confirmPassword" type="password">
		  </div>
		</div>
		  <div class="inline field">
		  	 <div class="">
		      <input type="checkbox" name="active" value="true">
		      <label>I agree to the terms and conditions</label>
		    </div>
		  </div>
		  <div class="field buttn_section_social_media">
		  <button type="submit" class="ui primary submit button">Submit</button>
		  <a href="<?php echo $path ?>/subscriber/login.php" style="font-size: 14px;font-weight: 800;text-transform: uppercase;">Login</a>
		</div>
		  <div class="ui error message"></div>
		   <div id="successText">

  			</div>
		 </form>

	</div>
</div>
</div>
</div>
<script type="text/javascript">

</script>
<?php include '../layout/subscription.php' ?>            
<?php include '../layout/footer.php' ?>