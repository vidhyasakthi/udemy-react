import image1 from "./images/image-1.jpg"
import image2 from "./images/image-2.jpg"
import image3 from "./images/image-3.jpg"
import image4 from "./images/image-4.jpg"

function Recommended() {
    return (
        <div class="recommended">
            <h1 class="recommended__title">Recommended for you</h1>
            <p>pick the best fit</p>
            <div class="recommended__container">

                <div class="course-card">
                    <img src={image1}alt="img1"/>
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
                    <img src={image3}alt="img3"/>
                        <p>Web Development Bootcamp 2023</p>
                        <p>Col Steele</p>
                        <p>4.5 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>

                <div class="course-card">
                    <img src={image4}alt="img4"/>
                        <p>Master UI/UX Designing with Figma</p>
                        <p>Col Steele</p>
                        <p>4.3 ⭐⭐⭐⭐</p>
                        <p>439 <del>1999</del></p>
                </div>

            </div>

        </div>
    )
}
export default Recommended