export default function Uptodate() {
    return (
      <div className="uptodate">
        <div className="uptodate-content">
          <h2>STAY UP TO DATE ABOUT</h2>
          <h2> OUR LATEST OFFERS</h2>
        </div>
        <div className="uptodate-form">
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            aria-label="Email Address"
          />
          {/* <label htmlFor="email">Enter your email address</label> */}
          <button>Subscribe to Newsletter</button>
        </div>
      </div>
    );
  }
  