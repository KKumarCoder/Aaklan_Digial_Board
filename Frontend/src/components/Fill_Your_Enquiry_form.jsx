import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  Send,
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
  Clock,
  Shield,
  AlertCircle,
} from "lucide-react";

// API base URL - update this based on your setup
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const Fill_Your_Enquiry_form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [otp, setOtp] = useState("");
  const [otpToken, setOtpToken] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [otpCountdown, setOtpCountdown] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [devMode, setDevMode] = useState(false);
  const [devOTP, setDevOTP] = useState("");

  useEffect(() => {
    let timer;
    if (otpCountdown > 0) {
      timer = setTimeout(() => setOtpCountdown(otpCountdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [otpCountdown]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      setMessageCount(value.length);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((prev) => ({
      ...prev,
      mobile: value,
    }));
  };

  const handleSendOTP = async () => {
    if (!formData.mobile || formData.mobile.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/enquiries/request-otp`,
        {
          mobile: formData.mobile,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        setOtpToken(response.data.otpToken);
        setIsOtpSent(true);
        setOtpCountdown(300); // 5 minutes

        if (response.data.devMode) {
          setDevMode(true);
          setDevOTP(response.data.otp);
          toast.success(`OTP sent (Dev Mode): ${response.data.otp}`, {
            duration: 6000,
            icon: "🔧",
          });
        } else {
          setDevMode(false);
          toast.success("OTP sent to your mobile number!");
        }
      } else {
        toast.error(response.data.message || "Failed to send OTP");
      }
    } catch (error) {
      console.error("OTP Request Error:", error);
      toast.error(
        error.response?.data?.message ||
          error.message ||
          "Failed to send OTP. Please check your internet connection."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a 6-digit OTP");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/enquiries/verify-otp`,
        {
          otpToken,
          otp,
          mobile: formData.mobile,
        }
      );

      if (response.data.success) {
        setIsOtpVerified(true);
        toast.success("Mobile number verified successfully! ✅");
      } else {
        toast.error(response.data.message || "Invalid OTP");
      }
    } catch (error) {
      console.error("OTP Verification Error:", error);
      toast.error(
        error.response?.data?.message ||
          "Invalid or expired OTP. Please request a new one."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!formData.mobile || formData.mobile.length < 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      toast.error("Subject must be at least 5 characters");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters");
      return;
    }
    if (!isOtpVerified) {
      toast.error("Please verify your mobile number with OTP");
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/enquiries/submit`,
        {
          ...formData,
          otpToken,
          otp,
        }
      );

      if (response.data.success) {
        toast.success(
          "Enquiry submitted successfully! We'll contact you soon.",
          {
            duration: 5000,
            icon: "🎉",
          }
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          subject: "",
          message: "",
        });
        setOtp("");
        setIsOtpSent(false);
        setIsOtpVerified(false);
        setOtpToken("");
        setMessageCount(0);
        setDevMode(false);
        setDevOTP("");
        setOtpCountdown(0);
      } else {
        toast.error(response.data.message || "Failed to submit enquiry");
      }
    } catch (error) {
      console.error("Submit Error:", error);

      if (error.response?.data?.errors) {
        // Handle validation errors
        error.response.data.errors.forEach((err) => {
          toast.error(err);
        });
      } else {
        toast.error(
          error.response?.data?.message ||
            "Failed to submit enquiry. Please try again."
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const formatMobile = (mobile) => {
    if (!mobile) return "";
    if (mobile.length === 10) {
      return mobile.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3");
    }
    return mobile;
  };

  const handleResendOTP = () => {
    if (otpCountdown > 0) {
      toast.error(`Please wait ${otpCountdown} seconds before resending OTP`);
      return;
    }
    handleSendOTP();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-4">
            <MessageSquare className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
          </div>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            We'd love to hear from you. Send us your enquiry and we'll respond
            within 24-48 hours.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Enquiry Form
            </h2>
            <p className="text-gray-600">
              Please fill in all fields and verify your mobile number with OTP
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline w-4 h-4 mr-1 text-gray-500" />
                Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="Your full name"
                disabled={isLoading}
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="inline w-4 h-4 mr-1 text-gray-500" />
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@example.com"
                disabled={isLoading}
              />
            </div>

            {/* Mobile Field with OTP */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="inline w-4 h-4 mr-1 text-gray-500" />
                  Mobile Number *
                </label>
                <div className="flex gap-3">
                  <div className="relative flex-1">
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                      +91
                    </div>
                    <input
                      type="text"
                      name="mobile"
                      value={formatMobile(formData.mobile)}
                      onChange={handleMobileChange}
                      required
                      maxLength="12"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      placeholder="98765 43210"
                      disabled={isOtpVerified || isLoading}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendOTP}
                    disabled={
                      !formData.mobile ||
                      formData.mobile.length < 10 ||
                      otpCountdown > 0 ||
                      isOtpVerified ||
                      isLoading
                    }
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      !formData.mobile ||
                      formData.mobile.length < 10 ||
                      otpCountdown > 0 ||
                      isOtpVerified ||
                      isLoading
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {otpCountdown > 0
                      ? `${Math.floor(otpCountdown / 60)
                          .toString()
                          .padStart(2, "0")}:${(otpCountdown % 60)
                          .toString()
                          .padStart(2, "0")}`
                      : "Send OTP"}
                  </button>
                </div>
              </div>

              {/* OTP Input Section */}
              {isOtpSent && !isOtpVerified && (
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-blue-800 mb-1">
                        Enter 6-digit OTP sent to{" "}
                        <span className="font-bold">
                          +91 {formatMobile(formData.mobile)}
                        </span>
                      </p>
                      <p className="text-xs text-blue-600 mb-3">
                        OTP expires in {Math.floor(otpCountdown / 60)}:
                        {(otpCountdown % 60).toString().padStart(2, "0")}
                      </p>

                      {devMode && devOTP && (
                        <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
                          <p className="text-xs text-yellow-800 font-medium">
                            🔧 Dev Mode OTP:{" "}
                            <span className="font-bold">{devOTP}</span>
                          </p>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1">
                          <input
                            type="text"
                            value={otp}
                            onChange={(e) =>
                              setOtp(
                                e.target.value.replace(/\D/g, "").slice(0, 6)
                              )
                            }
                            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg font-mono"
                            placeholder="123456"
                            maxLength="6"
                            disabled={isLoading}
                          />
                        </div>
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={handleVerifyOTP}
                            disabled={!otp || otp.length !== 6 || isLoading}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                              !otp || otp.length !== 6 || isLoading
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                          >
                            Verify OTP
                          </button>
                          <button
                            type="button"
                            onClick={handleResendOTP}
                            disabled={otpCountdown > 0 || isLoading}
                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                              otpCountdown > 0 || isLoading
                                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                                : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                            }`}
                          >
                            Resend
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* OTP Verified Status */}
              {isOtpVerified && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-green-800">
                        ✅ Mobile number verified successfully!
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        Your mobile +91 {formatMobile(formData.mobile)} is
                        verified and ready for submission
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Subject Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                placeholder="What is this enquiry about?"
                disabled={isLoading}
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline w-4 h-4 mr-1 text-gray-500" />
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                maxLength={5000}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Tell us more about your enquiry..."
                disabled={isLoading}
              />
              <div className="flex justify-between mt-2">
                <span
                  className={`text-sm ${
                    messageCount > 5000 ? "text-red-500" : "text-gray-500"
                  }`}
                >
                  {messageCount}/5000 characters
                </span>
                <span
                  className={`text-sm ${
                    formData.message.length < 10
                      ? "text-red-500"
                      : "text-gray-500"
                  }`}
                >
                  {formData.message.length < 10
                    ? `${10 - formData.message.length} more characters required`
                    : "✓ Minimum length met"}
                </span>
              </div>
            </div>

            {/* Validation Summary */}
            {formData.name &&
              formData.email &&
              formData.mobile &&
              formData.subject &&
              formData.message && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Form Status:
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          formData.name.trim() ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        Name {formData.name.trim() ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          /\S+@\S+\.\S+/.test(formData.email)
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        Email {/\S+@\S+\.\S+/.test(formData.email) ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          formData.mobile.length === 10
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        Mobile {formData.mobile.length === 10 ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          formData.subject.trim().length >= 5
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        Subject{" "}
                        {formData.subject.trim().length >= 5 ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          formData.message.trim().length >= 10
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        Message{" "}
                        {formData.message.trim().length >= 10 ? "✓" : "✗"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          isOtpVerified ? "bg-green-500" : "bg-red-500"
                        }`}
                      ></div>
                      <span className="text-xs text-gray-600">
                        OTP Verification {isOtpVerified ? "✓" : "✗"}
                      </span>
                    </div>
                  </div>
                </div>
              )}

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={!isOtpVerified || isLoading}
                className={`w-full py-4 text-white rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-all duration-200 ${
                  !isOtpVerified || isLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Enquiry
                  </>
                )}
              </button>

              {!isOtpVerified && (
                <p className="text-sm text-red-500 mt-2 text-center">
                  ⚠️ Please verify your mobile number with OTP before submitting
                </p>
              )}
            </div>
          </form>

          {/* Privacy Note */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-green-600" />
              <p className="text-sm font-medium text-gray-700">
                Your Privacy is Protected
              </p>
            </div>
            <p className="text-xs text-gray-500 text-center">
              🔒 Your information will be kept confidential and used only to
              respond to your enquiry. We do not share your details with third
              parties.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <AlertCircle className="w-3 h-3 text-blue-500" />
              <p className="text-xs text-blue-600">
                Need help? Contact support at
                krishnakumarsnm004_db_user@example.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fill_Your_Enquiry_form;
