<template>
    <div>
        <main class="flex-box centered">
            
            <div class="background-black flex-box column">
                <h2>We are invested in your success - because we live here too!!!</h2>
                <nuxt-link to="/contact" class="background-red roboto-slab" >Contact Us Today</nuxt-link>
            </div>

        </main>

        <work number="3"></work>

    </div>

</template>
<script>
import Work from "../components/work";

export default {
  components: {
    Work
  }
};
</script>
<style scoped>
main {
  background: url("~/assets/purchase.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
}

@media (max-width: 1200px) {
  main.flex-box.centered {
    align-items: flex-end;
    min-height: 60vh;
  }

  main div h2 {
    font-size: 1em;
    text-align: center;
  }
}

main div {
  font-size: 1.25em;
  padding: 2em;
}

main div h2 {
  color: white;
  margin: 0 0 1em 0;
}

main div a {
  display: block;
  padding: 1em;
  text-align: center;
  text-decoration: none;
}

main div a:hover {
  background-color: #e53935;
}
</style>