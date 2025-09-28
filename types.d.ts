import { ImageSourcePropType, PressableProps } from "react-native";

declare global {
  type TabIconProps = {
    icon: ImageSourcePropType;
    color: string;
    name: string;
    focused: boolean;
  };

  type FormFeilds = {
    title: string;
    value: string;
    handleChangeText: (text: string) => void;
    otherStyles: string;
    keyboardType: string;
    placeholder: string;
  };

  type CustomButtonProps = PressableProps & {
    buttonStyle?: string;
    textStyle?: string;
  };

  type TableProps = {
    header: Record<string, string>[];
    data: Record<string, any>[];
  };

  type NavButtonProps = {
    data: Record<string, any>;
    link: LinkProps["href"];
    otherStyles?: string;
  };
}
