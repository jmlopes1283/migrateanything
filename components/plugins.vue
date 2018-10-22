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
	
	                <h3><nuxt-link :to="item.link">{{ item.title }}</nuxt-link></h3>    
	                <p>{{ item.desc }}</p>                         
	                
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
                        title: 'Unused Media Finder',
                        backgroundImage: '/ico-recycle.png',
                        link: '/lane-yacht-management-group',
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