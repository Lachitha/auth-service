import { number, object, string, boolean, TypeOf } from 'zod'

// enum RoleEnumType {
//   ADMIN = "admin",
//   USER = "user",
//   SUPERADMIN = "superadmin",
// }

// const mobileRegex =
//   /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/;
// const nicRegex = /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,32}$/
export const registerUserSchema = object({
  body: object({
    fname: string({
      required_error: 'First Name is required',
    }),
    lname: string({}).optional(),
    role: number({}).optional(),
    company: number({}).optional(),
    status: boolean({
      required_error: 'Status is required',
    }),
    workspace: number({
      required_error: 'Workspace is required',
    }),
    contactNo: string({
      // required_error: "Contact No is required",
    }).optional(), //.regex(mobileRegex, "Invalid Contact No"),
    email: string({
      required_error: 'Email address is required',
    }).email('Invalid email address'),
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters')
      .regex(
        passwordRegex,
        'Password should contains special characters,numbers,at least one capital letter',
      ),
    passwordConfirm: string({
      required_error: 'Please confirm your password',
    }),
  }).refine(data => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Passwords do not match',
  }),
})

export const loginUserSchema = object({
  body: object({
    email: string({
      required_error: 'Email address is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(8, 'Invalid email or password'),
  }),
})

export const userTypeSchema = object({
  body: object({
    name: string({
      required_error: 'Name is required',
    }),
    description: string({
      required_error: 'Description is required',
    }),
  }),
})

export const verifyEmailSchema = object({
  body: object({
    verificationCode: string(),
  }),
})

export const updateUserSchema = object({
  body: object({
    fname: string({
      required_error: 'First Name is required',
    }),
    lname: string({
      required_error: 'Last Name is required',
    }),
    designation: string({
      required_error: 'Designation is required',
    }),
    email: string({}).email('Invalid email address'),
    contact_no: string({
      // required_error: "Contact No is required",
    }).optional(),
    //.regex(mobileRegex, "Invalid Contact No"),
    status: boolean({
      required_error: 'Status is required',
    }),
    role: number({}),
  }),
})

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: 'Employee No is required',
    }),
  }),
})

export const resendOTPSchema = object({
  body: object({
    email: string({
      required_error: 'Email is required',
    }).email('Email is invalid'),
  }),
})

export const ListSchema = object({
  query: object({
    page: number(),
    limit: number(),
    keyword: string().optional(),
  }),
})
export const resetPasswordSchema = object({
  params: object({
    resetToken: string(),
  }),
  body: object({
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters')
      .regex(
        passwordRegex,
        'Password should contains special characters,numbers,at least one capital letter',
      ),
    passwordConfirm: string({
      required_error: 'Please confirm your password',
    }),
  }).refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  }),
})

export const resetFirstPasswordSchema = object({
  body: object({
    oldPassword: string({
      required_error: 'Old Password is required',
    })
      .min(8, 'Old Password must be more than 8 characters')
      .max(32, 'Old Password must be less than 32 characters'),
    password: string({
      required_error: 'Password is required',
    })
      .min(8, 'Password must be more than 8 characters')
      .max(32, 'Password must be less than 32 characters')
      .regex(
        passwordRegex,
        'Password should contains special characters,numbers,at least one capital letter',
      ),
    passwordConfirm: string({
      required_error: 'Please confirm your password',
    }),
  }).refine(data => data.password === data.passwordConfirm, {
    message: 'Passwords do not match',
    path: ['passwordConfirm'],
  }),
})

export type RegisterUserInput = Omit<
  TypeOf<typeof registerUserSchema>['body'],
  'passwordConfirm'
>

export type UserTypeInput = TypeOf<typeof userTypeSchema>['body']
export type LoginUserInput = TypeOf<typeof loginUserSchema>['body']
export type VerifyEmailInput = TypeOf<typeof verifyEmailSchema>['body']
export type UpdateUserInput = TypeOf<typeof updateUserSchema>['body']
export type ListSchema = TypeOf<typeof ListSchema>['query']
export type ForgotPasswordInput = TypeOf<typeof forgotPasswordSchema>['body']
export type ResendOTPInput = TypeOf<typeof resendOTPSchema>['body']
export type ResetPasswordInput = TypeOf<typeof resetPasswordSchema>
export type ResetFirstPasswordInput = TypeOf<typeof resetFirstPasswordSchema>
