<template>
  <v-card class="overflow-hidden">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-toolbar-title>自由な出会いスペース</v-toolbar-title>

      <v-spacer></v-spacer>
      {{ now }}
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-2"
      class="overflow-y-auto"
      max-height="120"
    >
      <v-container style="height: 120px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      now: null,
    }
  },
  mounted() {
    this.now = this.$dayjs().format('YYYY/MM/DD')
  },
}
</script>
