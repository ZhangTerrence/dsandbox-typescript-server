export enum Renderers {
  Array1DRenderer = "Array1DRenderer",
  LogRenderer = "LogRenderer",
}

export type ArrayNode = {
  value: number;
  selected: boolean;
  changed: boolean;
};

export type Array1DTracerStates = ArrayNode[][];
export type LogTracerStates = string[];
export type TracerStates = Array1DTracerStates | LogTracerStates;

export type Schedule = {
  title: string;
  renderer: Renderers;
  states: string[];
};
