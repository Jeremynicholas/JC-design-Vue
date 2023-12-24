<template>
  <ShowcaseSub />
  <Sections>
    <div class ="grid">
		<div class="container">
            <ul class="packages">
                <li data-id="light">
                    <div>
                        Light
                    </div>

                </li>
                <li>Standard </li>
                <li>Advanced</li>
            </ul>
        </div>
    </div>
  </Sections>
</template>

<script setup >
  import Sections from '../components/Sections.vue'
  import ShowcaseSub from '../components/ShowcaseSub.vue'
</script>


