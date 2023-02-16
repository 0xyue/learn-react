export default function createYueStore(reducer) {
    var list = []
    var state = reducer(undefined, {})
    function subscribe(callback) {
        list.push(callback)
    }

    function dispatch(action) {
        state = reducer(state, action)
        for (var i in list) {
            list[i] && list[i]()
        }
    }

    function getState() {
        return state
    }

    return {
        subscribe,
        dispatch,
        getState
    }
}

