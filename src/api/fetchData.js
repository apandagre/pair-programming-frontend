const fetchData = async (endpoint, method, body) => {
  try {
    const token =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2hpc2hAZ21haWwuY29tIiwiZXhwIjoxNjkwMTkzNDY0LCJpYXQiOjE2OTAxODk4NjR9.g-Ye1Z7yLI-RS0KPa02Vqn1f9GxsaAMBnKVspnUshRg";
    const response = await fetch(`http://localhost:8080${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
    });

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
