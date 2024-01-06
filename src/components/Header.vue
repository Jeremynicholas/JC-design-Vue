<template>
    <header id="header top">
        <div class ="site_container">
			<nav class="nav-header">
				<Logo />
				<div class="burger show-at-mob-large">
					<div class="burger-top"></div>
					<div class="burger-middle"></div>
					<div class="burger-bottom"></div>
				</div>
				<div class="menu-wrapper">
					<div class="main-menu">
						<ul class = "nav-links">
							<Logo id="mobileLogo" class="show-at-mob" />
							<li><RouterLink :to="{ path: 'about' }">About</RouterLink></li>
							<li><RouterLink :to="{ path: 'pricing' }">Pricing</RouterLink></li>
							<li><RouterLink :to="{ path: 'work' }">Work</RouterLink></li>
							<li><RouterLink :to="{ 
								path: '/' }"  
								class="scroll-to-enquire">
								Get in touch</RouterLink>
							</li>
						<ul class ="social-icons-mobile show-at-mob-large">
							<li><a href="https://www.linkedin.com/in/jeremy-cameron/" target="_blank" title="Go to Jeremy's Linkedin profile">
								<i class="fab fa-linkedin-in"></i></a></li>
							<!-- <li><a href="https://dribbble.com/jemcam/" target="_blank" title="Go to Jeremy's Dribble profile">
								<i class="fab fa-dribbble"></i></a></li>
							<li><a href="#"><i class="fab fa-facebook"></i></a></li> -->
						</ul>
							<li class="theme">
								<i class="light fas fa-sun"></i>
								<i class="dark fas fa-moon"></i>
							</li>
						</ul>
					</div>		
				</div>
			</nav>
        </div>					     	
	</header>
</template>

<script setup>
import Logo from './Logo.vue';
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import { scrollToEnquire } from '../constants';

const link = ref(null);

onMounted(() => {
//Anchor Scroll
link.value = document.querySelector('.scroll-to-enquire');
		if (link.value) {
		link.value.addEventListener('click', () => {
			setTimeout(() => {
			scrollToEnquire();
			}, 150)
		});
	}


//Dark & Light Toggle
	document.querySelector(".theme").addEventListener ('click', () => {
		document.body.classList.toggle('dark');
	})

//Mobile NAV menu
  const navSlide = () => {
	const burger = document.querySelector('.burger');
	const mobileMenu = document.querySelector('.main-menu');
	const navWrapper = document.querySelector('.menu-wrapper');
	const nav = document.querySelector('.nav-links');
	const navLinks = document.querySelectorAll('.nav-links li');
	const mobileLogo = document.getElementById('mobileLogo');
  
	burger.addEventListener('click', () => {
		navWrapper.classList.toggle('active');
		mobileMenu.classList.toggle('active');
		nav.classList.toggle('active');
	  	burger.classList.toggle('toggle');
  
	  navLinks.forEach((link, index) => {
		if (link.style.animation) {
		  link.style.animation = '';
		} else {
			setTimeout(() => {
		  		link.style.animation = `navLinkFade 0.5s ease forwards`;
			}, index * 250);
		}
	  });
	});

	mobileLogo.addEventListener('click', () => {
      navWrapper.classList.remove('active');
      mobileMenu.classList.remove('active');
      nav.classList.remove('active');
      burger.classList.remove('toggle');
    });
  
	navLinks.forEach(link => {
	  link.addEventListener('click', () => {
		navWrapper.classList.remove('active');
		mobileMenu.classList.remove('active');
		nav.classList.remove('active');
		burger.classList.remove('toggle');  
		navLinks.forEach(link => {
		  link.style.animation = '';
		});
	  });
	});
  }; navSlide();

});

</script>



<style scoped>
header {
    position: fixed;
	z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
	height: 80px;
	background: var(--background);
    border-bottom: 1px solid var(--border-color);
	transition: all .5s ease;
}
header.sticky {
	box-shadow: var(--box-shadow);
}

.nav-header {
    display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 60px;
	padding: 10px var(--columnPaddingNormal) 10px;
}

