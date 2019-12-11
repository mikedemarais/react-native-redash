import Animated from "react-native-reanimated";
interface RGBColor {
    r: number;
    g: number;
    b: number;
}
interface ColorInterpolationConfig {
    inputRange: number[];
    outputRange: RGBColor[];
}
export declare const interpolateColor: (value: Animated.Adaptable<number>, config: ColorInterpolationConfig, colorSpace?: "hsv" | "rgb") => Animated.Node<number>;
export declare const bInterpolateColor: (value: Animated.Adaptable<number>, color1: RGBColor, color2: RGBColor, colorSpace?: "hsv" | "rgb") => Animated.Node<number>;
export {};
