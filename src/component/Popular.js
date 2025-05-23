import image1  from "./images/image-1.jpg"
import image2 from "./images/image-2.jpg"
import image3 from "./images/image-3.jpg"
import image4 from "./images/image-4.jpg"
import image5  from "./images/image-1.jpg"
import image6 from "./images/image-2.jpg"
import image7 from "./images/image-3.jpg"
import image8 from "./images/image-4.jpg"

function Popular(){
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p class="popular__subtitle">Pick the best fit</p>

        <div class="popular__container">
            <div class="course-card">
                <img src={image1} alt="img1"/>
                <p>2025 Python Data Visualization Materclass</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image2} alt="img2"/>
                <p>Basic to Advance Programming with EMC</p>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image3} alt="img3"/>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image4} alt="img4"/>
                <p>Master UI/UX Designing with Figma</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            
            <div class="course-card">
                <img src={image5} alt="img5"/>
                <p>Web Development Bootcamp 2023</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image6} alt="img6"/>
                <p>2025 Python Data Visualization Materclass</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image7} alt="img7"/>
                <p>Master UI/UX Designing with Figma</p>
                <p>Col Steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>

            <div class="course-card">
                <img src={image8} alt="img8"/>
                <p>Basic to Advance Programming with EMC</p>
                <p>Col Steele</p>
                <p>3.9 ⭐⭐⭐</p>
                <p>449 <del>1999</del></p>
            </div>
            </div>
    </div>
    )
}
export default Popular