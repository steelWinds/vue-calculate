import { toRef } from 'vue';

let switcher = (
    refObject, 
    targetProp, 
    timeout, 
    endValue
) => {
    const targetValue = toRef(refObject, targetProp);

    let timeoutFunction = setTimeout(() => {
        targetValue.value = endValue;

        clearTimeout(timeoutFunction);
    }, timeout);

    return timeoutFunction;
};

export default switcher;
