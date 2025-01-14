import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieReader = () => {
  const [cookies, setCookies] = useState({}); // State to store cookies

  useEffect(() => {
    // Fetch all cookies when the component mounts
    const allCookies = Cookies.get(); // Returns all cookies as an object
    setCookies(allCookies); // Update state with cookies
  }, []);

  return (
    <div>
      <h1>Cookie Reader</h1>
      <p>Below are the cookies retrieved from your browser:</p>
      <ul>
        {Object.entries(cookies).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CookieReader;

