import avatar from "../../../../Assets/temp/JohnSmith.jpeg"
import { Card, CardHeader, CardBody, TextGreyBold, TextOrangeBig, TextOrangeSmall, UserAvatar, UserInfo } from "./UserCardStyles";
const isDev = (!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
const baseURLImage = isDev ? 'http://localhost:8001' : 'https://luna-team4.propulsion-learn.ch'
const UserCard = (props) => {


  return (
    <Card>
      <CardHeader>
        <UserAvatar>
          <img src={baseURLImage+props.user.profile_picture}></img>
        </UserAvatar>
        <UserInfo>
          <TextOrangeBig>{props.user.username}</TextOrangeBig>
          <TextGreyBold> 5 Reviews in total</TextGreyBold>
        </UserInfo>
      </CardHeader>
      <CardBody>
        <TextGreyBold>{props.user.description} ...</TextGreyBold>
        <TextOrangeSmall>read more</TextOrangeSmall>
      </CardBody>
    </Card >
  );
}

export default UserCard;