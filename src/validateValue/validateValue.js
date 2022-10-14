const validateValue = (value) => {
    if (value > 0 && value < 100) {
        return 'good';
    }
    return 'bad';
};

module.exports = validateValue;