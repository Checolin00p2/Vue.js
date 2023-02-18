

export const setEntry =  async(state,entries)=>{
    state.entries=[...state.entries,...entries]
    setTimeout(() => {state.isLoading = false}, 1000);
    // state.isLoading = false
}
export const updateEntry =  (state,entry)=>{
console.log(entry);
    const idx = state.entries.map(e=>e.id).indexOf(entry.id)
    state.entries[idx]=entry
    

}
export const addEntry =  (state,entry)=>{
    
    state.entries=[entry,...state.entries]

}
export const delEntry =  (state,id)=>{
    
    state.entries= state.entries.filter(entry => entry.id !== id) //ojito para reguardar entries exceptop el del id

}