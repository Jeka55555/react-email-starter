interface IUserNameLogInProps {
  user?: string;
}
const UserNameLogIn = ({ user = " VLAD" }: IUserNameLogInProps) => {
  return <>{user}</>;
};

export default UserNameLogIn;
