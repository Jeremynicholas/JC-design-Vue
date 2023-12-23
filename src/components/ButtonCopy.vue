<template>
    <a class="button_copy" @click="copyToClipboard('hello@jcdesign.com.au')">
        <i v-if="icon" :class="icon"></i> {{ text }}
        <svg class="arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fill-rule="evenodd">
                <path class="arrow__line" d="M0 5h7"></path>
                <path class="arrow__tip" d="M1 1l4 4-4 4"></path>   
            </g>
        </svg>
        <span class="tooltip">Copied!</span>
    </a>
</template>

<script setup>
import { defineProps } from 'vue';
    const props = defineProps ({    
        icon: String,
        text: String,
        clipboardText: String,
    });
      
    function copyToClipboard(clipboardText) {
            navigator.clipboard.writeText(clipboardText)
                .then(() => {
            const tooltip = document.querySelector('.tooltip');
            tooltip.classList.add('show');
                setTimeout(() => {
                    tooltip.classList.remove('show');
                }, 1000);
                })
                .catch((err) => {
                console.error('Unable to copy to clipboard', err);
                });
    };
</script>

<style scoped>
    .button_copy {
        position: relative;
        border: 3px solid var(--btn);
        background: var(--btnTransparent);
        color: var(--btn);
        font-size: var(--fontSizeButtons);
        padding: 8px 15px;
        border-radius: var(--border-radius-buttons);
        box-shadow: var(--box-shadow);
        cursor: pointer;
        transition: var(--timingAll);
        }
    .button_copy:hover {
        border: 3px solid var(--btn-hover); 
        background: var(--btn-hover);  
        color: white;
    }

    .arrow {
        position: relative;
        margin-left: 5px;
        stroke-width: 2px;
        fill: none;
        stroke: var(--btn);
        transition: var(--timingAll);   
    }
    .arrow__line {
        opacity: 0;
    }
    .arrow__tip {
        transform: translateX(0px);
        transition: var(--timingAll);
    }

    .button_copy:hover .arrow, .button_copy:hover .arrow__line {
        opacity: 1;
        stroke: white;

    }

    .button_copy:hover .arrow__tip, button:hover .arrow__tip {
        transform: translateX(3px);
    }

    .tooltip {
        position: absolute;
        right: 0;
        top: -10px;
        transform: translate(-50%, -100%);
        visibility: hidden;
        transition: .5s;
        background: var(--background-light-blue);
        border-radius: var(--border-radius);
        padding: 5px;
        color: var(--font-color);
        font-size: var(--fontSizeTiny);
        box-shadow: var(--box-shadow);
    }

    .tooltip::after {
        position: absolute;
        z-index: -1;
        bottom: 0;
        left: 50%;
        content: '';
        background: var(--background-light-blue);
        height: 10px;
        width: 10px;
        display: block;
        transform: translateX(-50%) rotate(45deg);
    }

    .tooltip.show {
        visibility: visible;
    }	

    @media (max-width: 767px) {
        .button_copy i {
            display: none;
        }
    }

</style>