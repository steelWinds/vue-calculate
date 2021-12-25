<template>
    <transition 
        name="slide-down" 
        mode="out-in" 
        appear>
        
        <article 
            v-if="isVisible"
            class="message"
            v-bind="attrs"
            :style="{
                top: `${yPos}%`
            }">
            
            <h2 class="message__content">
                <slot name="default">
                    Empty message
                </slot>
            </h2>
        </article>
    </transition>
</template>

<script>
import { computed, ref, toRefs } from 'vue';

export default {
    props: {
        visibleCondition: {
            type: Boolean,
            required: true,
            default: false
        },

        yPos: {
            type: Number,
            required: true,
            default: 0
        }
    },

    setup(props, { attrs }) {
        const {
            visibleCondition
        } = toRefs(props);

        let isVisible = computed(() => {
            if (visibleCondition.value) {
                return true;
            }

            return false;
        });

        return {
            isVisible,
            attrs
        };
    }
};
</script>

<style lang="postcss">
.message {
    @apply 
        twl-bg-green
        twl-text-black
        twl-font-medium
        twl-absolute;
    
    padding: 2vmin 3vmin;

    font-size: 3vmin;
}
</style>
