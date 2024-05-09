import { createContext } from "react";

type LogoContextType = {
  glyphWidth: number;
  height: number;
  transform?: string;
};

export const LogoContext = createContext<LogoContextType>({
  glyphWidth: 100,
  height: 100,
});
