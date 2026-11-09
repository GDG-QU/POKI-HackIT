// Vite loads this stylesheet at runtime; suppress the TypeScript side-effect import check
// when the project's CSS module declaration is unavailable.
// @ts-ignore
import './style.css'

const mons = [
  {id:25,name:'Pikachu',type:'Electric',color:'#e9bb36',tag:'⚡',stat:'QUICK STRIKE'},
  {id:6,name:'Charizard',type:'Fire / Flying',color:'#ee7950',tag:'🔥',stat:'HEAVY HITTER'},
  {id:9,name:'Blastoise',type:'Water',color:'#619de3',tag:'💧',stat:'SOLID DEFENSE'},
  {id:3,name:'Venusaur',type:'Grass / Poison',color:'#67ae75',tag:'🌿',stat:'FIELD CONTROL'},
  {id:94,name:'Gengar',type:'Ghost / Poison',color:'#a68bd7',tag:'👻',stat:'WILD CARD'},
  {id:149,name:'Dragonite',type:'Dragon / Flying',color:'#ec9c55',tag:'🐉',stat:'ALL-ROUNDER'},
]
const art = (id:number) => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = `
<nav class="nav wrap"><a class="brand" href="#top"><img class="brand-mark" src="/poki-hackit-mark.svg" alt=""/><span>Poki-<span>HackIT</span></span></a><div class="nav-links"><a href="#mission">The mission</a><a href="#roster">Build a team</a><a href="#how">How it works</a><a href="#partners">Partners</a></div><a class="nav-cta" href="#roster">Enter the arena <b>↗</b></a><button class="menu-toggle" aria-label="Toggle menu"><i></i><i></i></button></nav>
<main id="top">
<section class="hero wrap"><div class="hero-copy"><div class="eyebrow"><i></i> THE STUDENT AI BATTLE EVENT <span></span> EST. 2025</div><h1>Build a brain.<br>Win the <em>arena.</em></h1><p class="lede">Three Pokémon. One Python file. Your strategy decides everything.</p><div class="hero-actions"><a class="button lime" href="#mission">Explore the event <b>↗</b></a><a class="text-link" href="#how">How the battle works <b>↓</b></a></div><div class="hero-foot"><span class="avatar">⚡</span><span class="avatar">🔥</span><span class="avatar">🌿</span><small>FOR THE NEXT GENERATION<br><b>OF STRATEGISTS</b></small><i></i><small class="mono">01 / 03<br>THINK. CODE. BATTLE.</small></div></div>
<div class="hero-art"><div class="sun"></div><div class="orbit one"></div><div class="orbit two"></div><div class="platform back"></div><div class="platform mid"></div><div class="platform front"></div><div class="hero-label label-top">SIMULATION<br>NO. 001 <b>✳</b></div><div class="hero-mon pika"><img src="${art(25)}" alt="Pikachu"><span>PIKACHU <i>LV. 42</i></span></div><div class="hero-mon venu"><img src="${art(3)}" alt="Venusaur"><span>VENUSAUR <i>LV. 36</i></span></div><div class="hero-mon gengar"><img src="${art(94)}" alt="Gengar"><span>GENGAR <i>LV. 40</i></span></div><div class="hero-mon char"><img src="${art(6)}" alt="Charizard"><span>CHARIZARD <i>LV. 48</i></span></div><div class="hero-mon dragon"><img src="${art(149)}" alt="Dragonite"><span>DRAGONITE <i>LV. 45</i></span></div><div class="hero-mon blastoise"><img src="${art(9)}" alt="Blastoise"><span>BLASTOISE <i>LV. 44</i></span></div><div class="versus">VS</div><div class="hero-label label-bottom">▂▅▇ ARENA PREVIEW <b>COMING SOON</b></div><span class="spark sa">✦</span><span class="spark sb">✳</span><div class="coordinates">ARENA CONCEPT<br>CONNECTED LATER</div></div></section>
<div class="ticker"><div>YOUR CODE CALLS THE SHOTS　✳　THREE POKÉMON. ONE BRAIN.　✳　THINK FAST. BATTLE SMART.　✳　YOUR CODE CALLS THE SHOTS　✳　THREE POKÉMON. ONE BRAIN.　✳　THINK FAST. BATTLE SMART.　✳</div></div>
<section class="mission wrap" id="mission"><div class="index"><b>01</b><i></i> THE MISSION</div><div class="mission-title"><h2>It’s not about<br>who hits <em>harder.</em></h2><div><p>It’s about who thinks one move ahead. Build a Python brain that reads the battle, weighs the odds, and tells your team exactly when to attack or defend.</p><a class="arrow-link" href="#how">Get the idea <b>↗</b></a></div></div><div class="mission-cards">
<article><div class="card-top">01 / YOUR CODE <b>⌘</b></div><div class="code-window"><div class="window-top"><i></i><i></i><i></i><span>brain.py</span></div><pre><b>def</b> <strong>choose_action</strong>(battle):
  <b>if</b> battle.hp &lt; <i>30</i>:
    <b>return</b> <em>"defend"</em>
  <b>return</b> <em>"attack"</em></pre></div><h3>Write the brain.</h3><p>Your Python file makes every call. No button mashing, just smart decisions.</p></article>
<article><div class="card-top">02 / YOUR SQUAD <b>✳</b></div><div class="mini-squad"><span>⚡</span><span>🔥</span><span>💧</span><i></i></div><h3>Pick three Pokémon.</h3><p>Build a balanced team. Every matchup is a new problem your brain must solve.</p></article>
<article><div class="card-top">03 / THE BATTLE <b>↗</b></div><div class="battle-preview"><div class="hp-label">YOUR TEAM <i>82%</i></div><div class="hp"><i></i></div><div class="hp-label">RIVAL <i>64%</i></div><div class="hp red"><i></i></div><div class="battle-mons">⚡ <small>VS</small> 👻</div><div class="battle-log">● Your brain chose <b>THUNDERBOLT</b></div></div><h3>Let it play out.</h3><p>Watch your strategy come to life in a live, turn-based arena.</p></article></div></section>
<section class="roster" id="roster"><div class="wrap"><div class="index"><b>02</b><i></i> THE POKÉMON ROSTER</div><div class="roster-head"><div><h2>Build your<br><em>squad.</em></h2><p>Choose three when the arena opens.<br>Here are a few Pokémon to plan around.</p></div><div class="team-counter"><span>TEAM PREVIEW</span><strong id="team-count">0<small>/3</small></strong><div class="dots"><i></i><i></i><i></i></div><div id="team-hint" aria-live="polite">SELECT UP TO THREE POKÉMON</div></div></div><div class="pokemon-grid" id="pokemon-grid"></div><div class="roster-foot"><span>A GOOD STRATEGIST PLANS FOR EVERY TYPE.</span><span>ROSTER PREVIEW · ARENA TO COME</span></div></div></section>
<section class="brain wrap" id="how"><div class="index"><b>03</b><i></i> THE BRAIN BEHIND THE BATTLE</div><div class="brain-grid"><div><h2>One file.<br><em>Every move.</em></h2><p>Your team doesn’t make decisions. Your code does. Write simple Python logic to read the battle state and choose the smartest move each turn.</p><div class="brain-points"><div><b>01</b><p><strong>Read the field.</strong><br>Check HP, types, and status effects.</p></div><div><b>02</b><p><strong>Make the call.</strong><br>Attack, defend, or switch Pokémon.</p></div><div><b>03</b><p><strong>Adapt and win.</strong><br>Outthink your opponent, one turn at a time.</p></div></div><a class="button dark" href="#roster">Build your strategy <b>↗</b></a></div><div class="terminal-wrap"><div class="terminal"><div class="terminal-head"><span>🔴 🟡 🟢</span> YOUR BRAIN.PY <i>● READY</i></div><div class="terminal-body"><div>01<br>02<br>03<br>04<br>05<br>06<br>07<br>08<br>09<br>10</div><pre><label># Your strategy starts here</label>
<b>def</b> <strong>choose_action</strong>(battle):
  opponent = battle.<i>opponent</i>
  my_pokemon = battle.<i>active</i>

  <b>if</b> my_pokemon.hp &lt; <u>30</u>:
    <b>return</b> <em>"defend"</em>
  <b>if</b> opponent.type == <em>"water"</em>:
    <b>return</b> <em>"thunderbolt"</em>
  <b>return</b> <em>"attack"</em></pre></div><div class="terminal-foot">PYTHON 3.11 <span>LINES 10 · LOGIC 100%</span></div></div><div class="terminal-note"><b>THE RULES ARE YOURS. ↗</b><p>Simple rules or serious strategy. The best brain is the one you build.</p></div></div></div></section>
<section class="steps"><div class="wrap"><div class="index"><b>04</b><i></i> FROM FIRST LINE TO FINAL ROUND</div><h2>Three steps.<br><em>One champion.</em></h2><div class="steps-grid"><article><b>01</b><i>⌘</i><h3>Code your brain</h3><p>Build a Python file that thinks on its feet.</p><span>↗</span></article><article><b>02</b><i>✳</i><h3>Pick your squad</h3><p>Choose three Pokémon to carry your strategy.</p><span>↗</span></article><article><b>03</b><i>⚡</i><h3>Enter the arena</h3><p>Battle other teams. Learn. Adapt. Win.</p><span>↗</span></article></div></div></section>
<section class="partners wrap" id="partners"><div class="index"><b>05</b><i></i> EVENT NETWORK</div><div class="partners-heading"><div><h2>Backed by<br><em>our partners.</em></h2><p>The organizations and sponsors helping bring the Poki-HackIT event to life.</p></div><span class="partners-count">PARTNERS &amp; SPONSORS<br><b>EVENT SUPPORT</b></span></div><div class="showcase-group"><div class="showcase-label"><span>01</span><h3>Cash Sponsors</h3><i></i></div><div class="showcase-logos"><div class="logo-slot"><span>SPONSOR LOGO</span><small>Sponsor name</small></div><div class="logo-slot"><span>SPONSOR LOGO</span><small>Sponsor name</small></div><div class="logo-slot"><span>SPONSOR LOGO</span><small>Sponsor name</small></div></div></div><div class="showcase-group"><div class="showcase-label"><span>02</span><h3>Technology Sponsors</h3><i></i></div><div class="showcase-logos"><div class="logo-slot xyz-slot"><img src="/xyz-logo-white.png" alt="XYZ logo"/><small>Official Domain Partner</small></div><div class="logo-slot"><span>SPONSOR LOGO</span><small>Sponsor name</small></div><div class="logo-slot"><span>SPONSOR LOGO</span><small>Sponsor name</small></div></div><div class="showcase-label sponsor-sub-label"><span>↳</span><h3>Hackathon &amp; Ecosystem Partners</h3><i></i></div><div class="showcase-logos sponsor-art-logos"><div class="logo-slot sponsor-art-slot"><img src="/dorahacks.png" alt="DoraHacks"/><small>Official Hackathon Platform Partner</small></div><div class="logo-slot sponsor-art-slot"><img src="/hack2skill.png" alt="Hack2Skill"/><small>Official Community &amp; Rewards Partner</small></div><div class="logo-slot sponsor-art-slot"><img src="/unstop.png" alt="Unstop"/><small>Official Event &amp; Rewards Partner</small></div></div></div><div class="showcase-group"><div class="showcase-label"><span>03</span><h3>Community Partners</h3><i></i></div><div class="showcase-logos"><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div></div></div><div class="showcase-group"><div class="showcase-label"><span>04</span><h3>Media Partners</h3><i></i></div><div class="showcase-logos"><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div><div class="logo-slot"><span>PARTNER LOGO</span><small>Partner name</small></div></div></div></section><section class="final-cta wrap"><div class="cta-orb"></div><label>● BATTLE ARENA COMING SOON</label><h2>Got a brain<br>for <em>battle?</em></h2><p>Start thinking about your team and strategy.</p><a class="button lime" href="#mission">Explore the event <b>↗</b></a><div class="stamp">THINK<br>CODE<br><b>WIN</b></div></section>
</main><footer class="footer wrap"><a class="brand" href="#top"><img class="brand-mark" src="/poki-hackit-mark.svg" alt=""/><span>Poki-<span>HackIT</span></span></a><p>POKÉMON AI STRATEGY EVENT <i>✳</i> BUILT FOR CURIOUS MINDS</p><a href="#top">BACK TO TOP ↑</a><small>© 2026 POKI-HACKIT · TRAIN YOUR THINKING</small></footer>`

