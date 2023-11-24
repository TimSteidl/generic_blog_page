import * as React from "react";
import { ThemeProvider } from "@/components/ui/theme-provider.tsx";
import { NavigationBar } from "@/components/pages/global/NavigationBar/NavigationBar.tsx";

export default function withRoot<P extends JSX.IntrinsicAttributes>(
  Component: React.ComponentType<P>,
) {
  return function WithRoot(props: P) {
    return (
      <ThemeProvider>
        <header className={"w-full h-20"}>
          <NavigationBar />
        </header>
        <main>
          <div className={"flex justify-center mt-5"}>
            <div className={"w-3/4 h-full flex justify-center"}>
              <Component {...props} />
            </div>
          </div>
        </main>
      </ThemeProvider>
    );
  };
}
