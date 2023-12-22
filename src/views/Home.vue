<template>
    <SectionMain>
      <Showcase />
    </SectionMain>

    <SectionsNoPadding>
      <SkillsSlider />
    </SectionsNoPadding>

    <Section id="services" class="has_background">
          <div class="anchor-line">
          <span></span>
          <h4>Services</h4>
        </div>
        <div class="grid">
          <div>
            <h2>Products & Services.</h2>   
            <p>Partnering with you to achieve your business objectives</p>
          </div>
          
          <div class="grid_3">						
            <div class ="cards">
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
            
            <div class ="cards">
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
            <div class ="cards">
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
</template>

<script setup >
    import Showcase from '../components/homepage/Showcase.vue'
    import SectionMain from '../components/homepage/SectionMain.vue'
    import Section from '../components/Sections.vue'
    import SectionsNoPadding from '../components/SectionsNoPadding.vue'
    import SkillsSlider from '../components/homepage/SkillsSlider.vue'
</script>

<style>

  #services {
    background: var(--background-light-blue);
    text-align: center;
  }
  .anchor-line {
    display: flex;
	  align-items: center;
  }

  .anchor-line span {
    content: '';
    display: flex;
    border-bottom: 1.5px solid #000;
    width: 20px;
    margin-right: 10px;
    border-color: var(--accentBlue);
  }

  .grid_3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: var(--gapLarge)
  }

  .grid_3 .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .grid_3 img {
    width: 100px;
  }

  .grid_3 .bottom-content {
    display: flex;
    flex-direction: column;
    gap: var(--gap);
  }

  .grid_3 .cards li {
    list-style: none;
  }

</style>



