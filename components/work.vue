<template>

    <div class="flex-box centered column background-blue double-padded">
        <h2>Learn more about the businesses we have helped to succeed online.</h2>
        <ul>
            <li v-if="key <= number - 1" 
                v-for="(item, key) in work" 
                :style="backgroundImage( item.backgroundImage)"
                :key="key">

                <nuxt-link class="flex-box centered double-padded" :to="item.link">{{ item.title }}</nuxt-link>                                
                
            </li>
        </ul>
    </div>

</template>
<script>

    export default {

        data: function() {
            return {
                work: [
                    {
                        title: 'Soares Pumping',
                        backgroundImage: '/soares.jpg',
                        link: '/soares',
                    },
                    {
                        title: 'Lane Yacht Management Group',
                        backgroundImage: '/lymg.png',
                        link: '/lane-yacht-management-group',
                    },
                    {
                        title: 'Cape Cod Roof Cleaners',
                        backgroundImage: '/roof.png',
                        link: '/cape-cod-roof-cleaners',
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

    ul {
        display: grid;
        grid-gap: 1em;
        grid-template-columns: 1fr 1fr 1fr;        
    }

    ul li {
        height: 200px;
        transition: all 1s;
    }

    ul li a {
        background: rgba(1,1,1,.67);
        font-size: 1.25em;
        height: 100%;        
        text-decoration: none;
        width: 100%;
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