// Generated from the Halden Hair Studio design mockup (Main.dc.html), then hand-editable.
// The page logic below is the mockup's own class; DCLogic (src/dc.js) gives it state like a React component.
import { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../theme.js';
import { DCLogic, useLogic } from '../dc.js';
import { img } from '../assets.js';

const PAGE_CSS = "body{margin:0;background:#0F0E0D}\na{color:#F2EDE4}a:hover{color:#C6A15B}\n.wrap{max-width:1280px;margin:0 auto;padding:0 48px;box-sizing:border-box}\n.bw{filter:grayscale(1) contrast(1.06) brightness(.92)}\n.reveal{transition:filter .6s ease}.reveal:hover{filter:none}\n.serif{font-family:'Cormorant Garamond',Georgia,serif;font-weight:400;letter-spacing:-0.01em}\n.eyebrow{margin:0;font-size:12px;font-weight:500;letter-spacing:.24em;text-transform:uppercase;color:#C6A15B}\n.navlinks a{color:#F2EDE4;text-decoration:none;font-size:13px;letter-spacing:.16em;text-transform:uppercase}\n.navlinks a:hover{color:#C6A15B}\n.btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 30px;font-size:13px;font-weight:500;letter-spacing:.18em;text-transform:uppercase;text-decoration:none;transition:background .25s,color .25s}\n.btn-dark{background:#C6A15B;color:#0F0E0D}.btn-dark:hover{background:#E0C285;color:#0F0E0D}\n.btn-line{border:1px solid #C6A15B;color:#E9D9B4}.btn-line:hover{background:#C6A15B;color:#0F0E0D}\n.hero{display:grid;grid-template-columns:5fr 6fr;gap:64px;align-items:end}\n.split{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center}\n.grid4{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0}\n.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:32px}\n.gallery{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));grid-auto-rows:120px;gap:16px}\n.ph{position:relative;overflow:hidden;background:linear-gradient(155deg,#22201D 0%,#151413 100%);display:flex;align-items:flex-end}\n.ph.dk{background:linear-gradient(155deg,#1C1A18 0%,#0C0B0A 100%)}\n.ph span{margin:16px;padding:6px 10px;background:rgba(15,14,13,.82);font-size:11px;font-weight:500;letter-spacing:.16em;text-transform:uppercase;color:#C9C2B8}\n.svc{display:flex;flex-direction:column;gap:14px;padding:36px 28px 36px 0;border-top:1px solid #4A443B;text-decoration:none;color:#F2EDE4}\n.svc:hover h3{color:#C6A15B}\n@media (max-width:1000px){\n.hero,.split{grid-template-columns:1fr!important}\n.grid4{grid-template-columns:repeat(2,minmax(0,1fr))!important;column-gap:28px!important}\n.grid3{grid-template-columns:1fr!important}\n.gallery{grid-template-columns:repeat(2,minmax(0,1fr))!important;grid-auto-rows:180px!important}\n.gallery > *{grid-column:auto!important;grid-row:auto!important}\n}\n@media (max-width:640px){\n.navlinks{display:none!important}\n.wrap{padding:0 20px!important}\n.h1t{font-size:60px!important}\n.h2t{font-size:40px!important}\n.grid4{grid-template-columns:1fr!important}\n.herophoto{height:440px!important}\n.hdrbtn{padding:0 16px!important;letter-spacing:.12em!important}\n}";

class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = { joined: false };
  }
  renderVals() {
    const team = [
      { name: '[Stylist name]', first: '[Name]', role: 'Owner · Color', note: '[Years] years behind the chair. Known for soft, lived-in color and grey that is celebrated, not hidden.', img: img('/images/owner.jpg'), alt: 'Smiling stylist with silver-streaked hair pinned up, seated on a wooden stool', pos: 'center 20%' },
      { name: '[Stylist name]', first: '[Name]', role: 'Senior stylist · Cuts', note: 'Sharp fades, textured cuts and curls shaped one coil at a time.', img: img('/images/barber.jpg'), alt: 'Stylist shaping a client’s curly, golden-tipped hair', pos: 'center 30%' },
      { name: '[Stylist name]', first: '[Name]', role: 'Stylist · Extensions', note: 'Hand-tied extensions, color matched and blended so nobody can find the rows. Certified in [extension method].', img: img('/images/extensions.jpg'), alt: 'Stylist fitting a row of hand-tied extensions', pos: '30% center' }
    ];
    return {
      team,
      joined: this.state.joined, notJoined: !this.state.joined,
      join: (e) => { e.preventDefault(); this.setState({ joined: true }); }
    };
  }
}

