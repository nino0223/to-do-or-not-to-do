import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://tydoehugpbhlgxxfshhr.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5ZG9laHVncGJobGd4eGZzaGhyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNzg3MzQsImV4cCI6MjA2ODg1NDczNH0._dwc4FlN-7Hv_7JrnOUwPePH6PMWZJUxrAL55D-IO40"

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(`Missing Supabase environment variables: ${supabaseUrl}, ${supabaseAnonKey}`);
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)