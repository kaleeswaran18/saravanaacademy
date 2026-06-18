import Layout from "../../components/admin/Layout";

function Dashboard() {
  return (
    <Layout>
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>12</h3>
          <p>Total Sliders</p>
        </div>

        <div className="dashboard-card">
          <h3>48</h3>
          <p>Total Gallery</p>
        </div>

        <div className="dashboard-card">
          <h3>5</h3>
          <p>Total Videos</p>
        </div>

        <div className="dashboard-card">
          <h3>125</h3>
          <p>Total Contacts</p>
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;