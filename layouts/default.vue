<template>
  <v-app>
    <Navi />
    <v-content>
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
