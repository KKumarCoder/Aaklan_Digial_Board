export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMobile = (mobile) => {
  const mobileRegex = /^\+?[1-9]\d{1,14}$/;
  return mobileRegex.test(mobile);
};

export const validateOTP = (otp) => {
  return /^\d{6}$/.test(otp);
};

export const validateEnquiryForm = (formData) => {
  const errors = {};

  if (!formData.name || formData.name.trim().length === 0) {
    errors.name = "Name is required";
  }

  if (!formData.email || formData.email.trim().length === 0) {
    errors.email = "Email is required";
  } else if (!validateEmail(formData.email)) {
    errors.email = "Invalid email format";
  }

  if (!formData.mobile || formData.mobile.trim().length === 0) {
    errors.mobile = "Mobile number is required";
  } else if (!validateMobile(formData.mobile)) {
    errors.mobile = "Invalid mobile number format";
  }

  if (!formData.subject || formData.subject.trim().length === 0) {
    errors.subject = "Subject is required";
  }

  if (!formData.message || formData.message.trim().length === 0) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};
