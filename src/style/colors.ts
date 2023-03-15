export const colors = {
    black: '#212B36',
    white: '#FFFFFF',

    pink: {
        pink100: '#d53259',
        pink50: '#e05775',
    },

    purple: {
        purple100: '#5D32D5',
        purple80: '#7d5bdd',
        purple50: '#AE98EA',
        purple10: '#EFEBFB',
    },  

    grey: {
        grey100: '#333333',
        grey70: '#7C7C7C',
        grey50: '#B1B1B1',
        grey30: '#D6D6D6',
        grey20: '#F1F1F1',
    },

    magenta: {
        magenta100: '#b125c8',
        magenta50: '#f92ae4',
        magenta20: '#f2e0f9',
    },

    red: {
        red100: '#c62828',
        red80: '#f7002e',
        red40: '#ff5a5a',
        red20: '#f1dddd',
        red10: '#fff5f5',
    },

    orange: {
        orange100: '#aa2900',
        orange80: '#e65100',
        orange70: '#db7106',
        orange60: '#f27900',
        orange50: '#ef933e',
        orange20: '#fdecda',
    },

    green: {
        green100: '#008836',
        green80: '#14AF37',
        green60: '#25C827',
        green50: '#32D842',
        green15: '#E0F9E1',
        green10: '#EDF8F0',
    },

    blue: {
        blue100: '#2566C8',
        blue90: '#4354ED',
        blue50: '#0BA7FF',
        blue40: '#6EABE2',
        blue30: '#DAECFD',
        blue20: '#E2F6FD',
    },

    yellow: {
        yellow100: '#CE9400',
        yellow40: '#FFD12F',
        yellow30: '#FCEF66',
    },

    cyan:{
        cyan100: '#2BBA98',
        cyan20: '#D9FFF6'
    }

}

export const colorsDiagramOrderStatus = {
    diagram_shipped: colors.green.green60,
    diagram_printed: colors.blue.blue100,
    diagram_hold: colors.yellow.yellow30,
    diagram_canceled: colors.pink.pink100,
    diagram_awaiting: colors.magenta.magenta100,
    diagram_paused: colors.orange.orange60
}

export const colorsShipper = {
    first: colors.red.red80,
    second: colors.orange.orange100,
    third: colors.yellow.yellow40,
    fourth: colors.yellow.yellow100,
    fifth: colors.green.green50,
    sixth: colors.green.green100,
    seventh: colors.blue.blue50,
    eighth: colors.blue.blue90,
    ninth: colors.magenta.magenta50,
    tenth: colors.magenta.magenta100
}
