<template>
    <article class="calculate-page">
        <h1 class="calculate-page__title">
            Vue.js-Calculator
        </h1>

        <section class="twl-flex twl-flex-col twl-items-center twl-relative">
            <Message
                :visible-condition="expressionError.error"
                :y-pos="-100"
                class="twl-bg-red twl-text-white twl-shadow-custom-red">

                {{ expressionError.message }}
            </Message>

            <MaterialInput
                v-model:value-model.trim="expression" 
                :exclude-pattern="excludePattern" 
                type="text"
                autofocus />
        </section>

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
                    class="
                        btns-panel__btn 
                        twl-bg-red 
                        twl-text-white 
                        active:twl-shadow-custom-red"
                    @click="clearValue">
                    
                    C
                </button>

                <button 
                    class="btns-panel__btn"
                    @click="getResult(expression)">
                    
                    =
                </button>
            </template>
        </ButtonsPanel>
    </article>
</template>

<script>
import createCalculator from '../composables/createCalculator.js';
import switcher from '../composables/useSwitcher.js';
import debounce from '../composables/debounce.js';

import ButtonsPanel from '../components/ButtonsPanel.vue';
import MaterialInput from '../components/MaterialInput.vue';
import Message from '../components/Message.vue';

export default {
    components: {   
        ButtonsPanel,
        MaterialInput,
        Message
    },

    setup() {
        const {
            expression,
            optionsList,
            numbersList, 
            setToExpression,
            clearExpression,
            getExpressionResult,
            expressionError
        } = createCalculator();
        const debounceSwitcher = debounce(switcher, 1500);
        const excludePattern = new RegExp(
            /[^0-9|{\u002b, \u002d, \u002a, \u0028, \u0029, \u002f, \u005e, \u002e, \u002c}]/gi
        );

        let clearValue = () => {
            if ( !(expression.value.length) ) {
                expressionError.error = true;
                expressionError.message = 'Expression empty!';

                return debounceSwitcher(
                    expressionError,
                    'error',
                    1500,
                    false
                );
            }

            clearExpression();
        };

        let getResult = (value) => {
            clearExpression();

            let result = null;
            
            try {
                result = getExpressionResult(value);
            } catch(error) {
                expressionError.error = true;
                expressionError.message = error.message;

                return debounceSwitcher(
                    expressionError,
                    'error',
                    1500,
                    false
                );
            }

            setToExpression(result);
        };

        return {
            expression,
            optionsList,
            numbersList, 
            setToExpression,
            clearValue,
            getResult,
            expressionError,
            excludePattern
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
        
        font-family: 'Work Sans';
        font-size: 7vmin;
        font-weight: 600;
        text-shadow: 4px 4px 2px rgba(0 0 0 / .2);
        text-align: center;
    }
}
</style>
