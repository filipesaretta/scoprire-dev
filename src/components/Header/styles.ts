import styled from 'styled-components'


interface ThemeButtonProps {
  changeColor: boolean;
}

export const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.p<ThemeButtonProps>`
  color: ${(props) => props.changeColor ? 'var(--white-95)' : '#0D1017'};;
`

export const Button = styled.button<ThemeButtonProps>`
    background-color: transparent;
    font-weight: 700;
    text-transform: uppercase;
    span {
      display: flex;
      align-items: center;
      color:  ${(props) => props.changeColor ? 'var(--white-95)' : 'var(--grey)'};
      img {
        margin-right: 1rem;
      }
    }
`