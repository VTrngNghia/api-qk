type TDoSomething = () => void

const doSomething: TDoSomething = () => {
    console.log("Did something")
}

const api = {
    doSomething
}

export default api;
