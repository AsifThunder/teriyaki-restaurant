import "./menu.css";

export default function Menu() {
  return (
    <section className="menu">
      <h2 className="menu-title">Our Delicious Menu</h2>
      <p className="menu-sub">
        Explore our selection of premium dishes, crafted with passion and taste.
      </p>

      <div className="menu-cards">
        <div className="menu-card">
          <img src="/ph1.png" alt="Pizza" />
          <div className="menu-info">
            <h3>Margherita Pizza</h3>
            <p>
              Wood-fired pizza topped with fresh mozzarella, basil, and our
              signature tomato sauce for that perfect Italian bite.
            </p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/ph2.png" alt="Lasagna" />
          <div className="menu-info">
            <h3>Classic Lasagna</h3>
            <p>
              Layers of tender pasta, creamy béchamel, rich meat sauce, and
              melted cheese baked to golden perfection.
            </p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/r1.png" alt="Duck Breast" />
          <div className="menu-info">
            <h3>Seared Duck Breast</h3>
            <p>
              Pan-seared duck glazed with cherry reduction, served with roasted
              Brussels sprouts and caramelized pecans for a gourmet touch.
            </p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/r2.png" alt="Steak" />
          <div className="menu-info">
            <h3>Grilled Ribeye Steak</h3>
            <p>
              Juicy ribeye grilled to perfection, served with garlic butter and
              herb-roasted vegetables for a rich, savory experience.
            </p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/r3.png" alt="Pasta Alfredo" />
          <div className="menu-info">
            <h3>Creamy Fettuccine Alfredo</h3>
            <p>
              Silky pasta tossed in a creamy parmesan sauce, finished with a
              drizzle of olive oil and fresh parsley.
            </p>
          </div>
        </div>

        <div className="menu-card">
          <img src="/ph3.png" alt="Calzone" />
          <div className="menu-info">
            <h3>Italian Calzone</h3>
            <p>
              Folded golden crust stuffed with mozzarella, pepperoni, and
              marinara — a pocket of cheesy goodness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
