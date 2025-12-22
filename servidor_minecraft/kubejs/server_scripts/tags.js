ServerEvents.tags('item', event => {
	event.get('forge:fuels/bio').add('createaddition:biomass')
	event.get('mekanized:dust/coals').add('mekanism:dust_coal')
	event.get('mekanized:dust/coals').add('mekanism:dust_charcoal')
	event.get('forge:dusts/obsidian').remove('create:powdered_obsidian')
})
ServerEvents.tags('fluid', event => {
    event.remove('minecraft:water', [
        'ad_astra:oil',
	'ad_astra:cryo_fuel'
    ])
})
ServerEvents.tags('fluid', event => {
	event.get('minecraft:water').remove('ad_astra:oil')
	event.get('minecraft:water').remove('ad_astra:fuel')
	event.get('minecraft:water').remove('ad_astra:cryo_fuel')
	event.get('minecraft:water').remove('createaddition:seed_oil')
	event.get('minecraft:water').remove('ad_astra:flowing_oil') // Yes, apparently the flowing variant of a fluid is separate. Don't ask why.
	event.get('minecraft:water').remove('ad_astra:flowing_fuel')
	event.get('minecraft:water').remove('ad_astra:flowing_cryo_fuel')
	event.get('minecraft:water').remove('createaddition:flowing_seed_oil')
	event.get('forge:fuel').remove('ad_astra:fuel')
	event.add('forge:fuel', 'mekanism:ethene')
})