import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useColorMode, HStack, Icon, Divider } from "native-base";
import { StyleSheet, StatusBar } from "react-native";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconConfig = {
    light: {
      iosSunnyColor: "orange.300",
      iosMoonColor: "gray.300",
      bg: "dark.800",
    },
    dark: {
      iosSunnyColor: "dark.100",
      iosMoonColor: "yellow.200",
      bg: "dark.300",
    },
  };
  const { iosMoonColor, iosSunnyColor, bg } = iconConfig[colorMode];

  const handleTheme = () => {
    toggleColorMode();
  };

  return (
    <HStack
      justifyContent="space-around"
      bg={bg}
      rounded="12"
      py="3"
      px="4"
      w="1/4"
      mx="auto"
      shadow="2"
      style={styles.mt}
    >
      <Icon
        as={Ionicons}
        name="ios-sunny"
        color={iosSunnyColor}
        onPress={handleTheme}
        size="20px"
        mx={"2"}
      />
      <Divider orientation="vertical" mx={"12"} />
      <Icon
        as={Ionicons}
        name="ios-moon"
        color={iosMoonColor}
        onPress={handleTheme}
        size="18px"
        mx={"2"}
      />
    </HStack>
  );
}

const styles = StyleSheet.create({
  mt: {
    marginTop: StatusBar.currentHeight,
  },
});
