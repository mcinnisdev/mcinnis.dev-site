/* @ds-bundle: {"format":4,"namespace":"McinnisDevDesignSystem_a1d2f2","components":[{"name":"Callout","sourcePath":"components/content/Callout.jsx"},{"name":"PostListItem","sourcePath":"components/content/PostListItem.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Kicker","sourcePath":"components/core/Kicker.jsx"},{"name":"StatusBadge","sourcePath":"components/core/StatusBadge.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Card","sourcePath":"components/layout/Card.jsx"},{"name":"SectionHeader","sourcePath":"components/layout/SectionHeader.jsx"},{"name":"SlantRule","sourcePath":"components/layout/SlantRule.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"TextLink","sourcePath":"components/navigation/TextLink.jsx"}],"sourceHashes":{"components/content/Callout.jsx":"a25b0bc90645","components/content/PostListItem.jsx":"c950e7d4904f","components/content/ProjectCard.jsx":"df7172411884","components/core/Button.jsx":"9c97ee4638d4","components/core/Icon.jsx":"208bc979e449","components/core/IconButton.jsx":"828a7f4fdaa7","components/core/Kicker.jsx":"80e57fd49dcf","components/core/StatusBadge.jsx":"5e9983876317","components/core/Tag.jsx":"ca8a374b43aa","components/layout/Card.jsx":"96b76d2a3215","components/layout/SectionHeader.jsx":"3c2e392e8185","components/layout/SlantRule.jsx":"807b6f5091cd","components/navigation/NavBar.jsx":"2cb505c1a9fa","components/navigation/SiteFooter.jsx":"10805c9a0c65","components/navigation/TextLink.jsx":"978d4b26a7b1","ui_kits/mcinnis-dev/AboutScreen.jsx":"551d2fe6618b","ui_kits/mcinnis-dev/BlogScreen.jsx":"653e21c7e21f","ui_kits/mcinnis-dev/HomeScreen.jsx":"9199415f194c","ui_kits/mcinnis-dev/ProjectDetailScreen.jsx":"78b67761bd73","ui_kits/mcinnis-dev/ProjectsScreen.jsx":"4ba13143d85c","ui_kits/mcinnis-dev/Shell.jsx":"17b88271ea7e","ui_kits/mcinnis-dev/data.js":"08f112c3d873"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.McinnisDevDesignSystem_a1d2f2 = window.McinnisDevDesignSystem_a1d2f2 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const CDN = 'https://cdn.jsdelivr.net/npm/lucide-static@0.544.0/icons/';

/** Lucide icon rendered as a currentColor mask — no inline SVG, no icon font. */
function Icon({
  name,
  size = 18,
  strokeAlign,
  style,
  label,
  ...rest
}) {
  const url = `url("${CDN}${name}.svg")`;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: label ? 'img' : 'presentation',
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      width: size,
      height: size,
      flex: '0 0 auto',
      backgroundColor: 'currentColor',
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      verticalAlign: strokeAlign === 'text' ? '-.15em' : 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  note: {
    fg: 'var(--text-body)',
    bg: 'var(--surface-sunken)',
    edge: 'var(--border-strong)',
    icon: 'info'
  },
  accent: {
    fg: 'var(--terracotta-200)',
    bg: 'var(--surface-accent-soft)',
    edge: 'var(--terracotta-500)',
    icon: 'sparkle'
  },
  archived: {
    fg: 'var(--text-muted)',
    bg: 'var(--surface-sunken)',
    edge: 'var(--ink-500)',
    icon: 'archive'
  }
};

