function tribonacci(signature,n){
    if (n === 0) {
        return [];
    } else if (n === 1) {
        return [signature[0]];
    } else if (n === 2) {
        return signature.slice(0, 2);
    } else {
        let result = signature.slice();
        for (let i = 3; i < n; i++) {
            result.push(result[i - 1] + result[i - 2] + result[i - 3]);
        }
        return result;
    }
}