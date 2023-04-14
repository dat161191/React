/* Import thư viện formik và yup*/
import React from "react";
import {Formik, Form, Field} from "formik";
import * as Yup from "yup";

/* Định nghĩa schema (SignupSchema) để xác định các quy tắc validation cho các trường trong form.
- Schema này được sử dụng bởi validationSchema prop của Formik.
- Tạo ra một schema validation object bằng cách gọi phương thức Yup.object().shape().
- Các API để validate dữ liệu của YUP trong react:
  + string(): API cho phép xác thực giá trị là kiểu chuỗi.
  + number(): API cho phép xác thực giá trị là kiểu số.
  + date(): API cho phép xác thực giá trị là kiểu ngày tháng.
  + object(): API cho phép xác thực giá trị là kiểu đối tượng.
  + array(): API cho phép xác thực giá trị là kiểu mảng.
  + mixed(): API cho phép xác thực giá trị là kiểu dữ liệu bất kỳ.
- Các cấu trúc dữ liệu để validate dữ liệu của YUP trong react:
  + required(): Giá trị không được phép rỗng.
  + min(): Giá trị phải lớn hơn hoặc bằng giá trị min được chỉ định.
  + max(): Giá trị phải nhỏ hơn hoặc bằng giá trị max được chỉ định.
  + matches(): Giá trị phải khớp với mẫu được chỉ định.
  + email(): Giá trị phải là địa chỉ email hợp lệ.
  + oneOf(): Giá trị phải thuộc một trong các giá trị được chỉ định.
  + notOneOf(): Giá trị không được thuộc một trong các giá trị được chỉ định.
- VD:   name: Yup.string().required('Name is required'),
        age: Yup.number().required('Age is required').positive().integer(),
        website: Yup.string().url().required('Website is required'),*/
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Invalid email")
        .required("Required")
});
const countries = [
    { value: 'us', label: 'United States' },
    { value: 'ca', label: 'Canada' },
    { value: 'mx', label: 'Mexico' },
];
const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
];
/* Tạo Component return về 1 Formil để quản lý form */
export const ValidationFormikAndYup = () => (
    <div className='bg-black text-light mt-1 mb-1 pb-1'>
        <p>Signup : Formik And Ypu</p>
        {/* initialValues chứa giá trị khởi tạo của các trường trong form
        - validationSchema là schema để validate các giá trị đầu vào được khai báo ở biến SignupSchema được đưa vào prop của Formik
        - onSubmit là hàm callback sẽ được gọi khi form được submit. Nó nhận đầu vào là đối tượng values chứa các giá trị của các trường trong form  */}
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
                // same shape as initial values
                alert("Thêm mới thành công " + JSON.stringify(values));
            }}
        >
            {/* Sử dụng Form và các Field của formik để render các trường trong form.
            - "name" prop của Field là tên của trường.
            - errors và touched là các đối tượng của formik (đối số của hàm) để xác định lỗi validation và trạng thái đã chạm vào trường hay chưa.
            - Nếu có lỗi và trường đã được chạm vào, hiển thị thông báo lỗi.*/}
            {({errors, touched}) => (
                <Form>
                    <div>
                        <label>Options:</label>
                        {options.map((option) => (
                            <div key={option.value}>
                                <label>
                                    <Field type="checkbox" name="options" value={option.value} />
                                    {option.label}
                                </label>
                            </div>
                        ))}
                    </div>
                    <div>
                        <label htmlFor="country">Country</label>
                        <Field as="select" name="country" id="country">
                            <option value="">Select a country</option>
                            {countries.map((country) => (
                                <option key={country.value} value={country.value}>
                                    {country.label}
                                </option>
                            ))}
                        </Field>
                    </div>
                    <div className='mt-1'>
                        <label htmlFor="firstName">First Name: </label>
                        <Field name="firstName"/>
                        {errors.firstName && touched.firstName ?
                            <span className='text-danger'> {errors.firstName}</span> : null}
                    </div>

                    <div className='mt-1'>
                        <label htmlFor="lastName">Last Name: </label>
                        <Field name="lastName"/>
                        {errors.lastName && touched.lastName ?
                            <span className='text-danger'> {errors.lastName}</span> : null}
                    </div>

                    <div className='mt-1 d-flex justify-content-center'>
                        <label htmlFor="email">Email: </label>
                        <Field class="form-control w-25" id="email" name="email" type="email"/>
                        {errors.email && touched.email ? <span className='text-danger'> {errors.email}</span> : null}
                    </div>

                    <button className='mt-1 btn btn-outline-light' type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    </div>
);
