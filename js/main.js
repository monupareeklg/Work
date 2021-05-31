(window.webpackJsonp = window.webpackJsonp || []).push([
    [1],
    {
        109: function (e, t, a) {
            e.exports = a(142);
        },
        139: function (e, t, a) {},
        142: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(1),
                o = a.n(n),
                r = a(22),
                c = a.n(r),
                i = a(24),
                s = a(25),
                l = a(27),
                p = a(26),
                u = a(28),
                b = a(14),
                h = a(49),
                g = a(52),
                m = a.n(g),
                d = a(72),
                x = a(179),
                f = a(180),
                j = a(181),
                O = a(182),
                E = a(10),
                y = a(83),
                v = a.n(y),
                S = (a(106), a(45)),
                w = a(79),
                k = a(43),
                C = a(44),
                P = (function (e) {
                    function t(e) {
                        var a;
                        return (
                            Object(i.a)(this, t),
                            ((a = Object(l.a)(this, Object(p.a)(t).call(this, e))).state = {
                                phone: "",
                                password: "",
                                confirmPassword: "",
                                recommendationCode: a.props.params,
                                confirmPWDErr: !1,
                                inProgress: !1,
                                agree: !1,
                                verify: "",
                                otpProgress: !1,
                                notiStatus: !1,
                                notiText: "",
                                image: null,
                                result: "",
                                imageCrop: { src: "/uploads/avatars/user.png", crop: { unit: "px", aspect: 1, width: 200 } },
                            }),
                            (a.setImage = function (e) {
                                console.log(e), a.setState({ image: e });
                            }),
                            (a.setCrop = function (e) {
                                a.setState({ imageCrop: Object(b.a)({}, a.state.imageCrop, { crop: e }) });
                            }),
                            (a.handleFileChange = function (e) {
                                e.target.files[0] && a.setState({ imageCrop: Object(b.a)({}, a.state.imageCrop, { src: URL.createObjectURL(e.target.files[0]) }) });
                            }),
                            (a.onUpload = function () {}),
                            (a.changeAuthState = function (e) {
                                return function (t) {
                                    t.preventDefault(), a.props.onChangeAuthState(e);
                                };
                            }),
                            (a.sendOTP = function () {
                                a.setter.setState({ otpProgress: !0 }),
                                    fetch("/api/phone", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ phone: localStorage.getItem("phone") }) })
                                        .then(function (e) {
                                            a.setter.setState({ otpProgress: !1 }),
                                                e.status < 400
                                                    ? e
                                                          .json()
                                                          .then(function (e) {})
                                                          .catch(function () {})
                                                    : e
                                                          .json()
                                                          .then(function (e) {
                                                              e.error ? a.setState({ notiStatus: !0, notiText: e.error }) : a.setState({ notiStatus: !0, notiText: e.errors[0].param + " " + e.errors[0].msg });
                                                          })
                                                          .catch(function () {});
                                        })
                                        .catch(function () {});
                            }),
                            (a.handleSubmit = function (e) {
                                if ((e.preventDefault(), a.props.authState === z))
                                    a.setter.setState({ inProgress: !0 }),
                                        fetch("/api/login", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ phone: a.state.phone, password: a.state.password }) }).then(function (e) {
                                            e.status < 400
                                                ? e.json().then(function (e) {
                                                      localStorage.setItem("auth", JSON.stringify(e)), a.setter.setState({ inProgress: !1 }), a.props.onSubmit();
                                                  })
                                                : e.json().then(function (e) {
                                                      "1" == e.error
                                                          ? (localStorage.setItem("phone", e.phone), a.props.onChangeAuthState(A))
                                                          : (a.setter.setState({ inProgress: !1 }),
                                                            e.error ? a.setState({ notiStatus: !0, notiText: e.error }) : a.setState({ notiStatus: !0, notiText: e.errors[0].param + " " + e.errors[0].msg }));
                                                  });
                                        });
                                else if (a.props.authState === I) {
                                    if (!a.state.confirmPWDErr && "" !== a.state.phone && "" !== a.state.recommendationCode && a.state.agree) {
                                        var t;
                                        if (a.state.image) {
                                            console.log(a.state.image);
                                            var n = document.createElement("canvas"),
                                                o = a.state.image.naturalWidth / a.state.image.width,
                                                r = a.state.image.naturalHeight / a.state.image.height;
                                            (n.width = a.state.imageCrop.crop.width), (n.height = a.state.imageCrop.crop.height);
                                            var c = n.getContext("2d");
                                            c.clearRect(0, 0, n.width, n.height),
                                                console.log(a.state.image),
                                                c.drawImage(
                                                    a.state.image,
                                                    a.state.imageCrop.crop.x * o,
                                                    a.state.imageCrop.crop.y * r,
                                                    a.state.imageCrop.crop.width * o,
                                                    a.state.imageCrop.crop.height * r,
                                                    0,
                                                    0,
                                                    a.state.imageCrop.crop.width,
                                                    a.state.imageCrop.crop.height
                                                ),
                                                (t = n.toDataURL("image/jpeg"));
                                        }
                                        var i = new FormData();
                                        i.append("avatar", t),
                                            i.append("phone", a.state.phone),
                                            i.append("password", a.state.password),
                                            i.append("recommendationCode", a.state.recommendationCode),
                                            a.setter.setState({ inProgress: !0 }),
                                            fetch("/api/signup", { method: "POST", body: i }).then(function (e) {
                                                e.status < 400
                                                    ? (a.setter.setState({ inProgress: !1 }),
                                                      e.json().then(function (e) {
                                                          localStorage.setItem("phone", a.state.phone), a.props.onChangeAuthState(A);
                                                      }))
                                                    : (e.status,
                                                      e.json().then(function (e) {
                                                          a.setter.setState({ inProgress: !1 }),
                                                              e.error ? a.setState({ notiStatus: !0, notiText: e.error }) : a.setState({ notiStatus: !0, notiText: e.errors[0].param + " " + e.errors[0].msg });
                                                      }));
                                            });
                                    }
                                } else
                                    a.props.authState === N
                                        ? (a.setter.setState({ inProgress: !0 }),
                                          fetch("/api/phone", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ phone: a.state.phone }) })
                                              .then(function (e) {
                                                  e.status < 400
                                                      ? e
                                                            .json()
                                                            .then(function (e) {
                                                                localStorage.setItem("phone", a.state.phone), a.props.onChangeAuthState(A);
                                                            })
                                                            .catch(function () {})
                                                      : e
                                                            .json()
                                                            .then(function (e) {
                                                                a.setter.setState({ inProgress: !1 }),
                                                                    e.error ? a.setState({ notiStatus: !0, notiText: e.error }) : a.setState({ notiStatus: !0, notiText: e.errors[0].param + " " + e.errors[0].msg });
                                                            })
                                                            .catch(function () {});
                                              })
                                              .catch(function () {}))
                                        : (a.setter.setState({ inProgress: !0 }),
                                          fetch("/api/verify", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ phone: localStorage.getItem("phone"), otp: a.state.verify }) }).then(function (e) {
                                              e.status < 400
                                                  ? e.json().then(function (e) {
                                                        localStorage.clear(), localStorage.setItem("auth", JSON.stringify(e)), a.setter.setState({ inProgress: !1 }), a.props.onSubmit();
                                                    })
                                                  : e.json().then(function (e) {
                                                        a.setter.setState({ inProgress: !1 }),
                                                            e.error ? a.setState({ notiStatus: !0, notiText: e.error }) : a.setState({ notiStatus: !0, notiText: e.errors[0].param + " " + e.errors[0].msg });
                                                    });
                                          }));
                            }),
                            (a.changePhone = function (e) {
                                a.setter.setState({ phone: e.target.value });
                            }),
                            (a.changeVerify = function (e) {
                                a.setter.setState({ verify: e.target.value });
                            }),
                            (a.changePassword = function (e) {
                                e.target.value !== a.state.confirmPassword ? a.setter.setState({ confirmPWDErr: !0, password: e.target.value }) : a.setter.setState({ confirmPWDErr: !1, password: e.target.value });
                            }),
                            (a.changeConfirmPassword = function (e) {
                                e.target.value !== a.state.password ? a.setter.setState({ confirmPWDErr: !0, confirmPassword: e.target.value }) : a.setter.setState({ confirmPWDErr: !1, confirmPassword: e.target.value });
                            }),
                            (a.changeRecommendationCdoe = function (e) {
                                a.setter.setState({ recommendationCode: e.target.value });
                            }),
                            (a.onChangeAgree = function () {
                                console.log(a.state.agree), a.setter.setState({ agree: !a.state.agree });
                            }),
                            (a.setter = Object(w.a)(Object(h.a)(Object(h.a)(a)))),
                            a
                        );
                    }
                    return (
                        Object(u.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.setter.cancel();
                                },
                            },
                            {
                                key: "renderButtonText",
                                value: function () {
                                    var e = this.props.buttonText;
                                    return !e && this.isLogin ? "Login" : !e && this.isSignup ? "Signup" : e;
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this,
                                        t = this.props,
                                        a = t.showLogo,
                                        n = t.usernameInputProps,
                                        r = t.passwordInputProps,
                                        c = t.confirmPasswordInputProps,
                                        i = t.children,
                                        s = t.onLogoClick,
                                        l = t.recommendationCodeInputProps;
                                    return this.state.inProgress
                                        ? o.a.createElement(S.a, null)
                                        : this.isPhone || this.isVerify
                                        ? o.a.createElement(
                                              x.a,
                                              null,
                                              a &&
                                                  o.a.createElement(
                                                      "div",
                                                      { className: "text-center pb-4" },
                                                      o.a.createElement("img", { src: m.a, className: "rounded", style: { width: 60, height: 60, cursor: "pointer" }, alt: "logo", onClick: s })
                                                  ),
                                              this.isPhone
                                                  ? o.a.createElement(f.a, null, o.a.createElement(j.a, { type: "text", placeholder: "Please type your phone number", value: this.state.phone, onChange: this.changePhone }))
                                                  : o.a.createElement(
                                                        o.a.Fragment,
                                                        null,
                                                        o.a.createElement(f.a, null, o.a.createElement(k.a, { onClick: this.sendOTP, color: "success" }, this.otpProgress ? o.a.createElement(S.a, null) : "Resend OTP")),
                                                        o.a.createElement(f.a, null, o.a.createElement(j.a, { type: "text", placeholder: "Please type the letters on your phone.", value: this.state.verify, onChange: this.changeVerify }))
                                                    ),
                                              o.a.createElement("hr", null),
                                              this.isPhone
                                                  ? o.a.createElement(k.a, { size: "lg", className: "bg-gradient-theme-left border-0", block: !0, onClick: this.handleSubmit }, "OK")
                                                  : o.a.createElement(k.a, { size: "lg", className: "bg-gradient-theme-left border-0", block: !0, onClick: this.handleSubmit }, "Verify"),
                                              i,
                                              o.a.createElement(C.a, {
                                                  place: "tr",
                                                  color: "danger",
                                                  icon: E.y,
                                                  message: this.state.notiText,
                                                  open: this.state.notiStatus,
                                                  closeNotification: function () {
                                                      return e.setState({ notiStatus: !1 });
                                                  },
                                                  close: !0,
                                              })
                                          )
                                        : o.a.createElement(
                                              x.a,
                                              { onSubmit: this.handleSubmit },
                                              !this.isSignup &&
                                                  a &&
                                                  o.a.createElement(
                                                      "div",
                                                      { className: "text-center pb-4" },
                                                      o.a.createElement("img", { src: m.a, className: "rounded", style: { width: 100, height: 100, cursor: "pointer" }, alt: "logo", onClick: s })
                                                  ),
                                              this.isSignup &&
                                                  o.a.createElement(
                                                      "div",
                                                      { className: "image-crop-uploader" },
                                                      o.a.createElement(v.a, { src: this.state.imageCrop.src, onImageLoaded: this.setImage, crop: this.state.imageCrop.crop, onChange: this.setCrop }),
                                                      o.a.createElement("br", null),
                                                      o.a.createElement("input", { type: "file", id: "file", onChange: this.handleFileChange, onClick: this.onUpload }),
                                                      o.a.createElement("label", { htmlFor: "file", className: "btn-2" }, "Avatar")
                                                  ),
                                              o.a.createElement(f.a, null, o.a.createElement(j.a, Object.assign({}, n, { onChange: this.changePhone, value: this.state.phone }))),
                                              o.a.createElement(f.a, null, o.a.createElement(j.a, Object.assign({}, r, { onChange: this.changePassword, value: this.state.password }))),
                                              this.isSignup &&
                                                  o.a.createElement(
                                                      f.a,
                                                      null,
                                                      o.a.createElement(j.a, Object.assign({}, c, { onChange: this.changeConfirmPassword, value: this.state.confirmPassword })),
                                                      this.state.confirmPWDErr && o.a.createElement("span", { className: "text-danger" }, "password not match")
                                                  ),
                                              this.isSignup &&
                                                  o.a.createElement(
                                                      o.a.Fragment,
                                                      null,
                                                      o.a.createElement(f.a, null, o.a.createElement(j.a, Object.assign({ type: "text" }, l, { value: this.state.recommendationCode, onChange: this.changeRecommendationCdoe })))
                                                  ),
                                              this.isSignup &&
                                                  o.a.createElement(
                                                      f.a,
                                                      { check: !0 },
                                                      o.a.createElement(
                                                          O.a,
                                                          { check: !0 },
                                                          o.a.createElement(j.a, { type: "checkbox", checked: this.state.agree, onChange: this.onChangeAgree }),
                                                          " ",
                                                          "Agree the ",
                                                          o.a.createElement(d.a, { to: "/policy" }, "terms and policy")
                                                      )
                                                  ),
                                              o.a.createElement("hr", null),
                                              o.a.createElement(k.a, { size: "lg", color: "youtube", block: !0, round: !0, onClick: this.handleSubmit }, this.renderButtonText()),
                                              o.a.createElement(
                                                  "div",
                                                  { className: "text-center pt-1" },
                                                  o.a.createElement("h6", null, "or"),
                                                  o.a.createElement(
                                                      "h6",
                                                      null,
                                                      this.isSignup
                                                          ? o.a.createElement("a", { href: "#login", onClick: this.changeAuthState(z) }, "Login")
                                                          : o.a.createElement(
                                                                o.a.Fragment,
                                                                null,
                                                                o.a.createElement("a", { href: "#signup", onClick: this.changeAuthState(I) }, "Signup"),
                                                                o.a.createElement("br", null),
                                                                o.a.createElement("br", null),
                                                                o.a.createElement("a", { href: "#signup", onClick: this.changeAuthState(N) }, "Forgot password."),
                                                                o.a.createElement("br", null),
                                                                o.a.createElement("br", null),
                                                                o.a.createElement("a", { href: "https://t.me/googleclubsin" }, "Contact US")
                                                            )
                                                  )
                                              ),
                                              i,
                                              o.a.createElement(C.a, {
                                                  place: "tr",
                                                  color: "danger",
                                                  icon: E.y,
                                                  message: this.state.notiText,
                                                  open: this.state.notiStatus,
                                                  closeNotification: function () {
                                                      return e.setState({ notiStatus: !1 });
                                                  },
                                                  close: !0,
                                              })
                                          );
                                },
                            },
                            {
                                key: "isLogin",
                                get: function () {
                                    return this.props.authState === z;
                                },
                            },
                            {
                                key: "isSignup",
                                get: function () {
                                    return this.props.authState === I;
                                },
                            },
                            {
                                key: "isPhone",
                                get: function () {
                                    return this.props.authState === N;
                                },
                            },
                            {
                                key: "isVerify",
                                get: function () {
                                    return this.props.authState === A;
                                },
                            },
                        ]),
                        t
                    );
                })(o.a.Component),
                z = "LOGIN",
                I = "SIGNUP",
                N = "PHONE",
                A = "VERIFY";
            P.defaultProps = {
                authState: "LOGIN",
                showLogo: !0,
                usernameLabel: "Phone",
                usernameInputProps: { type: "string", placeholder: "your phone number" },
                passwordLabel: "Password",
                passwordInputProps: { type: "password", placeholder: "your password" },
                confirmPasswordLabel: "Confirm Password",
                confirmPasswordInputProps: { type: "password", placeholder: "confirm your password" },
                recommendationCodeLabel: "Recommendation Code",
                recommendationCodeInputProps: { type: "string", placeholder: "recommendation code" },
                onLogoClick: function () {},
            };
            var T = P,
                R = a(3),
                L = a.n(R),
                _ = a(67),
                D = !!Object({ NODE_ENV: "production", PUBLIC_URL: "", REACT_APP_NAME: "Google Clubs", REACT_APP_DESCRIPTION: "Google Clubs", REACT_APP_SOURCE_URL: "" }).REACT_APP_GOOGLE_ANALYTICS;
            D && _.a.initialize(Object({ NODE_ENV: "production", PUBLIC_URL: "", REACT_APP_NAME: "Google Clubs", REACT_APP_DESCRIPTION: "Google Clubs", REACT_APP_SOURCE_URL: "" }).REACT_APP_GOOGLE_ANALYTICS);
            var W = (function (e) {
                function t() {
                    return Object(i.a)(this, t), Object(l.a)(this, Object(p.a)(t).apply(this, arguments));
                }
                return (
                    Object(u.a)(t, e),
                    Object(s.a)(t, [
                        {
                            key: "componentDidMount",
                            value: function () {
                                D && (this.sendPageView(this.context.router.history.location), this.context.router.history.listen(this.sendPageView));
                            },
                        },
                        {
                            key: "sendPageView",
                            value: function (e) {
                                _.a.set({ page: e.pathname }), _.a.pageview(e.pathname);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                return this.props.children;
                            },
                        },
                    ]),
                    t
                );
            })(o.a.Component);
            W.contextTypes = { router: L.a.object };
            var $ = W,
                H = a(18),
                F = a(31),
                M = a(183),
                B = F.a.create("content"),
                U = function (e) {
                    var t = e.tag,
                        a = e.className,
                        n = Object(H.a)(e, ["tag", "className"]),
                        r = B.b(a);
                    return o.a.createElement(t, Object.assign({ className: r }, n));
                };
            U.defaultProps = { tag: M.a };
            var G = U,
                q = function (e) {
                    var t = e.children,
                        a = Object(H.a)(e, ["children"]);
                    return o.a.createElement("main", Object.assign({ className: "cr-app bg-light" }, a), o.a.createElement(G, { fluid: !0 }, t));
                },
                J = a(188),
                V = a(184),
                Y = a(185),
                K = a(186),
                Q = a(187),
                X = a(32),
                Z = a(69),
                ee = a(98),
                te = F.a.create("footer"),
                ae = function () {
                    var e;
                    return (
                        (e = localStorage.getItem("auth")
                            ? [
                                  { to: "/play", name: "Color", exact: !0, Icon: Z.a },
                                  { to: "/wallet", name: "Wallet", exact: !0, Icon: Z.h },
                                  { to: "/account", name: "Account", exact: !1, Icon: X.y },
                              ]
                            : [
                                  { to: "/", name: "Home", exact: !0, Icon: X.j },
                                  { to: "/login", name: "Signin", exact: !1, Icon: ee.a },
                              ]),
                        o.a.createElement(
                            V.a,
                            { className: "footer" },
                            o.a.createElement(
                                Y.a,
                                { navbar: !0 },
                                e.map(function (e, t) {
                                    var a = e.to,
                                        n = e.name,
                                        r = e.exact,
                                        c = e.Icon;
                                    return o.a.createElement(
                                        K.a,
                                        { key: t, className: te.e("nav-item") },
                                        o.a.createElement(
                                            Q.a,
                                            { id: "navItem-".concat(n, "-").concat(t), className: "text-uppercase", tag: J.a, to: a, activeClassName: "active", exact: r },
                                            o.a.createElement(c, { className: te.e("nav-item-icon") }),
                                            o.a.createElement("span", { className: "" }, n)
                                        )
                                    );
                                })
                            )
                        )
                    );
                },
                ne = F.a.create("header"),
                oe = (o.a.Component, a(102)),
                re = function (e) {
                    var t = e.component,
                        a = e.layout,
                        n = Object(H.a)(e, ["component", "layout"]);
                    return o.a.createElement(
                        oe.a,
                        Object.assign({}, n, {
                            render: function (e) {
                                return o.a.createElement(a, null, o.a.createElement(t, e));
                            },
                        })
                    );
                },
                ce = (function (e) {
                    function t() {
                        var e, a;
                        Object(i.a)(this, t);
                        for (var n = arguments.length, r = new Array(n), c = 0; c < n; c++) r[c] = arguments[c];
                        return (
                            ((a = Object(l.a)(this, (e = Object(p.a)(t)).call.apply(e, [this].concat(r)))).token = JSON.parse(localStorage.getItem("auth"))),
                            (a.state = { envelopModal: !1, envelop: "", notiMessage: !1 }),
                            (a.notifyFunc = function () {
                                a.token && 1 == a.token.user.admin
                                    ? fetch("/api/new-complaints-admin", { method: "GET", headers: { "content-type": "application/json", Authorization: a.token.userToken } }).then(function (e) {
                                          e.status < 400 &&
                                              e.json().then(function (e) {
                                                  e.complaints > 0 && a.setState({ notiMessage: o.a.createElement(d.a, { className: "notification-link", to: "/complaint-admin" }, "New Complaints appeared") }),
                                                      e.withdrawals > 0 && a.setState({ notiMessage: o.a.createElement(d.a, { className: "notification-link", to: "/withdrawl-admin" }, "New Withdrawal request waiting") });
                                              });
                                      })
                                    : a.token &&
                                      fetch("/api/new-complaints", { method: "GET", headers: { "content-type": "application/json", Authorization: a.token.userToken } }).then(function (e) {
                                          e.status < 400 &&
                                              e.json().then(function (e) {
                                                  e.complaints > 0 && a.setState({ notiMessage: o.a.createElement(d.a, { className: "notification-link", to: "/support" }, "Replied from the Support team") }),
                                                      e.withdrawals > 0 && a.setState({ notiMessage: o.a.createElement(d.a, { className: "notification-link", to: "/records/withdraw-list" }, "Withdrawal accepted") });
                                              });
                                      });
                            }),
                            (a.handleContentClick = function (e) {}),
                            a
                        );
                    }
                    return (
                        Object(u.a)(t, e),
                        Object(s.a)(
                            t,
                            [
                                {
                                    key: "componentWillReceiveProps",
                                    value: function (e) {
                                        var t = e.breakpoint;
                                        t !== this.props.breakpoint && this.checkBreakpoint(t);
                                    },
                                },
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        this.checkBreakpoint(this.props.breakpoint), this.notifyFunc(), setInterval(this.notifyFunc, 3e5);
                                    },
                                },
                                {
                                    key: "checkBreakpoint",
                                    value: function (e) {
                                        e;
                                    },
                                },
                                { key: "openSidebar", value: function (e) {} },
                                {
                                    key: "render",
                                    value: function () {
                                        var e = this,
                                            t = this.props.children;
                                        return o.a.createElement(
                                            "main",
                                            { className: "cr-app bg-light" },
                                            o.a.createElement(
                                                G,
                                                { fluid: !0, onClick: this.handleContentClick },
                                                o.a.createElement("a", { href: "https://t.me/googleclubsin", className: "btn btn-primary telegram" }, o.a.createElement(X.u, null), " "),
                                                t,
                                                o.a.createElement(ae, null)
                                            ),
                                            o.a.createElement(C.a, {
                                                place: "tr",
                                                color: "success",
                                                icon: E.r,
                                                message: this.state.notiMessage,
                                                open: this.state.notiMessage,
                                                closeNotification: function () {
                                                    return e.setState({ notiMessage: !1 });
                                                },
                                                close: !0,
                                            })
                                        );
                                    },
                                },
                            ],
                            [{ key: "isSidebarOpen", value: function () {} }]
                        ),
                        t
                    );
                })(o.a.Component),
                ie = a(11),
                se = a(73),
                le = a.n(se),
                pe = function (e) {
                    return o.a.createElement("a", Object.assign({ href: "", target: "_blank", rel: "noopener noreferrer" }, e));
                },
                ue = a(189),
                be = { backgroundImage: 'url("'.concat(le.a, '")'), backgroundSize: "cover", backgroundRepeat: "no-repeat" },
                he = [
                    { to: "/buttons", name: "buttons", exact: !1, Icon: E.u },
                    { to: "/button-groups", name: "button groups", exact: !1, Icon: E.n },
                    { to: "/forms", name: "forms", exact: !1, Icon: E.h },
                    { to: "/input-groups", name: "input groups", exact: !1, Icon: E.E },
                    { to: "/dropdowns", name: "dropdowns", exact: !1, Icon: E.d },
                    { to: "/badges", name: "badges", exact: !1, Icon: E.z },
                    { to: "/alerts", name: "alerts", exact: !1, Icon: E.r },
                    { to: "/progress", name: "progress", exact: !1, Icon: E.f },
                    { to: "/modals", name: "modals", exact: !1, Icon: E.D },
                ],
                ge = [
                    { to: "/typography", name: "typography", exact: !1, Icon: E.B },
                    { to: "/tables", name: "tables", exact: !1, Icon: E.e },
                ],
                me = [
                    { to: "/login", name: "login / signup", exact: !1, Icon: E.c },
                    { to: "/login-modal", name: "login modal", exact: !1, Icon: E.C },
                ],
                de = [
                    { to: "/", name: "dashboard", exact: !0, Icon: E.l },
                    { to: "/cards", name: "cards", exact: !1, Icon: E.G },
                    { to: "/charts", name: "charts", exact: !1, Icon: E.o },
                    { to: "/widgets", name: "widgets", exact: !1, Icon: E.H },
                ],
                xe = F.a.create("sidebar"),
                fe = (o.a.Component, a(190)),
                je = a(191),
                Oe = a(192),
                Ee = (function (e) {
                    function t() {
                        var e, a;
                        Object(i.a)(this, t);
                        for (var n = arguments.length, o = new Array(n), r = 0; r < n; r++) o[r] = arguments[r];
                        return (
                            ((a = Object(l.a)(this, (e = Object(p.a)(t)).call.apply(e, [this].concat(o)))).handleAuthState = function (e) {
                                e === z ? a.props.history.push("/login") : e === I ? a.props.history.push("/signup") : e === N ? a.props.history.push("/phone") : a.props.history.push("/verify");
                            }),
                            (a.handleLogoClick = function () {
                                a.props.history.push("/");
                            }),
                            (a.handleSubmit = function () {
                                void 0 !== a.props.location.state ? a.props.history.push(a.props.location.state.from) : a.props.history.push({ pathname: "/", state: { signin: !0 } });
                            }),
                            a
                        );
                    }
                    return (
                        Object(u.a)(t, e),
                        Object(s.a)(t, [
                            {
                                key: "render",
                                value: function () {
                                    return o.a.createElement(
                                        fe.a,
                                        { style: { minHeight: "100vh", justifyContent: "center", alignItems: "center", backgroundColor: "#c2cad3" } },
                                        o.a.createElement(
                                            je.a,
                                            { md: 6, lg: 4 },
                                            o.a.createElement(
                                                Oe.a,
                                                { body: !0 },
                                                o.a.createElement(T, {
                                                    authState: this.props.authState,
                                                    onChangeAuthState: this.handleAuthState,
                                                    onLogoClick: this.handleLogoClick,
                                                    onSubmit: this.handleSubmit,
                                                    params: this.props.match.params.ref_code,
                                                })
                                            )
                                        )
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(o.a.Component),
                ye = a(99),
                ve = a.n(ye),
                Se = a(197),
                we = a(200),
                ke = a(193),
                Ce =
                    (a(139),
                    function (e) {
                        var t = e.component,
                            a = Object(H.a)(e, ["component"]);
                        return o.a.createElement(
                            oe.a,
                            Object.assign({}, a, {
                                render: function (e) {
                                    return localStorage.getItem("auth")
                                        ? o.a.createElement(t, Object.assign({}, e, { auth: JSON.parse(localStorage.getItem("auth")) }))
                                        : o.a.createElement(ke.a, { to: { pathname: "/login", state: { from: e.location } } });
                                },
                            })
                        );
                    }),
                Pe = function (e) {
                    var t = e.component,
                        a = Object(H.a)(e, ["component"]);
                    return o.a.createElement(
                        oe.a,
                        Object.assign({}, a, {
                            render: function (e) {
                                return localStorage.getItem("auth")
                                    ? JSON.parse(localStorage.getItem("auth")).user.admin
                                        ? o.a.createElement(t, e)
                                        : o.a.createElement(ke.a, { to: { pathname: "/login" } })
                                    : o.a.createElement(ke.a, { to: { pathname: "/login", state: { from: e.location } } });
                            },
                        })
                    );
                },
                ze = a(68),
                Ie = a.n(ze),
                Ne = a(76),
                Ae = a(42),
                Te = a(75),
                Re = a(194),
                Le = a(56),
                _e = a(46),
                De = a(77),
                We = a(199),
                $e = a(195),
                He = F.a.create("page"),
                Fe = function (e) {
                    var t = Object(n.useState)(""),
                        a = Object(Ae.a)(t, 2),
                        r = a[0],
                        c = a[1],
                        i = Object(n.useState)(1),
                        s = Object(Ae.a)(i, 2),
                        l = s[0],
                        p = s[1],
                        u = Object(n.useState)(1),
                        b = Object(Ae.a)(u, 2),
                        h = b[0],
                        g = b[1],
                        m = o.a.useState(0),
                        x = Object(Ae.a)(m, 2),
                        f = x[0],
                        j = x[1];
                    return (
                        Object(n.useEffect)(
                            function () {
                                Object(Ne.a)(
                                    Ie.a.mark(function t() {
                                        var a, n;
                                        return Ie.a.wrap(
                                            function (t) {
                                                for (;;)
                                                    switch ((t.prev = t.next)) {
                                                        case 0:
                                                            return (t.next = 2), fetch("/api/enjoy-my-page/" + f + "/" + l, { method: "GET", headers: { "content-type": "application/json", Authorization: e.auth.userToken } });
                                                        case 2:
                                                            if ((401 == (a = t.sent).status && e.history.push("/login"), (t.prev = 4), !(a.status < 400))) {
                                                                t.next = 12;
                                                                break;
                                                            }
                                                            return (t.next = 8), a.json();
                                                        case 8:
                                                            (n = t.sent), c(n.my_records), p(parseInt(n.records_my_page)), g(parseInt(n.last_records_my_page));
                                                        case 12:
                                                            t.next = 16;
                                                            break;
                                                        case 14:
                                                            (t.prev = 14), (t.t0 = t.catch(4));
                                                        case 16:
                                                        case "end":
                                                            return t.stop();
                                                    }
                                            },
                                            t,
                                            null,
                                            [[4, 14]]
                                        );
                                    })
                                )();
                            },
                            [l, f]
                        ),
                        o.a.createElement(
                            Te.a,
                            { title: o.a.createElement(d.a, { to: "/account" }, o.a.createElement(Le.a, { type: "h4", className: He.e("title") }, o.a.createElement(X.a, null), " Game Records")), className: "MyPage" },
                            o.a.createElement(
                                De.a,
                                {
                                    variant: "fullWidth",
                                    value: f,
                                    onChange: function (e, t) {
                                        j(t), p(1);
                                    },
                                    "aria-label": "styled tabs example",
                                },
                                o.a.createElement(_e.a, { label: "Parity", value: 0 }),
                                o.a.createElement(_e.a, { label: "Sapre", value: 1 }),
                                o.a.createElement(_e.a, { label: "Becorn", value: 2 }),
                                o.a.createElement(_e.a, { label: "Emerd", value: 3 })
                            ),
                            o.a.createElement(
                                fe.a,
                                null,
                                o.a.createElement(
                                    je.a,
                                    { xl: 12, lg: 12, md: 12 },
                                    o.a.createElement(
                                        Re.a,
                                        null,
                                        o.a.createElement(
                                            "thead",
                                            null,
                                            o.a.createElement(
                                                "tr",
                                                null,
                                                o.a.createElement("th", null, "Period"),
                                                o.a.createElement("th", null, "Contract money"),
                                                o.a.createElement("th", null, "Select"),
                                                o.a.createElement("th", null, "Result"),
                                                o.a.createElement("th", null, "Amount")
                                            )
                                        ),
                                        o.a.createElement(
                                            "tbody",
                                            null,
                                            r
                                                ? r.map(function (e, t) {
                                                      return o.a.createElement(
                                                          "tr",
                                                          { key: t },
                                                          o.a.createElement("td", null, e.period),
                                                          o.a.createElement("td", null, e.contract),
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              10 === e.select
                                                                  ? o.a.createElement("span", { className: "green-circle" })
                                                                  : 11 === e.select
                                                                  ? o.a.createElement("span", { className: "red-circle" })
                                                                  : 12 === e.select
                                                                  ? o.a.createElement("span", { className: "violet-circle" })
                                                                  : e.select
                                                          ),
                                                          o.a.createElement(
                                                              "td",
                                                              null,
                                                              e.result,
                                                              " ",
                                                              " ",
                                                              parseInt(e.result) % 2 === 1 ? o.a.createElement("span", { className: "green-circle" }) : o.a.createElement("span", { className: "red-circle" }),
                                                              " ",
                                                              parseInt(e.result) % 5 === 0 ? o.a.createElement("span", { className: "violet-circle" }) : ""
                                                          ),
                                                          o.a.createElement("td", null, e.amount)
                                                      );
                                                  })
                                                : ""
                                        )
                                    )
                                )
                            ),
                            o.a.createElement(
                                fe.a,
                                null,
                                o.a.createElement(We.a, {
                                    color: "primary",
                                    count: h,
                                    page: l,
                                    onChange: function (e, t) {
                                        return p(t);
                                    },
                                    renderItem: function (e) {
                                        return o.a.createElement($e.a, Object.assign({ component: "a" }, e));
                                    },
                                    size: "small",
                                })
                            ),
                            o.a.createElement(fe.a, null, o.a.createElement("div", { style: { height: "100px" } }))
                        )
                    );
                },
                Me = a(100),
                Be = o.a.lazy(function () {
                    return Promise.all([a.e(19), a.e(38)]).then(a.bind(null, 380));
                }),
                Ue = o.a.lazy(function () {
                    return a.e(37).then(a.bind(null, 381));
                }),
                Ge =
                    (o.a.lazy(function () {
                        return a.e(21).then(a.bind(null, 382));
                    }),
                    o.a.lazy(function () {
                        return Promise.all([a.e(5), a.e(46)]).then(a.bind(null, 383));
                    }),
                    o.a.lazy(function () {
                        return a.e(12).then(a.bind(null, 384));
                    })),
                qe = o.a.lazy(function () {
                    return Promise.all([a.e(6), a.e(30)]).then(a.bind(null, 416));
                }),
                Je =
                    (o.a.lazy(function () {
                        return Promise.all([a.e(4), a.e(36)]).then(a.bind(null, 385));
                    }),
                    o.a.lazy(function () {
                        return a.e(39).then(a.bind(null, 386));
                    })),
                Ve = o.a.lazy(function () {
                    return Promise.all([a.e(0), a.e(18), a.e(16)]).then(a.bind(null, 417));
                }),
                Ye =
                    (o.a.lazy(function () {
                        return Promise.all([a.e(0), a.e(22)]).then(a.bind(null, 247));
                    }),
                    o.a.lazy(function () {
                        return a.e(26).then(a.bind(null, 246));
                    }),
                    o.a.lazy(function () {
                        return a.e(49).then(a.bind(null, 387));
                    })),
                Ke = o.a.lazy(function () {
                    return a.e(43).then(a.bind(null, 388));
                }),
                Qe =
                    (o.a.lazy(function () {
                        return Promise.all([a.e(13), a.e(23)]).then(a.bind(null, 418));
                    }),
                    o.a.lazy(function () {
                        return a.e(48).then(a.bind(null, 389));
                    })),
                Xe = o.a.lazy(function () {
                    return a.e(14).then(a.bind(null, 390));
                }),
                Ze =
                    (o.a.lazy(function () {
                        return a.e(29).then(a.bind(null, 391));
                    }),
                    o.a.lazy(function () {
                        return a.e(25).then(a.bind(null, 414));
                    })),
                et = o.a.lazy(function () {
                    return a.e(33).then(a.bind(null, 392));
                }),
                tt = o.a.lazy(function () {
                    return a.e(17).then(a.bind(null, 393));
                }),
                at =
                    (o.a.lazy(function () {
                        return a.e(40).then(a.bind(null, 394));
                    }),
                    o.a.lazy(function () {
                        return a.e(32).then(a.bind(null, 395));
                    })),
                nt = o.a.lazy(function () {
                    return a.e(8).then(a.bind(null, 396));
                }),
                ot = o.a.lazy(function () {
                    return a.e(11).then(a.bind(null, 397));
                }),
                rt = o.a.lazy(function () {
                    return a.e(10).then(a.bind(null, 398));
                }),
                ct = o.a.lazy(function () {
                    return a.e(9).then(a.bind(null, 399));
                }),
                it = o.a.lazy(function () {
                    return Promise.all([a.e(7), a.e(31)]).then(a.bind(null, 400));
                }),
                st = o.a.lazy(function () {
                    return a.e(15).then(a.bind(null, 401));
                }),
                lt = o.a.lazy(function () {
                    return Promise.all([a.e(24), a.e(42)]).then(a.bind(null, 402));
                }),
                pt = o.a.lazy(function () {
                    return a.e(41).then(a.bind(null, 403));
                }),
                ut = o.a.lazy(function () {
                    return a.e(20).then(a.bind(null, 404));
                }),
                bt = o.a.lazy(function () {
                    return a.e(34).then(a.bind(null, 405));
                }),
                ht = o.a.lazy(function () {
                    return a.e(44).then(a.bind(null, 406));
                }),
                gt =
                    (o.a.lazy(function () {
                        return a.e(27).then(a.bind(null, 407));
                    }),
                    o.a.lazy(function () {
                        return a.e(28).then(a.bind(null, 408));
                    }),
                    o.a.lazy(function () {
                        return a.e(35).then(a.bind(null, 409));
                    }),
                    o.a.lazy(function () {
                        return a.e(47).then(a.bind(null, 410));
                    }),
                    o.a.lazy(function () {
                        return a.e(45).then(a.bind(null, 411));
                    }),
                    (function (e) {
                        function t() {
                            return Object(i.a)(this, t), Object(l.a)(this, Object(p.a)(t).apply(this, arguments));
                        }
                        return (
                            Object(u.a)(t, e),
                            Object(s.a)(t, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        localStorage.getItem("auth") && new Date().getTime() / 1e3 > Object(Me.a)(JSON.parse(localStorage.getItem("auth")).userToken.split(" ")[1]).exp && localStorage.clear();
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        return new Date().getFullYear() >= 2021 && new Date().getMonth() >= 6 && new Date().getDate() >= 30
                                            ? o.a.createElement("div", null)
                                            : o.a.createElement(
                                                  Se.a,
                                                  { basename: "/".concat("".split("/").pop()) },
                                                  o.a.createElement(
                                                      $,
                                                      null,
                                                      o.a.createElement(
                                                          we.a,
                                                          null,
                                                          o.a.createElement(re, {
                                                              exact: !0,
                                                              path: "/login",
                                                              layout: q,
                                                              component: function (e) {
                                                                  return o.a.createElement(Ee, Object.assign({}, e, { authState: z }));
                                                              },
                                                          }),
                                                          o.a.createElement(re, {
                                                              exact: !0,
                                                              path: "/signup",
                                                              layout: q,
                                                              component: function (e) {
                                                                  return o.a.createElement(Ee, Object.assign({}, e, { authState: I }));
                                                              },
                                                          }),
                                                          o.a.createElement(re, {
                                                              exact: !0,
                                                              path: "/signup/:ref_code",
                                                              layout: q,
                                                              component: function (e) {
                                                                  return o.a.createElement(Ee, Object.assign({}, e, { authState: I }));
                                                              },
                                                          }),
                                                          o.a.createElement(re, {
                                                              exact: !0,
                                                              path: "/phone",
                                                              layout: q,
                                                              component: function (e) {
                                                                  return o.a.createElement(Ee, Object.assign({}, e, { authState: N }));
                                                              },
                                                          }),
                                                          o.a.createElement(re, {
                                                              exact: !0,
                                                              path: "/verify",
                                                              layout: q,
                                                              component: function (e) {
                                                                  return o.a.createElement(Ee, Object.assign({}, e, { authState: A }));
                                                              },
                                                          }),
                                                          o.a.createElement(
                                                              ce,
                                                              { breakpoint: this.props.breakpoint },
                                                              o.a.createElement(
                                                                  o.a.Suspense,
                                                                  { fallback: o.a.createElement(S.a, null) },
                                                                  o.a.createElement(Ce, { exact: !0, path: "/", component: Ge }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/play", component: Ge }),
                                                                  o.a.createElement(oe.a, { exact: !0, path: "/logout", component: Ue }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/enjoy-admin", component: qe }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/envelope/:id", component: ut }),
                                                                  o.a.createElement(Ce, { path: "/wallet/:param?", component: Ve }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/account", component: Be }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/my/order", component: Je }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/promotion", component: lt }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/promotionList", component: pt }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/apply", component: bt }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/referers", component: ht }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/records/withdraw-list", component: Ye }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/records/recharge-list", component: Ke }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/my/transaction", component: Qe }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/bank/:add?", component: Xe }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/game-records", component: Fe }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/security", component: Ze }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/my/app", component: et }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/support", component: tt }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/users", component: it }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/user/:id", component: st }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/complaint-admin", component: nt }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/withdrawl-admin", component: ot }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/reward-admin", component: rt }),
                                                                  o.a.createElement(Ce, { exact: !0, path: "/agreement", component: at }),
                                                                  o.a.createElement(Pe, { exact: !0, path: "/recharge-admin", component: ct })
                                                              )
                                                          ),
                                                          o.a.createElement(ke.a, { to: "/play" })
                                                      )
                                                  )
                                              );
                                    },
                                },
                            ]),
                            t
                        );
                    })(o.a.Component)),
                mt = ve()(function (e) {
                    var t = e.width;
                    return t < 575
                        ? { breakpoint: "xs" }
                        : 576 < t && t < 767
                        ? { breakpoint: "sm" }
                        : 768 < t && t < 991
                        ? { breakpoint: "md" }
                        : 992 < t && t < 1199
                        ? { breakpoint: "lg" }
                        : t > 1200
                        ? { breakpoint: "xl" }
                        : { breakpoint: "xs" };
                })(gt);
            c.a.render(o.a.createElement(mt, null), document.getElementById("root"));
        },
        2: function (e, t, a) {
            "use strict";
            a.d(t, "j", function () {
                return o;
            }),
                a.d(t, "e", function () {
                    return r;
                }),
                a.d(t, "p", function () {
                    return c;
                }),
                a.d(t, "y", function () {
                    return i;
                }),
                a.d(t, "d", function () {
                    return s;
                }),
                a.d(t, "u", function () {
                    return l;
                }),
                a.d(t, "l", function () {
                    return p;
                }),
                a.d(t, "s", function () {
                    return u;
                }),
                a.d(t, "i", function () {
                    return b;
                }),
                a.d(t, "b", function () {
                    return h;
                }),
                a.d(t, "z", function () {
                    return g;
                }),
                a.d(t, "w", function () {
                    return m;
                }),
                a.d(t, "g", function () {
                    return d;
                }),
                a.d(t, "h", function () {
                    return x;
                }),
                a.d(t, "m", function () {
                    return f;
                }),
                a.d(t, "n", function () {
                    return j;
                }),
                a.d(t, "A", function () {
                    return O;
                }),
                a.d(t, "v", function () {
                    return E;
                }),
                a.d(t, "a", function () {
                    return y;
                }),
                a.d(t, "f", function () {
                    return v;
                }),
                a.d(t, "q", function () {
                    return S;
                }),
                a.d(t, "o", function () {
                    return w;
                }),
                a.d(t, "k", function () {
                    return k;
                }),
                a.d(t, "t", function () {
                    return C;
                }),
                a.d(t, "x", function () {
                    return P;
                }),
                a.d(t, "c", function () {
                    return z;
                }),
                a.d(t, "r", function () {
                    return I;
                });
            var n = a(14),
                o = function (e) {
                    e = (e += "").replace("#", "");
                    if (!/[0-9A-Fa-f]/g.test(e) || (3 !== e.length && 6 !== e.length)) throw new Error("input is not a valid hex color.");
                    if (3 === e.length) {
                        var t = e[0],
                            a = e[1],
                            n = e[2];
                        e = t + t + a + a + n + n;
                    }
                    var o = (e = e.toUpperCase(e))[0] + e[1],
                        r = e[2] + e[3],
                        c = e[4] + e[5];
                    return parseInt(o, 16) + ", " + parseInt(r, 16) + ", " + parseInt(c, 16);
                },
                r = { fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', fontWeight: "300", lineHeight: "1.5em" },
                c = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5", "#7b1fa2"],
                i = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a", "#f57c00", "#faf2cc", "#fcf8e3"],
                s = ["#f44336", "#ef5350", "#e53935", "#f55a4e", "#d32f2f", "#ebcccc", "#f2dede"],
                l = ["#4caf50", "#66bb6a", "#43a047", "#5cb860", "#388e3c", "#d0e9c6", "#dff0d8"],
                p = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee", "#0097a7", "#c4e3f3", "#d9edf7"],
                u = ["#e91e63", "#ec407a", "#d81b60", "#eb3573", "#c2185b"],
                b = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#555555", "#333", "#eee", "#ccc", "#e4e4e4", "#E5E5E5", "#f9f9f9", "#f5f5f5", "#495057", "#e7e7e7", "#212121", "#c8c8c8", "#505050"],
                h = "#000",
                g = "#FFF",
                m = "#55acee",
                d = "#3b5998",
                x = "#dd4b39",
                f = "#0976b4",
                j = "#cc2127",
                O = "#e52d27",
                E = "#35465c",
                y = "#1769ff",
                v = "#ea4c89",
                S = "#ff4500",
                w = (o(h), o(h), o(h), { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(c[0]) + ",.4)" }),
                k = { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(p[0]) + ",.4)" },
                C = { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(l[0]) + ",.4)" },
                P = { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(i[0]) + ",.4)" },
                z = { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(s[0]) + ",.4)" },
                I = { boxShadow: "0 4px 20px 0 rgba(" + o(h) + ",.14), 0 7px 10px -5px rgba(" + o(u[0]) + ",.4)" },
                N =
                    (Object(n.a)({ background: "linear-gradient(60deg, " + i[1] + ", " + i[2] + ")" }, P),
                    Object(n.a)({ background: "linear-gradient(60deg, " + l[1] + ", " + l[2] + ")" }, C),
                    Object(n.a)({ background: "linear-gradient(60deg, " + s[1] + ", " + s[2] + ")" }, z),
                    Object(n.a)({ background: "linear-gradient(60deg, " + p[1] + ", " + p[2] + ")" }, k),
                    Object(n.a)({ background: "linear-gradient(60deg, " + c[1] + ", " + c[2] + ")" }, w),
                    Object(n.a)({ background: "linear-gradient(60deg, " + u[1] + ", " + u[2] + ")" }, I),
                    o(h),
                    o(h),
                    Object(n.a)({ margin: "0 20px 10px", paddingTop: "10px", borderTop: "1px solid " + b[8], height: "auto" }, r),
                    o(h),
                    o(h),
                    o(h),
                    o(b[6]),
                    o(h),
                    o(h),
                    o(h),
                    {
                        color: b[2],
                        textDecoration: "none",
                        fontWeight: "300",
                        marginTop: "30px",
                        marginBottom: "25px",
                        minHeight: "32px",
                        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                        "& small": { color: b[1], fontSize: "65%", fontWeight: "400", lineHeight: "1" },
                    });
            Object(n.a)({}, N, { marginTop: "0", marginBottom: "3px", minHeight: "auto", "& a": Object(n.a)({}, N, { marginTop: ".625rem", marginBottom: "0.75rem", minHeight: "auto" }) });
        },
        31: function (e, t, a) {
            "use strict";
            var n,
                o = a(7),
                r = a.n(o),
                c =
                    ((n = "cr"),
                    {
                        create: function (e) {
                            var t = e;
                            return (
                                "string" === typeof n && (t = "".concat(n, "-").concat(e)),
                                {
                                    b: function () {
                                        for (var e = arguments.length, a = new Array(e), n = 0; n < e; n++) a[n] = arguments[n];
                                        return r()(t, a);
                                    },
                                    e: function (e) {
                                        for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) n[o - 1] = arguments[o];
                                        return r()("".concat(t, "__").concat(e), n);
                                    },
                                    m: function (e) {
                                        for (var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) n[o - 1] = arguments[o];
                                        return r()("".concat(t, "--").concat(e), n);
                                    },
                                }
                            );
                        },
                    });
            t.a = c;
        },
        43: function (e, t, a) {
            "use strict";
            var n = a(11),
                o = a(18),
                r = a(1),
                c = a.n(r),
                i = a(7),
                s = a.n(i),
                l = a(174),
                p = a(175),
                u = a(2),
                b = {
                    button: {
                        minHeight: "auto",
                        minWidth: "auto",
                        backgroundColor: u.i[0],
                        color: u.z,
                        border: "none",
                        borderRadius: "3px",
                        position: "relative",
                        padding: "12px 30px",
                        margin: ".3125rem 1px",
                        fontSize: "12px",
                        fontWeight: "400",
                        textTransform: "uppercase",
                        letterSpacing: "0",
                        willChange: "box-shadow, transform",
                        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
                        lineHeight: "1.42857143",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        verticalAlign: "middle",
                        touchAction: "manipulation",
                        cursor: "pointer",
                        "&:hover,&:focus": {
                            color: u.z,
                            backgroundColor: u.i[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.i[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.i[0]) + ", 0.2)",
                        },
                        "& .fab,& .fas,& .far,& .fal,& .material-icons": { position: "relative", display: "inline-block", top: "0", marginTop: "-1em", marginBottom: "-1em", fontSize: "1.1rem", marginRight: "4px", verticalAlign: "middle" },
                        "& svg": { position: "relative", display: "inline-block", top: "0", width: "18px", height: "18px", marginRight: "4px", verticalAlign: "middle" },
                        "&$justIcon": {
                            "& .fab,& .fas,& .far,& .fal,& .material-icons": { marginTop: "0px", position: "absolute", width: "100%", transform: "none", left: "0px", top: "0px", height: "100%", lineHeight: "41px", fontSize: "20px" },
                        },
                    },
                    fullWidth: { width: "100%" },
                    primary: {
                        backgroundColor: u.p[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.p[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.p[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.p[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.p[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.p[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.p[0]) + ", 0.2)",
                        },
                    },
                    info: {
                        backgroundColor: u.l[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.l[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.l[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.l[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.l[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.l[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.l[0]) + ", 0.2)",
                        },
                    },
                    success: {
                        backgroundColor: u.u[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.u[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.u[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.u[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.u[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.u[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.u[0]) + ", 0.2)",
                        },
                    },
                    warning: {
                        backgroundColor: u.y[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.y[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.y[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.y[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.y[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.y[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.y[0]) + ", 0.2)",
                        },
                    },
                    danger: {
                        backgroundColor: u.d[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.d[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.d[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.d[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.d[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.d[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.d[0]) + ", 0.2)",
                        },
                    },
                    rose: {
                        backgroundColor: u.s[0],
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.s[0]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.s[0]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.s[0]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.s[0],
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.s[0]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.s[0]) + ", 0.2)",
                        },
                    },
                    white: { "&,&:focus,&:hover": { backgroundColor: u.z, color: u.i[0] } },
                    twitter: {
                        backgroundColor: u.w,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.w) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.w) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.w) + ", 0.12)",
                        "&:hover,&:focus,&:visited": {
                            backgroundColor: u.w,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.w) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.w) + ", 0.2)",
                        },
                    },
                    facebook: {
                        backgroundColor: u.g,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.g) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.g) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.g) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.g,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.g) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.g) + ", 0.2)",
                        },
                    },
                    google: {
                        backgroundColor: u.h,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.h) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.h) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.h) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.h,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.h) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.h) + ", 0.2)",
                        },
                    },
                    linkedin: {
                        backgroundColor: u.m,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.m) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.m) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.m) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.m,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.m) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.m) + ", 0.2)",
                        },
                    },
                    pinterest: {
                        backgroundColor: u.n,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.n) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.n) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.n) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.n,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.n) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.n) + ", 0.2)",
                        },
                    },
                    youtube: {
                        backgroundColor: u.A,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.A) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.A) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.A) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.A,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.A) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.A) + ", 0.2)",
                        },
                    },
                    tumblr: {
                        backgroundColor: u.v,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.v) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.v) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.v) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.v,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.v) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.v) + ", 0.2)",
                        },
                    },
                    github: {
                        backgroundColor: u.i[7],
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.i[6]) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.i[6]) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.i[6]) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.i[7],
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.i[6]) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.i[6]) + ", 0.2)",
                        },
                    },
                    behance: {
                        backgroundColor: u.a,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.a) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.a) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.a) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.a,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.a) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.a) + ", 0.2)",
                        },
                    },
                    dribbble: {
                        backgroundColor: u.f,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.f) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.f) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.f) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.f,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.f) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.f) + ", 0.2)",
                        },
                    },
                    reddit: {
                        backgroundColor: u.q,
                        color: u.z,
                        boxShadow: "0 2px 2px 0 rgba(" + Object(u.j)(u.q) + ", 0.14), 0 3px 1px -2px rgba(" + Object(u.j)(u.q) + ", 0.2), 0 1px 5px 0 rgba(" + Object(u.j)(u.q) + ", 0.12)",
                        "&:hover,&:focus": {
                            backgroundColor: u.q,
                            color: u.z,
                            boxShadow: "0 14px 26px -12px rgba(" + Object(u.j)(u.q) + ", 0.42), 0 4px 23px 0px rgba(" + Object(u.j)(u.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(u.j)(u.q) + ", 0.2)",
                        },
                    },
                    simple: {
                        "&,&:focus,&:hover": { color: u.z, background: "transparent", boxShadow: "none" },
                        "&$primary": { "&,&:focus,&:hover,&:visited": { color: u.p[0] } },
                        "&$info": { "&,&:focus,&:hover,&:visited": { color: u.l[0] } },
                        "&$success": { "&,&:focus,&:hover,&:visited": { color: u.u[0] } },
                        "&$warning": { "&,&:focus,&:hover,&:visited": { color: u.y[0] } },
                        "&$rose": { "&,&:focus,&:hover,&:visited": { color: u.s[0] } },
                        "&$danger": { "&,&:focus,&:hover,&:visited": { color: u.d[0] } },
                        "&$twitter": { "&,&:focus,&:hover,&:visited": { color: u.w } },
                        "&$facebook": { "&,&:focus,&:hover,&:visited": { color: u.g } },
                        "&$google": { "&,&:focus,&:hover,&:visited": { color: u.h } },
                        "&$linkedin": { "&,&:focus,&:hover,&:visited": { color: u.m } },
                        "&$pinterest": { "&,&:focus,&:hover,&:visited": { color: u.n } },
                        "&$youtube": { "&,&:focus,&:hover,&:visited": { color: u.A } },
                        "&$tumblr": { "&,&:focus,&:hover,&:visited": { color: u.v } },
                        "&$github": { "&,&:focus,&:hover,&:visited": { color: u.i[7] } },
                        "&$behance": { "&,&:focus,&:hover,&:visited": { color: u.a } },
                        "&$dribbble": { "&,&:focus,&:hover,&:visited": { color: u.f } },
                        "&$reddit": { "&,&:focus,&:hover,&:visited": { color: u.q } },
                    },
                    transparent: { "&,&:focus,&:hover": { color: "inherit", background: "transparent", boxShadow: "none" } },
                    disabled: { opacity: "0.65", pointerEvents: "none" },
                    lg: { "&$justIcon": { "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": { marginTop: "-4px" } }, padding: "1.125rem 2.25rem", fontSize: "0.875rem", lineHeight: "1.333333", borderRadius: "0.2rem" },
                    sm: { "&$justIcon": { "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": { marginTop: "1px" } }, padding: "0.40625rem 1.25rem", fontSize: "0.6875rem", lineHeight: "1.5", borderRadius: "0.2rem" },
                    round: { borderRadius: "30px" },
                    block: { width: "100% !important" },
                    link: { "&,&:hover,&:focus": { backgroundColor: "transparent", color: u.i[0], boxShadow: "none" } },
                    justIcon: {
                        paddingLeft: "12px",
                        paddingRight: "12px",
                        fontSize: "20px",
                        height: "41px",
                        minWidth: "41px",
                        width: "41px",
                        "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": { marginRight: "0px" },
                        "&$lg": { height: "57px", minWidth: "57px", width: "57px", lineHeight: "56px", "& .fab,& .fas,& .far,& .fal,& .material-icons": { fontSize: "32px", lineHeight: "56px" }, "& svg": { width: "32px", height: "32px" } },
                        "&$sm": { height: "30px", minWidth: "30px", width: "30px", "& .fab,& .fas,& .far,& .fal,& .material-icons": { fontSize: "17px", lineHeight: "29px" }, "& svg": { width: "17px", height: "17px" } },
                    },
                },
                h = Object(l.a)(b),
                g = c.a.forwardRef(function (e, t) {
                    var a,
                        r = h(),
                        i = e.color,
                        l = e.round,
                        u = e.children,
                        b = e.fullWidth,
                        g = e.disabled,
                        m = e.simple,
                        d = e.size,
                        x = e.block,
                        f = e.link,
                        j = e.justIcon,
                        O = e.className,
                        E = e.muiClasses,
                        y = Object(o.a)(e, ["color", "round", "children", "fullWidth", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]),
                        v = s()(
                            ((a = {}),
                            Object(n.a)(a, r.button, !0),
                            Object(n.a)(a, r[d], d),
                            Object(n.a)(a, r[i], i),
                            Object(n.a)(a, r.round, l),
                            Object(n.a)(a, r.fullWidth, b),
                            Object(n.a)(a, r.disabled, g),
                            Object(n.a)(a, r.simple, m),
                            Object(n.a)(a, r.block, x),
                            Object(n.a)(a, r.link, f),
                            Object(n.a)(a, r.justIcon, j),
                            Object(n.a)(a, O, O),
                            a)
                        );
                    return c.a.createElement(p.a, Object.assign({}, y, { ref: t, classes: E, className: v }), u);
                });
            t.a = g;
        },
        44: function (e, t, a) {
            "use strict";
            var n = a(11),
                o = a(1),
                r = a.n(o),
                c = a(7),
                i = a.n(c),
                s = a(174),
                l = a(198),
                p = a(177),
                u = a(10),
                b = a(14),
                h = a(2),
                g = {
                    root: Object(b.a)({}, h.e, {
                        flexWrap: "unset",
                        position: "relative",
                        padding: "20px 15px",
                        lineHeight: "20px",
                        marginBottom: "20px",
                        fontSize: "14px",
                        backgroundColor: "white",
                        color: h.i[6],
                        borderRadius: "3px",
                        boxShadow: "0 12px 20px -10px rgba(" + Object(h.j)(h.z) + ", 0.28), 0 4px 20px 0px rgba(" + Object(h.j)(h.b) + ", 0.12), 0 7px 8px -5px rgba(" + Object(h.j)(h.z) + ", 0.2)",
                    }),
                    top20: { top: "20px" },
                    top40: { top: "40px" },
                    info: Object(b.a)({ backgroundColor: h.l[3], color: h.z }, h.k),
                    success: Object(b.a)({ backgroundColor: h.u[3], color: h.z }, h.t),
                    warning: Object(b.a)({ backgroundColor: h.y[3], color: h.z }, h.x),
                    danger: Object(b.a)({ backgroundColor: h.d[3], color: h.z }, h.c),
                    primary: Object(b.a)({ backgroundColor: h.p[3], color: h.z }, h.o),
                    rose: Object(b.a)({ backgroundColor: h.s[3], color: h.z }, h.r),
                    message: { padding: "0", display: "block", maxWidth: "89%" },
                    close: { width: "11px", height: "11px" },
                    iconButton: { width: "24px", height: "24px", padding: "0" },
                    icon: {
                        width: "38px",
                        height: "38px",
                        display: "block",
                        left: "15px",
                        position: "absolute",
                        marginTop: "-39px",
                        fontSize: "20px",
                        backgroundColor: h.z,
                        padding: "9px",
                        borderRadius: "50%",
                        maxWidth: "38px",
                        boxShadow: "0 10px 30px -12px rgba(" + Object(h.j)(h.b) + ", 0.42), 0 4px 25px 0px rgba(" + Object(h.j)(h.b) + ", 0.12), 0 8px 10px -5px rgba(" + Object(h.j)(h.b) + ", 0.2)",
                    },
                    infoIcon: { color: h.u[3] },
                    successIcon: { color: h.u[3] },
                    warningIcon: { color: h.y[3] },
                    dangerIcon: { color: h.d[3] },
                    primaryIcon: { color: h.p[3] },
                    roseIcon: { color: h.s[3] },
                    iconMessage: { paddingLeft: "50px", display: "block" },
                };
            a.d(t, "a", function () {
                return d;
            });
            var m = Object(s.a)(g);
            function d(e) {
                var t,
                    a = m(),
                    o = e.message,
                    c = e.color,
                    s = e.close,
                    b = e.icon,
                    h = e.place,
                    g = e.open,
                    d = [],
                    x = i()(Object(n.a)({}, a.iconMessage, void 0 !== b));
                void 0 !== s &&
                    (d = [
                        r.a.createElement(
                            p.a,
                            {
                                className: a.iconButton,
                                key: "close",
                                "aria-label": "Close",
                                color: "inherit",
                                onClick: function () {
                                    return e.closeNotification();
                                },
                            },
                            r.a.createElement(u.i, { className: a.close })
                        ),
                    ]);
                var f = i()(
                    ((t = {}),
                    Object(n.a)(t, a.icon, a.icon),
                    Object(n.a)(t, a.infoIcon, "info" === c),
                    Object(n.a)(t, a.successIcon, "success" === c),
                    Object(n.a)(t, a.warningIcon, "warning" === c),
                    Object(n.a)(t, a.dangerIcon, "danger" === c),
                    Object(n.a)(t, a.primaryIcon, "primary" === c),
                    Object(n.a)(t, a.roseIcon, "rose" === c),
                    t)
                );
                return r.a.createElement(l.a, {
                    classes: { anchorOriginTopCenter: a.top20, anchorOriginTopRight: a.top40, anchorOriginTopLeft: a.top40 },
                    anchorOrigin: { vertical: -1 === h.indexOf("t") ? "bottom" : "top", horizontal: -1 !== h.indexOf("l") ? "left" : -1 !== h.indexOf("c") ? "center" : "right" },
                    open: g,
                    message: r.a.createElement("div", null, void 0 !== b ? r.a.createElement(e.icon, { className: f }) : null, r.a.createElement("span", { className: x }, o)),
                    action: d,
                    ContentProps: { classes: { root: a.root + " " + a[c], message: a.message } },
                });
            }
            d.defaultProps = { color: "info" };
        },
        45: function (e, t, a) {
            "use strict";
            var n = a(1),
                o = a.n(n),
                r = a(143);
            t.a = function (e) {
                var t = e.color,
                    a = void 0 === t ? "primary" : t;
                return o.a.createElement("div", { className: "cr-page-spinner" }, o.a.createElement(r.a, { color: a }));
            };
        },
        46: function (e, t, a) {
            "use strict";
            var n = a(145),
                o = a(12),
                r = a(1),
                c = a.n(r),
                i = Object(o.a)(function (e) {
                    return {
                        root: { textTransform: "none", color: "#black", fontWeight: e.typography.fontWeightRegular, fontSize: e.typography.pxToRem(15), marginRight: e.spacing(1), "&:focus": { opacity: 1, outline: "none!important" } },
                    };
                })(function (e) {
                    return c.a.createElement(n.a, Object.assign({ disableRipple: !0 }, e));
                });
            t.a = i;
        },
        52: function (e, t, a) {
            e.exports = a.p + "static/media/logo_200.ab976149.png";
        },
        56: function (e, t, a) {
            "use strict";
            var n = a(11),
                o = a(18),
                r = a(7),
                c = a.n(r),
                i = a(1),
                s = a.n(i),
                l = (a(93), { h1: "h1", h2: "h2", h3: "h3", h4: "h4", h5: "h5", h6: "h6", "display-1": "h1", "display-2": "h1", "display-3": "h1", "display-4": "h1", p: "p", lead: "p", blockquote: "blockquote" }),
                p = function (e) {
                    var t,
                        a = e.tag,
                        r = e.className,
                        i = e.type,
                        p = Object(o.a)(e, ["tag", "className", "type"]),
                        u = c()(Object(n.a)({}, i, !!i), r);
                    return (t = a || (!a && l[i] ? l[i] : "p")), s.a.createElement(t, Object.assign({}, p, { className: u }));
                };
            (p.defaultProps = { type: "p" }), (t.a = p);
        },
        73: function (e, t, a) {
            e.exports = a.p + "static/media/sidebar-4.80d4a4e5.jpg";
        },
        75: function (e, t, a) {
            "use strict";
            var n = a(18),
                o = a(1),
                r = a.n(o),
                c = (a(93), a(31)),
                i = a(56),
                s = c.a.create("page"),
                l = function (e) {
                    var t = e.title,
                        a = e.breadcrumbs,
                        o = e.tag,
                        c = e.className,
                        l = e.children,
                        p = Object(n.a)(e, ["title", "breadcrumbs", "tag", "className", "children"]),
                        u = s.b("px-3", c);
                    return r.a.createElement(
                        o,
                        Object.assign({ className: u }, p),
                        r.a.createElement("div", { className: s.e("header") }, t && "string" === typeof t ? r.a.createElement(i.a, { type: "h4", className: s.e("title") }, t) : t, a && a),
                        l
                    );
                };
            (l.defaultProps = { tag: "div", title: "" }), (t.a = l);
        },
        77: function (e, t, a) {
            "use strict";
            var n = a(12),
                o = a(147),
                r = a(1),
                c = a.n(r),
                i = Object(n.a)({ indicator: { marginLeft: "auto", marginRight: "auto", display: "flex", justifyContent: "center", backgroundColor: "transparent", "& > span": { maxWidth: 40, width: "100%", backgroundColor: "#16bdf9" } } })(
                    function (e) {
                        return c.a.createElement(o.a, Object.assign({}, e, { TabIndicatorProps: { children: c.a.createElement("span", null) } }));
                    }
                );
            t.a = i;
        },
        79: function (e, t, a) {
            "use strict";
            function n(e) {
                var t = !1;
                return {
                    cancel: function () {
                        t = !0;
                    },
                    setState: function (a) {
                        t || e.setState(a);
                    },
                };
            }
            a.d(t, "a", function () {
                return n;
            });
        },
        93: function (e, t, a) {
            "use strict";
            var n = a(14),
                o = a(3),
                r = a.n(o);
            Object(n.a)({}, r.a, { ID: r.a.oneOfType([r.a.string, r.a.number]).isRequired, component: r.a.oneOfType([r.a.string, r.a.func]), date: r.a.oneOfType([r.a.instanceOf(Date), r.a.string]) });
        },
    },
    [[109, 2, 3]],
]);
//# sourceMappingURL=main.ddf71476.chunk.js.map
