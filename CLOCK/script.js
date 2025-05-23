const timeEl=document.getElementById('time')
const dateEl=document.getElementById('date')
function update(){
  const n=new Date()
  const h=String(n.getHours()).padStart(2,'0')
  const m=String(n.getMinutes()).padStart(2,'0')
  const s=String(n.getSeconds()).padStart(2,'0')
  timeEl.textContent=`${h}:${m}:${s}`
  const opts={weekday:'long',year:'numeric',month:'long',day:'numeric'}
  dateEl.textContent=n.toLocaleDateString(undefined,opts)
}
setInterval(update,1000)
update()