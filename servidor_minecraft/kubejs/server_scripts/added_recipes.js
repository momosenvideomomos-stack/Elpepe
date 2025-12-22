// priority: 0

console.info('Just Monika.')

ServerEvents.recipes(event => {
	// Added recipes below
		event.recipes.createMechanicalCrafting('ad_astra:space_helmet', [
		  '  S  ',
		  ' WCW ',
		  '  S  ',
		], {
		  C: 'create:copper_diving_helmet',
		  W: 'minecraft:white_wool',
		  S: 'create:shadow_steel'
		})
		event.recipes.createMechanicalCrafting('ad_astra:space_suit', [
			'  S  ',
			' WCW ',
			'  S  ',
		  ], {
			C: 'ad_astra:oxygen_gear',
			S: 'create:shadow_steel',
			W: 'minecraft:white_wool'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:space_pants', [
			'  S  ',
			' WIW ',
			'  S  ',
		  ], {
			S: 'create:shadow_steel',
			W: 'minecraft:white_wool',
			I: 'minecraft:iron_leggings'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:space_boots', [
			'  S  ',
			' WCW ',
			'  S  ',
		  ], {
			C: 'create:copper_diving_boots', 
			S: 'create:shadow_steel',
			W: 'minecraft:white_wool'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:netherite_space_helmet', [
			'  O  ',
			' ONO ',
			'  G  ',
		  ], {
			N: 'create:netherite_diving_helmet',
			G: 'minecraft:orange_stained_glass_pane',
			O: 'ad_astra:ostrum_plate'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:netherite_space_suit', [
			'  P  ',
			' PNP ',
			'  O  ',
		  ], {
			P: 'ad_astra:ostrum_plate',
			O: 'ad_astra:oxygen_gear',
			N: 'create:netherite_backtank'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:netherite_space_pants', [
			'  O  ',
			' ONO ',
			'  O  ',
		  ], {
			O: 'ad_astra:ostrum_plate',
			N: 'minecraft:netherite_leggings'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:netherite_space_boots', [
			'  O  ',
			' ONO ',
			'  O  ',
		  ], {
			N: 'create:netherite_diving_boots',
			O: 'ad_astra:ostrum_plate'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_helmet', [
			' CNC ',
			' CCC ',
			'     ',
		  ], {
			N: 'ad_astra:netherite_space_helmet',
			C: 'ad_astra:calorite_plate',
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:jet_suit', [
			'  PCP  ',
			' TPNPT ',
			'  PPP  ',
		  ], {
			T: 'ad_astra:calorite_tank',
			P: 'ad_astra:calorite_plate',
			N: 'ad_astra:netherite_space_suit',
			C: 'mekanism:elite_control_circuit'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_pants', [
			' CNC ',
			' C C ',
			' C C ',
		  ], {
			C: 'ad_astra:calorite_plate',
			N: 'ad_astra:netherite_space_pants'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:jet_suit_boots', [
			'     ',
			' CNC ',
			' C C ',
		  ], {
			N: 'ad_astra:netherite_space_boots',
			C: 'ad_astra:calorite_plate'
		  })
		  event.shapeless(
			Item.of('create:iron_sheet', 1),
			[ 
			  'ad_astra:hammer',
			  'minecraft:iron_ingot',
			]
		  ).damageIngredient('ad_astra:hammer', 1)
		  event.shapeless(
			Item.of('createaddition:zinc_sheet'),
			[ 
			  'ad_astra:hammer',
			  'create:zinc_ingot',
			]
		  ).damageIngredient('ad_astra:hammer', 1)
		  event.shapeless(
			Item.of('create:golden_sheet', 1),
			[ 
			  'ad_astra:hammer',
			  'minecraft:gold_ingot',
			]
		  ).damageIngredient('ad_astra:hammer', 1)
		  event.shapeless(
			Item.of('create:copper_sheet', 1),
			[ 
			  'ad_astra:hammer',
			  'minecraft:copper_ingot',
			]
		  ).damageIngredient('ad_astra:hammer', 1)
		  event.shapeless(
			Item.of('create:brass_sheet', 1),
			[ 
			  'ad_astra:hammer',
			  'create:brass_ingot',
			]
		  ).damageIngredient('ad_astra:hammer', 1)
		  event.shapeless(
			Item.of('mekanism:block_steel'),
			[ 
			  '9x ad_astra:steel_ingot'
			]
		  )
		  event.shaped(
			Item.of('mekanism:steel_casing', 2),
			[ 
			  'SGS', 
			  'GBG',
			  'SGS'  
			],
			{
			  S: 'ad_astra:steel_plate',
			  B: 'create:brass_ingot',
			  G: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('enchantinginfuser:advanced_enchanting_infuser', 1),
			[ 
			  ' B ', 
			  'NCN',
			  'CCC'  
			],
			{
			  B: 'minecraft:book',
			  N: 'minecraft:netherite_ingot',
			  C: 'minecraft:crying_obsidian'
			}
		  )
		  event.shaped(
			Item.of('mekanism:atomic_disassembler', 1),
			[ 
			  'RER', 
			  'RAR',
			  ' O '  
			],
			{
			  E: 'mekanism:energy_tablet',
			  R: 'mekanism:alloy_atomic',
			  A: 'mekanism:pellet_polonium',
			  O: 'mekanism:ingot_refined_obsidian'
			}
		  )
		  event.recipes.createMechanicalCrafting('mekanism:jetpack', [
			' SSS ',
			' ECE ',
			'  S  ',
		  ], {
			E: 'ad_astra:steel_engine',
			S: 'ad_astra:steel_ingot',
			C: 'mekanism:basic_chemical_tank'
		  })
		  event.recipes.createMechanicalCrafting('create_jetpack:jetpack', [
			'  BSB  ',
			' BPTPB ',
			' BC CB ',
			'  C C  ',
		  ], {
			C: 'create:chute',
			S: 'create:shaft',
			B: 'create:brass_sheet',
			P: 'create:precision_mechanism',
			T: 'create:copper_backtank'
		  })
		  event.recipes.createMechanicalCrafting('mekanism:mekasuit_helmet', [
			' HUH ',
			' HJH ',
			' PAP ',
		  ], {
			H: 'mekanism:hdpe_sheet',
			J: 'ad_astra:jet_suit_helmet',
			U: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:basic_induction_cell',
			P: 'kubejs:supercompressed_helium'
		  })
		  event.recipes.createMechanicalCrafting('mekanism:mekasuit_bodyarmor', [
			' HUH ',
			' HJH ',
			' PAP ',
		  ], {
			H: 'mekanism:hdpe_sheet',
			J: 'ad_astra:jet_suit',
			U: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:basic_induction_cell',
			P: 'kubejs:supercompressed_helium'
		  })
		  event.recipes.createMechanicalCrafting('mekanism:mekasuit_pants', [
			' HUH ',
			' HJH ',
			' PAP ',
		  ], {
			H: 'mekanism:hdpe_sheet',
			J: 'ad_astra:jet_suit_pants',
			U: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:basic_induction_cell',
			P: 'kubejs:supercompressed_helium'
		  })
		  event.recipes.createMechanicalCrafting('mekanism:mekasuit_boots', [
			' HUH ',
			' HJH ',
			' PAP ',
		  ], {
			H: 'mekanism:hdpe_sheet',
			J: 'ad_astra:jet_suit_boots',
			U: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:basic_induction_cell',
			P: 'kubejs:supercompressed_helium'
		  })
		  event.recipes.createMechanicalCrafting('mekanism:meka_tool', [
			' UEU ',
			' HDH ',
			' PAP ',
		  ], {
			H: 'mekanism:hdpe_sheet',
			D: 'mekanism:atomic_disassembler',
			U: 'mekanism:ultimate_control_circuit',
			A: 'mekanism:basic_induction_cell',
			P: 'kubejs:supercompressed_helium',
			E: 'ad_astra:ostrum_plate'
		  })
		  event.shapeless(
			Item.of('ad_astra:steel_ingot', 9),
			[ 
			  'mekanism:block_steel',
			]
		  )
		  event.recipes.createMechanicalCrafting('ad_astra:tier_1_rocket', [
			'   N   ',
			'  BBB  ',
			'  BCB  ',
			'  BGB  ',
			'  BSB  ',
			'  BWB  ',
			' FTBTF ',
			' F E F ',
		  ], {
			F: 'ad_astra:rocket_fin',
			E: 'ad_astra:steel_engine',
			T: 'ad_astra:steel_tank',
			B: 'kubejs:tier_1_plating',
			C: 'ad_astra:vent',
			S: '#create:seats',
			G: '#forge:glass',
			W: 'kubejs:guidance_mechanism',
			N: 'ad_astra:rocket_nose_cone'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:tier_2_rocket', [
			'   N   ',
			'  BBB  ',
			'  BCB  ',
			'  BGB  ',
			'  BSB  ',
			'  BWB  ',
			' FTBTF ',
			' F E F ',
		  ], {
			F: 'ad_astra:rocket_fin',
			E: 'ad_astra:desh_engine',
			T: 'ad_astra:desh_tank',
			B: 'kubejs:tier_2_plating',
			C: 'ad_astra:vent',
			S: '#create:seats',
			G: '#forge:glass',
			W: 'kubejs:guidance_mechanism',
			N: 'ad_astra:rocket_nose_cone'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:tier_3_rocket', [
			'   N   ',
			'  BBB  ',
			'  BCB  ',
			'  BGB  ',
			' TBSBT ',
			' TBWBT ',
			' TCCCT ',
			' FTBTF ',
			' E E E ',
		  ], {
			F: 'ad_astra:rocket_fin',
			E: 'ad_astra:ostrum_engine',
			T: 'ad_astra:ostrum_tank',
			B: 'kubejs:tier_3_plating',
			C: 'ad_astra:vent',
			S: '#create:seats',
			G: 'mekanism:structural_glass',
			W: 'kubejs:guidance_mechanism',
			N: 'ad_astra:rocket_nose_cone'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:tier_4_rocket', [
			'   N   ',
			'  BBB  ',
			'  BGB  ',
			'  BSB  ',
			'N BWB N',
			'TPBABPT',
			'BPBBBPB',
			'T CBC T',
			'E  E  E',
		  ], {
			E: 'ad_astra:calorite_engine',
			T: 'ad_astra:calorite_tank',
			B: 'kubejs:tier_4_plating',
			C: 'ad_astra:vent',
			S: '#create:seats',
			G: 'mekanism:structural_glass',
			W: 'kubejs:guidance_mechanism',
			N: 'ad_astra:rocket_nose_cone',
			P: 'ad_astra:steel_plate',
			A: 'mekanism:pellet_antimatter'
		  })
		  event.recipes.createMechanicalCrafting('ad_astra:launch_pad', [
			' BPB ',
			' PSP ',
			' BPB ',
		  ], {
			B: 'mekanism:block_steel',
			S: 'create:shadow_steel',
			P: 'create:iron_sheet'
		  })
		  event.shaped(
			Item.of('immersive_aircraft:steel_boiler'),
			[ 
			  'SSS', 
			  'SBS',
			  'SFS'  
			],
			{
			  S: 'ad_astra:steel_ingot',
			  B: 'immersive_aircraft:boiler',
			  F: 'minecraft:blast_furnace',
			}
		  )
		  event.shaped(
			Item.of('thermal:device_tree_extractor'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: '#minecraft:planks',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:bucket',
			  G: 'thermal:iron_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_fisher'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: '#minecraft:planks',
			  M: 'kubejs:basic_mechanism',
			  B: 'thermal:aquachow',
			  G: 'thermal:copper_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_composter'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: '#minecraft:planks',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:composter',
			  G: 'thermal:iron_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_water_gen'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: 'minecraft:copper_ingot',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:bucket',
			  G: 'minecraft:iron_ingot',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_rock_gen'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: 'mekanism:ingot_tin',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:piston',
			  G: 'thermal:constantan_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_collector'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: 'thermal:invar_ingot',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:hopper',
			  G: 'thermal:iron_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_nullifier'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: 'mekanism:ingot_tin',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:cactus',
			  G: 'minecraft:redstone',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('thermal:device_potion_diffuser'),
			[ 
			  'PGP', 
			  'FBF',
			  'PMP'  
			],
			{
			  P: 'thermal:silver_ingot',
			  M: 'kubejs:basic_mechanism',
			  B: 'minecraft:glass_bottle',
			  G: 'thermal:constantan_gear',
			  F: '#forge:glass'
			}
		  )
		  event.shaped(
			Item.of('kubejs:stellarite_block'),
			[ 
			  'SSS', 
			  'SSS',
			  'SSS'  
			],
			{
			  S: 'kubejs:refined_stellarite'
			}
		  )
		  event.smithing(
			'thermal:upgrade_augment_2',
			'thermal:upgrade_augment_1',
			'thermal:electrum_plate'
		  )
		  event.smithing(
			'thermal:upgrade_augment_3',
			'thermal:upgrade_augment_2',
			'thermal:enderium_plate'
		  )
		  event.smithing(
			'mekanism:advanced_control_circuit',
			'mekanism:basic_control_circuit',
			'mekanism:alloy_infused'
		  )
		  event.smithing(
			'mekanism:elite_control_circuit',
			'mekanism:advanced_control_circuit',
			'mekanism:alloy_reinforced'
		  )
		  event.smithing(
			'mekanism:ultimate_control_circuit',
			'mekanism:elite_control_circuit',
			'mekanism:alloy_atomic'
		  )
		  event.smithing(
			'ad_astra:steel_tank',
			'minecraft:bucket',
			'ad_astra:steel_plate'
		  )
		  event.smithing(
			'ad_astra:desh_tank',
			'minecraft:bucket',
			'ad_astra:desh_plate'
		  )
		  event.smithing(
			'ad_astra:ostrum_tank',
			'minecraft:bucket',
			'ad_astra:ostrum_plate'
		  )
		  event.smithing(
			'ad_astra:calorite_tank',
			'minecraft:bucket',
			'ad_astra:calorite_plate'
		  )
		  event.shaped(
			Item.of('mekanism:configurator'),
			[ 
			  ' L ', 
			  ' R ',
			  ' S '  
			],
			{
			  S: 'minecraft:stick',
			  R: 'thermal:rf_coil',
			  L: 'minecraft:lapis_lazuli'
			}
		  )
		  event.shaped(
			Item.of('9x kubejs:refined_stellarite'),
			[ 
			  '   ', 
			  ' S ',
			  '   '  
			],
			{
			  S: 'kubejs:stellarite_block',
			}
		  )
		  event.recipes.create.pressing('mekanism:dust_coal', 'minecraft:coal')
		  event.recipes.create.pressing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.crushing('mekanism:dust_coal', 'minecraft:coal')
		  event.recipes.create.crushing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.pressing('mekanism:dust_charcoal', 'minecraft:charcoal')
		  event.recipes.create.cutting('ad_astra:rocket_fin', 'ad_astra:steel_plate').processingTime(500)
		  event.recipes.create.deploying('mekanism:advanced_control_circuit', ['mekanism:basic_control_circuit', 'mekanism:alloy_infused'])
		  event.recipes.create.deploying('mekanism:elite_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced'])
		  event.recipes.create.deploying('mekanism:ultimate_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:alloy_atomic'])
		  event.recipes.create.deploying('ad_astra:steel_tank', ['minecraft:bucket', 'ad_astra:steel_plate'])
		  event.recipes.create.deploying('ad_astra:desh_tank', ['minecraft:bucket', 'ad_astra:desh_plate'])
		  event.recipes.create.deploying('ad_astra:ostrum_tank', ['minecraft:bucket', 'ad_astra:ostrum_plate'])
		  event.recipes.create.deploying('ad_astra:calorite_tank', ['minecraft:bucket', 'ad_astra:calorite_plate'])
		  event.recipes.create.mixing('4x thermal:signalum_ingot', ['minecraft:copper_ingot', 'minecraft:copper_ingot', 'minecraft:redstone', 'minecraft:redstone', 'minecraft:redstone', 'thermal:silver_ingot']).superheated()
		  event.recipes.create.mixing('2x thermal:enderium_ingot', ['mekanism:ingot_lead', 'mekanism:ingot_lead', 'mekanism:ingot_lead', 'minecraft:ender_pearl', 'minecraft:diamond']).superheated()
		  event.recipes.create.mixing('2x thermal:lumium_ingot', ['mekanism:ingot_tin', 'mekanism:ingot_tin', 'mekanism:ingot_tin', 'thermal:silver_ingot', 'minecraft:glowstone_dust', 'minecraft:glowstone_dust']).superheated()
		  event.recipes.create.mixing('2x thermal:invar_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'thermal:nickel_ingot']).heated()
		  event.recipes.create.mixing('3x mekanism:ingot_bronze', ['mekanism:ingot_tin', 'minecraft:copper_ingot', 'minecraft:copper_ingot',]).heated()
		  event.recipes.create.mixing('2x thermal:constantan_ingot', ['minecraft:copper_ingot', 'thermal:nickel_ingot',]).heated()
		  event.recipes.create.mixing('2x thermal:electrum_ingot', ['minecraft:gold_ingot', 'thermal:silver_ingot']).heated()
		  event.recipes.create.mixing('4x minecraft:coarse_dirt', ['minecraft:dirt', 'minecraft:gravel'])
		  event.recipes.create.mixing('4x minecraft:diorite', ['minecraft:quartz', 'minecraft:cobblestone']).heated()
		  event.recipes.create.haunting('coal', 'charcoal')
		  event.recipes.create.haunting('charcoal', 'coal')
		  event.recipes.create.haunting('netherrack', 'cobblestone')
		  event.recipes.create.haunting('blackstone', 'stone')
		  event.recipes.create.crushing('4x ad_astra:ice_shard', 'minecraft:blue_ice')
		  event.recipes.create.splashing('minecraft:blue_ice', 'minecraft:packed_ice')
		  event.recipes.create.deploying('create:electron_tube', ['create:polished_rose_quartz', 'minecraft:iron_nugget'])
		  event.recipes.create.deploying('create:electron_tube', ['minecraft:iron_nugget', 'create:polished_rose_quartz'])
		  event.recipes.create.filling('create:rose_quartz', [Fluid.of('thermal:redstone', 50), 'minecraft:quartz'])
		  event.recipes.create.mixing([Fluid.of('thermal:redstone', 100)], ['minecraft:redstone']).heated()
		  event.recipes.create.mixing('2x mekanism:alloy_reinforced', ['mekanism:alloy_infused', 'mekanism:enriched_diamond']).superheated()
		  event.recipes.create.mixing('mekanism:alloy_atomic', ['mekanism:alloy_reinforced', 'mekanism:enriched_refined_obsidian']).superheated()
		  event.recipes.create.compacting('kubejs:tier_1_plating', ['mekanism:block_steel', 'mekanism:block_bronze', 'create:shadow_steel']).superheated()
		  event.recipes.create.compacting('kubejs:tier_2_plating', ['kubejs:tier_1_plating', 'ad_astra:desh_block', 'kubejs:thermal_tile']).superheated()
		  event.recipes.create.compacting('kubejs:tier_3_plating', ['kubejs:tier_2_plating', 'ad_astra:ostrum_block', 'kubejs:reinforced_thermal_tile']).superheated()
		  event.recipes.create.compacting('kubejs:tier_4_plating', ['kubejs:tier_3_plating', 'ad_astra:calorite_block']).superheated()
		  event.recipes.create.compacting('minecraft:diamond', '9x mekanism:enriched_carbon').superheated()
		  event.recipes.create.mixing('3x ad_astra:steel_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', '#mekanized:dust/coals']).heated()
		  event.recipes.create.crushing('ad_astra:mercury_cobblestone', 'ad_astra:mercury_stone')
		  event.recipes.create.splashing([Item.of('create:copper_nugget').withChance(0.15), Item.of('minecraft:clay_ball').withChance(0.25)], 'minecraft:sand')
		  event.recipes.create.mixing(['2x minecraft:redstone', Item.of('minecraft:redstone').withChance(0.2)], ['minecraft:nether_wart', 'create:cinder_flour', 'mekanism:dust_copper']).heated()
		  event.recipes.create.crushing([Item.of('create:zinc_nugget').withChance(0.1), Item.of('mekanism:nugget_uranium').withChance(0.001)], 'minecraft:stone')
		  event.recipes.createMechanicalCrafting('create:creative_fluid_tank', [
			' SSSSS ',
			' SAAAS ',
			' SAFAS ',
			' SAAAS ',
			' SSSSS ',
		  ], {
			S: 'kubejs:stellarite_block',
			A: 'mekanism:pellet_antimatter',
			F: 'create:fluid_tank'
		  })
		  event.smithing(
			'create:creative_blaze_cake',
			'create:blaze_cake',
			'kubejs:stellarite_block'
		  )
		  event.smithing(
			'create_sa:creative_filling_tank',
			'create_sa:large_fueling_tank',
			'kubejs:stellarite_block'
		  )
		  event.recipes.createMechanicalCrafting('create:creative_motor', [
			' SSSSS ',
			' SASAS ',
			' SSFSS ',
			' SASAS ',
			' SSSSS ',
		  ], {
			S: 'kubejs:stellarite_block',
			A: 'mekanism:pellet_antimatter',
			F: 'createaddition:electric_motor'
		  })
	event.smithing(
		'ad_astra:oxygen_gear',
		'create:copper_backtank',
		'create:shadow_steel'
	  )
	event.shaped(
		Item.of('mekanism:digital_miner'),
		[ 
		  'DLD', 
		  'BRB',
		  'TST'  
		],
		{
		  L: 'kubejs:processor',
		  T: 'create:shadow_steel',
		  S: 'mekanism:steel_casing',
		  R: 'mekanism:robit',
		  D: 'kubejs:tier_3_plating',
		  B: 'mekanism:block_steel'
		}
	  )
	  event.shaped(
		Item.of('mekanism:crusher'),
		[ 
		  'RPR', 
		  'MSM',
		  'RBR'  
		],
		{
		  R: 'minecraft:redstone',
		  P: 'minecraft:piston',
		  S: 'mekanism:steel_casing',
		  B: 'minecraft:iron_block',
		  M: 'kubejs:basic_mechanism'
		}
	  )
	  event.shaped(
		Item.of('ad_astra:oxygen_loader'),
		[ 
		  'BBB', 
		  'TEC',
		  'BRB'  
		],
		{
		  T: 'create:fluid_tank',
		  R: 'kubejs:logic_mechanism',
		  E: 'mekanism:electrolytic_core',
		  B: 'create:shadow_steel',
		  C: 'mekanism:basic_chemical_tank'
		}
	  )
	  event.shaped(
		Item.of('mekanism:basic_bin'),
		[ 
		  'CSC', 
		  'R R',
		  'CCC'  
		],
		{
		  C: 'minecraft:cobblestone',
		  R: 'minecraft:redstone',
		  S: 'minecraft:iron_ingot'
		}
	  )
	  event.shaped(
		Item.of('mekanism:advanced_bin'),
		[ 
		  'CEC', 
		  'IBI',
		  'CCC'  
		],
		{
		B: 'mekanism:basic_bin',
		I: 'mekanism:alloy_infused',
		E: 'create:electron_tube',
		C: 'minecraft:cobblestone'
		}
	  )
	  event.shaped(
		Item.of('mekanism:elite_bin'),
		[ 
		  'CEC', 
		  'RBR',
		  'CCC'  
		],
		{
		B: 'mekanism:advanced_bin',
		R: 'mekanism:alloy_reinforced',
		E: 'mekanism:basic_control_circuit',
		C: 'minecraft:cobblestone'
		}
	  )
	  event.shaped(
		Item.of('mekanism:ultimate_bin'),
		[ 
		  'CEC', 
		  'ABA',
		  'CCC'  
		],
		{
		B: 'mekanism:elite_bin',
		A: 'mekanism:alloy_atomic',
		E: 'mekanism:elite_control_circuit',
		C: 'minecraft:cobblestone'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:wind_generator'),
		[ 
		  ' I ', 
		  'IWI',
		  'ESE'  
		],
		{
		S: 'mekanism:steel_casing',
		E: 'mekanism:energy_tablet',
		W: 'create:windmill_bearing',
		I: 'createaddition:iron_rod'
		}
	  )
	  event.shaped(
		Item.of('mekanism:energized_smelter'),
		[ 
		  'RHR', 
		  'MSM',
		  'RBR'  
		],
		{
		M: 'kubejs:basic_mechanism',
		S: 'mekanism:steel_casing',
		R: 'minecraft:redstone',
		B: 'mekanism:block_steel',
		H: 'create_sa:heat_engine'
		}
	  )
	  event.shaped(
		Item.of('mekanism:chemical_infuser'),
		[ 
		  'ASA', 
		  'BCB',
		  'ALA'  
		],
		{
		B: 'mekanism:basic_chemical_tank',
		A: 'mekanism:alloy_infused',
		S: 'mekanism:block_steel',
		C: 'mekanism:steel_casing',
		L: 'kubejs:logic_mechanism'
		}
	  )
	  event.shaped(
		Item.of('mekanism:formulaic_assemblicator'),
		[ 
		  'STS', 
		  'PCP',
		  'SWS'  
		],
		{
		T: 'minecraft:crafting_table',
		W: '#forge:chests/wooden',
		S: 'ad_astra:steel_ingot',
		C: 'mekanism:steel_casing',
		P: 'create:precision_mechanism'
		}
	  )
	  event.shaped(
		Item.of('mekanism:precision_sawmill'),
		[ 
		  'ISI', 
		  'BCB',
		  'ISI'  
		],
		{
		B: 'kubejs:basic_mechanism',
		I: 'minecraft:iron_ingot',
		C: 'mekanism:steel_casing',
		S: 'thermal:saw_blade'
		}
	  )
	  event.shaped(
		Item.of('mekanism:fuelwood_heater'),
		[ 
		  'III', 
		  'FSF',
		  'III'  
		],
		{
		F: 'minecraft:furnace',
		S: 'mekanism:steel_casing',
		I: 'ad_astra:steel_ingot'
		}
	  )
	  event.shaped(
		Item.of('mekanism:oredictionificator'),
		[ 
		  'IPI', 
		  'IDI',
		  'ICI'  
		],
		{
		I: 'ad_astra:steel_ingot',
		P: '#forge:glass_panes',
		C: '#forge:chests/wooden',
		D: 'mekanism:dictionary'
		}
	  )
	  event.shaped(
		Item.of('mekanism:dictionary'),
		[ 
		  'SPS', 
		  'SBS',
		  'SSS'  
		],
		{
		B: 'minecraft:book',
		P: '#forge:glass_panes',
		S: 'ad_astra:steel_plate'
		}
	  )
	  event.shaped(
		Item.of('thermal:machine_crafter'),
		[ 
		  ' C ', 
		  'TMT',
		  'PFP'  
		],
		{
		C: 'minecraft:crafting_table',
		M: 'thermal:machine_frame',
		F: 'thermal:rf_coil',
		P: 'create:precision_mechanism',
		T: 'mekanism:ingot_tin'
		}
	  )
	  event.shaped(
		Item.of('mekanism:crafting_formula'),
		[ 
		  'SES', 
		  'SPS',
		  'SSS'  
		],
		{
		P: 'minecraft:paper',
		E: 'create:electron_tube',
		P: '#forge:glass_panes',
		S: 'create:iron_sheet'
		}
	  )
	  event.shaped(
		Item.of('mekanism:metallurgic_infuser'),
		[ 
		  'IHI', 
		  'ROR',
		  'CBC'  
		],
		{
		R: 'minecraft:redstone',
		I: 'minecraft:iron_ingot',
		B: 'kubejs:basic_mechanism',
		O: 'mekanism:steel_casing',
		H: 'create_sa:heat_engine',
		C: 'create:copper_sheet'
		}
	  )
	  event.shapeless(Item.of('createaddition:diamond_grit_sandpaper', '{Unbreakable:1}'), ['#create:sandpaper', '#forge:dusts/diamond'])
	  event.shaped(
		Item.of('mekanism:nutritional_liquifier'),
		[ 
		  'RIR', 
		  'BSB',
		  'RIR'  
		],
		{
		B: 'minecraft:bowl',
		S: 'mekanism:steel_casing',
		R: 'minecraft:redstone',
		I: 'mekanism:alloy_infused'
		}
	  )
	  event.shaped(
		Item.of('mekanism:industrial_alarm'),
		[ 
		  'LLL', 
		  'PRP',
		  'LLL'  
		],
		{
		L: 'mekanism:ingot_lead',
		R: 'minecraft:redstone_lamp',
		P: '#forge:glass_panes'
		}
	  )
	  event.shaped(
		Item.of('8x mekanism:basic_logistical_transporter'),
		[ 
		  '   ', 
		  'SIS',
		  '   '  
		],
		{
		S: 'create:andesite_alloy',
		I: '#forge:chests'
		}
	  )
	  event.shaped(
		Item.of('mekanism:free_runners'),
		[ 
		  'S S', 
		  'I I',
		  'T T'  
		],
		{
		I: 'mekanism:alloy_infused',
		T: 'mekanism:energy_tablet',
		S: 'mekanism:block_steel'
		}
	  )
	  event.shaped(
		Item.of('mekanism:chemical_oxidizer'),
		[ 
		  'SRS', 
		  'PDB',
		  'SRS'  
		],
		{
		R: 'mekanism:alloy_reinforced',
		S: 'mekanism:block_steel',
		D: 'mekanism:dynamic_tank',
		B: 'mekanism:basic_chemical_tank',
		P: 'mekanism:steel_casing'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:bio_generator'),
		[ 
		  'RPR', 
		  'FSF',
		  'BAB'  
		],
		{
		F: 'createaddition:biomass',
		A: 'mekanism:alloy_infused',
		R: 'minecraft:redstone',
		B: 'mekanism:block_steel',
		S: 'mekanism:steel_casing',
		P: 'create:propeller'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:heat_generator'),
		[ 
		  'III', 
		  'IOI',
		  'CFC'  
		],
		{
		I: 'minecraft:iron_ingot',
		O: 'mekanism:ingot_osmium',
		F: 'minecraft:furnace',
		C: 'minecraft:copper_ingot'
		}
	  )
	  event.shaped(
		Item.of('tesseract:tesseract'),
		[ 
		  'DED', 
		  'ECE',
		  'DED'  
		],
		{
		D: 'create:shadow_steel',
		E: 'ad_astra:ostrum_ingot',
		C: 'fluxnetworks:flux_core'
		}
	  )
	  event.shaped(
		Item.of('mekanism:dynamic_valve'),
		[ 
		  ' D ', 
		  'D D',
		  ' D '  
		],
		{
		D: 'mekanism:dynamic_tank'
		}
	  )
	  event.shaped(
		Item.of('mekanism:rotary_condensentrator'),
		[ 
		  'IEI', 
		  'CSF',
		  'IBI'  
		],
		{
		C: 'mekanism:basic_chemical_tank',
		F: 'mekanism:basic_fluid_tank',
		S: 'mekanism:steel_casing',
		I: 'ad_astra:steel_ingot',
		E: 'mekanism:energy_tablet',
		B: 'create:precision_mechanism'
		}
	  )
	  event.shaped(
		Item.of('mekanism:pressurized_reaction_chamber'),
		[ 
		  'SAS', 
		  'SES',
		  'BDB'  
		],
		{
		B: 'mekanism:basic_chemical_tank',
		D: 'mekanism:dynamic_tank',
		S: 'ad_astra:steel_ingot',
		A: 'create:precision_mechanism',
		E: 'mekanism:enrichment_chamber'
		}
	  )
	  event.shaped(
		Item.of('mekanism:enrichment_chamber'),
		[ 
		  'RPR', 
		  'ISI',
		  'RIR'  
		],
		{
		R: 'minecraft:redstone',
		S: 'mekanism:steel_casing',
		I: 'minecraft:iron_ingot',
		P: 'create:precision_mechanism'
		}
	  )
	  event.shaped(
		Item.of('create:deployer'),
		[ 
		  ' S ', 
		  ' C ',
		  ' H '  
		],
		{
		H: 'kubejs:golden_hand',
		C: 'create:andesite_casing',
		S: 'create:piston_extension_pole'
		}
	  )
	  event.shaped(
		Item.of('kubejs:golden_hand'),
		[ 
		  ' A ', 
		  'GGG',
		  ' G '  
		],
		{
		G: 'create:golden_sheet',
		A: 'create:andesite_alloy'
		}
	  )
	  event.shaped(
		Item.of('mekanism:purification_chamber'),
		[ 
		  'AGA', 
		  'IEI',
		  'APA'  
		],
		{
		E: 'mekanism:enrichment_chamber',
		A: 'mekanism:alloy_infused',
		I: 'mekanism:ingot_osmium',
		P: 'create:precision_mechanism',
		G: '#forge:glass'
		}
	  )
	  event.shaped(
		Item.of('mekanism:chemical_injection_chamber'),
		[ 
		  'RCR', 
		  'GPG',
		  'RCR'  
		],
		{
		P: 'mekanism:purification_chamber',
		G: 'minecraft:gold_ingot',
		C: 'mekanism:basic_control_circuit',
		R: 'mekanism:alloy_reinforced'
		}
	  )
	  event.shaped(
		Item.of('mekanism:combiner'),
		[ 
		  'RIR', 
		  'CSC',
		  'RIR'  
		],
		{
		S: 'mekanism:steel_casing',
		C: 'minecraft:cobblestone',
		I: 'ad_astra:steel_ingot',
		R: 'mekanism:alloy_reinforced'
		}
	  )
	  event.shaped(
		Item.of('mekanism:osmium_compressor'),
		[ 
		  'IPI', 
		  'OSO',
		  'IBI'  
		],
		{
		S: 'mekanism:steel_casing',
		O: 'mekanism:ingot_osmium',
		I: 'ad_astra:steel_ingot',
		P: 'minecraft:piston',
		B: 'kubejs:basic_mechanism'
		}
	  )
	  event.shaped(
		Item.of('mekanism:painting_machine'),
		[ 
		  'AIA', 
		  'CBC',
		  'AIA'  
		],
		{
		B: 'mekanism:dye_base',
		I: 'ad_astra:steel_ingot',
		C: 'mekanism:basic_control_circuit',
		A: 'mekanism:alloy_infused'
		}
	  )
	  event.shaped(
		Item.of('create:mechanical_saw'),
		[ 
		  '   ', 
		  ' B ',
		  ' A '  
		],
		{
		A: 'create:andesite_casing',
		B: 'thermal:saw_blade'
		}
	  )
	  event.shaped(
		Item.of('mekanism:upgrade_muffling'),
		[ 
		  ' G ', 
		  ' W ',
		  ' G '  
		],
		{
		G: '#forge:glass',
		W: '#minecraft:wool'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:control_rod_assembly'),
		[ 
		  'LPL', 
		  'SLS',
		  'SLS'  
		],
		{
		S: 'ad_astra:desh_ingot',
		L: 'mekanism:ingot_lead',
		P: 'kubejs:processor'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:rotational_complex'),
		[ 
		  'SIS', 
		  'CPC',
		  'SIS'  
		],
		{
		S: 'ad_astra:steel_ingot',
		C: 'mekanism:advanced_control_circuit',
		P: 'kubejs:processor',
		I: 'mekanism:alloy_infused'
		}
	  )
	  event.shaped(
		Item.of('mekanismgenerators:fusion_reactor_controller'),
		[ 
		  'RPR', 
		  'FCF',
		  'FFF'  
		],
		{
		F: 'mekanismgenerators:fusion_reactor_frame',
		C: 'mekanism:basic_chemical_tank',
		P: '#forge:glass_panes',
		R: 'kubejs:processor'
		}
	  )
	  event.smithing(
		'mekanismgenerators:fission_reactor_logic_adapter',
		'mekanismgenerators:fission_reactor_casing',
		'kubejs:logic_mechanism'
	  )
	  event.smithing(
		'mekanismgenerators:fusion_reactor_logic_adapter',
		'mekanismgenerators:fusion_reactor_frame',
		'kubejs:logic_mechanism'
	  )
	  event.shaped(
		Item.of('mekanism:robit'),
		[ 
		  ' S ', 
		  'ELE',
		  'OPO'  
		],
		{
		S: 'ad_astra:steel_ingot',
		L: 'kubejs:logic_mechanism',
		E: 'mekanism:energy_tablet',
		O: 'mekanism:alloy_atomic',
		P: '#mekanism:personal_storage'
		}
	  )
	  event.shaped(
		Item.of('create:content_observer'),
		[ 
		  ' C ', 
		  ' B ',
		  ' L '  
		],
		{
		C: 'minecraft:comparator',
		B: 'create:brass_casing',
		L: 'kubejs:logic_mechanism'
		}
	  )
	  event.shaped(
		Item.of('ad_astra:oxygen_sensor'),
		[ 
		  'PFP', 
		  'OVO',
		  'PLP'  
		],
		{
		F: 'ad_astra:engine_fan',
		L: 'kubejs:logic_mechanism',
		V: 'minecraft:observer',
		O: 'ad_astra:ostrum_ingot',
		P: 'ad_astra:ostrum_plate'
		}
	  )
	  event.shaped(
		Item.of('ad_astra:cryo_freezer'),
		[ 
		  'POP', 
		  'OVO',
		  'BLB'  
		],
		{
		L: 'kubejs:logic_mechanism',
		V: 'ad_astra:ostrum_tank',
		O: 'ad_astra:ostrum_ingot',
		P: 'ad_astra:ostrum_plate',
		B: 'ad_astra:ostrum_block'
		}
	  )
	  event.shaped(
		Item.of('thermal:machine_crucible'),
		[ 
		  ' G ', 
		  'FMF',
		  'IRI'  
		],
		{
		G: '#forge:glass',
		M: 'thermal:machine_frame',
		R: 'thermal:rf_coil',
		I: 'thermal:invar_gear',
		F: 'minecraft:blast_furnace'
		}
	  )
	  event.shaped(
		Item.of('thermal:machine_chiller'),
		[ 
		  ' G ', 
		  'FMF',
		  'IRI'  
		],
		{
		G: '#forge:glass',
		M: 'thermal:machine_frame',
		R: 'thermal:rf_coil',
		I: 'thermal:invar_gear',
		F: 'create:propeller'
		}
	  )
	  event.shaped(
		Item.of('mekanism:supercharged_coil'),
		[ 
		  'CCC', 
		  'PLP',
		  'SES'  
		],
		{
		C: 'minecraft:copper_ingot',
		L: 'mekanism:laser',
		S: 'kubejs:supercompressed_helium',
		P: 'kubejs:processor',
		E: 'mekanism:pellet_polonium'
		}
	  )
	  event.shaped(
		Item.of('mekanism:sps_casing'),
		[ 
		  'HPH', 
		  'PSP',
		  'HPH'  
		],
		{
		H: 'mekanism:hdpe_sheet',
		P: 'mekanism:pellet_polonium',
		S: 'kubejs:supercompressed_helium'
		}
	  )
	  event.shaped(
		Item.of('mekanism:modification_station'),
		[ 
		  'HRH', 
		  'USU',
		  'HLH'  
		],
		{
		H: 'mekanism:hdpe_sheet',
		U: 'mekanism:ultimate_control_circuit',
		S: 'mekanism:steel_casing',
		L: 'kubejs:supercompressed_helium',
		R: 'mekanism:robit'
		}
	  )
	  event.shaped(
		Item.of('create:electron_tube'),
		[ 
		  ' P ', 
		  ' I ',
		  '   '  
		],
		{
		P: 'create:polished_rose_quartz',
		I: 'minecraft:iron_nugget'
		}
	  )
	  event.shaped(
		Item.of('mekanism:solar_neutron_activator'),
		[ 
		  'HSH', 
		  'TCT',
		  'ARA'  
		],
		{
		S: 'mekanismgenerators:solar_generator',
		C: 'mekanism:steel_casing',
		A: 'mekanism:alloy_atomic',
		R: 'mekanism:reprocessed_fissile_fragment',
		T: 'kubejs:tier_1_plating',
		H: 'mekanism:hdpe_sheet'
		}
	  )
	  event.shaped(
		Item.of('4x fluxnetworks:flux_core'),
		[ 
		  'FRF', 
		  'RSR',
		  'FRF'  
		],
		{
		S: 'create:shadow_steel',
		F: 'fluxnetworks:flux_dust',
		R: 'minecraft:redstone'
		}
	  )
	  event.shaped(
		Item.of('mekanism:quantum_entangloporter'),
		[ 
		  'CUC', 
		  'ATA',
		  'CUC'  
		],
		{
		C: 'ad_astra:calorite_plate',
		T: 'tesseract:tesseract',
		U: 'mekanism:ultimate_control_circuit',
		A: 'mekanism:alloy_atomic'
		}
	  )
	  event.shaped(
		Item.of('mekanism:teleporter'),
		[ 
		  'SSS', 
		  'AQA',
		  'SSS'  
		],
		{
		S: 'mekanism:hdpe_sheet',
		Q: 'mekanism:quantum_entangloporter',
		A: 'mekanism:pellet_antimatter'
		}
	  )
	  event.shaped(
		Item.of('mekanism:portable_teleporter'),
		[ 
		  'SSS', 
		  'AQA',
		  'SSS'  
		],
		{
		S: 'mekanism:hdpe_sheet',
		Q: 'mekanism:teleporter',
		A: 'mekanism:pellet_antimatter'
		}
	  )
	  event.shaped(
		Item.of('create:belt_connector'),
		[ 
		  '   ', 
		  'RRR',
		  'RRR'  
		],
		{
		R: 'thermal:cured_rubber'
		}
	  )
	event.shaped(
		Item.of('8x mekanism:basic_mechanical_pipe'),
		[ 
		  '   ', 
		  'SPS',
		  '   '  
		],
		{
		S: 'ad_astra:steel_ingot',
		P: 'create:mechanical_pump'
		}
	  )
	event.shaped(
		Item.of('custommachinery:custom_machine_item', '{machine:"custom_machines:ground_sifter"}'),
		[ 
		  'PCP', 
		  'ELE',
		  'PCP'  
		],
		{
		E: 'mekanism:ultimate_energy_cube',
		L: 'kubejs:logic_mechanism',
		C: 'mekanism:ultimate_control_circuit',
		P: 'mekanism:pellet_polonium'
		}
	  )
	event.shaped(
		Item.of('custommachinery:custom_machine_item', '{machine:"custom_machines:microgravity_centrifuge"}'),
		[ 
		  'RTR', 
		  'ECE',
		  'RPR'  
		],
		{
		C: 'mekanism:steel_casing',
		E: 'mekanism:elite_control_circuit',
		R: 'mekanism:ingot_refined_obsidian',
		T: 'mekanism:energy_tablet',
		P: 'create:precision_mechanism'
		}
	  )
	event.recipes.thermal.smelter('create:chromatic_compound', ['4x minecraft:glowstone_dust', 'create:powdered_obsidian', 'thermal:enderium_ingot']).energy(10000)
	event.recipes.create.mixing('8x ad_astra:steel_ingot', ['minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'minecraft:iron_ingot', 'mekanism:enriched_carbon']).superheated()
	event.recipes.create.compacting([Fluid.of('kubejs:artificial_void', 500)], [Fluid.of('thermal:ender', 1000), 'create:chromatic_compound', 'create:chromatic_compound'])
	event.recipes.create.mixing('create:shadow_steel', [Fluid.of('kubejs:artificial_void', 50), 'create:chromatic_compound'])
	event.recipes.mekanismEnriching('mekanism:enriched_carbon', '#minecraft:coals')
	event.recipes.mekanism.dissolution({gas: 'kubejs:helium3', amount: 10}, {gas: 'mekanism:sulfuric_acid', amount: 2}, {item: 'kubejs:lunar_crystal', amount: 1})

	event.shapeless('kubejs:assembly_kit', [
		'create:andesite_alloy',
		'minecraft:redstone',
		'minecraft:gold_nugget',
		'minecraft:iron_nugget'
	])
	event.stonecutting('ad_astra:steel_block', 'mekanism:block_steel')
// Silica Processing Line
	event.recipes.custommachinery.custom_machine("custom_machines:microgravity_centrifuge", 100)
	.requireEnergyPerTick(20)
	.dimensionWhitelist("ad_astra:earth_orbit")
	.requireItem(Item.of('minecraft:sand'))
	.produceItem(Item.of('kubejs:high_grade_sand'))
	event.recipes.mekanism.dissolution({slurry: 'kubejs:dirty_silica_slurry', amount: 25}, {gas: 'mekanism:hydrogen_chloride', amount: 1}, {item: 'kubejs:high_grade_sand', amount: 1})
	event.custom(
		{
			"type": "mekanism:washing",
			"fluidInput": {
				fluid: 'minecraft:water',
				amount: 5
			},
			"slurryInput": {
				"slurry": 'kubejs:dirty_silica_slurry',
				"amount": 1
			},
			"output": {
				"slurry": 'kubejs:clean_silica_slurry',
				"amount": 1
			}
		  }
	)
	event.custom(
		{
			"type": "mekanism:crystallizing",
			"chemicalType": "slurry",
			"input": {
				"slurry": 'kubejs:clean_silica_slurry',
				"amount": 1000
			},
			"output": {
				"item": 'kubejs:silica_cluster'
			}
		  }
	)

	event.recipes.create.compacting('kubejs:thermal_tile', ['mekanism:enriched_carbon', 'kubejs:silica_cluster', 'kubejs:silica_cluster', 'kubejs:silica_cluster', 'kubejs:silica_cluster', 'kubejs:silica_cluster', 'kubejs:silica_cluster']).superheated()
	event.recipes.create.mixing('kubejs:reinforced_thermal_tile', ['kubejs:thermal_tile', 'ad_astra:ostrum_plate']).superheated()

	// Stellarite processing
	event.recipes.create.crushing('kubejs:mercury_stone_dust', 'ad_astra:mercury_cobblestone')

	event.recipes.custommachinery.custom_machine("custom_machines:microgravity_centrifuge", 100)
	.requireEnergyPerTick(40)
	.dimensionWhitelist("ad_astra:earth_orbit")
	.requireItem(Item.of('kubejs:mercury_stone_dust'))
	.produceItem(Item.of('kubejs:rare_metal_dust'))

	event.recipes.mekanism.dissolution({slurry: 'kubejs:dirty_rare_metal_slurry', amount: 10}, {gas: 'mekanism:sulfuric_acid', amount: 1}, {item: 'kubejs:rare_metal_dust', amount: 1})

	event.custom(
		{
			"type": "mekanism:washing",
			"fluidInput": {
				fluid: 'minecraft:water',
				amount: 5
			},
			"slurryInput": {
				"slurry": 'kubejs:dirty_rare_metal_slurry',
				"amount": 1
			},
			"output": {
				"slurry": 'kubejs:clean_rare_metal_slurry',
				"amount": 1
			}
		  }
	)

	event.custom(
		{
			"type": "mekanism:crystallizing",
			"chemicalType": "slurry",
			"input": {
				"slurry": 'kubejs:clean_rare_metal_slurry',
				"amount": 1000
			},
			"output": {
				"item": 'kubejs:stellarite_cluster'
			}
		  }
	)

	event.custom(
		{
		  "type": "mekanism:oxidizing",
		  "input": {
			"ingredient": {
			  "item": "kubejs:stellarite_cluster"
			}
		  },
		  "output": {
			"gas": "kubejs:unrefined_stellarite",
			"amount": 100
		  }
		}
	  )

	event.custom(
		{
			"type": "mekanism:centrifuging",
			"input": {
			  "amount": 100,
			  "gas": "kubejs:unrefined_stellarite"
			},
			"output": {
			  "amount": 10,
			  "gas": "kubejs:refined_stellarite"
			}
	  }
	)

	event.custom(
		{
			"type": "mekanism:crystallizing",
			"chemicalType": "gas",
			"input": {
				"gas": 'kubejs:refined_stellarite',
				"amount": 1000
			},
			"output": {
				"item": 'kubejs:refined_stellarite'
			}
		  }
	)

	event.recipes.create.haunting('minecraft:phantom_membrane', 'minecraft:leather')

	event.shaped(
		Item.of('ad_astra:wheel'),
		[ 
		  'RRR', 
		  'RSR',
		  'RRR'  
		],
		{
		R: 'thermal:cured_rubber',
		S: 'ad_astra:steel_plate'
		}
	  )
	event.shaped(
		Item.of('ad_astra:tier_1_rover'),
		[ 
		  'D R', 
		  'DSE',
		  'WDW'  
		],
		{
		W: 'ad_astra:wheel',
		D: 'ad_astra:desh_plate',
		E: 'ad_astra:engine_frame',
		D: 'ad_astra:desh_block',
		R: 'createaddition:iron_rod',
		S: 'mekanism:steel_casing'
		}
	  )
	event.shaped(
		Item.of('createaddition:straw'),
		[ 
		  ' SS', 
		  ' S ',
		  ' S '  
		],
		{
		S: 'create:sturdy_sheet',
		}
	  )
	event.smithing(
		'create:empty_blaze_burner',
		'#forge:netherrack',
		'kubejs:basic_mechanism'
	)
	event.recipes.create.deploying('create:empty_blaze_burner', ['#forge:netherrack', 'kubejs:basic_mechanism'])
	event.remove({ id: 'create:splashing/sand' })

	event.replaceInput(
		{ id: 'mekanism:upgrade/filter' },
		'mekanism:dust_tin',
		'kubejs:lunar_crystal'
	  )
	event.recipes.create.splashing([Item.of('kubejs:lunar_crystal').withChance(0.2)], 'ad_astra:moon_sand')
})
ServerEvents.recipes((event) => {
    event.custom(
        {
            type: "mekanism:reaction",
            duration: 600,
            energyRequired: 800,
            itemInput: {
                ingredient: {
                    item: 'mekanism:dust_fluorite'
                },
            },
            fluidInput: {
                fluid: 'mekanismgenerators:tritium',
                amount: 200
            },
            gasInput: {
                "gas": 'kubejs:helium3',
                "amount": 1000
            },
            itemOutput: {
                "item": 'kubejs:supercompressed_helium'
              },
            gasOutput: {
                "gas": 'mekanism:spent_nuclear_waste',
                "amount": 200
            }
        }
    )
	event.custom(
		{
		  "type": "mekanism:oxidizing",
		  "input": {
			"ingredient": {
			  "item": "kubejs:refined_stellarite"
			}
		  },
		  "output": {
			"gas": "kubejs:refined_stellarite",
			"amount": 1000
		  }
		}
	  )
	  event.custom(
		{
			"type": "mekanism:centrifuging",
			"input": {
				"gas": "kubejs:refined_stellarite",
				"amount": 1
			},
			"output": {
				"gas": "mekanism:fissile_fuel",
				"amount": 10000
			}
		  }
	  )
	event.custom(
		{
			"type": "mekanism:injecting",
			"itemInput": {
				"ingredient": {
					"item": "kubejs:rusted_iron"
				}
			},
			"chemicalInput": {
				"gas": "mekanism:hydrogen",
				"amount": 1
			},
			"output": {
				"item": "mekanism:shard_iron"
			}
		  }
	  )
	event.recipes.custommachinery.custom_machine("custom_machines:ground_sifter", 20)
	.requireEnergyPerTick(1000)
	.dimensionWhitelist("ad_astra:moon")
	.requireStructure([["a"],["m"]], {"a":"ad_astra:moon_sand"})
	.requireFluidPerTick(Fluid.of("minecraft:water", 100))
	.produceItem(Item.of('ad_astra:moon_sand'), "output")

	event.recipes.custommachinery.custom_machine("custom_machines:ground_sifter", 20)
	.requireEnergyPerTick(2000)
	.dimensionWhitelist("ad_astra:mars")
	.requireStructure([["a"],["m"]], {"a":"ad_astra:mars_sand"})
	.requireFluidPerTick(Fluid.of("minecraft:water", 150))
	.produceItem(Item.of('kubejs:rusted_iron'), "output")

	event.recipes.custommachinery.custom_machine("custom_machines:ground_sifter", 40)
	.requireEnergyPerTick(2000)
	.dimensionWhitelist("ad_astra:venus")
	.requireStructure([["a"],["m"]], {"a":"ad_astra:venus_sand"})
	.requireFluidPerTick(Fluid.of("minecraft:water", 700))
	.produceItem(Item.of('mekanism:dust_sulfur'), "output")

})