import ClientWrapper from "@/components/ClientWrapper";
import Wrapper from "./Wrapper";
import { ToggleProvider } from "@/components/context/ToggleContext";
import { DarkModeProvider } from "@/components/context/DarkModeContext";
import CustomCursor from "@/utils/CustomCursor";
import { CursorProvider } from "@/components/context/CursorProvider";

export default function Home() {
  return (
    <ClientWrapper>
      <DarkModeProvider>
        <ToggleProvider>
          <CursorProvider>
            <CustomCursor />
            <Wrapper />
          </CursorProvider>
        </ToggleProvider>
      </DarkModeProvider>
    </ClientWrapper>
  );
}
