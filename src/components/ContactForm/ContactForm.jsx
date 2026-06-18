import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import "./ContactForm.css";

function ContactForm() {
  const [formType] = useState("general");

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    district: "",
    college: "",
    passout: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await axios.post(
        "https://educationtrustnodeone-1.onrender.com/api/student/create",
        formData
      );

      if (res.data.success) {
        toast.success(
          "🎉 Successfully Registered! We will contact you soon."
        );

        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          district: "",
          college: "",
          passout: "",
          message: "",
        });
      }
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Registration Failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">
        <motion.div
          className="contact-form-card glass-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="(123) 456 - 7890"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {formType === "volunteer" ? (
                <>
                  <div className="form-group">
                    <label>Preferred Role</label>
                    <input
                      type="text"
                      placeholder="Event Coordinator, Mentor, etc."
                    />
                  </div>

                  <div className="form-group">
                    <label>Availability</label>
                    <input
                      type="text"
                      placeholder="Weekdays / Weekends"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="form-group">
                    <label>District</label>
                    <input
                      type="text"
                      name="district"
                      placeholder="Madurai"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>College</label>
                    <input
                      type="text"
                      name="college"
                      placeholder="ABC College"
                      value={formData.college}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Passout</label>
                    <input
                      type="number"
                      name="passout"
                      placeholder="2025"
                      value={formData.passout}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}

              <div className="form-group full-width">
                <label>Messaghhhhe</label>

                <textarea
                  rows="5"
                  name="message"
                  placeholder={
                    formType === "volunteer"
                      ? "Tell us why you'd like to volunteer and how you'd like to help"
                      : "Write your message"
                  }
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <motion.button
              className="submit-btn"
              type="submit"
              disabled={loading}
              whileHover={!loading ? { scale: 1.03, y: -2 } : {}}
              whileTap={!loading ? { scale: 0.97 } : {}}
            >
              {loading
                ? "Submitting..."
                : formType === "volunteer"
                ? "Submit Volunteer Inquiry →"
                : "Submit Enquiry →"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactForm;