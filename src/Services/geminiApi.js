import axios from 'axios';

const BASE_URL = 'https://api.gemini.com/v1'; // Replace this with the actual Gemini API base URL

/**
 * Fetches an answer from the Gemini API.
 * @param {string} question - The user's question.
 * @returns {Promise<string>} - The answer from the API.
 */
export const fetchAnswer = async (question) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/ask`, // Update the endpoint if required
      { question },
      {
        headers: {
          Authorization: 'Bearer YOUR_API_KEY', // Replace with your API key
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data.answer; // Update based on the actual API response structure
  } catch (error) {
    console.error('Error fetching answer:', error);
    return 'Sorry, there was an issue connecting to the server.';
  }
};
