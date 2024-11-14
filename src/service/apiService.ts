import axios from "axios";
const STAGING_API_URL = "";

export const API_URL = STAGING_API_URL;
let APIKit = axios.create({
  baseURL: STAGING_API_URL,
  timeout: 30000,
});

// //!Axios Intercepture For Handle Missing Authentication
// export const SetAPIResponseInterceptors = ({On401Error = () => {}}) => {
//   APIKit.interceptors.response.use(
//     response => {
//       //Handle Missing Authentication Error
//       if (response.status === 401 && On401Error) {
//         On401Error();
//       }
//       return response;
//     },
//     error => {
//       return error;
//     },
//   );
// };

export const UserService = {};
