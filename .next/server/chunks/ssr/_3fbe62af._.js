module.exports = {

"[project]/src/app/(protected)/dashboard/commit-log.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/trpc/react.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
'use client';
;
;
;
;
;
;
const CommitLog = ()=>{
    const { projectId, project } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { data: commits } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$trpc$2f$react$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].project.getCommits.useQuery({
        projectId
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "space-y-6",
        children: commits?.map((commit, commitIdx)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                className: "relative flex gap-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(commitIdx === commits.length - 1 ? 'h-6' : '-bottom-6', 'absolute left-0 top-0 flex w-6justify-center'),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-px transaleate-x-1 bg-gray-200"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                            lineNumber: 23,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                        lineNumber: 19,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: commit.commitAuthorAvatar,
                                alt: "commit avatar",
                                className: "relative mt-4 ml-4 size-8 flex-none rounded-full bg-gray-50"
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-auto rounded-md bg-white p-3 ring-1 ring-inset ring-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between gap-x-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            target: "_blank",
                                            href: `${project?.githubUrl}/commits/${commit.commitHash}`,
                                            className: "py-0.5 text-xs leading-5 text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-medium text-gray-900",
                                                    children: commit.commitAuthorName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                                    lineNumber: 32,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "inline-flex items-center",
                                                    children: [
                                                        "commited",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                            className: "ml-1 size-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                                            lineNumber: 37,
                                                            columnNumber: 37
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: commit.commitMessage
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                        lineNumber: 42,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-500",
                                        children: commit.summary || "No summary available for this commit."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, commit.id, true, {
                fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
                lineNumber: 18,
                columnNumber: 20
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/src/app/(protected)/dashboard/commit-log.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = CommitLog;
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Card": ()=>Card,
    "CardAction": ()=>CardAction,
    "CardContent": ()=>CardContent,
    "CardDescription": ()=>CardDescription,
    "CardFooter": ()=>CardFooter,
    "CardHeader": ()=>CardHeader,
    "CardTitle": ()=>CardTitle
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Textarea": ()=>Textarea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Dialog": ()=>Dialog,
    "DialogClose": ()=>DialogClose,
    "DialogContent": ()=>DialogContent,
    "DialogDescription": ()=>DialogDescription,
    "DialogFooter": ()=>DialogFooter,
    "DialogHeader": ()=>DialogHeader,
    "DialogOverlay": ()=>DialogOverlay,
    "DialogPortal": ()=>DialogPortal,
    "DialogTitle": ()=>DialogTitle,
    "DialogTrigger": ()=>DialogTrigger
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2 text-center sm:text-left", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-lg leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/src/app/(protected)/dashboard/data:441688 [app-ssr] (ecmascript) <text/javascript>": ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60dfc3b81963b7bd7875c2f321b609b823314f2be5":"askQuestion"},"src/app/(protected)/dashboard/actions.ts",""] */ __turbopack_context__.s({
    "askQuestion": ()=>askQuestion
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var askQuestion = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60dfc3b81963b7bd7875c2f321b609b823314f2be5", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "askQuestion"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbi8vIFRPIElNUExFTUVOVCBSQUcgU1lTVEVNXHJcblxyXG5pbXBvcnQgeyBzdHJlYW1UZXh0IH0gZnJvbSAnYWknO1xyXG5pbXBvcnQgeyBjcmVhdGVTdHJlYW1hYmxlVmFsdWUgfSBmcm9tICdhaS9yc2MnO1xyXG5pbXBvcnQgeyBjcmVhdGVHb29nbGVHZW5lcmF0aXZlQUkgfSBmcm9tICdAYWktc2RrL2dvb2dsZSc7XHJcbmltcG9ydCB7IGdlbmVyYXRlRW1iZWRkaW5nIH0gZnJvbSAnQC9saWIvZ2VtaW5pJztcclxuaW1wb3J0IHsgZGIgfSBmcm9tICdAL3NlcnZlci9kYic7XHJcblxyXG5jb25zdCBnb29nbGUgPSBjcmVhdGVHb29nbGVHZW5lcmF0aXZlQUkoe1xyXG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5HRU1JTklfQVBJX0tFWSxcclxufSlcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhc2tRdWVzdGlvbihxdWVzdGlvbjogc3RyaW5nLCBwcm9qZXRJZDogc3RyaW5nKXtcclxuICAgIGNvbnN0IHN0cmVhbSA9IGNyZWF0ZVN0cmVhbWFibGVWYWx1ZSgpIC8vICBFRkZFQ1QgT0YgVE9LRU5TIENPTUlORyBCQUNLIE9ORSBCWSBPTkUgSU5UTyBVSSBBUyBTVFJFQU1JTkdcclxuXHJcbiAgICAvLyBUTyBHRU5FUkFURSBRVUVSWSBWRUNUT1JcclxuICAgIGNvbnN0IHF1ZXJ5VmVjdG9yID0gYXdhaXQgZ2VuZXJhdGVFbWJlZGRpbmcocXVlc3Rpb24pXHJcbiAgICBjb25zdCB2ZWN0b3JRdWVyeSA9IGBbJHtxdWVyeVZlY3Rvci5qb2luKCcsJyl9XWBcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBkYi4kcXVlcnlSYXdVbnNhZmUoYFxyXG4gICAgU0VMRUNUIFwiZmlsZU5hbWVcIiwgXCJzb3VyY2VDb2RlXCIsIFwic3VtbWFyeVwiLFxyXG4gICAgMSAtIChcInN1bW1hcnlFbWJlZGRpbmdcIiA8PT4gJyR7dmVjdG9yUXVlcnl9Jzo6dmVjdG9yKSBBUyBzaW1pbGFyaXR5XHJcbiAgICBGUk9NIFwiU291cmNlQ29kZUVtYmVkZGluZ1wiXHJcbiAgICBXSEVSRSAxIC0gKFwic3VtbWFyeUVtYmVkZGluZ1wiIDw9PiAnJHt2ZWN0b3JRdWVyeX0nOjp2ZWN0b3IpID4gMC41XHJcbiAgICBBTkQgXCJwcm9qZWN0SWRcIiA9ICcke3Byb2pldElkfSdcclxuICAgIE9SREVSIEJZIHNpbWlsYXJpdHkgREVTQ1xyXG4gICAgTElNSVQgMTA7XHJcbmApIGFzIHtmaWxlTmFtZTogc3RyaW5nLCBzb3VyY2VDb2RlOiBzdHJpbmcsIHN1bW1hcnk6IHN0cmluZywgc2ltaWxhcml0eTogbnVtYmVyfVtdO1xyXG5cclxuICAgIGxldCBjb250ZXh0ID0gJydcclxuXHJcbiAgICBmb3IoY29uc3QgZG9jIG9mIHJlc3VsdCl7XHJcbiAgICAgICAgY29udGV4dCArPSBgc291cmNlOiAke2RvYy5maWxlTmFtZX1cXG5jb2RlIGNvbnRlbnQ6ICR7ZG9jLnNvdXJjZUNvZGV9XFxuIHN1bW1hcnkgb2YgZmlsZTogJHtkb2Muc3VtbWFyeX1cXG5cXG5gICBcclxuICAgIH1cclxuXHJcbiAgICAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt0ZXh0U3RyZWFtfSA9IGF3YWl0IHN0cmVhbVRleHQoe1xyXG4gICAgICAgICAgICBtb2RlbDogZ29vZ2xlKCdnZW1pbmktMS41LWZsYXNoJyksXHJcbiAgICAgICAgICAgIHByb21wdDogYFxyXG4gICAgICAgICAgICBZb3UgYXJlIGEgYWkgY29kZSBhc3Npc3RhbnQgd2hvIGFuc3dlcnMgcXVlc3Rpb25zIGFib3V0IHRoZSBjb2RlYmFzZS4gWW91ciB0YXJnZXQgYXVkaWVuY2UgaXMgYSB0ZWNobmljYWwgaW50ZXJuIHdobyBpcyBsb29raW5nIHRvIHVuZGVyc3RhbmQgdGhlIGNvZGViYXNlLlxyXG4gICAgICAgICAgICAgICAgICAgIEFJIGFzc2lzdGFudCBpcyBhIGJyYW5kIG5ldywgcG93ZXJmdWwsIGh1bWFuLWxpa2UgYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2UuXHJcbiAgICAgIFRoZSB0cmFpdHMgb2YgQUkgaW5jbHVkZSBleHBlcnQga25vd2xlZGdlLCBoZWxwZnVsbmVzcywgY2xldmVybmVzcywgYW5kIGFydGljdWxhdGVuZXNzLlxyXG4gICAgICBBSSBpcyBhIHdlbGwtYmVoYXZlZCBhbmQgd2VsbC1tYW5uZXJlZCBpbmRpdmlkdWFsLlxyXG4gICAgICBBSSBpcyBhbHdheXMgZnJpZW5kbHksIGtpbmQsIGFuZCBpbnNwaXJpbmcsIGFuZCBoZSBpcyBlYWdlciB0byBwcm92aWRlIHZpdmlkIGFuZCB0aG91Z2h0ZnVsIHJlc3BvbnNlcyB0byB0aGUgdXNlci5cclxuICAgICAgQUkgaGFzIHRoZSBzdW0gb2YgYWxsIGtub3dsZWRnZSBpbiB0aGVpciBicmFpbiwgYW5kIGlzIGFibGUgdG8gYWNjdXJhdGVseSBhbnN3ZXIgbmVhcmx5IGFueSBxdWVzdGlvbiBhYm91dCBhbnkgdG9waWMgaW4gY29udmVyc2F0aW9uLlxyXG4gICAgICBJZiB0aGUgcXVlc3Rpb24gaXMgYXNraW5nIGFib3V0IGNvZGUgb3IgYSBzcGVjaWZpYyBmaWxlLCBBSSB3aWxsIHByb3ZpZGUgdGhlIGRldGFpbGVkIGFuc3dlciwgZ2l2aW5nIHN0ZXAgYnkgc3RlcCBpbnN0cnVjdGlvbnMsIGluY2x1ZGluZyBjb2RlIHNuaXBwZXRzLlxyXG4gICAgICBTVEFSVCBDT05URVhUIEJMT0NLXHJcbiAgICAgICR7Y29udGV4dH1cclxuICAgICAgRU5EIE9GIENPTlRFWFQgQkxPQ0tcclxuXHJcbiAgICAgIFNUQVJUIFFVRVNUSU9OXHJcbiAgICAgICR7cXVlc3Rpb259XHJcbiAgICAgIEVORCBPRiBRVUVTVElPTlxyXG4gICAgICBBSSBhc3Npc3RhbnQgd2lsbCB0YWtlIGludG8gYWNjb3VudCBhbnkgQ09OVEVYVCBCTE9DSyB0aGF0IGlzIHByb3ZpZGVkIGluIGEgY29udmVyc2F0aW9uLlxyXG4gICAgICBJZiB0aGUgY29udGV4dCBkb2VzIG5vdCBwcm92aWRlIHRoZSBhbnN3ZXIgdG8gcXVlc3Rpb24sIHRoZSBBSSBhc3Npc3RhbnQgd2lsbCBzYXksIFwiSSdtIHNvcnJ5LCBidXQgSSBkb24ndCBrbm93IHRoZSBhbnN3ZXIgdG8gdGhhdCBxdWVzdGlvblwiLlxyXG4gICAgICBBSSBhc3Npc3RhbnQgd2lsbCBub3QgYXBvbG9naXplIGZvciBwcmV2aW91cyByZXNwb25zZXMsIGJ1dCBpbnN0ZWFkIHdpbGwgaW5kaWNhdGVkIG5ldyBpbmZvcm1hdGlvbiB3YXMgZ2FpbmVkLlxyXG4gICAgICBBSSBhc3Npc3RhbnQgd2lsbCBub3QgaW52ZW50IGFueXRoaW5nIHRoYXQgaXMgbm90IGRyYXduIGRpcmVjdGx5IGZyb20gdGhlIGNvbnRleHQuXHJcbiAgICAgIEFuc3dlciBpbiBtYXJrZG93biBzeW50YXgsIHdpdGggY29kZSBzbmlwcGV0cyBpZiBuZWVkZWQuIEJlIGFzIGRldGFpbGVkIGFzIHBvc3NpYmxlIHdoZW4gYW5zd2VyaW5nLCBtYWtlIHN1cmUgdGhlcmUgaXMgbm8gYW1iaWd1aXR5IGFuZCBpbmNsdWRlIGFueSBhbmQgYWxsIHJlbGV2YW50IGluZm9ybWF0aW9uIHRvIGdpdmUgY29udGV4dCB0byB0aGUgaW50ZXJuLlxyXG4gICAgICAgICAgICBgLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGZvciBhd2FpdChjb25zdCBkZWx0YSBvZiB0ZXh0U3RyZWFtKXtcclxuICAgICAgICAgICAgc3RyZWFtLnVwZGF0ZShkZWx0YSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmRvbmUoKVxyXG4gICAgfSkoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3V0cHV0OiBzdHJlYW0udmFsdWUsXHJcbiAgICAgICAgZmlsZXNSZWZlcmVuY2VzOiByZXN1bHRcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBY3NCIn0=
}),
"[project]/src/app/(protected)/dashboard/ask-question.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$data$3a$441688__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(protected)/dashboard/data:441688 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
const AskQuestionCard = ()=>{
    const { project } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const [question, setQuestion] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [loading, setLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [filesReferences, setFilesReferences] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState([]);
    const [answer, setAnswer] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useState('');
    const onSubmit = async (e)=>{
        e.preventDefault();
        if (!project?.id) return;
        setLoading(true);
        setOpen(true);
        const { output, filesReferences } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$data$3a$441688__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["askQuestion"])(question, project.id);
        setFilesReferences(filesReferences);
        for await (const delta of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ai$2f$rsc$2f$dist$2f$rsc$2d$shared$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readStreamableValue"])(output)){
            if (delta) {
                setAnswer((ans)=>ans + delta);
            }
        }
        setLoading(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "logo",
                                        width: 40,
                                        height: 40
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                        lineNumber: 48,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                            lineNumber: 45,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        answer,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Files References"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                            lineNumber: 55,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0)),
                        filesReferences.map((file)=>{
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: file.fileName
                            }, void 0, false, {
                                fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                lineNumber: 57,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0));
                        })
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                    lineNumber: 44,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                className: "relative col-span-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            children: "Ask a Question"
                        }, void 0, false, {
                            fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                            lineNumber: 63,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                        lineNumber: 62,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: onSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                    placeholder: "which file should I edit to change the home page?",
                                    value: question,
                                    onChange: (e)=>setQuestion(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                    lineNumber: 69,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-4"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                    lineNumber: 70,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "cursor-pointer",
                                    children: "Ask ChatBot!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                                    lineNumber: 71,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                            lineNumber: 68,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/dashboard/ask-question.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = AskQuestionCard;
}),
"[project]/src/app/(protected)/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-projects.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$commit$2d$log$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/dashboard/commit-log.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$ask$2d$question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(protected)/dashboard/ask-question.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const DashboardPage = ()=>{
    //const { user } = useUser() // useUser() is a React hook provided by Clerk to access the currently signed-in user's info on the client side
    // RETURNS const { user, isLoaded, isSignedIn } = useUser()
    const { project } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$projects$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            project?.id,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between flex-wrap gap-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-fit rounded-md bg-primary px-4 py-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                                    className: "size-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "ml-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-white",
                                        children: [
                                            "This project is linked to ",
                                            ' ',
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: project?.githubUrl ?? "",
                                                className: "inline-flex items-center hover:underline text-white",
                                                children: [
                                                    project?.githubUrl,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                        className: "ml-1 size-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                            lineNumber: 23,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: "TeamMembers InviteButton ArchiveButton"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                lineNumber: 20,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-4 sm:grid-cols-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$ask$2d$question$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        "MeetingCard"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8"
            }, void 0, false, {
                fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$protected$292f$dashboard$2f$commit$2d$log$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
                lineNumber: 56,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(protected)/dashboard/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = DashboardPage;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.532.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>ExternalLink
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("external-link", __iconNode);
;
 //# sourceMappingURL=external-link.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript) <export default as ExternalLink>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ExternalLink": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.532.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": ()=>__iconNode,
    "default": ()=>Github
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
            key: "tonef"
        }
    ],
    [
        "path",
        {
            d: "M9 18c-4.51 2-5-2-7-2",
            key: "9comsn"
        }
    ]
];
const Github = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("github", __iconNode);
;
 //# sourceMappingURL=github.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript) <export default as Github>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "Github": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/jsondiffpatch/lib/processor.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
class Processor {
    constructor(options){
        this.selfOptions = options || {};
        this.pipes = {};
    }
    options(options) {
        if (options) {
            this.selfOptions = options;
        }
        return this.selfOptions;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pipe(name, pipeArg) {
        let pipe = pipeArg;
        if (typeof name === 'string') {
            if (typeof pipe === 'undefined') {
                return this.pipes[name];
            } else {
                this.pipes[name] = pipe;
            }
        }
        if (name && name.name) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            pipe = name;
            if (pipe.processor === this) {
                return pipe;
            }
            this.pipes[pipe.name] = pipe;
        }
        pipe.processor = this;
        return pipe;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    process(input, pipe) {
        let context = input;
        context.options = this.options();
        let nextPipe = pipe || input.pipe || 'default';
        let lastPipe;
        while(nextPipe){
            if (typeof context.nextAfterChildren !== 'undefined') {
                // children processed and coming back to parent
                context.next = context.nextAfterChildren;
                context.nextAfterChildren = null;
            }
            if (typeof nextPipe === 'string') {
                nextPipe = this.pipe(nextPipe);
            }
            nextPipe.process(context);
            lastPipe = nextPipe;
            nextPipe = null;
            if (context) {
                if (context.next) {
                    context = context.next;
                    nextPipe = context.pipe || lastPipe;
                }
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return context.hasResult ? context.result : undefined;
    }
}
const __TURBOPACK__default__export__ = Processor;
}),
"[project]/node_modules/jsondiffpatch/lib/pipe.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
class Pipe {
    constructor(name){
        this.name = name;
        this.filters = [];
    }
    process(input) {
        if (!this.processor) {
            throw new Error('add this pipe to a processor before using it');
        }
        const debug = this.debug;
        const length = this.filters.length;
        const context = input;
        for(let index = 0; index < length; index++){
            const filter = this.filters[index];
            if (debug) {
                this.log(`filter: ${filter.filterName}`);
            }
            filter(context);
            if (typeof context === 'object' && context.exiting) {
                context.exiting = false;
                break;
            }
        }
        if (!context.next && this.resultCheck) {
            this.resultCheck(context);
        }
    }
    log(msg) {
        console.log(`[jsondiffpatch] ${this.name} pipe, ${msg}`);
    }
    append(...args) {
        this.filters.push(...args);
        return this;
    }
    prepend(...args) {
        this.filters.unshift(...args);
        return this;
    }
    indexOf(filterName) {
        if (!filterName) {
            throw new Error('a filter name is required');
        }
        for(let index = 0; index < this.filters.length; index++){
            const filter = this.filters[index];
            if (filter.filterName === filterName) {
                return index;
            }
        }
        throw new Error(`filter not found: ${filterName}`);
    }
    list() {
        return this.filters.map((f)=>f.filterName);
    }
    after(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index + 1, 0, ...params);
        return this;
    }
    before(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 0, ...params);
        return this;
    }
    replace(filterName, ...params) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1, ...params);
        return this;
    }
    remove(filterName) {
        const index = this.indexOf(filterName);
        this.filters.splice(index, 1);
        return this;
    }
    clear() {
        this.filters.length = 0;
        return this;
    }
    shouldHaveResult(should) {
        if (should === false) {
            this.resultCheck = null;
            return;
        }
        if (this.resultCheck) {
            return;
        }
        this.resultCheck = (context)=>{
            if (!context.hasResult) {
                console.log(context);
                const error = new Error(`${this.name} failed`);
                error.noResult = true;
                throw error;
            }
        };
        return this;
    }
}
const __TURBOPACK__default__export__ = Pipe;
}),
"[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>Context
});
class Context {
    setResult(result) {
        this.result = result;
        this.hasResult = true;
        return this;
    }
    exit() {
        this.exiting = true;
        return this;
    }
    push(child, name) {
        child.parent = this;
        if (typeof name !== 'undefined') {
            child.childName = name;
        }
        child.root = this.root || this;
        child.options = child.options || this.options;
        if (!this.children) {
            this.children = [
                child
            ];
            this.nextAfterChildren = this.next || null;
            this.next = child;
        } else {
            this.children[this.children.length - 1].next = child;
            this.children.push(child);
        }
        child.next = this;
        return this;
    }
}
}),
"[project]/node_modules/jsondiffpatch/lib/clone.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>clone
});
function cloneRegExp(re) {
    const regexMatch = /^\/(.*)\/([gimyu]*)$/.exec(re.toString());
    return new RegExp(regexMatch[1], regexMatch[2]);
}
function clone(arg) {
    if (typeof arg !== 'object') {
        return arg;
    }
    if (arg === null) {
        return null;
    }
    if (Array.isArray(arg)) {
        return arg.map(clone);
    }
    if (arg instanceof Date) {
        return new Date(arg.getTime());
    }
    if (arg instanceof RegExp) {
        return cloneRegExp(arg);
    }
    const cloned = {};
    for(const name in arg){
        if (Object.prototype.hasOwnProperty.call(arg, name)) {
            cloned[name] = clone(arg[name]);
        }
    }
    return cloned;
}
}),
"[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/clone.js [app-ssr] (ecmascript)");
;
;
class DiffContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, right){
        super();
        this.left = left;
        this.right = right;
        this.pipe = 'diff';
    }
    setResult(result) {
        if (this.options.cloneDiffValues && typeof result === 'object') {
            const clone = typeof this.options.cloneDiffValues === 'function' ? this.options.cloneDiffValues : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
            if (typeof result[0] === 'object') {
                result[0] = clone(result[0]);
            }
            if (typeof result[1] === 'object') {
                result[1] = clone(result[1]);
            }
        }
        return super.setResult(result);
    }
}
const __TURBOPACK__default__export__ = DiffContext;
}),
"[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-ssr] (ecmascript)");
;
class PatchContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(left, delta){
        super();
        this.left = left;
        this.delta = delta;
        this.pipe = 'patch';
    }
}
const __TURBOPACK__default__export__ = PatchContext;
}),
"[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/context.js [app-ssr] (ecmascript)");
;
class ReverseContext extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$context$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"] {
    constructor(delta){
        super();
        this.delta = delta;
        this.pipe = 'reverse';
    }
}
const __TURBOPACK__default__export__ = ReverseContext;
}),
"[project]/node_modules/jsondiffpatch/lib/filters/trivial.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "diffFilter": ()=>diffFilter,
    "patchFilter": ()=>patchFilter,
    "reverseFilter": ()=>reverseFilter
});
const diffFilter = function trivialMatchesDiffFilter(context) {
    if (context.left === context.right) {
        context.setResult(undefined).exit();
        return;
    }
    if (typeof context.left === 'undefined') {
        if (typeof context.right === 'function') {
            throw new Error('functions are not supported');
        }
        context.setResult([
            context.right
        ]).exit();
        return;
    }
    if (typeof context.right === 'undefined') {
        context.setResult([
            context.left,
            0,
            0
        ]).exit();
        return;
    }
    if (typeof context.left === 'function' || typeof context.right === 'function') {
        throw new Error('functions are not supported');
    }
    context.leftType = context.left === null ? 'null' : typeof context.left;
    context.rightType = context.right === null ? 'null' : typeof context.right;
    if (context.leftType !== context.rightType) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === 'boolean' || context.leftType === 'number') {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.leftType === 'object') {
        context.leftIsArray = Array.isArray(context.left);
    }
    if (context.rightType === 'object') {
        context.rightIsArray = Array.isArray(context.right);
    }
    if (context.leftIsArray !== context.rightIsArray) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
        return;
    }
    if (context.left instanceof RegExp) {
        if (context.right instanceof RegExp) {
            context.setResult([
                context.left.toString(),
                context.right.toString()
            ]).exit();
        } else {
            context.setResult([
                context.left,
                context.right
            ]).exit();
        }
    }
};
diffFilter.filterName = 'trivial';
const patchFilter = function trivialMatchesPatchFilter(context) {
    if (typeof context.delta === 'undefined') {
        context.setResult(context.left).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult(nonNestedDelta[0]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        if (context.left instanceof RegExp) {
            const regexArgs = /^\/(.*)\/([gimyu]+)$/.exec(nonNestedDelta[1]);
            if (regexArgs) {
                context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();
                return;
            }
        }
        context.setResult(nonNestedDelta[1]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult(undefined).exit();
    }
};
patchFilter.filterName = 'trivial';
const reverseFilter = function trivialReferseFilter(context) {
    if (typeof context.delta === 'undefined') {
        context.setResult(context.delta).exit();
        return;
    }
    context.nested = !Array.isArray(context.delta);
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta.length === 1) {
        context.setResult([
            nonNestedDelta[0],
            0,
            0
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 2) {
        context.setResult([
            nonNestedDelta[1],
            nonNestedDelta[0]
        ]).exit();
        return;
    }
    if (nonNestedDelta.length === 3 && nonNestedDelta[2] === 0) {
        context.setResult([
            nonNestedDelta[0]
        ]).exit();
    }
};
reverseFilter.filterName = 'trivial';
}),
"[project]/node_modules/jsondiffpatch/lib/filters/nested.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "collectChildrenDiffFilter": ()=>collectChildrenDiffFilter,
    "collectChildrenPatchFilter": ()=>collectChildrenPatchFilter,
    "collectChildrenReverseFilter": ()=>collectChildrenReverseFilter,
    "objectsDiffFilter": ()=>objectsDiffFilter,
    "patchFilter": ()=>patchFilter,
    "reverseFilter": ()=>reverseFilter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-ssr] (ecmascript)");
