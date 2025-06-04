// src/components/SingleCat.jsx
function SingleCat({ name, latinName, image }) {
    return (
        <div className="SingleCat componentBox">
            <h2>{name}</h2>
            <em>{latinName}</em>
            <div>
                <img src={image} alt={name} width={150} />
            </div>
        </div>
    );
}

export default SingleCat;
