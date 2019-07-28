const findClosest = function( points, point ) {
  let distances = []
  points.forEach( p => {
    let distance = {}
    let x = p.x - point.x
    let y = p.y - point.y
    let c = Math.pow(x,2) + Math.pow(y,2)
    distance.point = p
    distance.distance = c
    distances.push(distance)
  } )
  distances.sort(function(a,b){
    return a.distance - b.distance
  })
  console.log(distances[0].point)
  return distances[0].point
}

let pizzaLocations = [
  { x: 6, y: 12 },
  { x: 3, y: 1 },
  { x: 9, y: 0 },
  { x: 4, y: 10 }
]

let homeLocation = { x: 4, y: 2 }

findClosest(pizzaLocations, homeLocation) // should return {x: 3, y: 1}
