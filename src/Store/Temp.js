import create from 'zustand'

export const useTempStore = create((set) => ({
    tempPomodoro: "00:00",

    setTempPomodoro: (tempo) => set(() =>({ 
        tempPomodoro: tempo
    })),
  
    //definir tempo da conf
    pom: "25:00",
    pCurta: "05:00",
    pLonga: "15:00",

    defPom: (tempo) =>set(() =>({
        pom: tempo
    })),

    defpCurta: (tempo) =>set(() =>({
        pCurta: tempo
    })),

    defpLonga: (tempo) =>set(() =>({
        pLonga: tempo
    })),
    

    //selecionar o tempo definido na conf
    isDisabled: ['Pomodoro-Curto','Pausa Curta-Curto','Pausa Longa-Curto'],

    setIsDisabled: (val) => set(() => ({
        isDisabled: val
   }))
}))