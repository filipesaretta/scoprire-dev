import { useState } from "react";
import { Button, Logo, MainHeader } from "./styles";
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

export function Header() {
  const [isDark, setDark] = useState(true);
  function setTheme() {
    setDark(!isDark)
  }
  return (
    <MainHeader >
      <Logo changeColor={isDark}>cercateDev</Logo>
      <Button changeColor={isDark} onClick={setTheme} type="button">{isDark ? <span><img src={sun} alt="Icon of Sun" />Light</span>
        : <span><img src={moon} alt="Icon of Sun" />Dark</span>}</Button>
    </MainHeader>
  );
}
