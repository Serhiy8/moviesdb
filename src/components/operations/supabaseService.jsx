import { supabase } from "../../supabase/supabase";

const supabaseSignup = async(newUser) => {
    const { data, error } = await supabase.auth.signUp(newUser);
    if(error){
        console.log(error.message);
        return;
    }
    return {data};
}
const supabaseSignin = async(user) => {
    const { data, error } = await supabase.auth.signInWithPassword(user)
    if(error){
        console.log(error.message);
        return;
    }
    return {data};
}

const supabaseSignout = async() => {
    const { error } = await supabase.auth.signOut()
    if(error){
        console.log(error.message);
        return;
    }
}

const getFromFavorite = async () => {
    const {data, error} = await supabase
  .from('moviesdb')
  .select();
  if(error){
        console.log(error.message);
        return;
    }
    return data;
}

const addToFavorite = async (data) => {
    const response = await supabase
  .from('moviesdb')
  .insert(data);
    return response;
}

const deleteFromFavorite = async (id) => {
      const response = await supabase
        .from('moviesdb')
        .delete()
        .eq('movie_id', id)
      return response;
  }

export {supabaseSignup, supabaseSignin, supabaseSignout, addToFavorite, getFromFavorite, deleteFromFavorite};