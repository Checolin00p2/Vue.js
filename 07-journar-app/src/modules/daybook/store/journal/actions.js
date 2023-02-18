import journalApi from "@/api/journalApi"

export const loadEntries = async ({commit})=>{
    const {data} = await journalApi.get('/entries.json')
    if(!data){
        commit('setEntry',[])
        return
    }
    const entries = []
    for (let id of Object.keys(data)){
        entries.push({
            id,
            ...data[id]
        })
    }
    commit('setEntry',entries)
}
export const updateEntries = async ({commit},entry)=>{

    const {date,picture,text}= entry
    const dataToSafe = {date,picture,text}

    const response =await journalApi.put(`/entries/${entry.id}.json`,dataToSafe)
    
    commit('updateEntry',{...entry})
}
export const createEntries = async ({commit},entry)=>{
    const {text,date,picture} = entry
    const dataToCreate = {text,date,picture}

    const {data} = await journalApi.post(`/entries.json`,dataToCreate)
    let {name} = data 
    let id = name
    const DataStateUpdate = {
        text,date,id
    }
    

    commit('addEntry',DataStateUpdate)
    return id

}

export const  deleteEntry = async({commit},id)=>{

    try {
        await journalApi.delete(`/entries/${id}.json`)
        console.log('Elemento con id '+id+' Eliminado.');
        commit('delEntry',id)
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}