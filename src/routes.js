import React from "react";
import Home from "views/Home";
import NotFound from "views/NotFound";

export default {
  "/": Home,
  "*": NotFound
};
