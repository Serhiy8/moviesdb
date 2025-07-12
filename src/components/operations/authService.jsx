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
    const res = await supabase
  .from('moviesdb')
  .insert(data);
  if(res.error){
        console.log(res.error.message);
        return;
    }
    return res;
}

const deleteFromFavorite = async (id) => {
      const {data, error} = await supabase
        .from('moviesdb')
        .delete()
        .eq('movie_id', id)
        if(error){
            console.log(error)
        }
      return data;
  }

export {supabaseSignup, supabaseSignin, addToFavorite, getFromFavorite, deleteFromFavorite};