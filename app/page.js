"use client";

import { useEffect } from "react";
import "./globals.css";
// keep your existing components
import Show from "./Components/show";
import Menu from "./Components/Menu";
import Form from "./Components/form";
import Footer from "./Components/footer";

export default function Home() {
  // custom cursor
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const moveCursor = (e) => {
      if (!cursor) return;
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  // active nav link on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const lis = document.querySelectorAll(".nav-links li");
    const anchors = document.querySelectorAll(".nav-links a");

    const setActive = (id) => {
      lis.forEach((li) => li.classList.remove("active"));
      const a = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (a && a.parentElement) a.parentElement.classList.add("active");
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && setActive(en.target.id)),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    if (sections[0]) setActive(sections[0].id);

    anchors.forEach((a) =>
      a.addEventListener("click", () => {
        const id = a.getAttribute("href")?.replace("#", "");
        if (id) setActive(id);
      })
    );
    setTimeout(() => {
  document.querySelectorAll(".fade-section").forEach((sec) => {
    sec.classList.add("show");
  });
}, 800);
    return () => io.disconnect();
  }, []);

  return (
    <main className="landing asian-theme">
      <Show />

      {/* NAVBAR */}
      <nav className="navbar">
        <h1 className="logo">
          <img src="/Logo.png" alt="Teriyaki" className="nav-logo" />
        </h1>

        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#footer">Help</a></li>
        </ul>

        <button className="book-btn">BOOK SEAT</button>
      </nav>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-left fade-in-up">
          <h3 className="tag">ASIAN FUSION · TERIYAKI</h3>
          <h1 className="title">
            Crafted with <br /> Fire & Heart
          </h1>
          <p className="desc">
            Bold flavors. Warm ambience. Premium ingredients — plated with care.
          </p>
          <button className="learn-btn">VIEW MENU</button>
        </div>

        <div className="hero-right fade-in">
          <h1 className="bg-text">TERIYAKI</h1>
          <img src="/land.png" alt="Signature Dish" className="food-img" />
          <span className="hero-wave"></span>
        </div>
      </section>

      {/* ABOUT (uses about.jpg) */}
      <section id="about" className="about asian-card fade-section">
        <div className="about-media">
          <img src="/about.jpg" alt="Restaurant ambience" />
          <span className="media-frame"></span>
        </div>

        <div className="about-text">
          <h2>ABOUT US</h2>
          <p>
            At <b>Teriyaki</b>, we don’t just serve meals — we craft experiences.
            Our chefs blend creativity with heritage, bringing Japanese-inspired
            flavors to your plate without losing the heart of tradition.
          </p>
          <p>
            Whether you’re here for a quiet dinner or a lively evening out, our
            promise stays the same: <b>bold taste</b>, <b>warm ambience</b>, and
            <b> personal service</b>.
          </p>
          <h4 className="about-note">We’re always with you — from kitchen flame to final bite.</h4>
        </div>
      </section>

      {/* MENU (your existing component, themed by CSS) */}
      <section id="menu" className="fade-section">
        <Menu />
      </section>

      {/* CONTACT */}
      <section id="contact" className="fade-section">
        <Form />
      </section>

      {/* FOOTER */}
      <section id="footer" className="fade-section">
        <Footer />
      </section>

      <div className="cursor"></div>
    </main>
  );
}
