import About from './pages/About.vue'
import Resume from './pages/Resume.vue'
import Single from './pages/Single.vue'
import Work from './pages/Work.vue'
import Contact from './pages/Contact.vue'
import Home from './pages/Home.vue'

export const routes = [
  { name: 'home', path: '/', component: Home },
  { name: 'about', path: '/about', component: About },
  { name: 'resume', path: '/resume', component: Resume },
  { name: 'Work', path: '/work', component: Work },
  { name: 'Contact', path: '/contact', component: Contact },
  { name: 'single', path: '/post/:slug', component: Single },
  { path: '*', component: Home }
]
