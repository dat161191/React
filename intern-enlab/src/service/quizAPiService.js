import { instance } from "./CustomizeAxios";

// Tạo các phương thức để thao tác với Axios
const getQuizService = () => {
    return instance.get();
};
export default getQuizService