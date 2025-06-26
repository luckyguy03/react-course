import { useGetUsersQuery } from "../../../../redux/api/index";


export const ReviewUser = ({ userId }) => {
  const { data: user } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result.data.find(({ id }) => id === userId),
    }),
  });
  
  return <span>{user.name}</span>;
};
