function pow(n, e) {
    var result = 1;

    if (exponent > 0) {

        for (var i = 0; i < exponent; i++) {
            result *= number;
        }
        return result;

    } else {
        for (var i = 0; i < -exponent; i++) {
            result *= number;
        }
        return (1/result);
    }


}


var number = prompt('Введите число:');
var exponent = prompt('Введите степень:');

console.log((isValid(number, exponent)) ? pow(number, exponent) : 'Неккоректные данные');

/**
 * @param number
 * @param exponent
 * @return boolean value
 **/

function isValid(number, exponent) {
    if (!number || !exponent)
        return false;

    if (number.length > 6 || exponent.length > 6)
        return false;

    if (isNaN(+number) || isNaN(+exponent))
        return false;

    if (number === 0 && exponent === 0)
        return false;

    return true;
}


