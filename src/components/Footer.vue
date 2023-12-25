<template>
    <footer id="main-footer" class="grid_3_columns">
				<a class="back-to-top" href="#top" title="Back to top">Back to top</a>
			<div class="footer-grid footer-logo-container">
				<logo />
				<p class="footer-copy">Copyright &copy; JC Design {{ currentYear }}</p>
			</div>	
			<div class="footer-grid footer-menu">
				<ul>
                    <li><router-link :to="{path: 'about'}">About</router-link></li>
					<li><router-link :to="{path: 'pricing'}">Pricing</router-link></li>
					<li><router-link :to="{path: 'work'}">Work</router-link></li>
					<li><router-link :to="{path: '/#enquire'}">Get in touch</router-link></li>
				</ul>
			</div>
    </footer>
</template>

<script setup >
    import { ref, onMounted } from 'vue';
    import Logo from './Logo.vue';

    const currentYear = ref('');

    onMounted(() => {
        currentYear.value = new Date().getFullYear().toString(); 
    });
</script>


<style scoped>
.back-to-top {
	position: absolute;
	top: 5px;
	right: 5px;
	color: var(--font-color);
	text-decoration: none;
	font-size: var(--fontSizeTiny);
	margin-bottom: 0;
	transition: 250ms ease;
}

.back-to-top:hover {
	opacity: var(--opacityHover);
}

.footer-grid {
	display: grid;
	grid: min-content/auto;
	justify-items: start;
}

.footer-logo-container {
	grid-template-rows: auto min-content;
}	

.footer-copy {
	font-size: var(--fontSizeFooter);
	color: var(--font-color);
}

.footer-menu ul li {
	list-style: none;
	font-size: var(--fontSizeFooter);
	color: var(--font-color);
}

.footer-menu a {	
	font-size: var(--fontSizeFooter);
	color: var(--font-color);
}

.footer-menu li a:hover {	
	opacity: var(--opacityHover);
}	

.get-intouch-container {
	gap: var(--gap);
	align-items: baseline;
}

@media (max-width: 1024px) {
	.footer-logo-container {
		grid-row: span 2;
	}

	.footer-menu {
    grid-column: 2;
  }
  
  .get-intouch-container {
    grid-column: 2;
  }
}

@media (max-width: 767px) {
	.footer-menu {
    grid-column: 1;
  }
  
  .get-intouch-container {
    grid-column: 1;
  }
}

</style>