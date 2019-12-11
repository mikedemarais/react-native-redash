import Animated from "react-native-reanimated";
import { State } from "react-native-gesture-handler";
export declare const withTimingTransition: (value: Animated.Value<number>, timingConfig?: Partial<Pick<Animated.TimingConfig, "duration" | "easing">>, gestureState?: Animated.Value<State>) => Animated.Node<number>;
export declare const withSpringTransition: (value: Animated.Value<number>, springConfig?: Partial<Pick<Animated.SpringConfig, "damping" | "mass" | "stiffness" | "overshootClamping" | "restSpeedThreshold" | "restDisplacementThreshold">>, velocity?: Animated.Adaptable<number>, gestureState?: Animated.Value<State>) => Animated.Node<number>;
export declare const useTimingTransition: (state: boolean, config?: Partial<Pick<Animated.TimingConfig, "duration" | "easing">>) => Animated.Node<number>;
export declare const useSpringTransition: (state: boolean, config?: Partial<Pick<Animated.SpringConfig, "damping" | "mass" | "stiffness" | "overshootClamping" | "restSpeedThreshold" | "restDisplacementThreshold">>) => Animated.Node<number>;
