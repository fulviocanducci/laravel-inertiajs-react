import { useCallback, useEffect, useState } from "react";

interface IPropsCount {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}

export function useCount(): IPropsCount {
    const param = "@homeCount";

    const [value, setValue] = useState<number>(() => {
        const v = window.localStorage.getItem(param);
        return v ? +v : 0;
    });

    useEffect(() => {
        window.localStorage.setItem(param, value.toString());
    }, [value]);

    const increment = useCallback(() => {
        setValue((state) => state + 1);
    }, []);

    const decrement = useCallback(() => {
        setValue((state) => state - 1);
    }, []);

    const reset = useCallback(() => {
        setValue(0);
    }, []);

    return {
        value,
        setValue,
        increment,
        decrement,
        reset,
    };
}
