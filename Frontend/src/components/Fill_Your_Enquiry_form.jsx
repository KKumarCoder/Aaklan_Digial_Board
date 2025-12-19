import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Fill_Your_Enquiry_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [timer, setTimer] = useState(0);
  const [isResendEnabled, setIsResendEnabled] = useState(true);

  const navigate = useNavigate();
  const API_URL = "http://localhost:5000/api/enquiries";

  // Timer for OTP resend
  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendEnabled(true);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear errors when user types
    if (error) setError("");
  };

  const formatPhoneNumber = (phone) => {
    // Ensure phone starts with +91
    let formatted = phone.trim();
    if (!formatted.startsWith("+")) {
      if (formatted.startsWith("91")) {
        formatted = "+" + formatted;
      } else if (formatted.startsWith("0")) {
        formatted = "+91" + formatted.substring(1);
      } else {
        formatted = "+91" + formatted;
      }
    }
    return formatted;
  };

  const handleSendOTP = async () => {
    if (!formData.phone) {
      setError("Phone number is required");
      return;
    }

    if (!formData.email) {
      setError("Email is required to send OTP");
      return;
    }

    setOtpLoading(true);
    setError("");

    try {
      const formattedPhone = formatPhoneNumber(formData.phone);

      const response = await axios.post(`${API_URL}/send-otp`, {
        phone: formattedPhone,
      });

      if (response.data.success) {
        setOtpSent(true);
        setIsResendEnabled(false);
        setTimer(60); // 60 seconds cooldown
        setSuccess("OTP sent successfully! Check your phone.");

        // Development mode: Show OTP in alert
        if (response.data.debug_otp) {
          alert(
            `Development Mode OTP: ${response.data.debug_otp}\nUse this OTP to proceed.`
          );
        }

        setTimeout(() => setSuccess(""), 5000);
      }
    } catch (err) {
      setError(
        err.response?.data?.error || "Failed to send OTP. Please try again."
      );
    } finally {
      setOtpLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (!isResendEnabled) return;
    await handleSendOTP();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!otpSent) {
      setError("Please verify your phone number first");
      return;
    }

    if (!otp) {
      setError("Please enter OTP");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const formattedPhone = formatPhoneNumber(formData.phone);

      const response = await axios.post(`${API_URL}/submit`, {
        ...formData,
        phone: formattedPhone,
        otp: otp,
      });

      if (response.data.success) {
        setSuccess(
          "🎉 Thank you for your enquiry! We will contact you within 24-48 hours."
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setOtp("");
        setOtpSent(false);
        setTimer(0);

        // Redirect after 3 seconds
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.error ||
        "Failed to submit enquiry. Please try again.";
      setError(errorMsg);

      // If OTP error, allow resend
      if (errorMsg.includes("OTP") || errorMsg.includes("expired")) {
        setOtpSent(false);
        setOtp("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Get in Touch</h1>
        <p className="text-gray-600">
          We'd love to hear from you. Send us your enquiry and we'll respond
          within 24-48 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Enquiry Form
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Please fill in all fields and verify your mobile number with OTP
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Messages */}
              {success && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      ✓
                    </div>
                    <p className="text-green-700">{success}</p>
                  </div>
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-3">
                      !
                    </div>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              )}

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone with OTP */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    disabled={otpSent}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors disabled:bg-gray-100"
                    placeholder="+91 83402 02627"
                  />
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={
                      otpLoading ||
                      !formData.phone ||
                      !formData.email ||
                      !isResendEnabled
                    }
                    className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors whitespace-nowrap"
                  >
                    {otpLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-4 w-4 mr-2 text-white"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : timer > 0 ? (
                      `Resend in ${timer}s`
                    ) : (
                      "Send OTP"
                    )}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Enter Indian mobile number with country code (+91)
                </p>
              </div>

              {/* OTP Input */}
              {otpSent && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter OTP *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => {
                        const value = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 6);
                        setOtp(value);
                      }}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-center text-lg tracking-widest"
                      placeholder="Enter 6-digit OTP"
                      maxLength="6"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        disabled={!isResendEnabled}
                        className="text-sm text-blue-600 hover:text-blue-800 disabled:text-gray-400"
                      >
                        {timer > 0 ? `Resend in ${timer}s` : "Resend OTP"}
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the 6-digit OTP sent to your phone
                  </p>
                </div>
              )}

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="What is this enquiry about?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  maxLength="5000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Tell us more about your enquiry..."
                />
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>Maximum 5000 characters</span>
                  <span>{formData.message.length}/5000</span>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading || !otpSent || !otp}
                  className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-md"
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <span className="mr-2">✅</span>
                      Submit Enquiry
                    </>
                  )}
                </button>
              </div>
            </form>

            <p className="mt-6 text-xs text-gray-500 text-center">
              Your information will be kept confidential and used only to
              respond to your enquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fill_Your_Enquiry_form;
