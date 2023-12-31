<template>
    <SectionMain>
      <Showcase />
    </SectionMain>

    
    <Section>
        <AnchorLine :AnchorText="'About'" />
            <div class="grid_2_columns">
                 <div class="columns reverse">
                        <h2>About {{SITE_NAME}}</h2>
                        <p><span>{{SITE_NAME}} is a online web services</span> company dedicated to providing quality & innovative digital design.</p>
                        <p>Our products are designed to optimise your business and improve your efficiency. JC Design separates itself by partnering with you to achieve your objectives with a <span>personal and flexible approach.</span></p>
                        <SkillsSlider />
                    </div>
                    
                    <div class="columns">			
                         <img src="/images/about-us.png" alt="about"/>
                    </div>
            </div>	
    </Section>

    <!-- <SectionsNoPadding>
      <SkillsSlider />
    </SectionsNoPadding> -->

    <Section id="services" class="has_background">
        <AnchorLine :AnchorText="'Services'" />
        <div class="grid">
          <div>
            <h2>Products & Services.</h2>   
            <p>Partnering with you to achieve your business objectives</p>
          </div>
          
          <div class="grid_3_columns card_grid">						
            <div class ="cards columns">
                <div>
                  <img src="/public/images/web-design-logo.png">
                  <div class="bottom-content" >
                  <h3>Website Design</h3>
                    <ul>
                      <li>Wordpress sites built with the latest tech</li>
                      <li>Easy client management</li>
                      <li>Ecommerce capabilities</li>
                    </ul>
                  </div>
                </div>	
            </div>
            
            <div class ="cards columns">
                <div>
                  <img src="/public/images/graphic-design-logo.png">
                  <div class="bottom-content">
                  <h3>Backend management</h3>
                    <ul>
                      <li>Domain/Hosting Management</li>
                      <li>Maintenance</li>
                      <li>Email setup</li>
                    </ul>
                  </div>
                </div>	
            </div>	
            <div class ="cards columns">
                <div>
                  <img src="/public/images/product-design-logo.png">
                  <div class="bottom-content">
                  <h3>Digital Marketing</h3>
                    <ul>
                      <li>Domain/Hosting Management</li>
                      <li>Maintenance</li>
                      <li>Email setup</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </Section>
    <Section id="enquire">
        <AnchorLine :AnchorText="'Contact'" />
        <div class="grid_2_columns">
			      <div class="columns">
					    <h2>Lets get in touch, message me for a quote today.</h2>
					    <p>Ready to take your project to the next step? Please leave as much detail as possible and I will get back to you promptly.</p>
					    <a href="mailto:hello@jcdesign.com.au" title="Contact me for a quote"><i class="fa fa-fw fa-envelope"></i>hello@jcdesign.com.au</a>
			    </div>
			
          <div class="columns">			
            <ContactForm />
        </div>		
		  </div>
    </Section>
</template>

<script setup >
    import { SITE_NAME } from '../constants.js'
    import Showcase from '../components/homepage/Showcase.vue'
    import SectionMain from '../components/homepage/SectionMain.vue'
    import Section from '../components/Sections.vue'
    import SkillsSlider from '../components/homepage/SkillsSlider.vue'
    import AnchorLine from '../components/AnchorLine.vue'
    import ContactForm from '../components/forms/ContactForm.vue'
    import ContactFormTest from '../components/forms/ContactFormTest.vue'
</script>

<style>

  #services {
    background: var(--background-light-blue);
    text-align: center;
  }

  .grid_2_columns {
    align-items: center;

    & .columns img {
      max-width: 100%;
    }

    & .columns span {
      color: var(--accentBlue);
      font-weight: var(--font400);
    }
}

  .card_grid {
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  }

  .card_grid .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .card_grid img {
    width: 100px;
  }

  .card_grid .bottom-content {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  .card_grid .cards li {
    list-style: '›';
    text-align: left;
    padding-left: 10px;
  }

</style>



