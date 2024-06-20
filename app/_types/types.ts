// UseReducer Component

export type reducerState = {
  count: number;
  showText: boolean;
};

export type reducerAction = { type: "INCREMENT" } | { type: "TOGGLE" };


// UseImperativeHandle Component

export type ButtonHandle = {
    alterToggle: () => void
}
