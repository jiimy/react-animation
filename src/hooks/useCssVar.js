import { useState, useEffect } from "react";

function useScreenSize(height, property) {
  // const [data, setData] = useState({
  //   getheight: height,
  //   getproperty: property
  // });

  useEffect(() => {
    // setData({
    //   ...data,
    //   getheight: height,
    //   getproperty: property
    // });
    document.documentElement.style.setProperty(
      `${property}`,
      `${height}`
    );
  }, [height, property]);

  return [];
}

export default useScreenSize;
