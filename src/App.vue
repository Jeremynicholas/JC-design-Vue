<template>
      <Header />
      <main>
        <gridLines />
          <RouterView  v-slot="{ Component }" >
            <Transition name="fade" mode="out-in">
              <div :key="Component">
                <component :is="Component"/>
              </div>
            </Transition>
          </RouterView>
          <Sections>
            <Footer />
          </Sections>
  </main>
</template>

<script setup >
  import Header from './components/Header.vue'
  import Sections from './components/Sections.vue'
  import Footer from './components/Footer.vue'
  import gridLines from './components/gridLines.vue'

</script>

<style scoped>
main {
  will-change: opacity;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s ease-in-out; 
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>