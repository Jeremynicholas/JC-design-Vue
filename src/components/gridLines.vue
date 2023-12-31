<template>
    <section class="grid__section">
        <div class="grid__wrapper">
            <div class="grid_container">
                <div class="grid_lines"></div>
                <div class="grid_lines"></div>
                <div class="grid_lines"></div>
                <div class="grid_lines"></div>
                <div class="grid_lines"></div>
            </div>
        </div>
    </section>
</template>

<style>
    .grid__section {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        overflow: hidden;

    }

    .grid__wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        pointer-events: none;
    }
    .grid_container {
        position: relative;
        display: grid;
        grid: 1fr/repeat(4, 1fr);
        height: 100%;
        width: calc(var(--layoutWidth) + var(--columnPaddingNormal));
        margin: 0 auto;
    }

    .grid_lines {
        width: 1px;
        background: linear-gradient(180deg,var(--grid-lines),var(--grid-lines) 50%,transparent 0,transparent);
        background-size: 1px 8px

    }

    .grid_lines:first-of-type, .grid_lines:last-of-type {
        background: var(--grid-lines);
    }

    .grid_lines:last-of-type {
        position: absolute;
        height: 100%;
        top: 0;
        right: 0;
    }

    @media (max-width: 1024px) {
        .grid_container {
            grid: 1fr/repeat(2, 1fr);
            width: calc(100vw - var(--columnPaddingNormal));
        }
    }
</style>