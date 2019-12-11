import Animated from "react-native-reanimated";
import { FlingGestureHandlerEventExtra, ForceTouchGestureHandlerEventExtra, GestureHandlerStateChangeNativeEvent, LongPressGestureHandlerEventExtra, PanGestureHandlerEventExtra, PinchGestureHandlerEventExtra, RotationGestureHandlerEventExtra, State, TapGestureHandlerEventExtra } from "react-native-gesture-handler";
export declare const withOffset: (value: Animated.Node<number>, state: Animated.Value<State>, offset?: Animated.Value<number>) => Animated.Node<number>;
declare type SpringConfig = Omit<Animated.SpringConfig, "toValue">;
export interface WithSpringParams {
    value: Animated.Adaptable<number>;
    velocity: Animated.Adaptable<number>;
    state: Animated.Value<State>;
    snapPoints: Animated.Adaptable<number>[];
    offset?: Animated.Value<number>;
    config?: SpringConfig;
    onSnap?: (value: readonly number[]) => void;
}
export declare const withSpring: (props: WithSpringParams) => Animated.Node<number>;
interface WithDecayParams {
    value: Animated.Adaptable<number>;
    velocity: Animated.Adaptable<number>;
    state: Animated.Value<State>;
    offset?: Animated.Value<number>;
    deceleration?: number;
}
export declare const withDecay: (config: WithDecayParams) => Animated.Node<number>;
export declare const preserveMultiplicativeOffset: (value: Animated.Adaptable<number>, state: Animated.Adaptable<number>) => Animated.Node<number>;
export declare const onScroll: (contentOffset: {
    x?: Animated.Node<number> | undefined;
    y?: Animated.Node<number> | undefined;
}) => (...args: any[]) => void;
declare type Adaptable<T> = {
    [P in keyof T]: Animated.Adaptable<T[P]>;
};
export declare const onGestureEvent: (nativeEvent: Partial<Adaptable<GestureHandlerStateChangeNativeEvent & TapGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & LongPressGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & ForceTouchGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & PanGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & PinchGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & RotationGestureHandlerEventExtra>> | Partial<Adaptable<GestureHandlerStateChangeNativeEvent & FlingGestureHandlerEventExtra>>) => {
    onHandlerStateChange: (...args: any[]) => void;
    onGestureEvent: (...args: any[]) => void;
};
export declare const panGestureHandler: () => {
    x: Animated.Value<0>;
    translationX: Animated.Value<0>;
    velocityX: Animated.Value<0>;
    y: Animated.Value<0>;
    translationY: Animated.Value<0>;
    velocityY: Animated.Value<0>;
    state: Animated.Value<State>;
    gestureHandler: {
        onHandlerStateChange: (...args: any[]) => void;
        onGestureEvent: (...args: any[]) => void;
    };
};
export declare const horizontalPanGestureHandler: () => {
    x: Animated.Value<0>;
    translationX: Animated.Value<0>;
    state: Animated.Value<State>;
    velocityX: Animated.Value<0>;
    gestureHandler: {
        onHandlerStateChange: (...args: any[]) => void;
        onGestureEvent: (...args: any[]) => void;
    };
};
export declare const verticalPanGestureHandler: () => {
    y: Animated.Value<0>;
    translationY: Animated.Value<0>;
    state: Animated.Value<State>;
    velocityY: Animated.Value<0>;
    gestureHandler: {
        onHandlerStateChange: (...args: any[]) => void;
        onGestureEvent: (...args: any[]) => void;
    };
};
export {};
