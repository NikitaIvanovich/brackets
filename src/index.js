module.exports = function check(str, bracketsConfig) {
    const configArr = {};
    const bracketsArr = [];
    bracketsConfig.forEach(([open, close]) => configArr[open] = close);
    for (let i = 0; i < str.length; i++) {
        if (bracketsArr.length) {
            if (configArr[bracketsArr[bracketsArr.length - 1]] === str[i]) {
              bracketsArr.pop();
                continue;
            }
        }
        if (configArr[str[i]]){
          bracketsArr.push(str[i]);
            continue;
        }
        return false;
    }
    return !bracketsArr.length;
}
