import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type ThemeName = "yellow" | "blue" | "green";

interface ThemeColors {
  pageBg: string;
  bodyBg: string;
  banner: string;
  accent: string;
  gradFrom: string;
  gradTo: string;
  gradLightFrom: string;
  gradLightTo: string;
  badge: string;
  badgeHover: string;
  cardText: string;
  cardBg: string;
  circleBg: string;
  muted: string;
  socialBg: string;
  alumni1: string;
  alumni2: string;
  alumni3: string;
  alumni4: string;
  alumniBgFrom: string;
  shadow: string;
  hoverFrom: string;
  hoverTo: string;
  footerGradStart: string;
  footerGradEnd: string;
  text: string;
  btnBg: string;
  btnHover: string;
  btnText: string;
  logoFilter: string;
}

interface ThemeVariant {
  light: ThemeColors;
  dark: ThemeColors;
}

const themes: Record<ThemeName, ThemeVariant> = {
  yellow: {
    light: {
      pageBg: "#fff9e4",
      bodyBg: "#fff9e4",
      banner: "#fee48c",
      accent: "#FFD600",
      gradFrom: "#ffce31",
      gradTo: "#ffe286",
      gradLightFrom: "#f9f2d9",
      gradLightTo: "#fff0bc",
      badge: "#ffcc29",
      badgeHover: "#ffd84d",
      cardText: "#fee48c",
      cardBg: "#f8f1d7",
      circleBg: "#F8F1D7",
      muted: "#473a00",
      socialBg: "#443E28",
      alumni1: "#ffcc29",
      alumni2: "#ffd758",
      alumni3: "#ffe387",
      alumni4: "#ffeeb5",
      alumniBgFrom: "#f7f1d6",
      shadow: "rgba(255,204,41,0.26)",
      hoverFrom: "#ffc800",
      hoverTo: "#ffd84d",
      footerGradStart: "rgb(255, 206, 49)",
      footerGradEnd: "rgb(255, 226, 134)",
      text: "#141201",
      btnBg: "#141201",
      btnHover: "#2a2502",
      btnText: "#fff9e4",
      logoFilter: "none",
    },
    dark: {
      pageBg: "#f0e8c8",
      bodyBg: "#0e0e08",
      banner: "#1c1a0a",
      accent: "#ffcc29",
      gradFrom: "#2a2400",
      gradTo: "#1e1a00",
      gradLightFrom: "#161408",
      gradLightTo: "#1e1a0a",
      badge: "#ffcc29",
      badgeHover: "#ffd84d",
      cardText: "#ffcc29",
      cardBg: "#1c1a10",
      circleBg: "#1c1a10",
      muted: "#a89858",
      socialBg: "#2a2510",
      alumni1: "#3d3000",
      alumni2: "#302600",
      alumni3: "#241c00",
      alumni4: "#1a1400",
      alumniBgFrom: "#1a1808",
      shadow: "rgba(255,204,41,0.12)",
      hoverFrom: "#ffc800",
      hoverTo: "#ffd84d",
      footerGradStart: "rgb(255, 204, 41)",
      footerGradEnd: "rgb(255, 214, 82)",
      text: "#e8e0c8",
      btnBg: "#ffcc29",
      btnHover: "#ffd84d",
      btnText: "#141201",
      logoFilter: "brightness(0) invert(1)",
    },
  },
  blue: {
    light: {
      pageBg: "#e4f4ff",
      bodyBg: "#e4f4ff",
      banner: "#8ed4f0",
      accent: "#35bdee",
      gradFrom: "#31b8e8",
      gradTo: "#86d6f2",
      gradLightFrom: "#daedf9",
      gradLightTo: "#c0e4f2",
      badge: "#29b8ee",
      badgeHover: "#5dcbf2",
      cardText: "#8ed4f0",
      cardBg: "#d5e8f3",
      circleBg: "#d5e8f3",
      muted: "#1a5573",
      socialBg: "#1a3e4f",
      alumni1: "#29b8ee",
      alumni2: "#58ccf4",
      alumni3: "#87daf6",
      alumni4: "#b5e8f8",
      alumniBgFrom: "#d5e8f3",
      shadow: "rgba(53,189,238,0.26)",
      hoverFrom: "#2aade0",
      hoverTo: "#5dcbf2",
      footerGradStart: "rgb(49, 184, 232)",
      footerGradEnd: "rgb(134, 214, 242)",
      text: "#141201",
      btnBg: "#141201",
      btnHover: "#2a2502",
      btnText: "#e4f4ff",
      logoFilter: "none",
    },
    dark: {
      pageBg: "#c8dce8",
      bodyBg: "#080c10",
      banner: "#0a1520",
      accent: "#35bdee",
      gradFrom: "#0a2030",
      gradTo: "#081828",
      gradLightFrom: "#0c1420",
      gradLightTo: "#101c28",
      badge: "#29b8ee",
      badgeHover: "#5dcbf2",
      cardText: "#6ec8f0",
      cardBg: "#101820",
      circleBg: "#101820",
      muted: "#5898b8",
      socialBg: "#102030",
      alumni1: "#0a3050",
      alumni2: "#082840",
      alumni3: "#062030",
      alumni4: "#041820",
      alumniBgFrom: "#101820",
      shadow: "rgba(53,189,238,0.12)",
      hoverFrom: "#2aade0",
      hoverTo: "#5dcbf2",
      footerGradStart: "rgb(49, 184, 232)",
      footerGradEnd: "rgb(134, 214, 242)",
      text: "#c8dce8",
      btnBg: "#35bdee",
      btnHover: "#5dcbf2",
      btnText: "#080c10",
      logoFilter: "brightness(0) invert(1)",
    },
  },
  green: {
    light: {
      pageBg: "#e4ffe9",
      bodyBg: "#e4ffe9",
      banner: "#8cf4a0",
      accent: "#00ae24",
      gradFrom: "#1bbe3a",
      gradTo: "#7ae694",
      gradLightFrom: "#d9f9de",
      gradLightTo: "#baf0c8",
      badge: "#1dbe3a",
      badgeHover: "#4dd368",
      cardText: "#8cf4a0",
      cardBg: "#d5f3dc",
      circleBg: "#d5f3dc",
      muted: "#1a5c2d",
      socialBg: "#1a4f28",
      alumni1: "#1dbe3a",
      alumni2: "#4dd370",
      alumni3: "#7de49c",
      alumni4: "#b5f0c4",
      alumniBgFrom: "#d5f3dc",
      shadow: "rgba(0,174,36,0.26)",
      hoverFrom: "#009e1f",
      hoverTo: "#4dd368",
      footerGradStart: "rgb(27, 190, 58)",
      footerGradEnd: "rgb(122, 230, 148)",
      text: "#141201",
      btnBg: "#141201",
      btnHover: "#2a2502",
      btnText: "#e4ffe9",
      logoFilter: "none",
    },
    dark: {
      pageBg: "#c8e0cc",
      bodyBg: "#080e0a",
      banner: "#0a200e",
      accent: "#00ae24",
      gradFrom: "#0a2810",
      gradTo: "#081e0c",
      gradLightFrom: "#0c1a0e",
      gradLightTo: "#102218",
      badge: "#1dbe3a",
      badgeHover: "#4dd368",
      cardText: "#6ef090",
      cardBg: "#102018",
      circleBg: "#102018",
      muted: "#58a868",
      socialBg: "#103020",
      alumni1: "#0a4018",
      alumni2: "#083210",
      alumni3: "#062808",
      alumni4: "#041e06",
      alumniBgFrom: "#102018",
      shadow: "rgba(0,174,36,0.12)",
      hoverFrom: "#009e1f",
      hoverTo: "#4dd368",
      footerGradStart: "rgb(27, 190, 58)",
      footerGradEnd: "rgb(122, 230, 148)",
      text: "#c8e0cc",
      btnBg: "#1dbe3a",
      btnHover: "#4dd368",
      btnText: "#080e0a",
      logoFilter: "brightness(0) invert(1)",
    },
  },
};

