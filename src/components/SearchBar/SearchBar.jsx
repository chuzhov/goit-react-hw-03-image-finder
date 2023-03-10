import css from 'components/SearchBar/SearchBar.module.css';
import PropTypes from 'prop-types';

const SearchBar = ({ getQuery }) => {
  const onSubmitQuery = event => {
    event.preventDefault();
    const newQuery = event.target[0].value.trim().toLowerCase();
    getQuery(newQuery);
  };

  return (
    <div className={css['header']}>
      <form
        className={css['search-form']}
        id="search-form"
        onSubmit={onSubmitQuery}
      >
        <input
          type="text"
          name="newQuery"
          placeholder="Search images..."
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
SearchBar.propTypes = {
  getQuery: PropTypes.func.isRequired,
};

export default SearchBar;
