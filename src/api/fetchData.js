const fetchData = async (endpoint, method, body) => {
  try {
    const token =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2hpc2hAZ21haWwuY29tIiwiZXhwIjoxNjkwMjA0Mzk0LCJpYXQiOjE2OTAyMDA3OTR9.I-GRpOLXXOhUrHP43tK7incQir_nXwiPQic_cRFP70Y";
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
