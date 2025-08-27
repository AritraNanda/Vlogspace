import React, { useState } from 'react';
import axios from 'axios';

function VlogForm({ token }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [feature, setFeature] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setLoading(true);
    
    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/vlogs`,
        { title, author, feature },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle('');
      setAuthor('');
      setFeature('');
      setMessage('Vlog published successfully! 🎉');
    } catch (err) {
      setMessage('Error publishing vlog. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-input"
          placeholder="Enter an engaging title for your vlog"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Author</label>
        <input
          type="text"
          className="form-input"
          placeholder="Your name or pen name"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label className="form-label">Content</label>
        <textarea
          className="form-textarea"
          placeholder="Share your story, experience, or insights here..."
          value={feature}
          onChange={e => setFeature(e.target.value)}
          rows={8}
          required
        />
      </div>
      
      <button 
        type="submit" 
        className="btn btn-primary btn-full"
        disabled={loading}
      >
        {loading ? 'Publishing...' : 'Publish Vlog'}
      </button>
      
      {message && (
        <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>
          {message}
        </div>
      )}
    </form>
  );
}

export default VlogForm;
