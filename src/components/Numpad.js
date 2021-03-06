import React from "react";
import { Text, Pressable } from "native-base";
import { UseAppContex } from "./AppContex";

export default function Numpad({ children }) {
  const [, dispatch] = UseAppContex();
  const isOperator = ["+", "-", "/", "x", "%", "^", "AC", "="].includes(
    children
  );
  const dark = isOperator ? "tertiary.600" : "dark.700";
  const light = isOperator ? "tertiary.600" : "dark.100";

  return (
    <Pressable
      onPress={() => {
        dispatch({ type: children, payload: children });
      }}
      w="75"
      h="75"
      shadow="2"
      rounded="2xl"
      alignItems="center"
      justifyContent="center"
      _light={{ bg: "dark.700" }}
      _dark={{ bg: "dark.100" }}
    >
      {({ isPressed }) => {
        return (
          <Text
            bold
            fontSize="3xl"
            style={{
              transform: [{ scale: isPressed ? 0.8 : 1 }],
            }}
            _dark={{ color: dark }}
            _light={{ color: light }}
          >
            {children}
          </Text>
        );
      }}
    </Pressable>
  );
}
