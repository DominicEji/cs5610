import React, { useState } from 'react';

function AddTask() {
  // State variables for title and date
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  // Handle input changes
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh

    // Create an object with the form data
    const task = {
      title,
      date,
    };

    // Log the task object to the console
    console.log(task);

    // Clear the form inputs (optional)
    setTitle('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default AddTask;