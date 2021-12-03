export const includesDigits = (text: string) => {
  let includes = false;
  [...'0123456789'].forEach(element => {
    if (text.includes(element)) {
      includes = true;
    }
  });
  return includes;
};

export const getInitials = (text: string) => {
  const words = text.split(' ')
  let initials = words.flatMap(element => {
      return element.charAt(0)
    }).join('')
  return initials;
};

export const keepNumbers = (text: string) => {
  if (includesDigits(text)) {
    console.log([...text])
    let numbers = [...text].filter( element => includesDigits(element) )
    console.log(numbers)
    return numbers.join('')
  } else {
    return ''
  }
};