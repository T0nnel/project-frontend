export const loadStates = () => {
    try {
        const serializedState = localStorage.getItem('state')

        if (serializedState === null){
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch {
        // ignore write errors
    }

}