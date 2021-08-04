import { useEffect, useState } from "react";
import { getPexelsPhotos } from "../services/pexels.services";

export const usePexels = () => {
  const [pexels, setPexels] = useState([]);

  useEffect(() => {
    const fetchPexelsData = async () => {
      const response = await getPexelsPhotos();
      setPexels(response);
    };

    fetchPexelsData();
  }, []);

  return { pexels, setPexels };
};
