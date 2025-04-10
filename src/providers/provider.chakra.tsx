import {
  ChakraProvider,
  extendTheme
} from '@chakra-ui/react'


const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,  // Disable system preference for color mode
  },
  components: {
    Drawer: {
      baseStyle: {
        dialog: {
          bg: "#000E15"
        },
      },
    },
    Checkbox: {
      baseStyle: {
        control: {
          borderColor: '#98989D',
          borderRadius: '5px',
          _checked: {
            bg: 'blue.500',
            borderColor: 'blue.500',
            _hover: {
              bg: 'blue.600',
              borderColor: 'blue.600',
            },
          },
        },
        label: {
          fontSize: 'sm',
        },
      },
      sizes: {
        sm: {
          control: {
            h: 4,
            w: 4,
          },
          label: {
            fontSize: 'sm',
          },
        },
        md: {
          control: {
            h: 5,
            w: 5,
          },
          label: {
            fontSize: 'md',
          },
        },
        lg: {
          control: {
            h: 6,
            w: 6,
          },
          label: {
            fontSize: 'lg',
          },
        },
      },
      variants: {
        solid: {
          control: {
            _checked: {
              bg: 'green.500',
              borderColor: 'green.500',
              _hover: {
                bg: 'green.600',
                borderColor: 'green.600',
              },
            },
          },
        },
        outline: {
          control: {
            _checked: {
              bg: 'transparent',
              borderColor: 'red.500',
              _hover: {
                borderColor: 'red.600',
              },
            },
          },
        },
      },
    },
    Button: {
      variants: {
        outline: {
          textColor: 'white',
          borderRadius: '25px', // Border radius for outline button
          border: '1px solid', // Outline border
          borderColor: '#536471', // Border color
          _hover: {
            boxShadow: '0 0 0.5em 0 currentColor inset',
            bg: '#000E15',
          },
          _active: {
            bg: '#000E15',
          }
        },
      },
    },
    Menu: {
      baseStyle: {
        list: {
          bg: '#000E15', // Background color for MenuList
        },
        item: {
          color: 'white', // Text color for MenuItem
          bg: '#000E15',
          _hover: {
            bg: '#00111a',
          }
        },
      },
    },
  },
});

const Provider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default Provider;

