<template>
    <div>
        <main class="flex-box centered">
            <div class="inner">
	            <div class="column intro-text txt-left txt-white">
	                <h2>Migrate 
	                	<div class="words rotate">
							<span>easier</span>
							<span>faster</span>
							<span>smarter</span>
							<span>Anything</span>
						</div>
					</h2>
					<p>Moving your site over to WordPress made easier.</p>
					<nuxt-link to="/contact" class="background-green btn dl-btn" ><span>Download</span></nuxt-link>
					<nuxt-link to="/contact" class="background-blue btn" ><span>Get PRO</span></nuxt-link>
	            </div>
            </div>
        </main>
        
        <work number="3"></work>

    </div>

</template>
<script>
import Work from "../components/about";

export default {
  components: {
    Work
  }
};

</script>
<style scoped>
main {
  background: #092756;
	background: -moz-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%),-moz-linear-gradient(top, rgba(57,173,219,.25) 0%, rgba(42,60,87,.4) 100%), -moz-linear-gradient(-45deg, #6bffe6 0%, #092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -webkit-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -webkit-linear-gradient(-45deg, #6bffe6 0%,#092756 100%);
	background: -o-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -o-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -o-linear-gradient(-45deg, #6bffe6 0%,#092756 100%);
	background: -ms-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), -ms-linear-gradient(top, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), -ms-linear-gradient(-45deg, #6bffe6 0%,#092756 100%);
	background: -webkit-radial-gradient(0% 100%, ellipse cover, rgba(104,128,138,.4) 10%,rgba(138,114,76,0) 40%), linear-gradient(to bottom, rgba(57,173,219,.25) 0%,rgba(42,60,87,.4) 100%), linear-gradient(135deg, #6bffe6 0%,#092756 100%);
  height: 380px;
  max-height: 100vh;
  padding: 0 1em;
  position: relative;
  z-index: 1;
}

@media (max-width: 1200px) {
  main.flex-box.centered {
    height: 100vh
  }

  main div h2 {
    font-size: 1em;
  }
  
  .dl-btn {
  	margin-right: 0;
  }
}

main div {
	animation-name: fadebottom;
    animation-duration: 2s;
  font-size: inherit;
  position: relative;
}

main div h2 {
  color: white;
  font-size: 2.5em;
  font-weight: 300;
  margin: 0 0 .25em;
  display: block;
  line-height: 135%;
}

main div p {
  font-size: 2.5em;
  line-height: 110%;
}

.words{
	display: inline;
	position: inherit;
	text-indent: 10px;
}
.words span{
	position: absolute;
	opacity: 0;
	overflow: hidden;
  font-weight: 700;
}
.rotate span{
	font-weight: 700;
	animation-timing-function: linear;
	animation-duration: 5s;
	animation-name:  rotateWord;
}
.words span:first-child { 
	-webkit-animation-delay: 2s; 
	        animation-delay: 2s; 
}
.words span:nth-child(2) { 
	-webkit-animation-delay: 3.5s; 
	        animation-delay: 3.5s; 
}
.words span:nth-child(3) { 
	-webkit-animation-delay: 5s; 
	        animation-delay: 5s; 
}
.words span:nth-child(4) {
	animation-fill-mode: forwards;
	animation-iteration-count: 1;
	animation-name: lastWord;
	-webkit-animation-delay: 6.5s; 
	        animation-delay: 6.5s; 
}
@-webkit-keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-30px); }
	5% { opacity: 1; -webkit-transform: translateY(0px);}
    25% { opacity: 1; -webkit-transform: translateY(0px); }
	27% { opacity: 0; -webkit-transform: translateY(30px); }
	80% { opacity: 0; }
    100% { opacity: 0; }
}
@-ms-keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -ms-transform: translateY(-30px); }
	5% { opacity: 1; -ms-transform: translateY(0px);}
    17% { opacity: 1; -ms-transform: translateY(0px); }
	20% { opacity: 0; -ms-transform: translateY(30px); }
	80% { opacity: 0; }
    100% { opacity: 0; }
}
@keyframes rotateWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-30px); transform: translateY(-30px); }
	5% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }
	20% { opacity: 0; -webkit-transform: translateY(30px); transform: translateY(30px); }
	80% { opacity: 0; }
    100% { opacity: 0; }
}
@keyframes lastWord {
    0% { opacity: 0; }
    2% { opacity: 0; -webkit-transform: translateY(-30px); transform: translateY(-30px); }
	5% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px);}
    17% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }
	100% { opacity: 1; -webkit-transform: translateY(0px); transform: translateY(0px); }
}

main div a {
  text-align: center;
  text-decoration: none;
}

.dl-btn {
	margin-right: 1em;
}
</style>