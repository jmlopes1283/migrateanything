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
	                <nuxt-link class="btn background-blue tut-vid" :to="item.link"><span>{{ item.ltitle }}</span></nuxt-link>   
	                </div>
                </div>
                <div>
                	<nuxt-link class="play-btn aligncenter tut-vid" :to="item.link">
                		<img :src="item.backgroundImage" class="ico-offset"/>
                	</nuxt-link>
                </div>
            </div>
            <hr/>
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
                        link: 'https://vimeo.com/81625407',
                        ltitle: 'Watch Video',
                    },                              
                ],
            }
        },
        methods: {

            backgroundImage: function( image ){

                if( image == '' ) {
                    return '';
                }

                return "background-image: url('"+ image +"');";
            }

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

    @media( max-width: 1200px ){
        h2 {
            font-size: 1em;
        }
        ul{
            display: block;
        }
    }


</style>