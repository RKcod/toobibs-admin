(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cancelled-appointments/cancelled-appointments.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cancelled-appointments/cancelled-appointments.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Liste des consultations annulés\n\n                </h4>\n                <p class=\"card-category\"> </p>\n            </div>\n            <div class=\"card-body\">\n                <h4 *ngIf=\"consultations.length==0\">Aucune consutation annuler</h4>\n                <div class=\"table-responsive\" *ngIf=\"consultations.length>0\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                        <th>Nom & Prénom</th>\n                        <th>Tel.</th>\n                        <th>Type</th>\n                        <th>Date</th>\n                        <th>Coûts</th>\n                        <th>Actions</th>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let c of consultations\">\n                            <td>Patient : {{c.first_name}} {{c.last_name}}<br>\n                                Médécin : <a style=\"cursor:pointer\" [routerLink]=\"['/user-details']\" [queryParams]=\"{id: c.doctor.data.id}\" >{{c.doctor.data.first_name}} {{c.doctor.data.last_name}}</a></td>\n                            <td>{{c.phone}}</td>\n                            <td>{{c.type}}</td>\n                            <td>{{c.date}}</td>\n                            <td>{{c.cost}} {{c.currency}}</td>\n                            <td><a  style=\"cursor:pointer; color: #fff;padding: 10px;\"class=\"btn btn-success\" (click)=\"remboursser(c.id, 2)\">Marquez comme rembourser</a></td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n                    <mat-paginator [length]=\"meta.pagination.total\"\n                                   [pageSize]=\"meta.pagination.per_page\"\n                                   [pageIndex]=\"meta.pagination.current_page-1\"\n                                   (page)=\"pageEvent = loadConsultations($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/center-details/center-details.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/center-details/center-details.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"table-responsive\">\n        <table class=\"table\">\n            <thead class=\" text-primary\">\n            <th>\n                Nom\n            </th>\n            <th>\n                Prénom\n            </th>\n            <th>\n                Email\n            </th>\n            <th>\n                Tel.\n            </th>\n            <th>\n                Type\n            </th>\n            <th>\n                Actions\n            </th>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let u of users\">\n                <td>\n                    {{u.first_name == null ? \"N/A\" : u.first_name}}\n                </td>\n                <td>\n                    {{u.last_name == null ? \"N/A\" : u.last_name}}\n                </td>\n                <td>\n                    {{u.email == null ? \"N/A\" : u.email}}\n                </td>\n                <td>\n                    {{u.phone == null ? \"N/A\" : u.phone}}\n                </td>\n                <td>\n                    {{u.user_type == \"ADMIN\" ? \"Administrateur\" : (u.user_type == \"DOCTOR\" ? \"Docteur\": (u.user_type == \"PATIENT\" ? \"Patient\" : (u.user_type == \"CENTER\" ? \"Centre de santé\" : \"N/A\")))}}\n                </td>\n                <td>\n                    <a style=\"cursor:pointer\" [routerLink]=\"['/user-details']\" [queryParams]=\"{id: u.id}\" >Voir le profil</a><br>\n\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <mat-paginator [length]=\"meta.pagination.count\"\n                       [pageSize]=\"meta.pagination.per_page\"\n                       [pageIndex]=\"meta.pagination.current_page-1\"\n                       (page)=\"pageEvent = loadUsers($event)\">\n        </mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/centers.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/centers.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Liste des centres\n\n                    <button mat-raised-button type=\"button\" class=\"btn btn-warning pull-right\" (click)=\"openEdit(null)\">Ajouter</button>\n                </h4>\n                <p class=\"card-category\"> </p>\n            </div>\n            <div class=\"card-body\">\n                <h4 *ngIf=\"centers.length==0\">Aucun centre</h4>\n                <div class=\"table-responsive\" *ngIf=\"centers.length>0\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                        <th>\n                            Nom\n                        </th>\n                        <th>\n                            Adresse\n                        </th>\n                        <th>\n                            Email\n                        </th>\n                        <th>\n                            Tel.\n                        </th>\n                        <th>\n                            Actions\n                        </th>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let u of centers\">\n                            <td>\n                                {{u.name == null ? \"N/A\" : u.name}}\n                            </td>\n                            <td>\n                                {{u.address == null ? \"N/A\" : u.address}}\n                            </td>\n                            <td>\n                                {{u.email == null ? \"N/A\" : u.email}}\n                            </td>\n                            <td>\n                                {{u.phone == null ? \"N/A\" : u.phone}}\n                            </td>\n                            <td>\n                                <!--  href=\"https://www.google.com/maps/search/?api=1&query={{u.lat}},{{u.lng}}\" target=\"_blank\" -->\n                                <a style=\"cursor:pointer\" (click)=\"openDoctors(u.real_id)\" >Plus de Détails</a><br>\n                                <a style=\"cursor:pointer\" (click)=\"openMap(u.lat, u.lng)\">Ouvrir la map</a><br>\n                                <a  style=\"cursor:pointer\" (click)=\"openEdit(u.id)\">Modifier</a><br>\n                                <a  style=\"cursor:pointer\" (click)=\"delete(u.id)\">Supprimer</a>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n                    <mat-paginator [length]=\"meta.pagination.total\"\n                                   [pageSize]=\"meta.pagination.per_page\"\n                                   [pageIndex]=\"meta.pagination.current_page-1\"\n                                   (page)=\"pageEvent = loadCenters($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/confirm-delete/confirm-delete.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/confirm-delete/confirm-delete.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Voulez vous vraiment supprimer ce centre ?\n</p>\n<div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteCenter()\">Supprimer</button>\n    </div>\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"closeDialog('error')\">Annuler</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/create-center/create-center.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/create-center/create-center.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"card-header card-header-danger\">\n        <span (click)=\"closeDialog('cancel')\" class=\"pull-right\" style=\"cursor:pointer;\">x</span>\n        <h4 class=\"card-title \">Ajouter/Editer un centre de santé</h4>\n        <p class=\"card-category\"></p>\n    </div>\n    <div class=\"card-body\">\n        <form (ngSubmit)=\"saveCenter()\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" required placeholder=\"Nom\" name=\"nom\" [(ngModel)]=\"center.name\">\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" required placeholder=\"Adresse\" name=\"address\"\n                               [(ngModel)]=\"center.address\">\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"email\" required placeholder=\"Email\" name=\"email\"\n                               [(ngModel)]=\"center.email\">\n                    </mat-form-field>\n                    <mat-form-field  floatLabel=\"always\" class=\"example-full-width tel\">\n                        <mat-label>Tel.</mat-label>\n                        <input matInput type=\"text\" required  id=\"phone\" name=\"tel\" style=\"padding-left:55px;\">\n                    </mat-form-field>\n                    <span>Coordonées géographiques</span><br>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" required placeholder=\"Latitude *\" name=\"lat\"\n                               [(ngModel)]=\"center.lat\">\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" required placeholder=\"Longitude *\" name=\"lng\"\n                               [(ngModel)]=\"center.lng\">\n                    </mat-form-field>\n                    <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"openMap()\">Ajoutez vos\n                        coordonées géographiques\n                    </button>\n                </div>\n                <div class=\"col-md-12 text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-primary \">\n                        Enregistrer\n                    </button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/doctors-in-center/doctors-in-center.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/doctors-in-center/doctors-in-center.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card-header card-header-danger\">\n    <span (click)=\"closeDialog('cancel')\" class=\"pull-right\" style=\"cursor:pointer;\">x</span>\n    <h4 class=\"card-title \">Liste des médecins du centre</h4>\n    <p class=\"card-category\"></p>\n</div>\n<div class=\"card-body\">\n    <h4 *ngIf=\"users.length == 0\">Aucun docteur dans ce centre de santé</h4>\n    <div class=\"table-responsive\" *ngIf=\"users.length > 0\">\n        <table class=\"table\">\n            <thead class=\" text-primary\">\n            <th>\n                Nom\n            </th>\n            <th>\n                Prénom\n            </th>\n            <th>\n                Email\n            </th>\n            <th>\n                Tel.\n            </th>\n            <th>\n                Type\n            </th>\n            <th>\n                Actions\n            </th>\n            </thead>\n            <tbody>\n            <tr *ngFor=\"let u of users\">\n                <td>\n                    {{u.first_name == null ? \"N/A\" : u.first_name}}\n                </td>\n                <td>\n                    {{u.last_name == null ? \"N/A\" : u.last_name}}\n                </td>\n                <td>\n                    {{u.email == null ? \"N/A\" : u.email}}\n                </td>\n                <td>\n                    {{u.phone == null ? \"N/A\" : u.phone}}\n                </td>\n                <td>\n                    {{u.user_type == \"ADMIN\" ? \"Administrateur\" : (u.user_type == \"DOCTOR\" ? \"Docteur\": (u.user_type == \"PATIENT\" ? \"Patient\" : (u.user_type == \"CENTER\" ? \"Centre de santé\" : \"N/A\")))}}\n                </td>\n                <td>\n                    <a style=\"cursor:pointer\" target=\"_blank\" [routerLink]=\"['/user-details']\" [queryParams]=\"{id: u.id}\" >Voir le profil</a><br>\n\n                </td>\n            </tr>\n            </tbody>\n        </table>\n\n        <mat-paginator [length]=\"meta.pagination.count\"\n                       [pageSize]=\"meta.pagination.per_page\"\n                       [pageIndex]=\"meta.pagination.current_page-1\"\n                       (page)=\"pageEvent = loadUsers($event)\">\n        </mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/open-map/open-map.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/centers/open-map/open-map.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<agm-map [latitude]=\"lat\" [zoom]=\"zoom\" [longitude]=\"lng\">\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" *ngIf=\"data.draggable\" [markerDraggable]=\"true\"\n                (dragEnd)=\"markerDragEnd($event)\"></agm-marker>\n    <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" *ngIf=\"!data.draggable\"></agm-marker>\n</agm-map>\n<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-primary \" (click)=\"savePos()\" *ngIf=\"data.draggable\">\n            Enregistrer\n        </button>\n        <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"closeDialog('cancel')\">Fermer</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n\n                <!--li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li-->\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made by <a href=\"https://cotafric.net\">Cotafric</a>\n        </div>\n    </div>\n</footer>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-wrapper\">\n          <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <button mat-raised-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n            <span class=\"navbar-toggler-icon icon-bar\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n            <!--form class=\"navbar-form\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </form-->\n            <ul class=\"navbar-nav\">\n                <!--li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Stats</span>\n                        </p>\n                    </a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                        </p>\n                    </a>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Mike John responded to your email</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You have 5 new tasks</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">You're now friend with Andrew</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another Notification</a>\n                        <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another One</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\">\n                        <i class=\"material-icons\">person</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Account</span>\n                        </p>\n                    </a>\n                </li-->\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\" title=\"Déconnexion\">\n                        <i class=\"material-icons\">power_settings_new</i>\n                        <p>\n                            <span class=\"d-lg-none d-md-block\">Déccounexion</span>\n                        </p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<!--\n\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"javascript:void(0)\">Mike John responded to your email</a></li>\n                        <li><a href=\"javascript:void(0)\">You have 5 new tasks</a></li>\n                        <li><a href=\"javascript:void(0)\">You're now friend with Andrew</a></li>\n                        <li><a href=\"javascript:void(0)\">Another Notification</a></li>\n                        <li><a href=\"javascript:void(0)\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"javascript:void(0)\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logo\">\n    <a class=\"simple-text\">\n        <div class=\"logo-img\">\n            <img src=\"/assets/img/logo/logo_toobib_icon.png\"/>\n        </div>\n        Toobibs\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n  <div *ngIf=\"isMobileMenu()\">\n    <!--form class=\"navbar-form\">\n      <span class=\"bmd-form-group\">\n        <div class=\"input-group no-border\">\n          <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\">\n          <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n            <i class=\"material-icons\">search</i>\n            <div class=\"ripple-container\"></div>\n          </button>\n        </div>\n      </span>\n    </form-->\n    <ul class=\"nav navbar-nav nav-mobile-menu\">\n        <!--li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">dashboard</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Stats</span>\n                </p>\n            </a>\n        </li-->\n        <!--li class=\"nav-item dropdown\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                <i class=\"material-icons\">notifications</i>\n                <span class=\"notification\">5</span>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                </p>\n            </a>\n            <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Mike John responded to your email</a>\n                <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n                <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n                <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n                <a class=\"dropdown-item\" href=\"#\">Another One</a>\n            </div>\n        </li-->\n        <!--li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\">\n                <i class=\"material-icons\">person</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Account</span>\n                </p>\n            </a>\n        </li-->\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\" title=\"Déconnexion\">\n                <i class=\"material-icons\">power_settings_new</i>\n                <p>\n                    <span class=\"d-lg-none d-md-block\">Déconnexion</span>\n                </p>\n            </a>\n        </li>\n    </ul>\n  </div>\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n<!--                <i class=\"material-icons\">{{menuItem.icon}}</i>-->\n                <p>{{menuItem.title}}</p>\n            </a>\n        </li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner></ngx-spinner>\n<div class=\"wrapper\">\n    <div class=\"sidebar\" data-color=\"blue\" data-background-color=\"white\" data-image=\"./assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n        <div class=\"sidebar-background\" style=\"background-image: url(./assets/img/sidebar-4.jpg)\"></div>\n    </div>\n    <div class=\"main-panel\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n        <div *ngIf=\"isMaps('maps')\">\n            <app-footer></app-footer>\n        </div>\n    </div>\n    <!--\n    <div class=\"fixed-plugin\">\n        <div class=\"dropdown show-dropdown open show\">\n            <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\n                <i class=\"fa fa-cog fa-2x\"> </i>\n            </a>\n            <ul class=\"dropdown-menu show\" x-placement=\"bottom-start\" style=\"position: absolute; top: 41px; left: -231px; will-change: top, left;\">\n                <li class=\"header-title\"> Sidebar Filters</li>\n                <li class=\"adjustments-line\">\n                    <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\n                        <div class=\"ml-auto mr-auto\">\n                            <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\n                            <span class=\"badge filter badge-azure\" data-color=\"azure\"></span>\n                            <span class=\"badge filter badge-green\" data-color=\"green\"></span>\n                            <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\n                            <span class=\"badge filter badge-danger active\" data-color=\"danger\"></span>\n                        </div>\n                        <div class=\"clearfix\"></div>\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li class=\"header-title\">Images</li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\">\n                    <div class=\"ripple-container\"></div></a>\n                </li>\n                <li>\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"active\">\n                    <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\n                        <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\">\n                    </a>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-info btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Download Free\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container\">\n                    <div>\n                        <button class=\"btn btn-warning btn-block btn-fill\" data-toggle=\"modal\" data-target=\"#buy\">\n                            Buy Pro\n                        </button>\n                    </div>\n                </li>\n                <li class=\"button-container text-center\" routerLinkActive=\"active\">\n                  <div>\n                    <a class=\"btn btn-default btn-block\" href=\"https://demos.creative-tim.com/material-dashboard-angular2/#/documentation/tutorial\">\n                        View Documentation\n                    </a>\n                  </div>\n                </li>\n            </ul>\n        </div>\n    </div>\n    -->\n</div>\n<!-- Buy-Modal-angular -->\n<div class=\"modal modal-angular fade\" id=\"buy\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n<div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body text-center\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n            <h4 class=\"margin-top\">\n                Free Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container\">\n                        <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                    </div>\n                    Html5\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"wrapper-card\">\n                    <div class=\"image-container image-angular-cli\">\n                        <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                    </div>\n                    Angular\n                    <div class=\"separator\"></div>\n                    <div class=\"product-type\">\n                        FREE\n                    </div>\n                </div>\n            </a>\n            <h4>\n                PRO Version\n            </h4>\n            <div class=\"separator\"></div>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container\">\n                    <img src=\"./assets/img/html.png\" alt=\"unloaded\">\n                </div>\n                Html5\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        49\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n            <a href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2\" class=\"modal-button\" target=\"_blank\">\n                <div class=\"image-container image-angular-cli\">\n                    <img src=\"./assets/img/angular.png\" alt=\"unloaded\">\n                </div>\n                Angular\n                <div class=\"separator\"></div>\n                <div class=\"price\">\n                    from\n                    <span>\n                        59\n                        <i class=\"fa fa-usd\" aria-hidden=\"true\"></i>\n                    </span>\n                </div>\n            </a>\n        </div>\n    </div>\n</div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-spinner></ngx-spinner>\n<div class=\"card card-stats\" style=\"width: 400px; margin:auto; margin-top: 10%;\">\n    <div class=\"card-header text-center\">\n        <img src=\"/assets/img/logo/logo_toobib_noir.png\" width=\"200\" style=\"margin: auto; margin-top: 20px;\"/><br><br>\n        <h4 class=\"card-title\">\n            <small>Connectez-vous à l'espace d'administration de Toobib</small>\n        </h4>\n    </div>\n    <div class=\"card-body\">\n        <form (ngSubmit)=\"login()\">\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"email\" required placeholder=\"Email\" name=\"email\" [(ngModel)]=\"data.username\">\n            </mat-form-field>\n            <br>\n            <mat-form-field class=\"example-full-width\">\n                <input matInput type=\"password\" required placeholder=\"Mot de passe\" name=\"password\" [(ngModel)]=\"data.password\">\n            </mat-form-field>\n            <br>\n            <button mat-raised-button type=\"submit\" class=\"btn btn-primary pull-right\">Se connecter</button>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Paramètres\n\n                </h4>\n                <p class=\"card-category\">\n                </p>\n            </div>\n            <div class=\"card-body\">\n                <mat-tab-group>\n                    <mat-tab label=\"Media\">\n                        <div class=\"row\" style=\"padding:40px;\">\n                            <div class=\"col-md-6\">\n                                <h4>Liste des médias</h4><br>\n                                <div *ngIf=\"medias.length == 0\">Aucune donnée</div>\n                                <div *ngFor=\"let media of medias; let i = index\">\n                                    <div>\n                                        <a [href]=\"media?.link\"> {{media?.title}} </a>\n                                        <p> {{ media?.description }} <br>\n                                            <a style=\"cursor:pointer;\" (click)=\"edit(media.dataId)\">Modifier</a> | <a style=\"cursor:pointer;\" (click)=\"deleteD(media.dataId)\">Supprimer</a>\n                                        </p>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h4>Ajouter/Editer des éléments pour Médias et Presse</h4>\n                                <form class=\"example-form\" (ngSubmit)=\"onSubmit()\" >\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Titre </mat-label>\n                                        <input matInput [(ngModel)] ='data.title' name=\"title\" placeholder=\"Titre\" >\n                                    </mat-form-field>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Lien </mat-label>\n                                        <input matInput [(ngModel)] ='data.link' name=\"link\" placeholder=\"Lien\" >\n                                    </mat-form-field>\n\n\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Description</mat-label>\n                                        <textarea [(ngModel)] ='data.description' name=\"description\" matInput placeholder=\"Description\"></textarea>\n                                    </mat-form-field>\n                                    <button mat-raised-button color=\"primary\" style=\"float: right;\">Enregistrer</button>\n                                </form>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Carreers\">\n                        <div class=\"row\" style=\"padding:40px;\">\n                            <div class=\"col-md-6\">\n                                <h4>Liste des carrières</h4><br>\n                                <div *ngIf=\"carreers.length == 0\">Aucune donnée</div>\n                                <div *ngFor=\"let media of carreers; let i = index\">\n                                    <div>\n                                        {{media?.title}}<br>\n                                        Postuler à : {{media.mail}}<br>\n                                        Délais : {{media.date}}<br>\n                                        <p> {{ media?.description }} <br>\n                                            <a style=\"cursor:pointer;\" (click)=\"editCarreers(media.dataId)\">Modifier</a> | <a style=\"cursor:pointer;\" (click)=\"deleteCarreers(media.dataId)\">Supprimer</a>\n                                        </p>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h4>Ajouter/Editer des carrières</h4>\n                                <form class=\"example-form\" (ngSubmit)=\"onSubmitCarreers()\" >\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Titre </mat-label>\n                                        <input matInput [(ngModel)] ='dataCarreers.title' name=\"title\" placeholder=\"Titre\" >\n                                    </mat-form-field>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Date de délais </mat-label>\n                                        <input matInput [(ngModel)] ='dataCarreers.date' type=\"date\" name=\"date\" placeholder=\"Délais\" >\n                                    </mat-form-field>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Mail pour candidature </mat-label>\n                                        <input matInput [(ngModel)] ='dataCarreers.mail' type=\"mail\" name=\"mail\" placeholder=\"Email\" >\n                                    </mat-form-field>\n\n\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Description</mat-label>\n                                        <textarea [(ngModel)] ='dataCarreers.description' name=\"description\" matInput placeholder=\"Description\"></textarea>\n                                    </mat-form-field>\n                                    <button mat-raised-button color=\"primary\" style=\"float: right;\">Enregistrer</button>\n                                </form>\n                            </div>\n                        </div>\n\n                    </mat-tab>\n                    <mat-tab label=\"FAQ\">\n                        <div class=\"row\" style=\"padding:40px;\">\n                            <div class=\"col-md-6\">\n                                <h4>Liste des faqs</h4><br>\n                                <div *ngIf=\"faqs.length == 0\">Aucune donnée</div>\n                                <div *ngFor=\"let faq of faqs; let i = index\">\n                                    <div>\n                                         {{faq?.question}}\n                                        <p> {{ faq?.answer }} <br>\n                                            <a style=\"cursor:pointer;\" (click)=\"editFaq(faq.dataId)\">Modifier</a> | <a style=\"cursor:pointer;\" (click)=\"deleteFaq(faq.dataId)\">Supprimer</a>\n                                        </p>\n\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <h4>Ajouter/Editer des éléments pour FAQ</h4>\n                                <form class=\"example-form\" (ngSubmit)=\"onSubmitFaq()\" >\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Titre </mat-label>\n                                        <input matInput [(ngModel)] ='dataFaq.question' name=\"question\" placeholder=\"Question\" >\n                                    </mat-form-field>\n\n\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Description</mat-label>\n                                        <textarea [(ngModel)] ='dataFaq.answer' name=\"answer\" matInput placeholder=\"Réponse\"></textarea>\n                                    </mat-form-field>\n                                    <button mat-raised-button color=\"primary\" style=\"float: right;\">Enregistrer</button>\n                                </form>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Contact\">\n\n                        <div class=\"row\" style=\"padding:40px;\">\n                            <div class=\"col-md-6\">\n                                <h4>Informations de contact</h4>\n                                <form class=\"example-form\" (ngSubmit)=\"onSubmitContact()\" >\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Adresse </mat-label>\n                                        <input matInput [(ngModel)] ='dataContact.location' name=\"title\"  >\n                                    </mat-form-field>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Email </mat-label>\n                                        <input matInput [(ngModel)] ='dataContact.email' type=\"text\" name=\"email\"  >\n                                    </mat-form-field>\n                                    <mat-form-field class=\"example-full-width\">\n                                        <mat-label>Téléphone </mat-label>\n                                        <input matInput [(ngModel)] ='dataContact.phone' type=\"text\" name=\"phone\" >\n                                    </mat-form-field>\n                                    <div class=\"example-full-width\">\n                                        <mat-label>Fichier Condition générale d'utilisation </mat-label>\n                                        <input  type=\"file\" (change)=\"selectCGUFile($event)\">\n                                        <!--input matInput [(ngModel)] ='dataContact.cgu_pdf' type=\"text\" name=\"cgu\" -->\n                                    </div>\n                                    <div class=\"example-full-width\">\n                                        <mat-label>Fichier Condition générale de ventes </mat-label>\n                                        <input  type=\"file\" (change)=\"selectCGVFile($event)\">\n                                        <!--input matInput [(ngModel)] ='dataContact.cgv_pdf' type=\"text\" name=\"cgv\" -->\n                                    </div>\n\n\n                                    <button mat-raised-button color=\"primary\" style=\"float: right;\">Enregistrer</button>\n                                </form>\n                            </div>\n                        </div></mat-tab>\n                </mat-tab-group>\n            </div>\n        </div>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sms/sms.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sms/sms.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">\n                    SMS Personalisé\n                </h4>\n                <p class=\"card-category\">\n                </p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"row mt-2 p-2\" style=\"height: 50vh;\">\n                    <div class=\"col-md-6\" style=\"height: 50vh; overflow: auto\">\n                        <ul class=\"list-group\">\n                            <a class=\"list-group-item list-group-item-action \"\n                                *ngFor=\"let smsItem of smsList; let i = index\"\n                                [class]=\"smsItem?.message === sms.message ? 'active': ''\"\n                                (click)=\"onSelectSms(smsItem?.id)\"> {{ smsItem?.title }} </a>\n\n                        </ul>\n                    </div>\n                    <div class=\"col-md-6\" style=\"border: 1px solid rgba(10,110,189,0.19);\">\n                        <form #f=\"ngForm\" (ngSubmit)=\"updateSMS()\">\n                            <textarea class=\"form-control\" [(ngModel)]=\"sms.message\" name=\"message\"\n                                placeholder=\"Saisir le sms ici...  \" style=\"height: 40vh !important;\"></textarea>\n                            <button class=\"btn btn-primary\" style=\"float:right;\">Sauvegarder</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Voulez vous vraiment supprimer cette spécialité ?\n</p>\n<div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteSpecialities()\">Supprimer</button>\n    </div>\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"closeDialog('error')\">Annuler</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/create-speciality/create-speciality.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/create-speciality/create-speciality.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <div class=\"card-header card-header-danger\">\n        <span (click)=\"closeDialog('cancel')\" class=\"pull-right\" style=\"cursor:pointer;\">x</span>\n        <h4 class=\"card-title \">Ajouter/Editer une spécialité</h4>\n        <p class=\"card-category\"></p>\n    </div>\n    <div class=\"card-body\">\n        <form (ngSubmit)=\"saveSpeciality()\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" required placeholder=\"Nom\" name=\"nom\" [(ngModel)]=\"speciality.name\">\n                    </mat-form-field>\n                    <mat-form-field class=\"example-full-width\">\n                        <input matInput type=\"text\" placeholder=\"Description (Facultatif)\" name=\"description\"\n                               [(ngModel)]=\"speciality.description\">\n                    </mat-form-field>\n\n                </div>\n                <div class=\"col-md-12 text-center\">\n                    <button mat-raised-button type=\"submit\" class=\"btn btn-primary \">\n                        Enregistrer\n                    </button>\n                </div>\n\n            </div>\n        </form>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/specialities.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/specialities.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Liste des spécialités\n\n                    <button mat-raised-button type=\"button\" class=\"btn btn-warning pull-right\" (click)=\"openEdit(null)\">Ajouter</button>\n                </h4>\n                <p class=\"card-category\"> </p>\n            </div>\n            <div class=\"card-body\">\n                <h4 *ngIf=\"specialities.length==0\">Aucune spécialité</h4>\n                <div class=\"table-responsive\" *ngIf=\"specialities.length>0\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                        <th>\n                            Nom\n                        </th>\n                        <th>\n                            Description\n                        </th>\n                        <th>\n                            Actions\n                        </th>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let u of specialities\">\n                            <td>\n                                {{u.name == null ? \"N/A\" : u.name}}\n                            </td>\n                            <td>\n                                {{u.description == null ? \"N/A\" : u.description}}\n                            </td>\n                            <td>\n                                <a  style=\"cursor:pointer\" (click)=\"openEdit(u.id)\">Modifier</a><br>\n                                <a  style=\"cursor:pointer\" (click)=\"delete(u.id)\">Supprimer</a>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n\n                    <mat-paginator [length]=\"meta.pagination.total\"\n                                   [pageSize]=\"meta.pagination.per_page\"\n                                   [pageIndex]=\"meta.pagination.current_page-1\"\n                                   (page)=\"pageEvent = loadSpecialities($event)\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/confirm-delete/confirm-delete.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/confirm-delete/confirm-delete.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n    Voulez vous vraiment supprimer cet utilisateur ?\n</p>\n<div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-primary\" (click)=\"deleteUser()\">Supprimer</button>\n    </div>\n    <div class=\"col-md-6 text-center\">\n        <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"closeDialog('error')\">Annuler</button>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n            <div class=\"card-header card-header-danger\">\n                <span (click)=\"closeDialog('cancel')\" class=\"pull-right\" style=\"cursor:pointer;\">x</span>\n                <h4 class=\"card-title \">Ajouter/Editer un utilisateur</h4>\n                <p class=\"card-category\"> </p>\n            </div>\n            <div class=\"card-body\">\n                <form (ngSubmit)=\"saveUser()\" >\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\" required placeholder=\"Nom\" name=\"nom\" [(ngModel)]=\"user.first_name\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\" required placeholder=\"Prénom\" name=\"prenom\" [(ngModel)]=\"user.last_name\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"email\" required placeholder=\"Email\" name=\"email\" [(ngModel)]=\"user.email\">\n                        </mat-form-field>\n                        <mat-radio-group aria-label=\"Sexe\" name=\"gender\" [(ngModel)]=\"user.gender\">\n                            <mat-label>Sexe</mat-label><br>\n                            <mat-radio-button value=\"Masculin\" checked>Masculin</mat-radio-button>\n                            <mat-radio-button value=\"Feminin\">Feminin</mat-radio-button>\n                        </mat-radio-group><br><br>\n\n                        <mat-form-field class=\"example-full-width\">\n                            <mat-label>Type de profil</mat-label>\n                            <select matNativeControl name=\"type\" [(ngModel)]=\"user.user_type\" required>\n                                <option value=\"ADMIN\">Administrateur</option>\n                                <option value=\"DOCTOR\">Docteur</option>\n                                <option value=\"PATIENT\">Patient</option>\n                            </select>\n                        </mat-form-field>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <mat-form-field  floatLabel=\"always\" class=\"example-full-width tel\">\n                            <mat-label>Tel.</mat-label>\n                            <input matInput type=\"text\" required  id=\"phone\" name=\"tel\" style=\"padding-left:55px;\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\" placeholder=\"Adresse\" name=\"address\" [(ngModel)]=\"user.address\">\n                        </mat-form-field>\n\n                        \n                        <mat-form-field class=\"example-full-width\" *ngIf=\"user.user_type == 'ADMIN'\">\n                            <input matInput type=\"password\" placeholder=\"Mot de passe\" name=\"password\" [(ngModel)]=\"user.password\">\n                        </mat-form-field>\n                        <!--mat-form-field class=\"example-full-width\">\n                            <input matInput type=\"text\"  placeholder=\"Spécialité\">\n                        </mat-form-field-->\n                        <mat-form-field class=\"example-full-width\" *ngIf=\"user.user_type == 'DOCTOR'\">\n                            <mat-label>Spécialité</mat-label>\n                            <select matNativeControl name=\"specialite\" [(ngModel)]=\"user.speciality\" required>\n                                <option [value]=\"s.real_id\" *ngFor=\"let s of specialities\">{{s.name}}</option>\n                            </select>\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\" *ngIf=\"user.user_type == 'DOCTOR'\">\n                            <input matInput type=\"text\"  placeholder=\"Numéro d'ordre des médecins\" name=\"doctor_serial_number\" [(ngModel)]=\"user.doctor_serial_number\">\n                        </mat-form-field>\n                        <mat-form-field class=\"example-full-width\" *ngIf=\"user.user_type == 'DOCTOR'\">\n                            <mat-label>Centre de santé</mat-label>\n                            <select matNativeControl name=\"center_id\" [(ngModel)]=\"user.centers_id\">\n                                <option value=\"0\">Aucun</option>\n                                <option *ngFor=\"let c of centers\" [value]=\"c.real_id\">{{c.name}}</option>\n                            </select>\n                        </mat-form-field>\n                        <mat-slide-toggle [(ngModel)]=\"user.status\" name=\"status\"  >Statut ({{user.status? 'Activé' : 'Désactivé'}}) </mat-slide-toggle>\n                    </div>\n                    <div class=\"col-md-12 text-center\">\n                        <button mat-raised-button type=\"submit\" class=\"btn btn-warning\">Enregistrer</button>\n                    </div>\n                </div>\n                </form>\n            </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-details/user-details.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-details/user-details.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-7\">\n\n\n\n                <div class=\"card\">\n                    <div class=\"card-body\">\n                        <div>\n\n                            <mat-tab-group backgroundColor=\"primary\">\n                                <mat-tab label=\"Consultations\" (click)=\"loadConsultations(null)\">\n                                    <div style=\"padding: 16px;\">\n                                        <p *ngIf=\"!loader_consultation && consultations.length == 0\">Aucune consultation effectuée</p>\n                                        <div *ngIf=\"user?.user_type =='DOCTOR' && consultations.length > 0\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-1\"></div>\n                                                <div class=\"col-md-3\">\n\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Mois</mat-label>\n                                                        <select matNativeControl name=\"month\" [(ngModel)]=\"month\" required>\n                                                            <option [value]=\"index\" *ngFor=\"let m of months; index as index\">{{m}}</option>\n                                                        </select>\n                                                    </mat-form-field>\n                                                </div>\n                                                <div class=\"col-md-3\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Année</mat-label>\n                                                        <select matNativeControl name=\"month\" [(ngModel)]=\"year\" required>\n                                                            <option [value]=\"y\" *ngFor=\"let y of years\">{{y}}</option>\n                                                        </select>\n                                                    </mat-form-field>\n                                                </div>\n                                                <div class=\"col-md-3 text-center\">\n                                                    <button mat-raised-button type=\"button\" (click)=\"loadSum(true)\" class=\"btn btn-warning\">Afficher frais</button>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\">\n                                                <div class=\"col-md-6\">\n                                                    Gain du mois en cours : <h2>{{api.formatNumber(gains.cost)}} {{gains.currency}}</h2>\n                                                </div>\n                                                <div class=\"col-md-6\">\n                                                    Frais Toobib : <h2>{{api.formatNumber(gains.fees)}} {{gains.currency}}</h2>\n                                                </div>\n                                            </div>\n\n                                        </div>\n                                        <div *ngIf=\"loader_consultation\">Chargement des consultations en cours....</div>\n                                        <div class=\"table-responsive\"*ngIf=\"!loader_consultation && consultations.length > 0\">\n                                            <table class=\"table\">\n                                                <thead class=\" text-primary\">\n                                                <th>Nom & Prénom</th>\n                                                <th>Tel.</th>\n                                                <th>Type</th>\n                                                <th>Date</th>\n                                                <th>Coûts</th>\n                                                </thead>\n                                                <tbody>\n                                                <tr *ngFor=\"let c of consultations\">\n                                                    <td>{{c.first_name}} {{c.last_name}}</td>\n                                                    <td>{{c.phone}}</td>\n                                                    <td>{{c.type}}</td>\n                                                    <td>{{c.date}}</td>\n                                                    <td>{{api.formatNumber(c.cost)}} {{c.currency}}</td>\n                                                </tr>\n                                                </tbody>\n                                            </table>\n\n                                            <mat-paginator [length]=\"meta.pagination.total\"\n                                                           [pageSize]=\"meta.pagination.per_page\"\n                                                           [pageIndex]=\"meta.pagination.current_page-1\"\n                                                           (page)=\"pageEvent = loadConsultations($event)\">\n                                            </mat-paginator>\n                                        </div>\n                                    </div>\n\n                                </mat-tab>\n                                <mat-tab label=\"Détails\" (click)=\"loadUserMetas()\" *ngIf=\"user != null && user?.user_type == 'DOCTOR'\">\n                                    <div style=\"padding: 16px;\">\n                                        <span *ngIf=\"loader_user_metas\">Chargement des détails en cours....</span>\n                                        <p *ngIf=\"!loader_user_metas && usermetas.length == 0\">Aucun détail ajouter</p>\n                                    </div>\n                                    <!--\n                                     at: \"Hôpital de Deido\"\ncreated_at: {date: \"2020-07-23 00:00:00.000000\", timezone_type: 3, timezone: \"UTC\"}\ndescription: \"J'ai exercé dans cet hôpital en tant que chirurgien \"\ndoctor_id: 3\nend_year: \"2019\"\nid: \"qnwmkv5704blag6r\"\nobject: \"UserMeta\"\nreal_id: 1\nstart_year: \"2018\"\ntitle: \"Docteur à Hôpital de Deido\"\ntype: \"EXPERIENCE\"\n                                     -->\n\n                                    <div *ngFor=\"let e of usermetas; index as i\">\n                                            <p>\n                                                <span style=\"font-size: 1.2em;\">{{e.start_year}} - {{e.end_year}}</span><br>\n                                                <span style=\"font-weight: bold;\">{{e.title}} : {{e.at}}</span><br>\n                                                <span>{{e.type}}</span><br>\n                                                <span>{{e.description}}</span><br>\n                                            </p>\n                                            <hr *ngIf=\"i+1 < usermetas.length\">\n                                    </div>\n\n                                 </mat-tab>\n                                \n                                <mat-tab label=\"Paramètres\" *ngIf=\"user != null && user?.user_type == 'DOCTOR'\">\n\n                                    <mat-tab-group>\n                                        <mat-tab label=\"Mes paramètres\">\n                                            <div style=\"padding: 16px;\">\n                                                <span *ngIf=\"loader_settings\">Chargement des paramètres en cours....</span>\n                                                <div *ngIf=\"!loader_settings && settings != null\">\n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Frais de consultation en cabinet</mat-label>\n                                                        <input matInput type=\"text\" disabled\n                                                            [value]=\"settings != null ? settings.price_cabinet_consultation : '0'\" />\n                                                    </mat-form-field>\n                                            \n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Frais de consultation à domicile</mat-label>\n                                                        <input matInput type=\"text\" disabled [value]=\"settings != null ? settings.price_house_consultation : '0'\" />\n                                                    </mat-form-field>\n                                            \n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Frais de téléconsultation</mat-label>\n                                                        <input matInput type=\"text\" disabled [value]=\"settings != null ? settings.price_teleconsultation : '0'\" />\n                                                    </mat-form-field>\n                                            \n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Monnaie</mat-label>\n                                                        <input matInput type=\"text\" disabled [value]=\"settings != null ? settings.currency : '0'\" />\n                                                    </mat-form-field>\n                                            \n                                                    <h4>Configurer les frais de service pour ce docteur</h4>\n                                            \n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Type de calcul de frais</mat-label>\n                                                        <select matNativeControl name=\"type\" [(ngModel)]=\"setting_data.fees_type\" required>\n                                                            <option value=\"PERCENT\">Pourcentage</option>\n                                                            <option value=\"FIXED\">Montant fixe</option>\n                                                        </select>\n                                                    </mat-form-field>\n                                            \n                                                    <mat-form-field class=\"example-full-width\">\n                                                        <mat-label>Frais de service</mat-label>\n                                                        <input matInput name=\"fees\" [(ngModel)]=\"setting_data.fees\" type=\"text\"\n                                                            [value]=\"settings != null ? settings.price_cabinet_consultation : '0'\" />\n                                                    </mat-form-field>\n                                            \n                                                    <button mat-raised-button type=\"button\" class=\"btn btn-warning\" (click)=\"saveFees()\">Enregistrer</button>\n                                                </div>\n                                            \n                                            </div>\n                                        </mat-tab>\n                                        <mat-tab label=\"Mes SMS Personalisé\">\n                                            <div class=\"row mt-2 p-2\" style=\"height: 50vh;\">\n                                                <div class=\"col-md-6\" style=\"height: 50vh; overflow: auto\">\n                                                    <ul class=\"list-group\">\n                                                        <a class=\"list-group-item list-group-item-action \" *ngFor=\"let smsItem of smsList; let i = index\"\n                                                            [class]=\"smsItem?.message === sms.message ? 'active': ''\" (click)=\"onSelectSms(smsItem?.id)\"> {{\n                                                            smsItem?.title }} </a>\n                                            \n                                                    </ul>\n                                                </div>\n                                                <div class=\"col-md-6\" style=\"border: 1px solid rgba(10,110,189,0.19);\">\n                                                    <form #f=\"ngForm\" (ngSubmit)=\"updateSMS()\">\n                                                        <textarea class=\"form-control\" [(ngModel)]=\"sms.message\" name=\"message\" placeholder=\"Saisir le sms ici...  \"\n                                                            style=\"height: 40vh !important;\"></textarea>\n                                                        <button class=\"btn btn-primary\" style=\"float:right;\">Sauvegarder</button>\n                                                    </form>\n                                                </div>\n                                            </div>\n                                        </mat-tab>\n                                    </mat-tab-group>\n                                    \n\n                                </mat-tab>\n                            </mat-tab-group>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-5\">\n                <div class=\"card card-profile\">\n                    <div class=\"card-avatar\">\n                        <a href=\"javascript:void(0)\">\n                            <img class=\"img\" src=\"{{user == null ? '': api.WEB_BASED_URL+user.profile_picture}}\"/>\n                        </a>\n                    </div>\n                    <div class=\"card-body\">\n                        <h6 class=\"card-category text-gray\">{{user == null ? '' : (user.user_type == \"ADMIN\" ? \"Administrateur\" : (user.user_type == \"DOCTOR\" ? \"Docteur\" : (user.user_type == \"PATIENT\" ? \"Patient\" : (user.user_type == \"CENTER\" ? \"Centre de santé\" : \"N/A\"))))}}<br> {{user!= null && user.user_type == \"DOCTOR\" && user.center != null ? \"Centre de santé : \"+ user.center.data.name  : \"\"}}</h6>\n                        <h4 class=\"card-title\">{{user == null ? '' : user.first_name + \" \" + user.last_name}}</h4>\n                        <div class=\"row card-description\">\n                            <div class=\"col-md-5 text-left\">\n                                Nom:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user == null ? '' : user.first_name}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 text-left\">\n                                Prénom:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user == null ? '' : user.last_name}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 text-left\">\n                                Email:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user == null ? '' : user.email}}\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-5 text-left\">\n                                Tel.:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user == null ? '' : user.phone}}\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"user != null && user?.user_type == 'DOCTOR'\">\n                            <div class=\"col-md-5 text-left\">\n                                Adresse:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user != null && user?.user_type == \"DOCTOR\" ? user.address : ''}}\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"user != null && user?.user_type == 'DOCTOR'\">\n                            <div class=\"col-md-5 text-left\">\n                                Spécialité:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user != null && user?.user_type == \"DOCTOR\" ? user.speciality_name.name : ''}}\n                            </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"user != null && user?.user_type == 'DOCTOR'\">\n                            <div class=\"col-md-5 text-left\">\n                                Numéro d'ordre des médecins:\n                            </div>\n                            <div class=\"col-md-7 text-left\">\n                                {{user == null ? '': user.doctor_serial_number}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <input type=\"text\" class=\"form-control\"  placeholder=\"Rechercher par Noms\" (keyup)=\"search($event)\">\n        <div class=\"card\">\n            <div class=\"card-header card-header-primary\">\n                <h4 class=\"card-title \">Liste des utilisateurs\n\n                    <button mat-raised-button type=\"button\" class=\"btn btn-warning pull-right\" (click)=\"openEdit(null)\">Ajouter</button>\n                </h4>\n                <p class=\"card-category\"> </p>\n            </div>\n            <div class=\"card-body\">\n                <div class=\"table-responsive\">\n                    <table class=\"table\">\n                        <thead class=\" text-primary\">\n                        <th>\n                            Nom\n                        </th>\n                        <th>\n                            Prénom\n                        </th>\n                        <th>\n                            Email\n                        </th>\n                        <th>\n                            Tel.\n                        </th>\n                        <th>\n                            Type\n                        </th>\n                        <th>\n                            Actions\n                        </th>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let u of users\">\n                            <td>\n                                {{u.first_name == null ? \"N/A\" : u.first_name}}\n                            </td>\n                            <td>\n                                {{u.last_name == null ? \"N/A\" : u.last_name}}\n                            </td>\n                            <td>\n                                {{u.email == null ? \"N/A\" : u.email}}\n                            </td>\n                            <td>\n                                {{u.phone == null ? \"N/A\" : u.phone}}\n                            </td>\n                            <td>\n                                {{u.user_type == \"ADMIN\" ? \"Administrateur\" : (u.user_type == \"DOCTOR\" ? \"Docteur\"+(u.confirmed == 2 ? \"(Rejeter)\": \"\"): (u.user_type == \"PATIENT\" ? \"Patient\" : (u.user_type == \"CENTER\" ? \"Centre de santé\" : \"N/A\")))}}<br>\n                                {{u.user_type == \"DOCTOR\" && u.center != null ? \"Centre de santé : \"+ u.center.data.name  : \"\"}}\n                            </td>\n                            <td>\n                                <a style=\"cursor:pointer\" [routerLink]=\"['/user-details']\" [queryParams]=\"{id: u.id}\" >Plus de Détails</a><br>\n                                <a  style=\"cursor:pointer\" (click)=\"openEdit(u.id)\">Modifier</a><br>\n                                <a  style=\"cursor:pointer\" (click)=\"delete(u.id)\">Supprimer</a>\n                                <div *ngIf=\"u.user_type == 'DOCTOR' && (u.confirmed == 0 || u.confirmed == 4)\">\n                                    <br><a  style=\"cursor:pointer; color: #fff;padding: 10px;\"class=\"btn btn-success\" (click)=\"validate(u.id, 1)\">Valider le médécin</a>\n                                    <br><a  style=\"cursor:pointer; color: #fff;padding: 10px;\"class=\"btn btn-danger\" (click)=\"validate(u.id, 2)\">Rejeter le médécin</a>\n                                </div>\n                                <div *ngIf=\"u.user_type == 'DOCTOR'\">\n                                    <br><a *ngIf=\"u.display_home == 0\"  style=\"cursor:pointer; color: #fff;padding: 10px;\"class=\"btn btn-success\" (click)=\"changeDisplay(u.id, 1)\">Afficher sur la page pro</a>\n                                    <br><a *ngIf=\"u.display_home == 1\"  style=\"cursor:pointer; color: #fff;padding: 10px;\"class=\"btn btn-danger\" (click)=\"changeDisplay(u.id, 0)\">Retirer de la page pro</a>\n                                </div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                   \n                    <mat-paginator [length]=\"meta.pagination.total\"\n                                   [pageSize]=\"meta.pagination.per_page\"\n                                   [pageIndex]=\"meta.pagination.current_page-1\"\n                                   (page)=\"pageEvent = loadUsers($event)\"\n                                    [showFirstLastButtons]=\"true\">\n                    </mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"./src/app/layouts/admin-layout/admin-layout.module.ts",
		"layouts-admin-layout-admin-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/api/api.service.ts":
/*!************************************!*\
  !*** ./src/app/api/api.service.ts ***!
  \************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ApiService_1;




let ApiService = ApiService_1 = class ApiService {
    constructor(http, router, toastr) {
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.WEB_BASED_URL = 'https://api.toobibs.com/public/';
        this.apiUrl = 'https://mspr-api.toobibs.org/';
    }
    getData() {
        return this.http.get(this.apiUrl);
    }
    performPostRequest(path, body) {
        return new Promise((resolve, reject) => {
            this.http.post(ApiService_1.API_BASED_URL + path, body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                })
            })
                .subscribe(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    performPutRequest(path, body) {
        return new Promise((resolve, reject) => {
            this.http.patch(ApiService_1.API_BASED_URL + path, body, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                })
            })
                .subscribe(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    performGetRequest(path) {
        return new Promise((resolve, reject) => {
            this.http.get(ApiService_1.API_BASED_URL + path, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                })
            })
                .subscribe(response => {
                resolve(response);
            }, error => {
                reject(error);
            });
        });
    }
    /**
     * Call GET endpoint
     * Path params should be sent directly on the path
     * @param path
     * @param queryParams
     * @param addToken
     */
    performGETCall(path, queryParams, addToken = false, token = null) {
        let t = "Bearer " + (token == null ? localStorage.getItem('token') : token);
        let headerDict = {
            'Content-type': 'application/json'
        };
        if (addToken) {
            headerDict["Authorization"] = t;
        }
        let params = '';
        if (queryParams != null) {
            params = '?' + this.serialize(queryParams);
        }
        return this.http.get(ApiService_1.API_BASED_URL + path + params, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict) });
    }
    /**
     * Call POST endpoint
     * Path params should be sent directly on the path
     * @param path
     * @param bodyParams
     * @param addMultipart
     * @param addToken
     */
    performPOSTCall(path, bodyParams, addMultipart = false, addToken = false) {
        let headerDict = {};
        if (addToken) {
            headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
        }
        if (!addMultipart) {
            headerDict["Content-type"] = 'application/json';
        }
        let params = '';
        return this.http.post(ApiService_1.API_BASED_URL + path, bodyParams, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict) });
    }
    /**
     * Call PUT endpoint
     * Path params should be sent directly on the path
     * @param path
     * @param bodyParams
     * @param addMultipart
     * @param addToken
     */
    performPUTCall(path, bodyParams, addMultipart = false, addToken = false) {
        let headerDict = {};
        if (addToken) {
            headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
        }
        if (!addMultipart) {
            headerDict["Content-type"] = 'application/json';
        }
        let params = '';
        return this.http.put(ApiService_1.API_BASED_URL + path, bodyParams, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict) });
    }
    /**
     * Call PATCH endpoint
     * Path params should be sent directly on the path
     * @param path
     * @param bodyParams
     * @param addMultipart
     * @param addToken
     */
    performPATCHCall(path, bodyParams, addMultipart = false, addToken = false) {
        let headerDict = {};
        if (addToken) {
            headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
        }
        if (!addMultipart) {
            headerDict["Content-type"] = 'application/json';
        }
        let params = '';
        return this.http.patch(ApiService_1.API_BASED_URL + path, bodyParams, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict) });
    }
    /**
     * Call DELETE endpoint
     * Path params should be sent directly on the path
     * @param path
     * @param addToken
     */
    performDELETECall(path, addToken = false) {
        let headerDict = {
            'Content-type': 'application/json'
        };
        if (addToken) {
            headerDict["Authorization"] = 'Bearer ' + localStorage.getItem('token');
        }
        let params = '';
        return this.http.delete(ApiService_1.API_BASED_URL + path, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](headerDict) });
    }
    serialize(obj) {
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
        }
        return str.join("&");
    }
    handleErrors(res) {
        this.toastr.error(res, "Une erreur est survenue");
        if (res == "An Exception occurred when trying to authenticate the User.") {
            localStorage.removeItem("token");
            localStorage.removeItem("token_data");
            localStorage.removeItem("user");
            this.router.navigate(["/login"]);
        }
    }
    displayMessage(title, res) {
        this.toastr.success(res, title);
    }
    generatePassword() {
        return Array(8).fill("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz").map(function (x) { return x[Math.floor(Math.random() * x.length)]; }).join('');
    }
    isValidEmail(email) {
        let regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        return regexp.test(email);
    }
    performRemoteGETCall(path) {
        return this.http.get(path);
    }
    formatNumber(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
};
ApiService.API_BASED_URL = 'https://apitest.toobibs.org/v1/';
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] }
];
ApiService = ApiService_1 = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
], ApiService);



