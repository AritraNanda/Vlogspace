import React from 'react';

function BlogModal({ vlog, onClose }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>VlogSpace</h2>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">
          <h1 className="modal-blog-title">{vlog.title}</h1>
          <div className="modal-blog-meta">
            <div>
              <strong>Author:</strong> {vlog.author}
            </div>
            <div>
              <strong>Published:</strong> {formatDate(vlog.createdAt)}
            </div>
          </div>
          <div className="modal-blog-content">
            <p>{vlog.feature}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogModal;
