// This file adds extra mod compatibility with mods that aren't in the official mod list of Create: Mekanized

ServerEvents.recipes(event => {
    // Compatibility with Sophisticated Backpacks
        event.remove({ output: 'sophisticatedbackpacks:inception_upgrade' })
        event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
        event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_1' })
        event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
        event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
        event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
        // These upgrades have been made inaccessible due to their performance and file size impact on clients and servers based on past experience.
    // Compatibility with Sophisticated Storage
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_2' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_3' })
        event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_4' })
        // These upgrades have been removed for the same reason as Sophisticated Backpacks
})