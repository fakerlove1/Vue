!function (e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {i: o, l: !1, exports: {}};
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }

    t.m = e, t.c = n, t.d = function (e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: o})
    }, t.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, n) {
        if (1 & n && (e = t(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (t.r(o), Object.defineProperty(o, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) t.d(o, r, function (n) {
            return e[n]
        }.bind(null, r));
        return o
    }, t.n = function (e) {
        var n = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "", t(t.s = 0)
}([function (e, n, t) {
    console.log("这个是主函数的入口");
    const {add: o, sub: r} = t(1);
    console.log("123"), console.log("12123"), console.log("12122123"), o(10, 9), r(10, 9)
}, function (e, n) {
    e.exports = {
        add: function (e, n) {
            return console.log("加法的入口"), e + n
        }, sub: function (e, n) {
            return e - n
        }
    }
}]);