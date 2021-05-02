import { Flex, Box } from 'theme-ui'

# Why Powers of Two

If you're less familiar with functional CSS, the idea of an 8px grid,
come from libraries like Bootstrap, or just have ten fingers and ten toes,
then you might be less familiar with the rationale for Styled System's powers-of-two based spacing scale.
While most human numbering systems are base ten due to the number of "digits" we have on our hands,
base ten numbering systems aren't always the easiest to work with mathematically.
Computer displays for decades have been based on multiples of powers of two due to the constraints of binary data,
but using powers of two for layout in screen design makes a lot of sense.

When designing UI for the web, elements are often nested within other elements.
This means that padding on a child element will be added to the padding of its parent.
When you end up with multiple levels of nesting for different elements across a page,
it can be difficult to keep things aligned if you're not using a spacing scale like the one
included in Styled System.

Styled System's spacing scale is based on powers of two because of the tendency for elements to be nested.
For example, say you have a navigation bar, where links have a small amount of padding to make the tap target larger,
but less padding than the content below the navigation bar because that would space the links too far apart.
When using a powers-of-two scale, the links' padding will be added to the navigation bar's padding,
making it easier to align to items with double the padding below it.

The following example is an attempt to demonstrate:

<Box color="black">
  <Flex px={3} bg='#eee'>
    <Box p={3} width='auto' bg='#ddd'>
      Link with padding `3`
    </Box>
    <Box mx='auto' />
    <Box p={3} width='auto' bg='#ddd'>
      Link
    </Box>
    <Box p={3} width='auto' bg='#0cf'>
      Link
    </Box>
  </Flex>
  <Box p={4} bg='#f6f6f6'>
    Box with padding `4`
  </Box>
</Box>

The navigation bar has a higher density layout with left and right padding of `3` (`16px`) and nested links with padding `3` as well.
The content area below has a padding of `4` (`32px`) which equals the padding of the navigation bar and links added together.
Notice how the text in the navigation bar and the content below still align with each other.

This is a very simple example, but when adhering to this approach across a large application, the effect can be profound.
The default typographic scale (`fontSizes`) in Styled System is also loosely based on the same powers of two approach,
which is intended to make web app design more effortlessly consistent.

For further reading see [Mathematical Web Typography](https://jxnblk.com/blog/mathematical-web-typography/).
