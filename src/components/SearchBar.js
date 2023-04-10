import React from "react";
import "../styles/searchBar.css";
import Button from "./Button";
import LangLinksText from "./LangLinksText";
import LanguageLinks from "./LanguageLinks";
import Logo from "./Logo";
import SearchSection from "./SearchSection";

const SearchBar = () => {
  return (
    <div className="search">
      <Logo />
      <SearchSection />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button buttonText={"Google Search"} />
        <Button buttonText={"I'm feeling lucky"} />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <LangLinksText />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "15px",
            gap: "1rem",
          }}
        >
          <LanguageLinks langLink={"Hausa"} />
          <LanguageLinks langLink={"Igbo"} />
          <LanguageLinks langLink={"Ede Yoruba"} />
          <LanguageLinks langLink={"Nigerian Pidgen"} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
