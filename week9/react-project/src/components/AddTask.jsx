function AddTask() {
    return (
      <form>
        <div className="form-control">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label>Date</label>
          <input type="text" />
        </div>
        <button type="submit">Save</button>
      </form>
    );
  }
  
  export default AddTask;