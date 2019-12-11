import Animated from "react-native-reanimated";
export declare type SpringConfig = Partial<Omit<Animated.SpringConfig, "toValue">>;
export declare type TimingConfig = Partial<Omit<Animated.TimingConfig, "toValue">>;
export declare const moving: (position: Animated.Node<number>, minPositionDelta?: number, emptyFrameThreshold?: number) => Animated.Node<number>;
export declare const snapPoint: (value: Animated.Adaptable<number>, velocity: Animated.Adaptable<number>, points: Animated.Adaptable<number>[]) => Animated.Adaptable<number>;
export declare const bInterpolate: (value: Animated.Adaptable<number>, origin: Animated.Adaptable<number>, destination: Animated.Adaptable<number>) => Animated.Node<number>;
export declare const useValues: <V extends string | number | boolean>(values: V[], deps: readonly unknown[]) => Animated.Value<V>[];
export declare const useNamedValues: <V extends string | number | boolean, K extends string>(values: Record<K, V>, deps: readonly unknown[]) => Record<K, Animated.Value<V>>;
