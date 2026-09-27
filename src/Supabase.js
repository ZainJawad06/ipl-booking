import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://aqsbrbspkhzcyaoqwtlw.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxc2JyYnNwa2h6Y3lhb3F3dGx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA0MjYzNzQsImV4cCI6MjEwNjAwMjM3NH0.Eb9hVQdBactGxIaLePqMUPbBLdCTINbyPG8DxGUiBWQ";

export const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
