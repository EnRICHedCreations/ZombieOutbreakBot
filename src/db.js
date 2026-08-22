const fs=require('fs'),path=require('path');const DB_PATH=path.join(__dirname,'../data.json');
const DU=id=>({userId:id,xp:0,level:1,wins:0,runs:0,escapes:0,kills:0,damage:0,deaths:0,revives:0,missions:0,hordes:0,bosses:0,survivorsRescued:0,lootExtracted:0});
const DP=()=>({hp:100,maxHp:100,armor:25,maxArmor:100,infection:0,hunger:100,water:100,state:'ALIVE',role:'soldier',location:'APARTMENTS',backpack:[],backpackSize:8,pendingLoot:null,weapon:{id:'PISTOL',rarity:'COMMON',mult:1,emoji:'⬜'},ammo:{LIGHT:36,RIFLE:0,SHELL:0},noise:0,downTicks:3,mission:null,barricade:0,kills:0,damage:0});
function cl(v){return Array.isArray(v)?[...v]:(v&&typeof v==='object'?JSON.parse(JSON.stringify(v)):v)}function hyd(t,d){for(const[k,v]of Object.entries(d))if(t[k]===undefined)t[k]=cl(v);return t}
class DB{constructor(){this.data={version:1,users:{},runs:{},squads:{},userSquad:{},history:[]};this.load()}
load(){if(!fs.existsSync(DB_PATH))return this.save();try{this.data={...this.data,...JSON.parse(fs.readFileSync(DB_PATH,'utf8')),version:1}}catch(e){console.error('DB load failed',e.message)}}
save(){fs.writeFileSync(DB_PATH,JSON.stringify(this.data,null,2))}
getUser(id){if(!this.data.users[id])this.data.users[id]=DU(id);return hyd(this.data.users[id],DU(id))}
levelXp(l){return Math.floor(450*Math.pow(l,1.3))}
addStats(id,d={}){const u=this.getUser(id);for(const[k,v]of Object.entries(d)){if(k==='xp'){u.xp+=(+v||0);while(u.xp>=this.levelXp(u.level+1))u.level++}else u[k]=(u[k]||0)+(+v||0)}this.save();return u}
createRun(g,h,d='OUTBREAK'){const id=`run_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,r={id,guildId:g,hostId:h,state:'LOBBY',difficulty:d,players:[h],day:1,time:8,actionClock:0,turn:0,noise:0,horde:null,hordeActive:false,enemy:null,locationLoot:{},safehouse:{location:'FIRE',barricades:50,generator:50,food:5,water:5,ammo:50,meds:2},extraction:null,weather:'Clear',feed:[],createdAt:Date.now(),results:null};this.data.runs[id]=r;this.save();return r}
getRun(id){return this.data.runs[id]||null}saveRun(r){this.data.runs[r.id]=r;this.save();return r}getLobby(g){return Object.values(this.data.runs).find(r=>r.guildId===g&&r.state==='LOBBY')||null}
activeRunForUser(u){const sid=this.data.userSquad[u],s=sid&&this.data.squads[sid],r=s&&this.getRun(s.runId);return r&&['LOBBY','ACTIVE'].includes(r.state)?r:null}
createSquad(runId,leader){const id=`sq_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,s={id,runId,leader,players:[leader],ready:{[leader]:false},states:{[leader]:DP()}};this.data.squads[id]=s;this.data.userSquad[leader]=id;this.save();return s}
getSquadByUser(u){const id=this.data.userSquad[u];return id?this.data.squads[id]:null}getSquads(r){return Object.values(this.data.squads).filter(s=>s.runId===r)}
addPlayer(sid,u){const s=this.data.squads[sid];if(!s||s.players.length>=4)return false;if(!s.players.includes(u))s.players.push(u);s.ready[u]=false;s.states[u]=DP();this.data.userSquad[u]=sid;this.save();return true}
getPlayer(r,u){const s=this.getSquadByUser(u);if(!s||s.runId!==r)return null;s.states[u]=hyd(s.states[u]||{},DP());return s.states[u]}
setPlayer(r,u,p){const s=this.getSquadByUser(u);if(!s||s.runId!==r)return null;s.states[u]=hyd(p,DP());this.save();return p}
setReady(u,v){const s=this.getSquadByUser(u);if(!s)return null;s.ready[u]=!!v;this.save();return s}allReady(s){return s.players.every(id=>s.ready[id])}
completeRun(r,won=false){r.state=won?'ESCAPED':'DEAD';r.completedAt=Date.now();this.data.history.unshift({runId:r.id,guildId:r.guildId,state:r.state,players:[...r.players],day:r.day,turn:r.turn,results:r.results});for(const u of r.players)delete this.data.userSquad[u];for(const s of this.getSquads(r.id))delete this.data.squads[s.id];this.save()}
lastRun(u){return this.data.history.find(h=>h.players.includes(u))||null}}
module.exports=new DB();