import facade from '../util/apiFacade';
function AdminPage() {
    return (
      <div id="subpage">
        <h1>Admin page</h1>
        <p>This is for Admins only.</p>
        {facade.getUserRoles() === 'admin' ? (
          <p>Admin role activated</p>
        ) : (
          <p>You are not an admin!</p>
        )}
      </div>
    );
  }
  
  export default AdminPage;