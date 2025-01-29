import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const UserData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sessionId = Cookies.get("session_id");

    if (!sessionId) {
      setError("Session ID not found in cookies.");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://web:8000/userdata/${sessionId}`);
        setData(response.data);
      } catch (err) {
        setError(`Error fetching data: ${err.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 border rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-2">User Data</h2>
      {error && <p className="text-red-500">{error}</p>}
      {data ? (
        <pre className="bg-gray-100 p-2 rounded-md">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        !error && <p>Loading...</p>
      )}
    </div>
  );
};

export default UserData;
