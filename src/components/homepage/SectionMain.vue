<template>
    <section class ="section">
        <div class ="section_container">
            <div class="showcase_gradient">
                <canvas class="canvas" width="516" height="600"></canvas>
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
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 480px;
        transform-origin: -60px 100%;
        transform: skewY(-12deg);
        overflow: clip;
        z-index: -1;
        border: none;   
    }

    .canvas {
        position: relative;
        display: block;
        width: inherit;
        height: 100%;
    }
    .showcase_gradient::after {
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
        animation: gradient 50s ease infinite;
        background: radial-gradient(var(--gradientColorOne) 40%,var(--gradientColorTwo) 60%) -620px -180px no-repeat,radial-gradient(var(--gradientColorThree) 33%,var(--gradientColorFour) 67%) -120px -24px no-repeat,radial-gradient(var(--gradientColorOne) 40%,var(--gradientColorThree) 70%) -470px 150px no-repeat,var(--gradientColorFour);
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

    @media (max-width: 767px) {
        .showcase_gradient {
            height: 300px;
        }

    }
</style>
