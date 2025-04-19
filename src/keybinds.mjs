import { MODULE_ID } from "./constants.mjs";
import { setting } from "./settings.mjs";

function handleWindow(id) {
  let app;
  const existing = foundry.applications.instances.get(id);
  const behaviour = setting("close-behavior").toLowerCase();
  const focus = behaviour.includes("focus");
  const close = behaviour.includes("close");
  if (existing) {
    if (ui.activeWindow !== existing && focus) {
      existing.bringToFront();
    } else if (close) {
      existing.close();
    }
  } else {
    switch (id) {
      case "settings-config":
        app = game.settings.sheet;
        break;
      case "controls-config":
        app = new foundry.applications.sidebar.apps.ControlsConfig();
        break;
      case "module-management":
        app = new foundry.applications.sidebar.apps.ModuleManagement();
        break;
    }
    app.render(true, { focus: true });
  }
}

export function registerKeybinds() {
  game.keybindings.register(MODULE_ID, "settingsHotkey", {
    name: "SettingsHotkeys.ToggleSettings",
    editable: [
      {
        key: "KeyZ",
        modifiers: ["Alt"],
      },
    ],
    onDown: () => handleWindow("settings-config"),
  });
  game.keybindings.register(MODULE_ID, "controlsHotkey", {
    name: "SettingsHotkeys.ToggleControls",
    editable: [
      {
        key: "KeyX",
        modifiers: ["Alt"],
      },
    ],
    onDown: () => handleWindow("controls-config"),
  });
  game.keybindings.register(MODULE_ID, "moduleManagementHotkey", {
    name: "SettingsHotkeys.ToggleModules",
    editable: [
      {
        key: "KeyZ",
        modifiers: ["Alt", "Shift"],
      },
    ],
    onDown: () => handleWindow("module-management"),
  });
}
