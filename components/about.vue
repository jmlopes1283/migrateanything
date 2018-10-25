<template>

    <div class="background-white pad-vert more layer">
    	<div class="inner">
	        <div v-if="key <= number - 1" 
                v-for="(item, key) in about" 
                :key="key"
                 class="flex-box two-column qtr space-between">
				 <div>
					 <div class="spacing">
					 <h2>{{ item.title }}</h2>
					 <p class="more-pad-btm">{{ item.desc }}</p>
	                <a v-on:click="vimeoVid(item.link)" class="btn background-blue tut-vid" id="video"><span>{{ item.ltitle }}</span></a>   
	                </div>
                </div>
                <div>
                	<a v-on:click="vimeoVid(item.link)" class="play-btn aligncenter tut-vid" id="video">
                		<img :src="item.backgroundImage" class="ico-offset"/>
                	</a>
                </div>
            </div>
            <hr/>
            <h2><center>Pricing Plans</center></h2>
            <div class="flex-box three-column space-between">
	            <div v-for="(item, key) in plans" 
	                :key="key"
	                 class="background-gray plan-box">
					 <h3 class="spacing">{{item.type}}</h3>
					 <div v-html="item.desc" class="spacing"></div>
	            </div>
	        </div>
        </div>
        
    </div>

</template>
<script>
    export default {

        data: function() {
            return {
                about: [
                    {
                        title: 'Moving your site to Wordpress?',
                        backgroundImage: '/ma-screenshot.jpg',
                        desc: 'Moving over your website from one platform to another can be a challenge, which can often require a lot of time and money. With the Wordpress Migrate Anything plugin, moving over multiple pages, posts, images & documents can be achieved in a few easy steps and in seconds per page.',
                        link: 'https://player.vimeo.com/video/293802639',
                        ltitle: 'Watch Video',
                    },                              
                ],
                plans: [
                    {
                        type: 'Free',
                        desc: '<ul style="list-style-type: disc;margin: 0 0 0 2em;font-size: 120%"><li style="padding: 0 0 .5em"><del>WP MultiSite</del></li><li style="padding: 0 0 .5em"><del>Online Support</del></li><li style="padding: 0 0 .5em">Migrate up to 30 pages</li></ul>',
                    },
                    {
                        type: 'Pro',
                        desc: '<ul style="list-style-type: disc;margin: 0 0 0 2em;font-size: 120%"><li style="padding: 0 0 .5em">WP MultiSite</li><li style="padding: 0 0 .5em">Limited Online Support</li><li style="padding: 0 0 .5em">Unlimited page migrations</li></ul><br/><center><a href="/contact" class="btn background-blue"><span>Go PRO</span></a></center><br/>',
                    },
                    {
                        type: 'Leave the work to us',
                        desc: '<p>Don&#44;t have the time to migrate your site? Then leave all the work to us!<br/><br/><center><a href="/contact" class="btn background-blue"><span>Find out more!</span></a></center></p>',
                    },                              
                ],
            }
        },
        methods: {

		    vimeoVid: function(link){
		 
		        document.body.style.overflow = "hidden";
		        document.getElementById('vidInner').innerHTML ="";
		        
		        setTimeout(function(){ 
					document.getElementById('vidInner').innerHTML ="<iframe src='"+link+"?autoplay=1'></iframe>";
				}, 10);
		        
		        setTimeout(function(){ 
					document.getElementById('vidEl').classList.add('active');
				}, 150);
		
		        return false;
		        
		    },
		
	    },

        props: [
            'number',
        ],

    }



</script>
<style scoped>
	.layer {
		position: relative;
		z-index: 2;
	}
    .aligncenter {
	    display: grid;
	    margin: 0 auto 2em;
    }
    
    .play-btn {
	    cursor: pointer;
	    position: relative;  
    }
    
    .play-btn:before {
		background: rgba(0,0,0,.5);
	    content: '';
	    display: block;
	    height: 100%;
	    position: absolute;
	    	top: 0;
	    	left: 0;
	    width: 100%;
	    z-index: 1;
    }
    
    .play-btn:after {
		border-top: 20px solid transparent;
		border-bottom: 20px solid transparent;
		border-left: 30px solid white;
	    content: '';
	    display: block;
	    height: 0;
	    position: absolute;
	    	top: calc(50% - 10px);
	    	left: calc(50% - 10px);
	    transition: all .25s ease;
	    width: 0;
	    z-index: 1;
    }
    
    .play-btn:hover:after {
		border-top: 26px solid transparent;
		border-bottom: 26px solid transparent;
		border-left: 36px solid white;
	    content: '';
	    display: block;
	    height: 0;
	    position: absolute;
	    	top: calc(50% - 13px);
	    	left: calc(50% - 13px);
	    width: 0;
	    z-index: 1;
    }
    
    .ico-offset {
	    margin: 0;
		width: 100%;    
    }
    
    ul li {
	    border: 1px solid rgba(0,0,0,.1);
        transition: all 1s;
    }

	.plan-box ul li{
		padding: 0 0 .5em 10px;
	}
	
	ul li h3,
	ul li p{
		padding: 0 15px;
	}
	
    ul li a {
	    border-bottom: 3px solid #6bffe6;   
	    padding: 0 0;  
        text-decoration: none;
    }
    
    ul li a:hover {
	    border-bottom: none;
	}
    
    ul li .ico-plugins {
	    width: 120px;
    }

    ul li:hover {
        background-size: 100%;
    }
	
	.plan-box {
		border: 1px solid rgba(0,0,0,.25);
	}
	
	.plan-box h3 {
		letter-spacing: 0.026em;
		position: relative;
		text-align: center;
	}
	
	.plan-box h3:after {
		border-top: 20px solid transparent;
		border-left: 20px solid transparent;
	    content: '';
	    display: block;
	    height: 0;
	    position: absolute;
	    	bottom: -12px;
	    	left: calc(50% - 5px);
	    transform: rotate(45deg);
	    width: 0;
	    z-index: 1;
	}
	
	.plan-box:first-child h3 {
		background: rgba(64,64,64,1);
		color: white;
		text-transform: uppercase;
	}
	
	.plan-box:first-child h3:after {
		border-bottom: 20px solid rgba(64,64,64,1);
	}
	
	.plan-box:nth-child(2) h3 {
		background: rgba(9, 39, 86, 1);
		color: white;
		text-transform: uppercase;
	}
	
	.plan-box:nth-child(2) h3:after {
		border-bottom: 20px solid rgba(9, 39, 86, 1);
	}
	
	.plan-box:last-child h3 {
		background: #6bffe6;
		color: #092756;
	}
	
	.plan-box:last-child h3:after {
		border-bottom: 20px solid #6bffe6;
	}
	
	.plan-box:last-child > div.spacing {
		padding: 1em 2em;
	}
	
	.plan-box .btn {
		margin-bottom: 3em;
	}
	
    @media( max-width: 1200px ){
        ul{
            display: block;
        }
    }
    
    @media( max-width: 800px ){
        .plan-box {
            margin-bottom: 1em;
        }
        .plan-box:last-child {
            margin-bottom: 0;
        }
    }

</style>