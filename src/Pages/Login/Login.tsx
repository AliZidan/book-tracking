// // This context will only hold the `login` method.
// // Calling this method will invoke all the required logic.
// const LoginContext = React.createContext();
// LoginContext.displayName = "Login";

// // This "HOC" (not a true HOC yet) should take care of
// // all the reusable logic - API calls and messages.
// // This will allow me to pass different layouts as children.
// const WithLogin = ({ children }) => {
//   const [popup, setPopup] = useState(null);

//   const doLogin = useCallback(
//     (email, password) =>
//       callLoginAPI(email, password).then(
//         () => {
//           setPopup({
//             message: "Success"
//           });
//         },
//         () => {
//           setPopup({
//             error: true,
//             message: "Failure"
//           });
//         }
//       ),
//     [setPopup]
//   );

//   return (
//     <LoginContext.Provider value={doLogin}>
//       {children}

//       {popup ? (
//         <Modal
//           error={popup.error}
//           message={popup.message}
//           onClose={() => setPopup(null)}
//         />
//       ) : null}
//     </LoginContext.Provider>
//   );
// };

// // This is my main component. It is very neat and simple
// // because all the technical bits are inside WithLogin.
// const MyComponent = () => {
//   const login = useContext(LoginContext);

//   const doLogin = useCallback(() => {
//     login("a@b.c", "password");
//   }, [login]);

//   return (
//     <WithLogin>
//       <button type="button" onClick={doLogin}>
//         Login!
//       </button>
//     </WithLogin>
//   );
// };

export default {};