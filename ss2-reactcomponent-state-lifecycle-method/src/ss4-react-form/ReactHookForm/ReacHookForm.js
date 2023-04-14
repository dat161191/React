/* sử dụng thư viện React Hook Form để thực hiện validation trong form.
- Các API để quản lý các trường form, kiểm tra lỗi và submit dữ liệu của React Hook Form gồm:
            + useForm(): Hook chính để khởi tạo một instance của React Hook Form.
            Nó trả về các phương thức và thuộc tính cần thiết để quản lý form.
            + register(): Phương thức này được sử dụng để đăng ký các trường input với React Hook Form.
            Nó sẽ tạo ra một đối tượng ref để lưu trữ giá trị và tình trạng của trường input đó.
            + watch(): Phương thức này cho phép bạn xem xét giá trị của một hoặc nhiều trường input trong form.
            + handleSubmit(): Phương thức này được sử dụng để xử lý sự kiện khi form được submit.
            Nó nhận vào một hàm callback để xử lý dữ liệu khi form được submit.
            + errors: Đây là một đối tượng chứa các thông tin lỗi của form.
            Nó bao gồm các thuộc tính tương ứng với các trường input đã được đăng ký và các lỗi liên quan đến chúng.
            + setError(): Phương thức này cho phép bạn thiết lập các thông tin lỗi của form.
            + clearErrors(): Phương thức này cho phép bạn xóa các thông tin lỗi của form.
            + reset(): Phương thức này cho phép bạn đặt lại giá trị của form.
            + trigger(): Phương thức này cho phép bạn kiểm tra lại các luật kiểm tra và tạo ra thông tin lỗi nếu cần thiết.*/
import {useForm} from "react-hook-form";

export default function ReactHookForm() {
    /*Sử dụng hook useForm() để khởi tạo một đối tượng form.
    - Destructuring để lấy ra các thuộc tính và phương thức cần thiết, bao gồm:
        - register: một phương thức để đăng ký một input với form.Dăng ký các trường input firstName và mail.
        - formState.errors: một đối tượng chứa các lỗi của form.
        - handleSubmit: một phương thức được gọi khi form được submit.*/
    const {register, formState: {errors}, handleSubmit} = useForm();

    /*Xử lý dữ liệu khi submit: thường dùng để Call API*/
    const onSubmit = (data) => alert("Submit thành công: " + JSON.stringify(data));

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-black text-light mt-1 mb-1 pb-1">
            <p>React Hook Form</p>
            {/*sử dụng register() để đăng ký các trường input. Các thuộc tính của input như name hay type được truyền vào thông qua register().
            - Dùng aria-invalid để hiển thị trạng thái của các input. Nếu input không hợp lệ, giá trị aria-invalid được đặt là true.
            - Sử dụng các điều kiện để hiển thị thông báo lỗi cho các input thông qua giá trị aria-invalid */}
            <div className="mt-1">
                <label htmlFor="firstName">FirstName: </label>
                <input id="firstName"
                       {...register("firstName", {required: true})}
                       aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName?.type === 'required' &&
                <span className='text-danger' role="alert">First name is required</span>}

            </div>
            <div className="mt-1">
                <label htmlFor="email">Email: </label>
                <input id="email"
                       {...register("email",
                           {required: "Email không được để trống", pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/})}
                       aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.email?.type === 'required' &&
                <span role="alert" className='text-danger'> {errors.email?.message}</span>}
                {errors.email?.type === 'pattern' &&
                <span role="alert" className='text-danger'> Email không đúng đúng dạng</span>}
            </div>

            <input className='btn btn-outline-light mt-1' type="submit"/>
        </form>
    );
}
