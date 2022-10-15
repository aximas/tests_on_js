const delay = (callback, seconds) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(callback());
        }, seconds * 1000);
    });
};

module.exports = delay;