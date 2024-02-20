import { MODULE_ID } from "./constants.mjs";

export function registerSettings() {
  game.settings.register(MODULE_ID, "focus-before-close", {
    config: true,
    default: false,
    type: Boolean,
    name: "SettingsHotkeys.Setting.FocusBeforeClose.Name",
    hint: "SettingsHotkeys.Setting.FocusBeforeClose.Hint",
    scope: "world",
  });
}
export function setting(key) {
  return game.settings.get(MODULE_ID, key);
}
