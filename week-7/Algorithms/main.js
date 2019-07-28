
let findSmallestNumber = function(numbers) {
    let smallestNumber = numbers[0] //our 'number stored in memory'
    
    for(let num of numbers){ //going over each number
    
      if(num < smallestNumber){
    
        smallestNumber = num //forget the number stored in memory and store num instead
      }
    }
    
    console.log("Smallest number is " + smallestNumber)
}

let nums1 = [823412013513, 1381120136324, 82341381745, 181238377131412, 74128377131412, 74128377412] // should find 74128377412

let nums2 = [-312, -9123, -112, -812, -7411, -312] //should find -9123

let nums3 = [23, 23, 23, 23, 23] //should find 23


findSmallestNumber(nums1)
findSmallestNumber(nums2)
findSmallestNumber(nums3)