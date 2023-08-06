import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext)
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext)
    }
    const handleFirstLetterUppercase = () => {
        function capitalize(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
        let newtext = text.split(" ").map(capitalize).join(" ")
        setText(newtext)
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClear = () => {
        let newtext = ''
        setText(newtext)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <h6 className= " text-center" >{props.heading}</h6>
                    <textarea placeholder= " Please enter your text here! " className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#203333' : '#E1F8DC', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleUpClick}>UPPER CASE</button>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleLoClick}>lower case</button>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleFirstLetterUppercase}>Title Case</button>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleCopy}>Copy Text</button>
                <button type="button" className="btn btn-dark mx-2 my-1" onClick={handleClear}>Clear Text</button>
            </div >
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3 my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                    <h6>Your text summary:</h6>
                    <p>Character Count: <b>{text.length}</b> | Word Count: <b>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> | Time required to read:  <b>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}</b> Minutes</p>
                </div>
            </div>

        </>
    )
}
