import AsyncStorage from '@react-native-async-storage/async-storage';
import {createClient} from '@supabase/supabase-js';



const supabaUrl = "https://ltmuxeltlesjrerrqrua.supabase.co"
const supabaseAnonKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0bXV4ZWx0bGVzanJlcnJxcnVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzMTMyMDUsImV4cCI6MjA2MDg4OTIwNX0.6MTspgXOFYrn5c9hNrFZIkLz1s8g9wnlJPTVvgx4AZA"

export const supabase = createClient(supabaUrl, supabaseAnonKey, {
    auth:{
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl:false
    }
})