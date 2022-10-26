import {createClient} from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY)

export const registro = async (email, password) =>{
    const response = await supabase.auth.signUp({
      email,
      password,
  })
  console.log (response)
  }

export const login = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
     email,
     password,
     })
    return response.data.user.id
}

export const newTask = async (task) => {
    const response = await supabase.from('task')
        .insert (task)
    console.log(response)
}

export const getTask = async () => {
    const response = await supabase
    .from ('task')
    .select ('*')
    .order ('id',{ascending: false})
    return response.data
  }

export const updateTask = async (taskId, task) => {
    const response = await supabase
    .from ('task')
    .update ({ other_column: 'otherValue' })
    .eq ('id',taskId)

console.log (response)
}
export const updateComplete = async (taskId, Complete) => {
    const response = await supabase
    .from ('task')
    .update ({ isCompleted: Complete })
    .eq ('id',taskId)

console.log (response)
}

export const deleteTask = async (taskId) => {
    const response = await supabase
    .from ('task')
    .delete()
    .eq('id',taskId)
  }

export const logOut = async () => {
    const response = await supabase.auth.signOut()
    }


    // const getTask = async () => {
    //     const response = await supabase
    //     .from ('task')
    //     .select ('*')
    //     .order ('id',{ascending: false})
    //   }
      
    //   const updateTask = async () => {
    //   const response = await supabase
    //     .from('task')
    //     .update({
    //       tittle: 'titulo modif',
    //       description: 'Descripcion modif',
    //     })
    //     .eq('id', '1')
    //   } 
      
      
    //   const deleteTask = async () => {
    //     const response = await subapase
    //     .from ('task')
    //     .delete()
    //     .eq('id','1')
    //   }
      
    // const nuevoTask = async (id) => {
//     const response = await supabase.from('task')
//         .insert({
//             user_id: id,
//             tittle: 'Titulo',
//             description: 'Descripcion del task'
//         })
//     console.log(response)
// }