import React from "react";
import { useParams } from "react-router-dom";
import pageData from "../data/pageData.json";
import placeholderData from "../data/placeholderData.json"; // Import placeholder data
import "./SubContentPage.css";

function SubContentPage() {
    const { id, subId, cardTitle, subTopic } = useParams(); // Get all possible params

    // Determine if the route is `/projects/:id/:subId` or `/:cardTitle/:subTopic`
    const isProjectRoute = id && subId;

    // Get the content based on the route type
    let content;
    if (isProjectRoute) {
        content = pageData[id]?.content[subId];
    } else {
        // Find the content based on the cardTitle and subTopic
        const card = placeholderData.find(
            (item) =>
                item.cardTitle.toLowerCase() === cardTitle.toLowerCase() &&
                item.subTopic.toLowerCase() === subTopic.toLowerCase()
        );
        content = card?.content;
    }

    if (!content) {
        return <div>Content not found</div>;
    }

    return (
        <div className="sub-content-page">
            <header>
                <h1>{isProjectRoute ? `Project ${id}` : cardTitle}</h1>
            </header>
            <main>
                <p>{content}</p>
            </main>
        </div>
    );
}

export default SubContentPage;