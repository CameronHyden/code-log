const url = "https://my-code-solution-tracker.ey.r.appspot.com/codeLog";

export const fetchCodeLogs = async () => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const addNewLog = async (input) => {
  fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(input),
  });
};

export const deleteById = async (idText) => {
  fetch(url + "/" + idText, {
    method: "DELETE",
    headers: { "content-type": "application/json" },
  }).then((response) => response.text());
};
