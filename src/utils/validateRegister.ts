import { UsernamePasswordInput } from "./UsernamePasswordInput";

export const validateRegister = (options: UsernamePasswordInput) => {
    if (!options.email.includes('@')) {
    return [
        {
            field: "email",
            message: "invalid email",
        },
    ];
}
    }

if (options.username.length <= 2) {
    return [
        {
            field: "username",
            message: "username must be longer than 2 characters",
        },
    ];
}

if (options.username.includes("@")) {
    return [
        {
            field: "username",
            message: "cannot include an @ sign",
        },
    ];
}

if (options.password.length <= 3) {
return  [
    {
        field: "password",
        message: "password must be longer than 3 characters",
    },
];
}


return null;
};