/** Inline aside inside prose — disclaimers, archive notices, build-log asides. */
function Callout({
  tone = 'note',
  title,
  icon,
  children,
  style,
  ...rest
}) {
  const t = tones[tone] || tones.note;
  return /*#__PURE__*/React.createElement("aside", _extends({
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      padding: 'var(--space-4)',
      background: t.bg,
      color: t.fg,
      borderLeft: '3px solid ' + t.edge,
      borderRadius: '0 var(--radius-md) var(--radius-md) 0',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.icon,
    size: 18,
    style: {
      marginTop: 2,
      opacity: .8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-semibold)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, children)));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Callout.jsx", error: String((e && e.message) || e) }); }

// components/content/PostListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** A writing entry: mono date + project tag, Space Grotesk title, serif standfirst. */
function PostListItem({
  date,
  project,
  title,
  excerpt,
  onOpen,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      padding: 'var(--space-4) 0',
      borderBottom: '1px solid var(--border-hairline)',
      cursor: onOpen ? 'pointer' : 'default',
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-meta)'
    }
  }, /*#__PURE__*/React.createElement("span", null, date), project && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 3,
      height: 3,
      borderRadius: 999,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, project))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-xl)',
      letterSpacing: 'var(--tracking-tight)',
      color: hover ? 'var(--text-accent)' : 'var(--text-display)',
      display: 'flex',
      alignItems: 'baseline',
      gap: 'var(--space-2)'
    }
  }, title, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16,
    style: {
      opacity: hover ? 1 : 0,
      transform: hover ? 'none' : 'translate(-4px,4px)',
      transition: 'var(--transition-control)'
    }
  })), excerpt && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)'
    }
  }, excerpt));
}
Object.assign(__ds_scope, { PostListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/PostListItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const sizes = {
  sm: {
    padding: '0 var(--space-3)',
    height: 32,
    font: 'var(--text-sm)',
    gap: 6,
    icon: 14
  },
  md: {
    padding: '0 var(--space-4)',
    height: 40,
    font: 'var(--text-base)',
    gap: 8,
    icon: 16
  },
  lg: {
    padding: '0 var(--space-5)',
    height: 48,
    font: 'var(--text-md)',
    gap: 10,
    icon: 18
  }
};
function skin(variant, hover) {
  switch (variant) {
    case 'primary':
      return {
        background: hover ? 'var(--terracotta-400)' : 'var(--terracotta-500)',
        color: 'var(--text-on-accent)',
        border: '1px solid transparent',
        boxShadow: hover ? 'var(--shadow-accent-glow)' : 'var(--shadow-1)'
      };
    case 'secondary':
      return {
        background: hover ? 'var(--ink-700)' : 'var(--surface-raised)',
        color: 'var(--text-display)',
        border: '1px solid ' + (hover ? 'var(--border-strong)' : 'var(--border-subtle)'),
        boxShadow: 'var(--shadow-1)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--surface-accent-soft)' : 'transparent',
        color: 'var(--text-accent)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    case 'inverse':
      return {
        background: hover ? 'var(--paper-0)' : 'var(--paper-50)',
        color: 'var(--ink-900)',
        border: '1px solid transparent',
        boxShadow: 'none'
      };
    default:
      return {};
  }
}

/** The brand's action control: squared-off, terracotta for the one primary action per view. */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = sizes[size] || sizes.md;
  const Tag = href ? 'a' : 'button';
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.icon
  }) : null;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    disabled: !href && disabled ? true : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      borderRadius: 'var(--radius-control)',
      fontFamily: 'var(--font-ui)',
      fontSize: s.font,
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-tight)',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'var(--transition-control)',
      transform: press && !disabled ? 'scale(var(--press-scale))' : 'none',
      ...skin(variant, hover && !disabled),
      ...style
    }
  }, rest), iconPosition === 'left' && glyph, /*#__PURE__*/React.createElement("span", null, children), iconPosition === 'right' && glyph);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const boxes = {
  sm: 30,
  md: 36,
  lg: 44
};

