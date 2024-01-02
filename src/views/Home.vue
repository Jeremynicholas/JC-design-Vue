<template>
    <SectionMain>
      <Showcase />
    </SectionMain>
    
    <Sections>
        <AnchorLine :AnchorText="'About'" />
            <div class="grid_2_columns">
                 <div class="columns reverse">
                        <h2>About {{SITE_NAME}}</h2>
                        <p><span>{{SITE_NAME}} is an online web services company</span> dedicated to providing quality & innovative digital design.</p>
                        <p>Our products are designed to optimise your business and improve your efficiency. {{SITE_NAME}} separates itself by partnering with you to achieve your objectives with a <span>personal and flexible approach.</span></p>
                        <SkillsSlider />
                    </div>
                    
                    <div class="columns">			
                         <img src="/images/about-us.png" alt="about"/>
                    </div>
            </div>	
    </Sections>

    <!-- <SectionsNoPadding>
      <SkillsSlider />
    </SectionsNoPadding> -->

    <Sections id="services" class="has_background">
        <AnchorLine :AnchorText="'Services'" />
        <div class="grid">
          <div>
            <h2>Unique & modern websites built for you.</h2>   
            <p>Partnering with you to achieve your business objectives</p>
          </div>
          
          <div class="grid_3_columns card_grid">						
            <div class ="cards columns">
                <div>
                  <img src="/public/images/web-design-logo.png">
                  <div class="bottom-content" >
                  <h3>Website design</h3>
                    <ul>
                      <li>Begin your online presence</li>
                      <li>Modernise an existing website</li>
                      <li>Start selling products online</li>
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
                  <h3>Website migration</h3>
                    <ul>
                      <li>Upgrade your current hosting</li>
                      <li>Transfer your website</li>
                      <li>Create a subdomain or staging site</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </Sections>
    <Sections>
            <div class="grid_2_columns">
                 <div class="columns reverse">
                        <h2 style="margin: 10px auto;">What is the process?</h2>
                        <ul class="benefits">
                            <li><i class="fas fa-comment"></i>Initial Consult, say hello</li>
                            <li><i class="fas fa-pen"></i>First draft</li>
                            <li><i class="fas fa-check"></i>Complete draft</li>
                            <li><i class="fas fa-rocket"></i>Launch & go live!</li>
                            <li><i class="fas fa-headset"></i>Support & Maintenance</li>
                        </ul>
                    </div>
                    
                    <div class="columns">			
                         <img src="/images/phone-mock.png" :alt="$route.meta.pageTitle"/>
                    </div>
            </div>	
    </Sections>
    <Sections id="enquire">
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
    </Sections>
</template>

<script setup >
    import { SITE_NAME } from '../constants.js'
    import Showcase from '../components/homepage/Showcase.vue'
    import SectionMain from '../components/homepage/SectionMain.vue'
    import Sections from '../components/Sections.vue'
    import SkillsSlider from '../components/homepage/SkillsSlider.vue'
    import AnchorLine from '../components/AnchorLine.vue'
    import ContactForm from '../components/forms/ContactForm.vue'
</script>

<style scoped>

  #services {
    background: var(--background-light-blue);
    text-align: center;
  }

  .grid_2_columns {
    align-items: center;

    & .columns img {
      max-width: 100%;
    }
}

  .card_grid {
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
  }

  .card_grid .cards {
    display: flex;
    align-items: flex-start;
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

  .benefits {
        display: grid;
        gap: var(--gap);
        margin: auto;

        li {
            position: relative;
            list-style: none;  
            display: flex;
            align-items: center;
            padding: var(--columnPaddingInline);
            gap: var(--gap);  
            background: var(--background-light);
            border: 1px solid var(--border-color);
            border-bottom: 2px solid var(--accentBlue);
            border-radius: var(--border-radius); 
        }

        li i {
          color: var(--accentBlue);
        }

        li::after {
          content: '';
          position: absolute;
          left: 50%;
          top: 100%;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid var(--accentBlue);
          border-right: 2px solid var(--accentBlue);
          rotate: 45deg;
          background: var(--background-light);
          transform: translate(-50%, 0px);
        }

        li:last-child::after {
          display: none;
        }
    }

    @media (max-width: 1024px) {
      #services {
        text-align: left;
      }

      .benefits {
        width: 100%;
      }
    }

</style>



