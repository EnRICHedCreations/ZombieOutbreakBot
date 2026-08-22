const ROLES={
 soldier:{name:'Soldier',emoji:'🪖',description:'+15% firearm damage and improved armor.'},
 medic:{name:'Medic',emoji:'💉',description:'Stronger healing and revives.'},
 scout:{name:'Scout',emoji:'👟',description:'Quieter travel/search and better hiding.'},
 engineer:{name:'Engineer',emoji:'🔧',description:'Better barricades and crafting.'},
 survivalist:{name:'Survivalist',emoji:'🌲',description:'Better melee and reduced hunger/water drain.'}
};
const LOCATIONS={
 APARTMENTS:{name:'Apartments',emoji:'🏢',danger:1,medical:.6,food:1.2,ammo:.7,noise:3,caches:4},
 PHARMACY:{name:'Pharmacy',emoji:'💊',danger:.9,medical:1.8,food:.5,ammo:.3,noise:3,caches:3},
 HOSPITAL:{name:'Hospital',emoji:'🏥',danger:1.35,medical:2.2,food:.4,ammo:.4,noise:4,caches:4},
 POLICE:{name:'Police Station',emoji:'🚔',danger:1.25,medical:.5,food:.4,ammo:1.9,noise:5,caches:4},
 SUPERMARKET:{name:'Supermarket',emoji:'🛒',danger:1.05,medical:.5,food:2.2,ammo:.2,noise:4,caches:5},
 GAS:{name:'Gas Station',emoji:'⛽',danger:1,medical:.3,food:1,ammo:.4,noise:4,caches:3},
 FIRE:{name:'Fire Station',emoji:'🚒',danger:.9,medical:.8,food:.7,ammo:.5,noise:3,caches:4},
 CHECKPOINT:{name:'Military Checkpoint',emoji:'🪖',danger:1.5,medical:.8,food:.5,ammo:2.1,noise:6,caches:4},
 SEWERS:{name:'Sewers',emoji:'🕳️',danger:1.45,medical:.2,food:.2,ammo:.5,noise:2,caches:3},
 WAREHOUSE:{name:'Warehouse',emoji:'🏭',danger:1.2,medical:.3,food:.8,ammo:1,noise:5,caches:5}
};
const INFECTED={
 WALKER:{name:'Walker',emoji:'🧟',hp:55,damage:[6,12],infection:[1,4]},
 RUNNER:{name:'Runner',emoji:'🏃',hp:45,damage:[9,16],infection:[2,6]},
 CRAWLER:{name:'Crawler',emoji:'🩸',hp:35,damage:[5,11],infection:[1,5]},
 SCREAMER:{name:'Screamer',emoji:'📢',hp:50,damage:[5,10],infection:[2,5]},
 BLOATER:{name:'Bloater',emoji:'🤢',hp:90,damage:[12,22],infection:[5,12]},
 STALKER:{name:'Stalker',emoji:'🌑',hp:70,damage:[15,26],infection:[3,9]},
 ARMORED:{name:'Armored Infected',emoji:'🛡️',hp:120,damage:[13,23],infection:[2,7]},
 BRUTE:{name:'Brute',emoji:'👹',hp:260,damage:[22,38],infection:[4,10]}
};
const WEAPONS={
 PISTOL:{name:'9mm Pistol',emoji:'🔫',damage:[18,28],ammoType:'LIGHT',noise:5,accuracy:.82,melee:false},
 SMG:{name:'SMG',emoji:'🔫',damage:[22,34],ammoType:'LIGHT',noise:7,accuracy:.78,melee:false},
 RIFLE:{name:'Assault Rifle',emoji:'🔫',damage:[30,45],ammoType:'RIFLE',noise:8,accuracy:.80,melee:false},
 SHOTGUN:{name:'Shotgun',emoji:'💥',damage:[40,60],ammoType:'SHELL',noise:10,accuracy:.74,melee:false},
 HUNTING:{name:'Hunting Rifle',emoji:'🎯',damage:[42,62],ammoType:'RIFLE',noise:9,accuracy:.86,melee:false},
 CROWBAR:{name:'Crowbar',emoji:'🔧',damage:[16,28],ammoType:null,noise:2,accuracy:.90,melee:true},
 MACHETE:{name:'Machete',emoji:'🗡️',damage:[24,36],ammoType:null,noise:1,accuracy:.92,melee:true}
};
const ITEMS={
 BANDAGE:{name:'Bandage',emoji:'🩹',type:'medical'},MEDKIT:{name:'Medkit',emoji:'🧰',type:'medical'},
 ANTIVIRAL:{name:'Antiviral',emoji:'💉',type:'medical'},FRAG:{name:'Frag Grenade',emoji:'💣',type:'lethal'},
 MOLOTOV:{name:'Molotov',emoji:'🔥',type:'lethal'},FLARE:{name:'Noise Flare',emoji:'🚨',type:'utility'},
 TOOLKIT:{name:'Toolkit',emoji:'🧰',type:'utility'},FOOD:{name:'Food Ration',emoji:'🥫',type:'survival'},
 WATER:{name:'Water Bottle',emoji:'💧',type:'survival'},FUEL:{name:'Fuel Can',emoji:'⛽',type:'vehicle'}
};
const DIFFICULTIES={
 SURVIVOR:{name:'Survivor',enemy:.85,loot:1.15,infection:.8},
 OUTBREAK:{name:'Outbreak',enemy:1,loot:1,infection:1},
 NIGHTMARE:{name:'Nightmare',enemy:1.25,loot:.9,infection:1.25},
 APOCALYPSE:{name:'Apocalypse',enemy:1.5,loot:.8,infection:1.5}
};
const RARITIES={COMMON:{name:'Common',emoji:'⬜',mult:1},UNCOMMON:{name:'Uncommon',emoji:'🟩',mult:1.08},RARE:{name:'Rare',emoji:'🟦',mult:1.16},EPIC:{name:'Epic',emoji:'🟪',mult:1.27},LEGENDARY:{name:'Legendary',emoji:'🟧',mult:1.42}};
module.exports={ROLES,LOCATIONS,INFECTED,WEAPONS,ITEMS,DIFFICULTIES,RARITIES};