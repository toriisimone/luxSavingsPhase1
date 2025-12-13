(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Countdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const Countdown = ({ targetDate })=>{
    _s();
    const calculateTimeLeft = ()=>{
        const now = new Date();
        const target = new Date(targetDate);
        const difference = target.getTime() - now.getTime();
        let timeLeft = {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor(difference / (1000 * 60 * 60) % 24),
                minutes: Math.floor(difference / (1000 * 60) % 60),
                seconds: Math.floor(difference / 1000 % 60)
            };
        }
        return timeLeft;
    };
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(calculateTimeLeft());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Countdown.useEffect": ()=>{
            const timer = setInterval({
                "Countdown.useEffect.timer": ()=>{
                    setTimeLeft(calculateTimeLeft());
                }
            }["Countdown.useEffect.timer"], 1000);
            return ({
                "Countdown.useEffect": ()=>clearInterval(timer)
            })["Countdown.useEffect"];
        }
    }["Countdown.useEffect"], [
        targetDate
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-white font-mono text-lg",
        children: [
            timeLeft.hours.toString().padStart(2, '0'),
            ":",
            timeLeft.minutes.toString().padStart(2, '0'),
            ":",
            timeLeft.seconds.toString().padStart(2, '0'),
            " Until Phase One closes"
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Countdown.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Countdown, "2yD7J9BRKO6eNclZT/dCzRz3Fpg=");
_c = Countdown;
const __TURBOPACK__default__export__ = Countdown;
var _c;
__turbopack_context__.k.register(_c, "Countdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_Countdown_tsx_97113eda._.js.map