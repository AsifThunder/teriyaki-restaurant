import "./footer.css"

export default function footer() {
    return(
        <footer className="footer">
  <div className="footer-content">
    <h2 className="footer-logo">the <span>Teriyaki</span> <small>with you always</small></h2>

    <ul className="footer-links">
      <li>Home</li>
      <li>About</li>
      <li>Menu</li>
      <li>Contact</li>
    </ul>

    <div className="footer-socials">
      <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
      <a href="#"><i className="fa-brands fa-instagram"></i></a>
      <a href="#"><i className="fa-brands fa-twitter"></i></a>
    </div>

    <p className="footer-credit">
      © 2025 teriyaki — Designed by <span>Abdullah Al Asif</span>
    </p>
  </div>
</footer>

    )
}