/** Square, quiet icon-only control — nav toggles, external links, copy actions. */
function IconButton({
  icon,
  size = 'md',
  variant = 'quiet',
  label,
  href,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const box = boxes[size] || boxes.md;
  const Tag = href ? 'a' : 'button';
  const skins = {
    quiet: {
      background: hover ? 'var(--surface-sunken)' : 'transparent',
      color: hover ? 'var(--text-display)' : 'var(--text-muted)',
      border: '1px solid transparent'
    },
    outline: {
      background: hover ? 'var(--surface-sunken)' : 'var(--surface-raised)',
      color: 'var(--text-display)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: hover ? 'var(--terracotta-600)' : 'var(--terracotta-500)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    "aria-label": label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: box,
      height: box,
      borderRadius: 'var(--radius-control)',
      cursor: 'pointer',
      transition: 'var(--transition-control)',
      ...skins[variant],
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Kicker.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono uppercase eyebrow that opens nearly every section on the site. */
function Kicker({
  children,
  icon,
  tone = 'default',
  style,
  ...rest
}) {
  const colors = {
    default: 'var(--text-meta)',
    accent: 'var(--text-accent)',
    inverse: 'var(--ink-200)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: colors[tone],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12
  }), children);
}
Object.assign(__ds_scope, { Kicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Kicker.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const map = {
  active: {
    fg: 'var(--status-active-fg)',
    bg: 'var(--status-active-bg)',
    label: 'Active'
  },
  wip: {
    fg: 'var(--status-wip-fg)',
    bg: 'var(--status-wip-bg)',
    label: 'In progress'
  },
  archived: {
    fg: 'var(--status-archived-fg)',
    bg: 'var(--status-archived-bg)',
    label: 'Archived'
  },
  info: {
    fg: 'var(--status-info-fg)',
    bg: 'var(--status-info-bg)',
    label: 'Note'
  }
};

/** Project lifecycle badge: dot + mono label. */
function StatusBadge({
  status = 'active',
  children,
  dot = true,
  style,
  ...rest
}) {
  const s = map[status] || map.active;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-pill)',
      background: s.bg,
      color: s.fg,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children || s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono, uppercase-free tech tag — the stack chips under a project. */
function Tag({
  children,
  tone = 'neutral',
  style,
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      color: 'var(--terracotta-700)',
      border: '1px solid var(--terracotta-100)'
    },
    inverse: {
      background: 'rgba(250,247,244,.06)',
      color: 'var(--text-on-inverse-muted)',
      border: '1px solid var(--border-inverse)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 var(--space-2)',
      borderRadius: 'var(--radius-xs)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-normal)',
      whiteSpace: 'nowrap',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * The site's signature block. An ink slab cut by a full-height 18.4° terracotta
 * wedge on the left carrying the project's index number; the wedge widens and
 * the hatch field brightens on hover. Title is display-scale, not card-scale.
 */
function ProjectCard({
  index = 1,
  title,
  kicker,
  status = 'active',
  statusLabel,
  description,
  tags = [],
  href,
  featured = false,
  onOpen,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const wedge = featured ? 108 : 84;
  const parts = String(title).split(' — ');
  const name = parts[0];
  const rest_ = parts.slice(1).join(' — ');
  return /*#__PURE__*/React.createElement("article", _extends({
    onClick: onOpen,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'stretch',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid ' + (hover ? 'var(--terracotta-500)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-card)',
      boxShadow: hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
      transform: hover ? 'var(--lift-hover)' : 'none',
      transition: 'var(--transition-control)',
      cursor: onOpen ? 'pointer' : 'default',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: hover ? wedge + 10 : wedge,
      flex: '0 0 auto',
      overflow: 'hidden',
      transition: 'width var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      clipPath: 'polygon(0 0, 100% 0, 58% 100%, 0 100%)',
      background: featured ? 'var(--terracotta-500)' : 'var(--surface-sunken)',
      backgroundImage: featured ? 'none' : `repeating-linear-gradient(108.4deg, ${hover ? 'rgba(224,120,80,.55)' : 'rgba(250,247,244,.16)'} 0 1px, transparent 1px 8px)`,
      transition: 'background-image var(--dur-base) var(--ease-standard)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      paddingRight: '22%',
      fontFamily: 'var(--font-mono)',
      fontSize: featured ? 'var(--text-2xl)' : 'var(--text-xl)',
      fontWeight: 'var(--weight-medium)',
      color: featured ? 'var(--ink-900)' : hover ? 'var(--terracotta-400)' : 'var(--ink-300)',
      transition: 'var(--transition-control)'
    }
  }, String(index).padStart(2, '0'))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      padding: featured ? 'var(--space-6)' : 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, kicker && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-meta)'
    }
  }, kicker), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  }, statusLabel)), /*#__PURE__*/React.createElement("h3", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      fontFamily: 'var(--font-display)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-snug)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: featured ? 'var(--text-3xl)' : 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      color: hover ? 'var(--terracotta-400)' : 'var(--text-display)',
      transition: 'var(--transition-control)'
    }
  }, name), rest_ && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: featured ? 'var(--text-lg)' : 'var(--text-md)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, rest_)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: featured ? 'var(--text-lg)' : 'var(--text-md)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: '62ch'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-4)',
      flexWrap: 'wrap',
      marginTop: 'auto',
      paddingTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      flex: 1,
      minWidth: 0
    }
  }, tags.slice(0, featured ? 9 : 5).map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)), tags.length > (featured ? 9 : 5) && /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    tone: "accent"
  }, "+", tags.length - (featured ? 9 : 5))), href && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      flexShrink: 0,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: hover ? 'var(--terracotta-400)' : 'var(--text-meta)',
      transition: 'var(--transition-control)'
    }
  }, "View ", /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-right",
    size: 14,
    style: {
      transform: hover ? 'translateX(3px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/layout/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** The brand's container: ink slab, hairline border, 14px radius, lifts 2px on hover when interactive. */
function Card({
  variant = 'raised',
  interactive = false,
  padding = 'var(--space-5)',
  accentEdge = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const skins = {
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-body)'
    },
    accent: {
      background: 'var(--surface-accent-soft)',
      border: '1px solid var(--terracotta-700)',
      color: 'var(--text-body)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-strong)',
      color: 'var(--text-body)'
    },
    paper: {
      background: 'var(--paper-50)',
      border: '1px solid var(--paper-200)',
      color: 'var(--ink-700)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding,
      borderRadius: 'var(--radius-card)',
      boxShadow: interactive && hover ? 'var(--shadow-2)' : 'var(--shadow-1)',
      transform: interactive && hover ? 'var(--lift-hover)' : 'none',
      transition: 'var(--transition-control)',
      ...skins[variant],
      ...style
    }
  }, rest), accentEdge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      width: 3,
      background: 'var(--terracotta-500)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Card.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Kicker + title + optional trailing action, above a hairline rule. */
