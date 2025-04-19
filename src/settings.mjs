import { CLOSE_BEHAVIORS, MODULE_ID } from "./constants.mjs";

const fields = foundry.data.fields;
export function registerSettings() {
  game.settings.register(MODULE_ID, "close-behavior", {
    config: true,
    scope: "world",
    type: new fields.StringField({
      initial: CLOSE_BEHAVIORS.close,
      choices: CLOSE_BEHAVIORS,
      required: true,
      nullable: false,
    }),
    name: "SettingsHotkeys.Setting.CloseBehavior.Name",
    hint: "SettingsHotkeys.Setting.CloseBehavior.Hint",
  });
}
export function setting(key) {
  return game.settings.get(MODULE_ID, key);
}
