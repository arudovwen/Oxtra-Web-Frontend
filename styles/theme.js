import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  fonts: {
    heading: `Gordita`,
    body: `Gordita`,
  },
  components: {
    Radio: {
      variants: {
        primary: {
          control: {
            borderColor: "#242628",
            _checked: {
              borderColor: "#438950",
              bg: "#438950",
            },
          },
        },
      },
    },
    Switch: {
      variants: {
        primary: {
          container: {
            border: "2px solid #C4C6C8",
            rounded: "full",
            _checked: {
              border: "2px solid #0A3421",
            },
          },
          thumb: {
            bg: "#C4C6C8",
            _checked: {
              bg: "#0A3421",
            },
          },
          track: {
            bg: "transparent",
          },
        },

        adminPrimary: {
          container: {
            border: "2px solid #C4C6C8",
            rounded: "full",
            _checked: {
              border: "2px solid #0D0718",
            },
          },
          thumb: {
            bg: "#C4C6C8",
            _checked: {
              bg: "#0D0718",
            },
          },
          track: {
            bg: "transparent",
          },
        },
      },

      defaultProps: {
        variant: "primary",
      },
    },
    Input: {
      defaultProps: {
        variant: "primary",
      },
      variants: {
        primary: {
          field: {
            bgColor: "#fff",
            borderRadius: "8px",
            color: "#000",
            _placeholder: {
              color: "gray",
              padding: "5",
            },
          },
        },
        alternate: {
          field: {
            bgColor: "unset",
            border: "",
            borderRadius: "8px",
            color: "#BDBDBD",
            _placeholder: {
              color: "gray",
              fontSize: "13px",
            },
          },
        },
        secondary: {
          field: {
            bgColor: "",
          },
        },
        filter: {
          field: {
            bgColor: "#F2F2F2",
            border: "1px solid #E0E0E0",
            borderRadius: "5px",
            color: "#000",
            _placeholder: {
              color: "#333333",
              padding: "10px",
              fontSize: "13px",
            },
          },
        },
      },
    },
    Select: {
      variants: {
        primary: {
          field: {
            borderColor: "purple.100",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Textarea: {
      variants: {
        primary: {
          bg: "#f2f2f2",
          color: "#000",
          borderRadius: "10px",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
        secondary: {
          bg: "#fff",
          color: "#000",
          border: "1px solid gray",
          _placeholder: {
            color: "#BDBDBD",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
    Button: {
      variants: {
        primary: {
          border: "none",
          borderRadius: "8px",
          bgColor: "#438950",
          transition: ".3s ease-in-out",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 500,
          _hover: {
            bgColor: "#438950",
            color: "#fff",
            opacity: 0.8,
          },
          _disabled: {
            _hover: {
              opacity: 0.6,
              color: "#fff",
            },
          },
          _focus: {
            bgColor: "#438950",
            color: "#fff",
          },
          _active: {
            bgColor: "#438950",
            color: "#fff",
          },
        },
        secondary: {
          bgColor: "orangeColor",
          size: "md",
          border: "1px solid",
          borderRadius: "10px",
          color: "#fff",
          fontWeight: "300",
          _hover: {
            bgColor: "purpleColor",
            color: "#fff",
          },
          _disabled: {
            _hover: {
              border: "1px solid #F3C948",
              color: "orangeColor",
            },
          },
          _focus: {
            bgColor: "",
            color: "#fff",
          },
          _active: {
            bgColor: "purpleColor",
            color: "#fff",
          },
        },
      },
      defaultProps: {
        variant: "primary",
      },
    },
  },

  colors: {
    darkBg: "#0F172B",
    orangeBg: "#F3C948",
    blueBg: "#2463EB",
    semiBlue: "#F1F5FE",
  },
});
