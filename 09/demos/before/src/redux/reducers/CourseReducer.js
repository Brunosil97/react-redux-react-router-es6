export default function CourseReducer(state = [], action) {
    switch(action.type) {
        case "CREATE_COURSE":
          //  state.push(action.course); //dont do this
          return [...state, {...action.course}];
          
        default:
            return state;
    }
}