.nav .fa, .far, .fas {
	padding-right: 10px;
}

.fa-fw {
	padding-right: 10px;
}	

.nav-links {
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: auto;
	padding-left: 0px;
}		

.nav-links li{
	list-style: none;
	display: inline-block;
	padding: 8px 20px;
	position: relative;
}

.nav-links a {	
	font-size: var(--fontSizeSmall);
	color: var(--font-color);
	text-decoration: none;
}

.nav-links li::after {
	content: '';	
	width:0%;
	height: 2px;
	background: var(--font-color);
	display: block;
	margin-top: 3px;
	transition: 0.3s;
}

.nav-links  li:hover::after {	
	width: 100%;
}

.nav-links li:not(:nth-child(5)) .router-link-exact-active {
	color: var(--accentBlue);
}

.nav-links li:not(:nth-child(5)):has(.router-link-exact-active)::after  {
	background: var(--accentBlue);
}

/*-----MEDIA QUERIES @ 1024px-----*/	
@media (max-width: 1024px) {
	.menu-wrapper {
		visibility: hidden;
		position: absolute;
		right: 0;
		top: 0;
		width: 100%;
		overflow: hidden;
	}

	.menu-wrapper.active {
		visibility: visible;
	}

	.main-menu {
		position: relative;
		transform: translateY(-100%);
		transform-origin: 50% 0;
		margin-left: auto;
		padding: 20px;
		opacity: 0;
		width: calc(50% + 20px - 4px);
		z-index: 9;
		transition: var(--timingAll);
	}
	
	.main-menu.active {
		transform: translateY(0);
		height: calc(100vh - 40px);
		opacity: 1;
	}

	.nav-links {
		position: relative;
		overflow: hidden;
		transition: var(--timingAll);
		flex-direction: column;
		align-items: flex-start;
		background: var(--background);
		border-radius: 10px;
		min-height: 300px;
		height: 0%;
		padding-top: 60px;
		box-shadow: var(--box-shadow-large);
	}

	.nav-links li:not(.social-icons-mobile li, .theme) {
		border-bottom: 1px dashed var(--border-color);
		width: 100%;
	}


	.nav-links li::after {
		content: none;
	}

	.nav-links > li:hover {
		opacity: var(--opacityHover);
	}
	

	.burger {
		display: block;
		cursor: pointer;
		z-index: 10;
	}

	.burger div {
		width: 20px;
		height: 2px;
		background-color: var(--font-color);
		margin: 4px;
		transition: all 0.3s ease;
	}



	.toggle .burger-middle {
    	opacity: 0;
	}

	.social-icons-mobile {
		display: flex;
		bottom: 20px;
		opacity: 1;

		& li {
			padding: 20px 20px;
		}	
	}
}


@media (max-width: 767px) {
	.jc-logo.show-at-mob {
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: 10;
		display: flex;
	}

	.main-menu {
		width: auto;
	}

	.nav-links {
		padding-top: 70px;
		
		& .theme {
			margin-left: auto;
		}
	}
}




/*--------------------------------ANIMATION----------------------*/	
.toggle .burger-top {
	animation: burger-top .5s ease forwards;
}	

.toggle .burger-middle{
	opacity: 0;
}

.toggle .burger-bottom{
	animation: burger-bottom .5s ease forwards;	
}

.toggle.burger {
		animation: burger-div .5s ease forwards;
		animation-delay: .3s ;	
}

	
@keyframes burger-div {
	100% {	transform: rotate(180deg); }
}    

@keyframes burger-top {
	0% { transform: translateY(0px); }
	33% { transform: translateY(7px); }
	100% {	transform: rotate(-45deg) translate(-5px,5px); }
}

@keyframes burger-bottom {
	0% { transform: translateY(0px); }
	33% { transform: translateY(-7px); }
	100% {	transform: rotate(45deg) translate(-4px,-4px); }
}  
		

@keyframes navLinkFade {
		from {
			opacity: 0;
			transform: translateX(50px); 
	}
		to {
			opacity: 1;
			transform: translateX(0px);	
	}
}	

</style>