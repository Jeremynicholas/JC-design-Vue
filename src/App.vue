<template>
  <div>
    <div v-if="isLoading" class="loading-screen">
       <img src="/images/loading.gif" />
    </div>
    <div v-else>
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
    </div>
  </div>
</template>

<script setup >
  import { ref, onMounted } from 'vue';
  import Header from './components/Header.vue'
  import Sections from './components/Sections.vue'
  import Footer from './components/Footer.vue'
  import gridLines from './components/gridLines.vue'

  const isLoading = ref(true);

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false;
    }, 500);
  });

</script>

<style scoped>
.loading-screen {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: var(--background);

    img {
      width: 20px;
    }
  }

main {
  will-change: opacity;
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>