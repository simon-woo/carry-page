import { reactive } from 'vue'

export default {
  name: 'home',
  setup() {
    const state = reactive({
      navList: ['Home', 'Pantas!', 'SPOTLED', 'Contact'],
      activeNavIndex: 0
    })

    const changeNav = (index) => state.activeNavIndex = index

    return {
      state,
      changeNav
    }
  }
}
