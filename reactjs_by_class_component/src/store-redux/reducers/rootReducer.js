// Khởi tạo 1 biến để gán giá trị ban đầu cho state
const initState = {
    users: [
        { id: 1, firstName: 'Trần', lastName: 'Đạt' },
        { id: 2, firstName: 'Boss', lastName: 'Tran' }
    ],
    exmple:[]
}
/**
 * Nhận 2 tham số : state(của Redux), action (1 hành động của React gởi lên cho Redux)
 * return về 1 state để gởi về lại React
 * @param {*} state 
 * @param {*} action 
 */
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('check delete user action', action);
            let users = state.users;
            users = users.filter(ele => ele.id !== action.payload.id)
            return { ...state, users };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 1000) + 1;
            let user = { id: id, firstName: `firstName -  ${id}`, lastName: `lastName -${id} ` }
            return { ...state, users: [...state.users, user] };
        default:
            return state;
    }
}
export default rootReducer;