<template>
    <article class="btns-panel">
        <section class="btns-panel__btns-list">
            <slot name="numbers-list">
                <p>
                    No numbers list
                </p>
            </slot>
        </section>

        <section class="btns-panel__operations-list">
            <slot name="options-list">
                <p>
                    No options
                </p>
            </slot>
        </section>
    </article>
</template>

<script>
export default {

};
</script>

<style lang="postcss">
@custom-media --tablet-w (max-width: 764px);

.btns-panel {
    display: grid;
    grid-template: 1fr / 1fr 1fr;
    gap: 7px;
    padding: 5px;

    @media (--tablet-w) {
        grid-template: 1fr / 1fr;
    }

    & > * {
        gap: 7px;
    }
    
    &__btn {
        @apply
            twl-block
            twl-w-full
            twl-h-full
            twl-bg-green;

        font-size: 3vmin;
        color: var(--color-black);

        transition: box-shadow .10s linear, transform .10s cubic-bezier(.19,0,.32,.69);

        &:active {
            box-shadow: 0 0 15px 2px rgba(#41b883, .4);
            transform: translateY(-2px);
        }

        &:focus {
            outline: none;
        }
    }

    &__btns-list {
        display: grid;
        grid-template: repeat(3, 10vmin) / repeat(3, 1fr);
        grid-auto-rows: 10vmin;

        & > *:last-child {
            grid-column: span 3;
        }
    }

    &__operations-list {
        display: grid;
        grid-template: repeat(2, 1fr) / repeat(4, 1fr);

        @media (--tablet-w) {
            grid-template-rows: repeat(2, 10vmin);
        }
    }
}
</style>
