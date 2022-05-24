// exports.factorial = function(num)

function factorial(num) {
  

if (num === 0 || num === 1) {
        return 1
        
    }

    let answer = num * factorial(num - 1)
    return answer

};

console.log(factorial(45))
