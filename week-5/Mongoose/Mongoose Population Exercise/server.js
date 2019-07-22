const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/galaxyDB', {useNewUrlParser: true})
const Schema = mongoose.Schema

// ************schemas*************//

const systemSchema = new Schema({ 
    planets: [{type: Schema.Types.ObjectId, ref: 'Planet'}],
    starName: String,
  })
  
const planetSchema = new Schema({
    name: String,
    system: {type: Schema.Types.ObjectId, ref: 'System'},
    visitors: [{type: Schema.Types.ObjectId, ref: 'Visitor'}]
})

const visitorSchema = new Schema({
    name: String,
    homePlanet: {type: Schema.Types.ObjectId, ref: 'Planet'},
    visitedPlanets: [{type: Schema.Types.ObjectId, ref: 'Planet'}]
})

// ************models*************//

const Planet = mongoose.model("Planet", planetSchema)
const System = mongoose.model("System", systemSchema)
const Visitor = mongoose.model("Visitor", visitorSchema)

// ************documents*************//
let s1 = new System({
    planets: [],
    starName: "kakamaika"
})

let p1 = new Planet({
    name: "p-hole",
    system: s1,
    visitors: []
})

let p2 = new Planet({
    name: "s-hole",
    system: s1,
    visitors: []
})

let v1 = new Visitor({
    name: "Mike",
    homePlanet: p1,
    visitedPlanets: []
})

let v2 = new Visitor({
    name: "George",
    homePlanet: p2,
    visitedPlanets: []
})

let v3 = new Visitor({
    name: "Wolfgang",
    homePlanet: p2,
    visitedPlanets: []
})

// ************saving*************//

// s1.planets.push(p1)
// s1.planets.push(p2)
// p1.visitors.push(v1)
// p2.visitors.push(v2)
// p2.visitors.push(v3)
// v3.visitedPlanets.push(p1)
// p1.visitors.push(v3)
// v2.visitedPlanets.push(p1)
// p1.visitors.push(v2)
// v1.visitedPlanets.push(p2)
// p2.visitors.push(v1)

// let all = [p1,p2,s1,v1,v2,v3]

// all.forEach( o => o.save() )


// ************exercises*************//

// Visitor.findOne({name:"Wolfgang"})
//                 .populate({path:"visitedPlanets", populate:{path:"visitors system"}})
//                 .exec(function(err,visitor){
//                     console.log(visitor.visitedPlanets)
//                 })

// Planet.findOne({name:"p-hole"})
//         .populate('visitors')
//         .exec(function(err,planet){
//             planet.visitors.forEach( v => console.log(v.name) )
//         })
    
// System.findOne({starName:"kakamaika"})
//         .populate({path:'planets', populate:{path:'visitors'}})
//         .exec(function(err,system){
//             system.planets.forEach( p => p.visitors.forEach( v => console.log(v.name) ) )
//         })

// Visitor.findOne({})
//     .populate({path:'homePlanet', populate:{path:'system', populate:{path:'starName'}}})
//     .exec(function(err,visitor){
//         console.log(visitor.homePlanet)
//     })

// Visitor.findOne({})
// .populate({path:'homePlanet', populate:{path:'system'}})
// .exec(function(err,visitor){
//     console.log(visitor.homePlanet.system.starName)
// })

// Planet.findOne({})
//     .populate('system visitors')
//     .exec(function(err,planet){
//         console.log(planet.system.starName)
//         planet.visitors.forEach( v => console.log(v.name) )
//     })

