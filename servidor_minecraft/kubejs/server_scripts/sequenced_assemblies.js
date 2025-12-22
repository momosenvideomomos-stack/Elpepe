ServerEvents.recipes(event => {

    event.recipes.createSequencedAssembly([ // start the recipe
		Item.of('create:precision_mechanism') // this is the item that will appear in JEI as the result
	],'create:brass_sheet',[ // the input
		// the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:electron_tube']),
 	 	// like a normal recipe function, is used as a sequence step in this array. Input and output have the transitional item
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','create:cogwheel']),
		event.recipes.create.pressing('create:incomplete_precision_mechanism', 'create:precision_mechanism'),
		event.recipes.createDeploying('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism','kubejs:assembly_kit']).damageIngredient('kubejs:assembly_kit', 1)
	]).transitionalItem('create:incomplete_precision_mechanism').loops(1) // set the transitional item and the loops (amount of repetitions)

    event.recipes.createSequencedAssembly([
		Item.of('create_sa:steam_engine')
	],'create:golden_sheet',[
		event.recipes.createDeploying('create_sa:incomplete_steam_engine',['create_sa:incomplete_steam_engine','minecraft:copper_ingot']),
		event.recipes.createDeploying('create_sa:incomplete_steam_engine',['create_sa:incomplete_steam_engine','create:cogwheel']),
		event.recipes.createDeploying('create_sa:incomplete_steam_engine',['create_sa:incomplete_steam_engine','create:andesite_alloy']),
		event.recipes.createDeploying('create_sa:incomplete_steam_engine',['create_sa:incomplete_steam_engine','create:propeller']),
	]).transitionalItem('create_sa:incomplete_steam_engine').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('kubejs:logic_mechanism')
	],'create:precision_mechanism',[
		event.recipes.createDeploying('kubejs:incomplete_logic_mechanism',['kubejs:incomplete_logic_mechanism','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_logic_mechanism',['kubejs:incomplete_logic_mechanism','mekanism:basic_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_logic_mechanism',['kubejs:incomplete_logic_mechanism','kubejs:assembly_kit']).damageIngredient('kubejs:assembly_kit', 1)
	]).transitionalItem('kubejs:incomplete_logic_mechanism').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('kubejs:basic_mechanism')
	],'create:iron_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
		event.recipes.createDeploying('kubejs:incomplete_basic_mechanism',['kubejs:incomplete_basic_mechanism','create:cogwheel']),
		event.recipes.create.pressing('kubejs:incomplete_basic_mechanism', 'kubejs:basic_mechanism'),
	]).transitionalItem('kubejs:incomplete_basic_mechanism').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('mekanism:basic_control_circuit')
	],'mekanism:hdpe_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_basic_control_circuit',['kubejs:incomplete_basic_control_circuit','create:copper_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_basic_control_circuit',['kubejs:incomplete_basic_control_circuit','minecraft:gold_nugget']),
		event.recipes.createDeploying('kubejs:incomplete_basic_control_circuit',['kubejs:incomplete_basic_control_circuit','minecraft:redstone']),
		event.recipes.create.pressing('kubejs:incomplete_basic_control_circuit', 'kubejs:basic_mechanism'),
		event.recipes.createDeploying('kubejs:incomplete_basic_control_circuit',['kubejs:incomplete_basic_control_circuit','kubejs:assembly_kit']).damageIngredient('kubejs:assembly_kit', 1)
	]).transitionalItem('kubejs:incomplete_basic_control_circuit').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('create_sa:heat_engine')
	],'create:andesite_alloy',[
		event.recipes.createDeploying('create_sa:incomplete_heat_engine',['create_sa:incomplete_heat_engine','create:cogwheel']),
		event.recipes.createDeploying('create_sa:incomplete_heat_engine',['create_sa:incomplete_heat_engine','create:zinc_nugget']),
		event.recipes.createDeploying('create_sa:incomplete_heat_engine',['create_sa:incomplete_heat_engine','create:copper_nugget']),
	]).transitionalItem('create_sa:incomplete_heat_engine').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('ad_astra:rocket_nose_cone')
	],'ad_astra:steel_ingot',[
		event.recipes.create.cutting('kubejs:incomplete_rocket_nose_cone', 'ad_astra:steel_ingot').processingTime(500),
		event.recipes.createDeploying('kubejs:incomplete_rocket_nose_cone',['kubejs:incomplete_rocket_nose_cone','create:copper_nugget'])
	]).transitionalItem('kubejs:incomplete_rocket_nose_cone').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('kubejs:processor')
	],'create:iron_sheet',[
		event.recipes.createDeploying('kubejs:incomplete_processor',['kubejs:incomplete_processor','createaddition:copper_wire']),
		event.recipes.createDeploying('kubejs:incomplete_processor',['kubejs:incomplete_processor','mekanism:elite_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_processor',['kubejs:incomplete_processor','kubejs:logic_mechanism'])
	]).transitionalItem('kubejs:incomplete_processor').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('ad_astra:steel_engine')
	],'ad_astra:engine_frame',[
		event.recipes.createDeploying('kubejs:incomplete_steel_engine',['kubejs:incomplete_steel_engine','kubejs:tier_1_plating']),
		event.recipes.create.cutting('kubejs:incomplete_steel_engine', 'kubejs:incomplete_steel_engine').processingTime(500),
		event.recipes.createDeploying('kubejs:incomplete_steel_engine',['kubejs:incomplete_steel_engine','createaddition:copper_wire']),
		event.recipes.createDeploying('kubejs:incomplete_steel_engine',['kubejs:incomplete_steel_engine','create_sa:heat_engine']),
		event.recipes.createDeploying('kubejs:incomplete_steel_engine',['kubejs:incomplete_steel_engine','mekanism:elite_control_circuit']),
	]).transitionalItem('kubejs:incomplete_steel_engine').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('ad_astra:desh_engine')
	],'ad_astra:engine_frame',[
		event.recipes.createDeploying('kubejs:incomplete_desh_engine',['kubejs:incomplete_desh_engine','kubejs:tier_2_plating']),
		event.recipes.create.cutting('kubejs:incomplete_desh_engine', 'kubejs:incomplete_desh_engine').processingTime(500),
		event.recipes.createDeploying('kubejs:incomplete_desh_engine',['kubejs:incomplete_desh_engine','createaddition:copper_wire']),
		event.recipes.createDeploying('kubejs:incomplete_desh_engine',['kubejs:incomplete_desh_engine','mekanism:pellet_polonium']),
		event.recipes.createDeploying('kubejs:incomplete_desh_engine',['kubejs:incomplete_desh_engine','mekanism:elite_control_circuit']),
	]).transitionalItem('kubejs:incomplete_desh_engine').loops(1)

    event.recipes.createSequencedAssembly([
		Item.of('ad_astra:ostrum_engine')
	],'ad_astra:engine_frame',[
		event.recipes.createDeploying('kubejs:incomplete_ostrum_engine',['kubejs:incomplete_ostrum_engine','kubejs:tier_3_plating']),
		event.recipes.create.cutting('kubejs:incomplete_ostrum_engine', 'kubejs:incomplete_ostrum_engine').processingTime(500),
		event.recipes.createDeploying('kubejs:incomplete_ostrum_engine',['kubejs:incomplete_ostrum_engine','createaddition:copper_wire']),
		event.recipes.createDeploying('kubejs:incomplete_ostrum_engine',['kubejs:incomplete_ostrum_engine','kubejs:supercompressed_helium']),
		event.recipes.createDeploying('kubejs:incomplete_ostrum_engine',['kubejs:incomplete_ostrum_engine','mekanism:elite_control_circuit']),
	]).transitionalItem('kubejs:incomplete_ostrum_engine').loops(1)
	event.recipes.createSequencedAssembly([
		Item.of('ad_astra:calorite_engine')
	],'ad_astra:engine_frame',[
		event.recipes.createDeploying('kubejs:incomplete_calorite_engine',['kubejs:incomplete_calorite_engine','kubejs:tier_4_plating']),
		event.recipes.create.cutting('kubejs:incomplete_calorite_engine', 'kubejs:incomplete_calorite_engine').processingTime(500),
		event.recipes.createDeploying('kubejs:incomplete_calorite_engine',['kubejs:incomplete_calorite_engine','createaddition:copper_wire']),
		event.recipes.createDeploying('kubejs:incomplete_calorite_engine',['kubejs:incomplete_calorite_engine','kubejs:refined_stellarite']),
		event.recipes.createDeploying('kubejs:incomplete_calorite_engine',['kubejs:incomplete_calorite_engine','mekanism:ultimate_control_circuit']),
	]).transitionalItem('kubejs:incomplete_calorite_engine').loops(1)
	event.recipes.createSequencedAssembly([
		Item.of('kubejs:guidance_mechanism')
	],'create:shadow_steel',[
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','create:electron_tube']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','mekanism:ultimate_control_circuit']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','kubejs:processor']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','kubejs:logic_mechanism']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','createaddition:gold_wire']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','create:precision_mechanism']),
		event.recipes.createDeploying('kubejs:incomplete_guidance_mechanism',['kubejs:incomplete_guidance_mechanism','kubejs:assembly_kit']).damageIngredient('kubejs:assembly_kit', 1)
	]).transitionalItem('kubejs:incomplete_guidance_mechanism').loops(3)

})