// Generated from the Halden Hair Studio design mockup (Services.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#0F0E0D}\na{color:#F2EDE4}a:hover{color:#C6A15B}\n.wrap{max-width:1280px;margin:0 auto;padding:0 48px;box-sizing:border-box}\n.bw{filter:grayscale(1) contrast(1.06) brightness(.92)}\n.reveal{transition:filter .6s ease}.reveal:hover{filter:none}\n.serif{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;letter-spacing:-0.01em}\n.eyebrow{margin:0;font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#C6A15B}\n.navlinks a{color:#F2EDE4;text-decoration:none;font-size:13px;letter-spacing:.16em;text-transform:uppercase}\n.navlinks a:hover{color:#C6A15B}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;transition:background .25s,color .25s}\n.btn-dark{background:#C6A15B;color:#0F0E0D}.btn-dark:hover{background:#E0C285;color:#0F0E0D}\n.btn-line{border:1px solid #C6A15B;color:#E9D9B4}.btn-line:hover{background:#C6A15B;color:#0F0E0D}\n.ph{position:relative;overflow:hidden;background:linear-gradient(155deg,#22201D 0%,#151413 100%);display:flex;align-items:flex-end}\n.ph span{margin:16px;padding:6px 10px;background:rgba(15,14,13,.82);font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8}\n.intro{display:grid;grid-template-columns:6fr 5fr;gap:72px;align-items:end}\n.menu{display:grid;grid-template-columns:260px 1fr;gap:64px;align-items:start}\n.tab{display:flex;justify-content:space-between;align-items:center;width:100%;min-height:56px;padding:0;border:0;border-bottom:1px solid #2E2A26;background:none;font:400 15px Jost,sans-serif;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;text-align:left}\n.row{display:grid;grid-template-columns:1fr 120px 130px 110px;gap:24px;align-items:center;padding:28px 0;border-bottom:1px solid #2E2A26}\n.row a.book{font-size:12px;letter-spacing:.18em;text-transform:uppercase;text-underline-offset:6px;justify-self:end}\n.pol{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px}\n@media (max-width:1000px){\n.intro,.menu{grid-template-columns:1fr!important}\n.tabs{display:flex!important;flex-wrap:wrap;gap:8px 24px}\n.tab{width:auto!important;border-bottom:0!important;min-height:44px!important}\n.pol{grid-template-columns:1fr!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.h1t{font-size:56px!important}\n.h2t{font-size:40px!important}\n.row{grid-template-columns:1fr auto!important;gap:8px 16px!important}\n.row .dur{grid-column:1}\n.row .price{grid-column:2;grid-row:1;justify-self:end}\n.row a.book{grid-column:2;justify-self:end}\n.hdrbtn{padding:0 16px!important;letter-spacing:.12em!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { cat: 'cut' };
  }
  renderVals() {
    const menu = {
      cut: { label: 'Cut & style', title: 'Cut & style', note: 'Every cut includes a consultation, wash, and a finish styled the way you’ll wear it.', rows: [
        { name: 'Signature cut', note: 'Consultation, wash, precision cut and finish.', time: '75 min', price: '$[85]' },
        { name: 'Short cut', note: 'Pixies, crops and clipper work. Includes a neck trim between visits.', time: '45 min', price: '$[60]' },
        { name: 'Curly cut', note: 'Cut dry, curl by curl, with a styling lesson.', time: '90 min', price: '$[110]' },
        { name: 'Fringe trim', note: 'Between appointments. Walk-ins welcome when we can.', time: '15 min', price: '$[20]' },
        { name: 'Blowout', note: 'Wash and a smooth or bouncy blow-dry finish.', time: '45 min', price: '$[55]' }
      ] },
      color: { label: 'Color', title: 'Color', note: 'All color starts with a consultation and patch test. Prices include toner and finish.', rows: [
        { name: 'Balayage', note: 'Hand-painted, soft and low maintenance.', time: '3 hrs', price: '$[240]' },
        { name: 'Full highlights', note: 'Foil highlights through the whole head.', time: '2.5 hrs', price: '$[210]' },
        { name: 'Single process', note: 'Root touch-up or all-over color.', time: '90 min', price: '$[120]' },
        { name: 'Gloss', note: 'Shine and tone refresh between color visits.', time: '45 min', price: '$[65]' },
        { name: 'Grey blending', note: 'Softens grey regrowth without a hard line.', time: '2 hrs', price: '$[150]' },
        { name: 'Color correction', note: 'Quoted after consultation.', time: 'Varies', price: 'Quote' }
      ] },
      treat: { label: 'Treatments', title: 'Treatments', note: 'Add any treatment to a cut or color appointment, or book one on its own.', rows: [
        { name: 'Bond repair', note: 'Rebuilds hair after lightening or heat damage.', time: '30 min', price: '$[45]' },
        { name: 'Scalp ritual', note: 'Exfoliation, massage and a deep cleanse.', time: '45 min', price: '$[60]' },
        { name: 'Smoothing treatment', note: 'Cuts frizz and drying time for about [12] weeks.', time: '2.5 hrs', price: '$[280]' },
        { name: 'Deep conditioning', note: 'Moisture mask with steam.', time: '20 min', price: '$[35]' }
      ] },
      ext: { label: 'Extensions', title: 'Extensions', note: 'Extensions are booked after an in-person consultation and color match.', rows: [
        { name: 'Extension consultation', note: 'Color match, method and price quote.', time: '30 min', price: 'Free' },
        { name: 'Hand-tied install', note: 'One to three rows, cut and blended.', time: '3–4 hrs', price: 'Quote' },
        { name: 'Tape-in install', note: 'Lightweight, quick to apply and remove.', time: '2 hrs', price: 'Quote' },
        { name: 'Move-up', note: 'Maintenance every [6–8] weeks.', time: '2 hrs', price: '$[180]' }
      ] }
    };
    const order = ['cut', 'color', 'treat', 'ext'];
    const cur = menu[this.state.cat];
    return {
      cats: order.map((id) => ({ label: menu[id].label, on: this.state.cat === id, off: this.state.cat !== id, pick: () => this.setState({ cat: id }) })),
      catTitle: cur.title, catNote: cur.note, rows: cur.rows
    };
  }
}