function SectionHeader({
  kicker,
  title,
  description,
  action,
  tone = 'default',
  style,
  ...rest
}) {
  const inverse = tone === 'inverse';
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, kicker && /*#__PURE__*/React.createElement(__ds_scope.Kicker, {
    tone: inverse ? 'inverse' : 'default'
  }, kicker), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-2xl)',
      color: inverse ? 'var(--text-on-inverse)' : 'var(--text-display)',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, title)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0
    }
  }, action)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)'
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border-hairline)',
      marginTop: 'var(--space-1)'
    }
  }));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/layout/SlantRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Repeating 18.4° hatch lifted from the logo's stroke angle — the brand's only decorative texture. */
function SlantRule({
  height = 10,
  density = 8,
  tone = 'default',
  style,
  ...rest
}) {
  const color = tone === 'accent' ? 'var(--terracotta-600)' : tone === 'strong' ? 'rgba(250,247,244,.34)' : 'rgba(250,247,244,.16)';
  return /*#__PURE__*/React.createElement("div", _extends({
    "aria-hidden": "true",
    style: {
      height,
      backgroundImage: `repeating-linear-gradient(108.4deg, ${color} 0 1px, transparent 1px ${density}px)`,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { SlantRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SlantRule.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Site header. Ink, hairline base, and the brand's slanted-tab nav: each link
 * sits in an 18.4°-skewed slab (the logo's stroke angle) that fills terracotta
 * when active. Labels stay upright and high-contrast.
 */
function NavBar({
  items = [],
  current,
  onNavigate,
  logoSrc = 'assets/logo-paper.svg',
  wordmark = 'Nick McInnis',
  style,
  ...rest
}) {
  const [hovered, setHovered] = useState(null);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      minHeight: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--surface-veil)',
      backdropFilter: 'var(--blur-veil)',
      WebkitBackdropFilter: 'var(--blur-veil)',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-between',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0] && items[0].id);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textDecoration: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "",
    width: "28",
    height: "28",
    style: {
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-md)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--paper-0)'
    }
  }, wordmark), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-wide)',
      color: 'var(--paper-300)'
    }
  }, "mcinnis.dev"))), /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Primary",
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 'var(--space-1)'
    }
  }, items.map(it => {
    const active = it.id === current;
    const hot = hovered === it.id;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: it.href || '#',
      "aria-current": active ? 'page' : undefined,
      onClick: e => {
        e.preventDefault();
        onNavigate && onNavigate(it.id);
      },
      onMouseEnter: () => setHovered(it.id),
      onMouseLeave: () => setHovered(null),
      style: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '0 var(--space-4)',
        textDecoration: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '.1em',
        textTransform: 'uppercase',
        color: active ? 'var(--ink-900)' : hot ? 'var(--paper-0)' : 'var(--paper-100)',
        transition: 'var(--transition-control)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        inset: '12px 2px',
        background: active ? 'var(--terracotta-500)' : hot ? 'rgba(250,247,244,.12)' : 'transparent',
        transform: 'skewX(var(--brand-slant))',
        borderRadius: 'var(--radius-xs)',
        transition: 'var(--transition-control)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'relative'
      }
    }, it.label), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 6,
        right: 6,
        bottom: 0,
        height: 3,
        background: 'var(--terracotta-500)',
        transform: active ? 'none' : 'scaleX(0)',
        transformOrigin: 'left',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }));
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Footer on the deepest ink band: contact line, social links, copyright, hatch edge. */
function SiteFooter({
  email = 'nick@mcinnis.dev',
  links = [],
  note = '© Nick McInnis',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("footer", _extends({
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.SlantRule, {
    height: 10,
    density: 7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter-inline) var(--space-7)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-6)',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--paper-300)'
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + email,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--paper-50)',
      textDecoration: 'none',
      letterSpacing: 'var(--tracking-tight)'
    }
  }, email)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.label,
    href: l.href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--paper-200)',
      textDecoration: 'none'
    }
  }, l.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: l.icon,
    size: 14
  }), l.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--ink-300)'
    }
  }, note))));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Inline link: terracotta, underline grows to full opacity on hover. */
