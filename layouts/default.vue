<template>
    <div>
        <navigation></navigation>
     
        <nuxt />        

        <footer class="layer end background-dark-gray txt-white" id="footer">
			<div class="inner">
				<div class="flex-box space-between copy margin">
					<p><span class="copyright">Copyright ©{{ new Date().getFullYear() }}.</span> <a href="http://neplugins.com" target="_blank"><strong>NE Plugins</strong></a> | <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link></p>
					<p>Page maintained by: <a href="http://iwebri.com">iWebRI</a></p>
				</div>
			</div>
		</footer>
		<div v-html="scripts"></div>
    </div>


</template>

<script>
import Navigation from "../components/navigation";

export default {
  components: {
    Navigation,
  },
  head: {
    title: "Migrate Anything"
  },
  data: function() {
	return {
		scripts: "<script src='/js/load.js'><\/script>",
	}
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
	color: white;
	font-weight: bold;
	position: relative;
	margin: 0 5px;
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