/***/ }),

/***/ "./src/app/api/firebase.service.ts":
/*!*****************************************!*\
  !*** ./src/app/api/firebase.service.ts ***!
  \*****************************************/
/*! exports provided: FileUpload, FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUpload", function() { return FileUpload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



// @ts-ignore


class FileUpload {
    constructor(file) {
        this.file = file;
    }
}
let FirebaseService = class FirebaseService {
    constructor(afs, afAuth) {
        this.afs = afs;
        this.afAuth = afAuth;
        this.basePath = '/uploads';
    }
    getAlldataByField(table, field, value) {
        return new Promise((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table, ref => ref.where(field, '==', value)).valueChanges({ idField: 'dataId' })
                .subscribe(snapshots => {
                resolve(snapshots);
            }, err => {
                reject(err);
            });
        });
    }
    getAlldata(table) {
        return new Promise((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table).valueChanges({ idField: 'dataId' })
                .subscribe(snapshots => {
                resolve(snapshots);
            }, err => {
                reject(err);
            });
        });
    }
    getAllSubData(table1, id, table2) {
        return new Promise((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table1).doc(id).collection(table2).valueChanges({ idField: 'dataId' })
                .subscribe(snapshots => {
                resolve(snapshots);
            }, err => {
                reject(err);
            });
        });
    }
    getDataById(table, id) {
        return new Promise((resolve, reject) => {
            this.snapshotChangesSubscription = this.afs.collection(table).doc(id).valueChanges()
                .subscribe(snapshots => {
                resolve(snapshots);
            }, err => {
                reject(err);
            });
        });
    }
    deleteData(table, id) {
        return new Promise((resolve, reject) => {
            this.afs.collection(table).doc(id).delete()
                .then(res => resolve(res), err => reject(err));
        });
    }
    createData(table, value, id) {
        return new Promise((resolve, reject) => {
            if (id == null) {
                //value.id = this.generator();
                value.date_saved = new Date().toLocaleString();
                this.afs.collection(table).add(value)
                    .then(res => resolve(res), err => reject(err));
            }
            else {
                this.afs.collection(table).doc(id).update(value)
                    .then(res => resolve(res), err => reject(err));
            }
        });
    }
    pushFileToStorage(fileUpload, callback) {
        const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"]().ref();
        const uploadTask = storageRef.child(`${this.basePath}/${fileUpload.file.name}`).put(fileUpload.file);
        uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_3__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
            // in progress
            //const snap = snapshot as firebase.storage.UploadTaskSnapshot;
            //progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        }, (error) => {
            // fail
            console.log(error);
        }, () => {
            // success
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
                console.log('File available at', downloadURL);
                fileUpload.url = downloadURL;
                fileUpload.name = fileUpload.file.name;
                callback(downloadURL);
            });
        });
    }
};
FirebaseService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"] }
];
FirebaseService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"]])
], FirebaseService);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n    cursor: pointer !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _centers_centers_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./centers/centers.component */ "./src/app/centers/centers.component.ts");
/* harmony import */ var _users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./users/create-user/create-user.component */ "./src/app/users/create-user/create-user.component.ts");
/* harmony import */ var _users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./users/user-details/user-details.component */ "./src/app/users/user-details/user-details.component.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _users_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./users/confirm-delete/confirm-delete.component */ "./src/app/users/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _centers_create_center_create_center_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./centers/create-center/create-center.component */ "./src/app/centers/create-center/create-center.component.ts");
/* harmony import */ var _centers_center_details_center_details_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./centers/center-details/center-details.component */ "./src/app/centers/center-details/center-details.component.ts");
/* harmony import */ var _centers_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./centers/confirm-delete/confirm-delete.component */ "./src/app/centers/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _centers_open_map_open_map_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./centers/open-map/open-map.component */ "./src/app/centers/open-map/open-map.component.ts");
/* harmony import */ var _centers_doctors_in_center_doctors_in_center_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./centers/doctors-in-center/doctors-in-center.component */ "./src/app/centers/doctors-in-center/doctors-in-center.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _specialities_specialities_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./specialities/specialities.component */ "./src/app/specialities/specialities.component.ts");
/* harmony import */ var _specialities_create_speciality_create_speciality_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./specialities/create-speciality/create-speciality.component */ "./src/app/specialities/create-speciality/create-speciality.component.ts");
/* harmony import */ var _specialities_confirm_delete_speciality_confirm_delete_speciality_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./specialities/confirm-delete-speciality/confirm-delete-speciality.component */ "./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _cancelled_appointments_cancelled_appointments_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./cancelled-appointments/cancelled-appointments.component */ "./src/app/cancelled-appointments/cancelled-appointments.component.ts");
/* harmony import */ var _sms_sms_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sms/sms.component */ "./src/app/sms/sms.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelectModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_29__["MatButtonToggleModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_28__["MatTabsModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_36__["MatRadioModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_43__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_42__["environment"].firebase),
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyC4c9IP1Tr0NyNr07YE-hCIKgWqCcJxdpA'
            }),
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_40__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_41__["MatCardModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_10__["AdminLayoutComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_22__["UsersComponent"],
            _settings_settings_component__WEBPACK_IMPORTED_MODULE_23__["SettingsComponent"],
            _centers_centers_component__WEBPACK_IMPORTED_MODULE_24__["CentersComponent"],
            _users_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_25__["CreateUserComponent"],
            _users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_26__["UserDetailsComponent"],
            _users_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_30__["ConfirmDeleteComponent"],
            _centers_create_center_create_center_component__WEBPACK_IMPORTED_MODULE_31__["CreateCenterComponent"],
            _centers_center_details_center_details_component__WEBPACK_IMPORTED_MODULE_32__["CenterDetailsComponent"],
            _centers_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_33__["ConfirmCenterDeleteComponent"],
            _centers_open_map_open_map_component__WEBPACK_IMPORTED_MODULE_34__["OpenMapComponent"],
            _centers_doctors_in_center_doctors_in_center_component__WEBPACK_IMPORTED_MODULE_35__["DoctorsInCenterComponent"],
            _specialities_specialities_component__WEBPACK_IMPORTED_MODULE_37__["SpecialitiesComponent"],
            _specialities_create_speciality_create_speciality_component__WEBPACK_IMPORTED_MODULE_38__["CreateSpecialityComponent"],
            _specialities_confirm_delete_speciality_confirm_delete_speciality_component__WEBPACK_IMPORTED_MODULE_39__["ConfirmDeleteSpecialityComponent"],
            _cancelled_appointments_cancelled_appointments_component__WEBPACK_IMPORTED_MODULE_44__["CancelledAppointmentsComponent"],
            _sms_sms_component__WEBPACK_IMPORTED_MODULE_45__["SmsComponent"]
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






const routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [{
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                useHash: true
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/cancelled-appointments/cancelled-appointments.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/cancelled-appointments/cancelled-appointments.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlbGxlZC1hcHBvaW50bWVudHMvY2FuY2VsbGVkLWFwcG9pbnRtZW50cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cancelled-appointments/cancelled-appointments.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/cancelled-appointments/cancelled-appointments.component.ts ***!
  \****************************************************************************/
/*! exports provided: CancelledAppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelledAppointmentsComponent", function() { return CancelledAppointmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CancelledAppointmentsComponent = class CancelledAppointmentsComponent {
    constructor(api, dialog, spinner) {
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.consultations = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
    }
    ngOnInit() {
        this.loadConsultations(null);
    }
    loadConsultations($event) {
        this.spinner.show();
        const params = { orderBy: "created_at", sortedBy: "desc", search: 'status:3', include: 'doctor,user' };
        if ($event != null)
            params.page = $event.pageIndex + 1;
        this.api.performGETCall("appointments", params, true).subscribe(res => {
            //console.log("consultations : ",res);
            this.spinner.hide();
            this.consultations = res.data;
            this.meta = res.meta;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
        return $event;
    }
    remboursser(id, status) {
        this.spinner.show();
        this.api.performPATCHCall("appointments/" + id, { status: status, rembourssement: true }, false, true).subscribe(res => {
            this.spinner.hide();
            this.loadConsultations(this.pageEvent);
            this.api.displayMessage("Succès", "Rembourssement enregistré avec succès");
            //console.log(res);
        }, err => {
            this.spinner.hide();
            //console.log(err.error);
            this.api.handleErrors(err.error.message);
        });
    }
};
CancelledAppointmentsComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CancelledAppointmentsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cancelled-appointments',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cancelled-appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cancelled-appointments/cancelled-appointments.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cancelled-appointments.component.css */ "./src/app/cancelled-appointments/cancelled-appointments.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CancelledAppointmentsComponent);



/***/ }),

/***/ "./src/app/centers/center-details/center-details.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/centers/center-details/center-details.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvY2VudGVyLWRldGFpbHMvY2VudGVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/centers/center-details/center-details.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/centers/center-details/center-details.component.ts ***!
  \********************************************************************/
/*! exports provided: CenterDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterDetailsComponent", function() { return CenterDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CenterDetailsComponent = class CenterDetailsComponent {
    constructor(data, dialogRef, api, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.spinner = spinner;
        this.users = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
    }
    ngOnInit() {
        this.loadUsers(null);
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    loadUsers($event) {
        this.spinner.show();
        this.api.performGETCall("users", $event == null ? null : { pageIndex: $event.pageIndex + 1 }, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.users = res.data;
            this.meta = res.meta;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
};
CenterDetailsComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CenterDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-center-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./center-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/center-details/center-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./center-details.component.css */ "./src/app/centers/center-details/center-details.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CenterDetailsComponent);



/***/ }),

