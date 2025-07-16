import { create } from "zustand";

// Interface defining the structure of a List object
// Can be a category for todos (e.g. "Personal", "Work")
interface List {
	name: string;
	emoji: string;
}

// Interface defining the structure of a Workspace object
// Can be a higher-level grouping (e.g. "Company", "Project")
interface Workspace {
	name: string;
	emoji: string;
}

// Interface defining the structure of a single Todo object
interface Todo {
	text: string;
	list: string;
	workspace: string;
}

// Main application state interface
interface AppState {
	// Array of all Lists, Workspaces, and Todos
	lists: List[];
	workspaces: Workspace[];
	todos: Todo[];

	// Editing state variables
	editIndex: number | null;
	editText: string;
	dropdownIndex: number | null;

	// Modal visibility flags
	isListModalOpen: boolean;
	isWorkspaceModalOpen: boolean;

	// Inputs for creating new Todo
	selectedList: string;
	selectedWorkspace: string;
	todoText: string;

	// Modal form state
	modalName: string;
	modalEmoji: string;
	modalType: "List" | "Workspace" | null;

	// Actions to update the state
	addList: (name: string, emoji: string) => void;
	addWorkspace: (name: string, emoji: string) => void;
	addTodo: (todo: Todo) => void;
	updateTodo: (index: number, updatedTodo: Todo) => void;
	deleteTodo: (index: number) => void;
	handleEdit: (index: number) => void;
	handleUpdate: (index: number) => void;
	handleDropdownClick: (index: number) => void;
	setEditText: (text: string) => void;
	setEditIndex: (index: number | null) => void;
	openListModal: () => void;
	closeListModal: () => void;
	openWorkspaceModal: () => void;
	closeWorkspaceModal: () => void;
	setSelectedList: (list: string) => void;
	setSelectedWorkspace: (workspace: string) => void;
	setTodoText: (text: string) => void;
	handleAddTodo: () => void;
	setModalName: (name: string) => void;
	setModalEmoji: (emoji: string) => void;
	setModalType: (type: "List" | "Workspace") => void;
	handleSaveModal: () => void;
}

// Create the Zustand store with initial state and actions
const useStore = create<AppState>((set) => ({
	// Initial state values
	lists: [],
	workspaces: [],
	todos: [],
	editIndex: null,
	editText: "",
	dropdownIndex: null,
	isListModalOpen: false,
	isWorkspaceModalOpen: false,
	selectedList: "",
	selectedWorkspace: "",
	todoText: "",
	modalName: "",
	modalEmoji: "",
	modalType: null,

	// Actions to add new list with name and emoji
	addList: (name, emoji) =>
		set((state) => ({
			lists: [...state.lists, { name, emoji }],
		})),

	// Actions to add new workspace with name and emoji
	addWorkspace: (name, emoji) =>
		set((state) => ({
			workspaces: [...state.workspaces, { name, emoji }],
		})),

	// Actions to add new todo item
	addTodo: (todo) =>
		set((state) => ({
			todos: [...state.todos, todo],
		})),

	// Actions to update an existing todo by index
	updateTodo: (index, updatedTodo) =>
		set((state) => ({
			todos: [
				...state.todos.map((todo, idx) => (idx === index ? updatedTodo : todo)),
			],
		})),

	// Actions to delete a todo by index
	deleteTodo: (index) =>
		set((state) => ({
			todos: state.todos.filter((_, idx) => idx !== index),
			dropdownIndex: null,
		})),

	// Actions to edit a todo by index
	handleEdit: (index) =>
		set((state) => ({
			editIndex: index,
			editText: state.todos[index].text,
			dropdownIndex: null,
		})),

	// Actions to save the edited todo
	handleUpdate: (index) =>
		set((state) => {
			// Copy existing todo and update with edited text
			const updatedTodo = {
				...state.todos[index],
				text: state.editText,
			};

			// Create new todos array and replace the edited todo
			const newTodos = [...state.todos];
			newTodos[index] = updatedTodo;

			// Return the updated state
			return {
				todos: newTodos,
				editIndex: null,
				editText: "",
			};
		}),

	// Action to toggle dropdown menu for a todo
	handleDropdownClick: (index) =>
		set((state) => ({
			dropdownIndex: index === state.dropdownIndex ? null : index,
		})),

	// Action to set edit text during todo editing
	setEditText: (text) => set({ editText: text }),

	// Action to set which todo is being edited
	setEditIndex: (index) => set({ editIndex: index }),

	// Action to open list creation modal
	openListModal: () => set({ isListModalOpen: true, modalType: "List" }),

	// Action to close list creation modal and reset fields
	closeListModal: () =>
		set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),

	// Action to open workspace creation modal
	openWorkspaceModal: () =>
		set({ isWorkspaceModalOpen: true, modalType: "Workspace" }),

	// Action to close workspace creation modal and reset fields
	closeWorkspaceModal: () =>
		set({ isWorkspaceModalOpen: false, modalName: "", modalEmoji: "" }),

	// Action to set currently selected list
	setSelectedList: (list) => set({ selectedList: list }),

	// Action to set currently selected workspace
	setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),

	// Action to set text for new todo
	setTodoText: (text) => set({ todoText: text }),

	// Action to handle adding a new todo
	handleAddTodo: () =>
		set((state) => {
			const { todoText, selectedList, selectedWorkspace } = state;

			// Validate todo text is not empty
			if (todoText.trim() === "") {
				alert("Todo can't be empty");
				return state;
			}

			// Create new todo object
			const newTodo = {
				text: todoText,
				list: selectedList,
				workspace: selectedWorkspace,
			};

			// Update state with new todo and reset input fields
			return {
				todos: [...state.todos, newTodo],
				todoText: "",
				selectedList: "",
				selectedWorkspace: "",
			};
		}),

	// Action to set name in modal
	setModalName: (name) => set({ modalName: name }),

	// Action to set emoji in modal
	setModalEmoji: (emoji) => set({ modalEmoji: emoji }),

	// Action to set modal type (List or Workspace)
	setModalType: (type) => set({ modalType: type }),

	// Action to handle saving modal data
	handleSaveModal: () =>
		set((state) => {
			const { modalName, modalEmoji, modalType } = state;

			// Validate modal name is not empty
			if (modalName.trim() === "") {
				return state;
			}

			// Create new list or workspace based on modal type
			if (modalType === "List") {
				state.addList(modalName, modalEmoji);
			} else if (modalType === "Workspace") {
				state.addWorkspace(modalName, modalEmoji);
			}

			// Reset modal fields
			return {
				modalName: "",
				modalEmoji: "",
				modalType: null,
				isListModalOpen: false,
				isWorkspaceModalOpen: false,
			};
		}),
}));

export default useStore;
