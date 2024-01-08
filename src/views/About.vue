<template>
    <ShowcaseSub />
    <Sections id="to_next">
            <div class="grid_2_columns">
                 <div class="columns reverse">
                        <h2>What are the benefits of having a website for your business?</h2>
                        <ul class="benefits">
                            <li><Tick class="tick"/>An online presence builds trust and credibility.</li>
                            <li><Tick class="tick"/>Engage which more clients that discover you online.</li>
                            <li><Tick class="tick"/>Free up your phones by having answers to common questions.</li>
                            <li><Tick class="tick"/>Display your booking system so that it is unique to you. </li>
                        </ul>
                    </div>
                    
                    <div class="columns flip-mob">			
                         <img src="/images/benefits.png" :alt="$route.meta.pageTitle"/>
                    </div>
            </div>	
    </Sections>
    <Sections>
        <div class="grid">
          <div style="text-align: center;">
            <h2>Benefits of working with {{ SITE_NAME }}.</h2>   
          </div>
          
          <div class="grid_3_columns card_grid">						
            <div class ="cards columns">
                <i class="fas fa-mobile-alt"></i>
                <div class="bottom-content" >
                    <h3>Fully respsonive</h3>
                    <p>This means your website will remain user friendly and easy to use no matter which device it is viewed on delivering the best experience for all users.</p>
                </div>
            </div>
            <div class ="cards columns">
                <i class="fas fa-lock"></i>
                <div class="bottom-content" >
                    <h3>Security</h3>
                    <p>Websites built by {{ SITE_NAME }} do not collect private information. Our websites use SSL security and are updated and monitored regularly for security risks.</p>
                </div>
            </div>
            <div class ="cards columns">
                <i class="fas fa-folder-open"></i>
                <div class="bottom-content" >
                    <h3>Content Management</h3>
                    <p>Most of our websites are built using WordPress which allows for easy user control and management for you or your staff.</p>
                </div>
            </div>
            <div class ="cards columns">
                <i class="fas fa-headset"></i>
                <div class="bottom-content" >
                    <h3>Maintenance & Support</h3>
                    <p>All {{ SITE_NAME }} clients benefit from ongoing support, so we you wont be left hanging once your site is up and running.

</p>
                </div>
            </div>
            <div class ="cards columns">
                <i class="fas fa-globe"></i>
                <div class="bottom-content" >
                    <h3>Tailormade websites</h3>
                    <p>All of our websites are customized to each client’s needs. We make sure your website is a true reflection of your company from small GP clinics, to hospitals, specialists, and everything in between.</p>
                </div>
            </div>
            <div class ="cards columns">
                <i class="fas fa-rocket"></i>
                <div class="bottom-content" >
                    <h3>Reliable Hosting</h3>
                    <p>Web hosting is crucial for a secure, scalable, and efficient online presence. {{ SITE_NAME }} offers <router-link :to="{ path: 'pricing' }">affordable hosting options</router-link> tailored to the needs of your website</p>
                </div>
            </div>
          </div>
      </div>
    </Sections>
</template>

<script setup >
    import { RouterLink } from 'vue-router';
    import Sections from '../components/Sections.vue'
    import ShowcaseSub from '../components/ShowcaseSub.vue'
    import { SITE_NAME } from '../constants';
    import Tick from '../components/icons/Tick.vue'
</script>

<style scoped>
    .grid_2_columns .columns img {
        max-width: 100%;
    }
    

    .grid_3_columns {
        align-items: start;
    }

    .grid_3_columns .columns {
        text-align: center;
        row-gap: var(--gap);
        justify-items: center;
    }
    .benefits {
        display: grid;
        gap: var(--gap);

        li {
            list-style: none;  
            display: flex;
            align-items: flex-start;
            gap: var(--gap);  
        }
    }

    .cards i {
        font-size: 22px;
        color: var(--accentBlue);
    }

    .tick {
        height: 30px;
        width: 30px;
        scale: 1.5;
    }

    .bottom-content {
        display: grid;
        gap: var(--gap);
    }

</style>