function TextLink({
  children,
  href,
  external = false,
  tone = 'accent',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const color = tone === 'quiet' ? hover ? 'var(--text-accent)' : 'var(--text-body)' : hover ? 'var(--text-link-hover)' : 'var(--text-link)';
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    target: external ? '_blank' : undefined,
    rel: external ? 'noreferrer' : undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'baseline',
      gap: 4,
      color,
      textDecoration: 'underline',
      textDecorationColor: hover ? 'currentColor' : 'color-mix(in oklab, currentColor 35%, transparent)',
      textUnderlineOffset: 3,
      transition: 'var(--transition-control)',
      ...style
    }
  }, rest), children, external && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 13,
    strokeAlign: "text"
  }));
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TextLink.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/AboutScreen.jsx
try { (() => {
const {
  TextLink,
  Card,
  Kicker,
  IconButton,
  SlantRule,
  Icon
} = window.McinnisDevDesignSystem_a1d2f2;
function AboutScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(HatchField, {
    density: 11
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '280px minmax(0,1fr)',
      gap: 'var(--space-8)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(PortraitSlot, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "github",
    label: "GitHub",
    variant: "outline",
    href: "https://github.com/mcinnisdev"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "mail",
    label: "Email",
    variant: "outline",
    href: "mailto:nick@mcinnis.dev"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "accent"
  }, "Nick McInnis \xB7 Michigan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.04em',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-display)'
    }
  }, "Ten years of fixing it,", /*#__PURE__*/React.createElement("br", null), "then building it properly."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", null, "I've been working in IT for over 10 years. I've touched just about everything \u2014 printers, M365 administration, network infrastructure, automations, complex web and desktop applications, and a lot of things in between that I'm probably forgetting."), /*#__PURE__*/React.createElement("p", null, "These days I'm most interested in building things that actually work and last: practical tools, useful automations, and infrastructure that makes other work easier. I do a fair amount of work in the agentic AI space too, building assistants that do real operational work rather than just answer questions."), /*#__PURE__*/React.createElement("p", null, "This site is a landing pad for the kind of work I do. Some of it is current, some of it is archived experiments \u2014 both stay here because both are part of how I learn. The ", /*#__PURE__*/React.createElement(TextLink, {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('projects');
    }
  }, "projects page"), " has the details.")), /*#__PURE__*/React.createElement(StatRow, {
    items: [['10+', 'Years in IT'], ['M365', 'Home turf'], ['Michigan', 'Based in']]
  }))))));
}
Object.assign(window, {
  AboutScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/AboutScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/BlogScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader,
  PostListItem,
  Kicker
} = window.McinnisDevDesignSystem_a1d2f2;
function BlogScreen({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(HatchField, {
    density: 11
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "accent"
  }, "Writing"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.04em',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-display)',
      marginTop: 'var(--space-3)'
    }
  }, "Notes from the build"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)',
      marginTop: 'var(--space-4)'
    }
  }, "Automation, agentic engineering, and the occasional detour into IT operations."))), /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-prose)",
    style: {
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", null, window.SITE.posts.map(p => /*#__PURE__*/React.createElement(PostListItem, _extends({
    key: p.id
  }, p, {
    onOpen: () => onNavigate('post')
  })))), /*#__PURE__*/React.createElement(Kicker, null, "Older posts land here as they're written")));
}
function PostScreen({
  onNavigate
}) {
  const post = window.SITE.posts[1];
  const {
    Button,
    Tag,
    Callout,
    TextLink
  } = window.McinnisDevDesignSystem_a1d2f2;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-prose)",
    style: {
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: () => onNavigate('blog'),
    style: {
      alignSelf: 'flex-start',
      marginLeft: 'calc(var(--space-4) * -1)'
    }
  }, "All posts"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-meta)'
    }
  }, /*#__PURE__*/React.createElement("span", null, post.date), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent)'
    }
  }, post.project)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-4xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.04em',
      lineHeight: 'var(--leading-snug)',
      color: 'var(--text-display)'
    }
  }, post.title)), /*#__PURE__*/React.createElement(Container, {
    width: "var(--container-prose)",
    style: {
      paddingBottom: 'var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      color: 'var(--text-display)'
    }
  }, post.excerpt), /*#__PURE__*/React.createElement("p", null, "Every site Ink builds reads its look from one file of CSS custom properties. Colours, type families, the spacing scale, radii \u2014 all of it sits in a single token sheet that the templates reference and never hard-code."), /*#__PURE__*/React.createElement(Callout, {
    tone: "accent",
    title: "The practical upshot"
  }, "Rebranding a site is editing one file. No template archaeology, no find-and-replace across partials."), /*#__PURE__*/React.createElement("p", null, "The trick is discipline about aliases. Base values name the raw material; semantic aliases name the job. Templates only ever reference the job, which is what makes a swap safe."), /*#__PURE__*/React.createElement("p", null, "The full token sheet ships with the starter \u2014 see ", /*#__PURE__*/React.createElement(TextLink, {
    href: "https://github.com/mcinnisdev",
    external: true
  }, "the repo"), ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      paddingTop: 'var(--space-4)',
      borderTop: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Tag, null, "Eleventy v3"), /*#__PURE__*/React.createElement(Tag, null, "Design tokens"), /*#__PURE__*/React.createElement(Tag, {
    tone: "accent"
  }, "ink"))));
}
Object.assign(window, {
  BlogScreen,
  PostScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/BlogScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Kicker,
  SectionHeader,
  SlantRule,
  ProjectCard,
  PostListItem,
  Tag
} = window.McinnisDevDesignSystem_a1d2f2;
function HomeScreen({
  onNavigate
}) {
  const S = window.SITE;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(HatchField, {
    density: 11
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: '6%',
      bottom: -40,
      width: 130,
      background: 'var(--terracotta-500)',
      transform: 'skewX(var(--brand-slant))',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: 'calc(6% + 150px)',
      bottom: -40,
      width: 26,
      background: 'var(--terracotta-700)',
      transform: 'skewX(var(--brand-slant))'
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'var(--space-10)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '62%',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    icon: "map-pin",
    tone: "accent"
  }, "Michigan \xB7 10+ years in IT"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-6xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.045em',
      lineHeight: '.94',
      color: 'var(--text-display)'
    }
  }, "Nick", /*#__PURE__*/React.createElement("br", null), "McInnis"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--terracotta-400)',
      lineHeight: 'var(--leading-snug)'
    }
  }, "I build things that work \u2014 and keep working."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)'
    }
  }, "Printers to M365 tenants, PowerShell to production web apps. Right now I'm deep in agentic engineering \u2014 building assistants that do real operational work instead of just answering questions."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right",
    onClick: () => onNavigate('projects')
  }, "See the work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: () => onNavigate('about')
  }, "About me")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-5)',
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement(StatRow, {
    items: [['10+', 'Years in IT'], ['2', 'Active projects'], ['M365', 'Home turf'], ['2026', 'Agentic focus']]
  }))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Currently building",
    title: "The work",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "arrow-right",
      onClick: () => onNavigate('projects')
    }, "All projects")
  }), /*#__PURE__*/React.createElement(ProjectCard, _extends({
    index: 1,
    featured: true
  }, S.projects[0], {
    description: S.projects[0].summary,
    href: "#",
    onOpen: () => onNavigate('project')
  })), /*#__PURE__*/React.createElement(ProjectCard, _extends({
    index: 2
  }, S.projects[1], {
    description: S.projects[1].summary,
    href: "#",
    onOpen: () => onNavigate('project')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      background: 'var(--surface-sunken)',
      borderTop: '1px solid var(--border-hairline)',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(SlantRule, {
    height: 10,
    density: 7
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-8)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Recent writing",
    title: "Notes from the build",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      size: "sm",
      icon: "arrow-right",
      onClick: () => onNavigate('blog')
    }, "All posts")
  }), S.posts.map(p => /*#__PURE__*/React.createElement(PostListItem, _extends({
    key: p.id
  }, p, {
    onOpen: () => onNavigate('post')
  }))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-card)',
      border: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      padding: 'var(--space-7)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-5)',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -20,
      right: -10,
      bottom: -20,
      width: 90,
      backgroundImage: 'repeating-linear-gradient(108.4deg, var(--border-subtle) 0 1px, transparent 1px 8px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "accent"
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, "Working on something interesting?")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    icon: "mail",
    iconPosition: "left",
    href: "mailto:nick@mcinnis.dev",
    style: {
      position: 'relative'
    }
  }, "nick@mcinnis.dev"))));
}
Object.assign(window, {
  HomeScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/ProjectDetailScreen.jsx
try { (() => {
const {
  Kicker,
  StatusBadge,
  Tag,
  Button,
  Card,
  Callout,
  TextLink,
  SlantRule
} = window.McinnisDevDesignSystem_a1d2f2;
function ProjectDetailScreen({
  onNavigate
}) {
  const p = window.SITE.projects[0];
  const [name, ...restParts] = p.title.split(' — ');
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(HatchField, {
    density: 11
  }), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: -40,
      right: '4%',
      bottom: -40,
      width: 96,
      background: 'var(--terracotta-500)',
      transform: 'skewX(var(--brand-slant))',
      opacity: .85
    }
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'var(--space-7)',
      paddingBottom: 'var(--space-7)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: () => onNavigate('projects'),
    style: {
      alignSelf: 'flex-start',
      marginLeft: 'calc(var(--space-4) * -1)'
    }
  }, "All projects"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--terracotta-400)'
    }
  }, "01"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: p.status
  }), /*#__PURE__*/React.createElement(Kicker, null, "Internal tool \xB7 Castle Rock Sky \xB7 2025")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '68%'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.04em',
      lineHeight: '.98',
      color: 'var(--text-display)'
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      fontWeight: 'var(--weight-regular)',
      color: 'var(--text-muted)',
      letterSpacing: 'var(--tracking-tight)',
      marginTop: 'var(--space-2)'
    }
  }, restParts.join(' — '))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)',
      marginTop: 'var(--space-2)'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 300px',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-body)',
      maxWidth: 'var(--measure-prose)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-xl)',
      color: 'var(--text-display)'
    }
  }, p.summary), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      marginTop: 'var(--space-3)',
      color: 'var(--text-display)'
    }
  }, "What it does"), /*#__PURE__*/React.createElement("p", null, "SkyOps pulls the pieces of an MSP toolchain into one operational view: tenant health from Graph, ticket volume, monitoring alerts, and billing reconciliation. Reports that used to be assembled by hand each month are generated on a schedule, and the common remediations run themselves."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      marginTop: 'var(--space-3)',
      color: 'var(--text-display)'
    }
  }, "How it's built"), /*#__PURE__*/React.createElement("p", null, "Azure Functions handle the scheduled and event-driven work; an Azure Static Web App serves the operator UI. Authentication and tenant access run through Entra, and everything that touches M365 goes through Graph \u2014 or PowerShell, where Graph has gaps."), /*#__PURE__*/React.createElement(Callout, {
    tone: "note",
    title: "Internal tool"
  }, "SkyOps runs inside Castle Rock Sky, so there's no public demo. The write-ups here cover architecture and the automation patterns."), /*#__PURE__*/React.createElement("p", null, "Source and deeper notes: ", /*#__PURE__*/React.createElement(TextLink, {
    href: "https://github.com/mcinnisdev",
    external: true
  }, "github.com/mcinnisdev"), ".")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)',
      position: 'sticky',
      top: 'calc(var(--nav-height) + var(--space-5))',
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "sunken",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, [['Status', 'Active'], ['Role', 'Service Desk Manager'], ['Org', 'Castle Rock Sky'], ['Since', '2025'], ['Stack', 'Azure · Graph · PS']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-meta)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-wide)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, v))))), /*#__PURE__*/React.createElement(Card, {
    variant: "accent",
    padding: "var(--space-4)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "accent"
  }, "Related writing"), window.SITE.posts.map(post => /*#__PURE__*/React.createElement("a", {
    key: post.id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('post');
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-base)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-display)',
      textDecoration: 'none',
      lineHeight: 'var(--leading-snug)'
    }
  }, post.title))))))));
}
Object.assign(window, {
  ProjectDetailScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/ProjectDetailScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeader,
  ProjectCard,
  Kicker,
  SlantRule
} = window.McinnisDevDesignSystem_a1d2f2;
function ProjectsScreen({
  onNavigate
}) {
  const S = window.SITE;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement(HatchField, {
    density: 11
  }), /*#__PURE__*/React.createElement(Container, {
    style: {
      position: 'relative',
      paddingTop: 'var(--space-9)',
      paddingBottom: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    tone: "accent"
  }, "Projects"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-5xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: '-.04em',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-display)',
      marginTop: 'var(--space-3)'
    }
  }, "Things I'm building"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-xl)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)',
      marginTop: 'var(--space-4)'
    }
  }, "Shipped, in flight, and retired. The failures stay up too \u2014 they're part of how I learn."))), /*#__PURE__*/React.createElement(Container, {
    style: {
      paddingTop: 'var(--space-8)',
      paddingBottom: 'var(--space-10)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Active",
    title: "In flight"
  }), S.projects.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id,
    index: i + 1,
    featured: i === 0
  }, p, {
    description: p.summary,
    href: "#",
    onOpen: () => onNavigate('project')
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    kicker: "Archived",
    title: "Retired experiments"
  }), S.archived.map((p, i) => /*#__PURE__*/React.createElement(ProjectCard, _extends({
    key: p.id,
    index: S.projects.length + i + 1
  }, p, {
    description: p.summary,
    href: "#",
    onOpen: () => onNavigate('project')
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-card)',
      border: '1px dashed var(--border-strong)',
      padding: 'var(--space-6)',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement(SlantRule, {
    height: 8,
    density: 9,
    style: {
      position: 'absolute',
      inset: '0 0 auto 0'
    }
  }), /*#__PURE__*/React.createElement(Kicker, null, "More coming"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-prose)',
      fontSize: 'var(--text-lg)',
      lineHeight: 'var(--leading-relaxed)',
      color: 'var(--text-muted)',
      maxWidth: 'var(--measure-prose)'
    }
  }, "Ten-plus years produces a lot of half-documented work \u2014 web apps, desktop tools, automations, M365 tenancy plumbing. The interesting ones get written up here over time."))));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/Shell.jsx
