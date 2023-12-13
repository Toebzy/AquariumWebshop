function AdminPage({ isAdmin }) {
    return (
      <div id="subpage">
        <h1>Admin page</h1>
        <p>This is for Admins only.</p>
        {isAdmin ? (
          <p>Admin role activated</p>
        ) : (
          <p>You are not an admin!</p>
        )}
      </div>
    );
  }
  
  export default AdminPage;