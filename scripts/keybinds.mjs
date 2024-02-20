import { setting } from "./settings.mjs";

function handleWindow(id) {
  let app;
  const existing = Object.values(ui.windows).find((w) => w.id === id);
  if (existing) {
    if (ui.activeWindow !== existing && setting("focus-before-close")) {
      existing.render(true);
    } else {
      existing.close();
    }
  } else {
    switch (id) {
      case "client-settings":
        app = game.settings.sheet;
        break;
      case "keybindings":
        app = new KeybindingsConfig();
        break;
      case "module-management":
        app = new ModuleManagement();
        break;
    }
    app.render(true, { focus: true });
  }
}

export function registerKeybinds() {
  game.keybindings.register(MODULE, "settingsHotkey", {
    name: `Toggle Settings Window`,
    editable: [
      {
        key: "KeyZ",
        modifiers: ["Alt"],
      },
    ],
    onDown: () => handleWindow("client-settings"),
  });
  game.keybindings.register(MODULE, "keybindingsHotkey", {
    name: `Open Configure Controls menu`,
    editable: [
      {
        key: "KeyX",
        modifiers: ["Alt"],
      },
    ],
    onDown: () => handleWindow("keybindings"),
  });
  game.keybindings.register(MODULE, "moduleManagementHotkey", {
    name: `Open Module Management`,
    editable: [
      {
        key: "KeyZ",
        modifiers: ["Alt", "Shift"],
      },
    ],
    onDown: () => handleWindow("module-management"),
  });
}
