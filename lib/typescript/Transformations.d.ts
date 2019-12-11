import Animated from "react-native-reanimated";
import { TransformsStyle } from "react-native";
declare type AnimatedTransform = {
    [P in keyof TransformsStyle["transform"]]: Animated.Adaptable<TransformsStyle["transform"][P]>;
};
export declare const translateZ: (perspective: Animated.Adaptable<number>, z: Animated.Adaptable<number>) => {
    scale: Animated.Node<number>;
};
export declare const transformOrigin: (x?: Animated.Adaptable<number>, y?: Animated.Adaptable<number>, ...transformations: AnimatedTransform[]) => AnimatedTransform[];
export {};
