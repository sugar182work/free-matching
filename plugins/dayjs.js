import 'dayjs/locale/ja'
import dayjs from 'dayjs'
import Vue from 'vue'

// day.jsをコンポーネント側から利用できるようにプラグイン化
// nuxt.config.jsのプラグインにも記述追加
// this.$dayjs().format('YYYY/MM/DD') のように利用可能
// day.jsの動作については、各種ドキュメント参照 momentとあまり違いはない

dayjs.locale('ja')

Vue.prototype.$dayjs = dayjs
