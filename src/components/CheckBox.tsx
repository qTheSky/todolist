import React, {ChangeEvent} from 'react';

type CheckBoxPropsType = {
		callBack: (eventValue: boolean) => void
		checked: boolean
}

export const CheckBox = (props: CheckBoxPropsType) => {

		const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
				props.callBack(event.currentTarget.checked)
		}

		return (
				<input type="checkbox"
				       onChange={onChangeHandler}
				       checked={props.checked}
				/>
		);
};
