function Header({ appName }) {
    return (
      <header>
        <h1>{appName}</h1>
        <button>Add A Task</button>
      </header>
    );
  }
  
  export default Header;