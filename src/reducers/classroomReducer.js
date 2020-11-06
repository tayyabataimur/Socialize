import classroomService from '../services/classroom-service'
import classRoomService from '../services/classroom-service'

const classroomReducer = (state = [], action) => {
    switch(action.type) {
        case "JOIN_CLASSROOM": {
            return [...state, action.data]
        }
        case "CREATE_PERSON": {
            return [...state, action.data]
        }
        default:
            return state;
    }
}

export default classroomReducer

export const joinClassRoom = ({id}) => {
    return async (dispatch) => {
        const persons = await classroomService.joinClassroom({id});
        dispatch({
            type: "JOIN_CLASSROOM",
            data: persons
        })
    }
}

export const createPerson = (person) => {
    return async (dispatch) => {
        const newPerson = await classRoomService.createPerson(person);
        dispatch({
            type: "CREATE_PERSON",
            data: newPerson
        })
    }
}