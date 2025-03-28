import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const task = { title, date };
      
      const response = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error('Failed to add task');
      }

      const createdTask = await response.json();
      console.log('Task created:', createdTask);
      
      // Navigate to the new task's details page
      navigate(`/tasks/${createdTask.id}`);

      // Clear form (optional - since we're navigating away)
      setTitle('');
      setDate('');
      
    } catch (err) {
      console.error('Error adding task:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="date"  // Changed to type="date" for better date input
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddTask;