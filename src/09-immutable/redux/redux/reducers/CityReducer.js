import { fromJS } from "immutable"

const CityReducer = (prevState = {
    city: "北京"
}, action) => {
    let newState = fromJS(prevState)
    switch (action.type) {
        case "change-city":
            // newState.city = action.payload
            return newState.set('city', action.payload).toJS()
        default:
            return prevState
    }

}

export default CityReducer