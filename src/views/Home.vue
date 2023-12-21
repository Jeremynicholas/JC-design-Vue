<template>
    <SectionMain>
      <Showcase />
    </SectionMain>

    <Section id="services">
      <div class="anchor-line">
        <span></span>
        <h4>Services</h4>
      </div>
      <h2>Products & Services.</h2>   
      <p>Partnering with you to achieve your business objectives</p>
      <div class="grid_3">						
        <div class ="cards">
            <div class ="column-thirds-content">
              <img src="/public/images/web-design-logo.png">
              <div >
              <h3>Web Design</h3>
              <ul>
                <li>Wordpress sites built with the latest tech</li>
                <li>Easy client management</li>
                <li>Ecommerce capabilities</li>
              </ul>
              </div>
            </div>	
				</div>
				
				<div class ="cards">
            <div class ="column-thirds-content">
              <img src="/public/images/graphic-design-logo.png">
              <div >
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
						<div class ="column-thirds-content">
							<img src="/public/images/product-design-logo.png">
							<div>
							<h3>Digital Marketing</h3>
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
</script>

<style>

  #services {
    background: var(--background-light-blue);
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
    border-color: var(--border-color);
  }

  .grid_3 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: var(--gapLarge)
  }

  .grid_3 .cards {
    display: flex;
    align-items: center;
    text-align: center;
  }

  .grid_3 img {
    width: 100%;
  }
</style>



