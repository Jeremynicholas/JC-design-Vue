<template>
      <Header />
      <main>
        <gridLines />
          <RouterView  v-slot="{ Component }" >
            <transition name="fade" mode="out-in">
              <div>
                <component :is="Component"/>
              </div>
            </transition>
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
  transition: opacity 2s; 
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>