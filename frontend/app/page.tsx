export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <div className="logo">🅿️ ParkMate</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Find Parking</a>
          <a href="#">About</a>
          <button>Login</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Find Parking. Park Easily.</h1>

          <p>
            Find available parking spaces near you and reserve your
            parking spot with ease.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">📍 Find Parking</button>
            <button className="secondary-btn">List Your Parking</button>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon">📍</div>
          <h3>Find Nearby Parking</h3>
          <p>Discover parking facilities near your location.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🅿️</div>
          <h3>Check Availability</h3>
          <p>View available parking slots before you arrive.</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">📱</div>
          <h3>Easy Booking</h3>
          <p>Reserve your parking slot quickly and easily.</p>
        </div>
      </section>
    </main>
  );
}