import Categories from "./components/Categories"
import { ImageCard } from "./components/ImageCard";
import Cat1 from '../../public/Turkish-Breakfast.jpg'
import Cat2 from '../../public/aaa.png'
export default function Home() {
 
  
  return (
    <>
    <main className="">
      <Categories />
      <div className="flex justify-around mx-4">
      <ImageCard imageUrl={Cat1} title="Breakfast" gradientColor="rgba(77, 118, 0, 0.4)"/>
      <ImageCard imageUrl={Cat1} title="Vegan" gradientColor="rgba(255, 0, 0, 0.4)" />
      <ImageCard imageUrl={Cat1} title="Meat" gradientColor="rgba(277, 209, 130, 0.4)"/>
      <ImageCard imageUrl={Cat1} title="Desert" gradientColor="rgba(205, 255, 0, 0.4)" />
      <ImageCard imageUrl={Cat1} title="Lunch" gradientColor="rgba(209, 255, 255, 0.4)" />
      <ImageCard imageUrl={Cat1} title="Chocolate" gradientColor="rgba(218, 199, 217, 0.4)" />
      </div>
    </main>
    </>
  )
}
