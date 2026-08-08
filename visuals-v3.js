(()=>{
const MAP={
'Knee-to-wall Mobilization':['lunge','Knie nach vorn · Ferse unten'],
'Weighted Ankle Rock':['lunge','Knie aktiv nach vorn'],
'Deep Squat Hold':['squat','Tief sitzen · Brust aufrecht'],
'Half-Kneeling Hip Flexor Stretch':['kneel','Becken nach vorn · Rücken neutral'],
'Active Hip Flexion Lift':['kneeup','Knie aktiv zur Brust'],
'Reverse Lunge Reach':['lungeReach','Ausfallschritt + Arm nach oben'],
'90/90 Hip Switch':['9090','Beide Knie kontrolliert wechseln'],
'90/90 Forward Fold':['9090Fold','Mit langem Rücken nach vorn'],
'Cossack Squat':['cossack','Seitlich tief setzen'],
'Hamstring Hinge Stretch':['hinge','Aus der Hüfte nach vorn'],
'Active Straight-Leg Raise':['legraise','Gestrecktes Bein aktiv heben'],
'Slow RDL Reach':['rdl','Hüfte zurück · Rücken lang'],
'Open Book Rotation':['openbook','Brustkorb aufdrehen'],
'Quadruped T-Spine Rotation':['quadrot','Arm unter/über dem Körper rotieren'],
'Overhead Squat Reach':['ohs','Tief sitzen · Arme über Kopf'],
'Lat / Shoulder Flexion Stretch':['latwall','Hüfte zurück · Hände an Wand'],
'Wall Slide':['wallslide','Unterarme an Wand nach oben'],
'Overhead Reach Hold':['overhead','Rippen unten · Arme lang'],
'Sleeper / Rotation Stretch':['sleeper','Schulter sanft nach innen rotieren'],
'Controlled Shoulder Rotation':['shoulderrot','Kontrollierte Schulterrotation'],
'Front Rack Mobility Hold':['frontrack','Ellbogen hoch · Handgelenk locker'],
'Wrist Extension Stretch':['wrist','Finger zurück · Handfläche unten'],
'Wrist Rock':['quadwrist','Gewicht langsam vor/zurück'],
'Quadruped Wrist Load':['quadwrist','Schultern kontrolliert über Hände']};
const P={
stand:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,36],[88,48]],
lunge:[[63,20],[63,34],[65,51],[47,68],[34,91],[65,51],[89,66],[108,91],[64,39],[86,48]],
kneel:[[62,22],[62,35],[64,52],[45,70],[36,91],[64,52],[89,67],[108,91],[63,40],[85,48]],
kneeup:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[90,55],[98,39],[70,36],[88,48]],
lungeReach:[[63,18],[63,31],[65,50],[45,69],[32,91],[65,50],[89,67],[108,91],[64,35],[84,17]],
squat:[[70,23],[70,36],[70,54],[51,69],[40,91],[70,54],[89,69],[100,91],[70,41],[47,58]],
'9090':[[70,22],[70,35],[70,53],[48,68],[30,86],[70,53],[89,69],[112,84],[70,40],[48,51]],
'9090Fold':[[58,31],[63,41],[76,54],[50,68],[30,86],[76,54],[94,70],[115,85],[64,44],[44,58]],
cossack:[[58,24],[58,37],[58,54],[39,69],[30,91],[58,54],[91,59],[119,59],[58,42],[36,57]],
hinge:[[55,31],[63,42],[78,54],[61,70],[58,91],[78,54],[93,70],[98,91],[64,45],[96,54]],
legraise:[[45,68],[58,68],[74,68],[91,74],[114,87],[74,68],[92,48],[96,26],[58,67],[42,61]],
rdl:[[55,30],[63,41],[78,53],[65,70],[62,91],[78,53],[101,52],[122,43],[64,44],[99,54]],
openbook:[[47,69],[60,69],[76,69],[92,75],[114,86],[76,69],[92,69],[113,69],[61,68],[58,35]],
quadrot:[[55,35],[63,45],[75,57],[59,72],[48,91],[75,57],[91,72],[99,91],[64,48],[71,25]],
ohs:[[70,22],[70,35],[70,53],[51,69],[40,91],[70,53],[89,69],[100,91],[70,40],[91,18]],
latwall:[[58,35],[65,45],[78,54],[62,70],[58,91],[78,54],[94,70],[99,91],[65,46],[112,38]],
wallslide:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,36],[52,18]],
overhead:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,35],[92,16]],
sleeper:[[46,70],[59,70],[76,70],[92,76],[114,86],[76,70],[92,70],[113,70],[61,69],[81,52]],
shoulderrot:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,36],[96,40]],
frontrack:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,36],[94,31]],
wrist:[[70,18],[70,31],[70,50],[58,68],[55,91],[70,50],[82,68],[85,91],[70,36],[111,61]],
quadwrist:[[55,35],[63,45],[75,57],[59,72],[48,91],[75,57],[91,72],[99,91],[64,48],[104,63]]};
function human(p,dx){const [h,s,hip,k1,a1,k2,a2,el,w]=p;const X=q=>q+dx;return `<g><circle cx="${X(h[0])}" cy="${h[1]}" r="6" fill="#d59b73"/><path d="M${X(s[0]-6)} ${s[1]} Q${X(s[0])} ${s[1]-3} ${X(s[0]+6)} ${s[1]} L${X(hip[0]+6)} ${hip[1]} L${X(hip[0]-6)} ${hip[1]} Z" fill="#657164"/><line x1="${X(hip[0])}" y1="${hip[1]}" x2="${X(k1[0])}" y2="${k1[1]}" stroke="#232932" stroke-width="9" stroke-linecap="round"/><line x1="${X(k1[0])}" y1="${k1[1]}" x2="${X(a1[0])}" y2="${a1[1]}" stroke="#d59b73" stroke-width="6" stroke-linecap="round"/><line x1="${X(hip[0])}" y1="${hip[1]}" x2="${X(k2[0])}" y2="${k2[1]}" stroke="#232932" stroke-width="9" stroke-linecap="round"/><line x1="${X(k2[0])}" y1="${k2[1]}" x2="${X(a2[0])}" y2="${a2[1]}" stroke="#d59b73" stroke-width="6" stroke-linecap="round"/><line x1="${X(s[0])}" y1="${s[1]+2}" x2="${X(el[0])}" y2="${el[1]}" stroke="#d59b73" stroke-width="6" stroke-linecap="round"/><line x1="${X(el[0])}" y1="${el[1]}" x2="${X(w[0])}" y2="${w[1]}" stroke="#d59b73" stroke-width="5" stroke-linecap="round"/><ellipse cx="${X(a1[0])}" cy="${a1[1]+2}" rx="7" ry="2.5" fill="#111820"/><ellipse cx="${X(a2[0])}" cy="${a2[1]+2}" rx="7" ry="2.5" fill="#111820"/></g>`}
function graphic(name,big=false){let m=MAP[name]||['stand','Bewegung kontrolliert ausführen'],key=m[0],pose=P[key]||P.stand;let start=P.stand,end=pose;if(['squat','9090','9090Fold','openbook','quadrot','sleeper','quadwrist','legraise'].includes(key))start=pose;if(key==='wallslide')start=P.stand;if(key==='shoulderrot'||key==='frontrack'||key==='wrist')start=P.stand;let env='<line x1="8" y1="98" x2="232" y2="98" stroke="#cfd4d8" stroke-width="2"/>';if(['latwall','wallslide'].includes(key))env+='<line x1="224" y1="10" x2="224" y2="98" stroke="#aab0b6" stroke-width="4"/>';return `<svg viewBox="0 0 240 116" xmlns="http://www.w3.org/2000/svg"><rect width="240" height="116" fill="#f7f7f4"/>${env}<text x="18" y="14" font-size="8" font-weight="700" fill="#6b7280">START</text><text x="132" y="14" font-size="8" font-weight="700" fill="#6b7280">END</text>${human(start,-10)}${human(end,105)}<path d="M109 56 H129 M123 50 L129 56 L123 62" fill="none" stroke="#2f8f46" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><text x="120" y="109" text-anchor="middle" font-size="8" fill="#4b5563">${m[1]}</text></svg>`}
function nameFromExercise(ex){const t=ex.querySelector('.exerciseTitle')?.textContent||ex.querySelector('.title')?.textContent||'';for(const n of Object.keys(MAP))if(t.includes(n))return n;return null}
function apply(){document.querySelectorAll('.exercise').forEach(ex=>{const n=nameFromExercise(ex);if(!n)return;let v=ex.querySelector('.exerciseVisual,.visual');if(v&&!v.dataset.v3){v.innerHTML=graphic(n);v.dataset.v3='1';v.style.background='#f7f7f4';v.style.height='150px'}});const cur=document.getElementById('timerExercise')||document.getElementById('cur');const tv=document.getElementById('timerVisual')||document.getElementById('curVisual');if(cur&&tv){const txt=cur.textContent||'';const n=Object.keys(MAP).find(x=>txt.includes(x));if(n&&tv.dataset.name!==n){tv.innerHTML=graphic(n,true);tv.dataset.name=n;tv.style.background='#f7f7f4';tv.style.height='220px'}}}
new MutationObserver(apply).observe(document.body,{subtree:true,childList:true,characterData:true});setInterval(apply,400);apply();
})();