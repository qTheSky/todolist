import React, {ChangeEvent, useState,KeyboardEvent } from 'react';
type props = {
		callBack: (title: string)=> void
}

export const AddItemForm = (props: props) => {
		let [title, setTitle] = useState("")
		let [error, setError] = useState<string | null>(null)

		const addTask = () => {
				let newTitle = title.trim();
				if (newTitle !== "") {
						props.callBack(newTitle);
						setTitle("");
				} else {
						setError("Title is required");
				}
		}

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
				setTitle(e.currentTarget.value)
		}

		const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
				setError(null);
				if (e.key === 'Enter') {
						addTask();
				}
		}
		return (
				<div>
						<input value={title}
						       onChange={onChangeHandler}
						       onKeyPress={onKeyPressHandler}
						       className={error ? "error" : ""}
						/>
						<button onClick={addTask}>+</button>
						{error && <div className="error-message">{error}</div>}
				</div>
		);
};
