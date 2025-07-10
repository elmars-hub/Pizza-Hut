import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative">
        <input
          placeholder="Search order by ID..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input w-32 sm:w-48 lg:w-64 pr-10 text-sm transition-all duration-300 focus:w-40 sm:focus:w-56 lg:focus:w-72"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-stone-400 hover:text-stone-600 transition-colors duration-200"
        >
          🔍
        </button>
      </div>
    </form>
  );
}

export default SearchOrder;
