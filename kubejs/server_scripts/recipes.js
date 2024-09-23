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

//Removal Recipes

    ServerEvents.recipes(event => {
        //Removed ids
        [
        
            'mekanism:atomic_disassembler'
        
        ].forEach((recipeID) => event.remove({id: recipeID}));
    
    })