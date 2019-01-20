import React from 'react'
import styled from '@theme'

const Svg = styled.svg`
  path {
    fill: ${({ theme }) => theme.colors.foreground};
  }
`

const Github = (props: any) => (
  <Svg {...props} width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 0h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm11.195 6.063a6.051 6.051 0 0 0-2.183-2.238A5.759 5.759 0 0 0 9 3a5.76 5.76 0 0 0-3.012.825 6.05 6.05 0 0 0-2.183 2.238A6.133 6.133 0 0 0 3 9.15c0 1.34.381 2.546 1.145 3.616.763 1.07 1.748 1.811 2.956 2.222.141.027.245.008.313-.056a.317.317 0 0 0 .101-.24c0-.016 0-.16-.003-.432-.003-.273-.004-.51-.004-.713l-.18.032c-.115.021-.26.03-.434.028a3.225 3.225 0 0 1-.543-.056 1.2 1.2 0 0 1-.523-.24 1.016 1.016 0 0 1-.344-.493l-.078-.184a2.01 2.01 0 0 0-.246-.408.95.95 0 0 0-.34-.305l-.054-.04a.58.58 0 0 1-.172-.208c-.016-.037-.003-.068.039-.092a.496.496 0 0 1 .226-.036l.157.024c.104.021.233.085.386.192.154.107.28.246.38.416a1.4 1.4 0 0 0 .433.5c.169.116.34.173.511.173.172 0 .32-.013.446-.04.125-.027.242-.067.351-.12.047-.358.175-.633.383-.825a5.23 5.23 0 0 1-.8-.144 3.145 3.145 0 0 1-.735-.313 2.116 2.116 0 0 1-.629-.536 2.604 2.604 0 0 1-.41-.841 4.092 4.092 0 0 1-.16-1.201c0-.646.206-1.196.617-1.65-.193-.486-.175-1.03.055-1.634.15-.048.375-.012.672.108.296.12.514.224.652.309.138.085.249.157.332.216A5.42 5.42 0 0 1 9 5.971c.515 0 1.016.07 1.5.208l.297-.192a4.16 4.16 0 0 1 .718-.352c.277-.107.488-.137.634-.089.234.604.255 1.148.062 1.634.411.454.617 1.004.617 1.65 0 .454-.053.855-.16 1.205-.107.35-.245.63-.414.84-.17.212-.38.39-.633.533a3.151 3.151 0 0 1-.734.313 5.226 5.226 0 0 1-.801.144c.27.24.406.62.406 1.137v1.69c0 .096.033.176.098.24s.168.083.308.056c1.209-.411 2.195-1.152 2.958-2.222C14.618 11.696 15 10.49 15 9.15a6.137 6.137 0 0 0-.805-3.087z"
      fill="#111314"
      fillRule="evenodd"
    />
  </Svg>
)

export { Github }
