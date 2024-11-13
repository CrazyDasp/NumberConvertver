export function convertNumber(number) {
    const re = /^\+*(\d{0,3})\s*\(*(\d{3})\)*\s*\-*(\d{3})\s*\-*(\d{2})\s*\-*(\d{2})/ // eslint-disable-line
    const str = number.match(re)
    
    let formNum = "+"
    
    for (let num in str) {
      if (num > 0 && num < 6) {
        if (str[num] == 8) {
          formNum += "7"
        } else {
          formNum += str[num]
        }
      }
    }
    
    return formNum
  }