//OnEvent('recipes', event =>) {
ServerEvents.recipes(event => {
    event.shaped('mekanism:atomic_disassembler', [
        'ADA',
        'ABA',
        ' C '

    ],{
        A: 'mekanism:alloy_infused',
        B: 'mekanism:alloy_atomic',
        C: 'mekanism:ingot_refined_obsidian',
        D: 'minecraft:netherite_pickaxe'
    }
    )
})
ServerEvents.recipes(event => {
    event.shaped('modular_angelring:gold_ring', [
        'CAC',
        'ABA',
        'CAC'

    ],{
        A: 'minecraft:gold_ingot',
        B: 'minecraft:elytra',
        C: 'minecraft:netherite_ingot'
    }
)
})

//Removal Recipes

    ServerEvents.recipes(event => {
        //Removed ids
        [
        
            'mekanism:atomic_disassembler',
            'modular_angelring:gold_ring'
        
        ].forEach((recipeID) => event.remove({id: recipeID}));
    
    })