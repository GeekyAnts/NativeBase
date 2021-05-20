/** @jsx jsx */
import { jsx, ThemeContext } from '@emotion/core'
import React, { useReducer, useContext } from 'react'
import merge from 'lodash.merge'
import omit from 'lodash.omit'
import get from 'lodash.get'
import set from 'lodash.set'
import Color from 'color'

export const EditContext = React.createContext({})

// not actually a reducer
const notAReducer = (state, next) =>
  typeof next === 'function' ? next(state) : merge({}, state, next)

export const EditProvider = ({
  initialTheme,
  ignore = ['styles'],
  children,
}) => {
  const theme = useContext(ThemeContext) || initialTheme
  const [state, setState] = useReducer(notAReducer, theme)
  const context = {
    ignore,
    state,
    setState,
    reset: () => {
      setState(theme)
    },
  }

  return (
    <EditContext.Provider value={context}>
      <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    </EditContext.Provider>
  )
}

// context-aware field
const Input = props => (
  <input
    {...props}
    css={{
      width: '100%',
      margin: 0,
    }}
  />
)

const Select = ({ options = [], ...props }) => (
  <select
    {...props}
    css={{
      width: '100%',
      margin: 0,
    }}
  >
    {options.map(option => (
      <option key={option}>{option}</option>
    ))}
  </select>
)

const ColorInput = props => (
  <>
    <input
      type="color"
      {...props}
      value={toHex(props.value)}
      onChange={e => {
        const next = merge({}, e, {
          target: {
            value: toHex(e.target.value),
          },
        })
        props.onChange(next)
      }}
      css={{
        flex: 'none',
        minWidth: 0,
        appearance: 'none',
        margin: 0,
        width: 32,
        height: 24,
        border: 0,
        backgroundColor: 'transparent',
      }}
    />
    <Input {...props} css={{}} />
  </>
)

export const Field = ({ name, type, options, render, ...props }) => {
  const context = useContext(EditContext)
  const value = get(context.state, name)
  const onChange = e => {
    context.setState(set({}, name, e.target.value))
  }

  if (typeof render === 'function') {
    return render({
      name,
      type,
      options,
      value,
      onChange,
      ...context,
    })
  }

  const inputProps = {
    name,
    value,
    onChange,
    ...props,
  }

  let field = <Input {...inputProps} />

  switch (type) {
    case 'number':
      field = <Input type="number" {...inputProps} />
      break
    case 'select':
      field = <Select {...inputProps} options={options} />
      break
    case 'color':
      field = <ColorInput {...inputProps} />
      break
  }

  return (
    <label
      css={{
        display: 'flex',
        maxWidth: 512,
      }}
    >
      <div
        css={{
          width: '65%',
        }}
      >
        {name}
      </div>
      <div
        css={{
          display: 'flex',
          width: '35%',
        }}
      >
        {field}
      </div>
    </label>
  )
}

const toHex = n => {
  try {
    return Color(n).hex()
  } catch (e) {
    return n
  }
}

export const FieldSet = ({ name, type, ignore = [], ...props }) => {
  const context = useContext(EditContext)
  const value = get(context.state, name)

  return (
    <div>
      <h3
        css={{
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {name}
      </h3>
      {Object.keys(omit(value, ignore)).map(key => {
        const val = value[key]
        if (val && typeof val === 'object') {
          return (
            <FieldSet
              {...props}
              name={`${name}.${key}`}
              type={type}
              ignore={ignore}
            />
          )
        }
        return <Field {...props} name={`${name}.${key}`} type={type} />
      })}
    </div>
  )
}

const getType = (key, value) => {
  switch (key) {
    case 'colors':
      return 'color'
    case 'space':
    case 'fontSizes':
      return 'number'
    default:
      return
  }
}

export const ThemeControls = ({ ignore, ...props }) => {
  const context = useContext(EditContext)
  const keys = Object.keys(omit(context.state, ignore || context.ignore))
  return (
    <div
      {...props}
      css={{
        fontFamily: 'system-ui, sans-serif',
        fontSize: 12,
        lineHeight: 1.5,
        color: '#000',
        backgroundColor: '#eee',
        maxWidth: 320,
        maxHeight: '100vh',
        padding: 8,
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {keys.map(key => (
        <FieldSet key={key} {...context} name={key} type={getType(key)} />
      ))}
    </div>
  )
}

export const ResetButton = props => {
  const { reset } = useContext(EditContext)
  return <button {...props} onClick={reset} />
}
