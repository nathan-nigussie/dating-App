import React from "react";
import {useState} from "react";
import logoutImage from "../images/logoutImage.png";
import "../index.css";
import {Link} from "react-router-dom";

const DatingApp=() => {
    const [politics,setPolitics]=useState("ብልጽግና");
    const [education,setEducation]=useState("Allergic to Education");

    const politicsHandleChange=(event) => {
        setPolitics(event.target.value);
        setEducation(event.target.value);
    };

    const handleSubmit=(event) => {};
    return (
        <div className="box">
            <Link to="/">
                {" "}
                <button className="logout-btn">
                    {" "}
                    <img className="logout-image" src={logoutImage} alt="logoutImage" />
                </button>
            </Link>

            <header>
                <h4>Personal information of dating Applicants</h4>
                <div className="nav">
                    <div className="save-btn-cont">
                        <button type="button" class="save-btn" onSubmit={handleSubmit}>
                            Save
                        </button>
                    </div>
                    <div className="refresh-btn-cont">
                        <button type="button" class="refresh-btn" onSubmit={handleSubmit}>
                            New Form
                        </button>
                    </div>
                </div>

                <p className="note-text">
                    <b>Note: form is to be completed at least 21 days prior to date</b>
                </p>
            </header>
            <main>
                <div className="personal-detail-container">
                    <fieldset>
                        <legend>Personal Details</legend>
                        <label>
                            Full Name:
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Enter your Full name"
                            ></input>
                        </label>
                        <br />
                        <label>
                            Email:
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Enter your Email"
                            ></input>
                        </label>
                        <br />
                        <label>
                            Address:
                            <input
                                className="input-text"
                                type="text"
                                placeholder="Enter your Address"
                            ></input>
                        </label>
                        <br />
                        <br />
                        <label>
                            Enter a Phone Number:
                            <br />
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Format:+3884015236"
                            ></input>
                        </label>
                        <br />
                        <label>
                            IQ:
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Enter IQ here"
                            ></input>
                        </label>
                        <h3>Gender</h3>
                        <form className="gender-form">
                            <input type="radio" />
                            <label>Male</label>
                            <br />
                            <input type="radio" />
                            <label>Female</label>
                            <br />
                            <input type="radio" />
                            <label>Other</label>
                            <br />
                        </form>
                        <label>
                            Proposed date of outing:
                            <input className="input-text" type="date"></input>
                        </label>
                        <br />
                    </fieldset>
                </div>
                <div className="personal-characterstics-container">
                    <p>Check All that apply:</p>
                    <form className="characterstics-form">
                        <label>
                            <input type="checkbox" /> I have tattoos and/or piercings
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> I am morethan 2 years older than your
                            Daughter
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> I own a panel van or v8 ute
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> I work full time
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> my parents are rich
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" /> is the date at well lit public location
                        </label>
                        <br />
                    </form>
                </div>
                <div className="academics-poletics-cont">
                    <form>
                        <label>Political Persuation:</label>
                        <select value={politics} onChange={politicsHandleChange}>
                            <option value="left-wing">left-wing</option>
                            <option value="right-wing">right-wing</option>
                            <option value="ብልጽግና">ብልጽግና</option>
                            <option value="ኢዜማ">ኢዜማ</option>
                        </select>
                        <label>Educational Background:</label>
                        <select value={education} onChange={politicsHandleChange}>
                            <option>BSc Degree</option>
                            <option>No Education Background</option>
                            <option>Masters Degree</option>
                            <option>HighSchool Gruaduate</option>
                        </select>
                    </form>
                </div>
                <div className="essay-container">
                    <fieldset className="essay-fieldset">
                        <legend>
                            <h4>Essay Section</h4>
                        </legend>
                        <p className="essay-p1">
                            In 50 or more words explain why you want to date my Daughter:
                        </p>
                        <textarea placeholder="Enter Your Text here!"></textarea>

                        <p>Please upload contact detail of two reference::</p>
                        <textarea placeholder="Enter Your Text here!"></textarea>
                        <br />
                        <label for="myfile">
                            Upload Police clearance certifcate,Bank statement & Medical
                            certificate:
                        </label>
                        <input type="file" name="myfile" />
                    </fieldset>
                    <div className="div-btn">
                        <button type="button" class="submit-btn" onSubmit={handleSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DatingApp;
