<template>
    <article class="calculate-page">
        <h1 class="calculate-page__title">
            Vue-Calculator
        </h1>

        <MaterialInput
            v-model:value-model.trim="expression" 
            :exclude-pattern="/[^0-9|{\=,\+,\-,\*,\(,\),\/, \^. \., \,}]/g"
            class="twl-self-center" 
            type="text"
            autofocus />

        <ButtonsPanel>
            <template #numbers-list>
                <button
                    v-for="number of numbersList"
                    :key="number"
                    class="btns-panel__btn"
                    @click="setToExpression(number)">

                    {{ number }}
                </button>
            </template>

            <template #options-list>
                <button
                    v-for="optionItem of optionsList"
                    :key="optionItem"
                    class="btns-panel__btn"
                    @click="setToExpression(optionItem)">

                    {{ optionItem }}
                </button>

                <button 
                    class="btns-panel__btn twl-bg-red twl-text-white"
                    @click="clearExpression">
                    
                    C
                </button>

                <button 
                    class="btns-panel__btn"
                    @click="expression = getExpressionResult(expression)">
                    
                    =
                </button>
            </template>
        </ButtonsPanel>
    </article>
</template>

<script>
import { ref } from 'vue';

import ButtonsPanel from '../components/ButtonsPanel.vue';
import MaterialInput from '../components/MaterialInput.vue';

export default {
    components: {   
        ButtonsPanel,
        MaterialInput
    },

    setup() {
        const expression = ref('');
        const optionsList = ref([
            '*', '/', '+',
            '-', '^','**'
        ]);
        const numbersList = ref([
            7, 8, 9,
            4, 5, 6,
            1, 2, 3, 
            0
        ]);

        let setToExpression = (value) => {
            expression.value += value;
        };

        let clearExpression = () => {
            expression.value = '';
        };

        let getExpressionResult = (exp) => {
            let result = 0;

            try {
                result = eval(exp);

                if ( !(Number.isInteger(result)) ) {
                    result = result.toFixed(2);
                }
            } catch(error) {
                throw new EvalError('Expression is not valid!');
            }

            return result;
        };

        return {
            expression,
            optionsList,
            numbersList, 
            setToExpression,
            clearExpression,
            getExpressionResult
        };
    }
};
</script>

<style lang="postcss">
@custom-media --tablets-w (max-width: 764px);

.calculate-page {
    @apply
        twl-w-full
        twl-h-full
        twl-min-h-screen
        twl-bg-black
        twl-flex
        twl-flex-col
        twl-justify-between;

    gap: 1em;

    @media (--tablets-w) {
        padding-bottom: 3.5em;
    }

    &__title {
        @apply
            twl-text-green
            twl-mt-10;
        
        font-size: 7vmin;
        font-weight: bold;
        text-shadow: 4px 4px 2px rgba(0 0 0 / .2);
        text-align: center;
    }
}
</style>
