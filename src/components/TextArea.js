import React, { useState } from 'react';
import '../index.css';

export default function TextArea(props) {
    const [text, setText] = useState('this is a text');
    // const [btnstyle, setBtnStyle] = useState({ backgroundColor: "white" });
    const [searchWord, setSearchWord] = useState('');
    // const [replaceWord, setReplaceWord] = useState('replacing a word');
    function textOnChange(e) {
        setText(e.target.value);
    }
    function toUp() {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("converted to uppercase", "success");
        props.alertNull();
    }
    function toLow() {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("converted to lowercase", "success");
        props.alertNull();
    }
    let Words = text.split(" ").length;
    if (text.indexOf(" ")) {
        Words -= 1;
    }
    function changeSearch(e) {
        let newSearch = e.target.value;
        setSearchWord(newSearch);
    }
    function searchInTextArea(e) {
        e.preventDefault();
        if (text.includes(searchWord)) {
            replaceWord();
        }
        else {
            console.log("word not found")
        }
    }

    function replaceWord() {
        let replaceWord = prompt("enter word to replace");
        let newtext = text.replaceAll(searchWord, replaceWord);
        console.log(newtext);
        setText(newtext);
    }


    return (
        <div className="container pv-10 " >
            <form>
                <div className="form-group pb-10" >
                    <label htmlFor="exampleFormControlTextarea1"><h5 className='mb-3 mt-3'>{props.heading}</h5></label>
                    <textarea className="form-control SP1" style={
                        { backgroundColor: props.Style.backgroundColor === "#8a8ad1" ? "#b15555" : props.Style.backgroundColor === "#f7c568" ? "#646427" : "white" }} value={text} onChange={textOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
            </form>
            <div className="d-flex flex-row d-flex justify-content-start">
                <button type="button" className="btn" style={props.btnstyle} onClick={toUp}>To uppercase</button>
                <button type="button" className="btn mx-3  " style={props.btnstyle} onClick={toLow}>To lowercase</button>
                <input className="SP1" type="search" placeholder="Search" value={searchWord} onChange={changeSearch} aria-label="Search" />
                <button className="btn btn-outline-success mt-2 mx-3 " style={props.btnstyle} type="submit" onClick={searchInTextArea}> Search</button>

            </div>
            <h1 className='mt-3'>Your Text Summary</h1>

            <p className='mt-2'>{Words}words and {text.length} letters</p>
            <p>time taken to read={0.008 * Words}</p>
            <h6 className='mt-2'>Preview</h6>
            <p>{text}</p>
        </div>

    );
}