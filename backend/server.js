const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const {createClient} = require('@sanity/client')

dotenv.config() // load .env variables into process.env

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'default',
  dataset: process.env.SANITY_STUDIO_DATASET || 'default-dataset',
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.SANITY_STUDIO_TOKEN || 'secret',
})

const app = express()
const PORT = process.env.PORT || 3333

const allowedOrigin = process.env.WEBSITE // only allow request from my homepage
app.use(
  cors({
    origin: allowedOrigin,
    methods: ['GET'],
    credentials: true,
  }),
)

// API route to fetch all projects from Sanity
app.get('/api/projects', async (req, res) => {
  try {
    const projects = await client.fetch(
      '*[_type == "post"] | order(publishedAt desc) {..., "slug": slug.current}',
    ) // fetch Sanity data
    res.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    res.status(500).json({error: 'Failed to fetch projects'})
  }
})

// fetch data for a specific project
app.get('/api/projects/:slug', async (req, res) => {
  const {slug} = req.params
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {..., "slug": slug.current, "categories": categories[] -> title}`
    const project = await client.fetch(query, {slug})
    res.json(project)
  } catch (error) {
    console.error('Error fetching project', error)
    res.status(500).json({error: 'failed to fetch project'})
  }
})

// start server
// app.listen(PORT, () => {
//   console.log(`🚀 Backend running on http://localhost:${PORT}`)
// })
