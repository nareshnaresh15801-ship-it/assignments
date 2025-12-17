import { useState } from "react";

function ProfileUpdateForm() {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated profile:", profile);
  };

  return (
    <div style={{ display: "flex", gap: "2rem" }}>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <h3>Update Profile</h3>

        <div>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </div>

        <div>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Bio"
          />
        </div>

        <button type="submit">Save</button>
      </form>

      {/* Live Preview */}
      <div>
        <h3>Live Preview</h3>
        <p><strong>Name:</strong> {profile.name || "—"}</p>
        <p><strong>Email:</strong> {profile.email || "—"}</p>
        <p><strong>Bio:</strong> {profile.bio || "—"}</p>
      </div>
    </div>
  );
}

export default ProfileUpdateForm;