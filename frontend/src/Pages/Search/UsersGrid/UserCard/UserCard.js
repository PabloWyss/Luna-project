import avatar from "../../../../Assets/temp/JohnSmith.jpeg"
import { Card, CardHeader, CardBody, TextGreyBold, TextOrangeBig, TextOrangeSmall, UserAvatar, UserInfo } from "./UserCardStyles";

const UserCard = (props) => {


  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={avatar}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>{props.user.username}</TextOrangeBig>
          <TextGreyBold> 5 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <TextGreyBold>{props.user.description}</TextGreyBold>
        <TextOrangeSmall>read more</TextOrangeSmall>
      </CardBody>
    </Card >
  );
}

export default UserCard;