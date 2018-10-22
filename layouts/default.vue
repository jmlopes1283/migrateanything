<template>
    <div>
        <navigation></navigation>
     
        <nuxt />        

        <subfooter></subfooter>

        <footer class="layer end background-blue txt-gray" id="footer">
			<div class="inner">
				<div class="flex-box space-between flex-start margin">
					<div>
						<input class="footer-check click-check" type="checkbox">
						<h4>Helpful Links</h4>
						<ul>
							<li>
								<a href="">Contact</a>
							</li>
							<li>
								<a href="">Support PC</a>
							</li>
							<li>
								<a href="">Emergency Information</a>
							</li>
							<li>
								<a href="">Student Consumer Information</a>
							</li>
						</ul>
					</div>
					<div>
						<input class="footer-check click-check" type="checkbox">
						<h4>Academics &amp; Apply</h4>
						<ul>
							<li>
								<a href="https://admission.providence.edu/apply/">Apply</a>
							</li>
							<li>
								<a href="https://academics.providence.edu/departments/">Departments &amp; Programs</a>
							</li>
							<li>
								<a href="https://academics.providence.edu/calendar/">Academic Calendar</a>
							</li>
							<li>
								<a href="https://pml.providence.edu">Library</a>
							</li>
						</ul>
					</div>
					<div>
						<input class="footer-check click-check" type="checkbox">
						<h4>People &amp; Places</h4>
						<ul>
							<li>
								<a href="https://about.providence.edu/list/offices-services/">Offices &amp; Services Directory</a>
							</li>
							<li>
								<a href="https://www.providence.edu/search-email/">People Directory</a>
							</li>
							<li>
								<a href="https://admission.providence.edu/visit/directions/">Maps &amp; Directions</a>
							</li>
							<li>
								<a href="https://admission.providence.edu/visit">Visit</a>
							</li>
						</ul>
					</div>
					<div>
						<input class="footer-check click-check" type="checkbox">
						<h4>Facts &amp; Info</h4>
						<ul>
							<li>
								<a href="https://about.providence.edu/fast-facts/">Fast Facts</a>
							</li>
							<li>
								<a href="http://careers.providence.edu/">Jobs</a>
							</li>
							<li>
								<a href="https://mission-ministry.providence.edu/chaplain/campus-ministry/worship/">Mass Schedule</a>
							</li>
							<li>
								<a href="https://safety.providence.edu/dist/d/46/files/2018/02/safety-report.pdf">Annual Security Report</a>
							</li>
							<li>
								<a href="https://sexual-harassment.providence.edu/">Title IX &amp; Sexual Harassment</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="flex-box space-between copy margin">
					<p><img src="assets/images/main-logo.svg?v=1.0" class="footer-logo alignleft" alt="footer logo"> 1 Cunningham Square, Providence, RI 02918 USA, 401.865.1000</p>
					<p><span class="copyright">Copyright ©{{ new Date().getFullYear() }}.</span> <a href="http://providence.edu" target="_blank"><strong>Providence College</strong></a>. <a href="https://www.providence.edu/terms-of-use/">Terms of Use</a> | <a href="https://www.providence.edu/providence-college-privacy-policy/">Privacy Policy</a></p>
				</div>
				<hr class="margin">
				<div class="flex-box space-between copy">
					<p>If you are having trouble viewing or accessing these web pages, please email our <a href="mailto:mbevilac@providence.edu">Web Accessibility Coordinator</a></p>
					<p>Page maintained by: <a href="https://blogs.providence.edu/web">PC Web Services</a> | <a href="https://www.providence.edu/about-this-site">About This Site</a></p>
					<div class="flex-box icons flex-end txt-center">
						<a href="" class="icon fa-linkedin-in fab"></a>
						<a href="" class="icon icon-friars-logo"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span></a>
						<a href="" class="icon icon-my-pc"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span></a>
					</div>
				</div>
			</div>
		</footer>
        
        <olark />

    </div>


</template>

<script>
import Navigation from "../components/navigation";
import Olark from "../components/olark";

export default {
  components: {
    Navigation,
    Olark,
  },
  head: {
    title: "Migrate Anything"
  }
};
</script>
<style scoped>
footer {
	font-size:.9em
}

footer .copy {
	font-size: 80%;
}
	
	footer .copy > p{
		line-height: 42px;
		margin-bottom: 0;
	}

footer ul > li {
	padding: 0 0 8px;
}

footer h4 {
	font-size:1.2em
}

footer img,
footer img.alignleft {
	-webkit-filter: brightness(0%);
    filter: brightness(0%);
    margin-bottom: 0;
    width: 200px;
}

footer a {
	font-weight: bold;
	position: relative;
	text-decoration: none;
}

footer a:after {
	background: #6bffe6;
	content: '';
	display: block;
	height: 2px;
	position: absolute;
		bottom: -3px;
		left: 0;
	transition: all .25s ease;
	width: 0;
}

footer a:hover:after {
	width: 100%;
}

footer a.icon {
	border: 1px solid #293036;
	border-radius: 50%;
	height: 36px;
	line-height: 36px;
	margin-right: 5px;
	width: 36px;
}

footer a.icon:after {
	display: none;
}

footer a.icon:last-child {
	margin-right: 0;
}

footer a[class*=" icon-"],
footer a[class^=icon-] {
	font-size: 150%;
}

footer a.icon:hover {
	font-size: 180%;
}

footer > div > div > div > .footer-check {
  display: none;
}

@media ( max-width: 700px ){
	footer > div > div > div {
		position: relative;
	}
	
	footer > div > div > div > ul {
		display:none;
		margin-bottom: 2em;
	}
	
	footer > div > div > div > h4 {
		margin-bottom: 1em;
		position: relative;
	}
	
		footer > div > div > div > h4:after {
			border-right: 2px solid #293036;
			border-bottom: 2px solid #293036;
			content: '';
			display: inline-block;
			height: 8px;
			margin-left: 8px;
			position: relative;
				top: -4px;
			transform: rotate(45deg);
			transition: all .25s ease;
			width: 8px;
		}
	
	footer > div > div > div > .footer-check {
	  display: block;
	  height: calc(24px + .5em);
	}
	
	footer > div > div > div > .footer-check:checked + h4:after {
		transform: rotate(-135deg);
		top: 0;
	}
	
	footer > div > div > div > .footer-check:checked ~ ul {
		display: block;
	}
	
	footer .copy > p {
		line-height: 24px;
	}
	
	footer img, 
	footer img.alignleft {
		display: block;
		float: none;
	}
	
	.icons {
		display: inline-block;
		margin-top: 2em;
		width: 100%;
	}
	
	footer a.icon,
	footer a.icon:hover {
		font-size: 33px;
		padding: 6px;
	}
	
	footer a.icon.fab,
	footer a.icon.fab:hover {
		font-size: 33px;
		padding: 6px;
	}
	
	footer a[class*=" icon-"], 
	footer a[class^=icon-],
	footer a[class*=" icon-"]:hover, 
	footer a[class^=icon-]:hover {
	    font-size: 30px;
	    padding: 10px;
	}
	
}
</style>
