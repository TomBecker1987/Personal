const greet = function(name) {
    let now = new Date()
    let hour = now.getHours()

    hour < 6 || hour > 21 ?
        console.log(`Good Night, ${name}`)
        :
        hour < 12 ?
            console.log(`Good Morning, ${name}`)
            :
            hour < 18 ?
                console.log(`Good Afternoon, ${name}`)
                :
                console.log(`Good Evening, ${name}`)

    
}

greet("Jonah and Danny")