import { CardHeader, TextGreyBold, TextOrangeBig, UserAvatar, UserInfo } from "./UserCardHeaderStyles";
import avatar from '../../Assets/temp/JohnSmith.jpeg'

const ReviewUser = ({ userName }) => {
  return (
    <CardHeader>
      <UserAvatar>
        <img src={avatar}></img>
      </UserAvatar>
      <UserInfo>
        <TextOrangeBig>{userName}</TextOrangeBig>
        <TextGreyBold> 10 Reviews in total</TextGreyBold>
      </UserInfo>
    </CardHeader>
  );
}

export default ReviewUser;