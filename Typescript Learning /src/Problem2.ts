const getLength = (param: string | any[]): number => {

    if (typeof param === 'string') {
        return param.length;
    }

    else if (Array.isArray(param)) {
        return param.length;
    }

    return 0;
};

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));