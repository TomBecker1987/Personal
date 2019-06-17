const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2


// a = 3. Constant so doesn't change from first assignment.
// b = 15
// c = 12
// d = 160