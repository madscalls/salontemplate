// Generated from the Halden Hair Studio design mockup (Book.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#0F0E0D}\na{color:#F2EDE4}a:hover{color:#C6A15B}\n.wrap{max-width:1280px;margin:0 auto;padding:0 48px;box-sizing:border-box}\n.bw{filter:grayscale(1) contrast(1.06) brightness(.92)}\n.reveal{transition:filter .6s ease}.reveal:hover{filter:none}\n.serif{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;letter-spacing:-0.01em}\n.eyebrow{margin:0;font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#C6A15B}\n.navlinks a{color:#F2EDE4;text-decoration:none;font-size:13px;letter-spacing:.16em;text-transform:uppercase}\n.navlinks a:hover{color:#C6A15B}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;border:0;cursor:pointer;font-family:Jost,sans-serif}\n.btn-dark{background:#C6A15B;color:#0F0E0D}.btn-dark:hover{background:#E0C285}\n.layout{display:grid;grid-template-columns:1fr 380px;gap:64px;align-items:start}\n.step{display:flex;flex-direction:column;gap:20px;padding:40px 0;border-top:1px solid #4A443B}\n.step h2{margin:0;display:flex;gap:18px;align-items:baseline}\n.opts{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n.opt{display:flex;justify-content:space-between;align-items:center;gap:16px;min-height:64px;padding:14px 20px;border:1px solid #5A544C;background:#151413;color:#F2EDE4;font:300 16px Jost,sans-serif;text-align:left;cursor:pointer;transition:border-color .2s}\n.opt:hover{border-color:#C6A15B}\n.opt.on{border-color:#C6A15B;background:#C6A15B;color:#0F0E0D}\n.opt small{font-size:13px;letter-spacing:.04em;opacity:.8;white-space:nowrap}\n.days{display:flex;gap:8px;overflow-x:auto;padding-bottom:6px}\n.day{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:2px;width:72px;padding:12px 0;border:1px solid #5A544C;background:#151413;color:#F2EDE4;font:300 13px Jost,sans-serif;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}\n.day b{font-family:'Cormorant Garamond',Georgia,serif;font-size:28px;font-weight:500;letter-spacing:0}\n.day.on{background:#C6A15B;border-color:#C6A15B;color:#0F0E0D}\n.times{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}\n.time{min-height:48px;border:1px solid #5A544C;background:#151413;color:#F2EDE4;font:400 14px Jost,sans-serif;letter-spacing:.06em;cursor:pointer}\n.time.on{background:#C6A15B;border-color:#C6A15B;color:#0F0E0D}\n.time:disabled{color:#5E5850;background:transparent;border-style:dashed;cursor:not-allowed;text-decoration:line-through}\n.form2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px}\n.field{display:flex;flex-direction:column;gap:8px;font-size:12px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;color:#F2EDE4}\n.field input,.field textarea{min-height:50px;padding:12px 16px;border:1px solid #5A544C;background:#151413;font:300 16px Jost,sans-serif;letter-spacing:0;text-transform:none;color:#F2EDE4;box-sizing:border-box;border-radius:0}\n.field input:focus,.field textarea:focus{outline:2px solid #C6A15B;outline-offset:1px}\n@media (max-width:1000px){\n.layout{grid-template-columns:1fr!important}\n.summary{position:static!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.opts,.form2{grid-template-columns:1fr!important}\n.times{grid-template-columns:repeat(3,minmax(0,1fr))!important}\n.h1t{font-size:56px!important}\n.hdrbtn{padding:0 16px!important;letter-spacing:.12em!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { svc: 'cut', who: 'any', day: null, time: null, done: false, tried: false };
  }
  renderVals() {
    const s = this.state;
    const svcList = [
      { id: 'cut', name: 'Signature cut', time: '75 min', price: '$[85]' },
      { id: 'blow', name: 'Blowout', time: '45 min', price: '$[55]' },
      { id: 'bal', name: 'Balayage', time: '3 hrs', price: '$[240]' },
      { id: 'single', name: 'Single process color', time: '90 min', price: '$[120]' },
      { id: 'gloss', name: 'Gloss', time: '45 min', price: '$[65]' },
      { id: 'bond', name: 'Bond repair', time: '30 min', price: '$[45]' },
      { id: 'consult', name: 'Color or extension consultation', time: '15 min', price: 'Free' },
      { id: 'curly', name: 'Curly cut', time: '90 min', price: '$[110]' }
    ];
    const whoList = [
      { id: 'any', name: 'First available', meta: 'Any stylist' },
      { id: 'a', name: '[Stylist name]', meta: 'Owner · Color' },
      { id: 'b', name: '[Stylist name]', meta: 'Senior stylist' },
      { id: 'c', name: '[Stylist name]', meta: 'Extensions' }
    ];
    const mons = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dows = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const longDows = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const open = [];
    for (let i = 1; open.length < 12 && i < 30; i++) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + i);
      if (d.getDay() !== 0 && d.getDay() !== 1) open.push({ key: i, d });
    }
    const dayKey = s.day ?? open[0].key;
    const dayObj = open.find((o) => o.key === dayKey) || open[0];
    const slotList = ['10:00', '10:30', '11:00', '11:30', '12:30', '1:00', '2:00', '2:30', '3:30', '4:30'];
    const taken = (k, i) => ((k * 7 + i * 3) % 5 === 0) || ((k + i) % 7 === 0);
    const svc = svcList.find((x) => x.id === s.svc);
    const who = whoList.find((x) => x.id === s.who);
    const timeLabel = s.time !== null ? slotList[s.time] + (s.time >= 4 ? ' pm' : ' am') : null;
    const dayLabel = longDows[dayObj.d.getDay()] + ', ' + mons[dayObj.d.getMonth()] + ' ' + dayObj.d.getDate();
    const missing = s.tried && s.time === null;
    return {
      services: svcList.map((x) => ({ name: x.name, meta: x.time + ' · ' + x.price, on: String(s.svc === x.id), cls: 'opt' + (s.svc === x.id ? ' on' : ''), pick: () => this.setState({ svc: x.id }) })),
      stylists: whoList.map((x) => ({ name: x.name, meta: x.meta, on: String(s.who === x.id), cls: 'opt' + (s.who === x.id ? ' on' : ''), pick: () => this.setState({ who: x.id }) })),
      days: open.map((o) => ({ dow: dows[o.d.getDay()], num: String(o.d.getDate()), mon: mons[o.d.getMonth()], label: longDows[o.d.getDay()] + ' ' + mons[o.d.getMonth()] + ' ' + o.d.getDate(), on: String(o.key === dayKey), cls: 'day' + (o.key === dayKey ? ' on' : ''), pick: () => this.setState({ day: o.key, time: null }) })),
      times: slotList.map((t, i) => ({ label: t + (i >= 4 ? ' pm' : ' am'), taken: taken(dayKey, i), on: String(s.time === i), cls: 'time' + (s.time === i ? ' on' : ''), pick: () => this.setState({ time: i, tried: false }) })),
      svcName: svc.name, svcTime: svc.time, svcPrice: svc.price,
      stylistName: s.who === 'any' ? 'First available stylist' : who.name,
      whenShort: timeLabel ? dayLabel + ' · ' + timeLabel : dayLabel + ' · pick a time',
      when: dayLabel + ' at ' + (timeLabel || ''),
      missing, missingNote: 'Pick a time above to finish your request.',
      done: s.done, notDone: !s.done,
      confirm: (e) => { e.preventDefault(); if (s.time === null) { this.setState({ tried: true }); return; } this.setState({ done: true }); },
      restart: () => this.setState({ done: false, time: null, tried: false })
    };
  }
}

