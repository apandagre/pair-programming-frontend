const fetchData = async (endpoint, method, body, excludeToken) => {
  try {
    const token =
      "Bearer eyJ0eXAiOiJKV1QiLCJhciOiJIUzI1NiJ9.eyJpc3MiOiJhc2hpc2hAZ21haWwuY29tIiwiZXhwIjoxNjkwMzU1OTE0LCJpYXQiOjE2OTAzNTIzMTR9.CcL4bEBauN9kCEhI0p5MPAhsd_tvrHTuX41tUMYXNFM";
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
