const API = import.meta.env.VITE_API_URL;

export const fetchData = async (endpoint) => {
  const res = await fetch(`${API}${endpoint}`);
  return res.json();
};

export const postData = async (endpoint, data) => {
  const isForm = data instanceof FormData;

  const res = await fetch(`${API}${endpoint}`, {
    method: "POST",
    headers: isForm ? {} : { "Content-Type": "application/json" },
    body: isForm ? data : JSON.stringify(data),
  });

  return res.json();
};
