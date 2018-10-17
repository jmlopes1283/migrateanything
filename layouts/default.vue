<template>
    <div>
        <iconmenu></iconmenu>
        <navigation></navigation>
     
        <nuxt />        

        <subfooter></subfooter>

        <div class="site-footer background-black flex-box centered padded">
            <a href="https://nuxtjs.org/">Powered by Nuxt</a>
        </div>
        
        <olark />

    </div>


</template>

<script>
import Navigation from "../components/navigation";
import Subfooter from "../components/subfooter";
import Olark from "../components/olark";

export default {
  components: {
    Navigation,
    Olark,
    Subfooter
  },
  head: {
    title: "Migrate Anything"
  }
};
</script>

