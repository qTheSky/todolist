import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, tasksReducer} from './tasks-reducer';
import {TasksStateType} from '../App';
import {addTodolistAC, removeTodolistAC} from './todolists-reducer';
import {TaskPriorities, TaskStatuses} from '../api/todolists-api';

let startState: TasksStateType = {};
beforeEach(() => {
		startState = {
				'todolistId1': [
						{
								id: '1',
								title: 'HTML&CSS',
								status: TaskStatuses.New,
								todoListId: 'todolistId1',
								description: '',
								startDate: '',
								deadline: '',
								addedDate: '',
								order: 0,
								priority: TaskPriorities.Low,
						}, {
								id: '3',
								title: 'HTML&CSS',
								status: TaskStatuses.Completed,
								todoListId: 'todolistId1',
								description: '',
								startDate: '',
								deadline: '',
								addedDate: '',
								order: 0,
								priority: TaskPriorities.Low,
						}, {
								id: '2',
								title: 'HTML&CSS',
								status: TaskStatuses.New,
								todoListId: 'todolistId1',
								description: '',
								startDate: '',
								deadline: '',
								addedDate: '',
								order: 0,
								priority: TaskPriorities.Low,
						},
				],
				'todolistId2': [
						{
								id: '1',
								title: 'HTML&CSS',
								status: TaskStatuses.New,
								todoListId: 'todolistId2',
								description: '',
								startDate: '',
								deadline: '',
								addedDate: '',
								order: 0,
								priority: TaskPriorities.Low,
						},
						{
								id: '1',
								title: 'HTML&CSS',
								status: TaskStatuses.Completed,
								todoListId: 'todolistId2',
								description: '',
								startDate: '',
								deadline: '',
								addedDate: '',
								order: 0,
								priority: TaskPriorities.Low,
						},
				]
		};
});

test('correct task should be deleted from correct array', () => {
		const action = removeTaskAC('2', 'todolistId2');

		const endState = tasksReducer(startState, action)

		expect(endState['todolistId1'].length).toBe(3);
		expect(endState['todolistId2'].length).toBe(2);
		expect(endState['todolistId2'].every(t => t.id != '2')).toBeTruthy();
});
test('correct task should be added to correct array', () => {
		const action = addTaskAC('juce', 'todolistId2');

		const endState = tasksReducer(startState, action)

		expect(endState['todolistId1'].length).toBe(3);
		expect(endState['todolistId2'].length).toBe(4);
		expect(endState['todolistId2'][0].id).toBeDefined();
		expect(endState['todolistId2'][0].title).toBe('juce');
		expect(endState['todolistId2'][0].status).toBe(TaskStatuses.New);
});
test('status of specified task should be changed', () => {
		const action = changeTaskStatusAC('2', TaskStatuses.New, 'todolistId2');

		const endState = tasksReducer(startState, action)

		expect(endState['todolistId1'][1].status).toBe(TaskStatuses.Completed);
		expect(endState['todolistId2'][1].status).toBe(TaskStatuses.New);
});
test('title of specified task should be changed', () => {
		const action = changeTaskTitleAC('2', 'yogurt', 'todolistId2');

		const endState = tasksReducer(startState, action)

		expect(endState['todolistId1'][1].title).toBe('HTML&CSS');
		expect(endState['todolistId2'][1].title).toBe('HTML&');
		expect(endState['todolistId2'][0].title).toBe('bread');
});
test('new array should be added when new todolist is added', () => {
		const action = addTodolistAC('new todolist');

		const endState = tasksReducer(startState, action)


		const keys = Object.keys(endState);
		const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2');
		if (!newKey) {
				throw Error('new key should be added')
		}

		expect(keys.length).toBe(3);
		expect(endState[newKey]).toEqual([]);
});
test('propertry with todolistId should be deleted', () => {
		const action = removeTodolistAC('todolistId2');

		const endState = tasksReducer(startState, action)

		const keys = Object.keys(endState);

		expect(keys.length).toBe(1);
		expect(endState['todolistId2']).not.toBeDefined();
});
