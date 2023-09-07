function numbers(num) {
    let numStr = num.toString();

    for (let i = 2; i <= 6; i++) {
        let multipleStr = (num * i).toString();

        if (equalNumbers(numStr, multipleStr)) {
            console.log(`Uygun gelen reqem: ${multipleStr}`);
            return;
        }
    }
    console.log("Hec biri eyni reqemlere malik deyil");
}

function equalNumbers(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

numbers(123456);
