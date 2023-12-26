<template>
    <ShowcaseSub />
    <Sections>
        <AnchorLine :AnchorText="'more'" />
            <div class="grid_2_columns">
                 <div class="columns reverse">
                        <h2>Second Heading</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nostrum consectetur. Cumque laboriosam voluptatem ex natus, itaque labore voluptate praesentium iure? Consequatur nobis accusamus velit placeat inventore, quidem modi repellendus!</p>
                    </div>
                    
                    <div class="columns">			
                         <img :src="$route.meta.imgSrc" :alt="$route.meta.pageTitle"/>
                    </div>
            </div>	
    </Sections>
</template>

<script setup >
    import Sections from '../components/Sections.vue'
    import ShowcaseSub from '../components/ShowcaseSub.vue'
    import AnchorLine from '../components/AnchorLine.vue'
</script>

<style scoped>
.grid_2_columns .columns img {
    max-width: 100%;
}
</style>

