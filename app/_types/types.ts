export type reducerState = {
  count: number;
  showText: boolean;
};

export type reducerAction = { type: "INCREMENT" } | { type: "TOGGLE" };
