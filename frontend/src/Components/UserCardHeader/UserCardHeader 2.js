import { CardHeader, TextGreyBold, TextOrangeBig, UserAvatar, UserInfo } from "./UserCardHeaderStyles";
import avatar from '../../Assets/temp/JohnSmith.jpeg'

const ReviewUser = () => {
  return (
    <CardHeader>
      <UserAvatar>
        <img src={avatar}></img>
      </UserAvatar>
      <UserInfo>
        <TextOrangeBig>User Name</TextOrangeBig>
        <TextGreyBold> 10 Reviews in total</TextGreyBold>
      </UserInfo>
    </CardHeader>
  );
}

export default ReviewUser;