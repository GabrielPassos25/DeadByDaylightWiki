const informations = [
    {
        'name': 'The Trapper',
        'description': 'is an area-control Killer, able to apply pressure across the Map by placing deadly Bear Traps for Survivors to step into.',
        'perks': 'His personal Perks:',
        'perk1': 'Unnerving Presence',
        'perk2': 'Brutal Strength',
        'perk3': 'Agitation',
        'difficult': 'Easy',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/9f/K01_charSelect_portrait.png/revision/latest?cb=20200721164223'
    },
    {
        'name': 'The Wraith',
        'description': 'is a stealth Killer, able to cloak and uncloak at the ringing of his Wailing Bell.',
        'perks': 'His personal Perks:',
        'perk1': 'Predator',
        'perk2': 'Bloodhound',
        'perk3': 'Shadowborn',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0d/K02_charSelect_portrait.png/revision/latest?cb=20200721164229'
    },
    {
        'name': 'The Hillbilly',
        'description': "is a high-mobility Killer, able to cover large distances in a short amount of time and instantly down Survivors using his Chainsaw.",
        'perks': 'His personal Perks:',
        'perk1': 'Enduring',
        'perk2': 'Lightborn',
        'perk3': 'Tinkerer',
        'difficult': 'Easy',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/a3/K03_charSelect_portrait.png/revision/latest?cb=20200721164218'
    },
    {
        'name': 'The Nurse',
        'description': "is a warping Killer, able to blink through obstacles and quickly close gaps with her Power.",
        'perks': 'Her personal Perks:',
        'perk1': 'Stridor',
        'perk2': 'Thanatophobia',
        'perk3': "A Nurse's Calling",
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/31/K04_charSelect_portrait.png/revision/latest?cb=20200721164254'
    },
    {
        'name': 'The Shape',
        'description': "is a haunting Killer, intent on monitoring Survivors from a distance to feed his Power. The more he stalks, the stronger and faster he becomes.",
        'perks': 'His personal Perks:',
        'perk1': 'Save the Best for Last',
        'perk2': 'Play with Your Food',
        'perk3': 'Dying Light',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/04/K05_charSelect_portrait.png/revision/latest?cb=20200721164303'
    },
    {
        'name': 'The Hag',
        'description': "is a cursed Killer, able to place Phantasm Traps and then teleport to them upon activation, using her Power.",
        'perks': 'Her personal Perks:',
        'perk1': 'Hex: The Third Seal',
        'perk2': 'Hex: Ruin',
        'perk3': 'Hex: Devour Hope',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b4/K06_charSelect_portrait.png/revision/latest?cb=20200721164314'
    },
    {
        'name': 'The Doctor',
        'description': "is a madness-inducing Killer, able to use his Power - Static Blast, incapacitating Survivors and causing them to hallucinate and scream in terror, revealing their position.",
        'perks': 'His personal Perks:',
        'perk1': 'Overwhelming Presence',
        'perk2': 'Monitor & Abuse',
        'perk3': 'Overcharge',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/ad/K07_charSelect_portrait.png/revision/latest?cb=20200721164415'
    },
    {
        'name': 'The Huntress',
        'description': "is a ranged Killer, able to throw Hunting Hatchets at Survivors to injure them from a distance.",
        'perks': 'Her personal Perks:',
        'perk1': 'Beast of Prey',
        'perk2': 'Territorial Imperative',
        'perk3': 'Hex: Huntress Lullaby',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/1/1a/K08_charSelect_portrait.png/revision/latest?cb=20200721165100'
    },
    {
        'name': 'The Cannibal',
        'description': 'is a chainsaw-wielding Killer, able to trigger a deadly frenzy using his Power, immediately downing anyone in its path.',
        'perks': 'His personal Perks:',
        'perk1': 'Knock Out',
        'perk2': 'Barbecue & Chilli',
        'perk3': "Franklin's Demise",
        'difficult': 'Easy',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c6/K09_charSelect_portrait.png/revision/latest?cb=20200721164443'
    },
    {
        'name': 'The Nightmare',
        'description': "is a nightmare Killer, passively pulling Survivors into his Dream World where Survivors are vulnerable to his Dream Abilities.",
        'perks': 'His personal Perks:',
        'perk1': "Fire Up",
        'perk2': 'Remember Me',
        'perk3': 'Blood Warden',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/f/f7/K10_charSelect_portrait.png/revision/latest?cb=20200721164332'
    },
    {
        'name': 'The Pig',
        'description': "is a tormenting Killer, able to crouch into stealth mode, then ambush Survivors from a short distance.",
        'perks': 'Her personal Perks:',
        'perk1': "Hangman's Trick",
        'perk2': 'Surveillance',
        'perk3': 'Make Your Choice',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c7/K11_charSelect_portrait.png/revision/latest?cb=20200721164341'
    },
    {
        'name': 'The Clown',
        'description': "is a strategic Killer, able to control and corral Survivors by throwing bottles of The Afterpiece Tonic to create clouds of noxious gas that cover large areas for a short amount of time.",
        'perks': 'His personal Perks:',
        'perk1': "Bamboozle",
        'perk2': "Coulrophobia",
        'perk3': 'Pop Goes the Weasel',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/e/e1/K12_charSelect_portrait.png/revision/latest?cb=20200721164354'
    },
    {
        'name': 'The Spirit',
        'description': "is a phase-walking Killer, able to catch Survivors off-guard with her traversal Power, Yamaoka's Haunting.",
        'perks': 'Her personal Perks:',
        'perk1': "Spirit Fury",
        'perk2': "Hex: Haunted Ground",
        'perk3': 'Rancor',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/b0/K13_charSelect_portrait.png/revision/latest?cb=20200721164404'
    },
    {
        'name': 'The Legion',
        'description': "is a band of merciless Killers, able to rush down helpless Survivors with their power, Feral Frenzy.",
        'perks': 'Their personal Perks:',
        'perk1': "Discordance",
        'perk2': "Mad Grit",
        'perk3': 'Iron Maiden',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/a/af/K14_charSelect_portrait.png/revision/latest?cb=20200721164501'
    },
    {
        'name': 'The Plague',
        'description': "is a devout Killer, able to infect Survivors from a short distance using her Power, Vile Purge.",
        'perks': 'Her personal Perks:',
        'perk1': "Corrupt Intervention",
        'perk2': "Infectious Fright",
        'perk3': 'Dark Devotion',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/68/K15_charSelect_portrait.png/revision/latest?cb=20200721165053'
    },
    {
        'name': 'The Ghost Face',
        'description': "is a creepy Killer, able to stalk his victims and sneak up silently using his Power, Night Shroud.",
        'perks': 'His personal Perks:',
        'perk1': "I'm All Ears",
        'perk2': "Thrilling Tremors",
        'perk3': 'Furtive Chase',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/b/bd/K16_charSelect_portrait.png/revision/latest?cb=20200721164531'
    },
    {
        'name': 'The Demogorgon',
        'description': "is an unidentified Killer, able to open multiple Portals and traverse between them to cover large distances.",
        'perks': 'His personal Perks:',
        'perk1': "Surge",
        'perk2': "Mindbreaker",
        'perk3': 'Cruel Limits',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/6/6d/K17_charSelect_portrait.png/revision/latest?cb=20200721164539'
    },
    {
        'name': 'The Oni',
        'description': "is a monstrous Killer, able to absorb the blood energy of his injured foes, and then use that energy to transform into a brutal demon.",
        'perks': 'His personal Perks:',
        'perk1': "Zanshin Tactics",
        'perk2': "Blood Echo",
        'perk3': 'Nemesis',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/c/c5/K18_charSelect_portrait.png/revision/latest?cb=20200721164845'
    },
    {
        'name': 'The Deathslinger',
        'description': "is a vengeful Killer, able to spear Survivors from a distance and reel them in using his Power, The Redeemer.",
        'perks': 'His personal Perks:',
        'perk1': "Gearhead",
        'perk2': "Dead Man's Switch",
        'perk3': 'Hex: Retribution',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/8/84/K19_charSelect_portrait.png/revision/latest?cb=20200721164606'
    },
    {
        'name': 'The Executioner',
        'description': "is a map-manipulation Killer, able to torment Survivors with the hazards he creates.",
        'perks': 'His personal Perks:',
        'perk1': "Forced Penance",
        'perk2': "Trail of Torment",
        'perk3': 'Deathbound',
        'difficult': 'Intermediate',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/9/95/K20_charSelect_portrait.png/revision/latest?cb=20200721164619'
    },
    {
        'name': 'The Blight',
        'description': "is an unpredictable Killer, able to rush forward in a burst of speed and carom off obstacles to injure Survivors using his power, Blighted Corruption.",
        'perks': 'His personal Perks:',
        'perk1': "Dragon's Grip",
        'perk2': "Hex: Blood Favour",
        'perk3': 'Hex: Undying',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/0b/K21_charSelect_portrait.png/revision/latest?cb=20200820001506'
    },
    {
        'name': 'The Twins',
        'description': "are a cooperative pair of Killers, able to divide and hunt together using their Power, Blood Bond.",
        'perks': 'Their personal Perks:',
        'perk1': "Hoarder",
        'perk2': "Oppression",
        'perk3': 'Coup de Grâce',
        'difficult': 'Hard',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/0/03/K22_charSelect_portrait.png/revision/latest?cb=20210307122322'
    },
    {
        'name': 'The Trickster',
        'description': "is a ranged Killer, able to quickly unleash a flurry of blades by using his power, Showstopper.",
        'perks': 'His personal Perks:',
        'perk1': "Starstruck",
        'perk2': "Hex: Crowd Control",
        'perk3': 'No Way Out',
        'difficult': 'Easy',
        'image': 'https://static.wikia.nocookie.net/deadbydaylight_gamepedia_en/images/3/3e/K23_charSelect_portrait.png/revision/latest?cb=20210307122436'
    }
]

export default informations