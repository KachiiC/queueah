import { useEffect } from "react";

const ScanService = (url) => {
  console.clear()
  
  useEffect(() => {
    url !== undefined ? console.log(true) : console.log(false)
    if(url !== undefined) {
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        console.log(res);
      });
    }
  }, [url]);

};

export default ScanService;
