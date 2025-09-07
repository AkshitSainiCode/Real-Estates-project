// store/projectStore.js
import { create } from 'zustand'

export const useProjectStore = create((set, get) => ({
  projects: [],
  loading: false,
  error: null,
  
  fetchProjects: async (cityName) => {
    set({ loading: true, error: null })
    
    try {
      // ✅ Fixed: Use correct API route path
      const response = await fetch(`/api/projects/${cityName}`)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      
      // Check if response is JSON
      const contentType = response.headers.get("content-type")
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON")
      }
      
      const data = await response.json()
      
      if (data.error) {
        throw new Error(data.error)
      }
      
      // Ensure projects array exists
      const projects = data.projects || []
      
      // ✅ Incremental loading simulation
      for (let i = 0; i < projects.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500)) // 500ms delay
        set(state => ({
          projects: [...state.projects, projects[i]]
        }))
      }
      
      set({ loading: false })
    } catch (error) {
      console.error('Fetch projects error:', error)
      set({ error: error.message, loading: false })
    }
  },
  
  clearProjects: () => {
    set({ projects: [], error: null })
  }
}))