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
                    <p>Time: 30 min</p>
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
            </div>
        </>
    )
}


export default function RecipeSuggestions() {
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