const grid = document.querySelector<HTMLDivElement>('#pokemon-grid')!
grid.innerHTML=mons.map(m=>`<article class="pokemon-card" role="checkbox" aria-checked="false" tabindex="0" style="--mon-color:${m.color}"><span class="mon-id">#${String(m.id).padStart(3,'0')}</span><span class="mon-type">${m.tag} ${m.type}</span><span class="mon-image"><i></i><img src="${art(m.id)}" alt="${m.name}" loading="lazy"></span><strong>${m.name}</strong><small>${m.stat}</small><span class="pick" aria-hidden="true">+</span></article>`).join('')
document.querySelector('.menu-toggle')!.addEventListener('click',()=>document.querySelector('.nav-links')!.classList.toggle('open'))
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav-links')!.classList.remove('open')))
const teamCount=document.querySelector<HTMLElement>("#team-count")!
const teamHint=document.querySelector<HTMLElement>("#team-hint")!
const rosterStatus=document.querySelector<HTMLElement>(".roster-foot span:last-child")!
const dots=[...document.querySelectorAll<HTMLElement>(".dots i")]
function togglePokemon(card:HTMLElement){
  const selected=card.getAttribute("aria-checked")==="true"
  if(!selected&&grid.querySelectorAll(".pokemon-card.selected").length>=3){
    card.classList.remove("shake");void card.offsetWidth;card.classList.add("shake")
    teamHint.textContent="YOUR PREVIEW IS FULL — REMOVE ONE FIRST"
    return
  }
  card.setAttribute("aria-checked",String(!selected));card.classList.toggle("selected",!selected)
  const pick=card.querySelector<HTMLElement>(".pick")!;pick.textContent=selected?"+":"✓"
  const count=grid.querySelectorAll(".pokemon-card.selected").length
  teamCount.innerHTML=`${count}<small>/3</small>`
  dots.forEach((dot,index)=>dot.classList.toggle("filled",index<count))
  teamHint.textContent=count===3?"YOUR THREE-POKÉMON PREVIEW IS READY":count?`${3-count} MORE TO COMPLETE YOUR PREVIEW`:"SELECT UP TO THREE POKÉMON"
  rosterStatus.textContent=`TEAM PREVIEW · ${count}/3 SELECTED`
}
grid.querySelectorAll<HTMLElement>(".pokemon-card").forEach(card=>{
  card.addEventListener("click",()=>togglePokemon(card))
  card.addEventListener("keydown",event=>{if((event as KeyboardEvent).key==="Enter"||(event as KeyboardEvent).key===" "){event.preventDefault();togglePokemon(card)}})
})
const revealTargets=document.querySelectorAll<HTMLElement>(".mission-title,.mission-cards article,.pokemon-card,.brain-grid,.steps-grid article,.partners-heading,.showcase-group,.final-cta")
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}}),{threshold:.12})
revealTargets.forEach((element,index)=>{element.classList.add("reveal");element.style.setProperty("--reveal-delay",`${Math.min(index%3,2)*90}ms`);revealObserver.observe(element)})
const sectionLinks=[...document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']")]
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){sectionLinks.forEach(link=>link.classList.toggle("active",link.hash===`#${entry.target.id}`))}}),{rootMargin:"-25% 0px -65% 0px"})
document.querySelectorAll<HTMLElement>("main section[id]").forEach(section=>sectionObserver.observe(section))
let progressQueued=false
window.addEventListener("scroll",()=>{if(progressQueued)return;progressQueued=true;requestAnimationFrame(()=>{const range=document.documentElement.scrollHeight-innerHeight;document.documentElement.style.setProperty("--scroll-progress",`${range>0?scrollY/range*100:0}%`);progressQueued=false})},{passive:true})
const arena=document.querySelector<HTMLElement>('.hero-art')!
if(matchMedia('(pointer:fine)').matches){arena.addEventListener('pointermove',e=>{const r=arena.getBoundingClientRect(),p=e as PointerEvent;arena.style.setProperty('--rx',`${-(p.clientY-r.top)/r.height*6+3}deg`);arena.style.setProperty('--ry',`${(p.clientX-r.left)/r.width*8-4}deg`)});arena.addEventListener('pointerleave',()=>{arena.style.setProperty('--rx','0deg');arena.style.setProperty('--ry','0deg')})}


