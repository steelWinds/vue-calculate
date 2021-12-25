<template>
    <input
        v-model="model"
        v-bind="attrs"
        class="material-input"
        @input.prevent="setPatternInput($event, excludePattern)">
</template>

<script>
import { toRefs, computed } from 'vue';

export default {
    props: {
        excludePattern: {
            type: RegExp, 
            required: false,
            default: /[^*]/
        },

        valueModel: {
            type: String,
            required: true,
            default: ''
        }
    },

    emits: [
        'update:valueModel'
    ],

    setup(props, { attrs, emit }) {
        const {
            excludePattern,
            valueModel
        } = toRefs(props);

        let model = computed({
            get() {
                return valueModel.value.replace(excludePattern.value, '');
            },

            set(newValue) {
                emit('update:valueModel', newValue);
            }
        });

        let setPatternInput = (event, pattern) => {
            const currentTarget = event.currentTarget;

            currentTarget.value = currentTarget.value.replace(pattern, ''); 
        };

        return {
            attrs,
            model,
            setPatternInput
        };
    }
};
</script>

<style lang="postcss" scoped>
.material-input {
    @apply
        twl-w-full;

    max-width: 80vmin;
    border: .1em solid var(--color-green);
    padding: .3em;

    font-size: 5vmin;
    background-color: var(--color-black);
    color: var(--color-green);

    &:focus, 
    &:active,
    &:hover {
        outline: none;
    } 

    &:invalid {
        background-color: red;
    }
}
</style>
