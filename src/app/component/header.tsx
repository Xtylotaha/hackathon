export default function Header() {
    return (
      <div className="header">
        <div className="logo"><b>SHOP.CO</b></div>
        <div className="nav-links">
          <a href="#">Shop <b>v</b></a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
        </div>
        <div className="icons">
          <span>🛒</span>
          <span>👤</span>
        </div>
      </div>
    );
  }
  