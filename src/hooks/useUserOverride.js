import { useEffect, useState } from 'react';

const useUserOverride = (saved) => {
  const [visibility, setVisibility] = useState({ modeled: true, custom: false });

  useEffect( () => {
    if (typeof saved === "string") {
      setVisibility({
        modeled: false,
        custom: true
      });
    }
  }, [saved]);

  return [visibility, setVisibility];
}

export default useUserOverride; 