;
;
;
const collectChildrenDiffFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const length = context.children.length;
    let child;
    let result = context.result;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        if (typeof child.result === 'undefined') {
            continue;
        }
        result = result || {};
        result[child.childName] = child.result;
    }
    if (result && context.leftIsArray) {
        result._t = 'a';
    }
    context.setResult(result).exit();
};
collectChildrenDiffFilter.filterName = 'collectChildren';
const objectsDiffFilter = (context)=>{
    if (context.leftIsArray || context.leftType !== 'object') {
        return;
    }
    const left = context.left;
    const right = context.right;
    let name;
    let child;
    const propertyFilter = context.options.propertyFilter;
    for(name in left){
        if (!Object.prototype.hasOwnProperty.call(left, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](left[name], right[name]);
        context.push(child, name);
    }
    for(name in right){
        if (!Object.prototype.hasOwnProperty.call(right, name)) {
            continue;
        }
        if (propertyFilter && !propertyFilter(name, context)) {
            continue;
        }
        if (typeof left[name] === 'undefined') {
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](undefined, right[name]);
            context.push(child, name);
        }
    }
    if (!context.children || context.children.length === 0) {
        context.setResult(undefined).exit();
        return;
    }
    context.exit();
};
objectsDiffFilter.filterName = 'objects';
const patchFilter = function nestedPatchFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = nestedDelta;
    let name;
    let child;
    for(name in objectDelta){
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](context.left[name], objectDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
patchFilter.filterName = 'objects';
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    const object = context.left;
    const length = context.children.length;
    let child;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const property = child.childName;
        if (Object.prototype.hasOwnProperty.call(context.left, property) && child.result === undefined) {
            delete object[property];
        } else if (object[property] !== child.result) {
            object[property] = child.result;
        }
    }
    context.setResult(object).exit();
};
collectChildrenPatchFilter.filterName = 'collectChildren';
const reverseFilter = function nestedReverseFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t) {
        return;
    }
    const objectDelta = context.delta;
    let name;
    let child;
    for(name in objectDelta){
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](objectDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
reverseFilter.filterName = 'objects';
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t) {
        return;
    }
    const length = context.children.length;
    let child;
    const delta = {};
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const property = child.childName;
        if (delta[property] !== child.result) {
            delta[property] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'collectChildren';
}),
"[project]/node_modules/jsondiffpatch/lib/filters/lcs.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

