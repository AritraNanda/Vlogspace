import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogModal from './BlogModal';

function HomePage() {
  const [vlogs, setVlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedVlog, setSelectedVlog] = useState(null);

  useEffect(() => {
    fetchVlogs();
  }, []);

  const fetchVlogs = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/vlogs`);
      setVlogs(res.data);
    } catch (err) {
      console.error('Error fetching vlogs:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getExcerpt = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
        <p>Loading amazing vlogs...</p>
      </div>
    );
  }

  return (
    <>
      <section className="hero">
        <h1>Welcome to VlogSpace</h1>
        <p>Discover amazing stories, experiences, and insights from our community of creators</p>
      </section>

      <main className="main-content">
        {vlogs.length === 0 ? (
          <div className="empty-state">
            <h3>No vlogs yet</h3>
            <p>Be the first to share your story with the world!</p>
          </div>
        ) : (
          <div className="blogs-grid">
            {vlogs.map((vlog) => (
              <article 
                key={vlog._id} 
                className="blog-card"
                onClick={() => setSelectedVlog(vlog)}
                style={{ position: 'relative' }}
              >
                {/* Animated blurry background shapes */}
                <span className="animated-blur blur1"></span>
                <span className="animated-blur blur2"></span>
                <span className="animated-blur blur3"></span>
                <div className="blog-content">
                  <h2 className="blog-title">{vlog.title}</h2>
                  <div className="blog-meta">
                    <span className="blog-author">by {vlog.author}</span>
                    <span className="blog-date">{formatDate(vlog.createdAt)}</span>
                  </div>
                  <p className="blog-excerpt">
                    {getExcerpt(vlog.feature)}
                  </p>
                  <div className="read-more">
                    Read full story →
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {selectedVlog && (
        <BlogModal 
          vlog={selectedVlog} 
          onClose={() => setSelectedVlog(null)} 
        />
      )}
    </>
  );
}

export default HomePage;
