import { useState } from "react";
import emailjs from "@emailjs/browser";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // HANDLE INPUT
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill in all fields.";
    }
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) {
      return "Invalid email format.";
    }
    return "";
  };

  // SUBMIT
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message.");
    }

    setLoading(false);
  };

  return (
    <div style={{ backgroundColor: "#0f141a", minHeight: "100vh", padding: "60px 0" }}>

      {/* HEADER */}
      <div className="container text-center mb-4">

        <h2 style={{ color: "#7aa78c" }} className="fw-bold">
          Contact & Community Feedback
        </h2>

        <p style={{ color: "#a9b4c0", maxWidth: "700px", margin: "10px auto" }}>
          This platform supports <strong>SDG 11: Sustainable Cities and Communities</strong>.
          You may contact us for feedback, suggestions, or concerns regarding the Baguio City Issue Reporting System.
        </p>

      </div>

      {/* FORM CARD */}
      <div className="container d-flex justify-content-center">

        <div
          style={{
            backgroundColor: "#161d26",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            padding: "30px",
            width: "100%",
            maxWidth: "500px",
            color: "#e6edf3",
          }}
        >

          {/* FORM */}
          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              style={inputStyle}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              style={{ ...inputStyle, height: "120px" }}
            />

            <button
              type="submit"
              disabled={loading}
              style={buttonStyle}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

          </form>

          {/* STATUS */}
          {status && (
            <p className="mt-3 text-center" style={{ color: "#a9b4c0" }}>
              {status}
            </p>
          )}

        </div>

      </div>
    </div>
  );
}

/* 🎨 STYLES */
const inputStyle: React.CSSProperties = {
  width: "100%",
  marginBottom: "12px",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid rgba(255,255,255,0.1)",
  backgroundColor: "#0f141a",
  color: "#e6edf3",
  outline: "none",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#7aa78c",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
};