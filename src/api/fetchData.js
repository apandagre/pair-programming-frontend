const fetchData = async (endpoint, method, body, excludeToken) => {
  try {
    const _token = localStorage.getItem("token");
    const token = `Bearer ${_token}`;
    let headers = {};
    if (excludeToken)
      headers = {
        "Content-Type": "application/json",
      };
    else
      headers = {
        "Content-Type": "application/json",
        Authorization: token,
      };
    const response = await fetch(`http://localhost:8080${endpoint}`, {
      method,
      headers,
      body: body,
    });

    console.log(response);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return error;
  }
};

export default fetchData;
