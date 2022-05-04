function tryDo(fn) {
    return new Promise((resolve) => {
        if (typeof fn === 'function') {
            try {
                const result = fn();
                if (result instanceof Promise) {
                    result.then((res) => resolve([res, null])).catch((err) => resolve([null, err]));
                }
                else {
                    resolve([result, null]);
                }
            }
            catch (e) {
                resolve([null, e]);
            }
        }
        else {
            fn.then((res) => resolve([res, null])).catch((err) => resolve([null, err]));
        }
    });
}

export { tryDo as default };
