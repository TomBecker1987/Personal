const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation');

  
reservations[name] ? 
  reservations[name].claimed == false ?
    alert("Welcome!") : 
        alert("The reservation is already claimed.")
    :
    reservations[name] = { claimed : true }

