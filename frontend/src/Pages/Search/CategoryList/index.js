import {CategoryLi, CategoryUL} from "./CategoryList.styles";

const CategoryList = ({categoryFunction}) =>{
    const handleCategoryClick = (e) =>{
        categoryFunction(e.target.id)
    }


    return (
        <CategoryUL >
            <CategoryLi onClick={handleCategoryClick} id={"CH"}>CH</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"US"}>US</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"IT"}>IT</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"SP"}>SP</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"KR"}>KR</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"TH"}>TH</CategoryLi>
            <CategoryLi onClick={handleCategoryClick} id={"SRB"}>SRB</CategoryLi>
        </CategoryUL >
    )
}

export default CategoryList