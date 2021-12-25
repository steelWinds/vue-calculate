let debounce = (func, delay) => {
    let callAllow = true;
    
    return (...args) => {
        if (!callAllow) {
            return;
        }

        func.apply(window, args);

        callAllow = false;

        setTimeout(() => {
            callAllow = true;
        }, delay);
    };
};

export default debounce;
