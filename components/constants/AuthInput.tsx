import React from "react";
import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "@emotion/styled";

const StyledInput = styled(Input)`
  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

const AuthInput = ({
  id,
  onChange,
  onBlur,
  value,
  mt,
  onFocus,
  show,
  onKeyPress,
  name,
  placeholder,
  type,
  onClick,
  error,
  password,
}: any) => {
  return (
    <FormControl mt={mt ? "12px" :"5px" }id={id} isInvalid={error}>
      <InputGroup
        width="full"
        color={error ? "red" : value ? "#7B47CC" : "#BDBDBD"}
      >
        <StyledInput
          px="16px"
          py="15px"
          h="44px"
          fontSize="14px"
          color="#000"
          borderRadius="8px"
          bg="unset"
          border={error ? "1px solid red" : "1px solid #C4C6C8"}
          type={type}
          name={name}
          onKeyPress={onKeyPress}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          variant="secondary"
        />
        <InputRightElement
          cursor="pointer"
          h="44px"
          display={show ? "flex" : "none"}
          onClick={onClick}
        >
          {!password ? (
            <FaEyeSlash color={value ? "#0F172B" : "#4F4F4F"} />
          ) : (
            <FaEye color={value ? "#0F172B" : "#4F4F4F"} />
          )}
        </InputRightElement>
      </InputGroup>
      {error && (
        <Text fontSize="12px" color="red">
          {error}
        </Text>
      )}
    </FormControl>
  );
};

export default AuthInput;
