function getProducts(res) {
  //console.log("result is - ", res.data);
  var length = res.data.length;
  //console.log("res.data length is - ", length);
  // console.log("res.data - ", res.data[length - 3]);
  var part1 = res.data.substring(0, length - 3);
  var part2 = res.data.substring(length - 2, length);
  var productString = part1 + part2;
  // console.log(productString);
  var products = JSON.parse(productString);
  //   console.log("getProducts - ", products);
  return products;
}

export default getProducts;
