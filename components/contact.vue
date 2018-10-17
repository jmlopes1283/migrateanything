<template>

    <form class="inner" name="contact" method="POST" action="/success" netlify>
   
        <h2>Let's Talk</h2>

        <input type="text" id="input-name" placeholder="Name" name="contactName"> 
        <input type="email" id="input-email" placeholder="Email address" name="contactEmail"> 
       
        <select id="input-subject" placeholder="Subject" name="contactSubject">
            <option value="Question">I have a question</option>
            <option value="Meeting">I would like to schedule a meeting</option>
            <option value="Pricing">I would like to see your pricing sheet</option> 
        </select>         
        
        <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>

        <input type="hidden" name="form-name" value="contact" />      

        <button class="background-red padded" id="input-submit" type="submit">Get in Touch</button>
   
    </form>

</template>

<script>

    export default {

        data: function() {
            return {
  
            }
        },

        methods: {

            gatherData: function(){

                return { 
                    'name' : document.querySelector('#input-name').value, 
                    'returnEmail': document.querySelector('#input-email').value,
                    'selection': document.querySelector('#input-subject').value,
                    'message': document.querySelector('#input-message').value,
                };

            },

            sendAjax: function( data ){
                var url ='https://whalincityweb.azurewebsites.net/api/HttpTriggerJS1?code=A3T5F0vkqQsV9P5MPbPFynewIy96eBg9cD1Zr81fMYW2k8LYDxaHwA==&name=Matt';
             
                fetch( url, {
                    method: 'post',
                    body: data,
                    mode: 'no-cors'
                }).then( response => console.log(response) );
                
                
                /*.then( response=> response.json() )
                .then( theJson => console.log(theJson) );*/

            },

            thankYou: function(event){
              //  event.preventDefault();
                event.target.style.display = 'none';
                var parent = event.target.parentNode;
                var thankYou = document.createElement('p');
                thankYou.innerText = 'Thanks for your interest... we\'ll get back to you shortly';
                parent.appendChild(thankYou);
            },

            triggerAjax: function(){

                var data = this.gatherData();
                this.sendAjax(data);

            },

        },

        props: [
           
        ],

    }

</script>

<style scoped>
    input, select, textarea {
        clear: both;
        margin: .5em;        
        padding: .5em;
        width: 100%;
    }

    button {
        border: 0;
        cursor: pointer;
        display: block;
        margin: 1em auto;
        outline: 0;        
        width: 50%;
    }

    button:hover {
        background: #e53935;
    }

    #thisField {
        left: -99999px;
        position: fixed;        
    }


</style>