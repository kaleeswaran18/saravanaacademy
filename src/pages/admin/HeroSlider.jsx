import { useState } from "react";
import Layout from "../../components/admin/Layout";

function HeroSlider() {
const [preview, setPreview] = useState(null);

// Dummy Data
const [sliderData] = useState([
{
_id: 1,
heading: "Education Support",
content: "Supporting students with placement training.",
image:
"https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
},
{
_id: 2,
heading: "Medical Camp",
content: "Helping poor families through medical camps.",
image:
"https://images.unsplash.com/photo-1576091160550-2173dba999ef",
},
]);

const handleImageChange = (e) => {
const file = e.target.files[0];

```
if (file) {
  setPreview(URL.createObjectURL(file));
}
```

};

const handleSubmit = (e) => {
e.preventDefault();

```
const formData = new FormData();

formData.append("heading", e.target.heading.value);
formData.append("content", e.target.content.value);
formData.append("image", e.target.image.files[0]);

console.log(formData);

// axios.post("/api/slider", formData)
```

};

return ( <Layout>
{/* Form */}


  <div className="admin-card">

    <h2 className="mb-4">
      Hero Slider Management
    </h2>

    <form onSubmit={handleSubmit}>

      <div className="mb-3">
        <label className="form-label">
          Heading
        </label>

        <input
          type="text"
          name="heading"
          className="form-control"
          placeholder="Enter Heading"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">
          Content
        </label>

        <textarea
          name="content"
          rows="4"
          className="form-control"
          placeholder="Enter Content"
        ></textarea>
      </div>

      <div className="mb-4">
        <label className="form-label">
          Upload Image
        </label>

        <input
          type="file"
          name="image"
          accept="image/*"
          className="form-control"
          onChange={handleImageChange}
        />
      </div>

      {preview && (
        <div className="mb-4">
          <img
            src={preview}
            alt="preview"
            style={{
              width: "250px",
              borderRadius: "12px",
              border: "1px solid #ddd",
            }}
          />
        </div>
      )}

      <button
        className="primary-btn"
        type="submit"
      >
        Save Slider
      </button>

    </form>

  </div>

  {/* Table */}

  <div className="admin-card mt-4">

    <h3 className="mb-4">
      Slider List
    </h3>

    <div className="table-responsive">

      <table className="table table-bordered table-hover align-middle">

        <thead className="table-dark">

          <tr>

            <th>S.No</th>

            <th>Image</th>

            <th>Heading</th>

            <th>Content</th>

            <th width="180">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {sliderData.map((item, index) => (

            <tr key={item._id}>

              <td>{index + 1}</td>

              <td>

                <img
                  src={item.image}
                  alt=""
                  width="120"
                  height="70"
                  style={{
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

              </td>

              <td>{item.heading}</td>

              <td>{item.content}</td>

              <td>

                <button className="btn btn-warning btn-sm me-2">
                  Edit
                </button>

                <button className="btn btn-danger btn-sm">
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

</Layout>


);
}

export default HeroSlider;
