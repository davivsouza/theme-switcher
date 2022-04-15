import { Container } from "./style";
import Switch from "react-switch";
import {ThemeContext} from 'styled-components'
import { useContext } from "react";
interface Props {
  toggleTheme(): void
}

export function Header({ toggleTheme } : Props) {

  const { colors, name } = useContext(ThemeContext)

  return (
    <Container>
      Hello World
      <Switch
        onChange={toggleTheme}
        checked={name ==='dark'} //true if name is dark and it'll return false if name is light
        checkedIcon={false}
        uncheckedIcon={false}
        height={20}
        width={50}
        handleDiameter={25}
        onColor={colors.secundary}
        offColor={colors.secundary}
      />
    </Container>
  );
}
