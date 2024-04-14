function fetchData(url, callback) {
    // Simulate asynchronous operation (e.g., network request)
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" };
      callback(data); // Invoke the callback function with the data
    }, 2000); // Simulate a 2-second delay
  }
  
  function displayData(data) {
    console.log(data.message); // Output: Data fetched successfully!
  }
  
  fetchData("https://example.com/data", displayData); // Pass displayData as the callback
  