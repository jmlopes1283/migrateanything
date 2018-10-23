<template>

    <div class="background-gray pad-vert">
    	<div class="inner flex-box column">
	        <h2><center>Other Plugins from NE</center></h2>
	        <ul class="flex-box two-column space-between stretch">
	            <li v-if="key <= number - 1" 
	                v-for="(item, key) in work" 
	                :key="key"
	                class="background-white">
	                <img :src="item.backgroundImage" class="aligncenter ico-plugins"/>
	
	                <h3><a v-bind:href="item.link">{{ item.title }}</a></h3>    
	                <p>{{ item.desc }}</p>                         
	                <a v-bind:href="item.link" class="btn background-blue"><span>View Plugin</span></a>
	            </li>
	        </ul>
        </div>
    </div>

</template>
<script>

    export default {

        data: function() {
            return {
                work: [
                    {
                        title: 'Alt Tag',
                        backgroundImage: '/ico-alt-small.png',
                        desc: 'NE Alt Tags is a WordPress plugin that allows the user to easily view images throughout their website that doesn’t have any alternative text associated with it and update it throughout your whole website in a couple easy steps.',
                        link: 'https://wordpress.org/plugins/ne-alt-tag/',
                    },
                    {
                        title: 'Unused Image Finder',
                        backgroundImage: '/ico-recycle.png',
                        desc: 'NE Unused Image scans your Wordpress websites media folder and lets you know what images are not being used on any pages. This will also give you the option to review and delete each image for fast and easy cleanup.',
                        link: '/ne-unused-media',
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
    .aligncenter {
	    display: block;
	    margin: 1em auto;
    }
    ul li {
	    border: 1px solid rgba(0,0,0,.1);
        transition: all 1s;
    }
    
    ul li h3 {
	    margin-bottom: .25em;
    }
	
	ul li h3,
	ul li p{
		padding: 0 15px;
	}
	
	ul li p{
		margin-bottom: 3em;
	}
	
    ul li a {  
	    padding: 0 0;  
        text-decoration: none;
    }
    
    .btn {
	  border-bottom: none;
	  padding: .75em 1.5em;
	  position: relative;
	  	top: -1.5em;
	}
	
	ul li .btn {
		margin: 0 0 2em 15px;
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
        ul{
            display: block;
        }
        ul.flex-box {
	        display: flex;
        }
        ul.flex-box > li {
	        margin-bottom: 1em;
        }
    }


</style>