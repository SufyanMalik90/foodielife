import Categories from "./components/Categories";
import { ImageCard } from "./components/ImageCard";
import Cat from "../../public/breakfast-img.png";
import Cat2 from "../../public/vegan.png";
import Cat3 from "../../public/meat.png";
import Cat4 from "../../public/desert.png";
import Cat5 from "../../public/lunch.png";
import Cat6 from "../../public/chocolate.png";
import Section from "./components/Section";
import RecipeCard from "./components/RecipeCard";
import RecipeCard1 from "../../public/RecipeCard1.png";
import Fish  from "../../public/fish.png";
import Sweet  from "../../public/sweet.png";
import Honey  from "../../public/honey.png";
import Chef  from "../../public/chef.png";
import meatImg  from "../../public/meatImg.png";
import healthy  from "../../public/healthy.png";
import TitleDescriptionImage from "./components/TitleDescriptionImage";
import Feedback from "./components/Feedback";
export default function Home() {
  return (
   
      <main className="px-4">
        <Categories />
        <div className="flex justify-around mx-4 flex-wrap">
          <ImageCard
            imageUrl={Cat}
            title="Breakfast"
            gradientColor="rgba(112, 130, 70, 0.10)"
          />
          <ImageCard
            imageUrl={Cat2}
            title="Vegan"
            gradientColor="rgba(108, 198, 63, 0.10)"
          />
          <ImageCard
            imageUrl={Cat3}
            title="Meat"
            gradientColor="rgba(204, 38, 27, 0.10)"
          />
          <ImageCard
            imageUrl={Cat4}
            title="Desert"
            gradientColor="rgba(240, 158, 0, 0.10)"
          />
          <ImageCard
            imageUrl={Cat5}
            title="Lunch"
            gradientColor="rgba(0, 0, 0, 0.05)"
          />
          <ImageCard
            imageUrl={Cat6}
            title="Chocolate"
            gradientColor="rgba(0, 0, 0, 0.05)"
          />
        </div>
        <Section
          title="Simple and tasty recipes"
          content="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim."
        />
        <div className="flex flex-wrap justify-evenly">
          <RecipeCard
            imageUrl={RecipeCard1}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Snack"
          />
          <RecipeCard
            imageUrl={Fish}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Fish"
          />
          <RecipeCard
            imageUrl={Honey}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Breakfast"
          />
          <RecipeCard
            imageUrl={healthy}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Healthy"
          />
          <RecipeCard
            imageUrl={meatImg}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Meat"
          />
          <RecipeCard
            imageUrl={Sweet}
            name="Delicious Pasta"
            duration="30 minutes"
            categorie="Sweet"
          />
        </div>
        <div className="flex h-[597px] w-full">
          <TitleDescriptionImage
            title="Everyone can be a chef in their own kitchen"
            description="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim "
            imageUrl={Chef}
            btn_text={'Learn More'}
          />
        </div>
        <Section
          title="Check out @foodieland on Instagram"
          content="Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim."
        />
        <Feedback />
      </main>
   
  );
}
