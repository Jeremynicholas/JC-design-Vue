<template>
    <div class="scroller" v-if="!prefersReducedMotion">
        <ul class="skill-list scroller_inner">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Vue.js</li>
            <li>animation</li>
            <li>UI/UX</li>
            <li>Web Hosting</li>
        </ul>
    </div>
    <!-- <a class="reverse_btn" @click="reverseAnimation" >
        <svg class="arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fill-rule="evenodd">
                <path class="arrow__line" d="M0 5h7"></path>
                <path class="arrow__tip" d="M1 1l4 4-4 4"></path>   
            </g>
        </svg>
    </a> -->
</template>

<script setup>
import { ref, onMounted } from 'vue';

const prefersReducedMotion = ref(
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
);

onMounted(() => {
    if (!prefersReducedMotion.value) {

    const scrollers = document.querySelectorAll('.scroller');
    function addAnimation() {
        scrollers.forEach(scroller => {
            scroller.setAttribute("data-animated", true);

            const scrollerInner = scroller.querySelector('.scroller_inner');
            const scrollerContent = Array.from(scrollerInner.children)

            scrollerContent.forEach(skill => {
                const duplicatedItem = skill.cloneNode(true);
                duplicatedItem.setAttribute('aria-hidden', true);
                scrollerInner.appendChild(duplicatedItem);
            })
        });
        
    }
        addAnimation();

    }
});

function reverseAnimation() {
        const scrollers = document.querySelectorAll('.scroller');
        const reverseBtn = document.querySelector('.reverse_btn .arrow');

    scrollers.forEach((scroller) => {
    const currentDirection = scroller.getAttribute('data-direction');

        if (currentDirection === 'right') {
         scroller.setAttribute('data-direction', 'left');
         reverseBtn.style.scale = '1';
     } else {
        scroller.setAttribute('data-direction', 'right');
        reverseBtn.style.scale = '-1';

        }
  });
    }


</script>

<style scoped>
    .scroller {
        max-width: 500px;
    }

    .scroller_inner {
        display: flex;
        flex-wrap: wrap;
        padding-block: var(--gap);
        gap: var(--gap);
    }

    .scroller[data-animated="true"] {
        overflow: hidden;
        -webkit-mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
        mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent);
    }

    .scroller[data-animated="true"] .scroller_inner {
        flex-wrap: nowrap;
        width: fit-content;
        animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
    }

    .scroller[data-direction="right"] {
        --animation-direction: reverse;
    }


    .skill-list {
        margin: 0;
        padding-inline: 0;
        list-style: none;
    }

    .skill-list li {
        font-size: var(--fontSizeButtons);
        text-wrap: nowrap;
        white-space: nowrap;
        padding: 1rem;
        background: var(--background-light-blue);
        border-radius: var(--border-radius);
        box-shadow: var(--box-shadow);
    }

    @keyframes scroll {
        to {
            transform: translate(calc(-50% - var(--gap)/2));
        }
    }

    .reverse_btn .arrow {
        position: relative;
        margin-left: 5px;
        stroke-width: 2px;
        fill: none;
        stroke: var(--btn);
        transform: scale(-1);
        transition: var(--timingAll);   
    }
    .reverse_btn .arrow__line {
        opacity: 0;
    }
    .reverse_btn .arrow__tip {
        transform: translateX(0px);
        transition: var(--timingAll);
    }

    .reverse_btn:hover .arrow, .reverse_btn:hover .arrow__line {
        opacity: 1;
        stroke: black;

    }

    .reverse_btn:hover .arrow__tip, .reverse_btn:hover .arrow__tip {
        transform: translateX(3px);
    }


    @media (max-width: 767px) {
        .skill-list li {
            padding: 0.5rem;
        }
    }
</style>