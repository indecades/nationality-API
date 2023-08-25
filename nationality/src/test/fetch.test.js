test('fetches correct nationality', () => { // test that the fetch returns the expected data
  const api = fetch(`https://api.nationalize.io?name=Rochelle`).then(response => response.json().then(data =>  expect(data).toHaveProperty()));
});