/***/ "./src/app/centers/centers.component.css":
/*!***********************************************!*\
  !*** ./src/app/centers/centers.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvY2VudGVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/centers/centers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/centers/centers.component.ts ***!
  \**********************************************/
/*! exports provided: CentersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CentersComponent", function() { return CentersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/centers/confirm-delete/confirm-delete.component.ts");
/* harmony import */ var _create_center_create_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-center/create-center.component */ "./src/app/centers/create-center/create-center.component.ts");
/* harmony import */ var _open_map_open_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./open-map/open-map.component */ "./src/app/centers/open-map/open-map.component.ts");
/* harmony import */ var _doctors_in_center_doctors_in_center_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doctors-in-center/doctors-in-center.component */ "./src/app/centers/doctors-in-center/doctors-in-center.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








let CentersComponent = class CentersComponent {
    constructor(api, dialog, spinner) {
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.centers = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
    }
    ngOnInit() {
        this.loadCenters(null);
    }
    loadCenters($event) {
        this.spinner.show();
        this.api.performGETCall("centers", $event == null ? null : { orderBy: "name", page: $event.pageIndex + 1 }, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.centers = res.data;
            this.meta = res.meta;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    openEdit(id) {
        let dialogRef = this.dialog.open(_create_center_create_center_component__WEBPACK_IMPORTED_MODULE_5__["CreateCenterComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "success")
                this.loadCenters(null);
        });
    }
    openDoctors(center_id) {
        let dialogRef = this.dialog.open(_doctors_in_center_doctors_in_center_component__WEBPACK_IMPORTED_MODULE_7__["DoctorsInCenterComponent"], {
            data: { center_id: center_id },
            disableClose: true,
            height: '70%',
            width: '70%'
        });
        dialogRef.afterClosed().subscribe(result => {
        });
    }
    openMap(lat, lng) {
        let dialogRef = this.dialog.open(_open_map_open_map_component__WEBPACK_IMPORTED_MODULE_6__["OpenMapComponent"], {
            data: { lat: parseFloat(lat), lng: parseFloat(lng), draggable: false },
            height: '70%',
            width: '70%'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != 'cancel') {
                const res = JSON.parse(result);
                //this.center.lat = res.lat;
                //this.center.lng = res.lng;
            }
        });
    }
    delete(id) {
        let dialogRef = this.dialog.open(_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmCenterDeleteComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "success")
                this.loadCenters(null);
        });
    }
};
CentersComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CentersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-centers',
        template: __importDefault(__webpack_require__(/*! raw-loader!./centers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/centers.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./centers.component.css */ "./src/app/centers/centers.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CentersComponent);



/***/ }),

