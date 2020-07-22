import * as types from './ActionTypes';
import StaffSerializer from "../moduels/Staff/StaffSerializer";
export function registerOwner(response) {
    return {
        type: types.REGISTRATION,
        user: {
            id: response.data.id,
            photo: response.data.photo,
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
            id: response.data.id,
            photo: response.data.photo,
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
            id: response.data.id,
            photo: response.data.photo,
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }
}

export function getCurrentUser(response) {
    console.log('responseeee',response.data.photo)
    return {
        type: types.GET_CURRENT_USER,
        user: {
            id: response.data.id,
            photo: response.data.photo,
            name: response.data.name,
            email: response.data.email,
            position: response.data.Position,
            isOwner: response.data.isOwner,
            isAuthorized: true,
        }
    }

}

export function getAllStaff(response) {
    console.log('get all staff actions', response)
    return {
        type: types.GET_STAFF,
        user:{
            staff: StaffSerializer.serializeStaffList(response.data),
        }
    }
}
