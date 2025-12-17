const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Helper function to handle API responses
const handleResponse = async (response) => {
  const contentType = response.headers.get('content-type');
  
  if (!contentType || !contentType.includes('application/json')) {
    throw new Error('Invalid response format from server');
  }
  
  const data = await response.json();
  
  if (!response.ok) {
    const error = new Error(data.error || `HTTP error! status: ${response.status}`);
    error.status = response.status;
    error.code = data.code;
    error.details = data.errors || data.details;
    throw error;
  }
  
  return data;
};

// API service with retry logic
const apiCall = async (endpoint, options = {}, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(`${API_BASE}${endpoint}`, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
      
      return await handleResponse(response);
    } catch (error) {
      // If it's the last retry or not a network error, throw
      if (i === retries - 1 || error.name !== 'TypeError') {
        throw error;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i)));
    }
  }
};

// OTP Services
export const sendOTP = async (mobile) => {
  return apiCall('/enquiries/send-otp', {
    method: 'POST',
    body: JSON.stringify({ mobile })
  });
};

export const verifyOTP = async (token, otp) => {
  return apiCall('/enquiries/verify-otp', {
    method: 'POST',
    body: JSON.stringify({ token, otp })
  });
};

// Enquiry Services
export const submitEnquiry = async (formData, otpToken, otp) => {
  return apiCall('/enquiries/submit', {
    method: 'POST',
    body: JSON.stringify({ ...formData, otpToken, otp })
  });
};

export const getAllEnquiries = async (params = {}) => {
  const { search = '', status = '', page = 1, limit = 20 } = params;
  const queryParams = new URLSearchParams();
  
  if (search) queryParams.append('search', search);
  if (status) queryParams.append('status', status);
  queryParams.append('page', page);
  queryParams.append('limit', limit);
  
  return apiCall(`/enquiries?${queryParams.toString()}`);
};

export const getEnquiryStats = async () => {
  return apiCall('/enquiries/stats');
};

export const getEnquiryById = async (id) => {
  return apiCall(`/enquiries/${id}`);
};

export const updateEnquiryStatus = async (id, status) => {
  return apiCall(`/enquiries/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
};

export const deleteEnquiry = async (id) => {
  return apiCall(`/enquiries/${id}`, {
    method: 'DELETE'
  });
};

// Health check
export const checkServerHealth = async () => {
  try {
    const response = await fetch(`${API_BASE.replace('/api', '')}/health`);
    return await response.json();
  } catch (error) {
    return {
      success: false,
      error: 'Server is unavailable'
    };
  }
};