<template>
    <div id="header" class="site-header background-white top txt-shadow">
    	<div class="inner flex-box centered">
	        <h1><nuxt-link to="/">Migrate Anything</nuxt-link></h1>
	        <div v-on:click="toggleMenu" id="burger" class="nav-left-icon burger-menu-btn z2"><span class="background-blue"></span></div>
	        <nav id="navMenu" class="z1">
	            <ul class="column flex-box roboto-slab">
	                <li v-on:click="navigate"><nuxt-link to="/about">Support</nuxt-link></li>
	                <li v-on:click="navigate"><nuxt-link to="/work" >PRO</nuxt-link></li>
	                <li v-on:click="navigate"><nuxt-link to="/contact" href="#">Contact Us</nuxt-link></li>
	            </ul>
	        </nav>
	    </div>
    </div>

</template>

<script>

    export default {

        methods: {

            navigate: function(){
         
                var burger = document.querySelector("#burger");
                var navMenu = document.querySelector("#navMenu");

                if( burger.classList.contains( "open" )){
                    burger.classList.remove("open");
                }

                if( navMenu.classList.contains("opened")){
                    navMenu.classList.remove("opened"); 
                }
                
            },

            toggleMenu: function( event ){
               
                document.querySelector("#burger").classList.toggle("open");
                document.querySelector("#navMenu").classList.toggle("opened"); 
        
            },

        },
    }

</script>

<style scoped>
    
    div.site-header {
	    background: rgba(255,255,255,1);
	    border-bottom: 1px solid rgba(0,0,0,.1);
        justify-content: space-between;
        padding: .5em 1em;
        position: fixed;
        	top: 0;
        	left: 0;
        width: 100%;
        transition: all .25s ease;
        z-index: 10;
    }
    
    div.site-header.top {
	    background: rgba(255,255,255,0);
	    border-bottom: 1px solid rgba(0,0,0,0);
    }
    
    div.site-header > .inner {
	    -webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	    justify-content: space-between;
    }

    h1 a {     
	    color: inherit;
        text-decoration: none;
    }
    
    div.site-header.top h1 a {
	    color: white;
    }

	.burger-menu-btn.open{
		-webkit-transform: rotate(90deg);
    	transform: rotate(90deg);
	}
	.burger-menu-btn, .burger-menu-btn:after, .burger-menu-btn:before {
	    height: 3px;
	    width: 25px;
	    background: white;
	    z-index: 100;
	}
	.burger-menu-btn:after {
    	position: absolute;
    	bottom: -15px;
	}
	.burger-menu-btn:before {
    	position: absolute;
    	top: 3px;
	}
	.burger-menu-btn:after, .burger-menu-btn:before {
    	content: '';
    	left: 4px;
    	-webkit-transform: rotate(0deg);
    	transform: rotate(0deg);
	}
	.burger-menu-btn.open:after {
    	-webkit-transform: rotate(45deg);
    	transform: rotate(45deg);
    	bottom: -10px;
	}
	.burger-menu-btn.open:before {
    	-webkit-transform: rotate(-45deg);
    	transform: rotate(-45deg);
    	top: 8px;
	}
	.burger-menu-btn span {
		border-radius: 4px;
    	overflow: hidden;
    	height: 40px;
    	width: 40px;
    	display: block;
    	position: absolute;
    	top: -10px;
    	left: -4px;
	}
	.burger-menu-btn {
	    will-change: transform;
	    -webkit-transition: -webkit-transform .2s linear;
    	transition: transform .2s linear;
    	cursor: pointer;
    	position: absolute;
		    right: calc(1em + -3px);
		    top: 20px;
	}

    nav {
        left: -9999px;
        position: fixed;   
        transition: all .75s;     
    }

    nav ul {        
        justify-content: center;
    }

    nav ul li {
        text-align: center;
    }

    nav ul li a{
        color: inherit;
        font-weight: 700;
        overflow: hidden;
        padding: 1em;
        position: relative;
    }
    
    nav ul li a:before{
	    background: #EA6E30;
	    content: '';
	    display: block;
	    height: 3px;
	    position: absolute;
	    	left: 0;
	    	bottom: 3px;
	    transition: all .25s ease;
	    width: 0;
    }
    
    nav ul li a:hover:before{
	    width: 100%;
    }
    
    div.site-header.top nav ul li a,
    nav.opened ul li a{
        color: white;
    }

    nav.opened {        
        background: #ffa000;
        bottom: 0;
        left: 0;
        padding: 0;
        right: 0;    
        top: 0;                               
    }

    nav.opened ul {
        font-size: 2em;
        height: 100vh;
    }


    @media( min-width: 1200px ){

        h1 {
            font-size: 2em;
            padding: 0;            
        }

        .burger-menu-btn {
            display: none;
        }

        nav {
            position: relative;
            left: auto;
        }

        nav.opened {   
            padding: 10%;
        }

        nav  ul {
            display: block;
        }

        nav ul li{
            display: inline-block;
        }

        nav ul li a {           
            text-decoration: none;
        }

    }
    
    @media( max-width: 1199px ) {
    	h1 {
	    	line-height: 60px
    	}
    }
    


</style>