try { (() => {
const {
  NavBar,
  SiteFooter
} = window.McinnisDevDesignSystem_a1d2f2;
function Shell({
  current,
  onNavigate,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(NavBar, {
    items: window.SITE.nav,
    current: current,
    onNavigate: onNavigate,
    logoSrc: "../../assets/logo-paper.svg"
  }), /*#__PURE__*/React.createElement("main", null, children), /*#__PURE__*/React.createElement(SiteFooter, {
    email: "nick@mcinnis.dev",
    links: [{
      label: 'GitHub',
      href: 'https://github.com/mcinnisdev',
      icon: 'github'
    }, {
      label: 'Source',
      href: 'https://github.com/mcinnisdev/mcinnis.dev',
      icon: 'code'
    }]
  }));
}
function Container({
  children,
  width = 'var(--container-max)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: width,
      margin: '0 auto',
      padding: '0 var(--gutter-inline)',
      ...style
    }
  }, children);
}

/* A full-bleed 18.4° hatch field — the brand texture used as a background plate. */
function HatchField({
  density = 11,
  opacity = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      opacity,
      backgroundImage: `repeating-linear-gradient(108.4deg, rgba(250,247,244,.10) 0 1px, transparent 1px ${density}px)`,
      maskImage: 'radial-gradient(120% 90% at 80% 0%, #000 0%, transparent 72%)',
      WebkitMaskImage: 'radial-gradient(120% 90% at 80% 0%, #000 0%, transparent 72%)',
      ...style
    }
  });
}

