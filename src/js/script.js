import * as myFunctions from "./modules/functions.js";
myFunctions.isWebp();

import './modules/authorization.js';
import './modules/createVisit.js';
import './modules/deleteCard.js';
import './modules/showMoreInfo.js';
import './modules/changeInfoCard.js';
import './modules/filters.js';

$(window).on("load", function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");
});