/***/ "./src/app/centers/confirm-delete/confirm-delete.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/centers/confirm-delete/confirm-delete.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvY29uZmlybS1kZWxldGUvY29uZmlybS1kZWxldGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/centers/confirm-delete/confirm-delete.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/centers/confirm-delete/confirm-delete.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmCenterDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmCenterDeleteComponent", function() { return ConfirmCenterDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ConfirmCenterDeleteComponent = class ConfirmCenterDeleteComponent {
    constructor(data, dialogRef, api, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.spinner = spinner;
    }
    ngOnInit() {
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    deleteCenter() {
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performDELETECall("centers/" + this.data.id, true).subscribe(res => {
                this.spinner.hide();
                this.api.displayMessage("Succès", "Centre supprimé avec succès");
                this.closeDialog('success');
            }, err => {
                this.api.handleErrors(err.error.message);
            });
        }
    }
};
ConfirmCenterDeleteComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
ConfirmCenterDeleteComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-confirm-delete',
        template: __importDefault(__webpack_require__(/*! raw-loader!./confirm-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/confirm-delete/confirm-delete.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./confirm-delete.component.css */ "./src/app/centers/confirm-delete/confirm-delete.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], ConfirmCenterDeleteComponent);



/***/ }),

/***/ "./src/app/centers/create-center/create-center.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/centers/create-center/create-center.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvY3JlYXRlLWNlbnRlci9jcmVhdGUtY2VudGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/centers/create-center/create-center.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/centers/create-center/create-center.component.ts ***!
  \******************************************************************/
/*! exports provided: CreateCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCenterComponent", function() { return CreateCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _open_map_open_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../open-map/open-map.component */ "./src/app/centers/open-map/open-map.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let CreateCenterComponent = class CreateCenterComponent {
    constructor(data, dialogRef, api, dialog, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.center = {
            'name': '',
            'address': '',
            'lat': '',
            'lng': '',
            'phone': '',
            'email': '',
            'center_type_id': '0',
        };
        this.tel = null;
    }
    ngOnInit() {
        var input = document.querySelector('#phone');
        const $this = this;
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performGETCall('centers/' + this.data.id, null, true).subscribe(res => {
                //console.log(res);
                this.spinner.hide();
                this.center = {
                    'name': res.data.name,
                    'address': res.data.address,
                    'lat': res.data.lat,
                    'lng': res.data.lng,
                    'phones': res.data.phone,
                    'email': res.data.email,
                    'center_type_id': res.data.center_type_id,
                };
                setTimeout(() => {
                    $this.tel = window.intlTelInput(input, {
                        initialCountry: 'CI',
                        utilsScript: 'assets/js/utils.js',
                    });
                    //console.log(res.data.phone);
                    $this.tel.setNumber('+' + res.data.phone);
                    //console.log($this.tel.getNumber());
                }, 3000);
            }, err => {
                this.spinner.hide();
                this.api.handleErrors(err.error.message);
            });
        }
        else {
            setTimeout(() => {
                var input = document.querySelector('#phone');
                this.tel = window.intlTelInput(input, {
                    initialCountry: 'CI',
                    utilsScript: 'assets/js/utils.js',
                });
            }, 3000);
        }
    }
    saveCenter() {
        if (this.center.name.length > 0 && this.center.address.length > 0 && this.center.email.length > 0 && this.center.lat.toString().length > 1 && this.center.lng.toString().length > 1) {
            var countryData = this.tel.getSelectedCountryData();
            if (countryData.dialCode != 225 && !this.tel.isValidNumber()) {
                this.api.handleErrors('Numéro de téléphone invalide!');
                return;
            }
            else {
                this.center.phone = countryData.dialCode == 225 ? (this.tel.getNumber().toString().indexOf('225') != -1 ? this.tel.getNumber().toString().replace('+', '') : '225' + this.tel.getNumber().toString().replace('+', '')) : this.tel.getNumber().toString().replace('+', '');
                var countryData = this.tel.getSelectedCountryData();
                this.center.phone_login = this.tel.getNumber().toString().replace("+" + countryData.dialCode, "");
            }
            if (!this.api.isValidEmail(this.center.email)) {
                this.api.handleErrors('Email invalide!');
                return;
            }
            //this.center.phone = this.center.phones;  
            if (this.data.id != null) {
                this.spinner.show();
                this.api.performPATCHCall('centers/' + this.data.id, this.center, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Centre mise à jour avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            }
            else {
                this.center.password = this.api.generatePassword();
                //console.log('Password', this.center.password);
                this.spinner.show();
                this.api.performPOSTCall('centers', this.center, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Centre crée avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            }
        }
        else {
            this.api.handleErrors('Veuillez renseigner tous les champs!');
        }
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    openMap() {
        let dialogRef = this.dialog.open(_open_map_open_map_component__WEBPACK_IMPORTED_MODULE_4__["OpenMapComponent"], {
            data: { lat: this.center != null ? this.center.lat : 0, lng: this.center != null ? this.center.lng : 0, draggable: true },
            height: '70%',
            width: '70%'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != 'cancel') {
                const res = JSON.parse(result);
                this.center.lat = res.lat;
                this.center.lng = res.lng;
            }
        });
    }
};
CreateCenterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CreateCenterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create-center',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create-center.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/create-center/create-center.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./create-center.component.css */ "./src/app/centers/create-center/create-center.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CreateCenterComponent);



/***/ }),

