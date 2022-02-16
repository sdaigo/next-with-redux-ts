export const fetchCount = async (amount = 1) => {
  const resp = await fetch("/api/counter", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ amount }),
  });

  return await resp.json();
};
