<?php
// include configuration file
include 'config/core.php';
 
// include the head template
include_once "layout_head.php";
 
// placeholder for rendering React components
//include_once "clients_cont.php";
 echo '
	<div class="texture-layer">
	  <div class="container pricing-section">

	    <div class="col-md-12 big-title light wow bounceIn">
	      <h2>How much does a good website cost?</h2>
	    </div>

	<div class="row">
		<img src="img/Showcase-Template-Flat-Presentation-Vol-2_mine.png">
	</div>


<div class="row">


<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 wow fadeInLeft animated" style="visibility: visible;">
                                          <ul class="plan plan1">
                                                <li class="plan-name">
                                                      Blogger
                                                </li>
                                                <li class="plan-price">
                                                      <strong>$1299</strong> / setup
                                                </li>
                                                <li>
                                                      <strong>1</strong> WordPress Theme
                                                </li>
                                                <li>
                                                      <strong>1</strong> Contact Form Via Plugin
                                                </li>
                                                <li>
                                                      <strong>BYOC</strong> Bring Your Own Content
                                                </li>
                                                <li>
                                                      <strong>Hosting</strong> Is Setup For You
                                                </li>
                                                <li>
                                                      <strong>Domain</strong> Is Setup For You
                                                </li>
                                          </ul>
                                    </div>
                                    <div class="col-lg-4 col-md-4 col-sm-6 
col-xs-12 wow fadeInLeft animated" style="visibility: visible;">
                                          <ul class="plan plan1">
                                                <li class="plan-name">
                                                      Bespoke
                                                </li>
                                                <li class="plan-price">
                                                      <strong>$3999</strong> / minimum
                                                </li>
                                                <li>
                                                      <strong>Database</strong> Storage
                                                </li>
                                                <li>
                                                      <strong>Responsive</strong> Design
                                                </li>
                                                <li>
                                                      <strong>Email</strong> Reporting
                                                </li>
                                                <li>
                                                      <strong>Server</strong> Is Setup For You
                                                </li>
                                                <li>
                                                      <strong>Hosting</strong> Is Setup For You
                                                </li>
                                          </ul>
                                    </div>

                                    <div class="col-lg-4 col-md-4 col-sm-6 
col-xs-12">
                                          <ul class="plan plan2 featured">
                                                <li class="plan-name">
                                                      Hourly
                                                </li>
                                                <li class="plan-price">
                                                      <strong>$50</strong> / hour
                                                </li>
                                                <li>
                                                      <strong>Bug</strong> Fixing
                                                </li>
                                                <li>
                                                      <strong>Ongoing</strong> Support
                                                </li>
                                                <li>
                                                      <strong>Maintain</strong> Existing Sites I did not even build
                                                </li>
                                                <li>
                                                      <strong>Fix</strong> Domain Problems 
                                                </li>
                                                <li>
                                                      <strong>Fix</strong> Email Problems
                                                </li>
                                          </ul>
                                    </div>

                              </div>

<div class="row cta-row">
                                              <a href="#" class="btn cta-major btn-2 
btn-2c">Free, consultation for anyone (within reason), Get started today. </a>
</div>

	<div class="row">

      <div class="col-md-4 wow fadeInRight">
		<div class="fun-box">
		  <i class="fa fa-shirtsinbulk"></i>
		  <span class="fun" data-from="0" data-to="49" data-speed="5000" data-refresh-interval="50"></span>
		  <p>Blogs</p>
		</div>
      </div>

      <div class="col-md-4 wow fadeInRight">
		<div class="fun-box">
		  <i class="fa fa-heart"></i>
		  <span class="fun" data-from="0" data-to="49" data-speed="5000" data-refresh-interval="50"></span>
		  <p>Positive Customer Review</p>
		</div>
      </div>

      <div class="col-md-4 wow fadeInDown">
		<div class="fun-box">
		  <i class="fa fa-clock-o"></i>
		  <span class="fun" data-from="0" data-to="4555" data-speed="5000" data-refresh-interval="50"></span>
		  <p>Responsive Design</p>
		</div>
      </div>
	</div>

		<div class="row cta-row">
	    	<a href="pricing"><button class="btn magness-cta-pricing btn-1 wow fadeInRight animated">View Pricing</button></a>
		</div>


      </div>
';
// page footer
include_once "layout_foot.php";
?>
