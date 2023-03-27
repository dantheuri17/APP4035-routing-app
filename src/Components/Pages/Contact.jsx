import React from "react";
import { useState } from "react";

const Contact = () => {
	const [data, setData] = useState("");

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		//create an object for the current input field event
		const currentInputFieldData = {
			[name]: value,
		};
		const updatedData = {
			...data,
			...currentInputFieldData,
		};
		setData(updatedData);
	};
	const handleSubmit = (e) => {
		console.log(data);
		e.preventDefault();
	};

	return (
		<div>
			<h1>This is the Contact Page</h1>
			<form onSubmit={handleSubmit}>
				<label>
					First name:
					<input name="firstName" type="text" onChange={handleChange} />
				</label>
				<br />
				<label>
					Middle name:
					<input name="middleName" type="text" onChange={handleChange} />
				</label>
				<br />
				<label>
					Last name:
					<input name="lastName" type="text" onChange={handleChange} />
				</label>
				<label>
					Student ID Number:
					<input name="idNumber" type="text" onChange={handleChange} />
				</label>
				<label>
					Date of Birth:
					<input name="dob" type="text" onChange={handleChange} />
				</label>
				<label>
					Gender:
					<input name="gender" type="text" onChange={handleChange} />
				</label>
				<label>
					Email Address:
					<input name="emailAddress" type="text" onChange={handleChange} />
				</label>
				<label>
					Is Enrolled:
					<input name="enrolled" type="text" onChange={handleChange} />
				</label>
				<br />
				<input type="submit" value="submit" />
			</form>
		</div>
	);
};

export default Contact;