/***/ "./src/app/centers/doctors-in-center/doctors-in-center.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/centers/doctors-in-center/doctors-in-center.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvZG9jdG9ycy1pbi1jZW50ZXIvZG9jdG9ycy1pbi1jZW50ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/centers/doctors-in-center/doctors-in-center.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/centers/doctors-in-center/doctors-in-center.component.ts ***!
  \**************************************************************************/
/*! exports provided: DoctorsInCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoctorsInCenterComponent", function() { return DoctorsInCenterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let DoctorsInCenterComponent = class DoctorsInCenterComponent {
    constructor(data, dialogRef, api, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.spinner = spinner;
        this.users = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
    }
    ngOnInit() {
        this.loadUsers(null);
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    loadUsers($event) {
        this.spinner.show();
        this.api.performGETCall("users", $event == null ? { search: "center_id:" + this.data.center_id } : { pageIndex: $event.pageIndex + 1, search: "center_id:" + this.data.center_id }, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.users = res.data;
            this.meta = res.meta;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
};
DoctorsInCenterComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
DoctorsInCenterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-doctors-in-center',
        template: __importDefault(__webpack_require__(/*! raw-loader!./doctors-in-center.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/doctors-in-center/doctors-in-center.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./doctors-in-center.component.css */ "./src/app/centers/doctors-in-center/doctors-in-center.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], DoctorsInCenterComponent);



