export const customStylesSelect = {
  menu: (provided: any) => ({
    ...provided,
    "z-index": 9999,
    width: "auto",
    maxWidth: "100%",
    minWidth: "100%",
  }),
  control: (_: any, { isFocused }: { isFocused: boolean }) => ({
    height: "50px",
    display: "flex",
    border: `1px solid ${isFocused ? "#86b7fe" : "#ced4da"}`,
    boxShadow: isFocused ? "0 0 0 0.25rem rgb(13 110 253 / 25%)" : "0",
    borderRadius: "4px",
    backgroundColor: "#fff",
    transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: "#212529",
  }),
  indicatorSeparator: (styles: any) => ({
    ...styles,
    display: "none",
  }),
  loadingIndicator: (styles: any, { isFocused }: { isFocused: boolean }) => ({
    ...styles,
    color: "#006AB5",
  }),
  placeholder: (styles: any, state: any) => {
    return {
      ...styles,
      position: "absolute",
      top: "30%",
      display: state.isFocused ? "none" : "block",
    };
  },
  input: (styles: any, state: any) => ({ ...styles }),
  option: (styles: any, state: any) => {
    return {
      ...styles,
      backgroundColor: state.isDisabled
        ? undefined
        : state.isSelected
        ? "#F2F2F2"
        : state.isFocused
        ? "#F2F2F2"
        : undefined,
      color: "#1F1F1F",
      lineHeight: "18px",
      cursor: state.isDisabled ? "not-allowed" : "default",
      ":active": {
        ...styles[":active"],
        backgroundColor: !state.isDisabled ? (state.isSelected ? "#F2F2F2" : "#F2F2F2") : undefined,
      },
    };
  },
};

export const customSelectStyleTextEllipsis = {
  singleValue: (provided: any) => ({
    ...provided,
    gridArea: "unset",
    position: "absolute",
    paddingLeft: "8px",
  }),
};

export const customStylesSelectMenuHeight = (height: number) => {
  return {
    menuList: (styles: any, state: any) => {
      return {
        ...styles,
        maxHeight: height,
      };
    },
  };
};

export const customStylesSelectRequredFn = (isError = false) => {
  return {
    ...customStylesSelect,
    control: (_: any, { isFocused }: { isFocused: boolean }) => ({
      width: "100%",
      height: "50px",
      display: "flex",
      border: isError ? `1px solid #dc3545` : `1px solid ${isFocused ? "#86b7fe" : "#ced4da"}`,
      boxShadow: isFocused ? "0 0 0 0.25rem rgb(13 110 253 / 25%)" : "0",
      borderRadius: "4px",
      backgroundColor: "#fff",
      transition: "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
      paddingRight: isError ? "calc(1.5em + 0.3rem)" : undefined,
      backgroundImage: isError
        ? "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 12 12%27 width=%2712%27 height=%2712%27 fill=%27none%27 stroke=%27%23dc3545%27%3e%3ccircle cx=%276%27 cy=%276%27 r=%274.5%27/%3e%3cpath stroke-linejoin=%27round%27 d=%27M5.8 3.6h.4L6 6.5z%27/%3e%3ccircle cx=%276%27 cy=%278.2%27 r=%27.6%27 fill=%27%23dc3545%27 stroke=%27none%27/%3e%3c/svg%3e')"
        : undefined,
      backgroundRepeat: isError ? "no-repeat" : undefined,
      backgroundPosition: isError ? "right calc(0.375em + 0.1875rem) center" : undefined,
      backgroundSize: isError ? "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)" : undefined,
    }),
  };
};
