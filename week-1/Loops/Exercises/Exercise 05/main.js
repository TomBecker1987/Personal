let nums = []

for ( i = 1 ; i < 101 ; i++ ) {
    nums.push(i)
}

for ( let num of nums ) {
    if ( num % 2 != 0 ) {
        console.log(num)
    }
}