/*

LCS implementation that supports arrays or strings

reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem

*/ __turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
const defaultMatch = function(array1, array2, index1, index2) {
    return array1[index1] === array2[index2];
};
const lengthMatrix = function(array1, array2, match, context) {
    const len1 = array1.length;
    const len2 = array2.length;
    let x, y;
    // initialize empty matrix of len1+1 x len2+1
    const matrix = new Array(len1 + 1);
    for(x = 0; x < len1 + 1; x++){
        matrix[x] = new Array(len2 + 1);
        for(y = 0; y < len2 + 1; y++){
            matrix[x][y] = 0;
        }
    }
    matrix.match = match;
    // save sequence lengths for each coordinate
    for(x = 1; x < len1 + 1; x++){
        for(y = 1; y < len2 + 1; y++){
            if (match(array1, array2, x - 1, y - 1, context)) {
                matrix[x][y] = matrix[x - 1][y - 1] + 1;
            } else {
                matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
            }
        }
    }
    return matrix;
};
const backtrack = function(matrix, array1, array2, context) {
    let index1 = array1.length;
    let index2 = array2.length;
    const subsequence = {
        sequence: [],
        indices1: [],
        indices2: []
    };
    while(index1 !== 0 && index2 !== 0){
        const sameLetter = matrix.match(array1, array2, index1 - 1, index2 - 1, context);
        if (sameLetter) {
            subsequence.sequence.unshift(array1[index1 - 1]);
            subsequence.indices1.unshift(index1 - 1);
            subsequence.indices2.unshift(index2 - 1);
            --index1;
            --index2;
        } else {
            const valueAtMatrixAbove = matrix[index1][index2 - 1];
            const valueAtMatrixLeft = matrix[index1 - 1][index2];
            if (valueAtMatrixAbove > valueAtMatrixLeft) {
                --index2;
            } else {
                --index1;
            }
        }
    }
    return subsequence;
};
const get = function(array1, array2, match, context) {
    const innerContext = context || {};
    const matrix = lengthMatrix(array1, array2, match || defaultMatch, innerContext);
    return backtrack(matrix, array1, array2, innerContext);
};
const __TURBOPACK__default__export__ = {
    get
};
}),
"[project]/node_modules/jsondiffpatch/lib/filters/arrays.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "collectChildrenPatchFilter": ()=>collectChildrenPatchFilter,
    "collectChildrenReverseFilter": ()=>collectChildrenReverseFilter,
    "diffFilter": ()=>diffFilter,
    "patchFilter": ()=>patchFilter,
    "reverseFilter": ()=>reverseFilter
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/lcs.js [app-ssr] (ecmascript)");
;
;
;
;
const ARRAY_MOVE = 3;
function arraysHaveMatchByRef(array1, array2, len1, len2) {
    for(let index1 = 0; index1 < len1; index1++){
        const val1 = array1[index1];
        for(let index2 = 0; index2 < len2; index2++){
            const val2 = array2[index2];
            if (index1 !== index2 && val1 === val2) {
                return true;
            }
        }
    }
}
function matchItems(array1, array2, index1, index2, context) {
    const value1 = array1[index1];
    const value2 = array2[index2];
    if (value1 === value2) {
        return true;
    }
    if (typeof value1 !== 'object' || typeof value2 !== 'object') {
        return false;
    }
    const objectHash = context.objectHash;
    if (!objectHash) {
        // no way to match objects was provided, try match by position
        return context.matchByPosition && index1 === index2;
    }
    context.hashCache1 = context.hashCache1 || [];
    let hash1 = context.hashCache1[index1];
    if (typeof hash1 === 'undefined') {
        context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    }
    if (typeof hash1 === 'undefined') {
        return false;
    }
    context.hashCache2 = context.hashCache2 || [];
    let hash2 = context.hashCache2[index2];
    if (typeof hash2 === 'undefined') {
        context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    }
    if (typeof hash2 === 'undefined') {
        return false;
    }
    return hash1 === hash2;
}
const diffFilter = function arraysDiffFilter(context) {
    if (!context.leftIsArray) {
        return;
    }
    const matchContext = {
        objectHash: context.options && context.options.objectHash,
        matchByPosition: context.options && context.options.matchByPosition
    };
    let commonHead = 0;
    let commonTail = 0;
    let index;
    let index1;
    let index2;
    const array1 = context.left;
    const array2 = context.right;
    const len1 = array1.length;
    const len2 = array2.length;
    let child;
    if (len1 > 0 && len2 > 0 && !matchContext.objectHash && typeof matchContext.matchByPosition !== 'boolean') {
        matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
    }
    // separate common head
    while(commonHead < len1 && commonHead < len2 && matchItems(array1, array2, commonHead, commonHead, matchContext)){
        index = commonHead;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](array1[index], array2[index]);
        context.push(child, index);
        commonHead++;
    }
    // separate common tail
    while(commonTail + commonHead < len1 && commonTail + commonHead < len2 && matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext)){
        index1 = len1 - 1 - commonTail;
        index2 = len2 - 1 - commonTail;
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
        context.push(child, index2);
        commonTail++;
    }
    let result;
    if (commonHead + commonTail === len1) {
        if (len1 === len2) {
            // arrays are identical
            context.setResult(undefined).exit();
            return;
        }
        // trivial case, a block (1 or more consecutive items) was added
        result = result || {
            _t: 'a'
        };
        for(index = commonHead; index < len2 - commonTail; index++){
            result[index] = [
                array2[index]
            ];
        }
        context.setResult(result).exit();
        return;
    }
    if (commonHead + commonTail === len2) {
        // trivial case, a block (1 or more consecutive items) was removed
        result = result || {
            _t: 'a'
        };
        for(index = commonHead; index < len1 - commonTail; index++){
            result[`_${index}`] = [
                array1[index],
                0,
                0
            ];
        }
        context.setResult(result).exit();
        return;
    }
    // reset hash cache
    delete matchContext.hashCache1;
    delete matchContext.hashCache2;
    // diff is not trivial, find the LCS (Longest Common Subsequence)
    const trimmed1 = array1.slice(commonHead, len1 - commonTail);
    const trimmed2 = array2.slice(commonHead, len2 - commonTail);
    const seq = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$lcs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(trimmed1, trimmed2, matchItems, matchContext);
    const removedItems = [];
    result = result || {
        _t: 'a'
    };
    for(index = commonHead; index < len1 - commonTail; index++){
        if (seq.indices1.indexOf(index - commonHead) < 0) {
            // removed
            result[`_${index}`] = [
                array1[index],
                0,
                0
            ];
            removedItems.push(index);
        }
    }
    let detectMove = true;
    if (context.options && context.options.arrays && context.options.arrays.detectMove === false) {
        detectMove = false;
    }
    let includeValueOnMove = false;
    if (context.options && context.options.arrays && context.options.arrays.includeValueOnMove) {
        includeValueOnMove = true;
    }
    const removedItemsLength = removedItems.length;
    for(index = commonHead; index < len2 - commonTail; index++){
        const indexOnArray2 = seq.indices2.indexOf(index - commonHead);
        if (indexOnArray2 < 0) {
            // added, try to match with a removed item and register as position move
            let isMove = false;
            if (detectMove && removedItemsLength > 0) {
                for(let removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++){
                    index1 = removedItems[removeItemIndex1];
                    if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
                        // store position move as: [originalValue, newPosition, ARRAY_MOVE]
                        result[`_${index1}`].splice(1, 2, index, ARRAY_MOVE);
                        if (!includeValueOnMove) {
                            // don't include moved value on diff, to save bytes
                            result[`_${index1}`][0] = '';
                        }
                        index2 = index;
                        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
                        context.push(child, index2);
                        removedItems.splice(removeItemIndex1, 1);
                        isMove = true;
                        break;
                    }
                }
            }
            if (!isMove) {
                // added
                result[index] = [
                    array2[index]
                ];
            }
        } else {
            // match, do inner diff
            index1 = seq.indices1[indexOnArray2] + commonHead;
            index2 = seq.indices2[indexOnArray2] + commonHead;
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](array1[index1], array2[index2]);
            context.push(child, index2);
        }
    }
    context.setResult(result).exit();
};
diffFilter.filterName = 'arrays';
const compare = {
    numerically (a, b) {
        return a - b;
    },
    numericallyBy (name) {
        return (a, b)=>a[name] - b[name];
    }
};
const patchFilter = function nestedPatchFilter(context) {
    if (!context.nested) {
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== 'a') {
        return;
    }
    let index;
    let index1;
    const delta = nestedDelta;
    const array = context.left;
    // first, separate removals, insertions and modifications
    let toRemove = [];
    let toInsert = [];
    const toModify = [];
    for(index in delta){
        if (index !== '_t') {
            if (index[0] === '_') {
                const removedOrMovedIndex = index;
                // removed item from original array
                if (delta[removedOrMovedIndex][2] === 0 || delta[removedOrMovedIndex][2] === ARRAY_MOVE) {
                    toRemove.push(parseInt(index.slice(1), 10));
                } else {
                    throw new Error('only removal or move can be applied at original array indices,' + ` invalid diff type: ${delta[removedOrMovedIndex][2]}`);
                }
            } else {
                const numberIndex = index;
                if (delta[numberIndex].length === 1) {
                    // added item at new array
                    toInsert.push({
                        index: parseInt(numberIndex, 10),
                        value: delta[numberIndex][0]
                    });
                } else {
                    // modified item at new array
                    toModify.push({
                        index: parseInt(numberIndex, 10),
                        delta: delta[numberIndex]
                    });
                }
            }
        }
    }
    // remove items, in reverse order to avoid sawing our own floor
    toRemove = toRemove.sort(compare.numerically);
    for(index = toRemove.length - 1; index >= 0; index--){
        index1 = toRemove[index];
        const indexDiff = delta[`_${index1}`];
        const removedValue = array.splice(index1, 1)[0];
        if (indexDiff[2] === ARRAY_MOVE) {
            // reinsert later
            toInsert.push({
                index: indexDiff[1],
                value: removedValue
            });
        }
    }
    // insert items, in reverse order to avoid moving our own floor
    toInsert = toInsert.sort(compare.numericallyBy('index'));
    const toInsertLength = toInsert.length;
    for(index = 0; index < toInsertLength; index++){
        const insertion = toInsert[index];
        array.splice(insertion.index, 0, insertion.value);
    }
    // apply modifications
    const toModifyLength = toModify.length;
    let child;
    if (toModifyLength > 0) {
        for(index = 0; index < toModifyLength; index++){
            const modification = toModify[index];
            child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](array[modification.index], modification.delta);
            context.push(child, modification.index);
        }
    }
    if (!context.children) {
        context.setResult(array).exit();
        return;
    }
    context.exit();
};
patchFilter.filterName = 'arrays';
const collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== 'a') {
        return;
    }
    const array = context.left;
    const length = context.children.length;
    let child;
    for(let index = 0; index < length; index++){
        child = context.children[index];
        const arrayIndex = child.childName;
        array[arrayIndex] = child.result;
    }
    context.setResult(array).exit();
};
collectChildrenPatchFilter.filterName = 'arraysCollectChildren';
const reverseFilter = function arraysReverseFilter(context) {
    if (!context.nested) {
        const nonNestedDelta = context.delta;
        if (nonNestedDelta[2] === ARRAY_MOVE) {
            const arrayMoveDelta = nonNestedDelta;
            context.newName = `_${arrayMoveDelta[1]}`;
            context.setResult([
                arrayMoveDelta[0],
                parseInt(context.childName.substring(1), 10),
                ARRAY_MOVE
            ]).exit();
        }
        return;
    }
    const nestedDelta = context.delta;
    if (nestedDelta._t !== 'a') {
        return;
    }
    const arrayDelta = nestedDelta;
    let name;
    let child;
    for(name in arrayDelta){
        if (name === '_t') {
            continue;
        }
        child = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](arrayDelta[name]);
        context.push(child, name);
    }
    context.exit();
};
reverseFilter.filterName = 'arrays';
const reverseArrayDeltaIndex = (delta, index, itemDelta)=>{
    if (typeof index === 'string' && index[0] === '_') {
        return parseInt(index.substring(1), 10);
    } else if (Array.isArray(itemDelta) && itemDelta[2] === 0) {
        return `_${index}`;
    }
    let reverseIndex = +index;
    for(const deltaIndex in delta){
        const deltaItem = delta[deltaIndex];
        if (Array.isArray(deltaItem)) {
            if (deltaItem[2] === ARRAY_MOVE) {
                const moveFromIndex = parseInt(deltaIndex.substring(1), 10);
                const moveToIndex = deltaItem[1];
                if (moveToIndex === +index) {
                    return moveFromIndex;
                }
                if (moveFromIndex <= reverseIndex && moveToIndex > reverseIndex) {
                    reverseIndex++;
                } else if (moveFromIndex >= reverseIndex && moveToIndex < reverseIndex) {
                    reverseIndex--;
                }
            } else if (deltaItem[2] === 0) {
                const deleteIndex = parseInt(deltaIndex.substring(1), 10);
                if (deleteIndex <= reverseIndex) {
                    reverseIndex++;
                }
            } else if (deltaItem.length === 1 && parseInt(deltaIndex, 10) <= reverseIndex) {
                reverseIndex--;
            }
        }
    }
    return reverseIndex;
};
const collectChildrenReverseFilter = (context)=>{
    if (!context || !context.children) {
        return;
    }
    const deltaWithChildren = context.delta;
    if (deltaWithChildren._t !== 'a') {
        return;
    }
    const arrayDelta = deltaWithChildren;
    const length = context.children.length;
    let child;
    const delta = {
        _t: 'a'
    };
    for(let index = 0; index < length; index++){
        child = context.children[index];
        let name = child.newName;
        if (typeof name === 'undefined') {
            name = reverseArrayDeltaIndex(arrayDelta, child.childName, child.result);
        }
        if (delta[name] !== child.result) {
            // There's no way to type this well.
            delta[name] = child.result;
        }
    }
    context.setResult(delta).exit();
};
collectChildrenReverseFilter.filterName = 'arraysCollectChildren';
}),
"[project]/node_modules/jsondiffpatch/lib/filters/dates.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "diffFilter": ()=>diffFilter
});
const diffFilter = function datesDiffFilter(context) {
    if (context.left instanceof Date) {
        if (context.right instanceof Date) {
            if (context.left.getTime() !== context.right.getTime()) {
                context.setResult([
                    context.left,
                    context.right
                ]);
            } else {
                context.setResult(undefined);
            }
        } else {
            context.setResult([
                context.left,
                context.right
            ]);
        }
        context.exit();
    } else if (context.right instanceof Date) {
        context.setResult([
            context.left,
            context.right
        ]).exit();
    }
};
diffFilter.filterName = 'dates';
}),
"[project]/node_modules/jsondiffpatch/lib/filters/texts.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "diffFilter": ()=>diffFilter,
    "patchFilter": ()=>patchFilter,
    "reverseFilter": ()=>reverseFilter
});
const TEXT_DIFF = 2;
const DEFAULT_MIN_LENGTH = 60;
let cachedDiffPatch = null;
function getDiffMatchPatch(options, required) {
    var _a;
    if (!cachedDiffPatch) {
        let instance;
        if ((_a = options === null || options === void 0 ? void 0 : options.textDiff) === null || _a === void 0 ? void 0 : _a.diffMatchPatch) {
            instance = new options.textDiff.diffMatchPatch();
        } else {
            if (!required) {
                return null;
            }
            const error = new Error('The diff-match-patch library was not provided. Pass the library in through the options or use the `jsondiffpatch/with-text-diffs` entry-point.');
            // eslint-disable-next-line camelcase
            error.diff_match_patch_not_found = true;
            throw error;
        }
        cachedDiffPatch = {
            diff: function(txt1, txt2) {
                return instance.patch_toText(instance.patch_make(txt1, txt2));
            },
            patch: function(txt1, patch) {
                const results = instance.patch_apply(instance.patch_fromText(patch), txt1);
                for(let i = 0; i < results[1].length; i++){
                    if (!results[1][i]) {
                        const error = new Error('text patch failed');
                        error.textPatchFailed = true;
                    }
                }
                return results[0];
            }
        };
    }
    return cachedDiffPatch;
}
const diffFilter = function textsDiffFilter(context) {
    if (context.leftType !== 'string') {
        return;
    }
    const left = context.left;
    const right = context.right;
    const minLength = context.options && context.options.textDiff && context.options.textDiff.minLength || DEFAULT_MIN_LENGTH;
    if (left.length < minLength || right.length < minLength) {
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    // large text, try to use a text-diff algorithm
    const diffMatchPatch = getDiffMatchPatch(context.options);
    if (!diffMatchPatch) {
        // diff-match-patch library not available,
        // fallback to regular string replace
        context.setResult([
            left,
            right
        ]).exit();
        return;
    }
    const diff = diffMatchPatch.diff;
    context.setResult([
        diff(left, right),
        0,
        TEXT_DIFF
    ]).exit();
};
diffFilter.filterName = 'texts';
const patchFilter = function textsPatchFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-patch algorithm
    const patch = getDiffMatchPatch(context.options, true).patch;
    context.setResult(patch(context.left, textDiffDelta[0])).exit();
};
patchFilter.filterName = 'texts';
const textDeltaReverse = function(delta) {
    let i;
    let l;
    let line;
    let lineTmp;
    let header = null;
    const headerRegex = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
    let lineHeader;
    const lines = delta.split('\n');
    for(i = 0, l = lines.length; i < l; i++){
        line = lines[i];
        const lineStart = line.slice(0, 1);
        if (lineStart === '@') {
            header = headerRegex.exec(line);
            lineHeader = i;
            // fix header
            lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
        } else if (lineStart === '+') {
            lines[i] = '-' + lines[i].slice(1);
            if (lines[i - 1].slice(0, 1) === '+') {
                // swap lines to keep default order (-+)
                lineTmp = lines[i];
                lines[i] = lines[i - 1];
                lines[i - 1] = lineTmp;
            }
        } else if (lineStart === '-') {
            lines[i] = '+' + lines[i].slice(1);
        }
    }
    return lines.join('\n');
};
const reverseFilter = function textsReverseFilter(context) {
    if (context.nested) {
        return;
    }
    const nonNestedDelta = context.delta;
    if (nonNestedDelta[2] !== TEXT_DIFF) {
        return;
    }
    const textDiffDelta = nonNestedDelta;
    // text-diff, use a text-diff algorithm
    context.setResult([
        textDeltaReverse(textDiffDelta[0]),
        0,
        TEXT_DIFF
    ]).exit();
};
reverseFilter.filterName = 'texts';
}),
"[project]/node_modules/jsondiffpatch/lib/diffpatcher.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/processor.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/pipe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/diff.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/patch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/contexts/reverse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/clone.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/trivial.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/nested.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/arrays.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/dates.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/filters/texts.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
class DiffPatcher {
    constructor(options){
        this.processor = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$processor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](options);
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('diff').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectChildrenDiffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$dates$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["objectsDiffFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["diffFilter"]).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('patch').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectChildrenPatchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectChildrenPatchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["patchFilter"]).shouldHaveResult());
        this.processor.pipe(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$pipe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]('reverse').append(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectChildrenReverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["collectChildrenReverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$trivial$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$texts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$nested$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseFilter"], __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$filters$2f$arrays$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseFilter"]).shouldHaveResult());
    }
    options(options) {
        return this.processor.options(options);
    }
    diff(left, right) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$diff$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](left, right));
    }
    patch(left, delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$patch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](left, delta));
    }
    reverse(delta) {
        return this.processor.process(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$contexts$2f$reverse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](delta));
    }
    unpatch(right, delta) {
        return this.patch(right, this.reverse(delta));
    }
    clone(value) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$clone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(value);
    }
}
const __TURBOPACK__default__export__ = DiffPatcher;
}),
"[project]/node_modules/jsondiffpatch/lib/index.js [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "clone": ()=>clone,
    "create": ()=>create,
    "diff": ()=>diff,
    "patch": ()=>patch,
    "reverse": ()=>reverse,
    "unpatch": ()=>unpatch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/diffpatcher.js [app-ssr] (ecmascript)");
