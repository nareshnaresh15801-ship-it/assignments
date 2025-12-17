import { useState } from "react";

function PasswordMatch() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  return (
    <div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
      </div>

      <div>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
      </div>

      {confirmPassword.length > 0 && (
        <p style={{ color: isMatch ? "green" : "red" }}>
          {isMatch ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}

export default PasswordMatch;