(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,630,36];
exports.modules = {

/***/ 8539:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _faustjs_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3253);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4515);
/* harmony import */ var scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8539);
/* harmony import */ var scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1770);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__, client__WEBPACK_IMPORTED_MODULE_5__]);
([_faustjs_next__WEBPACK_IMPORTED_MODULE_1__, components__WEBPACK_IMPORTED_MODULE_4__, client__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function Page() {
    const { usePosts , useQuery  } = client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp;
    const generalSettings = useQuery().generalSettings;
    const posts = usePosts({
        first: 6,
        where: {
            categoryName: "uncategorized"
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h4, {
                title: generalSettings.title,
                description: generalSettings.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        generalSettings.title,
                        " - ",
                        generalSettings.description
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "content",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Hero */ .VM, {
                        title: "Get Started with Faust.js",
                        buttonText: "Developer Docs",
                        buttonURL: "https://faustjs.org",
                        button2Text: "Faust.js on GitHub",
                        button2URL: "https://github.com/wpengine/faustjs",
                        bgImage: "/images/headless_hero_background.jpg",
                        id: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().home_hero),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "WP\xa0Engine’s Faust.js Framework includes this example project, the",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://wordpress.org/plugins/faustwp/",
                                    children: "FaustWP plugin"
                                }),
                                ",",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: "headless packages"
                                }),
                                ", and",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://faustjs.org/docs/tutorial/dev-env-setup",
                                    children: "tutorials"
                                }),
                                " ",
                                "to make building headless WordPress sites fast and fun."
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                        className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().explore),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "wrap",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    children: "Explore this Example Project"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    children: [
                                        "This headless example project uses",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://nextjs.org/",
                                            children: "Next.js"
                                        }),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://graphql.org/",
                                            children: "GraphQL"
                                        }),
                                        ",",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://gqty.dev",
                                            children: "GQty"
                                        }),
                                        " and the",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: "https://github.com/wpengine/faustjs",
                                            children: "WP\xa0Engine headless packages"
                                        }),
                                        " ",
                                        "for WordPress integration. Dive in and edit this template at",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                            children: "src/pages/index.tsx"
                                        }),
                                        " or discover more below."
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().features),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Static Site Generation"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "This example project uses Next.js'",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://nextjs.org/docs/basic-features/pages#two-forms-of-pre-rendering",
                                                            children: "Static Site Generation (SSR)"
                                                        }),
                                                        ". SSG unlocks better performance by statically generating pages that can then be cached by a CDN."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Incremental Static Regeneration"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "This example project uses Next.js'",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://vercel.com/docs/concepts/next.js/incremental-static-regeneration",
                                                            children: "Incremental Static Regeneration (ISR)"
                                                        }),
                                                        ". This allows you to revalidate static pages without having to rebuild your entire site. By default, Faust.js sets a",
                                                        " ",
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("strong", {
                                                            children: [
                                                                "15 minute ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                                    children: "revalidate"
                                                                }),
                                                                " time per page."
                                                            ]
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://faustjs.org/docs/next/guides/ssr-ssg#setting-up-incremental-static-regeneration-isr",
                                                            children: "Learn more about how Faust.js uses ISR."
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Ready for Atlas"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://wpengine.com/atlas",
                                                            children: "Atlas"
                                                        }),
                                                        " is the complete Headless WordPress Platform for absurdly fast dynamic sites. One headless solution, one price, all in one place.",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().features),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Global Styles and Fonts"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Add styles to load on every page, such as typography and layout rules, in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/scss/main.scss"
                                                        }),
                                                        ". The project adds",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://necolas.github.io/normalize.css/",
                                                            children: "normalize.css"
                                                        }),
                                                        " ",
                                                        "in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/_app.tsx"
                                                        }),
                                                        ". Google Fonts are enqueued in ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/_document.tsx"
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Hooks"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Fetch data from WordPress with ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "usePost"
                                                        }),
                                                        ",",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "usePosts"
                                                        }),
                                                        ", ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "useGeneralSettings"
                                                        }),
                                                        " and other custom hooks. Use these hooks in your page templates to pass data to custom components. See",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/pages/index.tsx"
                                                        }),
                                                        " for examples."
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().feature),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    children: "Components"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    children: [
                                                        "Add or edit components in the ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/components"
                                                        }),
                                                        " ",
                                                        "folder. Find component styles at",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                                                            children: "src/scss/components"
                                                        }),
                                                        ", which use",
                                                        " ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                            href: "https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css",
                                                            children: "CSS modules"
                                                        }),
                                                        " ",
                                                        "to scope CSS to each component."
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Posts */ .V8, {
                        posts: posts.nodes,
                        heading: "Latest Posts",
                        intro: "The Posts component in src/pages/index.tsx shows the latest six posts from the connected WordPress site.",
                        headingLevel: "h2",
                        postTitleLevel: "h3",
                        id: (scss_pages_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().post_list)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .CTA */ .MV, {
                        title: "Questions or comments?",
                        buttonText: "Join the discussion on GitHub",
                        buttonURL: "https://github.com/wpengine/faustjs/discussions",
                        headingLevel: "h2",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            children: [
                                "We welcome feature requests, bug reports and questions in the",
                                " ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/wpengine/faustjs",
                                    children: "Headless Framework GitHub repository"
                                }),
                                "."
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components__WEBPACK_IMPORTED_MODULE_4__/* .Footer */ .$_, {
                copyrightHolder: generalSettings.title
            })
        ]
    });
}
async function getStaticProps(context) {
    return (0,_faustjs_next__WEBPACK_IMPORTED_MODULE_1__/* .getNextStaticProps */ .fJ)(context, {
        Page,
        client: client__WEBPACK_IMPORTED_MODULE_5__/* .client */ .Lp
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5234:
/***/ ((module) => {

"use strict";
module.exports = require("common-tags");

/***/ }),

/***/ 5861:
/***/ ((module) => {

"use strict";
module.exports = require("fast-xml-parser");

/***/ }),

/***/ 8656:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/defaults.js");

/***/ }),

/***/ 9923:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isArray.js");

/***/ }),

/***/ 1126:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isBoolean.js");

/***/ }),

/***/ 1361:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isFunction.js");

/***/ }),

/***/ 8086:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isNil.js");

/***/ }),

/***/ 8700:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isObject.js");

/***/ }),

/***/ 3108:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isString.js");

/***/ }),

/***/ 7187:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isUndefined.js");

/***/ }),

/***/ 9010:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge.js");

/***/ }),

/***/ 8593:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/noop.js");

/***/ }),

/***/ 3197:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/trim.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 5925:
/***/ ((module) => {

"use strict";
module.exports = require("next/router.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4298:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core");;

/***/ }),

/***/ 9577:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/auth");;

/***/ }),

/***/ 1305:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/client");;

/***/ }),

/***/ 7326:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/config");;

/***/ }),

/***/ 2866:
/***/ ((module) => {

"use strict";
module.exports = import("@faustjs/core/utils");;

/***/ }),

/***/ 1542:
/***/ ((module) => {

"use strict";
module.exports = import("@gqty/logger");;

/***/ }),

/***/ 48:
/***/ ((module) => {

"use strict";
module.exports = import("@gqty/react");;

/***/ }),

/***/ 1676:
/***/ ((module) => {

"use strict";
module.exports = import("gqty");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [253,676,664,770,515], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();