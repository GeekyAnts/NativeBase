export default{
    defaultProps:{
        _text: {
            fontSize: 'sm',
            fontWeight: 'normal',
          },
          py: '10.5px',
          rounded: 'sm',
          px: '3',
          _dark: {
            borderColor: 'coolGray.700',
            color: 'coolGray.400',
            bg: 'transparent',
            _hover: {
              bg: 'coolGray.800',
            },
            _focus: {
              bg: 'coolGray.800',
            },
          },
          _light: {
            borderColor: 'coolGray.300',
            color: 'coolGray.500',
            bg: 'transparent',
            _hover: {
              bg: 'white',
            },
            _focus: {
              bg: 'white',
            },
          },
    }
}