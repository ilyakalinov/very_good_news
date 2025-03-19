import { useState } from "react";
import { Button } from "../Button";
import { Filter } from "../Filter";
import { Option } from "../Filter/Filter";
import { InputFilter } from "../InputFilter";
import { Sourse } from "../../pages/Main/Main";
import styles from "./Filters.module.scss";

interface FiltersProps {
  onSearch: (sourses: Option[], query?: string) => void;
  sourses: Sourse[];
  isLoading?: boolean;
}

export const Filters = ({
  onSearch,
  sourses,
  isLoading,
}: FiltersProps): JSX.Element => {
  const [soursesFilter, setSources] = useState<Option[]>([]);
  const [queryString, setQueryString] = useState<string | undefined>();

  const handleSearch = () => onSearch(soursesFilter, queryString);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["filters-row"]}>
        <Filter
          name="sourses"
          options={sourses.map((sourse) => {
            return { label: sourse.name, value: sourse.id };
          })}
          className={styles["filter"]}
          placeholder="Источники"
          // @ts-ignore
          onChange={setSources}
        />
        <InputFilter value={queryString} handleChange={setQueryString} />
      </div>
      <Button onClick={handleSearch} isLoading={isLoading} />
    </div>
  );
};
