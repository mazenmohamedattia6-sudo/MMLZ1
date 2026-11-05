const pages=[
"ملك... البحر جابلك رسالة مني.",
"إنتي مصدر الأمان ليا، ومصدر الطمأنينة اللي برتاح فيه. وأنا بحبك وبحب كل حاجة فيكي.",
"إنتي شبه النجم الساطع... أي مكان تدخليه بتغطي عليه، ومحدش يقدر ياخد مكانك في الحلاوة والجمال.",
"مافيش زيك في جمالك وحلاوتك، ولا في ضحكتك، ولا شكلك، ولا تفاصيلك، ولا أي حاجة فيكي.",
"شكلك حلو أوي أوي أوي... وبحب أشوفك عشان أقول: أوف بسم الله ما شاء الله، إيه الحلاوة دي يا رب! يا بختي بيكي في حياتي.",
"وبحب أسمعك أوي، وأنا بسمعك دلوقتي على الواتس. وبشوفك في كل حتة، وبتخيلك في كل مكان، وبتخيل مواقف بينا يا ملوكتي.",
"إنتي رجّعتيلي الشغف في حياتي تاني بعد ما كان مات تقريبًا... وإنتي أحلى من البرشلونة.",
"وأعملك الأكل اللي بتحبيه، وأعملك الهوت شوكليت، ونقف في البلكونة نتكلم ونضحك ونفتكر خناقتنا.",
"بحب تفاصيلك يا بنت المجنونة... يا أم ليلي وليلي ويزن، ولادنا إن شاء الله.",
"دايمًا بقول الحمد لله إنك معايا، وإني اخترت صح في كل حاجة.",
"وأجهزلك السرير والأطباق، وأدلعك، وأجيبلك كل حاجة حلوة، وبنسى نفسي وأنا معاكي يا كتكوتي.",
"إنتي الحياة، والروح، والأمل، والشمس، والقمر، وكل حاجة.",
"بحب حضنك... عشان أول ما ببقى فيه بحس إن كل حاجة وحشة بتختفي من جوايا.",
"حتى لو الدنيا مهدداني وتعبان ومش قادر أكمل، حضنك لوحده كفاية يرجعني لنفسي تاني.",
"وبحب صوتك... اللي بيهديني، اللي أول ما بسمعه بحس إن الدنيا أهدى.",
"وبحب ضحكتك... اللي كفيلة تصلّح يوم كامل، حتى لو كنت شايل هموم الدنيا كلها.",
"وكنتي فين من زمان؟ قبل ما أشوفك وأعرفك، إزاي كنت بكمّل أيامي من غير ما يكون ليكي مكان فيها؟",
"أول ما دخلتي حياتي حسيت إن في حاجة اتغيرت، وكأن قلبي كان مستنيكي من زمان من غير ما يعرف.",
"إنتي أجمل صدفة حصلتلي، وأجمل قرار خدته إني أحبك، وأجمل شعور عرفته إني أبقى جزء من يومك.",
"وعيونك شبه الخمرة... وإنتي أحلى من القمر، وأحلى من البحر، وأحلى من كل حاجة.",
"إنتي الرومانسية يا ملك... معاكي كل حاجة فيها جنوننا وضحكنا.",
"والله هعوّضك عن كل حاجة. وبحبك أكتر من أي حاجة في حياتي يا قطتي، يا أم ليلي ❤"
];
const $=s=>document.querySelector(s);
const bottle=$('#bottle'),msg=$('#msg'),nextBtn=$('#nextBtn'),again=$('#again'),wrap=$('#paperWrap');
let idx=0,opened=false,typing=false;
const wait=ms=>new Promise(r=>setTimeout(r,ms));
$('#start').onclick=async()=>{
  $('#intro').classList.add('gone');
  const a=$('#song');a.volume=0;a.play().catch(()=>{});
  let v=0;const fi=setInterval(()=>{v=Math.min(v+.02,.7);a.volume=v;if(v>=.7)clearInterval(fi)},150);
  await wait(900);
  bottle.classList.add('arrive');
  await wait(11500);
  bottle.classList.add('ready');$('#hint').classList.add('show');
};
bottle.onclick=async()=>{
  if(!bottle.classList.contains('ready')||opened)return;
  opened=true;$('#hint').classList.remove('show');
  bottle.classList.remove('ready');bottle.classList.add('open');
  await wait(1400);
  bottle.classList.add('gone');
  wrap.classList.add('show');
  await wait(1500);
  show(0);
};
async function show(i){
  typing=true;nextBtn.classList.remove('on');again.classList.remove('on');
  const t=pages[i];msg.textContent='';msg.style.opacity=1;msg.classList.add('cur');
  for(let k=1;k<=t.length;k++){
    msg.textContent=t.slice(0,k);
    const ch=t[k-1];
    await wait(ch==='.'||ch==='،'?260:ch===' '?55:42);
  }
  msg.classList.remove('cur');typing=false;
  if(i<pages.length-1)nextBtn.classList.add('on');else again.classList.add('on');
}
nextBtn.onclick=async()=>{
  if(typing)return;
  nextBtn.classList.remove('on');msg.style.opacity=0;await wait(600);
  idx++;show(idx);
};
again.onclick=async()=>{again.classList.remove('on');msg.style.opacity=0;await wait(600);idx=0;show(0)};
$('#mute').onclick=()=>{const a=$('#song');a.muted=!a.muted;$('#mute').textContent=a.muted?'🔇':'🔊'};
const cv=$('#sky'),x=cv.getContext('2d');let W,H,S=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;S=Array.from({length:Math.min(200,W/5)},()=>({x:Math.random()*W,y:Math.random()*H*.55,r:Math.random()*1.4+.3,p:Math.random()*6,s:Math.random()*.02+.006}))}
rs();addEventListener('resize',rs);
(function f(){
  x.clearRect(0,0,W,H);
  for(const s of S){s.p+=s.s;x.globalAlpha=.3+.7*Math.abs(Math.sin(s.p));x.fillStyle='#eef1fa';x.beginPath();x.arc(s.x,s.y,s.r,0,7);x.fill()}
  x.globalAlpha=1;requestAnimationFrame(f);
})();
