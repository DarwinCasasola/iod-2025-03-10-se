// src/components/BigCats.jsx
import { useState } from "react";
import SingleCat from "./SingleCat";
import AddCatForm from "./AddCatForm";

const originalCats = [
    {
        id: 1,
        name: "Cheetah",
        latinName: "Acinonyx jubatus",
        image: "https://media.istockphoto.com/id/1758173843/photo/a-fast-running-cheetah-taking-a-turn-to-the-left-from-the-front.jpg?s=612x612&w=is&k=20&c=9kFCL3pZOBXiS7W2ffvdt58LonfnRCGnLXaitu2YeoU="
    },
    {
        id: 2,
        name: "Cougar",
        latinName: "Puma concolor",
        image: "https://media.istockphoto.com/id/98215577/photo/puma-concolor.jpg?s=612x612&w=is&k=20&c=vr9XPGJN8S9m_KXpFPzd7dIKAZZsVj1ywtHAbf42lY4="
    },
    {
        id: 3,
        name: "Jaguar",
        latinName: "Panthera onca",
        image: "https://media.istockphoto.com/id/153730635/photo/photograph-of-a-stunning-jaguar-in-the-wild.jpg?s=612x612&w=0&k=20&c=WncT_vs3B53tkVWcmnrIF31u2BXhi03yVkA4bL2vt3U="
    },
    {
        id: 4,
        name: "Leopard",
        latinName: "Panthera pardus",
        image: "https://media.istockphoto.com/id/93218155/photo/leopard-panthera-pardus-standing-side-view-studio-shot.jpg?s=612x612&w=is&k=20&c=Nro4QT_LL8aKYwBuwy4ItKPjdcSdV4q6235qQG6axFk="
    },
    {
        id: 5,
        name: "Lion",
        latinName: "Panthera leo",
        image: "https://media.istockphoto.com/id/1333977253/photo/male-lion-resting-on-a-rock.jpg?s=612x612&w=0&k=20&c=JZSHUW-GSk49vNiTGwRryqiG2H0HgDh0q7P1Ny985L4="
    },
    {
        id: 6,
        name: "Snow leopard",
        latinName: "Panthera uncia",
        image: "https://media.istockphoto.com/id/162449948/photo/snow-leopard-looking-at-camera.jpg?s=612x612&w=0&k=20&c=cPooWWcXgzCSlv17WNCBVYgIPpzoB9sHG22a_oIs3w4="
    },
    {
        id: 7,
        name: "Tiger",
        latinName: "Panthera tigris",
        image: "https://media.istockphoto.com/id/1420676204/photo/portrait-of-a-royal-bengal-tiger-alert-and-staring-at-the-camera-national-animal-of-bangladesh.jpg?s=612x612&w=0&k=20&c=0OCYv99Ktv3fJ-YYlg7SetHBJj3pIk58WY7GDy5VCtI="
    }
];

function BigCats() {
    const [cats, setCats] = useState(originalCats);

    // -- Logic functions grouped together
    const addCat = (newCat) => setCats([...cats, newCat]);

    const deleteCat = (id) => {
        const updatedCats = cats.filter((cat) => cat.id !== id);
        setCats(updatedCats);
    };

    const sortAlphabetically = () => {
        const sorted = [...cats].sort((a, b) => a.name.localeCompare(b.name));
        setCats(sorted);
    };

    const reverseList = () => {
        const reversed = [...cats].reverse();
        setCats(reversed);
    };

    const filterPanthera = () => {
        const filtered = originalCats.filter((cat) => cat.latinName.startsWith("Panthera"));
        setCats(filtered);
    };

    const resetList = () => setCats(originalCats);

    // -- JSX UI
    return (
        <div className="BigCats">
            <AddCatForm onAddCat={addCat} />

            <div style={{ marginBottom: "1rem" }}>
                <button onClick={sortAlphabetically}>Sort A–Z</button>
                <button onClick={reverseList}>Reverse</button>
                <button onClick={filterPanthera}>Filter Panthera</button>
                <button onClick={resetList}>Reset</button>
            </div>

            {cats.map((cat) => (
                <SingleCat key={cat.id} {...cat} onDelete={() => deleteCat(cat.id)} />
            ))}
        </div>
    );
}

export default BigCats;
