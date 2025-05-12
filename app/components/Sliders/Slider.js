import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
let productsp = [
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
{
id: 1,
name: "Product Number 1",
brand: "Brand Name",
url: "products-number-1",
price: 100,
},
];
var $ = require("jquery");
if (typeof window !== "undefined") {
window.$ = window.jQuery = require("jquery");
}