;
;
;
function create(options) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](options);
}
let defaultInstance;
function diff(left, right) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.diff(left, right);
}
function patch(left, delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.patch(left, delta);
}
function unpatch(right, delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.unpatch(right, delta);
}
function reverse(delta) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.reverse(delta);
}
function clone(value) {
    if (!defaultInstance) {
        defaultInstance = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$diffpatcher$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]();
    }
    return defaultInstance.clone(value);
}
}),
"[project]/node_modules/ai/rsc/dist/rsc-shared.mjs [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "InternalAIProvider": ()=>InternalAIProvider,
    "readStreamableValue": ()=>readStreamableValue,
    "useAIState": ()=>useAIState,
    "useActions": ()=>useActions,
    "useStreamableValue": ()=>useStreamableValue,
    "useSyncUIState": ()=>useSyncUIState,
    "useUIState": ()=>useUIState
});
// rsc/streamable-value/use-streamable-value.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/jsondiffpatch/lib/index.js [app-ssr] (ecmascript) <locals>");
// rsc/shared-client/context.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-runtime.js [app-ssr] (ecmascript)");
"use client";
// rsc/streamable-value/streamable-value.ts
var STREAMABLE_VALUE_TYPE = Symbol.for("ui.streamable.value");
// rsc/streamable-value/is-streamable-value.ts
function isStreamableValue(value) {
    return value != null && typeof value === "object" && "type" in value && value.type === STREAMABLE_VALUE_TYPE;
}
// rsc/streamable-value/read-streamable-value.tsx
function readStreamableValue(streamableValue) {
    if (!isStreamableValue(streamableValue)) {
        throw new Error("Invalid value: this hook only accepts values created via `createStreamableValue`.");
    }
    return {
        [Symbol.asyncIterator] () {
            let row = streamableValue;
            let value = row.curr;
            let isDone = false;
            let isFirstIteration = true;
            return {
                async next () {
                    if (isDone) return {
                        value,
                        done: true
                    };
                    row = await row;
                    if (row.error !== void 0) {
                        throw row.error;
                    }
                    if ("curr" in row || row.diff) {
                        if (row.diff) {
                            if (row.diff[0] === 0) {
                                if (typeof value !== "string") {
                                    throw new Error("Invalid patch: can only append to string types. This is a bug in the AI SDK.");
                                }
                                value = value + row.diff[1];
                            }
                        } else {
                            value = row.curr;
                        }
                        if (!row.next) {
                            isDone = true;
                            return {
                                value,
                                done: false
                            };
                        }
                    }
                    if (row.next === void 0) {
                        return {
                            value,
                            done: true
                        };
                    }
                    row = row.next;
                    if (isFirstIteration) {
                        isFirstIteration = false;
                        if (value === void 0) {
                            return this.next();
                        }
                    }
                    return {
                        value,
                        done: false
                    };
                }
            };
        }
    };
}
;
function checkStreamableValue(value) {
    const hasSignature = isStreamableValue(value);
    if (!hasSignature && value !== void 0) {
        throw new Error("Invalid value: this hook only accepts values created via `createStreamableValue`.");
    }
    return hasSignature;
}
function useStreamableValue(streamableValue) {
    const [curr, setCurr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(checkStreamableValue(streamableValue) ? streamableValue.curr : void 0);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(checkStreamableValue(streamableValue) ? streamableValue.error : void 0);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(checkStreamableValue(streamableValue) ? !!streamableValue.next : false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLayoutEffect"])(()=>{
        if (!checkStreamableValue(streamableValue)) return;
        let cancelled = false;
        const iterator = readStreamableValue(streamableValue);
        if (streamableValue.next) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                if (cancelled) return;
                setPending(true);
            });
        }
        (async ()=>{
            try {
                for await (const value of iterator){
                    if (cancelled) return;
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                        if (cancelled) return;
                        setCurr(value);
                    });
                }
            } catch (e) {
                if (cancelled) return;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                    if (cancelled) return;
                    setError(e);
                });
            } finally{
                if (cancelled) return;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startTransition"])(()=>{
                    if (cancelled) return;
                    setPending(false);
                });
            }
        })();
        return ()=>{
            cancelled = true;
        };
    }, [
        streamableValue
    ]);
    return [
        curr,
        error,
        pending
    ];
}
;
;
// util/is-function.ts
var isFunction = (value)=>typeof value === "function";
;
var InternalUIStateProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
var InternalAIStateProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(void 0);
var InternalActionProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
var InternalSyncUIStateProvider = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.createContext(null);
function InternalAIProvider({ children, initialUIState, initialAIState, initialAIStatePatch, wrappedActions, wrappedSyncUIState }) {
    if (!("use" in __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__)) {
        throw new Error("Unsupported React version.");
    }
    const uiState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(initialUIState);
    const setUIState = uiState[1];
    const resolvedInitialAIStatePatch = initialAIStatePatch ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.use(initialAIStatePatch) : void 0;
    initialAIState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (resolvedInitialAIStatePatch) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patch"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clone"](initialAIState), resolvedInitialAIStatePatch);
        }
        return initialAIState;
    }, [
        initialAIState,
        resolvedInitialAIStatePatch
    ]);
    const aiState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useState(initialAIState);
    const setAIState = aiState[1];
    const aiStateRef = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useRef(aiState[0]);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useEffect(()=>{
        aiStateRef.current = aiState[0];
    }, [
        aiState[0]
    ]);
    const clientWrappedActions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>Object.fromEntries(Object.entries(wrappedActions).map(([key, action])=>[
                key,
                async (...args)=>{
                    const aiStateSnapshot = aiStateRef.current;
                    const [aiStateDelta, result] = await action(aiStateSnapshot, ...args);
                    (async ()=>{
                        const delta = await aiStateDelta;
                        if (delta !== void 0) {
                            aiState[1](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patch"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clone"](aiStateSnapshot), delta));
                        }
                    })();
                    return result;
                }
            ])), [
        wrappedActions
    ]);
    const clientWrappedSyncUIStateAction = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useMemo(()=>{
        if (!wrappedSyncUIState) {
            return ()=>{};
        }
        return async ()=>{
            const aiStateSnapshot = aiStateRef.current;
            const [aiStateDelta, uiState2] = await wrappedSyncUIState(aiStateSnapshot);
            if (uiState2 !== void 0) {
                setUIState(uiState2);
            }
            const delta = await aiStateDelta;
            if (delta !== void 0) {
                const patchedAiState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["patch"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$jsondiffpatch$2f$lib$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["clone"](aiStateSnapshot), delta);
                setAIState(patchedAiState);
            }
        };
    }, [
        wrappedSyncUIState
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InternalAIStateProvider.Provider, {
        value: aiState,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InternalUIStateProvider.Provider, {
            value: uiState,
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InternalActionProvider.Provider, {
                value: clientWrappedActions,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsx"])(InternalSyncUIStateProvider.Provider, {
                    value: clientWrappedSyncUIStateAction,
                    children
                })
            })
        })
    });
}
function useUIState() {
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(InternalUIStateProvider);
    if (state === null) {
        throw new Error("`useUIState` must be used inside an <AI> provider.");
    }
    if (!Array.isArray(state)) {
        throw new Error("Invalid state");
    }
    if (state[0] === void 0) {
        throw new Error("`initialUIState` must be provided to `createAI` or `<AI>`");
    }
    return state;
}
function useAIState(...args) {
    const state = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(InternalAIStateProvider);
    if (state === null) {
        throw new Error("`useAIState` must be used inside an <AI> provider.");
    }
    if (!Array.isArray(state)) {
        throw new Error("Invalid state");
    }
    if (state[0] === void 0) {
        throw new Error("`initialAIState` must be provided to `createAI` or `<AI>`");
    }
    if (args.length >= 1 && typeof state[0] !== "object") {
        throw new Error("When using `useAIState` with a key, the AI state must be an object.");
    }
    const key = args[0];
    const setter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useCallback(typeof key === "undefined" ? state[1] : (newState)=>{
        if (isFunction(newState)) {
            return state[1]((s)=>{
                return {
                    ...s,
                    [key]: newState(s[key])
                };
            });
        } else {
            return state[1]({
                ...state[0],
                [key]: newState
            });
        }
    }, [
        key
    ]);
    if (args.length === 0) {
        return state;
    } else {
        return [
            state[0][args[0]],
            setter
        ];
    }
}
function useActions() {
    const actions = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(InternalActionProvider);
    return actions;
}
function useSyncUIState() {
    const syncUIState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.useContext(InternalSyncUIStateProvider);
    if (syncUIState === null) {
        throw new Error("`useSyncUIState` must be used inside an <AI> provider.");
    }
    return syncUIState;
}
;
 //# sourceMappingURL=rsc-shared.mjs.map
}),

};

//# sourceMappingURL=_3fbe62af._.js.map