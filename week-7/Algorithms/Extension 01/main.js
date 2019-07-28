const printInLoop = function( wordsToPrint ) {
  while ( true ) {
    for ( let i = 0 ; i < wordsToPrint.length ; i++ ) {
      console.log( wordsToPrint[i] )
    }
  }
}



printInLoop(["down", "the", "rabbit", "hole"])
