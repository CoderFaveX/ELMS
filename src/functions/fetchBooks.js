const fetchBooks = async (subject, max, subjectify = true) => {
  try {
    const params = new URLSearchParams();
    if (subject)
      params.append("q", `${subjectify ? "subject:" : ""}${subject}`);
    if (max) params.append("max", max);

    const uri = `https://books-ft.vercel.app/api/books${
      params.toString() ? `?${params}` : ""
    }`;
    console.log("Request URI:", uri);

    const response = await fetch(uri); // Remove `mode: "no-cors"`
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON response
    console.log("Response Data:", data);
    return data;
  } catch (e) {
    console.error("Error fetching books:", e.stack);
    return [];
  }
};
const buildGoogleBooksUrl = (thumbnail, searchQuery) => {
  if (!thumbnail || typeof thumbnail !== "string") {
    throw new Error("Invalid thumbnail URL.");
  }

  // Regular expression to remove any of the specified parameters
  const paramsToRemove = [
    "printsec=frontcover",
    "img=1",
    "zoom=1",
    "edge=curl",
  ];
  const cleanedThumbnail = paramsToRemove.reduce((url, param) => {
    const regex = new RegExp(`[?&]${param}(?=&|$)`);
    return url.replace(regex, "");
  }, thumbnail);

  // Replace "/books/content?" with "/books?" and ensure "https" is replaced with "http"
  return (
    cleanedThumbnail
      .replace("/books/content?", "/books?")
      .replace("https", "http") +
    `&q=${encodeURIComponent(searchQuery)}&hl=&cd=1&redir_esc=y`
  );
};

export { fetchBooks, buildGoogleBooksUrl };
