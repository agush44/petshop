import { useState, useEffect } from "react";
import { fetchProducts } from "../../../services/productApi";
import { Link } from "react-router-dom";
import {
  SearchWrapper,
  SearchInput,
  Suggestions,
  SuggestionItem,
} from "./SearchBar.styles";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      const fetchSuggestions = async () => {
        try {
          const products = await fetchProducts();
          const filteredSuggestions = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filteredSuggestions);
        } catch (error) {
          console.error("Error al obtener productos:", error);
        }
      };

      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSuggestionClick = () => {
    setQuery("");
    setSuggestions([]);
  };

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar productos..."
      />
      {suggestions.length > 0 && (
        <Suggestions>
          {suggestions.map((product) => (
            <SuggestionItem key={product._id}>
              <Link
                to={`/shop/product/${product._id}`}
                onClick={handleSuggestionClick}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {product.name}
              </Link>
            </SuggestionItem>
          ))}
        </Suggestions>
      )}
    </SearchWrapper>
  );
};

export default SearchBar;
