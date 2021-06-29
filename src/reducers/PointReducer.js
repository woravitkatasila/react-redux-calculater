///// 2.> reducer  รับค่าจาก action ส่งไป store
const PointReducer=(state={point:0}, action)=>{
    switch (action.type){
        case "setPoint":
            state={
                ...state,
                point:action.payload
            }
            break;
        case "plus":
            state={
                ...state,
                point:state.point+action.payload
            }
            break;
        case "minus":
            state={
                ...state,
                point:state.point-action.payload
            }
            break;
        case "multi":
        state={
            ...state,
            point: state.point*action.payload
        }
            break;
        case "divide":
            state={
                ...state,
                point: state.point/action.payload
            }
                break;
        default:
            return state;
    }

    return state;
}

export default PointReducer