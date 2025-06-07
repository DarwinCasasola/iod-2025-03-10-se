// src/components/SingleCat.jsx
function SingleCat({ name, latinName, image, onDelete }) {
    return (
        <div className="SingleCat componentBox">
            <h2>{name}</h2>
            <em>{latinName}</em>
            <div>
                <img src={image} alt={name} width={150} />
            </div>
            <button onClick={onDelete} style={{ marginTop: "0.5rem" }}>
                Delete
            </button>
        </div>
    );
}

export default SingleCat;
