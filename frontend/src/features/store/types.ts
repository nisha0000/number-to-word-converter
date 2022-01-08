export type ActionType = string;

export type Action<AT extends ActionType = ActionType> = {
  type: AT;
};
export type PayloadAction<AT extends ActionType, Payload> = {
  type: AT;
  payload: Payload;
};
export type ThunkAction<S> = (dispatch: ThunkDispatch, getStore: () => S) => void;
export type ThunkDispatch = (action: any) => Promise<any>;

export type Reducer<State, A extends Action> =
  (state: State | undefined, action: A) => State;

export type RootReducerType<RR> =
  RR extends Reducer<any, any>
    ? ReturnType<RR>
    : { [K in keyof RR]: RootReducerType<RR[K]> };

