import { useEffect, useState } from "react";
import { Filters } from "../../components/Filters";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { List } from "../../components/List";
import { View } from "../../components/View";
import { getNews, getSourses } from "../../api";
import { Option } from "../../components/Filter/Filter";
import styles from "./Main.module.scss";

export interface News {
  id: number;
  title: string;
  publication_date: string;
  source: number;
  url: string;
}

export interface Sourse {
  id: number;
  name: string;
  url: string;
}

export const Main = (): JSX.Element => {
  const [news, setNews] = useState<News[]>();
  const [sources, setSources] = useState<Sourse[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSearch = (sources: Option[], query?: string) => {
    setIsLoading(true);
    const sourcesParam = sources.map((source) => source.value);

    getNews(sourcesParam, query)
      .then((res: any) => {
        setNews(res?.data || []);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    getNews()
      .then((res: any) => {
        setNews(res?.data || []);
      })
      .finally(() => setIsLoading(false));

    getSourses().then((res: any) => {
      setSources(res?.data || []);
    });
  }, []);

  return (
    <div className={styles["main"]}>
      <View>
        <Header />
        <Filters onSearch={onSearch} sourses={sources} isLoading={isLoading} />
        {!!news?.length && <List news={news || []} />}
        <Footer />
      </View>
    </div>
  );
};
