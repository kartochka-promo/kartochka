import * as types from './ActionTypes';

export function registerOwner(response) {
    return {
        type: types.REGISTRATION,
        user: {
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }
}
export function Authorization(response) {
    return {
        type: types.AUTHORIZATION,
        user: {
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }

}

export function registerStaff(response) {
    return {
        type: types.REGISTRATION,
        user: {
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }
}

export function getCurrentUser(response) {
    return {
        type: types.GET_CURRENT_USER,
        user: {
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }

}
