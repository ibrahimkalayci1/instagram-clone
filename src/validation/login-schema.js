import Yup from "./validate"

 export  const LoginSchema = Yup.object().shape({
    username: Yup.string()
       .required("Kullanıcı adı zorunludur"),
    password: Yup.string()
       .required("sifre zorunludur")
})

