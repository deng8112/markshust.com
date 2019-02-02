import styled from 'styled-components'
import { rhythm } from '../utils/typography'

export default styled.div`
  background: #5CB70B;
  padding: ${rhythm(0.5)};
  margin: 0 -${rhythm(0.75)};
  text-align: center;
  color: #fff;
  font-family: Ubuntu, sans-serif;
  border-top: 4px solid #0967D2;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  @media only screen and (max-width:980px) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`
