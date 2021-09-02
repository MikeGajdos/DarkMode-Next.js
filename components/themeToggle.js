import { useState, useEffect } from "react";
import styled from "styled-components";
import IconMoon from "./icons/moon";
import IconSun from "./icons/sun";

const ToggleButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 8px;
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: var(--color-bg-toggle);

  transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 8px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  }
`;

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.theme = activeTheme;
    window.localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);
  return (
    <ToggleButton
      type="button"
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      {activeTheme === "dark" ? <IconMoon /> : <IconSun />}
    </ToggleButton>
  );
};

export default ThemeToggle;
