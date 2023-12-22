<template>
    <div class="flex-row">
        <div class="home-container">
                <h1 class="home-title"><span>Web solutions</span> for you and your business.</h1> 
                <p class="body_font">I am a client focused web designer with half a decade experience working closely with people and organisations to design, <a href="/#enquire">build and deliver a successful online presence.</a> I have a broad range of experience across the health, not-for profit and travel industries.
</p> 
            <div class="get-intouch-container">
                <Button icon="fas fa-fw fa-envelope" text="Get in touch" url="#enquire" />
                <ButtonCopy icon="fas fa-copy" text="Copy email" />
            </div>
            <div class ="social-icons hide-at-mob-large">
			<ul>
				<li><a href="https://www.linkedin.com/in/jeremy-cameron-12b72185/" target="_blank" title="Go to Jeremy's Linkedin profile">
					<i class="fab fa-linkedin-in"></i></a></li>
				<li><a href="https://dribbble.com/jemcam/" target="_blank" title="Go to Jeremy's Dribble profile">
					<i class="fab fa-dribbble"></i></a></li>
				<li><a href="#"><i class="fab fa-facebook"></i></a></li>
				</ul>
		    </div>	
        </div>	
    </div>
</template>

<script setup >
    import Button from '../Button.vue'
    import ButtonCopy from '../ButtonCopy.vue'

</script>

<style scoped>
    .home-title {
        --MainFontMin: 50;
        --MainFontMax: 80;
        --MainFont: calc(var(--MainFontMin)*1px + (var(--MainFontMax) - var(--MainFontMin))*(var(--windowWidth) - var(--viewportMin)*1px)/(var(--viewportMax) - var(--viewportMin)));

        font-size: var(--MainFont);
        margin-bottom: 30px;
    }

    .home-title span {
        mix-blend-mode: overlay;
        color: var(--accent-pink);
    }

    @media (min-width: 1200px) {
    .home-title {
      --MainFont: 5rem;
        }
    }

    .home-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 600px;
        gap: var(--gap)
    }
    .home-slider-container {
	    overflow: hidden;
    }
    .text-slides {
        display: flex;
        height: 100%;
    }
    .text-slide {
        min-width: 100%;
    }

    .text-slides h2 {
        font-weight: var(--font300);
        padding: 20px 0px 20px 0px;
    }

    .get-intouch-container {
        display: flex;
        justify-content: flex-start;
        margin-top: var(--gap);
        gap: var(--gap);
    }
    
    .social-icons {
        position: absolute;
        top: 50%;
        right: 10px;
        z-index: 10;
    }		

    .social-icons ul li {
        list-style: none;
        text-align: center;
        margin-top: 15px;
    }
        
    .social-icons li a {
        display: flex; 
        justify-content: center;
        align-items: center;
        color: var(--font-color);
        font-size: var(--fontSizeButtons);
        padding:  10px;
        height: 20px;
        width: 20px;
        border-radius: var(--border-radius);
        border: 1px solid var(--font-color);
        transition: var(--timingAll);
    }	

    .social-icons li a:hover {
        background: var(--btn-hover);
        color: white; 
    }    

</style>


