import image from './PromotionImage.jpg'

console.log(image);

const Headimage = () => {
    return (
        <div>
            <img src={image} alt="Cannot load image" className="image" />
            <div className="headtext">
                <h4>Super Flash Sales</h4>
                <h4>50% Off</h4>
            </div>
        </div>
    )
}


export default Headimage
