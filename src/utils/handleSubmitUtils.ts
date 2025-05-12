// import { signInWithEmailAndPassword } from "firebase/auth";
// import type { AuthValues, FormikHandleSubmit } from "../types/modals";
// import { authSchema } from "../validation/auth";

// export const handleLoginSubmit: FormikHandleSubmit<AuthValues> = async (
//     values,
//     action
// ) => {
//     const { success } = authSchema.safeParse(values);
//     const { email, password } = values;
//     if (success) {
//         try {
//             const data = await signInWithEmailAndPassword(
//                 auth,
//                 email,
//                 password
//             );
//             setIsLoginModalOpen(false);
//             if (!data.user.displayName) setIsSetNameModalOpen(true);
//             console.log(data);
//         } catch (err) {
//             console.log(err);
//         }
//     }
//     action.resetForm();
//     // setIsLoginModalOpen(false);
// };
