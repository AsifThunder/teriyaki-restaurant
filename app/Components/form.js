import "./form.css"


export default function form() {
    return(
        <section className="form-section">
  <h2 className="form-title">Book a Seat</h2>
  <p className="form-sub">
    Reserve your table easily — we’ll keep it ready for you.
  </p>

  <form className="booking-form">
    <div className="form-row">
      <input type="text" placeholder="Full Name" required />
      <input type="email" placeholder="Email Address" required />
    </div>
    <div className="form-row">
      <input type="tel" placeholder="Phone Number" required />
      <input type="number" placeholder="No. of Guests" min="1" required />
    </div>
    <textarea placeholder="Special Requests (Optional)" rows="4"></textarea>

    <button type="submit" className="form-btn">Reserve Now</button>
  </form>
</section>

    )
}