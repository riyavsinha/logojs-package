import { createContext } from "react";

type LogoContextType = {
  glyphWidth: number;
  height: number;
  values: number[][];
  maxValue: number;
  minValue: number;
  transform?: string;
};

export const LogoContext = createContext<LogoContextType>({
  glyphWidth: 100,
  height: 100,
  values: [],
  maxValue: 1,
  minValue: 0,
});
