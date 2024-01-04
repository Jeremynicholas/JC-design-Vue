<template>
    <div class="grid_2_columns">
        <div class="columns">
                <h1 class="home-title"><span>Web solutions</span> for you and your business.</h1> 
                <p class="body_font">I am a client focused web designer with half a decade experience working closely with people and organisations to design, <a href="/#enquire">build and deliver a successful online presence.</a> I have a broad range of experience across the health, not-for profit and travel industries.
</p> 
            <div class="get-intouch-container">
                <Button
                    icon="fas fa-fw fa-envelope"
                    text="Get in touch" 
                    @click="scrollToEnquire"/>
                <ButtonCopy icon="fas fa-copy" text="Copy email" />
            </div>
        </div>	
        <div class="columns">	
            <div class="background-clear">
                <div class ="social-icons hide-at-mob-large">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/jeremy-cameron/" target="_blank" title="Go to Jeremy's Linkedin profile">
                        <i class="fab fa-linkedin-in"></i></a></li>
                    </ul>
		        </div>
                <img class="overlay" src="/images/phone-mock.png" alt="about"/>
                <img src="/images/home-website-vector.png" alt="about"/>
            </div>
        </div>
    </div>
</template>

<script setup >
    import Button from '../Button.vue'
    import ButtonCopy from '../ButtonCopy.vue'
    import VueScrollTo from 'vue-scrollto';

    const { scrollTo } = VueScrollTo;

    const scrollToEnquire = () => {
        scrollTo('#enquire', 50, {easing: 'ease'});
    };

</script>

<style scoped>
    @media (min-width: 767px) {
    .grid_2_columns {
        grid-template-columns: 600px auto;
    }
}

 /*--COLUMN ONE---*/   
 .home-title {
        --MainFontMin: 54;
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

    .get-intouch-container {
        display: flex;
        justify-content: flex-start;
        margin-top: var(--gap);
        gap: var(--gap);
    }
    


 /*--COLUMN TWO---*/   
    .overlay {
        position: absolute;
        width: 40%;
        left: -20%;
        bottom: -15%;
    }
    .background-clear {
        background: rgba(255,255,255,0.6); 
        padding: var(--columnPaddingNormal);
        box-shadow: var(--box-shadow-large);
        width: 600px;
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow-large);
        transform: translate(30%, 0%);
    }


    .social-icons {
      z-index: 99;
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
        background: var(--background-light);
        font-size: var(--fontSizeButtons);
        padding:  10px;
        height: 20px;
        width: 20px;
        border-radius: var(--border-radius);
        border: 1px solid var(--dark);
        transition: var(--timingAll);
    }	

    .social-icons li a:hover {
        background: var(--bg-hover);
        color: white; 
    }    

    @media (max-width: 1024px) {
        .background-clear {
            transform: translate(20%, 0%);
        }
    }

    @media (max-width: 767px) {
        .background-clear {
            width: 60%;
        }
    }
</style>


