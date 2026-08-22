const MISSIONS=[
{id:'MEDS',name:'Medical Emergency',emoji:'💊',description:'Search 3 caches.',type:'search',goal:3,reward:350,xp:300},
{id:'PURGE',name:'Purge Nest',emoji:'🔥',description:'Eliminate 8 infected.',type:'kill',goal:8,reward:450,xp:400},
{id:'RESCUE',name:'Rescue Survivor',emoji:'🧍',description:'Reach Hospital and rescue a survivor.',type:'rescue',goal:1,reward:500,xp:500},
{id:'RADIO',name:'Radio Repair',emoji:'📻',description:'Reach Fire Station with a Toolkit.',type:'radio',goal:1,reward:550,xp:550},
{id:'FUELRUN',name:'Fuel Run',emoji:'⛽',description:'Find and deliver 2 Fuel Cans.',type:'fuel',goal:2,reward:500,xp:450}
];function random(){return{...MISSIONS[Math.floor(Math.random()*MISSIONS.length)],progress:0}}module.exports={MISSIONS,random};