export default function Services() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Halden Hair Studio: services and pricing"; }, []);
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
<Link to="/services" aria-current="page" style={{color: "#C6A15B"}}>Services</Link>
<Link to="/#stylists">Stylists</Link>
<Link to="/#work">Work</Link>
<Link to="/#visit">Visit</Link>
</nav>
<Link to="/book" className="btn btn-dark hdrbtn" style={{minHeight: "46px", padding: "0 24px"}}>Book</Link>
</header>


<section className="wrap intro" style={{paddingTop: "50px", paddingBottom: "90px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
<p className="eyebrow">Services &amp; pricing</p>
<h1 className="serif h1t" style={{margin: "0", fontSize: "92px", lineHeight: ".94", color: "#F2EDE4"}}>The <em style={{color: "#C6A15B"}}>menu.</em></h1>
<p style={{margin: "0", fontSize: "18px", lineHeight: "1.8", maxWidth: "32rem"}}>Prices start at the amount shown and depend on hair length, density and your stylist's level. We'll confirm everything in your consultation before we begin.</p>
</div>
<img className="bw" src={img("/images/shampoo.jpg")} alt="Client relaxing at the wash basin while a stylist rinses her hair" style={{display: "block", width: "100%", height: "360px", objectFit: "cover"}} />
</section>


<section className="wrap menu" style={{paddingBottom: "120px"}}>
<div className="tabs" role="tablist" aria-label="Service categories" style={{display: "flex", flexDirection: "column", position: "sticky", top: "24px"}}>
{v.cats.map((c, $index) => (<Fragment key={$index}>{c.on && (<><button type="button" className="tab" role="tab" aria-selected="true" style={{color: "#F2EDE4", fontWeight: "500"}} onClick={c.pick}>{c.label} <span aria-hidden="true" style={{color: "#C6A15B"}}>—</span></button></>)}
{c.off && (<><button type="button" className="tab" role="tab" aria-selected="false" style={{color: "#9C958B"}} onClick={c.pick}>{c.label}</button></>)}</Fragment>))}
</div>
<div>
<div style={{display: "flex", flexDirection: "column", gap: "12px", paddingBottom: "26px", borderBottom: "1px solid #4A443B"}}>
<h2 className="serif h2t" style={{margin: "0", fontSize: "52px", lineHeight: "1", color: "#F2EDE4"}}>{v.catTitle}</h2>
<p style={{margin: "0", fontSize: "16px", lineHeight: "1.7", maxWidth: "40rem"}}>{v.catNote}</p>
</div>
<div className="row" style={{padding: "14px 0", fontSize: "11px", letterSpacing: ".2em", textTransform: "uppercase", color: "#9C958B"}} aria-hidden="true"><span>Service</span><span className="dur">Time</span><span className="price">From</span><span></span></div>
{v.rows.map((r, $index) => (<Fragment key={$index}><div className="row">
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<strong className="serif" style={{fontSize: "26px", fontWeight: "500", color: "#F2EDE4"}}>{r.name}</strong>
<span style={{fontSize: "15px", lineHeight: "1.6"}}>{r.note}</span>
</div>
<span className="dur" style={{fontSize: "14px"}}>{r.time}</span>
<span className="price" style={{fontSize: "17px", color: "#F2EDE4", fontWeight: "400"}}>{r.price}</span>
<Link to="/book" className="book">Book</Link>
</div></Fragment>))}
</div>
</section>


<section style={{background: "#181715", padding: "110px 0"}}>
<div className="wrap">
<div style={{display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px"}}>
<p className="eyebrow">Good to know</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "56px", lineHeight: "1", color: "#F2EDE4"}}>Before you <em>book.</em></h2>
</div>
<div className="pol">
<div style={{display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "1px solid #4A443B"}}><strong className="serif" style={{fontSize: "28px", fontWeight: "500", color: "#F2EDE4"}}>New clients</strong><p style={{margin: "0", fontSize: "15px", lineHeight: "1.75"}}>Color appointments start with a free 15-minute consultation and a patch test at least 48 hours before. Book it online or call us.</p></div>
<div style={{display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "1px solid #4A443B"}}><strong className="serif" style={{fontSize: "28px", fontWeight: "500", color: "#F2EDE4"}}>Cancellations</strong><p style={{margin: "0", fontSize: "15px", lineHeight: "1.75"}}>Please give us [48 hours] notice. Late cancellations and missed appointments are charged [50%] of the booked service.</p></div>
<div style={{display: "flex", flexDirection: "column", gap: "12px", paddingTop: "24px", borderTop: "1px solid #4A443B"}}><strong className="serif" style={{fontSize: "28px", fontWeight: "500", color: "#F2EDE4"}}>Running late</strong><p style={{margin: "0", fontSize: "15px", lineHeight: "1.75"}}>We hold your spot for [15 minutes]. After that we may need to shorten the service or move you to another day.</p></div>
</div>
<div style={{display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", marginTop: "64px"}}>
<Link to="/book" className="btn btn-dark">Book an appointment</Link>
<span style={{fontSize: "15px"}}>Not sure what to book? Choose a consultation and we'll plan it together.</span>
</div>
</div>
</section>

<footer style={{background: "#080807", color: "#B8B1A7", padding: "40px 0"}}>
<div className="wrap" style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", fontSize: "13px", letterSpacing: ".08em"}}>
<span>© Halden Hair Studio · [Street address, City]</span>
<span style={{display: "flex", gap: "26px"}}><Link to="/" style={{color: "#F2EDE4"}}>Home</Link><Link to="/book" style={{color: "#F2EDE4"}}>Book</Link><a href="#" style={{color: "#F2EDE4"}}>Instagram</a></span>
</div>
</footer>
</div>
    </>
  );
}
