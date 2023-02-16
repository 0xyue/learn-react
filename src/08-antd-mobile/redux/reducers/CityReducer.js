const CityReducer = (prevState = {
    city: "北京"
}, action) => {
    let newState = { ...prevState }
    switch (action.type) {
        case "change-city":
            newState.city = action.payload
            return newState
        default:
            return prevState
    }

}

export default CityReducer