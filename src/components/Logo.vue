<template>
        <div class="jc-logo">
        <router-link :to="{name: 'home'}">
                <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 284.17 157.01"><path class="" d="M153.6,106.4q-4,20.85-17.08,35.68t-33.93,21.75q-32.24,10.72-59.74-3.14Q16.61,147.48,5.57,117.28c-.35-1-.7-2-1-3L26,95.74c.38,1.14,4.65,11.93,5.09,13A51.63,51.63,0,0,0,44.25,128a45.86,45.86,0,0,0,22.69,11.5,52.48,52.48,0,0,0,26.77-2.17q20-6.66,29.14-24.88t2.47-38.22q-7.57-22.8-32.26-35H45.11L28.78,13.8h74.13v.1a84.65,84.65,0,0,1,48,51.35A80.2,80.2,0,0,1,153.6,106.4Zm70.17,33.76q-20-6.66-29.14-24.88t-2.47-38.22q7.58-22.8,32.27-35h47.94l16.34-25.37H214.57v.1a84.72,84.72,0,0,0-48,51.35,80.2,80.2,0,0,0-2.73,41.15q4,20.87,17.08,35.68c8.72,9.88,19.6,18.71,33.93,21.76,11.7,2.49,20.39,4.12,40.92,4.12h25.64l.05-26.91H251.39C242.68,143.9,233.06,143.25,223.77,140.16Z" transform="translate(-4.54 -13.8)"/></svg>
                <span>design.</span>
        </router-link>
        </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

</script>

<style scoped>
.jc-logo a {
        display: flex;
	align-items: center;
	gap: 5px;
	margin-right: auto;
	height: 30px;
        text-decoration: none;
}
.jc-logo .svg {
	fill: var(--font-color);
	height: 30px;
}

.jc-logo span {
	color: var(--font-color);
	font-weight: var(--font600);
	font-size: 30px;
}

@media (max-width: 767px) {
	.show-at-mob.jc-logo {
		& .svg  {
		fill: var(--accentBlue);
	}
		& span {
			color: var(--accentBlue);
		}
	}
}


</style>
