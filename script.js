function(t, e, n) {
  "use strict";
  var r = n(8),
    i = n(54);
  r.define("navbar", t.exports = function(t, e) {
    var n, o, a, u, c = {},
      s = t.tram,
      f = t(window),
      l = t(document),
      d = r.env(),
      p = '<div class="w-nav-overlay" data-wf-ignore />',
      v = ".w-nav",
      E = "w--open",
      h = "w--nav-menu-open",
      _ = "w--nav-link-open",
      g = i.triggers,
      y = t();

    function I() {
      r.resize.off(m)
    }

    function m() {
      o.each(w)
    }

    function T(n, i) {
      var o = t(i),
        c = t.data(i, v);
      c || (c = t.data(i, v, {
        open: !1,
        el: o,
        config: {}
      })), c.menu = o.find(".w-nav-menu"), c.links = c.menu.find(".w-nav-link"), c.dropdowns = c.menu.find(".w-dropdown"), c.button = o.find(".w-nav-button"), c.container = o.find(".w-container"), c.outside = function(e) {
        e.outside && l.off("tap" + v, e.outside);
        return function(n) {
          var r = t(n.target);
          u && r.closest(".w-editor-bem-EditorOverlay").length || R(e, r)
        }
      }(c), c.el.off(v), c.button.off(v), c.menu.off(v), A(c), a ? (S(c), c.el.on("setting" + v, function(t) {
        return function(n, r) {
          r = r || {};
          var i = f.width();
          A(t), !0 === r.open && N(t, !0), !1 === r.open && x(t, !0), t.open && e.defer(function() {
            i !== f.width() && b(t)
          })
        }
      }(c))) : (! function(e) {
        if (e.overlay) return;
        e.overlay = t(p).appendTo(e.el), e.parent = e.menu.parent(), x(e, !0)
      }(c), c.button.on("tap" + v, function(t) {
        return e.debounce(function() {
          t.open ? x(t) : N(t)
        })
      }(c)), c.menu.on("click" + v, "a", function(e) {
        return function(n) {
          var i = t(this),
            o = i.attr("href");
          r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && x(e) : n.preventDefault()
        }
      }(c))), w(n, i)
    }

    function O(e, n) {
      var r = t.data(n, v);
      r && (S(r), t.removeData(n, v))
    }

    function S(t) {
      t.overlay && (x(t, !0), t.overlay.remove(), t.overlay = null)
    }

    function A(t) {
      var n = {},
        r = t.config || {},
        i = n.animation = t.el.attr("data-animation") || "default";
      n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(b, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
      var o = t.el.attr("data-duration");
      n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
    }

    function b(t) {
      t.open && (x(t, !0), N(t, !0))
    }
    c.ready = c.design = c.preview = function() {
      if (a = d && r.env("design"), u = r.env("editor"), n = t(document.body), !(o = l.find(v)).length) return;
      o.each(T), I(), r.resize.on(m)
    }, c.destroy = function() {
      y = t(), I(), o && o.length && o.each(O)
    };
    var R = e.debounce(function(t, e) {
      if (t.open) {
        var n = e.closest(".w-nav-menu");
        t.menu.is(n) || x(t)
      }
    });
