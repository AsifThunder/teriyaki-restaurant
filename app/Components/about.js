import css from "./about.css"

export default function About() {
  return (
<section className="about">
  <div className="about-images">
    <img src="/res1.jpg" alt="Restaurant interior" className="about-img back" />
    <img src="/unnamedd.jpg" alt="Restaurant ambiance" className="about-img front" />
  </div>

  <div className="about-text">
    <h2>ABOUT US</h2>
   <p>
    At <b>The Signature International</b>, we don’t just serve meals — we craft experiences.<br/><br/>
    Every dish begins with premium, hand-picked ingredients and ends with a moment worth remembering.<br/><br/>
    Our chefs blend creativity with authenticity, bringing global flavors to your plate without losing the heart of traditional cooking.<br/><br/>
    Whether you’re here for a quiet dinner or a lively evening out, our promise remains the same:<br/>
    <b>bold taste, warm ambiance, and service that feels personal.</b>
  </p>
    <h4>We are <span>Always</span> with you!</h4>
  </div>
</section>
  ) 
}
