function Homepage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
        fontFamily: "Poppins, sans-serif",
        overflow: "hidden",
        position: "relative",
        paddingTop: "7rem",
      }}
    >
      <div
        style={{
          width: "90%",
          margin: "0 auto",
          paddingTop: "3rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            flex: "1",
            paddingRight: "2rem",
            maxWidth: "50%",
          }}
        >
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "bold",
              lineHeight: "1.1",
              marginBottom: "0.5rem",
            }}
          >
            Order your
          </div>
          <div
            style={{
              fontSize: "4rem",
              fontWeight: "normal",
              marginBottom: "1.5rem",
            }}
          >
            favourite Foods
          </div>

          <div
            style={{
              fontSize: "1rem",
              color: "#777",
              maxWidth: "450px",
              marginBottom: "2.5rem",
            }}
          >
            Fresh and tasty seafood curry sit amet, consectetur Curabitur
            accumsan auctor pulvinar proin sit amet.
          </div>

          <div
            style={{
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                fontSize: "1.8rem",
                fontWeight: "300",
                marginBottom: "1.5rem",
              }}
            >
              Total order : <span style={{ fontWeight: "bold" }}>$24.30</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "25px",
                  padding: "0.5rem 1rem",
                }}
              >
                <span style={{ color: "#aaa", cursor: "pointer" }}>▼</span>
                <span
                  style={{
                    margin: "0 1rem",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  2
                </span>
                <span style={{ color: "#aaa", cursor: "pointer" }}>▲</span>
              </div>

              <div
                style={{
                  backgroundColor: "#222",
                  color: "white",
                  padding: "0.8rem 2rem",
                  borderRadius: "30px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span
                  style={{
                    backgroundColor: "#ffd154",
                    color: "#222",
                    width: "1.5rem",
                    height: "1.5rem",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                  }}
                >
                  🛒
                </span>
                Buy Now
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ◀
            </div>

            <div
              style={{
                backgroundColor: "#ebffd4",
                padding: "1rem 1.5rem",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
              <div>Burger</div>
              <div style={{ fontWeight: "bold" }}>$3.25</div>
            </div>
            <div
              style={{
                backgroundColor: "#ffe6f0",
                padding: "1rem 1.5rem",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
              <div>Cake</div>
              <div style={{ fontWeight: "bold" }}>$2.25</div>
            </div>
            <div
              style={{
                backgroundColor: "#fff1e0",
                padding: "1rem 1.5rem",
                borderRadius: "30px",
                textAlign: "center",
              }}
            >
              <div>Salad</div>
              <div style={{ fontWeight: "bold" }}>$5.25</div>
            </div>

            <div
              style={{
                width: "2.5rem",
                height: "2.5rem",
                borderRadius: "50%",
                backgroundColor: "white",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              ▶
            </div>
          </div>
        </div>

        <div
          style={{
            flex: "1",
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://res.cloudinary.com/dpwqggym0/image/upload/v1744543029/istockphoto-2074939734-612x612-removebg-preview_zxqsdx.png"
              alt="Food"
              style={{
                position: "absolute",
                right: "-50%",
                top: "52%",
                transform: "translateY(-50%)",
                height: "180%",
                opacity: "1",
                zIndex: "0",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: "16%",
                top: "52%",
                transform: "translateY(-50%)",
              }}
            >
              <img src="https://res.cloudinary.com/dpwqggym0/image/upload/v1744544113/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table-top-view-flat-lay-removebg-preview_wxrxmd.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
