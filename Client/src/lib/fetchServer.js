export const generalPostCall = async (reqData, url) => {
  

  
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(reqData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    const data = await response.json();
  
    if (!response.ok) {
      let errorMessage;
      errorMessage = data?.error;
  
      throw new Error(errorMessage || "Something went wrong");
    }
  
    return data;
  };