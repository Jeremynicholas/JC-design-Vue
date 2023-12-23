<template>
    <Sections id="main-footer">
		<div class="back-to-top-container">
			<a class="back-to-top" href="#top" title="Back to top">Back to top</a>
		</div>
			<div class="footer-logo-container">
				<logo />
			</div>	
			<div class="footer-menu">
				<ul>
                    <li><router-link :to="{path: 'about'}">About</router-link></li>
					<li><router-link :to="{name: 'pricing'}">Pricing</router-link></li>
					<li><router-link :to="{name: 'work'}">Work</router-link></li>
					<li><router-link :to="{path: '/#enquire'}">Get in touch</router-link></li>
				</ul>
                <div class="get-intouch-container">
                    <ButtonCopy icon="fas fa-copy" text="Copy email" />
                </div>
			</div>
		<p>Copyright &copy; JC Design {{ currentYear }}</p>
    </Sections>
</template>

<script setup >
    import { ref, onMounted } from 'vue';
    import Sections from '../components/Sections.vue'
    import Logo from './Logo.vue';
    import ButtonCopy from './ButtonCopy.vue'

    const currentYear = ref('');

    onMounted(() => {
        currentYear.value = new Date().getFullYear().toString(); 
    });
</script>


<style scoped>
.back-to-top-container {
	position: absolute;
	top: 0;
	right: 0;
}


.back-to-top {
	color: var(--font-color);
	text-decoration: none;
	font-size: .8em;
	margin-bottom: 0;
	transition: 250ms ease;
}

.back-to-top:hover {
	font-size: 15px;
}

#main-footer {
	position: relative;
	background: var(--background-color);
	margin-top: 100px;
	text-align: center;
	font-size: 18px;
}

#main-footer p {		
	color: var(--font-reverse);
	font-size: 14px;
}

#main-footer .jc-logo {
	margin-left: 0;
	margin-right: 0;
}

#main-footer .jc-logo svg {
	fill: var(--font-reverse);
}

#main-footer .jc-logo span {
	color: var(--font-reverse);
}

.footer-border {
	border-bottom: solid;
	border-width: thin;
	border-color: var(--font-reverse);
	width: 50%;
	margin: 20px auto;
}	

.footer-logo-container {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 30px;
}

.footer-menu{
	display:flex;
	justify-content: center;
	text-align: center;
	margin-bottom: 30px;
}		

.footer-menu ul {
	padding-left: 0px;
}

.footer-menu ul li{
	list-style: none;
	display: inline-block;
	padding: 8px 20px;
	position: relative;
}


.footer-menu a {	
	color: var(--font-reverse);
	text-decoration: none;
}

.footer-menu li a::after{
	content: '';	
	width:0%;
	height: 2px;
	background: white;
	display: block;
	margin: auto;
	transition:0.3s;
}

.footer-menu li a:hover::after{	
	width: 100%;
}	
</style>