// This file adds extra mod compatibility with mods that aren't in the official mod list of Create: Mekanized

JEIEvents.hideItems(event => {

// Compatibility with Sophisticated Backpacks
    event.hide('sophisticatedbackpacks:inception_upgrade')
    event.hide('sophisticatedbackpacks:stack_upgrade_starter_tier')
    event.hide('sophisticatedbackpacks:stack_upgrade_tier_1')
    event.hide('sophisticatedbackpacks:stack_upgrade_tier_2')
    event.hide('sophisticatedbackpacks:stack_upgrade_tier_3')
    event.hide('sophisticatedbackpacks:stack_upgrade_tier_4')
// Compatibility with Sophisticated Storage
    event.hide('sophisticatedstorage:stack_upgrade_tier_1')
    event.hide('sophisticatedstorage:stack_upgrade_tier_1_plus')
    event.hide('sophisticatedstorage:stack_upgrade_tier_2')
    event.hide('sophisticatedstorage:stack_upgrade_tier_3')
    event.hide('sophisticatedstorage:stack_upgrade_tier_4')

})