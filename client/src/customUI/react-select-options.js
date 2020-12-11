// these are for react-select components


export default {
    option: (provided, state) => ({
        ...provided,
        "&:active": {
            backgroundColor: "#457537" // background color when clicked
        },
        backgroundColor: state.isFocused ? "#457537" : "white",
        color: state.isFocused ? "white" : "black",
    }),
    control: (base, state) => ({
        ...base,
        '&:hover': { borderColor: '#457537' }, // border style on hover
        border: state.isFocused ? '1px solid #457537' : '1px solid lighgrey',
        boxShadow: state.isFocused ? '1px #457537' : 0

    }),
    multiValue: (styles, { data }) => ({
        ...styles,
        // backgroundColor: "#457537"
        // border: "1px solid #457537"

    }),
    multiValueLabel: (styles, { data }) => ({
        ...styles,
        color: "black"
    })

};