var style = document.createElement('style');
style.textContent = `
.ghx-column {
  //background-color: white !important;
 // border-style: solid !important;
// border-width: 0px 1px 0px 0px !important;
//  border-color: lightgrey !important;
 // background:white !important;
 // padding-left: 0px !important;
//  padding-right: 10px !important;
//border-radius: 10px 10px 0px 0px !important;
}

.ghx-column-header-flex-1 {
    text-align: center;
    padding-top: 6px;
}

.ghx-column-headers .ghx-column {
    border-radius: 5px 5px 0px 0px !important;
}

.ghx-columns .ghx-column {
    border-radius: 0px 0px 5px 5px !important;
}

.ghx-pool {
    margin-top:-10px !important;
}

.ghx-qty {
    font-color: lightgrey !important;
}


`;
(document.head || document.documentElement).appendChild(style);

