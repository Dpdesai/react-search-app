import { useState, useEffect } from "react";

// Define a function that is our component, always make sure to declare the props parameter so you can use props in your component
function SearchBar(props) {
  //State to hold the data of our form
  const [formData, setFormData] = useState({
    search: [],
  });

  //handleChange - updates formData when we type into form
  const handleChange = (event) => {
    //use the event object to detect key and value to update
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    //prevent page from refreshing on form submission
    event.preventDefault();
    //pass the search term to booksearch prop, which is apps getNews function
    props.booksearch(formData.search);
  };

  //The component must return some JSX
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-wrap">
        <input
          type="text"
          name="search"
          onChange={handleChange}
          value={formData.search}
          placeholder="Search book here..."
          className="search"
        />
        <input type="submit" value="submit" className="submit-btn" />
      </form>
    </div>
  );
}

export default SearchBar;
