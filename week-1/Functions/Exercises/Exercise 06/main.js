let calculator = {
    add : function(x,y){let sum = x+y; return sum} ,
    subtract : function(x,y){let sum=x-y; return sum}
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42
