// eslint-disable-next-line @typescript-eslint/no-var-requires
const axios = require('axios')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const yaml = require('js-yaml')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs')

// Generated using PostMan
const accessToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsc3cwaHQ3NDAwMDE5ZW5saXZ2c3N6cGkiLCJpYXQiOjE3MDk1MTY0MDl9.5SaSx1hTzdhY_IQcAbpDAA8IGHjNAAMiC5j5lzXalEg'

// eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
interface CombinedData {
  [key: string]: unknown[]
}

const API_URL = 'http://localhost:3000/api'
const slugArray = [
  'new-one-2',
  'how-to-train-your-dragon-1',
  'the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6',
  'this-is-my-article-1',
  'We-need-to-navigate-the-virtual-SSL-transmitter!-120833',
  'Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive!-120803',
]
const commentId = '55'
const usernameArray = ['Gerome', 'username_1']

async function login(username: string, password: string): Promise<string> {
  try {
    const response = await axios.post(
      'http://localhost:3000/login',
      { username, password },
      { headers: { Accept: 'application/json', Authorization: `Bearer ${accessToken}` } },
    )
    // Log detailed information about the response
    console.log('Full response:', response)
    console.log('Response status:', response.status)
    console.log('Response headers:', response.headers)
    console.log('Response data:', response.data)

    // Check if the response is HTML
    if (response.headers['content-type']?.includes('text/html')) {
      console.log('HTML response. Bearer Token:', accessToken)
    }

    // Check if the token is present in the response headers or data
    if (accessToken) {
      return accessToken
    } else {
      console.error('Login failed: Token not found in response')
      return Promise.reject('Login failed: Token not found')
    }
  } catch (error) {
    let errorMessage = 'Login failed!'
    if (error instanceof Error) {
      errorMessage = error.message
    }
    console.error(errorMessage)
    return Promise.reject(errorMessage)
  }
}

