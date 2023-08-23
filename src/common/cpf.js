function validaCpf(cpf) {
    if (!cpf) return false;

    const cpfSplit = cpf.toString().replace('.', '').replace('-', '')

    if (cpfSplit.length != 11)
        return false

    var isEqual = false

    for (let i = 1; i < cpfSplit.length - 3; i++) {
        if (cpfSplit[i] != cpfSplit[i - 1])
            break;
        if (i == cpfSplit.length - 4)
            isEqual = true
    }

    if (isEqual)
        return false;

    var isSequencial = false;

    for (let i = 1; i < cpfSplit.length - 3; i++) {
        if (cpfSplit[i] != cpfSplit[i - 1] + 1){
            break;
        }
        if (i == cpfSplit.length - 4){
            isSequencial = true;
        }
    }
    
    console.log(isSequencial)

    if (isSequencial)
        return false;

    var somaDig1

    var somaDig1 = 0;

    for (let i = 0; i < cpfSplit.length - 2; i++) {
        somaDig1 += (Number(cpfSplit[i]) * (10 - i));
    }

    somaDig1 = somaDig1 % 11;

    if (11 - somaDig1 > 9) {
        if (cpfSplit[9] != 0)
            return false
    }
    else if (11 - somaDig1 != cpfSplit[9])
        return false

    var somaDig2 = 0;

    for (let i = 0; i < cpfSplit.length - 1; i++) {
        somaDig2 += Number(cpfSplit[i]) * (11 - i);
    }

    somaDig2 = somaDig2 % 11;

    if (11 - somaDig1 > 9) {
        if (cpfSplit[10] != 0)
            return false
    }
    else if (11 - somaDig2 != cpfSplit[10])
        return false

    return true
}

module.exports = validaCpf;