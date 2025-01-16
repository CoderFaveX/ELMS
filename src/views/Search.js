import { useState } from "react";
import Navbar8 from "../components/navbar8";
import { FaEye, FaSearch } from "react-icons/fa";
import "./search.css";
import "../components/hero17.css";
import { buildGoogleBooksUrl, fetchBooks } from "../functions/fetchBooks";

const Search = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // Added state
  const [max, setMax] = useState(20);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    if (search) {
      try {
        setIsLoading(true);
        setHasSearched(true); // Mark that a search has been performed
        const searchResults = await fetchBooks(
          search.toLowerCase(),
          max,
          false
        );
        setResults(searchResults);
      } catch (e) {
        console.error(e.stack);
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please enter a keyword/phrase");
      setResults([]);
      return;
    }
  };

  return (
    <>
      <Navbar8 />
      <form onSubmit={handleSubmit}>
        <div className="SearchInput">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search for a specific book or genre"
          />
          <button type="submit" style={{ cursor: "pointer" }}>
            <FaSearch />
          </button>
        </div>
      </form>
      <div className="gridResults">
        {isLoading && <p>Loading Books...</p>}
        {!isLoading && results && results.length > 0
          ? results.map((item, index) => (
              <div className="special-book-container" key={index}>
                <img
                  src={item.thumbnail || "placeholder-image-url"}
                  alt={item.title || "Book cover"}
                  className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
                />
                <span>
                  {item.title && item.title.length > 20
                    ? `${item.title.substring(0, 20)}...`
                    : item.title}{" "}
                  by{" "}
                  {item.authors &&
                    item.authors.map((author, idx) =>
                      idx === item.authors.length - 1 ? author : `${author}, `
                    )}
                </span>

                <button
                  className="thq-button-outline hero17-button2"
                  onClick={() =>
                    window.open(
                      buildGoogleBooksUrl(item.thumbnail, search),
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <span className="thq-body-small">
                    <span className="hero17-text5">View book on Google</span>
                  </span>
                </button>
              </div>
            ))
          : hasSearched && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <p>
                  <FaEye fontSize={70} style={{ marginTop: 20 }} />
                </p>
                <h1 style={{ margin: 20 }}>
                  Sorry, we couldn't find what you were looking for
                </h1>
                <p>
                  Try a different key word/phrase or hope we add your book
                  another time
                  <br />
                  <b>Tip: </b>You can specify a particular subject or topic, with
                  "subject:{"{topic}"}", e.g subject:fiction
                </p>
              </div>
            )}
      </div>
    </>
  );
};

export default Search;
