import fetch from "node-fetch";

const apiUrl = "https://makaut1.ucanapply.com/smartexam/public/api/notice-data";

const scrapper = async () => {
  const response = await fetch(apiUrl);
  const body = await response.json();
  for (let i of body.data) {
    if (i.status == 1) {
      return body.data;
    } else {
      console.log("api error");
    }
  }
};

const notices = await scrapper();

export default notices;
