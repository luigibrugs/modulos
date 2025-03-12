function reverseString(str) {
    return str.split('').reverse().join('');
}

function manipuladorDeString(Palavra) {
    console.log(Palavra.toUpperCase())
    console.log(Palavra.toLowerCase())
    console.log(reverseString(Palavra))
}

module.exports = manipuladorDeString;