/* Portrait slot — the real headshot (assets/headshot.jpg on the live site) was not
   supplied with the brand, so the kit shows a labelled slot at the same aspect. */
function PortraitSlot({
  ratio = '4 / 5',
  label = 'headshot.jpg'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-card)',
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      display: 'grid',
      placeItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: 'repeating-linear-gradient(108.4deg,rgba(250,247,244,.10) 0 1px,transparent 1px 9px)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-meta)',
      position: 'relative'
    }
  }, label));
}

/* Oversized mono stat — used in the hero rail and the about page. */
function StatRow({
  items
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${items.length},minmax(0,1fr))`,
      gap: 'var(--space-5)',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-4)'
    }
  }, items.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-display)'
    }
  }, v), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-meta)'
    }
  }, l))));
}
Object.assign(window, {
  Shell,
  Container,
  PortraitSlot,
  HatchField,
  StatRow
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/Shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/mcinnis-dev/data.js
try { (() => {
window.SITE = {
  nav: [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'projects',
    label: 'Projects'
  }, {
    id: 'blog',
    label: 'Blog'
  }, {
    id: 'about',
    label: 'About'
  }],
  projects: [{
    id: 'skyops',
    title: 'SkyOps — M365 Automation & Operations',
    status: 'active',
    kicker: 'Internal tool · Castle Rock Sky · 2025',
    summary: 'An internal automation platform for an MSP — unifying the M365, ticketing, monitoring, and billing toolchain into a single pane of glass with automated reporting and remediation. Built on Azure Functions and Static Web Apps in my role as Service Desk Manager at Castle Rock Sky.',
    tags: ['Azure Functions', 'Azure Static Web Apps', 'M365', 'PowerShell', 'Graph', 'Entra', 'RESTful APIs', 'MSP', 'Internal Tool']
  }, {
    id: 'ink',
    title: 'Ink — Markdown-Native CMS',
    status: 'active',
    kicker: 'Open source · 2026',
    summary: 'An open-source content management system built on Eleventy v3. Write in Markdown, scaffold with a CLI, customize with design tokens, edit in Obsidian, and deploy to any CDN. Includes a desktop app with live preview and AI writing assistant.',
    tags: ['Eleventy v3', 'Node.js', 'Electron', 'React', 'Markdown', 'Open Source']
  }],
  archived: [{
    id: 'coral',
    title: 'Coral — AI Agent Infrastructure',
    status: 'archived',
    statusLabel: 'Archived · Feb 2026',
    kicker: 'Experiment · ran 3 weeks',
    summary: 'A multi-agent AI system built on OpenClaw — six agents handling email, content publishing, outreach, and site chat, with bridge services for Gmail, SMS, and CRM. The experiment ran for a few weeks and is now retired; the build log and architecture docs are preserved.',
    tags: ['OpenClaw', 'Claude', '11ty', 'Node.js', 'Caddy']
  }],
  posts: [{
    id: 'ink-cms',
    date: 'Feb 24, 2026',
    project: 'ink',
    title: 'Building a CMS Around Markdown Instead of a Database',
    excerpt: 'Most CMS platforms start with a database. Ink starts with a folder of Markdown files. Here\'s why that changes everything.'
  }, {
    id: 'ink-tokens',
    date: 'Feb 24, 2026',
    project: 'ink',
    title: 'Design Tokens: One File to Brand an Entire Site',
    excerpt: 'How Ink uses CSS custom properties to make rebranding a static site a five-minute task.'
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/mcinnis-dev/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.PostListItem = __ds_scope.PostListItem;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Kicker = __ds_scope.Kicker;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.SlantRule = __ds_scope.SlantRule;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.TextLink = __ds_scope.TextLink;

})();
