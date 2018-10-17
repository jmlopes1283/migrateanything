<template>

    <div class="top-nav background-blue">
        <ul>
            <li><a href="tel:0000000"><img src="~/assets/phone.svg" scale="0"></a></li>
            <li><nuxt-link to="/contact/"><img src="~/assets/message-circle.svg" scale="0"></nuxt-link></li>
        </ul>
    </div>

</template>

<style scoped>
    ul {
        display: flex;
        justify-content: flex-end;
        margin: 0 1em;
        padding: .5em;
    }

    ul li {
        padding: 0 .5em;
    }
</style>