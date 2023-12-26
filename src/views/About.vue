<template>
    <ShowcaseSub />
    <Sections id="about">
        <AnchorLine :AnchorText="'About'" />
        <div class="grid_2_columns">
			<div class="columns">
				<h2>About JC Design</h2>
				<p>JC Design is a <span>online web services company</span> dedicated to providing quality & innovative digital design.</p>
                <p>Our products are designed to optimise your business and improve your efficiency. JC Design separates itself by partnering with you to achieve your objectives with a<span>personal and flexible approach</span>.</p>
                    <Button icon="fas fa-fw fa-envelope" text="Get in touch" url="/#enquire" />
			</div>
	
            <div class="columns">			
                <img src="/public/images/graphic-design-logo.png"/>
            </div>
        </div>		
    </Sections>
</template>

<script setup >
    import Sections from '../components/Sections.vue'
    import ShowcaseSub from '../components/ShowcaseSub.vue'
    import Button from '../components/Button.vue'
</script>

<style scoped>
.grid_2_columns .columns img {
    max-width: 100%;
}
</style>

