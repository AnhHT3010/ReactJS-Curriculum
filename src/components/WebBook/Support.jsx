const Support = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div style={{ maxWidth: "45%", textAlign: "left" }}>
        <h2>Tempi</h2>
        <p>Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi</p>
        <p>012.3344.566</p>
        <p>support@tempi.vn</p>
        <div style={{ display: "flex", gap: "15px", marginTop: "15px" }}>
          <a href="#" style={{ color: "#fff" }}>
            Facebook
          </a>
          <a href="#" style={{ color: "#fff" }}>
            YouTube
          </a>
          <a href="#" style={{ color: "#fff" }}>
            TikTok
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Instagram
          </a>
          <a href="#" style={{ color: "#fff" }}>
            Zalo
          </a>
        </div>
      </div>

      <div style={{ maxWidth: "50%", textAlign: "left" }}>
        <h3 style={{ marginBottom: "20px", fontSize: "24px" }}>Need Help?</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input
            type="text"
            placeholder="Name"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            required
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "18px",
              width: "100%",
            }}
          />
          <textarea
            placeholder="Leave us a message..."
            style={{
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              resize: "none",
              fontSize: "18px",
              width: "100%",
              minHeight: "150px",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#e74c3c",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "18px",
              cursor: "pointer",
              width: "100%",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Support;
