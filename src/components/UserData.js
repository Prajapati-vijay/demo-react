import React, { useState, useEffect } from "react";

const UserData = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://prod-quant.vaneck.com/user_data/", {
      method: "GET",
      credentials: "include", // 🔥 Ensures session cookies are sent
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error ${response.status}: Unauthorized`);
        }
        return response.json();
      })
      .then((data) => setUser(data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <div>
      <h1>User Data From Cookie</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : user ? (
        <pre>{JSON.stringify(user, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserData;