export default function Book() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Halden Hair Studio: book an appointment"; }, []);
  return (
    <>
      <style>{PAGE_CSS}</style>
      <div style={{fontFamily: "Jost, sans-serif", fontWeight: "300", color: "#B8B1A7", background: "#0F0E0D", overflowX: "clip"}}>

<header className="wrap" style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", paddingTop: "28px", paddingBottom: "28px"}}>
<Link to="/" style={{textDecoration: "none", color: "#F2EDE4", display: "flex", flexDirection: "column", gap: "2px"}}>
<span className="serif" style={{fontSize: "30px", fontWeight: "500", letterSpacing: ".28em", lineHeight: "1"}}>HALDEN</span>
<span style={{fontSize: "10px", fontWeight: "400", letterSpacing: ".42em", textTransform: "uppercase", color: "#C6A15B"}}>Hair Studio</span>
</Link>
<nav className="navlinks" style={{display: "flex", gap: "40px"}} aria-label="Main">
<Link to="/services">Services</Link>
<Link to="/#stylists">Stylists</Link>
<Link to="/#work">Work</Link>
<Link to="/#visit">Visit</Link>
</nav>
<Link to="/book" className="btn btn-dark hdrbtn" aria-current="page" style={{minHeight: "46px", padding: "0 24px"}}>Book</Link>
</header>

<section className="wrap" style={{paddingTop: "40px", paddingBottom: "60px"}}>
<p className="eyebrow" style={{marginBottom: "20px"}}>Online booking</p>
<h1 className="serif h1t" style={{margin: "0", fontSize: "84px", lineHeight: ".95", color: "#F2EDE4"}}>Book an <em style={{color: "#C6A15B"}}>appointment.</em></h1>
</section>

{v.done && (<><section className="wrap" style={{paddingBottom: "140px"}}>
<div style={{maxWidth: "720px", display: "flex", flexDirection: "column", gap: "22px", padding: "56px", background: "#181715"}}>
<p className="eyebrow">Request received</p>
<h2 className="serif" style={{margin: "0", fontSize: "52px", lineHeight: "1.02", color: "#F2EDE4"}}>See you {v.when}.</h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.8"}}>{v.svcName} with {v.stylistName}. We'll send a confirmation to your email shortly. Need to change something? Call us at [(000) 000-0000].</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<Link to="/" className="btn btn-dark">Back to home</Link>
<button type="button" className="btn" style={{background: "transparent", border: "1px solid #C6A15B", color: "#E9D9B4"}} onClick={v.restart}>Book another</button>
</div>
</div>
</section></>)}

{v.notDone && (<><section className="wrap layout" style={{paddingBottom: "130px"}}>
<div>
<div className="step">
<h2><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>i.</span><span style={{fontSize: "14px", fontWeight: "500", letterSpacing: ".2em", textTransform: "uppercase", color: "#F2EDE4"}}>Service</span></h2>
<div className="opts" role="radiogroup" aria-label="Service">
{v.services.map((s, $index) => (<Fragment key={$index}><button type="button" className={s.cls} role="radio" aria-checked={s.on} onClick={s.pick}><span>{s.name}</span><small>{s.meta}</small></button></Fragment>))}
</div>
<Link to="/services" style={{fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", textUnderlineOffset: "6px"}}>See the full menu</Link>
</div>

<div className="step">
<h2><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>ii.</span><span style={{fontSize: "14px", fontWeight: "500", letterSpacing: ".2em", textTransform: "uppercase", color: "#F2EDE4"}}>Stylist</span></h2>
<div className="opts" role="radiogroup" aria-label="Stylist">
{v.stylists.map((p, $index) => (<Fragment key={$index}><button type="button" className={p.cls} role="radio" aria-checked={p.on} onClick={p.pick}><span>{p.name}</span><small>{p.meta}</small></button></Fragment>))}
</div>
</div>

<div className="step">
<h2><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>iii.</span><span style={{fontSize: "14px", fontWeight: "500", letterSpacing: ".2em", textTransform: "uppercase", color: "#F2EDE4"}}>Day &amp; time</span></h2>
<div className="days" role="radiogroup" aria-label="Day">
{v.days.map((d, $index) => (<Fragment key={$index}><button type="button" className={d.cls} role="radio" aria-checked={d.on} aria-label={d.label} onClick={d.pick}><span>{d.dow}</span><b>{d.num}</b><span>{d.mon}</span></button></Fragment>))}
</div>
<div className="times" role="radiogroup" aria-label="Time">
{v.times.map((t, $index) => (<Fragment key={$index}><button type="button" className={t.cls} role="radio" aria-checked={t.on} disabled={t.taken} onClick={t.pick}>{t.label}</button></Fragment>))}
</div>
<p style={{margin: "0", fontSize: "13px"}}>Closed Sunday and Monday. Crossed-out times are already booked.</p>
</div>

<form className="step" style={{borderBottom: "1px solid #4A443B"}} onSubmit={v.confirm}>
<h2><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>iv.</span><span style={{fontSize: "14px", fontWeight: "500", letterSpacing: ".2em", textTransform: "uppercase", color: "#F2EDE4"}}>Your details</span></h2>
<div className="form2">
<label className="field">Full name<input type="text" name="name" autoComplete="name" required /></label>
<label className="field">Phone<input type="tel" name="phone" autoComplete="tel" required /></label>
<label className="field" style={{gridColumn: "1 / -1"}}>Email<input type="email" name="email" autoComplete="email" required /></label>
<label className="field" style={{gridColumn: "1 / -1"}}>Notes for your stylist<textarea name="notes" rows="3" placeholder="Inspiration, history, anything we should know"></textarea></label>
</div>
<label style={{display: "flex", alignItems: "center", gap: "12px", fontSize: "15px", cursor: "pointer"}}><input type="checkbox" name="newclient" style={{width: "18px", height: "18px", accentColor: "#C6A15B"}} />I'm a new client</label>
{v.missing && (<><p style={{margin: "0", fontSize: "14px", color: "#E08A72"}} role="alert">{v.missingNote}</p></>)}
<div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "18px"}}>
<button type="submit" className="btn btn-dark">Request appointment</button>
<span style={{fontSize: "13px"}}>No payment now. [48-hour] cancellation policy applies.</span>
</div>
</form>
</div>

<aside className="summary" style={{position: "sticky", top: "24px", display: "flex", flexDirection: "column", gap: "22px", padding: "36px", background: "#181715"}}>
<p className="eyebrow">Your appointment</p>
<dl style={{margin: "0", display: "flex", flexDirection: "column"}}>
<div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderTop: "1px solid #5A544C"}}><dt style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#F2EDE4"}}>Service</dt><dd style={{margin: "0", textAlign: "right"}}>{v.svcName}</dd></div>
<div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderTop: "1px solid #5A544C"}}><dt style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#F2EDE4"}}>Stylist</dt><dd style={{margin: "0", textAlign: "right"}}>{v.stylistName}</dd></div>
<div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderTop: "1px solid #5A544C"}}><dt style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#F2EDE4"}}>When</dt><dd style={{margin: "0", textAlign: "right"}}>{v.whenShort}</dd></div>
<div style={{display: "flex", justifyContent: "space-between", gap: "16px", padding: "14px 0", borderTop: "1px solid #5A544C"}}><dt style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#F2EDE4"}}>Length</dt><dd style={{margin: "0", textAlign: "right"}}>{v.svcTime}</dd></div>
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "16px", padding: "18px 0 0", borderTop: "1px solid #4A443B"}}><dt style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#F2EDE4"}}>From</dt><dd className="serif" style={{margin: "0", fontSize: "36px", color: "#F2EDE4"}}>{v.svcPrice}</dd></div>
</dl>
<p style={{margin: "0", fontSize: "13px", lineHeight: "1.7"}}>Final price is confirmed at your consultation and depends on length and density. Sample prices.</p>
</aside>
</section></>)}

<footer style={{background: "#080807", color: "#B8B1A7", padding: "40px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", fontSize: "13px", letterSpacing: ".08em"}}>
<span>© Halden Hair Studio · [Street address, City]</span>
<span style={{display: "flex", gap: "26px"}}><Link to="/" style={{color: "#F2EDE4"}}>Home</Link><Link to="/services" style={{color: "#F2EDE4"}}>Services</Link><a href="#" style={{color: "#F2EDE4"}}>Instagram</a></span>
</div>
</footer>
</div>
    </>
  );
}
