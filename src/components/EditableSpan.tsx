import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type EditableSpanPropsType = {
		title: string
		callBack: (newTitle: string) => void
}

export const EditableSpan = (props: EditableSpanPropsType) => {
		const [edit, setEdit] = useState<boolean>(false)
		const [newTitle, setNewTitle] = useState(props.title)

		const EditTrueHandler = () => {
				setEdit(!edit)
				changeTitle()
		}

		const changeTitle = () => {
				props.callBack(newTitle)
		}

		const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
				setNewTitle(e.currentTarget.value)
		}

		const onKeyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
				if (e.key === 'Enter') {
						EditTrueHandler()
				}
		}

		return (
				edit
						? <input onKeyDown={onKeyDownHandler}
						         onChange={onChangeHandler}
						         onBlur={EditTrueHandler}
						         autoFocus
						         type="text"
						         value={newTitle}
						/>
						: <span onDoubleClick={EditTrueHandler}>{props.title}</span>
		);
};