async function fetchDataFromEndpoints() {
  try {
    // Login to obtain the authToken
    const authToken = await login('user518@testing.com', 'Testing151!')
    // Save the authToken for future use
    fs.writeFileSync('authToken.txt', authToken)

    // Example API endpoints with their corresponding HTTP methods
    const apiEndpoints = [
      // Register a new user
      {
        url: `${API_URL}/users`,
        method: 'post',
        payload: {
          user: {
            email: 'user521@testing.com',
            password: 'Testing181!',
            username: 'user521',
          },
        },
      },

      // Login
      {
        url: `${API_URL}/user`,
        method: 'get',
        payload: {
          user: {
            email: 'user518@testing.com',
            password: 'Testing151!',
          },
        },
      },

      // Get current user
      { url: `${API_URL}/user`, method: 'get' },

      // Update current user
      {
        url: `${API_URL}/user`,
        method: 'put',
        payload: {
          user: {
            email: 'user518_updated@testing.com',
          },
        },
      },

      // Get recent articles from users you follow
      /* Parameters:
      offset = 2,
      limit = 3
      */
      { url: `${API_URL}/articles/feed?offset=2&limit=3`, method: 'get' },

      // Get recent articles globally
      /* Parameters:
      tag = 'Dicta',
      author = 'Andrey Esteban',
      favorited = 'user518'
      */
      {
        url: `${API_URL}/articles?tag=Dicta&author=Andrey%20Esteban&favorited=user518`,
        method: 'get',
      },

      // Create an article
      {
        url: `${API_URL}/articles`,
        method: 'post',
        payload: {
          article: {
            title: 'The best flowers by post: Delight delivered to your doorstep',
            description:
              'Whether you’re wishing someone a happy birthday, good luck or sending roses just because, a stunning bouquet sometimes speaks louder than words.',
            body: 'There are plenty of avenues you can take to send your loved ones (or yourself) fresh arrangements without even leaving the house. Some companies are more conventional and hand deliver blooms in vases, some send blossoms in a letterbox-shaped package and many are tapping into the increasing popularity of subscription services — by sending you the most in-season flowers on a weekly or monthly basis throughout the year.',
            tagList: ['Flowers', 'Delivery'],
          },
        },
      },

      // Get an article
      /* Parameters:
      slug = 'new-one-2'
      */
      { url: `${API_URL}/articles/${slugArray[0]}`, method: 'get' },

      // Update an article
      /* Parameters:
      slug = 'how-to-train-your-dragon-1'
      */
      {
        url: `${API_URL}/articles/${slugArray[1]}`,
        method: 'put',
        payload: {
          article: {
            body: 'with enough food',
          },
        },
      },

      // Delete an article
      /* Parameters:
      slug = 'the-best-flowers-by-post:-delight-delivered-to-your-doorstep-6'
      */
      { url: `${API_URL}/articles/${slugArray[2]}`, method: 'delete' },

      // Favorite an article
      /* Parameters:
      slug = 'this-is-my-article-1'
      */
      {
        url: `${API_URL}/articles/${slugArray[3]}/favorite`,
        method: 'post',
        payload: {
          article: {
            favorited: true,
          },
        },
      },

      // Unfavorite an article
      /* Parameters:
      slug = 'We-need-to-navigate-the-virtual-SSL-transmitter!-120833'
      */
      {
        url: `${API_URL}/articles/${slugArray[4]}/favorite`,
        method: 'delete',
        payload: {
          article: {
            favorited: false,
          },
        },
      },

      // Get all comments for an article
      /* Parameters:
      slug = 'new-one-2'
      */
      { url: `${API_URL}/articles/${slugArray[0]}/comments`, method: 'get' },

      // Create a comment for an article
      /* Parameters:
      slug = 'Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive!-120803',
      */
      {
        url: `${API_URL}/articles/${slugArray[5]}/comments`,
        method: 'post',
        payload: {
          comment: {
            body: 'This is my first comment.',
          },
        },
      },

      // Delete a comment for an article
      /* Parameters:
      slug = 'Use-the-bluetooth-TCP-capacitor-then-you-can-reboot-the-open-source-hard-drive!-120803',
      commentId = 55
      */
      {
        url: `${API_URL}/articles/${slugArray[5]}/comments/${commentId}`,
        method: 'delete',
      },

      // Get a profile
      /* Parameters:
      USERNAME = 'Gerome'
      */
      { url: `${API_URL}/profiles/${usernameArray[0]}`, method: 'get' },

      // Follow a user
      /* Parameters:
      USERNAME = 'username_1'
      */
      {
        url: `${API_URL}/profiles/${usernameArray[1]}/follow`,
        method: 'post',
        payload: { following: true },
      },

      // Unfollow a user
      /* Parameters:
      USERNAME = 'username_1'
      */
      {
        url: `${API_URL}/profiles/${usernameArray[1]}/follow`,
        method: 'delete',
        payload: { following: false },
      },

      // Get all tags
      { url: `${API_URL}/tags`, method: 'get' },
    ]

    const combinedData: CombinedData = {}

    // Fetch data from each endpoint
    for (const { url, method, payload } of apiEndpoints) {
      let headers = {}

      // Add authorization header
      headers = { Authorization: `Bearer ${authToken}` }

      let response

      try {
        switch (method) {
          case 'get':
            response = await axios.get(url, { headers })
            break
          case 'post':
            response = await axios.post(url, payload, { headers })
            break
          case 'put':
            response = await axios.put(url, payload, { headers })
            break
          case 'delete':
            response = await axios.delete(url, { data: payload, headers })
            break
          default:
            console.error(`Unsupported HTTP method: ${method}`)
            return
        }

        // Log detailed information about the response
        console.log('Full response:', response)
        console.log('Response status:', response.status)
        console.log('Response headers:', response.headers)
        console.log('Response data:', response.data)

        if ([200, 201].includes(response.status)) {
          // Extract resource name from the endpoint
          const resourceName = url.split('/').pop()

          // Add data to combined object
          combinedData[resourceName!] = response.data
        } else {
          console.error(`Error: ${response.status} - ${response.statusText}`)
          return
        }
      } catch (error) {
        console.error('Error during request:', error)
        console.error('Full error object:', (error as Error).message)
        return
      }
    }

    // Convert combined data to YAML
    const yamlContent = yaml.dump(combinedData, { flowLevel: 2 })

    // Save YAML to file
    fs.writeFileSync('output.yaml', yamlContent)
    console.log('output.yaml generated successfully.')
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`)
    } else {
      console.error(`Unexpected error: ${String(error)}`)
    }
  }
}

// Call the function to fetch data from multiple endpoints and generate a YAML file
void fetchDataFromEndpoints()
