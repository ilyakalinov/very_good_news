import axios from "axios";

export const getNews = async (sources?: number[], keyword?: string) => {
  try {
    const response = await axios.get(`https://verygoodnews.online/api/news`, {
      params: { keyword, sources },
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      status: response.status,
      data: response.data,
    };
  } catch (e) {
    console.log(e);
  }
};
