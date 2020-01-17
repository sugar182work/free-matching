<template>
  <v-app>
    <Navi />
    <v-content class="bg-body">
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer>
      <span>&copy; 2019 Sugers.Inc</span>
    </v-footer>
  </v-app>
</template>

<script>
import Navi from '~/components/Navi.vue'
export default {
  components: {
    Navi,
  },
}
</script>

<style>
.bg-body {
  background-image: url('https://picsum.photos/seed/picsum/1920/1080');
  background-repeat: repeat;
}
</style>