export default function Home() {
  const props = useTheme({});
  const v = useLogic(Component, props).renderVals();
  useEffect(() => { document.title = "Halden Hair Studio: home"; }, []);
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
<a href="#stylists">Stylists</a>
<a href="#work">Work</a>
<a href="#visit">Visit</a>
</nav>
<Link to="/book" className="btn btn-dark hdrbtn" style={{minHeight: "46px", padding: "0 24px"}}>Book</Link>
</header>


<section className="wrap hero" style={{paddingTop: "40px", paddingBottom: "100px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "30px", paddingBottom: "20px"}}>
<p className="eyebrow">Hair studio · [Neighborhood], [City]</p>
<h1 className="serif h1t" style={{margin: "0", fontSize: "104px", lineHeight: ".92", color: "#F2EDE4"}}>Hair, <em style={{fontStyle: "italic", color: "#C6A15B"}}>considered.</em></h1>
<p style={{margin: "0", fontSize: "19px", lineHeight: "1.75", maxWidth: "28rem"}}>Precision cuts, lived-in color and the kind of care that makes the second appointment easy to book. Every visit starts with a conversation.</p>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<Link to="/book" className="btn btn-dark">Book an appointment</Link>
<Link to="/services" className="btn btn-line">View services</Link>
</div>
</div>
<img className="herophoto bw" src={img("/images/interior.jpg")} alt="Quiet salon floor with arched mirrors and styling chairs" style={{display: "block", width: "100%", height: "680px", objectFit: "cover"}} />
</section>


<section className="wrap" style={{paddingBottom: "110px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "28px", padding: "28px 0", borderTop: "1px solid #2E2A26", borderBottom: "1px solid #2E2A26", fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "#F2EDE4"}}>
<span>By appointment</span>
<span>Tuesday – Saturday</span>
<span>[Free consultations]</span>
<span>[Product line] stockist</span>
</div>
</section>


<section className="wrap" style={{paddingBottom: "120px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "48px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
<p className="eyebrow">Services</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "64px", lineHeight: "1", color: "#F2EDE4"}}>What we do <em>well.</em></h2>
</div>
<Link to="/services" style={{fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", textUnderlineOffset: "6px"}}>Full menu &amp; pricing</Link>
</div>
<div className="grid4" style={{columnGap: "32px"}}>
<Link to="/services" className="svc"><span style={{fontSize: "12px", letterSpacing: ".2em", color: "#C6A15B"}}>01</span><h3 className="serif" style={{margin: "0", fontSize: "32px", color: "#F2EDE4", transition: "color .25s"}}>Cut &amp; style</h3><span style={{fontSize: "15px", lineHeight: "1.7", color: "#B8B1A7"}}>Precision cuts, shape-ups and blowouts, tailored to how you actually wear your hair.</span><span style={{fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", color: "#F2EDE4"}}>From $[85]</span></Link>
<Link to="/services" className="svc"><span style={{fontSize: "12px", letterSpacing: ".2em", color: "#C6A15B"}}>02</span><h3 className="serif" style={{margin: "0", fontSize: "32px", color: "#F2EDE4", transition: "color .25s"}}>Color</h3><span style={{fontSize: "15px", lineHeight: "1.7", color: "#B8B1A7"}}>Balayage, glosses, grey blending and corrective color, built to grow out softly.</span><span style={{fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", color: "#F2EDE4"}}>From $[120]</span></Link>
<Link to="/services" className="svc"><span style={{fontSize: "12px", letterSpacing: ".2em", color: "#C6A15B"}}>03</span><h3 className="serif" style={{margin: "0", fontSize: "32px", color: "#F2EDE4", transition: "color .25s"}}>Treatments</h3><span style={{fontSize: "15px", lineHeight: "1.7", color: "#B8B1A7"}}>Bond repair, scalp treatments and smoothing for hair that needs a reset.</span><span style={{fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", color: "#F2EDE4"}}>From $[45]</span></Link>
<Link to="/services" className="svc"><span style={{fontSize: "12px", letterSpacing: ".2em", color: "#C6A15B"}}>04</span><h3 className="serif" style={{margin: "0", fontSize: "32px", color: "#F2EDE4", transition: "color .25s"}}>Extensions</h3><span style={{fontSize: "15px", lineHeight: "1.7", color: "#B8B1A7"}}>Hand-tied and tape-in extensions, color matched and fitted after a consultation.</span><span style={{fontSize: "13px", letterSpacing: ".14em", textTransform: "uppercase", color: "#F2EDE4"}}>By consultation</span></Link>
</div>
</section>


<section style={{background: "#181715", padding: "120px 0"}}>
<div className="wrap split">
<img className="bw reveal" src={img("/images/curling.jpg")} alt="Stylist curling long brunette hair with soft caramel highlights" style={{display: "block", width: "100%", height: "640px", objectFit: "cover", objectPosition: "center 40%"}} />
<div style={{display: "flex", flexDirection: "column", gap: "28px"}}>
<p className="eyebrow">Our approach</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "58px", lineHeight: "1.02", color: "#F2EDE4"}}>Slow enough to get it <em>right.</em></h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.8"}}>We book longer appointments than most salons so nobody is rushed: not you, and not the person holding the scissors.</p>
<ol style={{listStyle: "none", margin: "12px 0 0", padding: "0", display: "flex", flexDirection: "column"}}>
<li style={{display: "grid", gridTemplateColumns: "56px 1fr", gap: "8px", padding: "22px 0", borderTop: "1px solid #2E2A26"}}><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>i.</span><span><strong style={{display: "block", fontWeight: "500", color: "#F2EDE4", marginBottom: "4px"}}>Consultation</strong>We talk through your routine, your history and what you want to stop fighting with.</span></li>
<li style={{display: "grid", gridTemplateColumns: "56px 1fr", gap: "8px", padding: "22px 0", borderTop: "1px solid #2E2A26"}}><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>ii.</span><span><strong style={{display: "block", fontWeight: "500", color: "#F2EDE4", marginBottom: "4px"}}>Craft</strong>Cut dry or wet as your hair needs, color mixed by eye and checked in daylight.</span></li>
<li style={{display: "grid", gridTemplateColumns: "56px 1fr", gap: "8px", padding: "22px 0", borderTop: "1px solid #2E2A26", borderBottom: "1px solid #2E2A26"}}><span className="serif" style={{fontSize: "26px", color: "#C6A15B"}}>iii.</span><span><strong style={{display: "block", fontWeight: "500", color: "#F2EDE4", marginBottom: "4px"}}>Care</strong>You leave knowing how to style it at home, and when to come back.</span></li>
</ol>
</div>
</div>
</section>


<section id="stylists" className="wrap" style={{paddingTop: "120px", paddingBottom: "120px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px", marginBottom: "48px"}}>
<p className="eyebrow">The team</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "64px", lineHeight: "1", color: "#F2EDE4"}}>Who you'll <em>sit with.</em></h2>
</div>
<div className="grid3">
{v.team.map((t, $index) => (<Fragment key={$index}><Link to="/book" className="stylist" style={{display: "flex", flexDirection: "column", gap: "18px", textDecoration: "none", color: "#F2EDE4"}}>
<img className="bw reveal" src={t.img} alt={t.alt} style={{display: "block", width: "100%", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: t.pos}} />
<div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "12px"}}>
<h3 className="serif" style={{margin: "0", fontSize: "30px", fontWeight: "500"}}>{t.name}</h3>
<span style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", color: "#C6A15B"}}>{t.role}</span>
</div>
<p style={{margin: "0", fontSize: "15px", lineHeight: "1.7", color: "#B8B1A7"}}>{t.note}</p>
<span style={{fontSize: "12px", letterSpacing: ".18em", textTransform: "uppercase", textDecoration: "underline", textUnderlineOffset: "6px"}}>Book with {t.first}</span>
</Link></Fragment>))}
</div>
</section>


<section id="work" style={{background: "#080807", padding: "120px 0", color: "#B8B1A7"}}>
<div className="wrap">
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "24px", marginBottom: "48px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
<p className="eyebrow" style={{color: "#C6A15B"}}>Recent work</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "64px", lineHeight: "1", color: "#F2EDE4"}}>From the <em>chair.</em></h2>
</div>
<a href="#" style={{fontSize: "13px", letterSpacing: ".16em", textTransform: "uppercase", color: "#F2EDE4", textUnderlineOffset: "6px"}}>More on Instagram</a>
</div>
<div className="gallery">
<img className="bw reveal" src={img("/images/waves.jpg")} alt="Long blonde waves falling across a face" style={{gridColumn: "span 5", gridRow: "span 4", width: "100%", height: "100%", objectFit: "cover"}} />
<img className="bw reveal" src={img("/images/shampoo.jpg")} alt="Client relaxing at the wash basin while a stylist rinses her hair" style={{gridColumn: "span 7", gridRow: "span 2", width: "100%", height: "100%", objectFit: "cover"}} />
<img className="bw reveal" src={img("/images/windswept.jpg")} alt="Long dark hair caught mid-movement" style={{gridColumn: "span 3", gridRow: "span 2", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%"}} />
<img className="bw reveal" src={img("/images/tools.jpg")} alt="Hands raising brushes, shears and a color brush" style={{gridColumn: "span 4", gridRow: "span 2", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 70%"}} />
</div>
</div>
</section>


<section className="wrap" style={{paddingTop: "130px", paddingBottom: "130px", textAlign: "center"}}>
<p className="serif" style={{margin: "0 auto", maxWidth: "18ch", fontSize: "58px", lineHeight: "1.12", color: "#F2EDE4"}}>Good hair is mostly <em style={{color: "#C6A15B"}}>good listening.</em></p>
<p style={{margin: "28px 0 0", fontSize: "13px", letterSpacing: ".2em", textTransform: "uppercase"}}>[Owner name], founder</p>
</section>


<section id="visit" style={{background: "#181715", padding: "110px 0"}}>
<div className="wrap split" style={{alignItems: "stretch"}}>
<div style={{display: "flex", flexDirection: "column", gap: "26px"}}>
<p className="eyebrow">Visit</p>
<h2 className="serif h2t" style={{margin: "0", fontSize: "58px", lineHeight: "1.02", color: "#F2EDE4"}}>The <em>studio.</em></h2>
<p style={{margin: "0", fontSize: "17px", lineHeight: "1.8"}}>[Street address]<br />[City, State ZIP]<br />[Parking note: street parking on (street), lot behind the building]</p>
<dl style={{margin: "0", display: "grid", gridTemplateColumns: "auto 1fr", gap: "14px 40px", fontSize: "15px", padding: "26px 0", borderTop: "1px solid #2E2A26", borderBottom: "1px solid #2E2A26"}}>
<dt style={{color: "#F2EDE4", fontWeight: "400", letterSpacing: ".12em", textTransform: "uppercase", fontSize: "13px"}}>Tue – Fri</dt><dd style={{margin: "0"}}>[10am – 7pm]</dd>
<dt style={{color: "#F2EDE4", fontWeight: "400", letterSpacing: ".12em", textTransform: "uppercase", fontSize: "13px"}}>Saturday</dt><dd style={{margin: "0"}}>[9am – 4pm]</dd>
<dt style={{color: "#F2EDE4", fontWeight: "400", letterSpacing: ".12em", textTransform: "uppercase", fontSize: "13px"}}>Sun – Mon</dt><dd style={{margin: "0"}}>Closed</dd>
</dl>
<div style={{display: "flex", flexWrap: "wrap", gap: "14px"}}>
<Link to="/book" className="btn btn-dark">Book online</Link>
<a className="btn btn-line" href="tel:+10000000000">[(000) 000-0000]</a>
</div>
</div>
<img className="bw" src={img("/images/updo.jpg")} alt="Stylist pinning an elegant low bun in a softly lit studio" style={{display: "block", width: "100%", minHeight: "520px", height: "100%", objectFit: "cover", objectPosition: "center 35%"}} />
</div>
</section>


<footer style={{background: "#080807", color: "#B8B1A7", padding: "80px 0 40px"}}>
<div className="wrap" style={{display: "flex", flexDirection: "column", gap: "56px"}}>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "32px"}}>
<div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
<span className="serif" style={{fontSize: "40px", fontWeight: "500", letterSpacing: ".28em", color: "#F2EDE4", lineHeight: "1"}}>HALDEN</span>
<span style={{fontSize: "11px", letterSpacing: ".42em", textTransform: "uppercase", color: "#C6A15B"}}>Hair Studio</span>
</div>
{v.joined && (<><p style={{margin: "0", fontSize: "15px", color: "#F2EDE4"}}>Thank you. Expect a short note when new appointments open.</p></>)}
{v.notJoined && (<><form style={{display: "flex", flexDirection: "column", gap: "12px"}} onSubmit={v.join}>
<label htmlFor="news" style={{fontSize: "12px", letterSpacing: ".2em", textTransform: "uppercase", color: "#C6A15B"}}>Openings &amp; offers, monthly</label>
<div style={{display: "flex", flexWrap: "wrap", gap: "0"}}>
<input id="news" type="email" required placeholder="Email address" style={{minHeight: "50px", minWidth: "260px", padding: "0 18px", border: "1px solid #6B645B", borderRight: "0", background: "transparent", color: "#F2EDE4", font: "300 15px Jost, sans-serif"}} />
<button type="submit" style={{minHeight: "52px", padding: "0 24px", border: "0", background: "#C6A15B", color: "#0F0E0D", font: "500 12px Jost, sans-serif", letterSpacing: ".2em", textTransform: "uppercase", cursor: "pointer"}}>Subscribe</button>
</div>
</form></>)}
</div>
<div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "20px", paddingTop: "26px", borderTop: "1px solid #2E2A26", fontSize: "13px", letterSpacing: ".08em"}}>
<span>© Halden Hair Studio · [Street address, City]</span>
<span style={{display: "flex", gap: "26px"}}><Link to="/services" style={{color: "#F2EDE4"}}>Services</Link><Link to="/book" style={{color: "#F2EDE4"}}>Book</Link><a href="#" style={{color: "#F2EDE4"}}>Instagram</a></span>
</div>
</div>
</footer>
</div>
    </>
  );
}
