import { ref, reactive } from 'vue';

let createCalculator = () => {
    const expression = ref('');
    const expressionError = reactive({
        error: false,
        message: 'Empty message'
    });
    const optionsList = ref([
        '*', '/', '+',
        '-', '**', '.', 
        ')', '('
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

        return String(result);
    };

    return {
        expression,
        optionsList,
        numbersList, 
        setToExpression,
        clearExpression,
        getExpressionResult,
        expressionError
    };
};

export default createCalculator;
