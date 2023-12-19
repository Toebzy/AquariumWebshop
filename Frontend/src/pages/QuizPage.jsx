import React, { useContext } from 'react';
import { SearchContext } from "../components/SearchProvider";
function QuizPage({isAdmin}) {
    const { searchQuery } = useContext(SearchContext);
    return (
        <div className="content">
        <h1>Quick-witted Quiz</h1>
        <p>Find the fish most suited for you!</p>
        </div>
    );
}

export default QuizPage;