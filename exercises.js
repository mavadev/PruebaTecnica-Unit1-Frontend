// Cree una función en Javascript "anagram" que reciba dos strings y retorne true si el primer
// string es un anagrama del segundo o false si no lo es.
const sortLetters = string => string.trim().toLowerCase().split('').sort().join('')

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false
  return sortLetters(str1) === sortLetters(str2)
}

// Escriba una función en JavaScript "reverseInteger" que reciba un entero y devuelva otro
// entero con los dígitos invertidos.
const reverseInteger = (num) => {
  const numReverse = String(num).split('').reverse().join('')
  return parseInt(numReverse) * Math.sign(num)
}

// Ejemplos:
console.log(anagram('1tuni'     , 'unit1'   )) // true
console.log(anagram('players'   , 'parsley' )) // true
console.log(anagram('something' , 'msohtng' )) // false
console.log(anagram('sonrisa'   , 'sasonra' )) // false

console.log(reverseInteger( 123 )) // 321
console.log(reverseInteger(-4389)) // -9834