import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getIssues } from "../services/issueService";
import type { Issue } from "../services/issueService";

export default function Home() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadIssues = async () => {
      const data = await getIssues();
      setIssues(data);
    };

    loadIssues();
  }, []);

  return (
    <div style={{ backgroundColor: "#0f141a" }}>

      {/* HERO SECTION */}
      <section
        style={{
          background:
            "linear-gradient(rgba(15,20,26,0.85),rgba(15,20,26,0.85)), url('https://baguio.ph/wp-content/uploads/2020/10/Baguio-City-Colorful-City-View.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#e6edf3",
          padding: "90px 0",
        }}
      >
        <div className="container text-center">

          <h1 className="fw-bold display-5">
            Baguio City Issue Reporting Platform
          </h1>

          <p className="lead mt-3" style={{ color: "#a9b4c0" }}>
            A civic reporting system for residents of <strong>Baguio City, Philippines</strong>
            to report issues such as road damage, garbage problems, flooding, and public safety concerns.
          </p>

          <Link
            to="/create"
            className="btn mt-3"
            style={{
              backgroundColor: "#7aa78c",
              border: "none",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Report an Issue
          </Link>

        </div>
      </section>

      {/* SDG + PURPOSE */}
      <section style={{ backgroundColor: "#0f141a", padding: "70px 0" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            Supporting SDG 11: Sustainable Cities and Communities
          </h2>

          <p
            className="mt-3"
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            This platform is designed to help improve urban living in
            <strong> Baguio City, Philippines</strong>. It allows citizens to
            report community issues such as road damage, waste management
            problems, flooding, and public safety concerns.
          </p>

          <p
            className="mt-3"
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            By encouraging civic participation, the system promotes cleaner
            environments, safer communities, and faster government response
            aligned with the United Nations Sustainable Development Goals.
          </p>

        </div>
      </section>

      {/* CITY CAROUSEL */}
      <section style={{ padding: "70px 0", backgroundColor: "#161d26" }}>
        <div className="container">

          <h2
            className="text-center fw-bold mb-4"
            style={{ color: "#4a78d0" }}
          >
            Discover Baguio City
          </h2>

          <div
            id="cityCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >

            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#cityCarousel"
                data-bs-slide-to="0"
                className="active"
              ></button>

              <button
                type="button"
                data-bs-target="#cityCarousel"
                data-bs-slide-to="1"
              ></button>

              <button
                type="button"
                data-bs-target="#cityCarousel"
                data-bs-slide-to="2"
              ></button>
            </div>

            <div className="carousel-inner rounded-4 overflow-hidden">

              <div className="carousel-item active">
                <img
                  src="https://www.shutterstock.com/image-photo/la-trinidad-benguet-baguio-philiphines-600nw-2695013617.jpg"
                  className="d-block w-100"
                  style={{ height: "420px", objectFit: "cover" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://philippineshiddengems.com/wp-content/uploads/2025/01/tourist-spots-in-baguio_mines-view-park-in-baguio_kristine.jpg"
                  className="d-block w-100"
                  style={{ height: "420px", objectFit: "cover" }}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="https://www.undp.org/sites/g/files/zskgke326/files/styles/scaled_image_large/public/2025-06/eu-gepp-wed_2025_1_baguios_busy_mountainscape_against_the_city_sunset-photo_courtesy_of_baguio_city_planning_development_and_sustainability_office_cpdso.png"
                  className="d-block w-100"
                  style={{ height: "420px", objectFit: "cover" }}
                />
              </div>

            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#cityCarousel"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#cityCarousel"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>
      </section>

      {/* ABOUT PLATFORM */}
      <section style={{ backgroundColor: "#0f141a", padding: "70px 0" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            What is this platform?
          </h2>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "15px auto",
            }}
          >
            This system allows citizens of Baguio City to report issues in their
            surroundings. Reports are stored in a centralized database and can be
            reviewed by administrators or local authorities.
          </p>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "0 auto",
            }}
          >
            It promotes faster response, better city management, and active
            community participation for a smarter and more sustainable city.
          </p>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "70px 0", backgroundColor: "#161d26" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            How It Works
          </h2>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "15px auto 40px",
            }}
          >
            Every submitted report follows a structured process to help ensure
            city concerns are monitored and resolved efficiently.
          </p>

          <div className="row">

            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100 rounded"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>1. Report</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Citizens submit concerns such as damaged roads, flooding,
                  waste issues, or safety hazards using an online form.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100 rounded"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>2. Monitor</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Reports are stored in the database and tracked through status
                  updates such as Pending or Resolved.
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4">
              <div
                className="p-4 h-100 rounded"
                style={{ backgroundColor: "#0f141a" }}
              >
                <h5 style={{ color: "#4a78d0" }}>3. Resolve</h5>
                <p style={{ color: "#a9b4c0" }}>
                  Authorities review issues and take action, improving service
                  delivery and accountability.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding: "70px 0", backgroundColor: "#0f141a" }}>
        <div className="container text-center">

          <h2 className="fw-bold" style={{ color: "#7aa78c" }}>
            Why This Matters
          </h2>

          <p
            style={{
              color: "#a9b4c0",
              maxWidth: "850px",
              margin: "15px auto 40px",
            }}
          >
            Baguio City continues to grow, and digital citizen reporting helps
            create a cleaner, safer, and more efficient urban environment.
          </p>

          <div className="row">

            <div className="col-md-4 mb-4">
              <h6 style={{ color: "#e6edf3" }}>🏙️ Better Governance</h6>
              <p style={{ color: "#a9b4c0" }}>
                Helps officials identify urgent community issues faster.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 style={{ color: "#e6edf3" }}>🤝 Citizen Participation</h6>
              <p style={{ color: "#a9b4c0" }}>
                Encourages residents to actively improve their neighborhoods.
              </p>
            </div>

            <div className="col-md-4 mb-4">
              <h6 style={{ color: "#e6edf3" }}>⚡ Faster Response</h6>
              <p style={{ color: "#a9b4c0" }}>
                Digital reporting reduces delays and improves response time.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* REPORT PREVIEW */}
      <section style={{ padding: "60px 0", backgroundColor: "#161d26" }}>
        <div className="container text-center">

          <h2 style={{ color: "#4a78d0" }}>
            Recent Reports in Baguio City
          </h2>

          <p style={{ color: "#a9b4c0" }}>
            Total Reports Submitted: <strong>{issues.length}</strong>
          </p>

        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#4a78d0",
          color: "white",
          padding: "60px 0",
        }}
      >
        <div className="container text-center">

          <h2 className="fw-bold">Be Part of the Solution</h2>

          <p className="mt-2">
            Help improve Baguio City through community reporting.
          </p>

          <Link
            to="/create"
            className="btn mt-3"
            style={{
              backgroundColor: "#7aa78c",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
            }}
          >
            Report an Issue Now
          </Link>

        </div>
      </section>

    </div>
  );
}