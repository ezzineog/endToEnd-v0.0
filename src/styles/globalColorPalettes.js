// Then you will be able to use it like this: `<Button color="custom">`
// (For TypeScript, you need to add module augmentation for the `custom` value)
const light = {
    palette: {
        primary: { main: "#42a5f5", },
        error: { main: "#ef5350" },
        success: { main: "#4caf50" },
        secondary: {
            light: '#0066ff',
            main: '#0044ff',
            contrastText: '#ffcc00',
        },
        custom: {
            light: '#ffa726',
            main: '#f57c00',
            dark: '',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
    },
};

const dark = {
    palette: {
        mode: "dark",
        primary: { main: "#1565c0" },
        warnning: { main: "#e65100" },
        error: { main: "#c62828" },
        success: { main: "#1b5e20" },
        info: { main: "##01579b" },
        // text
        text: {
            primary: "#fff"
        }
        , background: {
            default: '#2A2B2E',
          }
    }
};
const paletteTransition = {
    transitions: {
        easing: {
            // This is the most common easing curve.
            easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
            // Objects enter the screen at full velocity from off-screen and
            // slowly decelerate to a resting point.
            // easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
            // Objects leave the screen at full velocity. They do not decelerate when off-screen.
            // easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
            // The sharp curve is used by objects that may return to the screen at any time.
            // sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
    },
}
export { light, dark, paletteTransition }