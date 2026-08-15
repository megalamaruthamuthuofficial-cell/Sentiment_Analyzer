import React from "react";

function WordFrequency({ words }) {

    if (!words || words.length === 0) {
        return null;
    }

    return (
        <div className="word-frequency">

            <h2>Most Used Words</h2>

            <div className="word-list">

                {words.map((item, index) => (
                    <div className="word-item" key={index}>

                        <span className="word">
                            {item.word}
                        </span>

                        <span className="count">
                            {item.count}
                        </span>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default WordFrequency;