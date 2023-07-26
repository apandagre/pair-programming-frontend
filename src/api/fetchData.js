const fetchData = async (endpoint, method, body) => {
  try {
    const token =
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJhc2hpc2hAZ21haWwuY29tIiwiZXhwIjoxNjkwMzQ5MzMyLCJpYXQiOjE2OTAzNDU3MzJ9.vC9np03QPlKv-pw8BopXwMQk-96kWZTKvTO6vFQD-0k";
    const response = await fetch(`http://localhost:8080${endpoint}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: body,
    });

    console.log(response);

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchData;
