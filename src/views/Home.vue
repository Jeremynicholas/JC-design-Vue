<template>
    <SectionMain>
      <Showcase />
    </SectionMain>

    <SectionsNoPadding>
      <SkillsSlider />
    </SectionsNoPadding>

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
            <div class="form-style">
              <form class ="contact-form" name="contact-form" method="post" 
                  data-netlify="true"
                  data-netlify-honeypot="bot-field">
                <div class="form-field">
                  <label>Name</label>
                  <input type="text" name="Name" placeholder="Name" required>
                  </div>
                <div class="form-field">
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Email Address" required>
                  </div>

                <div class="form-field">
                  <label>Message</label>
                  <textarea name="message" rows="3" placeholder="Message (optional)"></textarea>
                  </div>
                
                <div class="form-field">		
                  <label>Budget</label>	
                  <textarea name="budget" rows="0" placeholder="Budget (optional)"></textarea>
                  </div>
                <div>	
                  <button class="submit_btn" type="submit" name="submit" >Enquire Now</button>
                  </div>
              </form>	
            </div>
        </div>		
		  </div>
    </Section>
</template>

<script setup >
    import Showcase from '../components/homepage/Showcase.vue'
    import SectionMain from '../components/homepage/SectionMain.vue'
    import Section from '../components/Sections.vue'
    import SectionsNoPadding from '../components/SectionsNoPadding.vue'
    import SkillsSlider from '../components/homepage/SkillsSlider.vue'
    import AnchorLine from '../components/AnchorLine.vue'
</script>

<style>

  #services {
    background: var(--background-light-blue);
    text-align: center;
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
    list-style: none;
  }



  .form-style {
	position: relative;
	text-align: left;
}		

.form-field	{
	padding:10px 0px 10px 0px;
}


.form-field label	{
	display: none;
	border: none;
	width: 100%;
}		

.form-field input	{
	background: var(--background);
	border-width: 0px 0px 2px 0px;
	border-color: var(--font-color-placeholder);
	color: var(--font-color);
	font-size: 16px;
	font-family: 'Montserrat' ;
	padding: 10px 0px 10px 0px;
	width: 100%;
}	

::-webkit-input-placeholder	{
	color: var(--font-color-placeholder);
}	

.form-field textarea	{
	background: var(--background);
	border-width: 0px 0px 2px 0px;
	border-color: var(--font-color-placeholder);
	font-size: 16px;
	font-family: 'Montserrat';
	color: var(--font-color);
	width: 100%;
	outline: none;
}	


.form-field input:focus-visible {
	outline: none;
}	

.submit_btn {
        margin-top: 20px;
        background: var(--btn);
        color: white;
        font-size: var(--fontSizeButtons);
        padding: 10px 15px;
        border: none;
        border-radius: var(--border-radius-buttons);
        box-shadow: var(--box-shadow);
        text-decoration: none;
        cursor: pointer;
        transition: var(--timingAll);
    }

    .submit_btn:hover {
        background: var(--btn-hover);  
    }

</style>



