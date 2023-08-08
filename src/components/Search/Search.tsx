import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { useRef } from "react";
import styles from "./Search.module.scss";
import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

type FormFields = {
  username: HTMLInputElement;
};

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  // const searchRef = useRef<HTMLInputElement | null>(null);

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   if (searchRef.current) {
  //     const text = searchRef.current.value;
  //     if (text) {
  //       onSubmit(text);
  //       searchRef.current.value = "";
  //     }
  //   }
  // };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement & FormFields>) => {
    event.preventDefault();
    const text = event.currentTarget.username.value.trim();
    console.log(text)
    if (text) {
      onSubmit(text);
      event.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className="styles.label">
          <SearchIcon />
        </label>
        <input
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          // ref={searchRef}
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
