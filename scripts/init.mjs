import { registerKeybinds } from "./keybinds.mjs";
import { registerSettings } from "./settings.mjs";

Hooks.once("init", () => {
  registerSettings();
  registerKeybinds();
});
