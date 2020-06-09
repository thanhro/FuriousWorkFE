const _httpStatusBranch = (response) => {
    switch (response.status) {
    case 200:
        return response.json()
    case 201:
        return new Promise(resolve => {
            resolve()
        })
    case 400:
        return new Promise((resolve, reject) => {
            reject(response.json())
        })
    case 401:
        return new Promise((resolve, reject) => {
            reject(API.specifyError(
                "AUTH_EXPIRED",
            ))
        })
    case 404:
    case 500:
        return new Promise((resolve, reject) => {
            reject(API.specifyError(
                "SERVER_ERROR",
            ))
        })
    case 503:
        return new Promise((resolve, reject) => {
            reject(API.specifyError(
                "MAINTENANCE_ERROR",
            ))
        })
    default:
        return new Promise((resolve, reject) => {
            reject(API.specifyError(
                "SERVER_ERROR",
            ))
        })
    }
}

const API = {
    post: ({endpoint, body, token = ""}) => {
        return fetch(process.env.REACT_APP_API_URL_BASE + endpoint, {
            method: "POST",
            mode: "cors",
            headers: API.buildHeader(token),
            body: JSON.stringify(Object.assign({}, body))
        }).catch(() => {
            // 途中でオフラインになるなどそもそもネットワークに異常をきたした場合
            return new Promise((resolve, reject) => {
                reject(API.specifyError(
                    "NETWORK_ERROR",
                ))
            })
        }).then(response => {
            return _httpStatusBranch(response)
        })
    },

    postWithFile: ({endpoint, body, token = ""}) => {
        const formData = new FormData()
        Object.keys(body).forEach(key => {
            formData.append(key, body[key])
        })
        return fetch(process.env.REACT_APP_API_URL_BASE + endpoint, {
            method: "POST",
            mode: "cors",
            headers: API.buildHeaderWithFile(token),
            body: formData
        }).catch(() => {
            // 途中でオフラインになるなどそもそもネットワークに異常をきたした場合
            return new Promise((resolve, reject) => {
                reject(API.specifyError(
                    "NETWORK_ERROR",
                ))
            })
        }).then(response => {
            return _httpStatusBranch(response)
        })
    },

    get: ({endpoint}) => {
        return fetch(process.env.REACT_APP_LEGACY_API_URL_BASE + endpoint
            + "encoding=utf-8&format=json", {
            method: "GET",
            headers: API.buildGetHeader()
        }).catch(() => {
            return new Promise((resolve, reject) => {
                reject(API.specifyError(
                    "NETWORK_ERROR",
                ))
            })
        }).then(response => {
            return _httpStatusBranch(response)
        })
    },

    buildHeader: token => {
        const headers = new Headers()
        headers.append("Content-Type", "application/json; utf-8")
        if (token) {
            headers.append("Authorization", `Bearer ${token}`)
        }
        return headers
    },

    buildHeaderWithFile: token => {
        const headers = new Headers()
        if (token) {
            headers.append("Authorization", `Bearer ${token}`)
        }
        return headers
    },

    buildGetHeader: () => {
        const headers = new Headers()
        headers.append("Content-Type", "text/plain; utf-8")
        return headers
    },

    specifyError: (code, msg) => ({
        errors: [{
            code: code,
            msg: msg
        }]
    }),
}