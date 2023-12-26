<template>
      <Header />
      <main>
        <gridLines />
          <RouterView />
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
