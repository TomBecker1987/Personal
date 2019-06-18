let p1 = {
    name : "Jill" ,
    age : 25 ,
    city : "Tel Aviv"
}

let p2 = {
    name : "Robert" ,
    age : 25 ,
    city : "Haifa"
}

p1.age == p2.age ? 
    p1.city == p2.city ? 
        console.log( p1.name + " wanted to date " + p2.name + "." ) : 
        console.log( p1.name + " wanted to date " + p2.name + ", but couldn't." )
    :
    p1 = p1;