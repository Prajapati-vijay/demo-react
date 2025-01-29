import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const CookieReader = () => {
  const [cookies, setCookies] = useState({}); // State to store cookies

  useEffect(() => {
    // Fetch specific cookies when the component mounts
    const specificCookies = {
      authorize: Cookies.get("authorize"),
      username: Cookies.get("username"),
      email: Cookies.get("email"),
      sessionid:Cookies.get("sessionid"),
    };
    setCookies(specificCookies); // Update state with specific cookies
  }, []);

  return (
    <div>
      <h1>Cookie Reader</h1>
      <p>Below are the specific cookies retrieved from your browser:</p>
      <ul>
        {Object.entries(cookies).map(([key, value]) =>
          value ? (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ) : (
            <li key={key}>
              <strong>{key}:</strong> Not set
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default CookieReader;
