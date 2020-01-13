<template>
  <v-row>
    <v-col cols="12" md="6" lg="4">
      <v-card max-width="344" class="mx-auto">
        <v-container fluid grid-list-md>
          <v-card-title>オセロ</v-card-title>
          <v-card-text>nuxt store othello</v-card-text>
          <v-card-actions>
            <v-btn text to="/contents/othello" nuxt>
              CLICK
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-col>
    <v-col cols="12" md="6" lg="4">
      <v-card max-width="344" class="mx-auto">
        <v-container fluid grid-list-md>
          <v-card-title>QRリーダー</v-card-title>
          <v-card-text>nuxt qr reader sample</v-card-text>
          <v-card-actions>
            <v-btn text to="/contents/qrreader" nuxt>
              CLICK
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-col>
    <template v-if="isLoggedIn">
      <v-col cols="12" md="6" lg="4">
        <v-card max-width="344" class="mx-auto">
          <v-container fluid grid-list-md>
            <v-card-title>ログインコンテンツ</v-card-title>
            <v-card-text>ログイン必須コンテンツ</v-card-text>
            <v-card-actions>
              <v-btn text to="/contents/auth" nuxt>
                CLICK
              </v-btn>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-col>
    </template>
    <!-- <v-col cols="12" md="12" lg="12"><KarayomiyaLogo /> </v-col> -->
  </v-row>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
//import KarayomiyaLogo from '~/components/parts/KarayomiyaLogo.vue'

export default {
  //  components: { KarayomiyaLogo },
  computed: {
    ...mapState('auth', ['username']),
    ...mapGetters('auth', ['isLoggedIn']),
  },
}
</script>
