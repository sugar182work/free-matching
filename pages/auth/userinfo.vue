<template>
  <UserSetting />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import UserSetting from '~/components/user/UserSetting'
export default {
  components: {
    UserSetting,
  },
}
</script>
