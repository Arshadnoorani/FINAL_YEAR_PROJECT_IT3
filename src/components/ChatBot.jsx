import React, { useState } from 'react';

const ChatBot = ({ onAnalyze }) => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return alert('Please upload a medical image.');

    const formData = new FormData();
    formData.append('image', image);
    formData.append('text', description || "Describe the medical condition in this image");

    setLoading(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/predict', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to analyze the image.');
      }

      const data = await response.json();

      // Pass response to parent component (e.g., ProfilePage)
      const modelResponse = {
        image,
        prompt: description || "Describe the medical condition in this image",
        answer: data.response
      };
      setResult(modelResponse); // <-- Update UI
      onAnalyze(modelResponse); // <-- Inform parent if needed


      // Reset form
      // setImage(null);
      // setDescription('');
    } catch (err) {
      console.error('Error:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">Upload Medical Image for Analysis</h2>
      <form onSubmit={handleSubmit}

        className="space-y-4">
        <input
          type="file"
          accept="image/*"
          required
          onChange={(e) => setImage(e.target.files[0])}
          className="block w-full text-sm text-gray-700"
        />
        <textarea
          rows="3"
          placeholder="Optional description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-300"
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 disabled:opacity-50"
        >
          {loading ? 'Analyzing...' : 'Analyze Medical Image'}
        </button>
      </form>
      {result && (
        <div className="mt-6 bg-indigo-50 p-4 rounded-xl shadow-inner">
          <h3 className="font-bold text-indigo-700">Prompt:</h3>
          <p className="mb-2 text-gray-800">{result.prompt}</p>
          <h3 className="font-bold text-indigo-700">AI Response:</h3>
          <p className="text-gray-800">{result.answer}</p>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
