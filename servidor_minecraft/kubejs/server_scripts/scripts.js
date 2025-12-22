ItemEvents.foodEaten(event => { 
	if (event.item.id == 'mekanism:pellet_plutonium') event.entity.kill()
})
  ItemEvents.foodEaten(event => { 
	if (event.item.id == 'mekanism:pellet_polonium') event.entity.kill()
})