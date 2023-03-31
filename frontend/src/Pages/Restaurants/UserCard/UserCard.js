import avatar from "../../../Assets/temp/JohnSmith.jpeg"
import { Card, CardHeader, CardBody, TextGreyBold, TextOrangeBig, TextOrangeSmall, UserAvatar, UserInfo } from "./UserCardStyles";

const UserCard = () => {
  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={avatar}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>User Name</TextOrangeBig>
          <TextGreyBold> 5 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <TextGreyBold>Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more</TextGreyBold>
        <TextOrangeSmall>read more</TextOrangeSmall>
      </CardBody>
    </Card >
  );
}

export default UserCard;