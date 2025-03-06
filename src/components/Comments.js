import React, { useState } from 'react';

function Comments({ movieId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const addComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, text: newComment }]);
      setNewComment('');
    }
  };

  return (
    <div className="comments">
      <h4>Comentários</h4>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.text}</li>
        ))}
      </ul>
      <textarea
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Adicione um comentário..."
      />
      <button onClick={addComment}>Enviar</button>
    </div>
  );
}

export default Comments;
