exports.id = 515;
exports.ids = [515];
exports.modules = {

/***/ 1511:
/***/ ((module) => {

// Exports
module.exports = {
	"cta": "CTA_cta__46Bdf",
	"wrap": "CTA_wrap__uwNew",
	"children": "CTA_children__hLTn7",
	"title": "CTA_title__hIPik",
	"intro": "CTA_intro__ulsH6",
	"button-wrap": "CTA_button-wrap__VOKOZ"
};


/***/ }),

/***/ 9822:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Footer_wrap__4e6e3",
	"main": "Footer_main__SP1FG"
};


/***/ }),

/***/ 92:
/***/ ((module) => {

// Exports
module.exports = {
	"site-title": "Header_site-title__Otw1K",
	"title-wrap": "Header_title-wrap__4e17x",
	"description": "Header_description__EJ3Db",
	"wrap": "Header_wrap__R9imJ",
	"menu": "Header_menu__6BMG0"
};


/***/ }),

/***/ 1309:
/***/ ((module) => {

// Exports
module.exports = {
	"hero": "Hero_hero__EXu9N",
	"wrap": "Hero_wrap__tZ7RL",
	"children": "Hero_children__vRawC",
	"intro": "Hero_intro__Xv0zz"
};


/***/ }),

/***/ 4212:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "Posts_title__q_vy3",
	"single": "Posts_single__rpTye"
};


/***/ }),

/***/ 7489:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1511);
/* harmony import */ var scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4465);




function CTA({ title ="Get in touch" , buttonText , buttonURL , children , headingLevel ="h1"  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cta),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default().wrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                    level: headingLevel,
                    className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default().title),
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default().intro),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default().children),
                            children: children
                        }),
                        buttonText && buttonURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_CTA_module_scss__WEBPACK_IMPORTED_MODULE_3___default()["button-wrap"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: buttonURL,
                                className: "button",
                                children: buttonText
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CTA);


/***/ }),

/***/ 487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9822);
/* harmony import */ var scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Footer({ copyrightHolder ="Company Name"  }) {
    const year = new Date().getFullYear();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().main),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: (scss_components_Footer_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap),
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: `© ${year} ${copyrightHolder}. All rights reserved.`
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ 5141:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92);
/* harmony import */ var scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([client__WEBPACK_IMPORTED_MODULE_3__]);
client__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Header({ title ="Headless by WP Engine" , description  }) {
    const { menuItems  } = client__WEBPACK_IMPORTED_MODULE_3__/* .client.useQuery */ .Lp.useQuery();
    const links = menuItems({
        where: {
            location: client__WEBPACK_IMPORTED_MODULE_3__/* .MenuLocationEnum.PRIMARY */ .xn.PRIMARY
        }
    }).nodes;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["title-wrap"]),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["site-title"]),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: title
                                })
                            })
                        }),
                        description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description),
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (scss_components_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().menu),
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        children: [
                            links?.map((link)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: link.url ?? "",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: link.url,
                                            children: link.label
                                        })
                                    })
                                }, `${link.label}$-menu`)),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        className: "button",
                                        href: "https://github.com/wpengine/faustjs",
                                        children: "GitHub"
                                    })
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


// Heading allows components to pass a heading level via props.
function Heading({ level ="h1" , children , className  }) {
    const H = ({ ...props })=>/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(level, props, children);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
        className: className,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Heading);


/***/ }),

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1309);
/* harmony import */ var scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2__);



function Hero({ title ="Hero Title" , id , bgImage , buttonText , buttonURL , button2Text , button2URL , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        ...id && {
            id
        },
        style: {
            backgroundImage: bgImage ? `url(${bgImage})` : "none"
        },
        className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().hero),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().wrap),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: title
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().intro),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (scss_components_Hero_module_scss__WEBPACK_IMPORTED_MODULE_2___default().children),
                            children: children
                        }),
                        buttonText && buttonURL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: buttonURL,
                                className: "button",
                                children: buttonText
                            })
                        }),
                        button2Text && button2URL && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: button2URL,
                                className: "button button-secondary",
                                children: button2Text
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ 3740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


function NextPageNavigation(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: props.href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            "aria-label": "Next page.",
            children: "Next Page →"
        })
    });
}
function PreviousPageNavigation(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: props.href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            "aria-label": "Previous page.",
            children: "← Previous Page"
        })
    });
}
function Pagination({ pageInfo , basePath  }) {
    const previousPageUrl = `${basePath}/before/${pageInfo?.startCursor}`;
    const nextPageUrl = `${basePath}/after/${pageInfo?.endCursor}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
        className: "pagination",
        "aria-label": "Pagination",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "wrap",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                children: [
                    pageInfo.hasPreviousPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "pagination-previous",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PreviousPageNavigation, {
                            href: previousPageUrl
                        })
                    }),
                    pageInfo.hasNextPage && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "pagination-next",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextPageNavigation, {
                            href: nextPageUrl
                        })
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 826:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4212);
/* harmony import */ var scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4465);





function Posts({ posts , intro , heading , id , headingLevel ="h1" , postTitleLevel ="h2" , readMoreText ="Read more"  }) {
    return(// eslint-disable-next-line react/jsx-props-no-spreading
    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default()["posts-block"]),
        ...id && {
            id
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "wrap",
            children: [
                heading && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    level: headingLevel,
                    className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().heading),
                    children: heading
                }),
                intro && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().intro),
                    children: intro
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "posts",
                    children: [
                        posts.map((post)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().single),
                                id: `post-${post.id}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Heading__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            level: postTitleLevel,
                                            className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                href: `/posts/${post.slug}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: post.title()
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (scss_components_Posts_module_scss__WEBPACK_IMPORTED_MODULE_4___default().excerpt),
                                            // eslint-disable-next-line react/no-danger
                                            dangerouslySetInnerHTML: {
                                                __html: post.excerpt() ?? ""
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: `/posts/${post.slug}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                "aria-label": `Read more about ${post.title || "the post"}`,
                                                children: readMoreText
                                            })
                                        })
                                    ]
                                })
                            }, post.id ?? "")),
                        posts && posts?.length < 1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: "No posts found."
                        })
                    ]
                })
            ]
        })
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);


/***/ }),

/***/ 4515:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$_": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "MV": () => (/* reexport safe */ _CTA__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "V8": () => (/* reexport safe */ _Posts__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "h4": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "tl": () => (/* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_5__.Z)
/* harmony export */ });
/* harmony import */ var _CTA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7489);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(487);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5141);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1335);
/* harmony import */ var _Posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(826);
/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Header__WEBPACK_IMPORTED_MODULE_2__]);
_Header__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;