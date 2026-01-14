// Type definitions for portfolio website

export interface Project {
  id: string
  title: string
  description: string
  image: string
  points: string[]
  stack: string[]
  links: {
    live?: string
    github?: string
  }
}

export interface Experience {
  id: string
  company: string
  period: string
  image: string
  description: string[]
}

export interface Skill {
  category: string
  icon: string
  items: string[]
}

export interface PersonalInfo {
  name: string
  role: string
  intro: string
  profileImage: string
  links: {
    email: string
    github: string
    blog: string
  }
}
