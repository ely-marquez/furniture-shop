import * as React from "react";

import "./SearchBar.css";

// import chair from "../images/chair.png";
// import chair2 from "../images/chair2.png";

// interface FormDataEvent extends Event {
//   readonly formData: FormData;
// };
// interface FormDataEventInit extends EventInit {
//   formData: FormData;
// };
// declare var FormDataEvent: {
//   prototype: FormDataEvent;
//   new(type: string, eventInitDict?: FormDataEventInit): FormDataEvent;
// };
// const handleSubmit = (e: FormDataEvent): void => {}

type searchBarItemProps = {
  className?: string;
  caption?: string;
  icon?: string;
};

const SearchBar = () => {
  return (
    <div className="searchbar-wrapper">
      {/* <div className="searchbar d-flex"> */}
      {/* <div className="searchbar d-flex flex-column">
        <SearchBarItem caption="All" />
        <SearchBarItem icon="chair" />
        <SearchBarItem icon="chair2" />
        <SearchBarItem icon="couch" />
        <SearchBarItem icon="sofa" />
        <SearchBarItem icon="sofa2" />
        <SearchBarItem icon="table" />
        <SearchBarItem icon="cupboard" />
        <SearchBarItem icon="lamp" />
        <SearchBarItem icon="lamp2" />
      </div> */}
      <ul className="searchbar">
        <SearchBarItem caption="All" />
        <SearchBarItem icon="chair" />
        <SearchBarItem icon="chair2" />
        <SearchBarItem icon="couch" />
        <SearchBarItem icon="sofa" />
        <SearchBarItem icon="sofa2" />
        <SearchBarItem icon="table" />
        <SearchBarItem icon="cupboard" />
        <SearchBarItem icon="lamp" />
        <SearchBarItem icon="lamp2" />
      </ul>
    </div>
  );
};

const SearchBarItem = ({ caption, icon }: searchBarItemProps): JSX.Element => {
  return (
    // <div className="searchbaritem bg-secondary mr-3 d-flex justify-content-center align-items-center">
    // <div className="searchbaritem bg-secondary mb-3 d-flex justify-content-center align-items-center">
    //   {icon ? (
    //     <img id={icon} alt="icon" className="bg-primary" />
    //   ) : (
    //     // <span className="bg-primary">{caption}</span>
    //     <span>{caption}</span>
    //   )}
    // </div>
    <li className="searchbaritem bg-secondary mb-3 d-flex justify-content-center align-items-center">
      {icon ? (
        <img id={icon} alt="icon" className="bg-primary" />
      ) : (
        // <span className="bg-primary">{caption}</span>
        <span>{caption}</span>
      )}
    </li>
  );
};

export default SearchBar;
