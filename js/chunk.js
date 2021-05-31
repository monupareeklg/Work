(window.webpackJsonp = window.webpackJsonp || []).push([
    [12],
    {
        202: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(55),
                o = a(1),
                l = a.n(o),
                c = a(3),
                i = a.n(c),
                m = a(7),
                u = a.n(m),
                p = a(57),
                d = a(5),
                h = Object(s.a)({}, p.Transition.propTypes, {
                    children: i.a.oneOfType([i.a.arrayOf(i.a.node), i.a.node]),
                    tag: d.m,
                    baseClass: i.a.string,
                    baseClassActive: i.a.string,
                    className: i.a.string,
                    cssModule: i.a.object,
                    innerRef: i.a.oneOfType([i.a.object, i.a.string, i.a.func]),
                }),
                b = Object(s.a)({}, p.Transition.defaultProps, { tag: "div", baseClass: "fade", baseClassActive: "show", timeout: d.c.Fade, appear: !0, enter: !0, exit: !0, in: !0 });
            function y(e) {
                var t = e.tag,
                    a = e.baseClass,
                    s = e.baseClassActive,
                    o = e.className,
                    c = e.cssModule,
                    i = e.children,
                    m = e.innerRef,
                    h = Object(r.a)(e, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]),
                    b = Object(d.k)(h, d.a),
                    y = Object(d.j)(h, d.a);
                return l.a.createElement(p.Transition, b, function (e) {
                    var r = "entered" === e,
                        p = Object(d.i)(u()(o, a, r && s), c);
                    return l.a.createElement(t, Object(n.a)({ className: p }, y, { ref: m }), i);
                });
            }
            (y.propTypes = h), (y.defaultProps = b), (t.a = y);
        },
        204: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, wrapTag: u.m, toggle: c.a.func, className: c.a.string, cssModule: c.a.object, children: c.a.node, closeAriaLabel: c.a.string, charCode: c.a.oneOfType([c.a.string, c.a.number]), close: c.a.object },
                d = function (e) {
                    var t,
                        a = e.className,
                        s = e.cssModule,
                        l = e.children,
                        c = e.toggle,
                        i = e.tag,
                        p = e.wrapTag,
                        d = e.closeAriaLabel,
                        h = e.charCode,
                        b = e.close,
                        y = Object(r.a)(e, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]),
                        g = Object(u.i)(m()(a, "modal-header"), s);
                    if (!b && c) {
                        var E = "number" === typeof h ? String.fromCharCode(h) : h;
                        t = o.a.createElement("button", { type: "button", onClick: c, className: Object(u.i)("close", s), "aria-label": d }, o.a.createElement("span", { "aria-hidden": "true" }, E));
                    }
                    return o.a.createElement(p, Object(n.a)({}, y, { className: g }), o.a.createElement(i, { className: Object(u.i)("modal-title", s) }, l), b || t);
                };
            (d.propTypes = p), (d.defaultProps = { tag: "h5", wrapTag: "div", closeAriaLabel: "Close", charCode: 215 }), (t.a = d);
        },
        205: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, className: c.a.string, cssModule: c.a.object },
                d = function (e) {
                    var t = e.className,
                        a = e.cssModule,
                        s = e.tag,
                        l = Object(r.a)(e, ["className", "cssModule", "tag"]),
                        c = Object(u.i)(m()(t, "modal-body"), a);
                    return o.a.createElement(s, Object(n.a)({}, l, { className: c }));
                };
            (d.propTypes = p), (d.defaultProps = { tag: "div" }), (t.a = d);
        },
        208: function (e, t, a) {
            "use strict";
            var n = a(55),
                r = a(4),
                s = a(21),
                o = a(15),
                l = a(1),
                c = a.n(l),
                i = a(3),
                m = a.n(i),
                u = a(7),
                p = a.n(u),
                d = a(22),
                h = a.n(d),
                b = a(5),
                y = { children: m.a.node.isRequired, node: m.a.any },
                g = (function (e) {
                    function t() {
                        return e.apply(this, arguments) || this;
                    }
                    Object(s.a)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentWillUnmount = function () {
                            this.defaultNode && document.body.removeChild(this.defaultNode), (this.defaultNode = null);
                        }),
                        (a.render = function () {
                            return b.d
                                ? (this.props.node || this.defaultNode || ((this.defaultNode = document.createElement("div")), document.body.appendChild(this.defaultNode)),
                                  h.a.createPortal(this.props.children, this.props.node || this.defaultNode))
                                : null;
                        }),
                        t
                    );
                })(c.a.Component);
            g.propTypes = y;
            var E = g,
                f = a(202);
            function _() {}
            var w = m.a.shape(f.a.propTypes),
                v = {
                    isOpen: m.a.bool,
                    autoFocus: m.a.bool,
                    centered: m.a.bool,
                    size: m.a.string,
                    toggle: m.a.func,
                    keyboard: m.a.bool,
                    role: m.a.string,
                    labelledBy: m.a.string,
                    backdrop: m.a.oneOfType([m.a.bool, m.a.oneOf(["static"])]),
                    onEnter: m.a.func,
                    onExit: m.a.func,
                    onOpened: m.a.func,
                    onClosed: m.a.func,
                    children: m.a.node,
                    className: m.a.string,
                    wrapClassName: m.a.string,
                    modalClassName: m.a.string,
                    backdropClassName: m.a.string,
                    contentClassName: m.a.string,
                    external: m.a.node,
                    fade: m.a.bool,
                    cssModule: m.a.object,
                    zIndex: m.a.oneOfType([m.a.number, m.a.string]),
                    backdropTransition: w,
                    modalTransition: w,
                    innerRef: m.a.oneOfType([m.a.object, m.a.string, m.a.func]),
                },
                N = Object.keys(v),
                C = {
                    isOpen: !1,
                    autoFocus: !0,
                    centered: !1,
                    role: "dialog",
                    backdrop: !0,
                    keyboard: !0,
                    zIndex: 1050,
                    fade: !0,
                    onOpened: _,
                    onClosed: _,
                    modalTransition: { timeout: b.c.Modal },
                    backdropTransition: { mountOnEnter: !0, timeout: b.c.Fade },
                },
                O = (function (e) {
                    function t(t) {
                        var a;
                        return (
                            ((a = e.call(this, t) || this)._element = null),
                            (a._originalBodyPadding = null),
                            (a.getFocusableChildren = a.getFocusableChildren.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.handleBackdropClick = a.handleBackdropClick.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.handleBackdropMouseDown = a.handleBackdropMouseDown.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.handleEscape = a.handleEscape.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.handleTab = a.handleTab.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.onOpened = a.onOpened.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.onClosed = a.onClosed.bind(Object(o.a)(Object(o.a)(a)))),
                            (a.state = { isOpen: t.isOpen }),
                            t.isOpen && a.init(),
                            a
                        );
                    }
                    Object(s.a)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            this.props.onEnter && this.props.onEnter(), this.state.isOpen && this.props.autoFocus && this.setFocus(), (this._isMounted = !0);
                        }),
                        (a.componentWillReceiveProps = function (e) {
                            e.isOpen && !this.props.isOpen && this.setState({ isOpen: e.isOpen });
                        }),
                        (a.componentWillUpdate = function (e, t) {
                            t.isOpen && !this.state.isOpen && this.init();
                        }),
                        (a.componentDidUpdate = function (e, t) {
                            this.props.autoFocus && this.state.isOpen && !t.isOpen && this.setFocus(), this._element && e.zIndex !== this.props.zIndex && (this._element.style.zIndex = this.props.zIndex);
                        }),
                        (a.componentWillUnmount = function () {
                            this.props.onExit && this.props.onExit(), this.state.isOpen && this.destroy(), (this._isMounted = !1);
                        }),
                        (a.onOpened = function (e, t) {
                            this.props.onOpened(), (this.props.modalTransition.onEntered || _)(e, t);
                        }),
                        (a.onClosed = function (e) {
                            this.props.onClosed(), (this.props.modalTransition.onExited || _)(e), this.destroy(), this._isMounted && this.setState({ isOpen: !1 });
                        }),
                        (a.setFocus = function () {
                            this._dialog && this._dialog.parentNode && "function" === typeof this._dialog.parentNode.focus && this._dialog.parentNode.focus();
                        }),
                        (a.getFocusableChildren = function () {
                            return this._element.querySelectorAll(b.g.join(", "));
                        }),
                        (a.getFocusedChild = function () {
                            var e,
                                t = this.getFocusableChildren();
                            try {
                                e = document.activeElement;
                            } catch (a) {
                                e = t[0];
                            }
                            return e;
                        }),
                        (a.handleBackdropClick = function (e) {
                            if (e.target === this._mouseDownElement) {
                                if ((e.stopPropagation(), !this.props.isOpen || !0 !== this.props.backdrop)) return;
                                var t = this._dialog ? this._dialog.parentNode : null;
                                t && e.target === t && this.props.toggle && this.props.toggle(e);
                            }
                        }),
                        (a.handleTab = function (e) {
                            if (9 === e.which) {
                                for (var t = this.getFocusableChildren(), a = t.length, n = this.getFocusedChild(), r = 0, s = 0; s < a; s += 1)
                                    if (t[s] === n) {
                                        r = s;
                                        break;
                                    }
                                e.shiftKey && 0 === r ? (e.preventDefault(), t[a - 1].focus()) : e.shiftKey || r !== a - 1 || (e.preventDefault(), t[0].focus());
                            }
                        }),
                        (a.handleBackdropMouseDown = function (e) {
                            this._mouseDownElement = e.target;
                        }),
                        (a.handleEscape = function (e) {
                            this.props.isOpen && this.props.keyboard && 27 === e.keyCode && this.props.toggle && (e.preventDefault(), e.stopPropagation(), this.props.toggle(e));
                        }),
                        (a.init = function () {
                            try {
                                this._triggeringElement = document.activeElement;
                            } catch (e) {
                                this._triggeringElement = null;
                            }
                            (this._element = document.createElement("div")),
                                this._element.setAttribute("tabindex", "-1"),
                                (this._element.style.position = "relative"),
                                (this._element.style.zIndex = this.props.zIndex),
                                (this._originalBodyPadding = Object(b.h)()),
                                Object(b.e)(),
                                document.body.appendChild(this._element),
                                0 === t.openCount && (document.body.className = p()(document.body.className, Object(b.i)("modal-open", this.props.cssModule))),
                                (t.openCount += 1);
                        }),
                        (a.destroy = function () {
                            if (
                                (this._element && (document.body.removeChild(this._element), (this._element = null)),
                                this._triggeringElement && (this._triggeringElement.focus && this._triggeringElement.focus(), (this._triggeringElement = null)),
                                t.openCount <= 1)
                            ) {
                                var e = Object(b.i)("modal-open", this.props.cssModule),
                                    a = new RegExp("(^| )" + e + "( |$)");
                                document.body.className = document.body.className.replace(a, " ").trim();
                            }
                            (t.openCount -= 1), Object(b.l)(this._originalBodyPadding);
                        }),
                        (a.renderModalDialog = function () {
                            var e,
                                t = this,
                                a = Object(b.j)(this.props, N);
                            return c.a.createElement(
                                "div",
                                Object(r.a)({}, a, {
                                    className: Object(b.i)(
                                        p()("modal-dialog", this.props.className, ((e = {}), (e["modal-" + this.props.size] = this.props.size), (e["modal-dialog-centered"] = this.props.centered), e)),
                                        this.props.cssModule
                                    ),
                                    role: "document",
                                    ref: function (e) {
                                        t._dialog = e;
                                    },
                                }),
                                c.a.createElement("div", { className: Object(b.i)(p()("modal-content", this.props.contentClassName), this.props.cssModule) }, this.props.children)
                            );
                        }),
                        (a.render = function () {
                            if (this.state.isOpen) {
                                var e = this.props,
                                    t = e.wrapClassName,
                                    a = e.modalClassName,
                                    s = e.backdropClassName,
                                    o = e.cssModule,
                                    l = e.isOpen,
                                    i = e.backdrop,
                                    m = e.role,
                                    u = e.labelledBy,
                                    d = e.external,
                                    h = e.innerRef,
                                    y = {
                                        onClick: this.handleBackdropClick,
                                        onMouseDown: this.handleBackdropMouseDown,
                                        onKeyUp: this.handleEscape,
                                        onKeyDown: this.handleTab,
                                        style: { display: "block" },
                                        "aria-labelledby": u,
                                        role: m,
                                        tabIndex: "-1",
                                    },
                                    g = this.props.fade,
                                    _ = Object(n.a)({}, f.a.defaultProps, this.props.modalTransition, { baseClass: g ? this.props.modalTransition.baseClass : "", timeout: g ? this.props.modalTransition.timeout : 0 }),
                                    w = Object(n.a)({}, f.a.defaultProps, this.props.backdropTransition, { baseClass: g ? this.props.backdropTransition.baseClass : "", timeout: g ? this.props.backdropTransition.timeout : 0 }),
                                    v =
                                        i &&
                                        (g
                                            ? c.a.createElement(f.a, Object(r.a)({}, w, { in: l && !!i, cssModule: o, className: Object(b.i)(p()("modal-backdrop", s), o) }))
                                            : c.a.createElement("div", { className: Object(b.i)(p()("modal-backdrop", "show", s), o) }));
                                return c.a.createElement(
                                    E,
                                    { node: this._element },
                                    c.a.createElement(
                                        "div",
                                        { className: Object(b.i)(t) },
                                        c.a.createElement(
                                            f.a,
                                            Object(r.a)({}, y, _, { in: l, onEntered: this.onOpened, onExited: this.onClosed, cssModule: o, className: Object(b.i)(p()("modal", a), o), innerRef: h }),
                                            d,
                                            this.renderModalDialog()
                                        ),
                                        v
                                    )
                                );
                            }
                            return null;
                        }),
                        t
                    );
                })(c.a.Component);
            (O.propTypes = v), (O.defaultProps = C), (O.openCount = 0);
            t.a = O;
        },
        209: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, className: c.a.string, cssModule: c.a.object },
                d = function (e) {
                    var t = e.className,
                        a = e.cssModule,
                        s = e.tag,
                        l = Object(r.a)(e, ["className", "cssModule", "tag"]),
                        c = Object(u.i)(m()(t, "modal-footer"), a);
                    return o.a.createElement(s, Object(n.a)({}, l, { className: c }));
                };
            (d.propTypes = p), (d.defaultProps = { tag: "div" }), (t.a = d);
        },
        210: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(21),
                o = a(15),
                l = a(1),
                c = a.n(l),
                i = a(3),
                m = a.n(i),
                u = a(7),
                p = a.n(u),
                d = a(5),
                h = {
                    active: m.a.bool,
                    "aria-label": m.a.string,
                    block: m.a.bool,
                    color: m.a.string,
                    disabled: m.a.bool,
                    outline: m.a.bool,
                    tag: d.m,
                    innerRef: m.a.oneOfType([m.a.object, m.a.func, m.a.string]),
                    onClick: m.a.func,
                    size: m.a.string,
                    children: m.a.node,
                    className: m.a.string,
                    cssModule: m.a.object,
                    close: m.a.bool,
                },
                b = (function (e) {
                    function t(t) {
                        var a;
                        return ((a = e.call(this, t) || this).onClick = a.onClick.bind(Object(o.a)(Object(o.a)(a)))), a;
                    }
                    Object(s.a)(t, e);
                    var a = t.prototype;
                    return (
                        (a.onClick = function (e) {
                            this.props.disabled ? e.preventDefault() : this.props.onClick && this.props.onClick(e);
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.active,
                                a = e["aria-label"],
                                s = e.block,
                                o = e.className,
                                l = e.close,
                                i = e.cssModule,
                                m = e.color,
                                u = e.outline,
                                h = e.size,
                                b = e.tag,
                                y = e.innerRef,
                                g = Object(r.a)(e, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);
                            l && "undefined" === typeof g.children && (g.children = c.a.createElement("span", { "aria-hidden": !0 }, "\xd7"));
                            var E = "btn" + (u ? "-outline" : "") + "-" + m,
                                f = Object(d.i)(p()(o, { close: l }, l || "btn", l || E, !!h && "btn-" + h, !!s && "btn-block", { active: t, disabled: this.props.disabled }), i);
                            g.href && "button" === b && (b = "a");
                            var _ = l ? "Close" : null;
                            return c.a.createElement(b, Object(n.a)({ type: "button" === b && g.onClick ? "button" : void 0 }, g, { className: f, ref: y, onClick: this.onClick, "aria-label": a || _ }));
                        }),
                        t
                    );
                })(c.a.Component);
            (b.propTypes = h), (b.defaultProps = { color: "secondary", tag: "button" }), (t.a = b);
        },
        212: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, className: c.a.string, cssModule: c.a.object, innerRef: c.a.oneOfType([c.a.object, c.a.string, c.a.func]) },
                d = function (e) {
                    var t = e.className,
                        a = e.cssModule,
                        s = e.innerRef,
                        l = e.tag,
                        c = Object(r.a)(e, ["className", "cssModule", "innerRef", "tag"]),
                        i = Object(u.i)(m()(t, "card-body"), a);
                    return o.a.createElement(l, Object(n.a)({}, c, { className: i, ref: s }));
                };
            (d.propTypes = p), (d.defaultProps = { tag: "div" }), (t.a = d);
        },
        222: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, className: c.a.string, cssModule: c.a.object },
                d = function (e) {
                    var t = e.className,
                        a = e.cssModule,
                        s = e.tag,
                        l = Object(r.a)(e, ["className", "cssModule", "tag"]),
                        c = Object(u.i)(m()(t, "card-header"), a);
                    return o.a.createElement(s, Object(n.a)({}, l, { className: c }));
                };
            (d.propTypes = p), (d.defaultProps = { tag: "div" }), (t.a = d);
        },
        286: function (e, t, a) {
            "use strict";
            var n = a(4),
                r = a(9),
                s = a(1),
                o = a.n(s),
                l = a(3),
                c = a.n(l),
                i = a(7),
                m = a.n(i),
                u = a(5),
                p = { tag: u.m, "aria-label": c.a.string, className: c.a.string, cssModule: c.a.object, role: c.a.string, size: c.a.string, vertical: c.a.bool },
                d = function (e) {
                    var t = e.className,
                        a = e.cssModule,
                        s = e.size,
                        l = e.vertical,
                        c = e.tag,
                        i = Object(r.a)(e, ["className", "cssModule", "size", "vertical", "tag"]),
                        p = Object(u.i)(m()(t, !!s && "btn-group-" + s, l ? "btn-group-vertical" : "btn-group"), a);
                    return o.a.createElement(c, Object(n.a)({}, i, { className: p }));
                };
            (d.propTypes = p), (d.defaultProps = { tag: "div", role: "group" }), (t.a = d);
        },
        384: function (e, t, a) {
            "use strict";
            a.r(t);
            var n,
                r = a(24),
                s = a(25),
                o = a(27),
                l = a(26),
                c = a(28),
                i = a(49),
                m = a(1),
                u = a.n(m),
                p = a(45),
                d = a(193),
                h = a(79),
                b = a(210),
                y = a(208),
                g = a(204),
                E = a(205),
                f = a(190),
                _ = a(209),
                w = a(191),
                v = a(192),
                N = a(222),
                C = a(212),
                O = a(286),
                k = a(194),
                j = a(43),
                S = a(44),
                T = a(199),
                x = a(195),
                I = a(75),
                R = a(32),
                z = a(10),
                M = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            Object(r.a)(this, t),
                            ((a = Object(o.a)(this, Object(l.a)(t).call(this, e))).onTimeDecrease = function () {
                                clearTimeout(n),
                                    (n = setTimeout(a.onTimeDecrease, 1e3)),
                                    a.setter.setState({ time: a.state.time - 1e3 }),
                                    a.state.time < 1e3 && a.state.time >= 0
                                        ? fetch("/api/enjoy/" + a.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                              e.status < 400
                                                  ? e.json().then(function (e) {
                                                        a.setter.setState({
                                                            log_time: e.log_time,
                                                            bet: e.bet,
                                                            price: e.price ? e.price : a.state.price,
                                                            records: e.records,
                                                            my_records: e.my_records,
                                                            number: e.number ? e.number : a.state.number,
                                                            resultStatus: !0,
                                                            contract: e.contract ? e.contract : a.state.contract,
                                                            time: 18e4 - parseInt(e.time),
                                                            records_my_page: parseInt(e.records_my_page),
                                                            last_records_my_page: parseInt(e.last_records_my_page),
                                                            records_page: parseInt(e.records_page),
                                                            last_records_page: parseInt(e.last_records_page),
                                                        }),
                                                            (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                            localStorage.setItem("auth", JSON.stringify(a.props.auth));
                                                    })
                                                  : a.setter.setState({ redirectToLogin: !0 });
                                          })
                                        : a.state.time < 0
                                        ? fetch("/api/enjoy/" + a.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                              e.status < 400
                                                  ? e.json().then(function (e) {
                                                        a.setter.setState({
                                                            log_time: e.log_time,
                                                            bet: e.bet,
                                                            price: e.price ? e.price : a.state.price,
                                                            records: e.records,
                                                            my_records: e.my_records,
                                                            number: e.number ? e.number : a.state.number,
                                                            contract: e.contract ? e.contract : a.state.contract,
                                                            time: 18e4 - parseInt(e.time),
                                                            records_my_page: parseInt(e.records_my_page),
                                                            last_records_my_page: parseInt(e.last_records_my_page),
                                                            records_page: parseInt(e.records_page),
                                                            last_records_page: parseInt(e.last_records_page),
                                                        }),
                                                            (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                            localStorage.setItem("auth", JSON.stringify(a.props.auth));
                                                    })
                                                  : a.setter.setState({ redirectToLogin: !0 });
                                          })
                                        : a.state.time < 3e4 && a.state.time > 28e3
                                        ? fetch("/api/enjoy/" + a.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                              e.status < 400
                                                  ? e.json().then(function (e) {
                                                        a.setter.setState({
                                                            log_time: e.log_time,
                                                            bet: e.bet,
                                                            price: e.price ? e.price : a.state.price,
                                                            records: e.records,
                                                            my_records: e.my_records,
                                                            number: e.number ? e.number : a.state.number,
                                                            contract: e.contract ? e.contract : a.state.contract,
                                                            time: 18e4 - parseInt(e.time),
                                                            records_my_page: parseInt(e.records_my_page),
                                                            last_records_my_page: parseInt(e.last_records_my_page),
                                                            records_page: parseInt(e.records_page),
                                                            last_records_page: parseInt(e.last_records_page),
                                                            resultReadStatus: !0,
                                                        }),
                                                            (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                            localStorage.setItem("auth", JSON.stringify(a.props.auth));
                                                    })
                                                  : a.setter.setState({ redirectToLogin: !0 });
                                          })
                                        : a.state.time > 178500 &&
                                          fetch("/api/enjoy/" + a.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                              e.status < 400
                                                  ? e.json().then(function (e) {
                                                        a.setter.setState({
                                                            log_time: e.log_time,
                                                            bet: e.bet,
                                                            price: e.price ? e.price : a.state.price,
                                                            records: e.records,
                                                            my_records: e.my_records,
                                                            number: e.number ? e.number : a.state.number,
                                                            contract: e.contract ? e.contract : a.state.contract,
                                                            time: 18e4 - parseInt(e.time),
                                                            records_my_page: parseInt(e.records_my_page),
                                                            last_records_my_page: parseInt(e.last_records_my_page),
                                                            records_page: parseInt(e.records_page),
                                                            last_records_page: parseInt(e.last_records_page),
                                                            resultReadStatus: !0,
                                                        }),
                                                            (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                            localStorage.setItem("auth", JSON.stringify(a.props.auth));
                                                    })
                                                  : a.setter.setState({ redirectToLogin: !0 });
                                          });
                            }),
                            (a.onButtonClick = function (e) {
                                return function () {
                                    return a.setter.setState({ contract_no: e, pre_contract: 10 }), a.toggle()();
                                };
                            }),
                            (a.toggle = function (e) {
                                return function () {
                                    if (!e) return a.setter.setState({ modal: !a.state.modal });
                                };
                            }),
                            (a.toggleRead = function (e) {
                                return function () {
                                    if (!e) return a.setter.setState({ readModal: !a.state.readModal });
                                };
                            }),
                            (a.onContractChange = function (e) {
                                return function () {
                                    if ("+" === e) {
                                        if ("9" === a.refs.contract.innerHTML) return;
                                        a.refs.contract.innerHTML = parseInt(a.refs.contract.innerHTML) + 1;
                                    } else {
                                        if ("-" !== e) return void a.setter.setState({ pre_contract: parseInt(a.refs.contract.innerHTML) * parseInt(e) });
                                        if ("1" === a.refs.contract.innerHTML) return;
                                        a.refs.contract.innerHTML = parseInt(a.refs.contract.innerHTML) - 1;
                                    }
                                    a.state.pre_contract >= 1e4
                                        ? a.setter.setState({ pre_contract: 1e4 * parseInt(a.refs.contract.innerHTML) })
                                        : a.state.pre_contract >= 1e3
                                        ? a.setter.setState({ pre_contract: 1e3 * parseInt(a.refs.contract.innerHTML) })
                                        : a.state.pre_contract >= 100
                                        ? a.setter.setState({ pre_contract: 100 * parseInt(a.refs.contract.innerHTML) })
                                        : a.state.pre_contract >= 10 && a.setter.setState({ pre_contract: 10 * parseInt(a.refs.contract.innerHTML) });
                                };
                            }),
                            (a.onPostState = function () {
                                fetch("/api/enjoy", {
                                    method: "POST",
                                    headers: { "content-type": "application/json", Authorization: a.props.auth.userToken },
                                    body: JSON.stringify({ guess: a.state.contract_no, contract_money: a.state.pre_contract, level: a.state.level }),
                                }).then(function (e) {
                                    e.status < 400
                                        ? e.json().then(function (e) {
                                              e.error
                                                  ? a.setState({ error: e.error, errorStatus: !0 })
                                                  : (a.setter.setState({ bet: e.bet }), (a.props.auth.user.budget = e.bet[0]), localStorage.setItem("auth", JSON.stringify(a.props.auth))),
                                                  a.setter.setState({ modal: !1 });
                                          })
                                        : a.setter.setState({ redirectToLogin: !0 });
                                });
                            }),
                            (a.onCategoryClick = function (e) {
                                return function () {
                                    a.setter.setState({ level: e }),
                                        fetch("/api/enjoy/" + e, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                            e.status < 400
                                                ? e.json().then(function (e) {
                                                      a.setter.setState({
                                                          log_time: e.log_time,
                                                          bet: e.bet,
                                                          price: e.price ? e.price : a.state.price,
                                                          records: e.records,
                                                          my_records: e.my_records,
                                                          number: e.number ? e.number : a.state.number,
                                                          contract: e.contract ? e.contract : a.state.contract,
                                                          time: 18e4 - parseInt(e.time),
                                                          records_my_page: parseInt(e.records_my_page),
                                                          last_records_my_page: parseInt(e.last_records_my_page),
                                                          records_page: parseInt(e.records_page),
                                                          last_records_page: parseInt(e.last_records_page),
                                                      }),
                                                          (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                          localStorage.setItem("auth", JSON.stringify(a.props.auth)),
                                                          clearTimeout(n),
                                                          (n = setTimeout(a.onTimeDecrease, 1e3));
                                                  })
                                                : a.setter.setState({ redirectToLogin: !0 });
                                        });
                                };
                            }),
                            (a.gotoRecordsPage = function (e) {
                                fetch("/api/enjoy-page/" + a.state.level + "/" + e, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                    e.status < 400
                                        ? e.json().then(function (e) {
                                              a.setter.setState({ records: e.records, modal: !1, records_page: parseInt(e.records_page), last_records_page: parseInt(e.last_records_page) });
                                          })
                                        : a.setter.setState({ redirectToLogin: !0 });
                                });
                            }),
                            (a.gotoMyRecordsPage = function (e) {
                                fetch("/api/enjoy-my-page/" + a.state.level + "/" + e, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                    e.status < 400
                                        ? e.json().then(function (e) {
                                              a.setter.setState({ my_records: e.my_records, modal: !1, records_my_page: parseInt(e.records_my_page), last_records_my_page: parseInt(e.last_records_my_page) });
                                          })
                                        : a.setter.setState({ redirectToLogin: !0 });
                                });
                            }),
                            (a.onReload = function () {
                                a.setter.setState({ reload: !0 }),
                                    fetch("/api/enjoy/" + a.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: a.props.auth.userToken } }).then(function (e) {
                                        e.status < 400
                                            ? (a.setter.setState({ reload: !1 }),
                                              e.json().then(function (e) {
                                                  clearTimeout(n),
                                                      (n = setTimeout(a.onTimeDecrease, 1e3)),
                                                      a.setter.setState({
                                                          log_time: e.log_time,
                                                          bet: e.bet,
                                                          price: e.price ? e.price : a.state.price,
                                                          records: e.records,
                                                          my_records: e.my_records,
                                                          number: e.number ? e.number : a.state.number,
                                                          contract: e.contract ? e.contract : a.state.contract,
                                                          time: 18e4 - parseInt(e.time),
                                                          records_my_page: parseInt(e.records_my_page),
                                                          last_records_my_page: parseInt(e.last_records_my_page),
                                                          records_page: parseInt(e.records_page),
                                                          last_records_page: parseInt(e.last_records_page),
                                                      }),
                                                      (a.props.auth.user.budget = e.balance ? e.balance : a.props.auth.user.budget),
                                                      localStorage.setItem("auth", JSON.stringify(a.props.auth));
                                              }))
                                            : a.setter.setState({ redirectToLogin: !0 });
                                    });
                            }),
                            (a.onRecharge = function () {
                                a.props.history.push("/wallet");
                            }),
                            (a.setter = Object(h.a)(Object(i.a)(Object(i.a)(a)))),
                            (a.state = {
                                log_time: "",
                                time: "",
                                bet: [0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
                                number: "",
                                price: "",
                                contract: "",
                                modal: !1,
                                level: 0,
                                redirectToLogin: !1,
                                records: "",
                                my_records: "",
                                contract_no: "",
                                records_page: 1,
                                last_records_page: 1,
                                records_my_page: 1,
                                last_records_my_page: 1,
                                pre_contract: 10,
                                reload: !1,
                                readModal: !1,
                                error: "",
                                errorStatus: !1,
                                resultStatus: !1,
                            }),
                            a
                        );
                    }
                    return (
                        Object(c.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.setter.cancel(), clearTimeout(n);
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    var e = this;
                                    fetch("/api/enjoy/" + this.state.level, { method: "GET", headers: { "content-type": "application/json", Authorization: this.props.auth.userToken } }).then(function (t) {
                                        t.status < 400
                                            ? t.json().then(function (t) {
                                                  clearTimeout(n),
                                                      (n = setTimeout(e.onTimeDecrease, 1e3)),
                                                      e.setter.setState({
                                                          log_time: t.log_time,
                                                          bet: t.bet,
                                                          price: t.price ? t.price : e.state.price,
                                                          records: t.records,
                                                          my_records: t.my_records,
                                                          number: t.number ? t.number : e.state.number,
                                                          contract: t.contract ? t.contract : e.state.contract,
                                                          time: 18e4 - parseInt(t.time),
                                                          records_my_page: parseInt(t.records_my_page),
                                                          last_records_my_page: parseInt(t.last_records_my_page),
                                                          records_page: parseInt(t.records_page),
                                                          last_records_page: parseInt(t.last_records_page),
                                                      }),
                                                      (e.props.auth.user.budget = t.balance ? t.balance : e.props.auth.user.budget),
                                                      localStorage.setItem("auth", JSON.stringify(e.props.auth));
                                              })
                                            : e.setter.setState({ redirectToLogin: !0 });
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e,
                                        t = this;
                                    return this.state.redirectToLogin
                                        ? u.a.createElement(d.a, { to: "/login" })
                                        : ((e = this.state.time <= 3e4 ? "red" : "black"),
                                          !0 === this.state.reload
                                              ? u.a.createElement(p.a, null)
                                              : u.a.createElement(
                                                    I.a,
                                                    {
                                                        className: "EnjoyPage",
                                                        title: u.a.createElement(
                                                            "div",
                                                            { className: "header-userinfo" },
                                                            u.a.createElement("img", { src: "/uploads/avatars/".concat(this.props.auth.user.avatar ? this.props.auth.user.id + ".jpg" : "user.png") }),
                                                            u.a.createElement(
                                                                "div",
                                                                null,
                                                                u.a.createElement("span", { className: "header-nickname" }, this.props.auth.user.nickname),
                                                                u.a.createElement("span", { className: "header-balance" }, u.a.createElement("small", null, "\u20b9"), this.props.auth.user.budget)
                                                            )
                                                        ),
                                                        breadcrumbs:
                                                            !0 === this.props.auth.user.admin && !0 === this.props.auth.user.superAdmin
                                                                ? u.a.createElement(
                                                                      "div",
                                                                      { className: "header-buttons" },
                                                                      u.a.createElement(
                                                                          j.a,
                                                                          {
                                                                              component: "a",
                                                                              size: "sm",
                                                                              color: "danger",
                                                                              onClick: function () {
                                                                                  return t.props.history.push("/enjoy-admin");
                                                                              },
                                                                          },
                                                                          "Admin"
                                                                      ),
                                                                      u.a.createElement(
                                                                          j.a,
                                                                          {
                                                                              component: "a",
                                                                              size: "sm",
                                                                              color: "primary",
                                                                              onClick: function () {
                                                                                  return t.props.history.push("/wallet");
                                                                              },
                                                                          },
                                                                          "Recharge"
                                                                      ),
                                                                      u.a.createElement(j.a, { component: "a", size: "sm", color: "success", onClick: this.toggleRead() }, "Read Rule"),
                                                                      u.a.createElement(b.a, { color: "link", onClick: this.onReload, style: { float: "right" } }, u.a.createElement(R.t, null))
                                                                  )
                                                                : u.a.createElement(
                                                                      "div",
                                                                      { className: "header-buttons" },
                                                                      u.a.createElement(
                                                                          j.a,
                                                                          {
                                                                              component: "a",
                                                                              size: "sm",
                                                                              color: "primary",
                                                                              onClick: function () {
                                                                                  return t.props.history.push("/wallet");
                                                                              },
                                                                          },
                                                                          "Recharge"
                                                                      ),
                                                                      u.a.createElement(j.a, { component: "a", size: "sm", color: "success", onClick: this.toggleRead() }, "Read Rule"),
                                                                      u.a.createElement(b.a, { color: "link", onClick: this.onReload, style: { float: "right" } }, u.a.createElement(R.t, null))
                                                                  ),
                                                    },
                                                    u.a.createElement(
                                                        y.a,
                                                        { isOpen: this.state.readModal, toggle: this.toggleRead(), className: this.props.className },
                                                        u.a.createElement(g.a, { toggle: this.toggleRead() }, "Rule"),
                                                        u.a.createElement(
                                                            E.a,
                                                            null,
                                                            u.a.createElement(
                                                                f.a,
                                                                { className: "read-rule", style: { margin: "0 10px" } },
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement("b", null, u.a.createElement("span", { style: { fontSize: "12.0pt", lineHeight: "115%", color: "white" } }, "ABOUT THE GAME:"))
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement("b", null, u.a.createElement("span", { style: { fontSize: "12.0pt", lineHeight: "115%" } }, "This Lottery")),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        " is an interesting game that comes up after every 3minutes, and from this 3minutes there is 2minutes 30seconds to place your bet on any of the available \u201c4\u201c Games that we have, and each Game closes after 2minutes 30seconds, then the next 30seconds is to show the Bet result. "
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "Please note that this ",
                                                                            u.a.createElement("b", null, "Lottery"),
                                                                            " operates a 24hours nonstop Game, meaning that every 3MINUTES new Game comes up which makes it 20 betting opportunities in ONE HOUR, to a total of 480 Bets in 24HOURS."
                                                                        ),
                                                                        u.a.createElement("br", null)
                                                                    ),
                                                                    u.a.createElement("span", { style: { fontSize: "12.0pt", lineHeight: "115%" } })
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement("b", null, u.a.createElement("span", { style: { fontSize: "12.0pt", lineHeight: "115%" } }, "HOW TO BET:"))
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "Example if you spend \u20b9 100 to bet, there is always a 2% deduction on every Bet amount that goes to the referral, the 2% goes to whoever refers you to this ",
                                                                        u.a.createElement("b", null, "Lottery"),
                                                                        ", so the more you refer people and they are placing bet on this ",
                                                                        u.a.createElement("b", null, "Lottery"),
                                                                        " the more you making 2% on each bet that your referrals are placing on this ",
                                                                        u.a.createElement("b", null, "Lottery"),
                                                                        "."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "Now after deducting the 2% from your \u20b9 100 , you will be having 98% left, so your bet is based on the 98% of the \u20b9 100 which will be \u20b9 98. "
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("span", { style: {} }, "Now to place bet you can choose from the 4 Games that we have on our system. ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "(1) ",
                                                                            u.a.createElement("b", null, "Bet on GREEN"),
                                                                            ": click on the Green tab and a pop up will come up which gives you the opportunity to select your betting amount of your choice and the number of betting that you feel comfortable with, so if you decided to place the bet with the above \u20b9 98 on a Single bet number *1* then you only pay \u20b9 98, if you increase your Bet number to Double bet number *2* it means you placing bet with \u20b9 196, and if you decided to place your bet on triple bet number *3* it means you placing bet with \u20b9 294. "
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "Please note that you have only 2mins 30secs only to place your bet otherwise the bet will close after 2mins 30secs and the result comes up within the next 30 seconds which makes it 3mins and another new game start again after every 3mins. "
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "RESULT:")),
                                                                        u.a.createElement("span", { style: {} }, " ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now here comes the result, after that 2mins 30secs the system will process all bets and display result after the 30 seconds which is displaying under GAME RECORDS, please note that the result is only One Number which is applicable to all the games on this ",
                                                                        u.a.createElement("b", null, "Lottery"),
                                                                        " system, so the result can be any of these number from ",
                                                                        u.a.createElement("i", null, "0 or 1 or 2 or 3 to 9"),
                                                                        "."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "so if the result shows any of these FOUR numbers",
                                                                            u.a.createElement("u", null, u.a.createElement("span", { style: { background: "#152428", color: "white" } }, "1 or 3 or 7 or 9")),
                                                                            ", then you have won, if the results shows 1 you won, if result shows 3 you won, if the result shows 7 you won, if the result shows 9 you won, if the result shows any number that is different from these FOUR mentioned then you loosed the game."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "YOUR PROFIT:")),
                                                                        u.a.createElement("span", { style: {} }, " ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now let\u2019s calculate your Profit on the Investment, based on your above \u20b9 98 if you bet on single then you will get (\u20b9 98 \xd7 2 = \u20b9 196) if you bet on double number which is a total bet of \u20b9 296 then it means your profit on the investment will be (\u20b9 296 \xd7 2 = \u20b9 592)"
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "The Winning code number on ",
                                                                            u.a.createElement("b", null, "Bet on GREEN is 2"),
                                                                            ", so it means you have to multiple your Bet amount by 2 to get your winning amount, if you place bet with \u20b9 500 it means you getting \u20b9 1,000 winning."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "And if the result shows 5, then your winning code number is 1.5, you will have to calculate your betting amount by 1.5 to give you your winning amount if the result shows 5. "
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "(2) ",
                                                                            u.a.createElement("b", null, "Bet on VIOLET"),
                                                                            ": click on the Violet tab and a pop up will come up which gives you the opportunity to select your betting amount of your choice and the number of betting that you feel comfortable with, so if you decided to place the bet with the above \u20b9 98 on a Single bet number *1* then you only pay \u20b9 98, if you increase your Bet number to Double bet number *2* it means you placing bet with \u20b9 196, and if you decided to place your bet on triple bet number *3* it means you placing bet with \u20b9 294. Please note that you have only 2mins 30secs only to place your bet otherwise the bet will close after 2mins 30secs and result comes up within the next 30 seconds which makes it 3mins and another new game start again after every 3mins."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "RESULT:")),
                                                                        u.a.createElement("span", { style: {} }, " ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now here comes the result, after that 2mins 30 seconds the system will process all bets and display result after the 30 seconds which is displaying under GAME RECORDS, please note that the result is only One Number which is applicable to all the games on this Lottery system, so the result can be any of these number from",
                                                                        u.a.createElement("i", null, "0 or 1 or 2 or 3 to 9"),
                                                                        "."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "so if the result shows any of these TWO numbers ",
                                                                            u.a.createElement("u", null, u.a.createElement("span", { style: { background: "#152428", color: "white" } }, "0 or 5")),
                                                                            ", then you have won, if the results shows 0 you won, if result shows 5 you won, if the result shows any number that is different from these two mentioned then you loosed the game."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "YOUR PROFIT:")),
                                                                        u.a.createElement("span", { style: {} }, " ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now let\u2019s calculate your Profit on the Investment, based on your above \u20b9 98 if you bet on single then you will get (\u20b9 98 \xd7 4.5 = \u20b9 441) if you bet on double number which is a total bet of \u20b9 296 then it means your profit on the investment will be (\u20b9 296 \xd7 4.5 = \u20b9 882)"
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "The Winning code number on ",
                                                                            u.a.createElement("b", null, "Bet on VIOLET"),
                                                                            "is 4.5, so it means you have to multiple your Bet amount by 4.5 to get your winning amount, if you place bet with \u20b9 500 it means you getting \u20b9 2,250 winning."
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "(3) ",
                                                                            u.a.createElement("b", null, "Bet on RED:"),
                                                                            " click on the Red tab and a pop up will come up which gives you the opportunity to select your betting amount of your choice and the number of betting that you feel comfortable with, so if you decided to place the bet with the above \u20b9 98 on a Single bet number *1* then you only pay \u20b9 98, if you increase your Bet number to Double bet number *2* it means you placing bet with \u20b9 196, and if you decided to place your bet on triple bet number *3* it means you placing bet with \u20b9 294. "
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "Please note that you have only 2mins 30secs only to place your bet otherwise the bet will close after 2mins 30secs and result comes up within the next 30 seconds which makes it 3mins and another new game start again after every 3mins."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "RESULT:")),
                                                                        u.a.createElement("span", { style: {} }, " ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now here comes the result, after that 2mins 30 seconds the system will process all bets and display result after the 30 seconds which is displaying under GAME RECORDS, please note that the result is only One Number which is applicable to all the games, so the result can be any of these number from 0 or 1 or 2 or 3 to 9."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "so if the result shows any of these FOUR numbers",
                                                                            u.a.createElement("i", null, u.a.createElement("u", null, u.a.createElement("span", { style: { background: "#152428", color: "white" } }, "2 or 4 or 6 or 8"))),
                                                                            ", then you have won, if the results shows 2 you won, if result shows 4 you won, if the result shows 6 you won, if the result shows 8 you won, if the result shows any number that is different from these FOUR mentioned then you loosed the game."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "YOUR PROFIT")),
                                                                        u.a.createElement("span", { style: {} }, ": ")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now let\u2019s calculate your Profit on the Investment, based on your above \u20b9 98 if you bet on single then you will get (\u20b9 98 \xd7 2 = \u20b9 196) if you bet on double number which is a total bet of \u20b9 296 then it means your profit on the investment will be (\u20b9 296 \xd7 2 = \u20b9 592)"
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "The Winning code number on ",
                                                                            u.a.createElement("b", null, "Bet on RED"),
                                                                            " is 2, so it means you have to multiple your Bet amount by 2 to get your winning amount, if you place bet with \u20b9 500 it means you getting \u20b9 1,000 winning."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "And if the result shows 0, then your winning code number is 1.5, you will have to calculate your betting amount by 1.5 to give you your winning amount. "
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "(4) ",
                                                                            u.a.createElement("b", null, "Bet on NUMBER"),
                                                                            ": on the dash board you will see there are number from ",
                                                                            u.a.createElement("i", null, "0 to 9"),
                                                                            ", click on any of the number that you wish to place bet on, it can be ",
                                                                            u.a.createElement("i", null, "0 or 1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9"),
                                                                            " and a pop up will come up which gives you the opportunity to select your betting amount of your choice and the number of betting that you feel comfortable with, so if you decided to place the bet with the above \u20b9 98 on a Single bet number *1* it means you placing bet with \u20b9 98, if you increase your Bet number to Double bet number *2* it means you placing bet with \u20b9 196, and if you decided to place your bet on triple bet number *3* it means you placing bet with \u20b9 294. "
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "Please note that you have only 2mins 30secs only to place your bet otherwise the bet will close after 2mins 30secs and result comes up within the next 30 seconds which makes it 3mins and another new game start again after every 3mins."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "RESULT:"))
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now here comes the result, after that 2mins 30 seconds the system will process all bets and display result after the 30 seconds which is displaying under GAME RECORDS, please note that the result is only One Number which is applicable to all the games, so the result can be any of these number from ",
                                                                        u.a.createElement("i", null, u.a.createElement("u", null, "1 or 2 or 3 or 4 or 5 or 6 or 7 or 8 or 9")),
                                                                        "."
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "so if the result shows any of those TEN numbers from ",
                                                                            u.a.createElement("u", null, u.a.createElement("span", { style: { background: "#152428", color: "white" } }, "0 to 9")),
                                                                            " and it is same number you place bet on, then you have won, if the result shows any number that is different from number you place bet on then you loosed the game."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "YOUR PROFIT")),
                                                                        u.a.createElement("span", { style: {} }, ":")
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "now let\u2019s calculate your Profit on the Investment, based on your above \u20b9 98 if you bet on single then you will get (\u20b9 98 \xd7 9 = \u20b9 882) if you bet on double number which is a total bet of \u20b9 296 then it means your profit on the investment will be (\u20b9 296 \xd7 9 = \u20b9 1,764)"
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "The Winning code number on ",
                                                                            u.a.createElement("b", null, "Bet on NUMBER is 9"),
                                                                            ", so it means you have to multiple your Bet amount by 9 to get your winning amount, if you place bet with \u20b9 500 it means you getting \u20b9 4,500 winning."
                                                                        ),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("br", null),
                                                                        u.a.createElement("b", null, u.a.createElement("span", { style: {} }, "HOW TO WITHDRAW YOUR MONEY:"), u.a.createElement("br", null)),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { style: {} },
                                                                            "In order for you to withdraw your money, you need click on My Profile and Click on Wallet then finally click on Withdrawal. Please note ",
                                                                            u.a.createElement("b", null, "This Lottery"),
                                                                            " currently support only two withdrawal methods:"
                                                                        )
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { marginLeft: ".75in", textAlign: "center", textIndent: "-.5in" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "(1.)",
                                                                        u.a.createElement("span", { style: { font: '7.0pt "Times New Roman"' } }, "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "You can withdraw into your ",
                                                                        u.a.createElement("b", null, "BTC wallet"),
                                                                        " and convert into cash of the currency in your country. "
                                                                    )
                                                                ),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { marginLeft: ".75in", textAlign: "center", textIndent: "-.5in" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "(2.)",
                                                                        u.a.createElement("span", { style: { font: '7.0pt "Times New Roman"' } }, "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0")
                                                                    ),
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "You can withdraw into your ",
                                                                        u.a.createElement("b", null, "Paypal account "),
                                                                        "from there you can move the fund into your bank account directly or into your bank cards."
                                                                    )
                                                                ),
                                                                u.a.createElement("p", null, u.a.createElement("span", { style: { fontSize: "12.0pt", lineHeight: "115%" } }, "\xa0")),
                                                                u.a.createElement(
                                                                    "p",
                                                                    { style: { marginLeft: ".25in", textAlign: "center" } },
                                                                    u.a.createElement(
                                                                        "span",
                                                                        { style: { fontSize: "12.0pt", lineHeight: "115%" } },
                                                                        "Those are the both withdrawal methods that our system currently support, more withdrawal options coming soon."
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        u.a.createElement(_.a, null, u.a.createElement(j.a, { color: "primary", onClick: this.toggleRead() }, "Ok"))
                                                    ),
                                                    u.a.createElement(
                                                        f.a,
                                                        { style: { flexFlow: "row wrap", justifyContent: "space-between" }, className: "category-bar" },
                                                        u.a.createElement(b.a, { className: 0 === this.state.level ? "btn-active" : "", color: "link", onClick: this.onCategoryClick(0) }, "Parity"),
                                                        u.a.createElement(b.a, { className: 1 === this.state.level ? "btn-active" : "", color: "link", onClick: this.onCategoryClick(1) }, "Sapre"),
                                                        u.a.createElement(b.a, { className: 2 === this.state.level ? "btn-active" : "", color: "link", onClick: this.onCategoryClick(2) }, "Bcone"),
                                                        u.a.createElement(b.a, { className: 3 === this.state.level ? "btn-active" : "", color: "link", onClick: this.onCategoryClick(3) }, "Emerd")
                                                    ),
                                                    u.a.createElement(
                                                        f.a,
                                                        null,
                                                        u.a.createElement(
                                                            w.a,
                                                            { md: "12", sm: "12", xs: "12" },
                                                            u.a.createElement(
                                                                v.a,
                                                                { className: "mb-3" },
                                                                u.a.createElement(
                                                                    N.a,
                                                                    null,
                                                                    u.a.createElement(
                                                                        "div",
                                                                        { className: "card-period" },
                                                                        u.a.createElement("span", { className: "card-header-name" }, "Period"),
                                                                        u.a.createElement("span", { className: "card-header-content" }, this.state.log_time)
                                                                    ),
                                                                    u.a.createElement(
                                                                        "div",
                                                                        { className: "card-count" },
                                                                        u.a.createElement("span", { className: "card-header-name" }, "Count Down"),
                                                                        u.a.createElement(
                                                                            "span",
                                                                            { className: "card-header-name", style: { fontWeight: "bolder", color: e } },
                                                                            parseInt(this.state.time / 1e3 / 60) + " : " + parseInt((this.state.time / 1e3) % 60)
                                                                        )
                                                                    )
                                                                ),
                                                                this.state.time >= 3e4
                                                                    ? u.a.createElement(
                                                                          C.a,
                                                                          null,
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(
                                                                                  w.a,
                                                                                  { md: "4", xs: "4", className: "text-center" },
                                                                                  u.a.createElement(j.a, { component: "a", round: !0, className: "btn-green btn-color", onClick: this.onButtonClick(10) }, "Join Green")
                                                                              ),
                                                                              u.a.createElement(
                                                                                  w.a,
                                                                                  { md: "4", xs: "4", className: "text-center" },
                                                                                  u.a.createElement(j.a, { component: "a", round: !0, className: "btn-violet btn-color", onClick: this.onButtonClick(12) }, "Join Violet")
                                                                              ),
                                                                              u.a.createElement(
                                                                                  w.a,
                                                                                  { md: "4", xs: "4", className: "text-center" },
                                                                                  u.a.createElement(j.a, { component: "a", round: !0, className: "btn-red btn-color", onClick: this.onButtonClick(11) }, "Join Red")
                                                                              )
                                                                          ),
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(0), round: !0, className: "btn-number btn-red-violet-number" }, " 0"),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(1), round: !0, className: "btn-number btn-green-number" }, " 1"),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(2), round: !0, className: "btn-number btn-red-number" }, " 2 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(3), round: !0, className: "btn-number btn-green-number" }, " 3 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(4), round: !0, className: "btn-number btn-red-number" }, " 4 ")
                                                                          ),
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(5), round: !0, className: "btn-number btn-green-violet-number" }, " 5 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(6), round: !0, className: "btn-number btn-red-number" }, " 6 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(7), round: !0, className: "btn-number btn-green-number" }, " 7 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(8), round: !0, className: "btn-number btn-red-number" }, " 8 "),
                                                                              u.a.createElement(j.a, { component: "a", onClick: this.onButtonClick(9), round: !0, className: "btn-number btn-green-number" }, " 9 ")
                                                                          ),
                                                                          u.a.createElement(
                                                                              y.a,
                                                                              { isOpen: this.state.modal, toggle: this.toggle(), className: this.props.className },
                                                                              u.a.createElement(
                                                                                  g.a,
                                                                                  { toggle: this.toggle() },
                                                                                  'Contract Money on "',
                                                                                  this.state.contract_no < 10
                                                                                      ? this.state.contract_no
                                                                                      : 10 === this.state.contract_no
                                                                                      ? u.a.createElement("span", null, "green", " ", u.a.createElement("span", { className: "green-circle" }))
                                                                                      : 11 === this.state.contract_no
                                                                                      ? u.a.createElement("span", null, "red", " ", u.a.createElement("span", { className: "red-circle" }))
                                                                                      : u.a.createElement("span", null, "violet", " ", u.a.createElement("span", { className: "violet-circle" })),
                                                                                  '"'
                                                                              ),
                                                                              u.a.createElement(
                                                                                  E.a,
                                                                                  null,
                                                                                  u.a.createElement(
                                                                                      f.a,
                                                                                      null,
                                                                                      u.a.createElement("span", { style: { padding: "6px 12px" } }, "Contract Money :"),
                                                                                      u.a.createElement("br", null),
                                                                                      u.a.createElement(
                                                                                          O.a,
                                                                                          { className: " mb-3 ml-auto mr-auto" },
                                                                                          u.a.createElement(
                                                                                              b.a,
                                                                                              {
                                                                                                  style: { fontWeight: "600" },
                                                                                                  color: "link",
                                                                                                  onClick: this.onContractChange("10"),
                                                                                                  className: this.state.pre_contract > 9 && this.state.pre_contract < 100 ? "btn-active" : "",
                                                                                              },
                                                                                              "10"
                                                                                          ),
                                                                                          u.a.createElement(
                                                                                              b.a,
                                                                                              {
                                                                                                  style: { fontWeight: "600" },
                                                                                                  color: "link",
                                                                                                  onClick: this.onContractChange("100"),
                                                                                                  className: this.state.pre_contract > 99 && this.state.pre_contract < 1e3 ? "btn-active" : "",
                                                                                              },
                                                                                              "100"
                                                                                          ),
                                                                                          u.a.createElement(
                                                                                              b.a,
                                                                                              {
                                                                                                  style: { fontWeight: "600" },
                                                                                                  color: "link",
                                                                                                  onClick: this.onContractChange("1000"),
                                                                                                  className: this.state.pre_contract > 999 && this.state.pre_contract < 1e4 ? "btn-active" : "",
                                                                                              },
                                                                                              "1000"
                                                                                          ),
                                                                                          u.a.createElement(
                                                                                              b.a,
                                                                                              {
                                                                                                  style: { fontWeight: "600" },
                                                                                                  color: "link",
                                                                                                  onClick: this.onContractChange("10000"),
                                                                                                  className: this.state.pre_contract > 9999 && this.state.pre_contract < 1e5 ? "btn-active" : "",
                                                                                              },
                                                                                              "10000"
                                                                                          )
                                                                                      )
                                                                                  ),
                                                                                  u.a.createElement(
                                                                                      f.a,
                                                                                      null,
                                                                                      u.a.createElement("span", { style: { padding: "10px 12px" } }, "Number :"),
                                                                                      u.a.createElement("br", null),
                                                                                      u.a.createElement(
                                                                                          "div",
                                                                                          null,
                                                                                          u.a.createElement(b.a, { color: "link", style: { fontSize: "1.5rem" }, onClick: this.onContractChange("-") }, " - "),
                                                                                          u.a.createElement("span", { style: { padding: "6px 12px" }, ref: "contract" }, "1"),
                                                                                          u.a.createElement(b.a, { color: "link", style: { fontSize: "1.5rem" }, onClick: this.onContractChange("+") }, " + ")
                                                                                      )
                                                                                  ),
                                                                                  u.a.createElement(
                                                                                      f.a,
                                                                                      null,
                                                                                      u.a.createElement("span", { style: { padding: "0 12px" } }, "Total contract money is \xa0"),
                                                                                      u.a.createElement("span", { style: { fontWeight: "600" }, className: "text-success" }, " ", this.state.pre_contract)
                                                                                  ),
                                                                                  u.a.createElement(f.a, null)
                                                                              ),
                                                                              u.a.createElement(
                                                                                  _.a,
                                                                                  null,
                                                                                  u.a.createElement(j.a, { color: "primary", onClick: this.onPostState }, "OK"),
                                                                                  " ",
                                                                                  u.a.createElement(j.a, { color: "tumblr", onClick: this.toggle() }, "Cancel")
                                                                              )
                                                                          )
                                                                      )
                                                                    : u.a.createElement(
                                                                          C.a,
                                                                          null,
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-color", color: "tumblr", disabled: !0 }, "Join Green"),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-color", color: "tumblr" }, "Join Violet"),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-color", color: "tumblr" }, "Join Red")
                                                                          ),
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 0 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 1 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 2 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 3 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 4 ")
                                                                          ),
                                                                          u.a.createElement(
                                                                              f.a,
                                                                              { style: { flexFlow: "row wrap", justifyContent: "space-between" } },
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 5 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 6 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 7 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 8 "),
                                                                              u.a.createElement(j.a, { component: "a", round: !0, className: "btn-number", color: "tumblr", disabled: !0 }, " 9 ")
                                                                          )
                                                                      )
                                                            )
                                                        ),
                                                        this.state.bet[1].reduce(function (e, t) {
                                                            return e + t;
                                                        }) > 0
                                                            ? u.a.createElement(
                                                                  w.a,
                                                                  { md: "12", sm: "12", xs: "12", className: "bet-list" },
                                                                  this.state.bet[1].map(function (e, t) {
                                                                      return e > 0
                                                                          ? u.a.createElement(
                                                                                "div",
                                                                                { key: t },
                                                                                10 == t
                                                                                    ? u.a.createElement("span", { className: "green-circle" })
                                                                                    : 11 == t
                                                                                    ? u.a.createElement("span", { className: "red-circle" })
                                                                                    : 12 == t
                                                                                    ? u.a.createElement("span", { className: "violet-circle" })
                                                                                    : t,
                                                                                " \xa0\xa0\xa0",
                                                                                u.a.createElement("span", { className: "bet-amount" }, u.a.createElement("small", null, "\u20b9"), " ", e),
                                                                                u.a.createElement("br", null)
                                                                            )
                                                                          : "";
                                                                  })
                                                              )
                                                            : "",
                                                        u.a.createElement(
                                                            w.a,
                                                            { md: "12", sm: "12", xs: "12" },
                                                            u.a.createElement(
                                                                v.a,
                                                                { className: "mb-3" },
                                                                u.a.createElement(N.a, null, "Game Record"),
                                                                u.a.createElement(
                                                                    C.a,
                                                                    { style: { padding: "0 15px" } },
                                                                    u.a.createElement(
                                                                        f.a,
                                                                        { style: { flexFlow: "row wrap", justifyContent: "space-between", overflow: "auto" } },
                                                                        u.a.createElement(
                                                                            k.a,
                                                                            Object.assign({ default: !0 }, { style: { width: "100%" } }),
                                                                            u.a.createElement(
                                                                                "thead",
                                                                                null,
                                                                                u.a.createElement(
                                                                                    "tr",
                                                                                    null,
                                                                                    u.a.createElement("th", null, "Period"),
                                                                                    u.a.createElement("th", null, "Price"),
                                                                                    u.a.createElement("th", null, "Number"),
                                                                                    u.a.createElement("th", null, "Result")
                                                                                )
                                                                            ),
                                                                            u.a.createElement(
                                                                                "tbody",
                                                                                null,
                                                                                this.state.records
                                                                                    ? this.state.records.map(function (e, t) {
                                                                                          return u.a.createElement(
                                                                                              "tr",
                                                                                              { key: t },
                                                                                              u.a.createElement("td", null, e.createdAt),
                                                                                              u.a.createElement("td", null, e.price ? e.price.toFixed(0) : ""),
                                                                                              u.a.createElement("td", null, e.recommend),
                                                                                              u.a.createElement(
                                                                                                  "td",
                                                                                                  null,
                                                                                                  " ",
                                                                                                  parseInt(e.recommend) % 2 === 1
                                                                                                      ? u.a.createElement("span", { className: "green-circle" })
                                                                                                      : u.a.createElement("span", { className: "red-circle" }),
                                                                                                  " ",
                                                                                                  parseInt(e.recommend) % 5 === 0 ? u.a.createElement("span", { className: "violet-circle" }) : ""
                                                                                              )
                                                                                          );
                                                                                      })
                                                                                    : ""
                                                                            )
                                                                        )
                                                                    ),
                                                                    u.a.createElement(
                                                                        f.a,
                                                                        null,
                                                                        u.a.createElement(T.a, {
                                                                            color: "primary",
                                                                            count: this.state.last_records_page,
                                                                            page: this.state.records_page,
                                                                            onChange: function (e, a) {
                                                                                return t.gotoRecordsPage(a);
                                                                            },
                                                                            renderItem: function (e) {
                                                                                return u.a.createElement(x.a, Object.assign({ component: "a" }, e));
                                                                            },
                                                                            size: "small",
                                                                        })
                                                                    )
                                                                )
                                                            )
                                                        ),
                                                        u.a.createElement(
                                                            w.a,
                                                            { md: "12", sm: "12", xs: "12" },
                                                            u.a.createElement(
                                                                v.a,
                                                                { className: "mb-3" },
                                                                u.a.createElement(N.a, null, "My Record"),
                                                                u.a.createElement(
                                                                    C.a,
                                                                    { style: { padding: "0 15px" } },
                                                                    u.a.createElement(
                                                                        f.a,
                                                                        { style: { flexFlow: "row wrap", justifyContent: "space-between", overflow: "auto" } },
                                                                        u.a.createElement(
                                                                            k.a,
                                                                            { default: !0 },
                                                                            u.a.createElement(
                                                                                "thead",
                                                                                null,
                                                                                u.a.createElement(
                                                                                    "tr",
                                                                                    null,
                                                                                    u.a.createElement("th", null, "Period"),
                                                                                    u.a.createElement("th", null, "Contract money"),
                                                                                    u.a.createElement("th", null, "Select"),
                                                                                    u.a.createElement("th", null, "Result"),
                                                                                    u.a.createElement("th", null, "Amount")
                                                                                )
                                                                            ),
                                                                            u.a.createElement(
                                                                                "tbody",
                                                                                null,
                                                                                this.state.my_records
                                                                                    ? this.state.my_records.map(function (e, t) {
                                                                                          return u.a.createElement(
                                                                                              "tr",
                                                                                              { key: t },
                                                                                              u.a.createElement("td", null, e.period),
                                                                                              u.a.createElement("td", null, e.contract),
                                                                                              u.a.createElement(
                                                                                                  "td",
                                                                                                  null,
                                                                                                  10 === e.select
                                                                                                      ? u.a.createElement("span", { className: "green-circle" })
                                                                                                      : 11 === e.select
                                                                                                      ? u.a.createElement("span", { className: "red-circle" })
                                                                                                      : 12 === e.select
                                                                                                      ? u.a.createElement("span", { className: "violet-circle" })
                                                                                                      : e.select
                                                                                              ),
                                                                                              u.a.createElement(
                                                                                                  "td",
                                                                                                  null,
                                                                                                  e.result,
                                                                                                  " ",
                                                                                                  " ",
                                                                                                  parseInt(e.result) % 2 === 1
                                                                                                      ? u.a.createElement("span", { className: "green-circle" })
                                                                                                      : u.a.createElement("span", { className: "red-circle" }),
                                                                                                  " ",
                                                                                                  parseInt(e.result) % 5 === 0 ? u.a.createElement("span", { className: "violet-circle" }) : ""
                                                                                              ),
                                                                                              u.a.createElement("td", null, e.amount)
                                                                                          );
                                                                                      })
                                                                                    : ""
                                                                            )
                                                                        )
                                                                    ),
                                                                    u.a.createElement(
                                                                        f.a,
                                                                        null,
                                                                        u.a.createElement(T.a, {
                                                                            color: "primary",
                                                                            count: this.state.last_records_my_page,
                                                                            page: this.state.records_my_page,
                                                                            onChange: function (e, a) {
                                                                                return t.gotoMyRecordsPage(a);
                                                                            },
                                                                            renderItem: function (e) {
                                                                                return u.a.createElement(x.a, Object.assign({ component: "a" }, e));
                                                                            },
                                                                            size: "small",
                                                                        })
                                                                    )
                                                                )
                                                            )
                                                        )
                                                    ),
                                                    u.a.createElement(f.a, null, u.a.createElement("div", { style: { height: "60px" } })),
                                                    u.a.createElement(S.a, {
                                                        place: "tr",
                                                        color: "danger",
                                                        icon: z.w,
                                                        message: this.state.error,
                                                        open: this.state.errorStatus,
                                                        closeNotification: function () {
                                                            return t.setState({ errorStatus: !1 });
                                                        },
                                                        close: !0,
                                                    }),
                                                    u.a.createElement(
                                                        y.a,
                                                        {
                                                            isOpen: this.state.resultStatus,
                                                            toggle: function () {
                                                                return t.setState({ resultStatus: !t.state.resultStatus });
                                                            },
                                                            className: this.props.className,
                                                        },
                                                        u.a.createElement(
                                                            g.a,
                                                            {
                                                                toggle: function () {
                                                                    return t.setState({ resultStatus: !t.state.resultStatus });
                                                                },
                                                            },
                                                            "Result"
                                                        ),
                                                        u.a.createElement(
                                                            E.a,
                                                            null,
                                                            u.a.createElement(
                                                                f.a,
                                                                null,
                                                                u.a.createElement("span", { style: { padding: "6px 12px" } }, "Parity :"),
                                                                u.a.createElement("br", null),
                                                                "Result: ",
                                                                this.state.number[0],
                                                                u.a.createElement("br", null),
                                                                "Price: ",
                                                                this.state.price[0],
                                                                u.a.createElement("br", null),
                                                                "Betting amount:",
                                                                this.state.contract[0]
                                                            ),
                                                            u.a.createElement(
                                                                f.a,
                                                                null,
                                                                u.a.createElement("span", { style: { padding: "6px 12px" } }, "Sapre :"),
                                                                u.a.createElement("br", null),
                                                                "Result: ",
                                                                this.state.number[1],
                                                                u.a.createElement("br", null),
                                                                "Price: ",
                                                                this.state.price[1],
                                                                u.a.createElement("br", null),
                                                                "Betting amount:",
                                                                this.state.contract[1]
                                                            ),
                                                            u.a.createElement(
                                                                f.a,
                                                                null,
                                                                u.a.createElement("span", { style: { padding: "6px 12px" } }, "Bcone :"),
                                                                u.a.createElement("br", null),
                                                                "Result: ",
                                                                this.state.number[2],
                                                                u.a.createElement("br", null),
                                                                "Price: ",
                                                                this.state.price[2],
                                                                u.a.createElement("br", null),
                                                                "Betting amount:",
                                                                this.state.contract[2]
                                                            ),
                                                            u.a.createElement(
                                                                f.a,
                                                                null,
                                                                u.a.createElement("span", { style: { padding: "6px 12px" } }, "Emerd :"),
                                                                u.a.createElement("br", null),
                                                                "Result: ",
                                                                this.state.number[3],
                                                                u.a.createElement("br", null),
                                                                "Price: ",
                                                                this.state.price[3],
                                                                u.a.createElement("br", null),
                                                                "Betting amount:",
                                                                this.state.contract[3]
                                                            )
                                                        ),
                                                        u.a.createElement(
                                                            _.a,
                                                            null,
                                                            u.a.createElement(
                                                                j.a,
                                                                {
                                                                    color: "primary",
                                                                    onClick: function () {
                                                                        return t.setState({ resultStatus: !t.state.resultStatus });
                                                                    },
                                                                },
                                                                "OK"
                                                            )
                                                        )
                                                    )
                                                ));
                                },
                            },
                        ]),
                        t
                    );
                })(u.a.Component);
            t.default = M;
        },
    },
]);
//# sourceMappingURL=12.a8901142.chunk.js.map
