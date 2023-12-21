<template>
    <section class ="section">
        <div class ="section_container">
            <div class="showcase_gradient">
            </div>
            <div class="section_container_width">
                <div class="section_container_layout">
                    <slot />
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
body.dark .showcase_gradient {
    --gradientColorOne: #92381f;
    --gradientColorTwo: #2e5c6e;
    --gradientColorThree: #86692b;
}

.showcase_gradient {
        --gradientColorOne: #8bb44e;
        --gradientColorTwo: #90e0ff;
        --gradientColorThree: #ffcb57;
        --gradientColorFour: #ab5acd;
        --gradientAngle: -12deg;
        --gradientHeight: 100%;
        --transformOriginX: -60px;
        position: absolute;
        width: var(--windowWidth);
        height: 480px;
        transform-origin: var(--transformOriginX) 100%;
        transform: skewY(var(--gradientAngle));
        overflow: clip;
        z-index: -1;
        border: none;   
    }
    .showcase_gradient:after {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        min-width: 1000px;
        width: 100%;
        height: 100%;
        background: -webkit-linear-gradient(315deg, var(--gradientColorOne) 3%, var(--gradientColorTwo) 38%, var(--gradientColorTwo) 68%, var(--gradientColorFour) 98%);
        background: linear-gradient(315deg, var(--gradientColorOne) 3%, var(--gradientColorTwo) 38%, var(--gradientColorTwo) 68%, var(--gradientColorFour) 98%);
        animation: gradient 15s ease infinite;
        background-size: 400% 400%;
        background-attachment: fixed;
    }

    @keyframes gradient {
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
    }
</style>
