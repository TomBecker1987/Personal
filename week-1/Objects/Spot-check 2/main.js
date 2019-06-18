let itemObject = {
    item : "kakamaika",
    toBeginning : false,
    items : ["harta","bullshit","zabla"]
}

itemObject.toBeginning ? itemObject.items.unshift(itemObject.item) : itemObject.items.push(itemObject.item);

console.log(itemObject.items);