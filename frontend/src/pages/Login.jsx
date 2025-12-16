import React from "react";

export default function Login() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login Page</h2>

      {/* Google Form iframe */}
      <iframe
        src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"
        width="640"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Login Form"
      >
        Loading…
      </iframe>
    </div>
  );
}
