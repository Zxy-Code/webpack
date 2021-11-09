var moduleMap = {
    "./sitename": () => {
        return __webpack_require__.e("src_sitename_js")
            .then(() => (
                    () => (
                        (__webpack_require__(/*! ./src/sitename.js */ "./src/sitename.js"))
                    )
                )
            );
    },
    "./Header": () => {
        return Promise.all([__webpack_require__.e("vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-a5c85c"),
            __webpack_require__.e("src_components_Header_vue")])
            .then(() => (
                    () => (
                        (__webpack_require__(/*! ./src/components/Header.vue */ "./src/components/Header.vue"))
                    )
                )
            );
    }
};
var get = (module, getScope) => {
    __webpack_require__.R = getScope;
    getScope = (
        __webpack_require__.o(moduleMap, module)
            ? moduleMap[module]()
            : Promise.resolve().then(() => {
                throw new Error('Module "' + module + '" does not exist in container.');
            })
    );
    __webpack_require__.R = undefined;
    return getScope;
};
var init = (shareScope, initScope) => {
    if (!__webpack_require__.S) return;
    var oldScope = __webpack_require__.S["default"];
    var name = "default";
    if (oldScope && oldScope !== shareScope) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
    __webpack_require__.S[name] = shareScope;
    return __webpack_require__.I(name, initScope);
};
// This exports getters to disallow modifications
// __webpack_require__.d(exports, {get: () => (get),init: () => (init)});//# sourceURL=webpack://my-webpack-project/container_entry?



/* webpack/runtime/ensure chunk */
/******/ 	(() => {
    /******/ 		__webpack_require__.f = {};
    /******/ 		// This file contains only the entry chunk.
    /******/ 		// The chunk loading function for additional chunks
    /******/ 		__webpack_require__.e = (chunkId) => {
        /******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
            /******/ 				__webpack_require__.f[key](chunkId, promises);
            /******/ 				return promises;
            /******/ 			}, []));
        /******/ 		};
    /******/ 	})();