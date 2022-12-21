import create from 'zustand'

export const useTaskStore = create((set) => ({
    tasks: [],

    addTask: (tk) => set((state) => ({
         tasks: [...state.tasks, tk]
    })),

    checkTask: (id) => set((state) =>({
        tasks: state.tasks.map((tk) => 
        tk.id == id ? {id: tk.id, content: tk.content, ischecked: !tk.ischecked} : {id: tk.id, content: tk.content, ischecked: tk.ischecked})
    })),

    removeTask: () => set((state) =>({
        tasks: state.tasks.filter((tk)=> tk.ischecked != true), 
        isSelect: false
    })),
    
    //selecionar todas as tasks
    selectTasks: false,
    isSelect: false,

    toggleSelect: () => set((state) =>({
        selectTasks: !state.selectTasks,
    })),

    activeTdsTasks: () => set(() =>({
        isSelect: true,
    })),

    tdsTask: () => set((state) =>({
        selectTasks: false,
        isSelect: false,
        tasks: state.tasks.map((tk) => tk.ischecked === false ? {id: tk.id, content: tk.content, ischecked: !tk.ischecked} : {id: tk.id, content: tk.content, ischecked: tk.ischecked})
    }))
}))
