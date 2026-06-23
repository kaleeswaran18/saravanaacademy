import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import "./ContactForm.css";

/* ─── Responsive Toast Portal ─── */
function ToastPortal({ toasts, onDismiss }) {
  const isMobile = window.innerWidth <= 576;

  return createPortal(
    <>
      <style>{`
        .cf-toast-wrap {
          position: fixed;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999999;
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: min(420px, calc(100vw - 32px));
          pointer-events: none;
        }
        @media (max-width: 576px) {
          .cf-toast-wrap {
            bottom: calc(24px + env(safe-area-inset-bottom));
            top: auto;
            flex-direction: column-reverse;
          }
        }
        @media (min-width: 577px) {
          .cf-toast-wrap {
            top: 24px;
          }
        }
        .cf-toast {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 500;
          pointer-events: all;
          box-shadow: 0 8px 28px rgba(0,0,0,0.22);
          font-family: inherit;
          line-height: 1.4;
          word-break: break-word;
        }
        .cf-toast.success {
          background: #1a2e1a;
          color: #7ee87e;
          border: 1px solid #2d4a2d;
        }
        .cf-toast.error {
          background: #2e1a1a;
          color: #f09595;
          border: 1px solid #4a2d2d;
        }
        .cf-toast-icon { font-size: 20px; flex-shrink: 0; }
        .cf-toast-msg { flex: 1; }
        .cf-toast-close {
          background: none;
          border: none;
          cursor: pointer;
          color: inherit;
          opacity: 0.65;
          font-size: 16px;
          padding: 2px 4px;
          flex-shrink: 0;
          line-height: 1;
        }
        .cf-toast-close:hover { opacity: 1; }
      `}</style>

      <div className="cf-toast-wrap">
        <AnimatePresence>
          {toasts.map(({ id, type, msg }) => (
            <motion.div
              key={id}
              className={`cf-toast ${type}`}
              initial={isMobile
                ? { opacity: 0, y: 40 }
                : { opacity: 0, y: -20 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={isMobile
                ? { opacity: 0, y: 40 }
                : { opacity: 0, y: -16 }
              }
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              layout
            >
              <span className="cf-toast-icon">
                {type === "success" ? "✅" : "❌"}
              </span>
              <span className="cf-toast-msg">{msg}</span>
              <button
                className="cf-toast-close"
                onClick={() => onDismiss(id)}
                aria-label="Dismiss"
              >
                ✕
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>,
    document.body
  );
}

/* ─── Contact Form ─── */
function ContactForm() {
  const [formType] = useState("general");
  const [loading, setLoading] = useState(false);
  const [toasts, setToasts] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    district: "",
    college: "",
    passout: "",
    message: "",
  });

  const showToast = (type, msg) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, msg }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  };

  const dismissToast = (id) =>
    setToasts((prev) => prev.filter((t) => t.id !== id));

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const digits = formData.phoneNumber.replace(/\D/g, "");
    if (digits.length !== 10) {
      showToast("error", "Phone number must be exactly 10 digits.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "https://educationtrustnodeone-1.onrender.com/api/student/create",
        formData
      );
      if (res.data.success) {
        showToast("success", "🎉 Successfully Registered! We will contact you soon.");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          district: "",
          college: "",
          passout: "",
          message: "",
        });
      } else {
        showToast("error", res.data.message || "Registration Failed!");
      }
    } catch (err) {
      showToast("error", err.response?.data?.message || "Registration Failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastPortal toasts={toasts} onDismiss={dismissToast} />

      <section className="contact-form-section">
        <div className="contact-form-wrapper">
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-grid">

                <div className="form-group">
                  <label>Full name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <i className="ti ti-user field-icon" aria-hidden="true" />
                </div>

                <div className="form-group">
                  <label>Phone number</label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    placeholder="98765 43210"
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setFormData({ ...formData, phoneNumber: val });
                    }}
                    maxLength={10}
                    required
                  />
                  <i className="ti ti-phone field-icon" aria-hidden="true" />
                </div>

                <div className="form-group full-width">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <i className="ti ti-mail field-icon" aria-hidden="true" />
                </div>

                {formType === "volunteer" ? (
                  <>
                    <div className="form-group">
                      <label>Preferred role</label>
                      <input type="text" placeholder="Event Coordinator, Mentor, etc." />
                      <i className="ti ti-briefcase field-icon" aria-hidden="true" />
                    </div>
                    <div className="form-group">
                      <label>Availability</label>
                      <input type="text" placeholder="Weekdays / Weekends" />
                      <i className="ti ti-clock field-icon" aria-hidden="true" />
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
                      <i className="ti ti-map-pin field-icon" aria-hidden="true" />
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
                      <i className="ti ti-school field-icon" aria-hidden="true" />
                    </div>

                    <div className="form-group">
                      <label>Passout year</label>
                      <input
                        type="number"
                        name="passout"
                        placeholder="2025"
                        value={formData.passout}
                        onChange={handleChange}
                        required
                      />
                      <i className="ti ti-calendar field-icon" aria-hidden="true" />
                    </div>
                  </>
                )}

                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder={
                      formType === "volunteer"
                        ? "Tell us why you'd like to volunteer and how you'd like to help"
                        : "Write your message here..."
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
                {loading ? (
                  <>
                    <span className="spinner" />
                    Submitting...
                  </>
                ) : formType === "volunteer" ? (
                  <>Submit volunteer inquiry <i className="ti ti-arrow-right" aria-hidden="true" /></>
                ) : (
                  <>Submit enquiry <i className="ti ti-arrow-right" aria-hidden="true" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ContactForm;
