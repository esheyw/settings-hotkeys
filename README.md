# Settings Hotkeys

A simple module providing three hotkeys and one setting to modify their behaviour:

## The Hotkeys

### Open Configure Settings

Default: `Alt + Z`

### Open Configure Controls

Default: `Alt + X`

### Open Module Management

Default: `Alt + Shift + Z`

## The Setting

If `Focus Before Close` is false (the default state), the given hotkey will toggle the window open/closed, regardless of current focus
(assuming your key presses aren't getting eaten by the search input element.)
If it is true, and the window in question is not on top of the Application stack, it will be brought to front instead of closed.