const cssVarMap: Record<keyof ThemeColors, string> = {
  pageBg: "--t-page-bg",
  bodyBg: "--t-body-bg",
  banner: "--t-banner",
  accent: "--t-accent",
  gradFrom: "--t-grad-from",
  gradTo: "--t-grad-to",
  gradLightFrom: "--t-grad-light-from",
  gradLightTo: "--t-grad-light-to",
  badge: "--t-badge",
  badgeHover: "--t-badge-hover",
  cardText: "--t-card-text",
  cardBg: "--t-card-bg",
  circleBg: "--t-circle-bg",
  muted: "--t-muted",
  socialBg: "--t-social-bg",
  alumni1: "--t-alumni-1",
  alumni2: "--t-alumni-2",
  alumni3: "--t-alumni-3",
  alumni4: "--t-alumni-4",
  alumniBgFrom: "--t-alumni-bg-from",
  shadow: "--t-shadow",
  hoverFrom: "--t-hover-from",
  hoverTo: "--t-hover-to",
  footerGradStart: "--t-footer-grad-start",
  footerGradEnd: "--t-footer-grad-end",
  text: "--t-text",
  btnBg: "--t-btn-bg",
  btnHover: "--t-btn-hover",
  btnText: "--t-btn-text",
  logoFilter: "--t-logo-filter",
};

interface ThemeContextValue {
  theme: ThemeName;
  isDark: boolean;
  setTheme: (t: ThemeName) => void;
  toggleDark: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "yellow",
  isDark: false,
  setTheme: () => {},
  toggleDark: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<ThemeName>("yellow");
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => setIsDark((d) => !d);

  useEffect(() => {
    const colors = themes[theme][isDark ? "dark" : "light"];
    const root = document.documentElement;
    (Object.keys(cssVarMap) as (keyof ThemeColors)[]).forEach((key) => {
      root.style.setProperty(cssVarMap[key], colors[key]);
    });
  }, [theme, isDark]);

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export const themeAccents: { name: ThemeName; color: string }[] = [
  { name: "yellow", color: "#ffcc29" },
  { name: "blue", color: "#35bdee" },
  { name: "green", color: "#00ae24" },
];
