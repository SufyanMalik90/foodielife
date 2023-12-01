import Categories from "./components/Categories"
import { ImageCard } from "./components/ImageCard";
import Cat from '../../public/breakfast-img.png'
import Cat2 from '../../public/vegan.png'
import Cat3 from '../../public/meat.png'
import Cat4 from '../../public/desert.png'
import Cat5 from '../../public/lunch.png'
import Cat6 from '../../public/chocolate.png'

export default function Home() {
 
  
  return (
    <>
    <main className="">
      <Categories />
      <div className="flex justify-around mx-4">
      <ImageCard imageUrl={Cat} title="Breakfast" gradientColor="rgba(112, 130, 70, 0.10)"/>
      <ImageCard imageUrl={Cat2} title="Vegan" gradientColor="rgba(108, 198, 63, 0.10)" />
      <ImageCard imageUrl={Cat3} title="Meat" gradientColor="rgba(204, 38, 27, 0.10)"/>
      <ImageCard imageUrl={Cat4} title="Desert" gradientColor="rgba(240, 158, 0, 0.10)" />
      <ImageCard imageUrl={Cat5} title="Lunch" gradientColor="rgba(0, 0, 0, 0.05)" />
      <ImageCard imageUrl={Cat6} title="Chocolate" gradientColor="rgba(0, 0, 0, 0.05)" />
      
      </div>
    </main>
    </>
  )
}