/***/ }),

/***/ "./src/app/centers/open-map/open-map.component.css":
/*!*********************************************************!*\
  !*** ./src/app/centers/open-map/open-map.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n    height: 90%;\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VudGVycy9vcGVuLW1hcC9vcGVuLW1hcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVzs7QUFFZiIsImZpbGUiOiJzcmMvYXBwL2NlbnRlcnMvb3Blbi1tYXAvb3Blbi1tYXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICAgIGhlaWdodDogOTAlO1xuXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/centers/open-map/open-map.component.ts":
/*!********************************************************!*\
  !*** ./src/app/centers/open-map/open-map.component.ts ***!
  \********************************************************/
/*! exports provided: OpenMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpenMapComponent", function() { return OpenMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let OpenMapComponent = class OpenMapComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.draggable = true;
        //this.draggable = this.
    }
    ngOnInit() {
        if (this.data.lat == 0)
            this.setCurrentLocation();
        else {
            this.lat = parseFloat(this.data.lat);
            this.lng = parseFloat(this.data.lng);
            this.zoom = 15;
        }
    }
    setCurrentLocation() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                //console.log(position);
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;
                this.zoom = 15;
            });
        }
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    savePos() {
        this.closeDialog(JSON.stringify({ lat: this.lat, lng: this.lng }));
    }
    markerDragEnd($event) {
        //console.log($event);
        this.lat = $event.coords.lat;
        this.lng = $event.coords.lng;
    }
};
OpenMapComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }
];
OpenMapComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-open-map',
        template: __importDefault(__webpack_require__(/*! raw-loader!./open-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/centers/open-map/open-map.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./open-map.component.css */ "./src/app/centers/open-map/open-map.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]])
], OpenMapComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ],
        declarations: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ],
        exports: [
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FooterComponent = class FooterComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() {
    }
};
FooterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-footer',
        template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/components/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let NavbarComponent = class NavbarComponent {
    constructor(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    ngOnInit() {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(listTitle => listTitle);
        const navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.router.events.subscribe((event) => {
            this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
                this.mobile_menu_visible = 0;
            }
        });
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    }
    ;
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    }
    ;
    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
        const body = document.getElementsByTagName('body')[0];
        if (this.mobile_menu_visible == 1) {
            // $('html').removeClass('nav-open');
            body.classList.remove('nav-open');
            if ($layer) {
                $layer.remove();
            }
            setTimeout(function () {
                $toggle.classList.remove('toggled');
            }, 400);
            this.mobile_menu_visible = 0;
        }
        else {
            setTimeout(function () {
                $toggle.classList.add('toggled');
            }, 430);
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.main-panel')) {
                document.getElementsByClassName('main-panel')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                setTimeout(function () {
                    $layer.remove();
                    $toggle.classList.remove('toggled');
                }, 400);
            }.bind(this);
            body.classList.add('nav-open');
            this.mobile_menu_visible = 1;
        }
    }
    ;
    getTitle() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("token_data");
        localStorage.removeItem("user");
        this.router.navigate(["/login"]);
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavbarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-navbar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


const ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    { path: '/users', title: 'Utilisateurs', icon: 'person', class: '' },
    { path: '/centers', title: 'Centres', icon: 'business', class: '' },
    { path: '/specialities', title: 'Spécialités', icon: 'business', class: '' },
    { path: '/rdv-annule', title: 'RDV annulés', icon: 'business', class: '' },
    // { path: '/sms', title: 'SMS Personalisé',  icon:'business', class: '' },
    { path: '/settings', title: 'Paramètres', icon: 'content_paste', class: '' },
];
let SidebarComponent = class SidebarComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    ;
    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("token_data");
        localStorage.removeItem("user");
        this.router.navigate(["/login"]);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
SidebarComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sidebar',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sidebar.component.css */ "./src/app/components/sidebar/sidebar.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], SidebarComponent);



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n  cursor: pointer !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvQzpcXGRldlxcYW5ndWxhclxcdG9vYmlic1xcdG9vYmliLWFkbWluLWRlcGxvaWVtZW50L3NyY1xcYXBwXFxsYXlvdXRzXFxhZG1pbi1sYXlvdXRcXGFkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0cy9hZG1pbi1sYXlvdXQvYWRtaW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvYWRtaW4tbGF5b3V0L2FkbWluLWxheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn1cbiIsImEge1xuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let AdminLayoutComponent = class AdminLayoutComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
    }
    ngOnInit() {
        //console.log(this.router.url);
        if (localStorage.getItem("token") == null && this.router.url != "/login") {
            this.router.navigate(["/login"]);
        }
        const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;
        if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
            // if we are on windows OS we activate the perfectScrollbar function
            document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
        }
        else {
            document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
        }
        const elemMainPanel = document.querySelector('.main-panel');
        const elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]).subscribe((event) => {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            let ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemSidebar);
        }
        const window_width = jquery__WEBPACK_IMPORTED_MODULE_5__(window).width();
        let $sidebar = jquery__WEBPACK_IMPORTED_MODULE_5__('.sidebar');
        let $sidebar_responsive = jquery__WEBPACK_IMPORTED_MODULE_5__('body > .navbar-collapse');
        let $sidebar_img_container = $sidebar.find('.sidebar-background');
        if (window_width > 767) {
            if (jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .dropdown').addClass('open');
            }
        }
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin a').click(function (event) {
            // Alex if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
            if (jquery__WEBPACK_IMPORTED_MODULE_5__(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .badge').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('active');
            var new_color = jquery__WEBPACK_IMPORTED_MODULE_5__(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        jquery__WEBPACK_IMPORTED_MODULE_5__('.fixed-plugin .img-holder').click(function () {
            let $full_page_background = jquery__WEBPACK_IMPORTED_MODULE_5__('.full-page-background');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').siblings().removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(this).parent('li').addClass('active');
            var new_image = jquery__WEBPACK_IMPORTED_MODULE_5__(this).find("img").attr('src');
            if ($sidebar_img_container.length != 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length != 0) {
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
    }
    ngAfterViewInit() {
        this.runOnRouteChange();
    }
    isMaps(path) {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (path == titlee) {
            return false;
        }
        else {
            return true;
        }
    }
    runOnRouteChange() {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemMainPanel = document.querySelector('.main-panel');
            const ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["default"](elemMainPanel);
            ps.update();
        }
    }
    isMac() {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }
};
AdminLayoutComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminLayoutComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-admin-layout',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin-layout.component.scss */ "./src/app/layouts/admin-layout/admin-layout.component.scss")).default]
    }),
    __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdminLayoutComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let LoginComponent = class LoginComponent {
    constructor(api, router, spinner) {
        this.api = api;
        this.router = router;
        this.spinner = spinner;
        this.data = {
            username: '',
            password: ''
        };
        if (localStorage.getItem("token") != null && this.router.url == "/login") {
            this.router.navigate(["/dashboard"]);
        }
    }
    ngOnInit() {
    }
    login() {
        if (this.data.username.length > 0 && this.data.password.length > 0) {
            this.spinner.show();
            this.data.client_id = 2;
            this.data.client_secret = "iqn28N849cRfBh14xLpvRF089URio9jh4W7EhVqm";
            this.data.grant_type = "password";
            this.data.scope = "";
            this.api.performPOSTCall('oauth/token', this.data).subscribe(d => {
                this.spinner.hide();
                //console.log(d);
                //if(d.error)
                this.api.performGETCall('user/profile', null, true, d.access_token).subscribe(r => {
                    //console.log(r);
                    /*  this.api.displayMessage("Succès", "Authentification réussi, vous serrez rediriger ver le dashboard");
                    localStorage.setItem('token', d.access_token);
                    localStorage.setItem('user', JSON.stringify(r.data));
                    localStorage.setItem('token_data', JSON.stringify(d));
                    this.router.navigate(['/dashboard']);*/
                    if (r.data.user_type == "ADMIN") {
                        this.api.displayMessage("Succès", "Authentification réussi, vous serez redirigé vers le dashboard");
                        localStorage.setItem('token', d.access_token);
                        localStorage.setItem('user', JSON.stringify(r.data));
                        localStorage.setItem('token_data', JSON.stringify(d));
                        this.router.navigate(['/dashboard']);
                    }
                    else {
                        this.spinner.hide();
                        this.api.handleErrors("Seuls les administrateurs sont autorisés à se connecter sur ce dashboard");
                    }
                }, err => {
                    this.spinner.hide();
                    //console.log(err.error);
                    this.api.handleErrors(err.error.message);
                });
            }, error => {
                this.spinner.hide();
                //console.log(error.error);
                this.api.handleErrors(error.error);
            });
        }
        else {
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _api_firebase_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase.service */ "./src/app/api/firebase.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






//import * as firebase from  'firebase/app'
let SettingsComponent = class SettingsComponent {
    constructor(formBuilder, api, spinner, firebaseService) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.spinner = spinner;
        this.firebaseService = firebaseService;
        this.panelOpenState = false;
        this.data = {
            title: '',
            link: '',
            description: ''
        };
        this.dataCarreers = {
            title: '',
            date: '',
            description: '',
            mail: ''
        };
        this.dataContact = {
            location: "",
            phone: "",
            email: "",
        };
        this.dataFaq = {
            question: "",
            answer: "",
        };
        this.medias = [];
        this.carreers = [];
        this.faqs = [];
        this.id = null;
    }
    ngOnInit() {
        this.getMedia();
        this.getCarreers();
        this.getFaqs();
        this.getContact();
    }
    getMedia() {
        this.firebaseService.getAlldata('media').then(res => {
            this.medias = res;
            //console.log(this.medias);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    getCarreers() {
        this.firebaseService.getAlldata('carreers').then(res => {
            this.carreers = res;
            //console.log(this.carreers);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    getFaqs() {
        this.firebaseService.getAlldata('faqs').then(res => {
            this.faqs = res;
            //console.log(this.carreers);
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    edit(id) {
        this.id = id;
        this.firebaseService.getDataById('media', this.id).then(res => {
            //this.medias = res;
            //console.log(res);
            this.data = {
                title: res.title,
                link: res.link,
                description: res.description
            };
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    editCarreers(id) {
        this.id = id;
        this.firebaseService.getDataById('carreers', this.id).then(res => {
            //this.medias = res;
            this.dataCarreers = {
                title: res.title,
                date: res.date,
                description: res.description,
                mail: res.mail
            };
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    editFaq(id) {
        this.id = id;
        this.firebaseService.getDataById('faqs', this.id).then(res => {
            //this.medias = res;
            this.dataFaq = {
                question: res.question,
                answer: res.answer
            };
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    onSubmit() {
        if (this.data.title.length > 0 && this.data.link.length > 0 && this.data.description.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('media', this.data, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.data = {
                    title: '',
                    link: '',
                    description: ''
                };
                this.getMedia();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        }
        else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }
    onSubmitFaq() {
        if (this.dataFaq.question.length > 0 && this.dataFaq.answer.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('faqs', this.dataFaq, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataFaq = {
                    question: '',
                    answer: ''
                };
                this.getFaqs();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        }
        else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }
    onSubmitCarreers() {
        if (this.dataCarreers.title.length > 0 && this.dataCarreers.date.length > 0 && this.dataCarreers.mail.length > 0 && this.dataCarreers.description.length > 0) {
            this.spinner.show();
            this.firebaseService.createData('carreers', this.dataCarreers, this.id).then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataCarreers = {
                    title: '',
                    date: '',
                    description: '',
                    mail: ''
                };
                this.getCarreers();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        }
        else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }
    onSubmitContact() {
        if (this.dataContact.location.length > 0 && this.dataContact.phone.length > 0 && this.dataContact.email.length > 0) {
            this.spinner.show();
            if (this.cgu_file) {
                this.uploadCgu();
            }
            if (this.cgv_file) {
                this.uploadCgv();
            }
            this.firebaseService.createData('contact', this.dataContact, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.dataContact = {
                    location: '',
                    phone: '',
                    email: '',
                };
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        }
        else {
            this.api.handleErrors('Veuillez remplir tous les champs');
        }
    }
    deleteD(dataId) {
        this.firebaseService.deleteData('media', dataId).then(res => {
            //this.medias = res;
            //console.log(res);
            this.getMedia();
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    deleteCarreers(dataId) {
        this.firebaseService.deleteData('carreers', dataId).then(res => {
            //this.medias = res;
            //console.log(res);
            this.getCarreers();
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    deleteFaq(dataId) {
        this.firebaseService.deleteData('faqs', dataId).then(res => {
            //this.medias = res;
            //console.log(res);
            this.getFaqs();
        }, err => {
            //console.log(err);
            //this.spinner.hide();
            this.api.handleErrors('Une erreur sest produite');
        });
    }
    getContact() {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["firestore"]().collection('contact').doc('contact').get().then(doc => {
            this.dataContact = {
                location: doc.data().location,
                email: doc.data().email,
                phone: doc.data().phone,
            };
            //console.log(this.dataContact)
        }).catch(err => { });
    }
    selectCGUFile(event) {
        this.cgu_file = event.target.files;
    }
    selectCGVFile(event) {
        this.cgv_file = event.target.files;
    }
    uploadCgu() {
        const file = this.cgu_file.item(0);
        this.cgu_file = null;
        let currentFileUpload = new _api_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](file);
        this.firebaseService.pushFileToStorage(currentFileUpload, (path) => {
            console.log("cgu", path);
            this.firebaseService.createData('contact', {
                cgu_pdf: path
            }, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        });
    }
    uploadCgv() {
        const file = this.cgv_file.item(0);
        this.cgv_file = null;
        let currentFileUpload = new _api_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FileUpload"](file);
        this.firebaseService.pushFileToStorage(currentFileUpload, (path) => {
            console.log("cgv", path);
            this.firebaseService.createData('contact', {
                cgv_pdf: path
            }, "contact").then(res => {
                this.spinner.hide();
                this.id = null;
                this.getContact();
            }, err => {
                //console.log(err);
                this.spinner.hide();
                this.api.handleErrors('Une erreur sest produite');
            });
        });
    }
};
SettingsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
    { type: _api_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"] }
];
SettingsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-settings',
        template: __importDefault(__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _api_firebase_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseService"]])
], SettingsComponent);



/***/ }),

/***/ "./src/app/sms/sms.component.css":
/*!***************************************!*\
  !*** ./src/app/sms/sms.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ntcy9zbXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/sms/sms.component.ts":
/*!**************************************!*\
  !*** ./src/app/sms/sms.component.ts ***!
  \**************************************/
/*! exports provided: SmsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmsComponent", function() { return SmsComponent; });
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let SmsComponent = class SmsComponent {
    constructor(apiService, spinner) {
        this.apiService = apiService;
        this.spinner = spinner;
        this.sms = {
            message: '',
        };
    }
    ngOnInit() {
        this.spinner.show();
        this.getSMS().then(() => {
            this.spinner.hide();
        }).catch(error => console.log(error));
    }
    getSMS() {
        return this.apiService.performGetRequest('sms')
            .then(({ data }) => {
            this.smsList = data;
        });
    }
    updateSMS() {
        this.spinner.show();
        this.apiService.performPutRequest(`sms/${this.sms.id}`, this.sms).then(() => {
            this.getSMS();
            this.spinner.hide();
        }).catch(error => console.log(error));
    }
    onSelectSms(id) {
        this.sms = this.smsList.find(sms => sms.id === id);
    }
};
SmsComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"] }
];
SmsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-sms',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sms.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sms/sms.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sms.component.css */ "./src/app/sms/sms.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_0__["NgxSpinnerService"]])
], SmsComponent);



/***/ }),

/***/ "./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxpdGllcy9jb25maXJtLWRlbGV0ZS1zcGVjaWFsaXR5L2NvbmZpcm0tZGVsZXRlLXNwZWNpYWxpdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConfirmDeleteSpecialityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteSpecialityComponent", function() { return ConfirmDeleteSpecialityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ConfirmDeleteSpecialityComponent = class ConfirmDeleteSpecialityComponent {
    constructor(data, dialogRef, api, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.spinner = spinner;
    }
    ngOnInit() {
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    deleteSpecialities() {
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performDELETECall("specialities/" + this.data.id, true).subscribe(res => {
                this.spinner.hide();
                this.api.displayMessage("Succès", "Spécialité supprimée avec succès");
                this.closeDialog('success');
            }, err => {
                this.api.handleErrors(err.error.message);
            });
        }
    }
};
ConfirmDeleteSpecialityComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
ConfirmDeleteSpecialityComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-confirm-delete-speciality',
        template: __importDefault(__webpack_require__(/*! raw-loader!./confirm-delete-speciality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./confirm-delete-speciality.component.css */ "./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], ConfirmDeleteSpecialityComponent);



/***/ }),

/***/ "./src/app/specialities/create-speciality/create-speciality.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/specialities/create-speciality/create-speciality.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxpdGllcy9jcmVhdGUtc3BlY2lhbGl0eS9jcmVhdGUtc3BlY2lhbGl0eS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/specialities/create-speciality/create-speciality.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/specialities/create-speciality/create-speciality.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateSpecialityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateSpecialityComponent", function() { return CreateSpecialityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CreateSpecialityComponent = class CreateSpecialityComponent {
    constructor(data, dialogRef, api, dialog, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.speciality = {
            'name': '',
            'description': ''
        };
    }
    ngOnInit() {
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performGETCall('specialities/' + this.data.id, null, true).subscribe(res => {
                //console.log(res);
                this.spinner.hide();
                this.speciality = {
                    'name': res.data.name,
                    'description': res.data.description
                };
            }, err => {
                this.spinner.hide();
                this.api.handleErrors(err.error.message);
            });
        }
    }
    saveSpeciality() {
        //console.log(this.speciality);
        if (this.speciality.name.length > 0) {
            if (this.data.id != null) {
                this.spinner.show();
                this.api.performPATCHCall('specialities/' + this.data.id, this.speciality, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Spécialité mise à jour avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            }
            else {
                this.spinner.show();
                this.api.performPOSTCall('specialities', this.speciality, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Spécialité créée avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    this.api.handleErrors(err.error.message);
                });
            }
        }
        else {
            this.api.handleErrors("Veuillez renseigner tous les champs!");
        }
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
};
CreateSpecialityComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
CreateSpecialityComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create-speciality',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create-speciality.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/create-speciality/create-speciality.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./create-speciality.component.css */ "./src/app/specialities/create-speciality/create-speciality.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], CreateSpecialityComponent);



/***/ }),

/***/ "./src/app/specialities/specialities.component.css":
/*!*********************************************************!*\
  !*** ./src/app/specialities/specialities.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NwZWNpYWxpdGllcy9zcGVjaWFsaXRpZXMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/specialities/specialities.component.ts":
/*!********************************************************!*\
  !*** ./src/app/specialities/specialities.component.ts ***!
  \********************************************************/
/*! exports provided: SpecialitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialitiesComponent", function() { return SpecialitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _create_speciality_create_speciality_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-speciality/create-speciality.component */ "./src/app/specialities/create-speciality/create-speciality.component.ts");
/* harmony import */ var _confirm_delete_speciality_confirm_delete_speciality_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-delete-speciality/confirm-delete-speciality.component */ "./src/app/specialities/confirm-delete-speciality/confirm-delete-speciality.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let SpecialitiesComponent = class SpecialitiesComponent {
    constructor(api, dialog, spinner) {
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.specialities = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
    }
    ngOnInit() {
        this.loadSpecialities(null);
    }
    loadSpecialities($event) {
        this.spinner.show();
        this.api.performGETCall("getspecialities", $event == null ? null : { orderBy: "name", page: $event.pageIndex + 1 }, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.specialities = res.data;
            this.meta = res.meta;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    openEdit(id) {
        let dialogRef = this.dialog.open(_create_speciality_create_speciality_component__WEBPACK_IMPORTED_MODULE_4__["CreateSpecialityComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "success")
                this.loadSpecialities(null);
        });
    }
    delete(id) {
        let dialogRef = this.dialog.open(_confirm_delete_speciality_confirm_delete_speciality_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteSpecialityComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == "success")
                this.loadSpecialities(null);
        });
    }
};
SpecialitiesComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
SpecialitiesComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-specialities',
        template: __importDefault(__webpack_require__(/*! raw-loader!./specialities.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/specialities/specialities.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./specialities.component.css */ "./src/app/specialities/specialities.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], SpecialitiesComponent);



/***/ }),

/***/ "./src/app/users/confirm-delete/confirm-delete.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/users/confirm-delete/confirm-delete.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2NvbmZpcm0tZGVsZXRlL2NvbmZpcm0tZGVsZXRlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/confirm-delete/confirm-delete.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/users/confirm-delete/confirm-delete.component.ts ***!
  \******************************************************************/
/*! exports provided: ConfirmDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDeleteComponent", function() { return ConfirmDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let ConfirmDeleteComponent = class ConfirmDeleteComponent {
    constructor(data, dialogRef, api, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.spinner = spinner;
    }
    ngOnInit() {
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    deleteUser() {
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performDELETECall("users/" + this.data.id, true).subscribe(res => {
                this.spinner.hide();
                this.api.displayMessage("Succès", "Utilisateur supprimé avec succès");
                this.closeDialog('success');
            }, err => {
                this.api.handleErrors(err.error.message);
            });
        }
    }
};
ConfirmDeleteComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
ConfirmDeleteComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-confirm-delete',
        template: __importDefault(__webpack_require__(/*! raw-loader!./confirm-delete.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/confirm-delete/confirm-delete.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./confirm-delete.component.css */ "./src/app/users/confirm-delete/confirm-delete.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], ConfirmDeleteComponent);



/***/ }),

/***/ "./src/app/users/create-user/create-user.component.css":
/*!*************************************************************!*\
  !*** ./src/app/users/create-user/create-user.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tel .mat-form-field-label-wrapper {\n    margin-left: 55px;\n}\n\n\n.cdk-overlay-pane{\n    overflow-y: auto !important; \n  }\n\n   \n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvY3JlYXRlLXVzZXIvY3JlYXRlLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSwyQkFBMkI7RUFDN0IiLCJmaWxlIjoic3JjL2FwcC91c2Vycy9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlbCAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG59XG5cblxuLmNkay1vdmVybGF5LXBhbmV7XG4gICAgb3ZlcmZsb3cteTogYXV0byAhaW1wb3J0YW50OyBcbiAgfVxuXG4gICBcblxuIl19 */");

/***/ }),

/***/ "./src/app/users/create-user/create-user.component.ts":
/*!************************************************************!*\
  !*** ./src/app/users/create-user/create-user.component.ts ***!
  \************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let CreateUserComponent = class CreateUserComponent {
    constructor(data, dialogRef, api, cdr, spinner) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.api = api;
        this.cdr = cdr;
        this.spinner = spinner;
        //user:any = null;
        this.centers = [];
        this.specialities = [];
        this.user = {
            'first_name': '',
            'last_name': '',
            'email': '',
            'gender': 'Masculin',
            'user_type': 'PATIENT',
            'address': '',
            'centers_id': 0,
            'phones': '',
            'speciality': '',
            'password': null,
            'do_teleconsult': false,
            'doctor_serial_number': '',
            'status': false
        };
        this.tel = null;
        this.getSpecialities();
    }
    ngOnInit() {
        this.loadCenters();
        var input = document.querySelector('#phone');
        const $this = this;
        if (this.data.id != null) {
            this.spinner.show();
            this.api.performGETCall('users/' + this.data.id, null, true).subscribe(res => {
                //console.log(res);
                this.spinner.hide();
                this.user = {
                    'first_name': res.data.first_name,
                    'last_name': res.data.last_name,
                    'email': res.data.email,
                    'gender': res.data.gender,
                    'user_type': res.data.user_type,
                    'address': res.data.address,
                    'phone': res.data.phone,
                    'centers_id': res.data.center_id,
                    'phones': res.data.phone,
                    'password': null,
                    'speciality': res.data.speciality,
                    'doctor_serial_number': res.data.doctor_serial_number,
                    'status': res.data.status
                };
                setTimeout(() => {
                    $this.tel = window.intlTelInput(input, {
                        initialCountry: 'CI',
                        utilsScript: 'assets/js/utils.js',
                    });
                    //console.log(res.data.phone);
                    $this.tel.setNumber('+' + res.data.phone);
                    //console.log($this.tel.getNumber());
                }, 3000);
            }, err => {
                this.spinner.hide();
                if (err.error.errors["email"])
                    this.api.handleErrors(err.error.errors["email"]);
                else if (err.error.errors["phone_login"])
                    this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                else
                    this.api.handleErrors(err.error.message);
                //this.api.handleErrors(err.error.message);
            });
        }
        else {
            setTimeout(() => {
                var input = document.querySelector('#phone');
                this.tel = window.intlTelInput(input, {
                    initialCountry: 'CI',
                    utilsScript: 'assets/js/utils.js',
                });
            }, 3000);
        }
    }
    loadCenters() {
        this.spinner.show();
        this.api.performGETCall('centers?limit=0', null, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.centers = res.data;
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    getSpecialities() {
        this.api.performGETCall('getspecialities?limit=0', null, true).subscribe(res => {
            //console.log(res);
            this.specialities = res.data;
        }, err => {
            //console.log(err.error);
            this.api.handleErrors(err.error.message);
        });
    }
    saveUser() {
        if (this.user.first_name.length > 0 && this.user.last_name.length > 0) {
            if (this.user.user_type == 'DOCTOR' && (this.user.speciality.length == 0)) { // || this.user.doctor_serial_number.length == 0)) {
                this.api.handleErrors('Veuillez renseigner tous les champs obligatoires!');
                //console.log('Veuillez renseigner tous les champs!');
                return;
            }
            /*if ( this.user.email.length > 0 && !this.api.isValidEmail(this.user.email)) {
                this.api.handleErrors('Email invalide!');
                this.user.email = null;
                return;
            }*/
            if (this.user.user_type != 'ADMIN') {
                var countryData = this.tel.getSelectedCountryData();
                if (countryData.dialCode != 225 && !this.tel.isValidNumber()) {
                    this.api.handleErrors('Numéro de téléphone invalide!');
                    return;
                }
                else {
                    this.user.phone = countryData.dialCode == 225 ? (this.tel.getNumber().toString().indexOf('225') != -1 ? this.tel.getNumber().toString().replace('+', '') : '225' + this.tel.getNumber().toString().replace('+', '')) : this.tel.getNumber().toString().replace('+', '');
                    var countryData = this.tel.getSelectedCountryData();
                    this.user.phone_login = this.tel.getNumber().toString().replace("+" + countryData.dialCode, "");
                }
            }
            //console.log(this.data.phone);
            if (this.user.user_type == 'DOCTOR') {
                this.user.center_id = this.user.centers_id;
            }
            //this.user.phone = this.user.phones;
            if (this.data.id != null) {
                this.spinner.show();
                if (this.user.password == null)
                    this.user.password = null;
                this.api.performPUTCall('users/' + this.data.id, this.user, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Utilisateur mise à jour avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    if (err.error.errors && err.error.errors["email"])
                        this.api.handleErrors(err.error.errors["email"]);
                    else if (err.error.errors && err.error.errors["phone_login"])
                        this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                    else
                        this.api.handleErrors(err.error.message);
                });
            }
            else {
                if (this.user.user_type != 'ADMIN')
                    this.user.password = this.api.generatePassword();
                //console.log('Password', this.user.password);
                this.spinner.show();
                this.api.performPOSTCall(this.user.user_type == "ADMIN" ? "admins" : 'register', this.user, false, true).subscribe(res => {
                    this.spinner.hide();
                    this.api.displayMessage('Succès', 'Utilisateur crée avec succès');
                    this.closeDialog('success');
                }, err => {
                    this.spinner.hide();
                    if (err.error.errors && err.error.errors["email"])
                        this.api.handleErrors(err.error.errors["email"]);
                    else if (err.error.errors && err.error.errors["phone_login"])
                        this.api.handleErrors("Ce numéro de téléphone est déjà utilisé");
                    else
                        this.api.handleErrors(err.error.message);
                });
            }
        }
        else {
            //console.log('Veuillez renseigner tous les champs!');
            this.api.handleErrors('Veuillez renseigner tous les champs!');
        }
    }
    closeDialog(msg) {
        this.dialogRef.close(msg);
    }
    toggleStatus() {
        this.user.status = !this.user.status;
        this.cdr.detectChanges();
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
];
CreateUserComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-create-user',
        template: __importDefault(__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/create-user/create-user.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./create-user.component.css */ "./src/app/users/create-user/create-user.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
    __metadata("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
        _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
], CreateUserComponent);



/***/ }),

/***/ "./src/app/users/user-details/user-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/user-details/user-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-details/user-details.component.ts ***!
  \**************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let UserDetailsComponent = class UserDetailsComponent {
    constructor(api, datepipe, spinner, activatedRoute) {
        this.api = api;
        this.datepipe = datepipe;
        this.spinner = spinner;
        this.activatedRoute = activatedRoute;
        this.user = null;
        this.id = null;
        this.month = 0;
        this.year = 0;
        this.months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
        this.years = [];
        this.consultations = [];
        this.usermetas = [];
        this.prices = [];
        this.loader_consultation = false;
        this.loader_user_metas = false;
        this.loader_settings = false;
        this.settings = null;
        this.meta = {
            pagination: {
                count: 0,
                per_page: 10
            }
        };
        this.setting_data = {
            fees: '0',
            fees_type: 'PERCENT',
            price_cabinet_consultation: '0',
            price_teleconsultation: '0',
            price_house_consultation: '0',
            currency: 'XAF',
        };
        this.gains = {
            cost: 0,
            fees: 0,
            currency: "XAF"
        };
        this.sms = {
            message: '',
        };
    }
    ngOnInit() {
        var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        this.month = m;
        this.year = y;
        this.years = [y - 4, y - 3, y - 2, y - 1, y];
        this.activatedRoute.queryParams.subscribe(params => {
            if (params.id !== null) {
                this.id = params.id;
                this.loadUser();
            }
        });
    }
    loadUser() {
        this.spinner.show();
        this.api.performGETCall("users/" + this.id, null, true).subscribe(res => {
            //console.log(res);
            this.spinner.hide();
            this.user = res.data;
            this.loadConsultations(null);
            if (this.user.user_type == "DOCTOR") {
                this.loadSum();
                this.loadUserMetas();
                this.loadSettings();
                this.getSMS();
            }
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    calcFees() {
        let fee = parseFloat(this.settings.fees);
        this.gains.fees = this.settings.fees_type == "FIXED" ? fee : this.gains.cost * (fee / 100);
    }
    loadSum(calc = false) {
        //this.loader_consultation = true;
        //var date = new Date(), y = date.getFullYear(), m = date.getMonth();
        var firstDay = new Date(this.year, this.month, 1);
        var lastDay = new Date(this.year, this.month + 1, 0);
        if (calc)
            this.spinner.show();
        this.api.performGETCall("searchappointments", { limit: 0, field: this.user.user_type == "DOCTOR" ? "doctor_id" : "users_id", value: this.user.real_id, start: this.datepipe.transform(firstDay, 'yyyy-MM-dd'), end: this.datepipe.transform(lastDay, 'yyyy-MM-dd') }, true).subscribe(res => {
            //console.log("sum : ",res);
            this.gains.cost = res.data.cost;
            //this.gains.fees = res.data.status;
            this.gains.currency = res.data.currency;
            if (calc)
                this.spinner.hide();
            if (calc)
                this.calcFees();
            //this.loader_consultation = false;
            //this.consultations = res.data;
        }, err => {
            //this.loader_consultation = false;
            this.api.handleErrors(err.error.message);
        });
    }
    loadConsultations($event) {
        this.loader_consultation = true;
        const params = { orderBy: "created_at", sortedBy: "desc", search: this.user.user_type == "DOCTOR" ? "doctor_id:" + this.user.real_id : "users_id:" + this.user.real_id };
        if ($event != null)
            params.page = $event.pageIndex + 1;
        this.api.performGETCall("appointments", params, true).subscribe(res => {
            //console.log("consultations : ",res);
            this.loader_consultation = false;
            this.consultations = res.data;
            this.meta = res.meta;
        }, err => {
            this.loader_consultation = false;
            this.api.handleErrors(err.error.message);
        });
    }
    loadUserMetas() {
        this.loader_user_metas = true;
        this.api.performGETCall("usermetas", { search: "doctor_id:" + this.user.real_id }, true).subscribe(res => {
            //console.log("user metas : ",res);
            this.loader_user_metas = false;
            this.usermetas = res.data;
        }, err => {
            this.loader_user_metas = false;
            this.api.handleErrors(err.error.message);
        });
    }
    loadSettings() {
        this.loader_settings = true;
        this.api.performGETCall("prices", { search: "doctor_id:" + this.user.real_id }, true).subscribe(res => {
            //console.log("settings :  : ",res);
            this.loader_settings = false;
            this.settings = res.data[0];
            this.setting_data.fees = this.settings.fees;
            this.setting_data.fees_type = this.settings.fees_type;
            this.setting_data.currency = this.settings.currency;
            this.setting_data.price_cabinet_consultation = this.settings.price_cabinet_consultation;
            this.setting_data.price_teleconsultation = this.settings.price_teleconsultation;
            this.setting_data.price_house_consultation = this.settings.price_house_consultation;
            this.calcFees();
        }, err => {
            this.loader_settings = false;
            this.api.handleErrors(err.error.message);
        });
    }
    saveFees() {
        this.spinner.show();
        this.settings.fees = this.setting_data.fees;
        this.settings.fees_type = this.setting_data.fees_type;
        this.setting_data.price_cabinet_consultation = this.settings.price_cabinet_consultation;
        this.setting_data.price_teleconsultation = this.settings.price_teleconsultation;
        this.setting_data.price_house_consultation = this.settings.price_house_consultation;
        this.setting_data.currency = this.settings.currency;
        this.api.performPUTCall("prices/" + this.settings.id, this.setting_data, false, true).subscribe(res => {
            //console.log("user metas : ",res);
            this.spinner.hide();
            this.settings = res.data;
            this.calcFees();
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    getSMS() {
        return this.api.performGetRequest('sms?search=doctor_id:' + this.user.real_id)
            .then(({ data }) => {
            this.smsList = data;
            console.log(data);
        });
    }
    updateSMS() {
        this.spinner.show();
        this.api.performPutRequest(`sms/${this.sms.id}`, this.sms).then(() => {
            this.getSMS();
            this.spinner.hide();
        }).catch(error => console.log(error));
    }
    onSelectSms(id) {
        this.sms = this.smsList.find(sms => sms.id === id);
    }
};
UserDetailsComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
];
UserDetailsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-user-details',
        template: __importDefault(__webpack_require__(/*! raw-loader!./user-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/user-details/user-details.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./user-details.component.css */ "./src/app/users/user-details/user-details.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
], UserDetailsComponent);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.service */ "./src/app/api/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-user/create-user.component */ "./src/app/users/create-user/create-user.component.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-delete/confirm-delete.component */ "./src/app/users/confirm-delete/confirm-delete.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






let UsersComponent = class UsersComponent {
    constructor(api, dialog, spinner) {
        this.api = api;
        this.dialog = dialog;
        this.spinner = spinner;
        this.users = [];
        this.meta = {
            pagination: {
                count: 0,
                per_page: 50
            }
        };
    }
    ngOnInit() {
        this.loadUsers(null);
    }
    loadUsers($event, searchValue) {
        this.spinner.show();
        const searchParams = {
            orderBy: 'first_name',
            include: 'center',
            limit: 50,
        };
        if (searchValue) {
            searchParams.search = searchValue; // Utilisez la valeur de recherche telle quelle
        }
        if ($event) {
            searchParams.page = $event.pageIndex + 1;
        }
        this.api.performGETCall('users', searchParams, true).subscribe((res) => {
            this.spinner.hide();
            this.users = res.data;
            this.meta = res.meta;
        }, (err) => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    search(event) {
        const searchValue = event.target.value;
        const searchParams = this.buildSearchParams(searchValue);
        this.loadUsers(null, searchParams);
    }
    buildSearchParams(searchValue) {
        if (!searchValue.startsWith('first_name:')) {
            searchValue = `first_name:${searchValue}`;
        }
        return searchValue;
    }
    openEdit(id) {
        let dialogRef = this.dialog.open(_create_user_create_user_component__WEBPACK_IMPORTED_MODULE_3__["CreateUserComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'success')
                this.loadUsers(null);
        });
    }
    validate(id, status) {
        this.spinner.show();
        this.api.performPUTCall('users/' + id, { confirmed: status }, false, true).subscribe(u => {
            this.spinner.hide();
            let message = "Bonjour " + u.data.first_name + ", Votre profil Médécin à été " + (status == 1 ? "validé" : "rejeté") + " par l'administrateur de Toobib.";
            this.api.performRemoteGETCall('https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=ronaldo.kana@isdg-sarl.com&key=A018CADB-8D14-F116-AD67-B0DFFE0990F5&to=' + u.data.phone + '&source=Toobibs&message=' + encodeURI(message)).subscribe(res => {
                // Gérez la réponse
            }, err => {
                // Gérez l'erreur
            });
            this.loadUsers(null);
            this.api.displayMessage('Succès', 'Informations mise à jour');
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
    delete(id) {
        let dialogRef = this.dialog.open(_confirm_delete_confirm_delete_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDeleteComponent"], {
            data: { id: id },
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result == 'success')
                this.loadUsers(null);
        });
    }
    changeDisplay(id, status) {
        this.spinner.show();
        this.api.performPUTCall('users/' + id, { display_home: status }, false, true).subscribe(u => {
            this.spinner.hide();
            this.loadUsers(null);
            this.api.displayMessage('Succès', 'Informations mise à jour');
        }, err => {
            this.spinner.hide();
            this.api.handleErrors(err.error.message);
        });
    }
};
UsersComponent.ctorParameters = () => [
    { type: _api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
];
UsersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-users',
        template: __importDefault(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
    }),
    __metadata("design:paramtypes", [_api_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAbz28x9MZKzaZMK96jtrnJLhY9JDYoGv0",
        authDomain: "toobibs-13932.firebaseapp.com",
        databaseURL: "https://toobibs-13932.firebaseio.com",
        projectId: "toobibs-13932",
        storageBucket: "toobibs-13932.appspot.com",
        messagingSenderId: "164736118675",
        appId: "1:164736118675:web:c7531abedbc92fb905c266",
        measurementId: "G-BQEN1J28CN"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*!

=========================================================
* Material Dashboard Angular - v2.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-angular2
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-angular2/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\dev\angular\toobibs\toobib-admin-deploiement\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map