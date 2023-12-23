<template>
      <Header />
      <main>
        <RouterView />
      </main>
    <Sections>
      <Footer />
    </Sections>
</template>

<script setup >
  import Header from './components/Header.vue'
  import Sections from './components/Sections.vue'
  import Footer from './components/Footer.vue'
</script>
