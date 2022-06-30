import { useEffect, useState } from "react";

export function useMediaQuery(query) {

  const checkMediaMatch = () => {

    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState(checkMediaMatch());



  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}