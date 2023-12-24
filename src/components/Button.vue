<template>
    <a class="buttons" :href="url">
        <i v-if="icon" :class="icon"></i> {{ text }}
        <svg class="arrow" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
            <g fill-rule="evenodd">
                <path class="arrow__line" d="M0 5h7"></path>
                <path class="arrow__tip" d="M1 1l4 4-4 4"></path>   
            </g>
        </svg>
    </a>
</template>

<script setup>
    const props = defineProps(['icon', 'text', 'url']);
</script>

<style scoped>
    .buttons {
        background: var(--btn);
        color: white;
        font-size: var(--fontSizeButtons);
        padding: 10px 15px;
        border-radius: var(--border-radius-buttons);
        box-shadow: var(--box-shadow);
        text-decoration: none;
        cursor: pointer;
        transition: var(--timingAll);
    }

    .buttons:hover {
        background: var(--btn-hover);  
    }

    .arrow {
        position: relative;
        margin-left: 5px;
        stroke-width: 2px;
        fill: none;
        stroke: white;
        transition: var(--timingAll);   

    }

    .arrow__line {
        opacity: 0;
    }

        .arrow__tip {
        transform: translateX(0px);
        transition: var(--timingAll);
    }

    .buttons:hover .arrow__line, button:hover .arrow__line {
        opacity: 1;
    }

    .buttons:hover .arrow__tip, button:hover .arrow__tip {
        transform: translateX(3px);
    }

    @media (max-width: 767px) {
        .buttons i {
            display: none;
        }
    }

</style>