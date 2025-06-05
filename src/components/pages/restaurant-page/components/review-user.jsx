import { useSelector } from "react-redux";
import { selectUserById } from "../../../../redux/entities/users/slice";

export const ReviewUser = ({ userId }) => {
  const user = useSelector((state) => selectUserById(state, userId) || {});

  return <span>{user.name}</span>;
};
