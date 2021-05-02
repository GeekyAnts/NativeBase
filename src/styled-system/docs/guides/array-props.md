# Array Props

Using arrays as responsive props is one of the unique features that Styled System introduced to the React community.
While many people have adopted this approach and use it to great success, much like any new idea,
it can seem odd or off-putting to people new to the library.
If your team follows a mobile-first responsive design mindset,
this approach can help speed up UI development dramatically.

If you haven't read the [Responsive Styles](/responsive-styles) documentation,
you should start there before continuing.

## Origins

The array-based responsive props originates in the functional CSS approach of using namespaced classnames for media-query-scoped styles.
For example a div with a responsive width might have classnames like this:

```html
<div class="col-12 sm-col-6 md-col-4 lg-col-3"></div>
```

When this approach was adapted to React props, it became something like the following:

```jsx
<Box width={1} smallWidth={1 / 2} mediumWidth={1 / 3} largeWidth={1 / 4} />
```

After writing props like this over and over, it's easy to make the jump to an array-based syntax for these props:

```jsx
<Box width={[1, 1 / 2, 1 / 3, 1 / 4]} />
```

If you're already using a plain object for things like responsive widths, you can probably see how the abstraction above is useful.

```jsx
// with plain objects (not all that different)
<Box width={{ default: 1, small: 1 / 2, medium: 1 / 3, large: 1 / 4 }} />
```

By using arrays, you can avoid some issues with naming arbitrary breakpoints,
and it can make the code more visual in what it does with a terser syntax.
For example, this Box includes responsive width, margin, and padding:

```jsx
<Box width={[1, 1 / 2]} padding={[2, 3]} marginBottom={[3, 4]} />
```

To skip certain breakpoints, you can pass `null` to any position in the array to avoid generating unnecessary CSS.

```jsx
<Box width={[1, null, 1 / 2]} />
```

Styled System **supports both arrays and objects as responsive props**.
Whichever you choose to use, you should discuss the pros and cons with your team and ensure everyone is on board with the approach you take.
