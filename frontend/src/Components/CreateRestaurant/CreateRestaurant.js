import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthForm,
  FormContainer,
  FormTitle,
  RequiredField,
  InputText,
  InputSelect,
  Basic,
  LabelText,
} from "./CreateRestaurant.styled";
import { useSelector } from "react-redux";
import {ButtonRegistrationDiv} from "../../Pages/Registration/Signup/Signup.style";
import OrangeButton from "../Button";
import lunaApi from "../../Axios/lunaApi";
import {updateRestaurantData} from "../../Redux/Slices/restaurant";
import {useDispatch} from "react-redux";
function CreateRestaurant() {

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [openingHours, setOpeningHours] = useState("");
  const [priceLevel, setPriceLevel] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const [showRequired, setShowRequired] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleStreet = (e) => {
    setStreet(e.target.value);
  };

  const handleCity = (e) => {
    setCity(e.target.value);
  };

  const handleZip = (e) => {
    setZip(e.target.value);
  };

  const handleWebsite = (e) => {
    setWebsite(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOpeningHours = (e) => {
    setOpeningHours(e.target.value);
  };

    const handlePriceLevel = (e) => {
      setPriceLevel(e.target.value);
    };

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  const handleCreateClick = async (e) => {
         e.preventDefault();

        console.log("3213123")

    if (!name ||
        !category ||
        !country ||
        !street ||
        !city ||
        !phone ||
        !openingHours) {
      setShowRequired(true);
      return;
    }




       const newRestaurantData = {
       "name": name,
      "category": category,
      //"country": country,
      "street": street,
      "city": city,
      "zip_code": zip,
      "website": website,
      "phone": phone,
      "email": email,
      "opening_hours": openingHours,
      "price_range": priceLevel
    }

    //localStorage.setItem("Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgxMTMzMzY4LCJpYXQiOjE2ODA3MDEzNjgsImp0aSI6IjMxMDczMzc4NzM5MzQyZTI5NjE0MTZjYTM0ZTNhZGI2IiwidXNlcl9pZCI6MX0.kp6XUKFh1ENG4yPuu2_P0WfenQ-6nRrBM6bTrMUwy3k")


    const response2 = await lunaApi.post("/restaurants/new/", newRestaurantData,
      {
          headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
'             Content-Type': 'application/json'
          }
      })
    try {
      dispatch(updateRestaurantData(response2.data))
     navigate("/search/restaurants")
    } catch (error) {
        throw error.response.data;
         console.log(error)
    }
    console.log(response2.data)


  }

  return (
    <AuthForm className="CreateRestaurant-form">
      <FormTitle>CREATE NEW RESTAURANT</FormTitle>
      <FormContainer>
        <Basic>Basic
          <div></div>
          <div></div>
          <LabelText htmlFor="nameInput">Name*</LabelText>
          <LabelText htmlFor="categoryInput">Category*</LabelText>
          <LabelText htmlFor="countryInput">Country*</LabelText>

          <InputText id="nameInput" onChange={handleName}/>
          <InputSelect id="categoryInput" onChange={handleCategory}>
            <option value="" disabled defaultValue>Select a value...</option>
            <option value="US">American</option>
             <option value="CH">Swiss</option>
               <option value="IT">Italian</option>
             <option value="SP">Spanish</option>
               <option value="KR">Korean</option>
             <option value="TH">Thai</option>
             <option value="SRB">Serbian</option>
          </InputSelect>
          <InputSelect id="countryInput" onChange={handleCountry}>
            <option value="" disabled defaultValue>Select a value...</option>
            <option value="AT">Austria</option>
            <option value="DE">Germany</option>
            <option value="CH">Switzerland</option>
          </InputSelect>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}

        </Basic>

        <Basic>Address
          <div></div>
          <div></div>
          <LabelText htmlFor="streetInput">Street*</LabelText>
          <LabelText htmlFor="cityInput">City*</LabelText>
          <LabelText htmlFor="zipInput">Zip</LabelText>

          <InputText id="streetInput" onChange={handleStreet}/>
          <InputText id="cityInput" onChange={handleCity}/>
          <InputText id="zipInput" onChange={handleZip}/>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          <div></div>

        </Basic>

        <Basic>Contact
          <div></div>
          <div></div>
          <LabelText htmlFor="websiteInput">Website</LabelText>
          <LabelText htmlFor="phoneInput">Phone*</LabelText>
          <LabelText htmlFor="emailInput">Email</LabelText>

          <InputText id="websiteInput" onChange={handleWebsite}/>
          <InputText id="phoneInput" onChange={handlePhone} />
          <InputText id="emailInput" onChange={handleEmail}/>

          <div></div>
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          <div></div>

        </Basic>


        <Basic>Details
          <div></div>
          <div></div>
          <LabelText htmlFor="openingInput">Opening hours*</LabelText>
          <LabelText htmlFor="priceInput">Price level</LabelText>
          <LabelText htmlFor="imageInput">Image</LabelText>

          <InputText id="openingInput" onChange={handleOpeningHours}/>
          <InputSelect id="priceInput" onChange={handlePriceLevel} >
            <option value="" disabled defaultValue hidden>Select a value...</option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
          </InputSelect>
          <InputSelect id="imageInput" onChange={handleCountry}/>

          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}
          { showRequired ? <RequiredField>This field is required</RequiredField> : <></>}


        </Basic>
          <div>
              <OrangeButton onClickAction={handleCreateClick} textInput={'Create'} type={"submit"}/>

          </div>

      </FormContainer>

    </AuthForm>
  );
}

export default CreateRestaurant;

