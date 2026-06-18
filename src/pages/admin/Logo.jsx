import { useState } from "react";
import Layout from "../../components/admin/Layout";

function Logo() {
const [preview, setPreview] = useState(null);

const handleImageChange = (e) => {
const file = e.target.files[0];


if (file) {
  setPreview(URL.createObjectURL(file));
}


};

const handleSubmit = (e) => {
e.preventDefault();


const formData = new FormData();

formData.append(
  "image",
  document.getElementById("logoImage").files[0]
);

console.log("Upload Logo");


};

return ( <Layout> <div className="admin-card">


    <h2>Logo Management</h2>

    <form onSubmit={handleSubmit}>

      <div className="mb-4">
        <label>
          Upload Logo
        </label>

        <input
          type="file"
          id="logoImage"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control"
        />
      </div>

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="logo-preview"
            style={{
              width: "180px",
              height: "180px",
              objectFit: "contain",
              border: "1px solid #ddd",
              padding: "10px",
              borderRadius: "12px",
            }}
          />
        </div>
      )}

      <button
        type="submit"
        className="primary-btn"
      >
        Update Logo
      </button>

    </form>

  </div>
</Layout>


);
}

export default Logo;
