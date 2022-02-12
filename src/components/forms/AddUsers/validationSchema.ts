import * as yup from 'yup'
import { FORM_VALIDATIONS } from '../../../constants'


export const validationSchema = yup.object().shape({
    name: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    lastname: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED),
    email: yup
        .string()
        .email(FORM_VALIDATIONS.WRONG_FORMAT)
        .required(FORM_VALIDATIONS.REQUIRED),
    password: yup
        .string()
        .required(FORM_VALIDATIONS.REQUIRED)
        .min(8, FORM_VALIDATIONS.SIZE.EIGTH)
        .matches(/^(?=.*[a-z])(?=.*\d)[a-z\d\w\W]{8,}$/),
    role: yup.string(),
    birthdate: yup
        .date()
        .required(FORM_VALIDATIONS.REQUIRED)
})