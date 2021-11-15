"use strict";

import { showLoading } from "./scripts/preloader";
import { scroll } from "./scripts/scroll";


document.addEventListener("DOMContentLoaded", () => {
  showLoading();
  scroll();
});

