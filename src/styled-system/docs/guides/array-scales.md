# Array Scales

Using arrays for theme constants and style props can seem off-putting to some at first,
but can quickly become second-nature with a little effort.
The rationale for using arrays for design scales stems from the idea of constraint-based design.
Before using something like Styled System, it can seem scary to commit to such a limited data type,
but Styled System gives you a few escape hatches in the rare cases where you need to "break out" of the constraints encouraged in this library.

The first question that comes up with approaches like this is always, "what if...".
In software development, some people think that duplication is better than the wrong abstraction.
I tend to agree with this sentiment.
Instead of asking _what if_, I encourage you to try the Styled System approach in a smaller application and see if the benefits
of the constraints with this approach outweigh the limitations.
When using Styled System on a multidisciplinary team, you'll want to make sure your entire team, including designers,
are on board, but from my experience, many designers will want to work with constraints like the ones
encouraged here.

## Breakpoints

The `breakpoints` scale in Styled System is one of the most difficult to alter after introducing this library to an application.
It's recommended to audit the breakpoints that are currently in use and try to normalize them as much as possible.
Some people like to have a dozen or more breakpoints, but the reality of responsive design is that there are essentially two breakpoints: mobile and not-mobile.
You'll probably want more than two breakpoints to help with typographic style, but the most common responsive layouts
rarely do anything extremely complex.
Embrace your inner minimalist and see how much you can simplify your design system.

## Space, Font Sizes, and Other Scales

Using a consistent typographic scale and a limited set of spacing values are widely regarded as good practices in visual design.
By encoding these constraints with a library like Styled System, you can greatly speed up your development velocity
while making the visual design of your application inheritly more consistent.
Don't spend too much time debating what values to use in your `fontSizes` scale or
trying to boil the ocean.
Audit your current styles, normalize them, and decide on a good starting point with your team.
If you're unsure whether or not you might need a `13px` font size at some point in the future, don't sweat it,
because Styled System has a few options for handling those edge cases.

## Exceptions

Exceptions to the rule are to be expected.
Sometimes you're working on a tight deadline trying to close that ticket hours before the sprint is over.
It's okay if you have to break out of your design scales in some cases.
Just make sure you don't make too much of a habit out of it, and that it doesn't cause any styling side effects that you can't handle.
If you need to use a font size in one component that isn't part of your system, use a hard-coded value like `fontSize='13px'`.
It should be right where you need it and easy to delete and forget about when you refactor the code.
Optimize for throw-away code in situations like these.

## Aliases

If you've used JavaScript arrays to define your scales, you can easily add aliases to those arrays by defining custom keys.
For example, say your `fontSizes` scale looks like the following:

```js
fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96]
```

You find yourself using an `18px` font size in a lot of different places and don't want to hard-code that value throughout your application.
You can add a custom alias to the `fontSizes` for any values like this that crop up over time.

```js
// example alias
fontSizes.lede = 18
```

With this exceptional alias value added, you can now use it with the prop `fontSize='lede'`.

<!--
- array length
-->
