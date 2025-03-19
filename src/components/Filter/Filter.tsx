import {
  default as ReactSelect,
  GroupBase,
  Props,
  components,
} from "react-select";
import { customStylesSelect } from "./styles";
import { ForwardedRef, forwardRef } from "react";

export interface Option {
  value: any;
  label: string;
  parent_id?: any;
}

const CheckboxOption = (props: any) => {
  const { data, isSelected, innerRef, innerProps, selectProps, options } =
    props;

  const isOptionSelected =
    isSelected ||
    selectProps?.value?.some((value: Option) => value.value === "all");

  const selectedAll =
    data?.value === "all" && options?.length - 1 === selectProps?.value?.length;

  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ display: "flex", alignItems: "center", padding: "8px" }}>
      <input
        type="checkbox"
        checked={selectedAll || isOptionSelected}
        readOnly
        style={{ marginRight: "8px" }}
      />
      <span>{data?.label}</span>
    </div>
  );
};

export const Filter = forwardRef(
  (
    { options = [], value, ...props }: Props<Option, true, GroupBase<Option>>,
    ref: ForwardedRef<any>
  ) => {
    const selectedValues = value as Option[];

    const MultiValue = (props: any) => (
      <components.MultiValue {...props}>
        <span>{props.data?.label}</span>
      </components.MultiValue>
    );

    const allOption = { value: "all", label: "Все" };

    const onChange = (selected: Option[]) => {};

    return (
      <ReactSelect
        isMulti
        styles={customStylesSelect}
        isClearable
        placeholder=""
        ref={ref}
        closeMenuOnSelect={false}
        hideSelectedOptions={false}
        noOptionsMessage={() => "Ничего не найдено"}
        loadingMessage={() => "Поиск..."}
        options={[allOption, ...(options || [])]}
        // @ts-ignore
        onChange={(selected: Option[], event) => {
          if (selected !== null && selected.length > 0) {
            if (selected[selected.length - 1].value === allOption.value) {
              // @ts-ignore
              return onChange([allOption, ...options]);
            }
            // @ts-ignore
            let result = [];
            if (selected.length === options.length) {
              if (selected.includes(allOption)) {
                result = selected.filter(
                  (option) => option.value !== allOption.value
                );
              } else if (event.action === "select-option") {
                result = [allOption, ...options];
              }
              // @ts-ignore
              return onChange(result);
            }
          }

          return onChange(selected);
        }}
        components={{ Option: CheckboxOption, MultiValue }}
        // @ts-ignore
        value={selectedValues}
        {...props}
      />
    );
  }
);
