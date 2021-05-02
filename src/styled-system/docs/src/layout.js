/** @jsx jsx */
import { jsx, css, useColorMode } from 'theme-ui'
import React from 'react'
import styled from '@emotion/styled'
import { flexDirection } from 'styled-system'
import { useAppContext } from './index'
import NavLink from './nav-link'
import Burger from './burger'
import Sidebar from './sidebar'
import Pagination from './pagination'
import EditLink from './edit-link'

const HeaderRoot = styled('div')(
  css({
    width: '100%',
    height: 64,
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    zIndex: 2,
    bg: 'background',
    '@media screen and (max-width: 40em)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
    },
  })
)
const HeaderSpacer = styled('div')(
  css({
    display: 'none',
    '@media screen and (max-width: 40em)': {
      display: 'block',
      height: 64,
    },
  })
)

const modes = ['light', 'dark', 'gray', 'cyan', 'book']

export const Header = ({ sidebar = true, ...props }) => {
  const [mode, setMode] = useColorMode()
  const state = useAppContext()
  const cycleMode = () => {
    const i = (modes.indexOf(mode) + 1) % modes.length
    setMode(modes[i])
  }

  return (
    <>
      <HeaderRoot>
        <NavLink
          href="/"
          css={{
            '&.active': {
              color: 'inherit',
            },
          }}
        >
          Styled System
        </NavLink>
        <div sx={{ mx: "auto" }} />
        <button
          title="Toggle Color Mode"
          sx={{
            appearance: 'none',
            fontFamily: 'inherit',
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            fontWeight: 'bold',
            border: 'none',
            m: 3,
            p: 2,
            color: 'text',
            bg: 'gray',
            '&:focus': {
              outline: '2px solid',
            },
          }}
          onClick={cycleMode}
        >
          {mode}
        </button>
        {sidebar && (
          <button
            title="Show Menu"
            sx={{
              appearances: 'none',
              border: 0,
              mr: 3,
              p: 2,
              color: 'inherit',
              backgroundColor: 'transparent',
              '&:focus': {
                outline: '2px solid',
              },
              '@media screen and (min-width: 40em)': {
                display: 'none',
              },
            }}
            onClick={state.toggleOpen}
          >
            <Burger />
          </button>
        )}
      </HeaderRoot>
      <HeaderSpacer />
    </>
  )
}

const Root = styled('div')(
  css({
    display: 'flex',
    flexDirection: 'column',
  })
)

const Main = styled('div')(
  {
    display: 'flex',
  },
  flexDirection
)

const Overlay = props => (
  <div
    {...props}
    sx={{
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }}
  />
)

export const Container = styled('div')(
  css({
    width: '100%',
    maxWidth: 1024,
    lineHeight: 'body',
    mx: 'auto',
    p: 4,
  })
)
Container.defaultProps = {
  as: 'main',
}

export default ({ banner, ...props }) => {
  const state = useAppContext()

  return (
    <Root>
      <Header />
      {state.open && <Overlay onClick={e => state.setOpen(false)} />}
      <div>{banner}</div>
      <Main flexDirection={['column', 'row']}>
        <Sidebar
          open={state.open}
          onClick={e => {
            state.setOpen(false)
          }}
          width={[1, 256, 320]}
        />
        <Container
          sx={{
            maxWidth: 896,
          }}>
          {props.children}
          <EditLink />
          <Pagination />
        </Container>
      </Main>
    </Root>
  )
}
