import "../styles/RecipeSuggestions.scss";

function Title() {
    return <h1>How about...</h1>
}

function Recipe() {
    return (
        <>
            <div className="recipe-container">
                <img className="recipe-icon" alt="A small icon of a plate of spaghetti" src="../images/spaghetti.png" />
                <div className="recipe-name">
                    <h2>Spaghetti bolognese</h2>
                    <div className="recipe-additional-info">
                        <p>Time: 30 min</p>
                        <p>You have 6/8 ingredients!</p>
                    </div>
                </div>
            </div>
        </>
    )
}


function RecipesGrid() {
    return (
        <>
            <div id="recipes-container">
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </>
    )
}


export default function RecipeSuggestions() {

    const localStorageData = localStorage.getItem("ingredients");

    if (localStorageData) {
        const ingredients = JSON.parse(localStorageData);

        console.log("ingredients from local storage ", ingredients);
        console.log("type of ingredients", typeof ingredients);

        
    } 

    return (
        <>
            <div id="container">
                <div id="top-screen">
                    <Title />
                </div>
                <RecipesGrid />
            </div>
        </>
    )
}

